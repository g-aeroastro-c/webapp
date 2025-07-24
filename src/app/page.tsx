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
          <div
            id="about-us"
            className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24"
          >
            <div className="mb-8">
              <p
                className="text-center uppercase mb-6 font-dm-sans"
                style={{
                  color: "#898A8C",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0.98px",
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
                Welcome to the GITAM Aero Astro Club! We are a passionate
                community of curious individuals dedicated to exploring,
                learning, and building exciting projects in the fields of
                Robotics, Programming, and Astronomy.
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
              <a
                href="#"
                className="text-[#09C0F9] hover:text-[#0EA5E9] hover:underline transition-colors duration-200"
              >
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
                  <img
                    src="/gaacLogo.png"
                    alt="GAAC"
                    className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-lg"
                  />
                </div>
                {/* Central pulse rings */}
                <div className="absolute inset-0 rounded-full border-2 border-[#09C0F9]/30 animate-ping"></div>
                <div
                  className="absolute inset-0 rounded-full border border-[#09C0F9]/20 animate-ping"
                  style={{ animationDelay: "1s" }}
                ></div>
                {/* Additional glow effect */}
                <div
                  className="absolute inset-0 rounded-full bg-[#09C0F9]/10 animate-pulse"
                  style={{ animationDuration: "3s" }}
                ></div>
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
              <div
                className="absolute bottom-8 left-8 sm:left-12 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="relative group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#09C0F9]/20 to-[#0EA5E9]/20 rounded-xl backdrop-blur-sm border border-[#09C0F9]/30 flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <span className="text-2xl sm:text-3xl">💻</span>
                  </div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-[#09C0F9] font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Programming
                  </div>
                  {/* Connection line to center */}
                  <div
                    className="absolute bottom-full right-0 w-16 sm:w-20 h-px bg-gradient-to-r from-[#09C0F9]/50 to-transparent animate-pulse"
                    style={{
                      transform: "rotate(45deg)",
                      transformOrigin: "right",
                    }}
                  ></div>
                </div>
              </div>

              {/* Astronomy Orbit - Bottom Right */}
              <div
                className="absolute bottom-8 right-8 sm:right-12 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="relative group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#09C0F9]/20 to-[#0EA5E9]/20 rounded-xl backdrop-blur-sm border border-[#09C0F9]/30 flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <span className="text-2xl sm:text-3xl">🔭</span>
                  </div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-[#09C0F9] font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Astronomy
                  </div>
                  {/* Connection line to center */}
                  <div
                    className="absolute bottom-full left-0 w-16 sm:w-20 h-px bg-gradient-to-l from-[#09C0F9]/50 to-transparent animate-pulse"
                    style={{
                      transform: "rotate(-45deg)",
                      transformOrigin: "left",
                    }}
                  ></div>
                </div>
              </div>

              {/* Satellite Nodes - Smaller elements representing projects/achievements */}
              <div
                className="absolute top-1/4 right-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-[#09C0F9]/30 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="absolute top-3/4 left-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-[#0EA5E9]/40 rounded-full animate-pulse"
                style={{ animationDelay: "0.8s" }}
              ></div>
              <div
                className="absolute top-1/3 left-1/6 w-3 h-3 sm:w-4 sm:h-4 bg-[#0284C7]/50 rounded-full animate-pulse"
                style={{ animationDelay: "1.2s" }}
              ></div>
              <div
                className="absolute bottom-1/3 right-1/6 w-5 h-5 sm:w-6 sm:h-6 bg-[#09C0F9]/35 rounded-full animate-pulse"
                style={{ animationDelay: "0.6s" }}
              ></div>

              {/* Data Flow Lines - Representing connectivity and innovation */}
              <div className="absolute inset-0">
                {/* Curved connection paths */}
                <svg className="w-full h-full opacity-30" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient
                      id="pathGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#09C0F9" stopOpacity="0.6" />
                      <stop
                        offset="50%"
                        stopColor="#0EA5E9"
                        stopOpacity="0.3"
                      />
                      <stop
                        offset="100%"
                        stopColor="#0284C7"
                        stopOpacity="0.1"
                      />
                    </linearGradient>
                  </defs>

                  {/* Orbital paths */}
                  <circle
                    cx="200"
                    cy="200"
                    r="120"
                    fill="none"
                    stroke="url(#pathGradient)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    className="animate-spin"
                    style={{ animationDuration: "30s" }}
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="80"
                    fill="none"
                    stroke="url(#pathGradient)"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                    className="animate-spin"
                    style={{
                      animationDuration: "20s",
                      animationDirection: "reverse",
                    }}
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="160"
                    fill="none"
                    stroke="url(#pathGradient)"
                    strokeWidth="1"
                    strokeDasharray="8,8"
                    className="animate-spin"
                    style={{ animationDuration: "40s" }}
                  />
                </svg>
              </div>

              {/* Innovation Particles - Floating elements */}
              <div
                className="absolute top-1/5 left-1/5 w-2 h-2 bg-[#09C0F9] rounded-full animate-bounce"
                style={{ animationDelay: "0.3s", animationDuration: "3s" }}
              ></div>
              <div
                className="absolute top-4/5 right-1/5 w-1.5 h-1.5 bg-[#0EA5E9] rounded-full animate-bounce"
                style={{ animationDelay: "1.1s", animationDuration: "2.5s" }}
              ></div>
              <div
                className="absolute top-2/5 right-1/3 w-2.5 h-2.5 bg-[#0284C7] rounded-full animate-bounce"
                style={{ animationDelay: "0.7s", animationDuration: "3.5s" }}
              ></div>
              <div
                className="absolute bottom-1/5 left-1/3 w-2 h-2 bg-[#09C0F9] rounded-full animate-bounce"
                style={{ animationDelay: "1.5s", animationDuration: "2.8s" }}
              ></div>

              {/* Background glow effect */}
              <div
                className="absolute inset-0 bg-gradient-radial from-[#09C0F9]/10 via-transparent to-transparent animate-pulse"
                style={{ animationDuration: "4s" }}
              ></div>
            </div>
          </div>
        </div>
      </main>


      {/* Features Section */}
      <section className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[#898A8C] uppercase mb-4 font-dm-sans text-sm tracking-wider">
              What We Offer
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Explore Our Core Areas
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Dive into cutting-edge technology across three specialized domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Robotics */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-[#09C0F9]/30 p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#09C0F9]/10">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🤖
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#09C0F9] transition-colors">
                Robotics
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Build autonomous systems, robotic arms, and intelligent machines
                that solve real-world problems.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#09C0F9] rounded-full mr-3"></div>
                  Autonomous Navigation
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#09C0F9] rounded-full mr-3"></div>
                  Machine Learning Integration
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#09C0F9] rounded-full mr-3"></div>
                  Hardware Design
                </li>
              </ul>
            </div>

            {/* Programming */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-[#09C0F9]/30 p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#09C0F9]/10">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💻
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#09C0F9] transition-colors">
                Programming
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Master modern programming languages and frameworks to create
                innovative software solutions.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#09C0F9] rounded-full mr-3"></div>
                  Full-Stack Development
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#09C0F9] rounded-full mr-3"></div>
                  AI/ML Applications
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#09C0F9] rounded-full mr-3"></div>
                  Open Source Projects
                </li>
              </ul>
            </div>

            {/* Astronomy */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-[#09C0F9]/30 p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#09C0F9]/10">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🔭
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#09C0F9] transition-colors">
                Astronomy
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Explore the cosmos through observation, data analysis, and space
                technology research.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#09C0F9] rounded-full mr-3"></div>
                  Telescope Operations
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#09C0F9] rounded-full mr-3"></div>
                  Data Analysis
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#09C0F9] rounded-full mr-3"></div>
                  Space Research
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#09C0F9] mb-2">
                500+
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Active Members
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#09C0F9] mb-2">
                50+
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#09C0F9] mb-2">
                25+
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Awards Won
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#09C0F9] mb-2">
                100+
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Events Hosted
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[#898A8C] uppercase mb-4 font-dm-sans text-sm tracking-wider">
              Student Voices
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              What Our Members Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#09C0F9] to-[#0EA5E9] rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">VT</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Viswa Teja</div>
                  <div className="text-gray-400 text-sm">3rd Year, CSE</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "GAAC transformed my understanding of robotics. The hands-on
                projects and mentorship helped me land an internship at a top
                tech company."
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#09C0F9] to-[#0EA5E9] rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">RB</span>
                </div>
                <div>
                  <div className="text-white font-semibold">
                    Rithika Bollapragada
                  </div>
                  <div className="text-gray-400 text-sm">2nd Year, ECE</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "The astronomy team opened my eyes to the wonders of space. Our
                telescope sessions and research projects are absolutely
                incredible!"
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#09C0F9] to-[#0EA5E9] rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">VC</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Vishal Ch</div>
                  <div className="text-gray-400 text-sm">
                    4th Year, Mechanical
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "From coding competitions to building drones, GAAC provided the
                perfect platform to explore my passion for technology and
                innovation."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Body Section */}
      <section
        id="executive-body"
        className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[#898A8C] uppercase mb-4 font-dm-sans text-sm tracking-wider">
              Leadership Team
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Executive Body
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Meet the dedicated leaders who drive innovation and excellence at
              GAAC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Founder */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-[#09C0F9]/30 p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#09C0F9]/10">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#09C0F9] to-[#0EA5E9] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-black font-bold text-2xl">BP</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#09C0F9] transition-colors">
                  Basanth Pedapati
                </h3>
                <p className="text-[#09C0F9] font-semibold mb-3">Founder</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Initiating vision, building teams, and driving overall growth
                  and direction.{" "}
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#09C0F9] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#09C0F9] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* President */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-[#09C0F9]/30 p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#09C0F9]/10">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#09C0F9] to-[#0EA5E9] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-black font-bold text-2xl">SV</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#09C0F9] transition-colors">
                  Sampath Varma
                </h3>
                <p className="text-[#09C0F9] font-semibold mb-3">President</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Leading GAAC with vision and passion, driving innovation
                  across all teams and fostering a culture of excellence.
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#09C0F9] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#09C0F9] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/*Vice President - Operations and Outreach */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-[#09C0F9]/30 p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#09C0F9]/10">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#09C0F9] to-[#0EA5E9] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-black font-bold text-2xl">DB</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#09C0F9] transition-colors">
                  Dil Barash
                </h3>
                <p className="text-[#09C0F9] font-semibold mb-3">
                  Vice President - Operations and Outreach
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Supporting strategic initiatives and coordinating between
                  teams to ensure seamless operations and growth.
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#09C0F9] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#09C0F9] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Secretary */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-[#09C0F9]/30 p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#09C0F9]/10">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#09C0F9] to-[#0EA5E9] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-black font-bold text-2xl">NG</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#09C0F9] transition-colors">
                  Narayana Gupta
                </h3>
                <p className="text-[#09C0F9] font-semibold mb-3">
                  Vice President - Technical
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Leading technical strategy and ensuring smooth execution of
                  all tech initiatives.{" "}
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#09C0F9] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#09C0F9] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Secretary*/}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-[#09C0F9]/30 p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#09C0F9]/10">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#09C0F9] to-[#0EA5E9] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-black font-bold text-2xl">R</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#09C0F9] transition-colors">
                  Raagni
                </h3>
                <p className="text-[#09C0F9] font-semibold mb-3">Secretary</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Managing communication, records, and ensuring smooth
                  coordination of activities.
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#09C0F9] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#09C0F9] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Events Coordinator */}
            {/* <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-[#09C0F9]/30 p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#09C0F9]/10">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#09C0F9] to-[#0EA5E9] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-black font-bold text-2xl">PT</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#09C0F9] transition-colors">
                  Priya Thakur
                </h3>
                <p className="text-[#09C0F9] font-semibold mb-3">
                  Events Coordinator
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Organizing workshops, competitions, and community events that
                  bring together passionate minds in technology.
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#09C0F9] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#09C0F9] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section
        id="contact-us"
        className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
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
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #09C0F9 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
    </div>
  );
}
