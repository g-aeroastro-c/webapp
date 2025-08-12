import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// NOTE: We now treat the presence of the gaac-email cookie (set only after server allowlist verification)
// as the authoritative signal of an authenticated + allowlisted member.
// If stronger server-side verification is needed, introduce a signed cookie or JWT validation here.

// Protected route prefixes
const PROTECTED_PREFIXES = ['/dashboard', '/recruitment/manage', '/admin'];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isProtected = PROTECTED_PREFIXES.some(p => pathname.startsWith(p));
  if (!isProtected) return NextResponse.next();

  // Require our custom verified cookie instead of sb-access-token (which may not exist client-only auth).
  const email = req.cookies.get('gaac-email')?.value;
  if (!email) {
    const url = req.nextUrl.clone();
    if (pathname.startsWith('/admin')) {
      url.pathname = '/admin-check';
    } else {
      url.pathname = '/access-denied';
      url.searchParams.set('reason', 'unauthenticated');
    }
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  // Role-based authorization for certain paths
  const role = req.cookies.get('gaac-role')?.value;
  if (pathname.startsWith('/admin')) {
    const emailLower = (email || '').toLowerCase();
    // Strict admin gate: only this email may access /admin
    if (emailLower !== 'aeroastro_vzg@gitam.in') {
      const url = req.nextUrl.clone();
      url.pathname = '/access-denied';
      url.searchParams.set('reason', 'admin');
      return NextResponse.redirect(url);
    }
    // Optional: also require role cookie to be admin (defense-in-depth)
    if (role !== 'admin') {
      const url = req.nextUrl.clone();
      url.pathname = '/access-denied';
      url.searchParams.set('reason', 'admin');
      return NextResponse.redirect(url);
    }
  }
  if (pathname.startsWith('/recruitment/manage') && role !== 'admin' && role !== 'executive') {
    const url = req.nextUrl.clone();
    url.pathname = '/access-denied';
    url.searchParams.set('reason', 'admin');
    return NextResponse.redirect(url);
  }

  // Domain enforcement (defense-in-depth)
  const domain = process.env.NEXT_PUBLIC_ALLOWED_EMAIL_DOMAIN;
  if (email) {
    if (domain && !email.toLowerCase().endsWith('@' + domain)) {
      const url = req.nextUrl.clone();
      url.pathname = '/access-denied';
      url.searchParams.set('reason', 'domain');
      return NextResponse.redirect(url);
    }
    // We no longer re-check allowlist here to avoid blocking on DB/API; trust cookie issuance.
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/recruitment/manage/:path*', '/admin/:path*']
};
