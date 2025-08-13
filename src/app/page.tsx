"use client";

import React from "react";
import { motion } from "framer-motion";
import { Crown, Mail, Linkedin, Star, Award, Target, Heart, ArrowRight, X, Shield, FileText, Eye, Database, Calendar, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import { useClubData, ClubDataUtils } from "@/lib/clubData";
import type { TimelineEvent } from "@/types/clubData";

// Enhanced Timeline Card Component with Micro-interactions
interface TimelineCardProps {
  event: TimelineEvent;
  index: number;
  isLeft: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ event, index, isLeft }) => {
  const ref = React.useRef(null);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: 0.1 * index,
        type: "spring",
        stiffness: 100 
      }}
      className={`relative flex items-center ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col md:gap-8`}
    >
      {/* Enhanced Timeline dot with hover effects */}
      <motion.div 
        className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-6 h-6 z-20 group cursor-pointer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative w-full h-full">
          {/* Outer glow ring */}
          <motion.div 
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${event.color} opacity-30`}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Main dot */}
          <div className="relative w-full h-full bg-slate-900 rounded-full border-2 border-white/20 flex items-center justify-center overflow-hidden">
            <motion.div 
              className={`absolute inset-1 rounded-full bg-gradient-to-r ${event.color}`}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative z-10 text-xs">{event.icon}</span>
          </div>
          {/* Pulse effect */}
          <motion.div 
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${event.color} opacity-40`}
            animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
          />
        </div>
      </motion.div>
      
      {/* Enhanced Content card */}
      <motion.div 
        className={`w-full md:w-5/12 ml-14 md:ml-0`}
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div 
          className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden group cursor-pointer"
          whileHover={{ 
            borderColor: "rgba(255, 255, 255, 0.3)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Background gradient overlay */}
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
          />
          
          {/* Floating decorative elements */}
          <div className={`absolute top-2 ${isLeft ? 'right-2' : 'left-2'} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-white/50" />
            </motion.div>
          </div>
          
          {/* Year badge with enhanced styling */}
          <motion.div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${event.color} text-white text-sm font-bold mb-4 shadow-lg ${!isLeft ? 'md:ml-auto' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="text-lg"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {event.icon}
            </motion.span>
            {event.year}
          </motion.div>
          
          {/* Title with gradient hover effect */}
          <motion.h3 
            className={`text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${!isLeft ? 'md:text-right' : ''}`}
          >
            {event.title}
          </motion.h3>
          
          <p className={`text-slate-300 text-sm leading-relaxed mb-4 group-hover:text-slate-200 transition-colors duration-300 ${!isLeft ? 'md:text-right' : ''}`}>
            {event.description}
          </p>
          
          {/* Enhanced Achievements list with proper alignment */}
          <div className="space-y-2">
            <motion.h4 
              className={`text-sm font-semibold text-cyan-300 mb-3 flex items-center gap-2 ${!isLeft ? 'md:justify-end md:flex-row-reverse md:gap-2' : ''}`}
              whileHover={{ x: isLeft ? 5 : -5 }}
            >
              <Award className="h-3 w-3" />
              <span>Key Achievements:</span>
            </motion.h4>
            <div className="space-y-2">
              {event.achievements.map((achievement: string, achievementIndex: number) => (
                <motion.div
                  key={achievementIndex}
                  initial={{ opacity: 0, x: isLeft ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * achievementIndex }}
                  className={`text-xs text-slate-400 flex items-start gap-3 group/item hover:text-slate-300 transition-colors duration-200 ${!isLeft ? 'md:flex-row-reverse md:text-right' : ''}`}
                >
                  <motion.span 
                    className="text-cyan-400 mt-1 group-hover/item:text-cyan-300"
                    whileHover={{ scale: 1.5, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    •
                  </motion.span>
                  <span className="flex-1">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Progress indicator */}
          <motion.div 
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${event.color} opacity-50`}
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
      </motion.div>
      
      {/* Enhanced Connection line */}
      <motion.div 
        className={`hidden md:block absolute ${
          isLeft ? 'left-1/2 right-6' : 'left-6 right-1/2'
        } top-1/2 h-px bg-gradient-to-r ${event.color} opacity-30`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ 
          transformOrigin: isLeft ? 'left' : 'right',
          top: '50%'
        }}
      />
      
      {/* Empty space for alternating layout */}
      <div className="hidden md:block w-5/12"></div>
    </motion.div>
  );
};

export default function Home() {
  // Enhanced data from centralized source with utilities
  const { founder, executives, timeline } = useClubData();

  const [showPrivacyModal, setShowPrivacyModal] = React.useState(false);

  return (
    <div 
      className="min-h-screen relative overflow-hidden" 
      style={{
        minHeight: '100vh'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09C0F9]/5 to-transparent"></div>
      
      {/* Main Content */}
      <main className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto">
          <div id="about-club" className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <div className="mb-8">
            <p 
              className="text-center uppercase mb-6 font-dm-sans"
              style={{
                color: '#898A8C',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0.98px'
              }}
            >
              GITAM AERO ASTRO CLUB
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight">
              Kickstart your Career
              <br />
              <span className="text-white">Here</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4 sm:px-0">
              Welcome to the GITAM Aero Astro Club! We are a passionate community 
              of curious individuals dedicated to exploring, learning, and building 
              exciting projects in the fields of Robotics, Programming, and Astronomy.
            </p>
          </div>

          {/* Recruitment Live Section */}
          <div className="w-full max-w-2xl mx-auto mb-12 px-3 sm:px-4 lg:px-0">
            {/* Live Recruitment Banner */}
            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20 border border-emerald-400/40 backdrop-blur-sm mb-3 animate-pulse">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                <span className="text-emerald-300 text-xs sm:text-sm font-semibold">🚀 RECRUITMENT 2025 IS LIVE!</span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 px-2">
                Join the Future of Innovation
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base px-2 leading-relaxed">
                Ready to explore robotics, programming, astronomy, and more? Apply now and become part of GAAC&apos;s mission to push the boundaries of technology and space exploration.
              </p>
            </div>

            {/* Enhanced CTA Section */}
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#09C0F9]/20 via-emerald-500/20 to-[#0EA5E9]/20 rounded-xl sm:rounded-2xl blur-xl"></div>
              
              {/* Main content */}
              <div className="relative bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-md">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                    <span className="text-xl sm:text-2xl">✨</span>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-white">Ready to Apply?</h4>
                    <span className="text-xl sm:text-2xl">🚀</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm mb-3 sm:mb-4 px-2 leading-relaxed">
                    Join teams in <span className="text-cyan-300 font-semibold">Stargazers (Astronomy)</span>, <span className="text-rose-300 font-semibold">Robusta (Robotics)</span>, <span className="text-purple-300 font-semibold">Programmers</span>, and <span className="text-amber-300 font-semibold">Core Team</span>
                  </p>
                </div>

                {/* Application Steps Preview */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-base sm:text-lg mb-1">📝</div>
                    <div className="text-[10px] sm:text-xs text-slate-300">Fill Application</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-base sm:text-lg mb-1">🎯</div>
                    <div className="text-[10px] sm:text-xs text-slate-300">Get Shortlisted</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-base sm:text-lg mb-1">🎉</div>
                    <div className="text-[10px] sm:text-xs text-slate-300">Join the Team</div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <a
                    href="/recruitment"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-emerald-500 via-[#09C0F9] to-teal-600 hover:from-emerald-600 hover:via-[#0EA5E9] hover:to-teal-700 text-white font-bold text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/25 group relative overflow-hidden touch-manipulation"
                  >
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <span className="relative z-10">Apply for Recruitment 2025</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    
                    {/* Animated sparkles */}
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.1s' }}></div>
                    <div className="absolute bottom-1 left-1 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.3s' }}></div>
                  </a>
                  
                  <p className="text-[10px] sm:text-xs text-slate-400 mt-3 sm:mt-4 flex items-center justify-center gap-1 px-2">
                    <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></span>
                    Application takes only 3-5 minutes
                    <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm px-4 sm:px-0 text-center leading-relaxed">
            🔒 Your application data is secure. Read our{" "}
            <button 
              onClick={() => setShowPrivacyModal(true)}
              className="text-[#09C0F9] hover:text-[#0EA5E9] hover:underline transition-colors duration-200 underline decoration-dotted cursor-pointer"
            >
              privacy policy
            </button>
            {" "}for more details.
          </p>
        </div>

        {/* GAAC Tech Constellation - Anime.js inspired animation */}
        <div className="relative mt-12 sm:mt-16 lg:mt-20 mb-8">
          <div className="w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mx-auto relative">
            
            {/* Central Hub - Represents GAAC Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20">
              <div className="w-full h-full bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl shadow-[#09C0F9]/30 border-2 border-[#09C0F9]/60 hover:border-[#09C0F9] transition-all duration-300">
                <Image src="/gaacLogo.png" alt="GAAC" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-lg" />
              </div>
              {/* Central pulse rings */}
              <div className="absolute inset-0 rounded-full border-2 border-[#09C0F9]/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-[#09C0F9]/20 animate-ping" style={{ animationDelay: '1s' }}></div>
              {/* Additional glow effect */}
              <div className="absolute inset-0 rounded-full bg-[#09C0F9]/10 animate-pulse" style={{ animationDuration: '3s' }}></div>
            </div>

            {/* Robotics Orbit - Top */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 animate-float">
              <div className="relative group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#09C0F9]/20 to-[#0EA5E9]/20 rounded-xl backdrop-blur-sm border border-[#09C0F9]/30 flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <span className="text-2xl sm:text-3xl">🤖</span>
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-[#09C0F9] font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Robotics
                </div>
                {/* Connection line to center */}
                <div className="absolute top-full left-1/2 w-px h-16 sm:h-20 bg-gradient-to-b from-[#09C0F9]/50 to-transparent animate-pulse"></div>
              </div>
            </div>

            {/* Programming Orbit - Bottom Left */}
            <div className="absolute bottom-8 left-8 sm:left-12 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="relative group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#09C0F9]/20 to-[#0EA5E9]/20 rounded-xl backdrop-blur-sm border border-[#09C0F9]/30 flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <span className="text-2xl sm:text-3xl">💻</span>
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-[#09C0F9] font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Programming
                </div>
                {/* Connection line to center */}
                <div className="absolute bottom-full right-0 w-16 sm:w-20 h-px bg-gradient-to-r from-[#09C0F9]/50 to-transparent animate-pulse" style={{ transform: 'rotate(45deg)', transformOrigin: 'right' }}></div>
              </div>
            </div>

            {/* Astronomy Orbit - Bottom Right */}
            <div className="absolute bottom-8 right-8 sm:right-12 animate-float" style={{ animationDelay: '1s' }}>
              <div className="relative group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#09C0F9]/20 to-[#0EA5E9]/20 rounded-xl backdrop-blur-sm border border-[#09C0F9]/30 flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <span className="text-2xl sm:text-3xl">🔭</span>
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-[#09C0F9] font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Astronomy
                </div>
                {/* Connection line to center */}
                <div className="absolute bottom-full left-0 w-16 sm:w-20 h-px bg-gradient-to-l from-[#09C0F9]/50 to-transparent animate-pulse" style={{ transform: 'rotate(-45deg)', transformOrigin: 'left' }}></div>
              </div>
            </div>

            {/* Satellite Nodes - Smaller elements representing projects/achievements */}
            <div className="absolute top-1/4 right-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-[#09C0F9]/30 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute top-3/4 left-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-[#0EA5E9]/40 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
            <div className="absolute top-1/3 left-1/6 w-3 h-3 sm:w-4 sm:h-4 bg-[#0284C7]/50 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute bottom-1/3 right-1/6 w-5 h-5 sm:w-6 sm:h-6 bg-[#09C0F9]/35 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>

            {/* Data Flow Lines - Representing connectivity and innovation */}
            <div className="absolute inset-0">
              {/* Curved connection paths */}
              <svg className="w-full h-full opacity-30" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#09C0F9" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#0284C7" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                
                {/* Orbital paths */}
                <circle cx="200" cy="200" r="120" fill="none" stroke="url(#pathGradient)" strokeWidth="1" strokeDasharray="5,5" className="animate-spin" style={{ animationDuration: '30s' }} />
                <circle cx="200" cy="200" r="80" fill="none" stroke="url(#pathGradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                <circle cx="200" cy="200" r="160" fill="none" stroke="url(#pathGradient)" strokeWidth="1" strokeDasharray="8,8" className="animate-spin" style={{ animationDuration: '40s' }} />
              </svg>
            </div>

            {/* Innovation Particles - Floating elements */}
            <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-[#09C0F9] rounded-full animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '3s' }}></div>
            <div className="absolute top-4/5 right-1/5 w-1.5 h-1.5 bg-[#0EA5E9] rounded-full animate-bounce" style={{ animationDelay: '1.1s', animationDuration: '2.5s' }}></div>
            <div className="absolute top-2/5 right-1/3 w-2.5 h-2.5 bg-[#0284C7] rounded-full animate-bounce" style={{ animationDelay: '0.7s', animationDuration: '3.5s' }}></div>
            <div className="absolute bottom-1/5 left-1/3 w-2 h-2 bg-[#09C0F9] rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}></div>

            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-[#09C0F9]/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '4s' }}></div>
          </div>
        </div>
        </div>
      </main>

      {/* About Us Section with detailed content */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-16">
        {/* About the Club Details */}
        <motion.section id="about-details" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6">
            <Crown className="h-4 w-4" /> About Our Club
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent mb-6">
            Innovate. Explore. Elevate.
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            The GITAM Aero Astro Club (GAAC) is a student-driven community united by curiosity for aerospace, robotics, programming, and astronomy. We design projects, conduct research, host workshops, build interdisciplinary teams, and inspire campus-wide engagement with emerging technologies and space sciences.
          </p>
        </motion.section>

        {/* Club Evolution Timeline - Enhanced with Micro-interactions */}
        <motion.section 
          id="timeline" 
          initial={{ opacity: 0, y: 24 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }} 
          className="mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
            <Calendar className="h-4 w-4" /> Our Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-300 via-pink-200 to-blue-300 bg-clip-text text-transparent mb-6">
            Evolution Timeline
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed mb-12">
            From humble beginnings in 2020 to becoming a premier technical club - witness our journey of innovation, growth, and technological excellence.
          </p>
          
          <div className="relative">
            {/* Enhanced Timeline line with animated gradient */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400/30 via-pink-400/30 to-blue-400/30 md:opacity-60">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400 opacity-50"
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scaleY: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
            
            {/* Floating background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div 
                className="absolute top-10 left-10 w-2 h-2 bg-purple-400/30 rounded-full"
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute top-32 right-16 w-1.5 h-1.5 bg-pink-400/40 rounded-full"
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div 
                className="absolute top-64 left-20 w-1 h-1 bg-blue-400/35 rounded-full"
                animate={{ 
                  y: [0, -25, 0],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
              <motion.div 
                className="absolute bottom-32 right-10 w-2.5 h-2.5 bg-purple-300/25 rounded-full"
                animate={{ 
                  y: [0, -18, 0],
                  x: [0, -12, 0],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
            
            {/* Enhanced Timeline events */}
            <div className="space-y-8 md:space-y-16">
              {timeline.map((event: TimelineEvent, index: number) => (
                <TimelineCard 
                  key={event.year} 
                  event={event} 
                  index={index} 
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
            
            {/* Enhanced Future indicator with micro-interactions */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative flex items-center justify-center mt-12"
            >
              <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse z-10 flex items-center justify-center">
                <ArrowRight className="h-3 w-3 text-white" />
              </div>
              <div className="ml-16 md:ml-0 md:text-center">
                <motion.div 
                  className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer group"
                  whileHover={{ 
                    borderColor: "rgba(6, 182, 212, 0.8)",
                    boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)"
                  }}
                >
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="h-5 w-5 text-cyan-400 group-hover:animate-pulse">🚀</div>
                    <p className="text-cyan-300 font-medium">The Future Awaits...</p>
                  </div>
                  <p className="text-slate-400 text-sm mt-2">Next generation of aerospace innovation continues</p>
                  <div className="flex gap-2 mt-3 justify-center md:justify-start">
                    <motion.div 
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.div 
                      className="w-2 h-2 bg-blue-400 rounded-full"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div 
                      className="w-2 h-2 bg-purple-400 rounded-full"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Timeline End Marker & Section Breaker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col items-center mt-16 mb-8"
            >
              {/* Rotating Spark Animation */}
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg mb-6"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  animate={{ rotate: [0, -180, -360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="text-xl"
                >
                  ✨
                </motion.div>
              </motion.div>
              
              {/* Cool Section Breaker */}
              <div className="flex items-center gap-4 w-full max-w-md">
                <motion.div 
                  className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent flex-1"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                />
                <motion.div
                  className="flex gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                </motion.div>
                <motion.div 
                  className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                />
              </div>
              
              {/* End Message */}
              <motion.p 
                className="text-slate-500 text-sm mt-4 font-medium tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                Journey Continues...
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Values, Mission & Goals */}
        <motion.section id="values-mission" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><Target className="h-6 w-6 text-cyan-400" /> Values, Mission & Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-400/40 transition">
              <Target className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">Mission</h3>
              <p className="text-sm text-slate-300 leading-relaxed">Cultivate innovation, technical excellence, and collaborative learning in aerospace and computational sciences.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-400/40 transition">
              <Star className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">Vision</h3>
              <p className="text-sm text-slate-300 leading-relaxed">Become a nationally recognized student hub for research, prototyping, and space science outreach.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-400/40 transition">
              <Heart className="h-8 w-8 text-rose-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">Core Values</h3>
              <ul className="text-sm text-slate-300 space-y-1 list-disc ml-4">
                <li>Integrity & Curiosity</li>
                <li>Inclusive Collaboration</li>
                <li>Hands-on Experimentation</li>
                <li>Community Impact</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Executive Leadership Team - iOS Style Cards */}
        <motion.section 
          id="executive-body" 
          initial={{ opacity: 0, y: 24 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.25 }} 
          className="mb-24"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-orange-500/10 border border-amber-400/30 mb-6">
              <Crown className="h-6 w-6 text-amber-400" />
              <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider">Leadership Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent mb-4">
              Executive Body
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Meet the visionary leaders driving innovation and excellence at GAAC. Our executive team combines technical expertise with strategic leadership to guide the club towards new horizons.
            </p>
          </div>

          {/* Executive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {executives.map((executive, index) => {
              // Get role styling using the utility function
              const roleStyle = ClubDataUtils.getExecutiveRoleStyle(executive.position);
              
              return (
                <motion.div 
                  key={executive.name} 
                  initial={{ opacity: 0, y: 30, scale: 0.95 }} 
                  animate={{ opacity: 1, y: 0, scale: 1 }} 
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 100
                  }} 
                  className="group"
                >
                  {/* iOS Style Card Container */}
                  <div className="relative bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] backdrop-blur-xl rounded-3xl border border-white/[0.15] shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:border-white/[0.3] hover:bg-gradient-to-br hover:from-white/[0.18] hover:via-white/[0.14] hover:to-white/[0.08] overflow-hidden group-hover:backdrop-blur-lg">
                    
                    {/* Card Background Pattern */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 20% 80%, ${roleStyle.gradient.includes('yellow') ? '#FCD34D' : roleStyle.gradient.includes('purple') ? '#A855F7' : roleStyle.gradient.includes('blue') ? '#3B82F6' : '#10B981'}20 0%, transparent 50%),
                                         radial-gradient(circle at 80% 20%, ${roleStyle.gradient.includes('yellow') ? '#F59E0B' : roleStyle.gradient.includes('purple') ? '#8B5CF6' : roleStyle.gradient.includes('blue') ? '#1D4ED8' : '#059669'}15 0%, transparent 50%)`,
                      }} />
                    </div>

                    {/* Top Section with Role Badge and Picture */}
                    <div className="relative p-8 pb-4">
                      {/* Floating Role Badge */}
                      <div className="absolute top-6 right-6 z-20">
                        <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${roleStyle.gradient} shadow-lg backdrop-blur-sm flex items-center gap-2`}>
                          <span className="text-white text-sm">{roleStyle.icon}</span>
                          <span className="text-white text-xs font-bold uppercase tracking-wider">EB (2025-26)</span>
                        </div>
                      </div>

                      {/* Profile Picture */}
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          {/* Glow Effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${roleStyle.gradient} rounded-3xl blur-xl opacity-40 scale-110 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500`} />
                          
                          {/* Picture Container */}
                          <div className={`relative w-32 h-32 rounded-3xl bg-gradient-to-br ${roleStyle.gradient} p-1 shadow-2xl group-hover:shadow-3xl transition-all duration-500`}>
                            <div className="w-full h-full rounded-[1.4rem] overflow-hidden bg-white/20 group-hover:bg-white/30 transition-all duration-500">
                              {executive.image ? (
                                <Image 
                                  src={executive.image} 
                                  alt={executive.name} 
                                  width={128} 
                                  height={128} 
                                  className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-110 transition-all duration-500" 
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 group-hover:from-slate-600 group-hover:to-slate-700 transition-all duration-500">
                                  <span className="text-white text-3xl font-bold group-hover:scale-105 transition-transform duration-500">
                                    {executive.name.split(' ').map(w=>w[0]).slice(0,2).join('')}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Online Status Indicator */}
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-lg">
                            <div className="w-full h-full bg-green-400 rounded-full animate-pulse" />
                          </div>
                        </div>
                      </div>

                      {/* Name and Position */}
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                          {executive.name}
                        </h3>
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${roleStyle.gradient} bg-opacity-20 border border-white/20`}>
                          <span className="text-lg">{roleStyle.icon}</span>
                          <span className="text-white text-sm font-semibold">
                            {executive.position}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-8 pb-8">
                      {/* Academic Info */}
                      <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm">
                          <span className="text-cyan-400 text-xs">🎓</span>
                          <span className="text-white text-xs font-medium">{executive.department}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm">
                          <span className="text-emerald-400 text-xs">📅</span>
                          <span className="text-white text-xs font-medium">{executive.year}</span>
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="text-slate-300 text-sm leading-relaxed text-center mb-6 line-clamp-3">
                        {executive.bio}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <Award className="h-4 w-4 text-amber-400" />
                          <span className="text-white font-semibold text-sm">Key Achievements</span>
                        </div>
                        <div className="space-y-2">
                          {executive.achievements.slice(0, 2).map((achievement, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-1.5 flex-shrink-0" />
                              <span className="text-slate-300 text-xs leading-relaxed flex-1">
                                {achievement}
                              </span>
                            </div>
                          ))}
                          {executive.achievements.length > 2 && (
                            <div className="text-center">
                              <span className="text-slate-400 text-xs">
                                +{executive.achievements.length - 2} more achievements
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Contact Actions */}
                      <div className="flex items-center justify-center gap-3">
                        <a 
                          href={`mailto:${executive.email}`} 
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-300 group/mail"
                          title="Send Email"
                        >
                          <Mail className="h-4 w-4 group-hover/mail:scale-110 transition-transform" />
                          <span className="text-xs font-medium">Email</span>
                        </a>
                        {executive.linkedin && (
                          <a 
                            href={executive.linkedin} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-400/30 text-blue-300 hover:from-blue-600/30 hover:to-indigo-600/30 hover:border-blue-400/50 transition-all duration-300 group/linkedin"
                            title="LinkedIn Profile"
                          >
                            <Linkedin className="h-4 w-4 group-hover/linkedin:scale-110 transition-transform" />
                            <span className="text-xs font-medium">LinkedIn</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className={`h-1 bg-gradient-to-r ${roleStyle.gradient} opacity-60`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Team Leadership Message */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-orange-500/10 border border-amber-400/20 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Crown className="h-6 w-6 text-amber-400" />
                <span className="text-amber-300 font-bold text-lg">Leadership Excellence</span>
                <Crown className="h-6 w-6 text-amber-400" />
              </div>
              <p className="text-slate-300 leading-relaxed">
                Our executive team represents the pinnacle of student leadership at GITAM, combining technical expertise, 
                visionary thinking, and collaborative spirit to drive GAAC towards unprecedented achievements in aerospace, 
                robotics, programming, and astronomy.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Team Leads Section */}
        <motion.section 
          id="team-leads" 
          initial={{ opacity: 0, y: 24 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }} 
          className="mb-24"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 border border-blue-400/30 mb-5">
              <Users className="h-5 w-5 text-blue-400" />
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Team Leadership</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 via-cyan-200 to-teal-300 bg-clip-text text-transparent mb-3">
              Team Leads
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Dedicated leaders spearheading our specialized teams, bringing technical expertise and vision to drive innovation across all domains.
            </p>
          </div>

          {/* Team Leads Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {ClubDataUtils.getActiveTeamLeads().map((teamLead, index) => (
              <motion.div 
                key={teamLead.name} 
                initial={{ opacity: 0, y: 20, scale: 0.95 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }} 
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 120
                }} 
                className="group"
              >
                {/* Card Container */}
                <div className="relative bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-lg rounded-2xl border border-white/[0.12] shadow-xl hover:shadow-2xl transition-all duration-400 hover:scale-[1.02] hover:border-white/[0.25] overflow-hidden">
                  
                  {/* Card Background Pattern */}
                  <div className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-400">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 30% 70%, #3B82F620 0%, transparent 50%),
                                       radial-gradient(circle at 70% 30%, #06B6D415 0%, transparent 50%)`,
                    }} />
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    {/* Role Badge */}
                    <div className="flex justify-end mb-4">
                      <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30">
                        <span className="text-blue-300 text-xs font-bold uppercase tracking-wider">TL (2025-26)</span>
                      </div>
                    </div>

                    {/* Profile Picture */}
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-30 scale-105 group-hover:opacity-50 group-hover:scale-110 transition-all duration-400" />
                        
                        {/* Picture Container */}
                        <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-lg group-hover:shadow-xl transition-all duration-400">
                          <div className="w-full h-full rounded-[1.1rem] overflow-hidden bg-white/15 group-hover:bg-white/25 transition-all duration-400">
                            {teamLead.image ? (
                              <Image 
                                src={teamLead.image} 
                                alt={teamLead.name} 
                                width={96} 
                                height={96} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-400" 
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 group-hover:from-slate-600 group-hover:to-slate-700 transition-all duration-400">
                                <span className="text-white text-xl font-bold group-hover:scale-105 transition-transform duration-400">
                                  {teamLead.name.split(' ').map(w=>w[0]).slice(0,2).join('')}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Status Indicator */}
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-md">
                          <div className="w-full h-full bg-green-400 rounded-full animate-pulse" />
                        </div>
                      </div>
                    </div>

                    {/* Name and Position */}
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                        {teamLead.name}
                      </h3>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/20">
                        <span className="text-blue-400 text-sm">👨‍💼</span>
                        <span className="text-white text-sm font-medium">
                          {teamLead.position}
                        </span>
                      </div>
                    </div>

                    {/* Academic Info */}
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/8 backdrop-blur-sm">
                        <span className="text-cyan-400 text-xs">🎓</span>
                        <span className="text-white text-xs font-medium">{teamLead.department}</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/8 backdrop-blur-sm">
                        <span className="text-emerald-400 text-xs">📅</span>
                        <span className="text-white text-xs font-medium">{teamLead.year}</span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-slate-300 text-sm leading-relaxed text-center mb-4 line-clamp-3">
                      {teamLead.bio}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <div className="space-y-1.5">
                        {teamLead.achievements.slice(0, 2).map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/8">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-1.5 flex-shrink-0" />
                            <span className="text-slate-300 text-xs leading-relaxed flex-1">
                              {achievement}
                            </span>
                          </div>
                        ))}
                        {teamLead.achievements.length > 2 && (
                          <div className="text-center">
                            <span className="text-slate-400 text-xs">
                              +{teamLead.achievements.length - 2} more
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Contact Actions */}
                    <div className="flex items-center justify-center gap-2">
                      {teamLead.email && teamLead.email !== '#' && (
                        <a 
                          href={`mailto:${teamLead.email}`} 
                          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-300 group/mail"
                          title="Send Email"
                        >
                          <Mail className="h-3.5 w-3.5 group-hover/mail:scale-110 transition-transform" />
                          <span className="text-xs font-medium">Email</span>
                        </a>
                      )}
                      {teamLead.linkedin && teamLead.linkedin !== '#' && (
                        <a 
                          href={teamLead.linkedin} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-400/30 text-blue-300 hover:from-blue-600/30 hover:to-indigo-600/30 hover:border-blue-400/50 transition-all duration-300 group/linkedin"
                          title="LinkedIn Profile"
                        >
                          <Linkedin className="h-3.5 w-3.5 group-hover/linkedin:scale-110 transition-transform" />
                          <span className="text-xs font-medium">LinkedIn</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-60" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Leadership Message */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="max-w-2xl mx-auto p-6 rounded-xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 border border-blue-400/20 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Users className="h-5 w-5 text-blue-400" />
                <span className="text-blue-300 font-bold text-base">Collaborative Leadership</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm">
                Our team leads work closely with the executive body to foster innovation and collaboration across specialized domains, 
                ensuring each team achieves excellence while contributing to GAAC&apos;s collective success.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Members Directory - Commented out for next development phase */}
        {/* 
        <motion.section id="members" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><Users className="h-7 w-7 text-cyan-400" /> Club Members Directory</h2>
          <div className="grid gap-4 md:grid-cols-4 mb-6">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search name or role..."
              className="md:col-span-2 w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400/50 outline-none text-sm text-white placeholder:text-slate-500"
            />
            <select value={teamFilter} onChange={e => setTeamFilter(e.target.value)} className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400/50 text-sm text-white">
              <option value="All">All Teams</option>
              {teams.map(team => <option key={team.id} value={team.shortName}>{team.shortName}</option>)}
            </select>
            <select value={yearFilter} onChange={e => setYearFilter(e.target.value)} className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400/50 text-sm text-white">
              <option value="All">All Years</option>
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
            <select value={sortKey} onChange={e => setSortKey(e.target.value)} className="md:col-span-1 w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400/50 text-sm text-white">
              <option value="name">Sort: Name</option>
              <option value="team">Sort: Team</option>
              <option value="year">Sort: Year</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginated.map(m => {
              const teamColors = ClubDataUtils.getTeamColors(m.team);
              const teamDisplayName = ClubDataUtils.getTeamDisplayName(m.team);
              const gradient = teamColors.gradient;
              
              return (
                <div key={m.id} className="relative bg-white/5 border border-white/10 rounded-xl p-4 hover:border-cyan-400/40 transition group overflow-hidden">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${gradient} mix-blend-overlay`} />
                  <div className="flex items-center gap-3 mb-2 relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-semibold text-sm shadow-lg ring-2 ring-white/30`}>
                      {m.avatar ? <Image src={m.avatar} alt={m.name} width={48} height={48} className="w-full h-full object-cover rounded-xl" /> : m.name.split(' ').map(w=>w[0]).slice(0,2).join('')}
                    </div>
                    <div className="flex-1">
                      <span className="block text-sm font-semibold text-white leading-tight">{m.name}</span>
                      <span className="text-[10px] uppercase tracking-wide text-cyan-300/80">{teamDisplayName}</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-300 flex items-center gap-1 relative"><ArrowRight className="h-3 w-3 text-cyan-300" /> {m.role}</p>
                  {m.skills && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {m.skills.slice(0,4).map(s => (
                        <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">{s}</span>
                      ))}
                    </div>
                  )}
                  {m.email && (
                    <a href={`mailto:${m.email}`} className="inline-block mt-3 text-[10px] text-cyan-300 hover:text-cyan-200 underline decoration-dotted">Contact</a>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-between mt-6 text-xs text-slate-400">
            <span>Showing {(page-1)*pageSize + 1}-{Math.min(page*pageSize, filtered.length)} of {filtered.length}</span>
            <div className="flex gap-2">
              <button disabled={page===1} onClick={()=>setPage(p=>p-1)} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 disabled:opacity-30 hover:border-cyan-400/50 text-white">Prev</button>
              <span className="px-2 py-1">Page {page}/{totalPages}</span>
              <button disabled={page===totalPages} onClick={()=>setPage(p=>p+1)} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 disabled:opacity-30 hover:border-cyan-400/50 text-white">Next</button>
            </div>
          </div>
        </motion.section>
        */}

        {/* Founder */}
        <motion.section id="founder" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="mb-10">
          <div className="bg-gradient-to-r from-cyan-600/10 to-blue-700/10 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3"><Crown className="h-7 w-7 text-yellow-400" /> Club Founder</h2>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-28 h-28 rounded-2xl ring-4 ring-cyan-400/50 shadow-2xl overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl border border-white/30 relative group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent)]" />
                {founder.image ? (
                  <Image src={founder.image} alt={founder.name} width={112} height={112} priority sizes="112px" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                ) : (
                  founder.name.split(' ').map(w=>w[0]).slice(0,2).join('')
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{founder.name}</h3>
                <p className="text-cyan-300 text-sm mb-3">{founder.title}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{founder.bio}</p>
                <div className="flex gap-3">
                  <a href={`mailto:${founder.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm text-cyan-300"><Mail className="h-4 w-4" /> Contact</a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </section>

      {/* Contact Section */}
      <section id="contact-us" className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">
            Get in touch and become part of our amazing community!
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 max-w-md sm:max-w-none mx-auto">
            <a
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#0284C7] text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-[#09C0F9]/25 text-sm sm:text-base"
            >
              Contact Us
            </a>
            <a
              href="/projects"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#09C0F9]/50 hover:border-[#09C0F9] text-[#09C0F9] hover:text-white hover:bg-[#09C0F9]/10 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base font-medium"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Background pattern overlay for texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, #09C0F9 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="absolute inset-0 bg-black/80" onClick={() => setShowPrivacyModal(false)} />
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            transition={{ duration: 0.3 }}
            className="relative z-[101] w-full max-w-4xl max-h-[90vh] mx-auto bg-gradient-to-br from-slate-900/98 via-slate-800/95 to-slate-900/98 border border-cyan-400/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-b border-cyan-400/20 px-6 py-4">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
                    <p className="text-cyan-200/80 text-sm">GITAM Aero Astro Club (GAAC)</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowPrivacyModal(false)}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
              <div className="space-y-6 text-slate-300">
                
                {/* Introduction */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-lg font-semibold text-white">Introduction</h4>
                  </div>
                  <p className="text-sm leading-relaxed">
                    The GITAM Aero Astro Club (GAAC) is committed to protecting your privacy and ensuring the security of your personal information. This privacy policy explains how we collect, use, and safeguard your data when you interact with our club activities, recruitment process, and online platforms.
                  </p>
                </section>

                {/* Information We Collect */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="w-5 h-5 text-emerald-400" />
                    <h4 className="text-lg font-semibold text-white">Information We Collect</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h5 className="font-medium text-emerald-300 mb-2">Personal Information:</h5>
                      <ul className="list-disc list-inside space-y-1 text-slate-300 text-xs">
                        <li>Name, registration number, and contact details</li>
                        <li>Academic information (branch, year of study)</li>
                        <li>Email address and phone number</li>
                        <li>Skills, interests, and project portfolios</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h5 className="font-medium text-cyan-300 mb-2">Application Data:</h5>
                      <ul className="list-disc list-inside space-y-1 text-slate-300 text-xs">
                        <li>Recruitment application responses</li>
                        <li>Team preferences and motivations</li>
                        <li>Previous experience and achievements</li>
                        <li>Portfolio links and sample work</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* How We Use Your Information */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-purple-400" />
                    <h4 className="text-lg font-semibold text-white">How We Use Your Information</h4>
                  </div>
                  <div className="grid gap-3 text-sm">
                    {[
                      { icon: "🎯", title: "Recruitment Process", desc: "Evaluate applications and conduct interviews for club membership" },
                      { icon: "📧", title: "Communication", desc: "Send updates about club activities, events, and opportunities" },
                      { icon: "🔍", title: "Team Assignment", desc: "Match members with appropriate teams based on skills and interests" },
                      { icon: "📊", title: "Club Analytics", desc: "Improve our programs and understand member engagement" },
                      { icon: "🤝", title: "Collaboration", desc: "Facilitate project assignments and team collaborations" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-3">
                        <span className="text-lg">{item.icon}</span>
                        <div>
                          <h5 className="font-medium text-white text-sm">{item.title}</h5>
                          <p className="text-xs text-slate-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Data Security */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-yellow-400" />
                    <h4 className="text-lg font-semibold text-white">Data Security & Protection</h4>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/30 rounded-lg p-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span>All data is stored securely on GITAM-approved platforms</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span>Access is limited to authorized club executives only</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span>Data is never shared with third parties without consent</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span>Regular security audits and data protection measures</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Your Rights */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <Eye className="w-5 h-5 text-blue-400" />
                    <h4 className="text-lg font-semibold text-white">Your Rights</h4>
                  </div>
                  <div className="grid gap-2 text-sm">
                    {[
                      "Request access to your personal data",
                      "Correct inaccurate or incomplete information", 
                      "Request deletion of your data (subject to club requirements)",
                      "Withdraw consent for non-essential communications",
                      "Report data protection concerns to club leadership"
                    ].map((right, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                        <span className="text-blue-400">✓</span>
                        <span className="text-xs">{right}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Contact Information */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-lg p-4">
                    <p className="text-sm mb-3">For any privacy-related questions or concerns, contact us:</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-cyan-400" />
                        <a href="mailto:aeroastro_vzg@gitam.in" className="text-cyan-300 hover:underline">aeroastro_vzg@gitam.in</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">📱</span>
                        <span>+91 95533 16797 | +91 73823 38771</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Last Updated */}
                <div className="pt-4 border-t border-white/10 text-center">
                  <p className="text-xs text-slate-400">
                    Last updated: August 2025 • This policy may be updated to reflect changes in our practices
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-cyan-400/20 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 px-6 py-4">
              <div className="flex justify-end">
                <button 
                  onClick={() => setShowPrivacyModal(false)}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
