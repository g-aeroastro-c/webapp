"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RecruitmentPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to recruitment closed page
    router.replace('/recruitment/closed');
  }, [router]);

  // Show loading state while redirecting
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white text-lg">Redirecting...</p>
      </div>
    </div>
  );
}
