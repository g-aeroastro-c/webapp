import { NextResponse } from 'next/server';

// Redirect back to sign-in page (client effect will process session & set cookie via API)
export async function GET(req: Request) {
  const url = new URL(req.url);
  const redirect = url.searchParams.get('redirect') || '/dashboard';
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return NextResponse.redirect(new URL(`/signin?auth=1&redirect=${encodeURIComponent(redirect)}`, base));
}
