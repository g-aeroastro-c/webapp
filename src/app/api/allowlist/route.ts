import { NextRequest, NextResponse } from 'next/server';
import { getAllowedEmails, addAllowedEmail, removeAllowedEmail, isAdmin } from '@/lib/allowlist';

function getRequesterEmail(req: NextRequest): string | null {
  const email = req.cookies.get('gaac-email')?.value;
  if (email) return email;
  return null;
}

export async function GET() {
  const list = await getAllowedEmails();
  return NextResponse.json({ emails: list });
}

export async function POST(req: NextRequest) {
  const requester = getRequesterEmail(req);
  if (!isAdmin(requester)) {
    return NextResponse.json({ error: 'forbidden' }, { status: 403 });
  }
  const { email } = await req.json();
  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  }
  const ok = await addAllowedEmail(email);
  return NextResponse.json({ success: ok });
}

export async function DELETE(req: NextRequest) {
  const requester = getRequesterEmail(req);
  if (!isAdmin(requester)) {
    return NextResponse.json({ error: 'forbidden' }, { status: 403 });
  }
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');
  if (!email) return NextResponse.json({ error: 'missing_email' }, { status: 400 });
  const ok = await removeAllowedEmail(email);
  return NextResponse.json({ success: ok });
}
