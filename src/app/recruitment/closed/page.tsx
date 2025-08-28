"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ClipboardList, 
  Clock, 
  Mail, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle,
  Calendar,
  Users,
  HelpCircle,
  ExternalLink
} from "lucide-react";

export default function RecruitmentClosedPage() {
  return (
    <>
      <main className="relative z-30 max-w-5xl mx-auto px-3 sm:px-4 md:px-8 pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-16">
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: 24 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="relative z-30 mb-8 sm:mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/30 text-red-300 text-sm sm:text-base font-medium mb-6 sm:mb-8">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5" /> 
            Recruitment Closed • 2025 📋
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-red-300 via-orange-200 to-yellow-300 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
            GAAC Recruitment 2025
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
            Thank You for Your Interest! 🙏
          </h2>
          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            The GITAM Aero Astro Club recruitment for 2025 has officially concluded. We received an overwhelming response and are grateful for all the applications submitted.
          </p>
        </motion.header>

        {/* Status Cards */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }} 
          className="relative z-30 mb-10 sm:mb-14"
        >
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3">
            {/* Recruitment Status */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative bg-gradient-to-br from-red-500/10 via-red-500/5 to-orange-500/10 border border-red-400/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-red-500/20 via-transparent to-orange-500/20"></div>
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-red-500/20 to-orange-500/20 text-red-300 mb-4 ring-1 ring-red-400/30">
                  <AlertCircle className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl tracking-wide mb-2">Applications Closed</h3>
                <p className="text-red-200/80 text-sm leading-relaxed">
                  We are no longer accepting new applications for the 2025 recruitment cycle.
                </p>
              </div>
            </motion.div>

            {/* Review Process */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-amber-500/10 border border-yellow-400/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-yellow-500/20 via-transparent to-amber-500/20"></div>
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-yellow-500/20 to-amber-500/20 text-yellow-300 mb-4 ring-1 ring-yellow-400/30">
                  <ClipboardList className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl tracking-wide mb-2">Under Review</h3>
                <p className="text-yellow-200/80 text-sm leading-relaxed">
                  Our team is currently reviewing all submitted applications and conducting interviews.
                </p>
              </div>
            </motion.div>

            {/* Results Coming */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-cyan-500/10 border border-blue-400/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20"></div>
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-300 mb-4 ring-1 ring-blue-400/30">
                  <Calendar className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl tracking-wide mb-2">Results Soon</h3>
                <p className="text-blue-200/80 text-sm leading-relaxed">
                  Final results will be announced via email and official channels soon.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* What's Next Section */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="relative z-30 mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400" /> 
            What&apos;s Next?
          </h2>
          
          <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
            {/* For Applicants */}
            <div className="bg-gradient-to-br from-emerald-500/8 via-emerald-500/4 to-teal-500/8 border border-emerald-400/20 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="shrink-0 w-12 h-12 bg-emerald-500/20 border border-emerald-400/30 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    For Applicants 📧
                  </h3>
                  <div className="space-y-4 text-slate-300">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-sm sm:text-base leading-relaxed">
                        <strong className="text-emerald-200">Check Your Email:</strong> All communication regarding your application status, interview schedules, and final results will be sent to your registered email address.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-sm sm:text-base leading-relaxed">
                        <strong className="text-emerald-200">Track Your Application:</strong> Use our application tracking system to monitor your status anytime.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-sm sm:text-base leading-relaxed">
                        <strong className="text-emerald-200">Stay Connected:</strong> Follow our official social media channels for updates and announcements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <a 
                      href="/track" 
                      className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl text-sm font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      🔍 Track Your Application
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* For Future Applicants */}
            <div className="bg-gradient-to-br from-purple-500/8 via-purple-500/4 to-blue-500/8 border border-purple-400/20 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="shrink-0 w-12 h-12 bg-purple-500/20 border border-purple-400/30 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Missed This Round? 🎯
                  </h3>
                  <div className="space-y-4 text-slate-300">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-sm sm:text-base leading-relaxed">
                        <strong className="text-purple-200">Next Recruitment:</strong> GAAC typically opens recruitment at the beginning of each academic year. Stay tuned for 2026 announcements!
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-sm sm:text-base leading-relaxed">
                        <strong className="text-purple-200">Stay Engaged:</strong> Attend our public events, workshops, and stargazing sessions to learn more about the club.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-sm sm:text-base leading-relaxed">
                        <strong className="text-purple-200">Build Skills:</strong> Use this time to develop relevant skills in astronomy, robotics, programming, or content creation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <a 
                      href="/projects" 
                      className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-xl text-sm font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      🚀 Explore Our Projects
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Helpline Section */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }} 
          className="relative z-30 mb-10 sm:mb-14"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-400/30 rounded-2xl p-6 sm:p-8 md:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/20 border border-blue-400/30 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
                <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 text-blue-300" />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center lg:justify-start gap-3">
                  Need Help? We&apos;re Here for You! 💬
                </h3>
                <p className="text-slate-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                  Have questions about your application status, interview process, or anything related to GAAC recruitment? 
                  Our helpline is available 24/7 to assist you with any concerns or queries.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Email Support */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-3">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-white text-base sm:text-lg">Email Support</span>
                    </div>
                    <a 
                      href="mailto:aeroastro_vzg@gitam.in"
                      className="text-cyan-300 hover:text-cyan-200 transition-colors text-sm sm:text-base font-semibold block mb-2"
                    >
                      aeroastro_vzg@gitam.in
                    </a>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      Best for detailed questions • Response within 24 hours • Official communication channel
                    </p>
                  </div>

                  {/* Phone Support */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-3">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-white text-base sm:text-lg">Call/WhatsApp</span>
                    </div>
                    <div className="space-y-2 mb-2">
                      <a 
                        href="tel:+919553316797"
                        className="block text-green-300 hover:text-green-200 transition-colors text-sm sm:text-base font-semibold"
                      >
                        +91 95533 16797
                      </a>
                      <a 
                        href="tel:+917382338771"
                        className="block text-green-300 hover:text-green-200 transition-colors text-sm sm:text-base font-semibold"
                      >
                        +91 73823 38771
                      </a>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      For urgent assistance • Available 24/7 • Direct support from recruitment team
                    </p>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <a
                    href="https://wa.me/919553316797?text=Hi! I have a question about GAAC recruitment 2025."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 bg-green-500/20 text-green-300 rounded-xl hover:bg-green-500/30 active:scale-95 transition-all duration-200 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl group"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                    WhatsApp Support
                  </a>
                  <a
                    href="mailto:aeroastro_vzg@gitam.in?subject=GAAC Recruitment 2025 - Query&body=Hi GAAC Team,%0D%0A%0D%0AI have a question regarding the recruitment process.%0D%0A%0D%0AThank you!"
                    className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 bg-blue-500/20 text-blue-300 rounded-xl hover:bg-blue-500/30 active:scale-95 transition-all duration-200 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl group"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                    Send Email
                  </a>
                </div>

                <div className="mt-6 sm:mt-8 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-400/30 rounded-xl p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-yellow-300 font-semibold text-sm sm:text-base">Quick Response Promise</span>
                  </div>
                  <p className="text-yellow-200/90 text-xs sm:text-sm leading-relaxed">
                    We understand how important this recruitment is for you. Our team is committed to responding to all queries within 24 hours. 
                    For urgent matters, please use WhatsApp or call directly for immediate assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }} 
          className="relative z-30 text-center"
        >
          <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 border border-white/10 rounded-2xl p-8 sm:p-10 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Thank You for Your Interest in GAAC! 🌟
            </h2>
            <p className="text-slate-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you applied or are planning to apply next year, we appreciate your enthusiasm for aerospace, astronomy, and technology. 
              Keep exploring, keep learning, and keep reaching for the stars!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl text-base sm:text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
              >
                🏠 Back to Home
              </Link>
              <Link 
                href="/projects"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl text-base sm:text-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
              >
                🚀 Explore Projects
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
