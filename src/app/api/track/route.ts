import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Track application by email (public endpoint)
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body || !body.email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const email = String(body.email).trim().toLowerCase()
  if (!email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
  }

  try {
    // Use anon client for public tracking
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { data, error } = await supabase
      .from('recruitment_applications')
      .select('id,created_at,full_name,email,team_preference,status,year')
      .eq('email', email)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Track query error:', error)
      return NextResponse.json({ error: 'Unable to fetch applications' }, { status: 500 })
    }

    // Return applications without sensitive reviewer data
    const applications = (data || []).map(app => ({
      id: app.id,
      created_at: app.created_at,
      full_name: app.full_name,
      email: app.email,
      team_preference: app.team_preference,
      status: app.status,
      year: app.year,
      submitted_date: new Date(app.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }))

    return NextResponse.json({ applications })
  } catch (error) {
    console.error('Track error:', error)
    return NextResponse.json({ error: 'Service unavailable' }, { status: 500 })
  }
}
