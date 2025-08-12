"use client";
import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AccessDeniedPage() {
  const search = useSearchParams();
  const reason = search.get('reason');
  const redirect = search.get('redirect') || '/';
  const router = useRouter();

  const reasonText: Record<string, string> = {
    unauthenticated: 'You need to sign in to access that page.',
    domain: 'Your email domain is not permitted.',
  allowlist: 'Your email address is not on the approved allowlist. Please contact an administrator.',
  admin: 'Administrator privileges required.'
  };

  return (
    <main className="max-w-md mx-auto px-4 py-24 text-center">
      <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }} className="space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-500/10 border border-red-400/30 text-red-300 text-xs font-semibold">ACCESS RESTRICTED</div>
        <h1 className="text-3xl font-bold text-white">Access Denied</h1>
        <p className="text-slate-400 text-sm leading-relaxed">{reasonText[reason || 'unauthenticated'] || 'Access blocked.'}</p>
        <div className="flex flex-col gap-3 pt-4">
          <Link href="/signin" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white hover:from-cyan-400 hover:to-blue-500 transition">Go to Sign In</Link>
          <button onClick={() => router.replace(redirect)} className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white hover:border-cyan-400/40 transition">Return</button>
        </div>
      </motion.div>
    </main>
  );
}
