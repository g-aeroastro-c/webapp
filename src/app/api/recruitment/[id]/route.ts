import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Update application status/notes (admin only)
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const role = req.cookies.get('gaac-role')?.value
  if (role !== 'admin') {
    return NextResponse.json({ error: 'forbidden' }, { status: 403 })
  }

  const { id } = await params
  const body = await req.json().catch(() => null)
  if (!id || !body) return NextResponse.json({ error: 'bad_request' }, { status: 400 })

  const updates: Partial<{ status: string; reviewer_notes: string; reviewer_email: string }> = {}
  if (typeof body.status === 'string') updates.status = body.status
  if (typeof body.reviewer_notes === 'string') updates.reviewer_notes = body.reviewer_notes
  if (typeof body.reviewer_email === 'string') updates.reviewer_email = body.reviewer_email

  // Use anon client with admin JWT for RLS compliance
  const authHeader = req.headers.get('authorization') || ''
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { global: { headers: { Authorization: authHeader } } }
  )
  
  const { data, error } = await supabase
    .from('recruitment_applications')
    .update(updates)
    .eq('id', id)
    .select('*')
    .single()

  if (error) {
    console.error('Update failed:', error)
    return NextResponse.json({ error: 'update_failed', details: error.message }, { status: 500 })
  }
  return NextResponse.json({ application: data })
}
