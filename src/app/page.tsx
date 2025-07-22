"use client";

import { useEffect } from 'react';
import { initScrollReveal } from '../lib/utils';

export default function Home() {
  useEffect(() => {
    const observer = initScrollReveal();
    return () => observer?.disconnect();
  }, []);

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
          <div id="about-us" className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24">
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

          {/* Email Signup */}
          <div className="w-full max-w-lg mx-auto mb-12 px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                aria-label="Email address"
                className="flex-1 px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-white/10 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09C0F9]/50 focus:border-[#09C0F9]/50 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base min-h-[48px]"
              />
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#0284C7] text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-[#09C0F9]/25 text-sm sm:text-base whitespace-nowrap">
                Join Us
              </button>
            </div>
          </div>

          <p className="text-gray-400 text-xs sm:text-sm px-4 sm:px-0">
            We care about your data in our{" "}
            <a href="#" className="text-[#09C0F9] hover:text-[#0EA5E9] hover:underline transition-colors duration-200">
              privacy policy
            </a>
            .
          </p>
        </div>

        {/* GAAC Tech Constellation - Anime.js inspired animation */}
        <div className="relative mt-12 sm:mt-16 lg:mt-20 mb-8">
          <div className="w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mx-auto relative">
            
            {/* Central Hub - Represents GAAC Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20">
              <div className="w-full h-full bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl shadow-[#09C0F9]/30 border-2 border-[#09C0F9]/60 hover:border-[#09C0F9] transition-all duration-300">
                <img src="/gaacLogo.png" alt="GAAC" className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-lg" />
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
    </div>
  );
}