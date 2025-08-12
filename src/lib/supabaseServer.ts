import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';
import type { CookieOptions } from '@supabase/ssr';

// Server-side Supabase client (uses anon for auth context; service role only when explicitly needed)
export async function getServerSupabaseClient() {
  const cookieStore = await cookies();
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) { return cookieStore.get(name)?.value; },
      set(name: string, value: string, options: CookieOptions) { cookieStore.set({ name, value, ...options }); },
      remove(name: string, options: CookieOptions) { cookieStore.set({ name, value: '', ...options }); }
    }
  });
}

export async function getServiceRoleClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // MUST stay server-only
  if (!serviceKey) {
    console.warn('Missing SUPABASE_SERVICE_ROLE_KEY – profile init will run with anon privileges.');
  }
  // dynamic import to avoid bundling service key into client
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(supabaseUrl, serviceKey || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
}
