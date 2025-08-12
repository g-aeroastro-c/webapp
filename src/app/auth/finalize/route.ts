import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET() {
  // Await cookies() per Next.js dynamic API requirement
  const store = await cookies();
  const accessToken = store.get('sb-access-token')?.value;
  const refreshToken = store.get('sb-refresh-token')?.value;
  if (!accessToken || !refreshToken) {
    return NextResponse.redirect(new URL('/signin?err=nosession', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'));
  }
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    global: { headers: { Authorization: `Bearer ${accessToken}` } }
  });
  const { data: userData } = await supabase.auth.getUser();
  const user = userData.user;
  const email = user?.email || null;
  if (user && email) {
    // Determine admin status based on ALLOWLIST_ADMINS env list (server-side only)
    const admins = (process.env.ALLOWLIST_ADMINS || '').split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
    const makeAdmin = admins.includes(email.toLowerCase());
    // Upsert profile (RLS allows self insert/update). If making admin, rely on current RLS (consider tightening later).
    await supabase.from('profiles').upsert({
      id: user.id,
      email,
      full_name: user.user_metadata?.full_name || user.user_metadata?.name || null,
      is_admin: makeAdmin ? true : undefined
    }, { onConflict: 'id' });

    const res = NextResponse.redirect(new URL('/dashboard', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'));
  // Set after awaiting cookies (store is immutable; use response cookie API)
  res.cookies.set({ name: 'gaac-email', value: email, httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/' });
    return res;
  }
  return NextResponse.redirect(new URL('/signin?err=noemail', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'));
}
