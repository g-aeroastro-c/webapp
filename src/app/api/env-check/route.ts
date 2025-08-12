import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'present' : 'missing',
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'present' : 'missing',
  serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'present' : 'missing',
    admins: process.env.ALLOWLIST_ADMINS || '',
  });
}
