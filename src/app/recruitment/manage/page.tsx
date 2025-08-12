import { redirect } from 'next/navigation'

export default function ManageRecruitment() {
  // Single source of truth lives at /admin
  redirect('/admin')
}
