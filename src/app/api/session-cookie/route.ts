import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAllowedEmails } from '@/lib/allowlist';

// Restrict admin to a single email as requested
const SOLE_ADMIN_EMAIL = 'aeroastro_vzg@gitam.in';

function unauthorized(reason: string) {
  return NextResponse.json({ error: reason }, { status: 401 });
}

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization');
  if (!auth?.startsWith('Bearer ')) return unauthorized('missing_token');
  const token = auth.slice(7);
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    global: { headers: { Authorization: `Bearer ${token}` } }
  });
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user?.email) return unauthorized('invalid_token');
  const allowedList = await getAllowedEmails();
  const emailLower = user.email.toLowerCase();
  const isAdmin = emailLower === SOLE_ADMIN_EMAIL;
  if (!isAdmin && !allowedList.includes(emailLower)) return unauthorized('not_allowlisted');

  // Ensure profile exists (upsert minimal row) & capture role
  let role = 'member';
  interface UserMeta { full_name?: string; name?: string; avatar_url?: string; picture?: string }
  try {
    const meta: UserMeta = user.user_metadata as UserMeta;
    const { data: existing } = await supabase.from('profiles').select('id, role, is_admin').eq('id', user.id).limit(1);
    if (!existing || existing.length === 0) {
      const preferredName = meta.full_name || meta.name || user.email?.split('@')[0] || null;
      const avatar = meta.avatar_url || meta.picture || null;
  const { data: inserted } = await supabase.from('profiles').insert({
        id: user.id,
        email: user.email,
        full_name: preferredName,
        avatar_url: avatar,
        role: isAdmin ? 'admin' : 'member',
        is_admin: isAdmin
      }).select('role');
      if (inserted && inserted[0]) role = inserted[0].role || role;
      else if (isAdmin) role = 'admin';
    } else {
      role = existing[0].role || role;
      // Ensure admin flag/role are set for the sole admin
      if (isAdmin && (!existing[0].is_admin || existing[0].role !== 'admin')) {
        const { data: updated } = await supabase.from('profiles')
          .update({ is_admin: true, role: 'admin' })
          .eq('id', user.id)
          .select('role');
        if (updated && updated[0]) role = updated[0].role || role;
        else role = 'admin';
      }
    }
  } catch {/* ignore profile upsert errors */}

  const res = NextResponse.json({ ok: true, role });
  res.cookies.set({ name: 'gaac-email', value: user.email, httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/' });
  res.cookies.set({ name: 'gaac-role', value: role, httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/' });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set({ name: 'gaac-email', value: '', path: '/', maxAge: 0 });
  return res;
}
