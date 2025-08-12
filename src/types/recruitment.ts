export type ApplicationStatus =
  | 'Submission Accepted'
  | 'Shortlisted'
  | 'Get ready for an interview'
  | 'Selected'
  | 'Not selected'

export interface RecruitmentApplication {
  id: string
  created_at: string
  full_name: string
  email: string
  phone?: string | null
  registration_number?: string | null
  branch?: string | null
  whatsapp_phone?: string | null
  year: string
  team_preference: string
  skills?: string | null
  motivation?: string | null
  resume_url?: string | null
  portfolio_url?: string | null
  team_specific?: Record<string, unknown> | null
  status: ApplicationStatus
  reviewer_notes?: string | null
  reviewer_email?: string | null
}

export const TEAM_OPTIONS = [
  'Stargazers (Astronomy, Space and Rocketry)',
  'Robusta (Robotics & Automation)',
  'Programmers (Coding & Development)',
  'Core Team – Content Writing',
  'Core Team – Graphic Designing',
  'Core Team – Photography/Videography',
] as const
export const YEAR_OPTIONS = ['First Year', 'Second Year', 'Pre-Final Year'] as const
export const STATUS_OPTIONS: ApplicationStatus[] = [
  'Submission Accepted',
  'Shortlisted',
  'Get ready for an interview',
  'Selected',
  'Not selected',
]
