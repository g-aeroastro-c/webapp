"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Crown, Mail, Linkedin, Star, Award, Target, Heart, ArrowRight, Calendar, DollarSign, Settings } from "lucide-react";
import Image from "next/image";
import clubData from "@/data/clubData.json";

// Strongly typed interfaces for club data (can be moved to a separate types file later)
interface Executive {
  id: string;
  name: string;
  image?: string;
  position: string;
  department: string;
  year: string;
  bio: string;
  email: string;
  linkedin?: string;
  achievements: string[];
  color?: string; // legacy field still present in JSON
}
interface Member {
  id: string;
  name: string;
  team: string;
  role: string;
  year: string;
  email?: string;
  linkedin?: string;
  avatar?: string;
  skills?: string[];
}
interface Founder {
  name: string;
  image?: string;
  title: string;
  bio: string;
  email: string;
}
interface ClubData {
  founder: Founder;
  executives: Executive[];
  members: Member[];
}

export default function Home() {
  // Data sourced from centralized JSON
  const { executives, founder, members: jsonMembers } = clubData as ClubData;

  const [search, setSearch] = React.useState("");
  const [teamFilter, setTeamFilter] = React.useState<string>("All");
  const [yearFilter, setYearFilter] = React.useState<string>("All");
  const [sortKey, setSortKey] = React.useState<string>("name");
  const [page, setPage] = React.useState(1);
  const pageSize = 9;

  const teams = React.useMemo(() => Array.from(new Set(jsonMembers.map(m => m.team))), [jsonMembers]);
  const years = React.useMemo(() => Array.from(new Set(jsonMembers.map(m => m.year))), [jsonMembers]);

  const filtered = React.useMemo(() => {
    return jsonMembers
      .filter(m => m.name.toLowerCase().includes(search.toLowerCase()) || m.role.toLowerCase().includes(search.toLowerCase()))
      .filter(m => (teamFilter === 'All' ? true : m.team === teamFilter))
      .filter(m => (yearFilter === 'All' ? true : m.year === yearFilter))
      .sort((a, b) => {
        if (sortKey === 'name') return a.name.localeCompare(b.name);
        if (sortKey === 'team') return a.team.localeCompare(b.team);
        if (sortKey === 'year') return a.year.localeCompare(b.year);
        return 0;
      });
  }, [jsonMembers, search, teamFilter, yearFilter, sortKey]);

  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  React.useEffect(() => { setPage(1); }, [search, teamFilter, yearFilter, sortKey]);

  // Role style configuration for dynamic banners & avatars
  const roleStyles: Record<string, { gradient: string; ring: string; icon: React.ReactNode }> = {
    President: { gradient: "from-yellow-500 via-amber-400 to-orange-500", ring: "ring-yellow-400/60", icon: <Crown className="h-6 w-6 text-white" /> },
    "Vice President": { gradient: "from-purple-500 via-fuchsia-500 to-pink-500", ring: "ring-fuchsia-400/60", icon: <Star className="h-6 w-6 text-white" /> },
    "Technical Lead": { gradient: "from-emerald-500 via-green-500 to-teal-500", ring: "ring-emerald-400/60", icon: <Settings className="h-6 w-6 text-white" /> },
    Secretary: { gradient: "from-blue-500 via-cyan-500 to-sky-500", ring: "ring-sky-400/60", icon: <Mail className="h-6 w-6 text-white" /> },
    Treasurer: { gradient: "from-indigo-500 via-blue-600 to-violet-600", ring: "ring-indigo-400/60", icon: <DollarSign className="h-6 w-6 text-white" /> },
    "Events Coordinator": { gradient: "from-teal-500 via-cyan-500 to-emerald-500", ring: "ring-teal-400/60", icon: <Calendar className="h-6 w-6 text-white" /> },
  };

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

        {/* Executive / Leadership Team */}
        <motion.section id="executive-body" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="mb-24">
          <div className="flex items-center mb-10">
            <Crown className="h-10 w-10 text-yellow-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Executive Body</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((executive, index) => (
              <motion.div key={executive.name} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 * index }} className="group">
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/15 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                  {/* Decorative gradient banner */}
                  <div className={`h-28 relative overflow-hidden`}>                  
                    <div className={`absolute inset-0 bg-gradient-to-r ${roleStyles[executive.position]?.gradient || executive.color} opacity-90`}></div>
                    {/* Animated accent shapes */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
                    {/* Center Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                      <div className="scale-125">{roleStyles[executive.position]?.icon || <Users className="h-10 w-10 text-white" />}</div>
                    </div>
                    {/* Avatar */}
                    <div className="absolute -bottom-8 left-5 flex items-end gap-3">
                      <div className={`w-24 h-24 rounded-2xl ring-4 ${roleStyles[executive.position]?.ring || 'ring-cyan-400/50'} shadow-2xl overflow-hidden bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-105 transition-transform`}>                      
                        {executive.image ? (
                          <Image src={executive.image} alt={executive.name} width={96} height={96} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-white text-2xl font-semibold tracking-wide">{executive.name.split(' ').map(w=>w[0]).slice(0,2).join('')}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Card Content */}
                  <div className="pt-12 px-5 pb-5 relative">
                    {/* Floating role badge */}
                    <div className="absolute top-2 right-2 text-[10px] px-2 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-white/80 uppercase tracking-wide flex items-center gap-1">
                      {roleStyles[executive.position]?.icon && <span className="scale-75 opacity-70">{roleStyles[executive.position].icon}</span>}
                      {executive.position}
                    </div>
                    <h3 className="text-lg font-semibold text-white leading-tight">{executive.name}</h3>
                    <p className="text-sm font-medium text-cyan-300 mb-1">{executive.position}</p>
                    <p className="text-[10px] uppercase tracking-wide text-slate-400 mb-3">{executive.department} • {executive.year}</p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">{executive.bio}</p>
                    <div className="mb-3">
                      <h4 className="text-[11px] font-semibold text-white mb-1 flex items-center"><Award className="h-3 w-3 mr-1 text-yellow-400" /> Key Achievements</h4>
                      <ul className="space-y-1">
                        {executive.achievements.map((a,i)=> (
                          <li key={i} className="text-[11px] text-slate-300 flex items-center"><span className="w-1 h-1 rounded-full bg-cyan-400 mr-2" />{a}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                      <a href={`mailto:${executive.email}`} className="p-1.5 bg-white/10 rounded-md hover:bg-white/20 transition" title="Email"><Mail className="h-4 w-4 text-cyan-300" /></a>
                      <a href={executive.linkedin} className="p-1.5 bg-white/10 rounded-md hover:bg-white/20 transition" title="LinkedIn"><Linkedin className="h-4 w-4 text-cyan-300" /></a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Members Directory */}
        <motion.section id="members" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><Users className="h-7 w-7 text-cyan-400" /> Club Members Directory</h2>
          {/* Controls */}
          <div className="grid gap-4 md:grid-cols-4 mb-6">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search name or role..."
              className="md:col-span-2 w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400/50 outline-none text-sm text-white placeholder:text-slate-500"
            />
            <select value={teamFilter} onChange={e => setTeamFilter(e.target.value)} className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400/50 text-sm text-white">
              <option value="All">All Teams</option>
              {teams.map(t => <option key={t} value={t}>{t}</option>)}
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
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginated.map(m => {
              const teamColorMap: Record<string, string> = {
                Robotics: "from-rose-500 to-orange-500",
                Programming: "from-cyan-500 to-blue-600",
                Astronomy: "from-indigo-500 to-purple-600",
              };
              const gradient = teamColorMap[m.team] || "from-slate-500 to-slate-700";
              return (
                <div key={m.id} className="relative bg-white/5 border border-white/10 rounded-xl p-4 hover:border-cyan-400/40 transition group overflow-hidden">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${gradient} mix-blend-overlay`} />
                  <div className="flex items-center gap-3 mb-2 relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-semibold text-sm shadow-lg ring-2 ring-white/30`}>
                      {m.avatar ? <Image src={m.avatar} alt={m.name} width={48} height={48} className="w-full h-full object-cover rounded-xl" /> : m.name.split(' ').map(w=>w[0]).slice(0,2).join('')}
                    </div>
                    <div className="flex-1">
                      <span className="block text-sm font-semibold text-white leading-tight">{m.name}</span>
                      <span className="text-[10px] uppercase tracking-wide text-cyan-300/80">{m.team}</span>
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
          {/* Pagination */}
          <div className="flex items-center justify-between mt-6 text-xs text-slate-400">
            <span>Showing {(page-1)*pageSize + 1}-{Math.min(page*pageSize, filtered.length)} of {filtered.length}</span>
            <div className="flex gap-2">
              <button disabled={page===1} onClick={()=>setPage(p=>p-1)} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 disabled:opacity-30 hover:border-cyan-400/50 text-white">Prev</button>
              <span className="px-2 py-1">Page {page}/{totalPages}</span>
              <button disabled={page===totalPages} onClick={()=>setPage(p=>p+1)} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 disabled:opacity-30 hover:border-cyan-400/50 text-white">Next</button>
            </div>
          </div>
        </motion.section>

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
    </div>
  );
}
