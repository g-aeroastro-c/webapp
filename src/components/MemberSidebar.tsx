"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { LogOut, LayoutDashboard, FolderGit2, Shield, Users, Menu, X } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { logAudit } from '@/lib/audit';

interface Props {
  email: string;
  isAdmin: boolean;
  role: string;
}

export function MemberSidebar({ email, isAdmin, role }: Props) {
  const [open, setOpen] = useState(true);

  const handleSignOut = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        await logAudit({ type: 'signout', user_id: session.user.id, email: session.user.email || undefined });
      }
    } catch {/* ignore */}
    try { await supabase.auth.signOut(); } catch {/* ignore */}
    // clear cookie best-effort
    fetch('/api/session-cookie', { method: 'DELETE' }).catch(()=>{});
    window.location.href = '/signin';
  };

  return (
    <>
      <aside className={`fixed inset-y-0 left-0 z-40 bg-[#121415]/95 backdrop-blur-md border-r border-white/5 w-60 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>\n        <div className="h-16 flex items-center justify-between px-4 border-b border-white/5">
          <Link href="/dashboard" className="text-white font-semibold tracking-wide text-sm">GAAC</Link>
          <button aria-label={open ? 'Collapse sidebar' : 'Expand sidebar'} onClick={() => setOpen(!open)} className="text-slate-400 hover:text-white transition md:hidden">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 text-sm">
          <SidebarLink href="/dashboard" icon={<LayoutDashboard className="w-4 h-4" />}>Dashboard</SidebarLink>
          <SidebarLink href="/projects" icon={<FolderGit2 className="w-4 h-4" />}>Projects</SidebarLink>
          {isAdmin && <SidebarLink href="/admin/allowlist" icon={<Shield className="w-4 h-4" />}>Allowlist</SidebarLink>}
          {isAdmin && <SidebarLink href="/recruitment/manage" icon={<Users className="w-4 h-4" />}>Recruitment</SidebarLink>}
        </nav>
        <div className="border-t border-white/5 p-4 text-[11px] text-slate-400 space-y-2">
          <div className="truncate" title={email}>{email}</div>
          {isAdmin && <div className="text-emerald-400 font-medium">ADMIN</div>}
          {!isAdmin && role && role !== 'member' && <div className="text-cyan-300 font-medium uppercase text-[10px]">{role}</div>}
          <button onClick={handleSignOut} className="mt-2 w-full inline-flex items-center justify-center gap-2 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-slate-200 text-xs transition">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>
      {/* Mobile toggle button */}
      <button onClick={() => setOpen(!open)} className={`fixed top-4 left-4 z-30 md:hidden p-2 rounded-lg bg-white/10 border border-white/10 text-white backdrop-blur ${open ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition`}> <Menu className="w-5 h-5" /> </button>
    </>
  );
}

function SidebarLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link href={href} className="flex items-center gap-2 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition group">
      <span className="text-cyan-300 group-hover:text-cyan-200">{icon}</span>
      <span>{children}</span>
    </Link>
  );
}
