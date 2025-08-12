"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

function AdminCheckContent() {
  const params = useSearchParams();
  const router = useRouter();
  const [redirect, setRedirect] = useState('/admin');

  useEffect(() => {
    const r = params.get('redirect');
    if (r) setRedirect(r);
  }, [params]);

  const goSignin = () => {
    router.push(`/signin?redirect=${encodeURIComponent(redirect)}`);
  };

  return (
    <main className="relative z-30 max-w-xl mx-auto px-4 md:px-6 pt-28 pb-10">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-white">Who are you?</h1>
        <p className="mt-2 text-slate-300 text-sm">This area is for GAAC admins only. Please sign in with your GITAM email.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={goSignin}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold shadow hover:from-teal-600 hover:to-emerald-600 transition-colors"
          >
            <span>🔑</span>
            <span>I&apos;m an Admin</span>
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-slate-200 bg-white/5 hover:bg-white/10 text-sm"
          >
            <span>🏠</span>
            <span>I&apos;m not an Admin</span>
          </Link>
        </div>
        <p className="mt-4 text-xs text-slate-400">
          Note: Only allowlisted emails (or approved domains) can access the admin hub.
        </p>
      </motion.div>
    </main>
  );
}

export default function AdminCheckPage() {
  return (
    <Suspense fallback={
      <main className="relative z-30 max-w-xl mx-auto px-4 md:px-6 pt-28 pb-10">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <div className="animate-pulse">
            <div className="h-8 bg-white/10 rounded mb-4"></div>
            <div className="h-4 bg-white/10 rounded mb-6"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="h-12 bg-white/10 rounded-xl"></div>
              <div className="h-12 bg-white/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </main>
    }>
      <AdminCheckContent />
    </Suspense>
  );
}
