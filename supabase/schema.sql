-- Supabase SQL schema for GAAC webapp
-- Run this in your Supabase project's SQL editor.

-- Helper: non-recursive admin check to avoid policy self-references
create or replace function public.is_admin(uid uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((select is_admin from public.profiles where id = uid), false);
$$;

grant execute on function public.is_admin(uuid) to anon, authenticated;

-- 1) profiles table (linked to auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  full_name text,
  avatar_url text,
  role text not null default 'member', -- 'member' | 'executive' | 'admin'
  is_admin boolean not null default false,
  created_at timestamp with time zone not null default now()
);

alter table public.profiles enable row level security;

-- Policies: users can manage their own profile; admins can read/write all.
drop policy if exists "profiles self read" on public.profiles;
create policy "profiles self read" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "profiles self upsert" on public.profiles;
create policy "profiles self upsert" on public.profiles
  for insert to authenticated with check (auth.uid() = id);

drop policy if exists "profiles self update" on public.profiles;
create policy "profiles self update" on public.profiles
  for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

-- Allow admins to manage anyone
-- Intentionally no admin read/write policies on profiles to avoid recursion.

-- 2) allowed_emails (optional fallback to JSON exists in app)
create table if not exists public.allowed_emails (
  email text primary key,
  created_at timestamp with time zone not null default now()
);

alter table public.allowed_emails enable row level security;

-- Read allowed for authenticated; write only for admins
drop policy if exists "allowed_emails read" on public.allowed_emails;
create policy "allowed_emails read" on public.allowed_emails
  for select to authenticated using (true);

drop policy if exists "allowed_emails modify admin" on public.allowed_emails;
create policy "allowed_emails modify admin" on public.allowed_emails
  for all using (public.is_admin(auth.uid()))
  with check (public.is_admin(auth.uid()));

-- 3) audit_events
create table if not exists public.audit_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone not null default now(),
  type text not null, -- 'signin' | 'signout' | 'onboarding_complete'
  user_id uuid references auth.users(id),
  email text,
  ip text,
  ua text
);

alter table public.audit_events enable row level security;

-- Anyone authenticated can insert their own audit events; admins can read all
drop policy if exists "audit insert auth" on public.audit_events;
create policy "audit insert auth" on public.audit_events
  for insert to authenticated with check (true);

drop policy if exists "audit read admin" on public.audit_events;
create policy "audit read admin" on public.audit_events
  for select using (public.is_admin(auth.uid()));

-- 4) recruitment_applications
create table if not exists public.recruitment_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone not null default now(),
  full_name text not null,
  email text not null,
  phone text,
  -- New applicant fields
  registration_number text,
  branch text,
  whatsapp_phone text,
  year text not null,
  team_preference text not null,
  skills text,
  motivation text,
  resume_url text,
  portfolio_url text,
  -- Dynamic, team-specific answers
  team_specific jsonb,
  status text not null default 'submitted',
  reviewer_notes text,
  reviewer_email text
);

alter table public.recruitment_applications enable row level security;

-- Public can insert (applications), admins can read/update
drop policy if exists "recruitment insert public" on public.recruitment_applications;
create policy "recruitment insert public" on public.recruitment_applications
  for insert to anon, authenticated with check (true);

drop policy if exists "recruitment read admin" on public.recruitment_applications;
create policy "recruitment read admin" on public.recruitment_applications
  for select using (public.is_admin(auth.uid()));

drop policy if exists "recruitment update admin" on public.recruitment_applications;
create policy "recruitment update admin" on public.recruitment_applications
  for update using (public.is_admin(auth.uid()))
  with check (public.is_admin(auth.uid()));

-- Useful indices
create index if not exists idx_recruitment_email on public.recruitment_applications (email);
create index if not exists idx_recruitment_status on public.recruitment_applications (status);
create index if not exists idx_recruitment_team on public.recruitment_applications (team_preference);

-- Backfill-safe alters when table already exists
alter table public.recruitment_applications
  add column if not exists registration_number text,
  add column if not exists branch text,
  add column if not exists whatsapp_phone text,
  add column if not exists team_specific jsonb default '{}'::jsonb;
