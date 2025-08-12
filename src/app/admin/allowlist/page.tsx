"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { motion } from 'framer-motion';

export default function AllowlistAdminPage() {
  const [emails, setEmails] = useState<string[]>([]);
  const [newEmail, setNewEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const router = useRouter();

  // Admin guard
  useEffect(() => {
    const guard = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { router.replace('/access-denied?reason=unauthenticated&redirect=/admin/allowlist'); return; }
      const { data: profileRows } = await supabase.from('profiles').select('is_admin').eq('id', session.user.id).limit(1);
      const isAdmin = profileRows && profileRows[0]?.is_admin;
      if (!isAdmin) { router.replace('/access-denied?reason=admin'); return; }
      setAuthChecked(true);
    };
    guard();
  }, [router]);

  const load = async () => {
    const res = await fetch('/api/allowlist');
    const json = await res.json();
    setEmails(json.emails || []);
  };

  useEffect(() => { if (authChecked) load(); }, [authChecked]);

  const add = async () => {
    setLoading(true); setError(null); setMessage(null);
    const res = await fetch('/api/allowlist', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: newEmail }) });
    if (!res.ok) { setError('Failed (need admin?)'); } else { setMessage('Added'); setNewEmail(''); await load(); }
    setLoading(false);
  };
  const remove = async (email: string) => {
    setLoading(true); setError(null); setMessage(null);
    const res = await fetch('/api/allowlist?email=' + encodeURIComponent(email), { method: 'DELETE' });
    if (!res.ok) { setError('Failed'); } else { setMessage('Removed'); await load(); }
    setLoading(false);
  };

  if (!authChecked) return <main className="relative z-30 max-w-xl mx-auto p-6 pt-28 text-slate-400 text-sm">Checking access...</main>;

  return (
  <main className="relative z-30 max-w-xl mx-auto p-6 pt-28 space-y-8">
      <motion.h1 initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} className="text-2xl font-bold text-white">Allowlist Administration</motion.h1>
      <div className="space-y-4">
        <div className="flex gap-2">
          <input value={newEmail} onChange={e=>setNewEmail(e.target.value)} placeholder="user@gitam.in" className="flex-1 px-3 py-2 rounded bg-white/10 text-white border border-white/20 focus:outline-none" />
          <button disabled={loading || !newEmail} onClick={add} className="px-4 py-2 rounded bg-cyan-600 hover:bg-cyan-500 text-white text-sm disabled:opacity-50">Add</button>
        </div>
        {error && <div className="text-sm text-red-400">{error}</div>}
        {message && <div className="text-sm text-green-400">{message}</div>}
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-white">Current Emails</h2>
        <ul className="space-y-1">
          {emails.map(e => (
            <li key={e} className="flex items-center justify-between px-3 py-2 bg-white/5 rounded border border-white/10 text-sm text-white">
              <span>{e}</span>
              <button disabled={loading} onClick={()=>remove(e)} className="text-red-400 hover:text-red-300 text-xs">Remove</button>
            </li>
          ))}
          {emails.length === 0 && <li className="text-xs text-slate-400">No entries.</li>}
        </ul>
      </div>
      <p className="text-xs text-slate-500">Access controlled by ALLOWLIST_ADMINS env var.</p>
    </main>
  );
}
