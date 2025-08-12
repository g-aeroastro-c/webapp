import { supabase } from './supabaseClient';
import fs from 'fs';
import path from 'path';

// Fallback JSON path
const jsonPath = path.join(process.cwd(), 'src', 'data', 'allowedEmails.json');

export async function getAllowedEmails(): Promise<string[]> {
  try {
    const { data, error } = await supabase.from('allowed_emails').select('email');
    if (!error && data) {
      return data.map(r => r.email.toLowerCase());
    }
  } catch { /* fallback to JSON */ }
  try {
    const raw = fs.readFileSync(jsonPath, 'utf-8');
    const arr: unknown = JSON.parse(raw);
    if (Array.isArray(arr)) return arr.map(e => String(e).toLowerCase());
  } catch { /* ignore */ }
  return [];
}

export async function addAllowedEmail(email: string) {
  email = email.toLowerCase();
  try {
    const { error } = await supabase.from('allowed_emails').insert({ email });
    if (!error) return true;
  } catch { /* ignore */ }
  try {
    const list = await getAllowedEmails();
    if (!list.includes(email)) {
      list.push(email);
      fs.writeFileSync(jsonPath, JSON.stringify(list, null, 2));
    }
    return true;
  } catch { return false; }
}

export async function removeAllowedEmail(email: string) {
  email = email.toLowerCase();
  try {
    const { error } = await supabase.from('allowed_emails').delete().eq('email', email);
    if (!error) return true;
  } catch { /* ignore */ }
  try {
    const list = await getAllowedEmails();
    const next = list.filter(e => e !== email);
    fs.writeFileSync(jsonPath, JSON.stringify(next, null, 2));
    return true;
  } catch { return false; }
}

export function isAdmin(email: string | null | undefined): boolean {
  if (!email) return false;
  const admins = process.env.ALLOWLIST_ADMINS?.split(',').map(e => e.trim().toLowerCase()).filter(Boolean) || [];
  return admins.includes(email.toLowerCase());
}
