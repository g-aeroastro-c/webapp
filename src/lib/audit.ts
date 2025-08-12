import { supabase } from './supabaseClient';

export interface AuditEvent {
  id?: string;
  user_id?: string;
  email?: string | null;
  type: 'signin' | 'signout' | 'onboarding_complete';
  ip?: string | null;
  ua?: string | null;
  created_at?: string;
}

export async function logAudit(event: AuditEvent) {
  try {
    await supabase.from('audit_events').insert({
      type: event.type,
      user_id: event.user_id,
      email: event.email,
      ip: event.ip ?? null,
      ua: event.ua ?? null,
    });
  } catch (e) {
    console.warn('Failed to record audit event', e);
  }
}
