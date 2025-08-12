import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Create new application (public: anyone can apply)
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'invalid_json' }, { status: 400 })

  const required = ['full_name', 'email', 'year', 'team_preference']
  for (const k of required) {
    if (!body[k] || typeof body[k] !== 'string') {
      return NextResponse.json({ error: `missing_${k}` }, { status: 400 })
    }
  }

  // Use anon client since RLS policy allows anon insertions
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const payload = {
    full_name: String(body.full_name || '').trim(),
    email: String(body.email || '').trim(),
    phone: body.phone ?? null,
    registration_number: body.registration_number ?? null,
    branch: body.branch ?? null,
    whatsapp_phone: body.whatsapp_phone ?? null,
    year: String(body.year || '').trim(),
    team_preference: String(body.team_preference || '').trim(),
    skills: body.skills ?? null,
    motivation: body.motivation ?? null,
    resume_url: body.resume_url ?? null,
    portfolio_url: body.portfolio_url ?? null,
    team_specific: (typeof body.team_specific === 'object' && body.team_specific !== null) ? body.team_specific : {},
    status: 'Submission Accepted' as const,
  }
  const { data, error } = await supabase
    .from('recruitment_applications')
    .insert(payload)
    .select('*')
    .single()

  if (error) {
    console.error('Application insert error', error)
    const errObj = error as unknown as { code?: string; message?: string }
    const msg = (errObj?.message || '').toLowerCase()
    let reason = 'insert_failed'
    let hint: string | undefined
    if (errObj?.code === '42P01' || msg.includes('relation') && msg.includes('does not exist')) {
      reason = 'table_missing'
      hint = 'Run supabase/schema.sql in your Supabase project to create the recruitment_applications table.'
    } else if (msg.includes('invalid api key') || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
      reason = 'env_missing'
      hint = 'Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local.'
    }
    return NextResponse.json({ error: reason, details: errObj?.message || null, code: errObj?.code || null, hint: hint || null }, { status: 500 })
  }
  return NextResponse.json({ application: data })
}

// List applications (admin only via gaac-role cookie)
export async function GET(req: NextRequest) {
  const role = req.cookies.get('gaac-role')?.value
  if (role !== 'admin') {
    return NextResponse.json({ error: 'forbidden' }, { status: 403 })
  }

  const url = new URL(req.url)
  const search = url.searchParams.get('search')?.trim() || ''
  const status = url.searchParams.get('status') || ''
  const team = url.searchParams.get('team') || ''
  const year = url.searchParams.get('year') || ''
  const sort = url.searchParams.get('sort') || 'created_at.desc'

  // Prefer using the user's JWT so RLS can validate profiles.is_admin without requiring service role.
  const authHeader = req.headers.get('authorization') || ''
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { global: { headers: { Authorization: authHeader } } }
  )
  let query = supabase
    .from('recruitment_applications')
    .select('id,created_at,full_name,email,year,team_preference,status,skills,motivation,reviewer_notes,registration_number,branch,phone,whatsapp_phone,resume_url,portfolio_url,team_specific', { count: 'exact' })

  if (status) query = query.eq('status', status)
  if (team) query = query.eq('team_preference', team)
  if (year) query = query.eq('year', year)

  if (search) {
    const pattern = `%${search.replace(/%/g, '\\%').replace(/_/g, '\\_')}%`
    // Search across key textual columns
    query = query.or(
      `full_name.ilike.${pattern},email.ilike.${pattern},skills.ilike.${pattern},motivation.ilike.${pattern}`
    )
  }

  const [columnRaw, directionRaw] = sort.split('.')
  const validSortCols = ['created_at', 'full_name'] as const
  const column = (validSortCols as readonly string[]).includes(columnRaw) ? columnRaw : 'created_at'
  const ascending = directionRaw === 'asc'
  query = query.order(column as 'created_at' | 'full_name', { ascending, nullsFirst: false })

  const { data, error } = await query
  if (error) {
    console.error('Admin list fetch_failed', error)
    const errObj = error as unknown as { code?: string; message?: string }
    const msg = (errObj?.message || '').toLowerCase()
    let reason = 'fetch_failed'
    let hint: string | undefined
    if (msg.includes('permission denied')) {
      reason = 'service_role_required'
      hint = 'Set SUPABASE_SERVICE_ROLE_KEY in .env.local so the server can read applications.'
    } else if (errObj?.code === '42P01' || msg.includes('relation') && msg.includes('does not exist')) {
      reason = 'table_missing'
      hint = 'Run supabase/schema.sql in your Supabase project to create the recruitment_applications table.'
    } else if (msg.includes('invalid api key') || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
      reason = 'env_missing'
      hint = 'Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local.'
    }
    const errCode = typeof (error as unknown as { code?: unknown })?.code === 'string' ? (error as unknown as { code?: string }).code : undefined
    return NextResponse.json({ error: reason, details: errObj?.message || null, code: errCode || null, hint: hint || null }, { status: 500 })
  }
  // Normalize legacy statuses to new labels so UI stays consistent
  const normalize = (s: string | null | undefined) => {
    switch ((s || '').toLowerCase()) {
      case 'submitted':
        return 'Submission Accepted'
      case 'shortlisted':
        return 'Shortlisted'
      case 'interview_scheduled':
        return 'Get ready for an interview'
      case 'accepted':
        return 'Selected'
      case 'rejected':
        return 'Not selected'
      default:
        return s || 'Submission Accepted'
    }
  }
  type AdminRow = {
    id: string; created_at: string; full_name: string; email: string; year: string; team_preference: string; status: string;
    skills?: string | null; motivation?: string | null; reviewer_notes?: string | null; registration_number?: string | null; branch?: string | null;
    phone?: string | null; whatsapp_phone?: string | null; resume_url?: string | null; portfolio_url?: string | null; team_specific?: Record<string, unknown> | null;
  }
  const normalized = (data as AdminRow[] | null | undefined)?.map((r) => ({ ...r, status: normalize(r.status) })) || []
  return NextResponse.json({ applications: normalized })
}
