"use client";

import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import axios from 'axios';
import Image from 'next/image';
import { Shield, CheckCircle, AlertCircle, Users, BookOpen, Rocket } from 'lucide-react';

function SignInContent() {
  const params = useSearchParams();
  const router = useRouter();
  const redirect = params.get('redirect') || '/dashboard';
  const [isSigningIn, setIsSigningIn] = useState(false);

  const signInWithGoogle = async () => {
    setIsSigningIn(true);
    // Enforce GITAM domain on the Google OAuth screen
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const callback = `${siteUrl}/auth/callback?redirect=${encodeURIComponent(redirect)}`;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: callback,
        queryParams: {
          // This hints Google to use a specific hosted domain
          hd: 'gitam.in',
          prompt: 'select_account',
        },
      },
    });
    if (error) {
      console.error('OAuth error:', error.message);
      setIsSigningIn(false);
    }
  };

  // After OAuth redirect back, if sb-access-token cookies exist, exchange for gaac cookies and move to redirect
  React.useEffect(() => {
    const authFlag = params.get('auth');
    if (authFlag === '1') {
      // Try to fetch Supabase session
      supabase.auth.getSession().then(async ({ data }) => {
        const session = data.session;
        const token = session?.access_token;
        if (token) {
          try {
            const res = await axios.post('/api/session-cookie', null, { headers: { Authorization: `Bearer ${token}` } });
            if (res.status === 200) {
              router.replace(redirect);
            }
          } catch (e) {
            console.error('Cookie exchange failed', e);
            setIsSigningIn(false);
          }
        }
      });
    }
  }, [params, redirect, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0C0D] via-[#151719] to-[#1C1E21] relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09C0F9]/5 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, #09C0F9 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      <main className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-lg w-full space-y-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Image
                    src="/gaacLogo.png"
                    alt="GAAC Logo"
                    width={80}
                    height={80}
                    className="h-20 w-20 transition-all duration-300"
                    priority
                  />
                </motion.div>
                <div className="absolute inset-0 rounded-full bg-[#09C0F9]/30 scale-150 opacity-0 animate-ping"></div>
                <div className="absolute inset-0 rounded-full bg-emerald-500/20 scale-125 opacity-0 animate-ping delay-500"></div>
              </div>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text text-transparent mb-4"
            >
              Welcome to GAAC
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-300 text-lg leading-relaxed"
            >
              GITAM Aero Astro Club
            </motion.p>
          </motion.div>

          {/* Main Sign In Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl"
          >
            {/* Instructions Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl mb-4">
                <Shield className="w-8 h-8 text-cyan-300" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Sign in with GITAM Account
              </h2>
              <p className="text-slate-400 text-sm">
                Use your official GITAM Google Workspace account to access the club
              </p>
            </div>

            {/* Instructions */}
            <div className="bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10 border border-cyan-400/20 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-cyan-200 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Important Instructions
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">
                    <strong className="text-white">Use your GITAM email:</strong> Your account must end with <code className="bg-white/10 px-1.5 py-0.5 rounded text-cyan-300">@gitam.in</code>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">
                    <strong className="text-white">Official accounts only:</strong> Personal Gmail accounts will not work
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">
                    <strong className="text-white">First time?</strong> You&apos;ll be asked to complete your profile after signing in
                  </p>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-gradient-to-r from-amber-500/10 via-transparent to-orange-500/10 border border-amber-400/20 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-amber-200 text-sm font-medium mb-1">Security Notice</p>
                  <p className="text-slate-300 text-xs">
                    Only authorized GITAM students and faculty can access the club platform. 
                    Your account will be verified upon registration.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Sign In Button */}
            <motion.button
              onClick={signInWithGoogle}
              disabled={isSigningIn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full group relative overflow-hidden bg-gradient-to-r from-white via-gray-50 to-white hover:from-gray-50 hover:to-gray-100 text-gray-800 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center justify-center gap-4">
                {isSigningIn ? (
                  <>
                    <div className="w-6 h-6 border-2 border-gray-400 border-t-gray-800 rounded-full animate-spin"></div>
                    <span className="text-lg">Signing you in...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-lg">Continue with Google</span>
                  </>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            </motion.button>

            {/* What happens next */}
            <div className="mt-8 text-center">
              <p className="text-slate-400 text-sm mb-4">What happens next?</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-cyan-300 text-sm font-bold">1</span>
                  </div>
                  <p className="text-slate-400 text-xs">Sign in with GITAM account</p>
                </div>
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-4 h-4 text-emerald-300" />
                  </div>
                  <p className="text-slate-400 text-xs">Complete your profile</p>
                </div>
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Rocket className="w-4 h-4 text-purple-300" />
                  </div>
                  <p className="text-slate-400 text-xs">Start your journey</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Help Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-slate-400 text-sm">
              Need help? Contact us at{' '}
              <a href="mailto:aeroastro_vzg@gitam.in" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                aeroastro_vzg@gitam.in
              </a>
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-[#0B0C0D] via-[#151719] to-[#1C1E21] flex items-center justify-center">
        <div className="max-w-lg w-full px-4">
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8">
            <div className="animate-pulse space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full mx-auto mb-4"></div>
                <div className="h-8 bg-white/10 rounded mb-2"></div>
                <div className="h-4 bg-white/10 rounded w-3/4 mx-auto"></div>
              </div>
              <div className="h-32 bg-white/10 rounded-2xl"></div>
              <div className="h-16 bg-white/10 rounded-xl"></div>
              <div className="h-12 bg-white/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    }>
      <SignInContent />
    </Suspense>
  );
}