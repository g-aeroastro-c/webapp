"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ClipboardList, Rocket, Send, Users, CheckCircle2, BadgeCheck, Info, ShieldCheck, HelpCircle, Phone, Mail, MessageCircle, X, User } from "lucide-react";
import axios from "@/lib/axios";
import { TEAM_OPTIONS, YEAR_OPTIONS } from "@/types/recruitment";

type Team = typeof TEAM_OPTIONS[number]
type Year = typeof YEAR_OPTIONS[number]

export default function RecruitmentPage() {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showReview, setShowReview] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState<{
    name: string;
    email: string;
    track: string;
  } | null>(null);
  const [form, setForm] = useState<{ 
    full_name: string;
    registration_number: string;
    branch: string;
    year: Year;
    phone: string;
    email: string;
    team_preference: Team;
    team_specific: Record<string, unknown>;
  }>({
    full_name: "",
    registration_number: "",
    branch: "",
    year: YEAR_OPTIONS[0],
    phone: "",
    email: "",
    team_preference: TEAM_OPTIONS[0],
    team_specific: {},
  });

  const canSubmit = useMemo(() => {
    return (
      form.full_name.trim().length > 2 &&
      /.+@.+\..+/.test(form.email) &&
  form.registration_number.trim().length > 2 &&
  form.branch.trim().length > 1 &&
  form.team_preference &&
  form.year &&
  /^(\+?\d[\d\s-]{8,})$/.test(form.phone || '')
    );
  }, [form]);

  // Validate dynamic section: all required except any Google Drive sample links
  const validateTeamSpecific = (): string | null => {
    const t = form.team_preference;
  const ts = form.team_specific as Record<string, unknown>;
    const missing: string[] = [];

    const reqStr = (val: unknown) => typeof val === 'string' && val.trim().length > 0;
    const reqArr = (val: unknown) => Array.isArray(val) && val.length > 0;

    if (t === 'Stargazers (Astronomy, Space and Rocketry)') {
      if (!reqStr(ts.astro_events_experience)) missing.push('Astronomy/stargazing experience');
      if (!reqStr(ts.excitement_about_astronomy)) missing.push('What excites you');
      if (!reqArr(ts.areas)) missing.push('Areas of contribution');
      if (!reqStr(ts.favorite_space_film)) missing.push('Favorite space film');
      if (!reqStr(ts.mission_idea)) missing.push('Space mission idea');
      if (typeof ts.raptor_interest !== 'boolean') missing.push('Raptor sub-team interest');
    } else if (t === 'Robusta (Robotics & Automation)') {
      if (!reqStr(ts.fascination_areas)) missing.push('Fascination areas');
      if (!reqStr(ts.dream_robot)) missing.push('Dream robot');
      if (!reqStr(ts.past_projects)) missing.push('Past projects');
      if (!reqStr(ts.microcontroller_explanation)) missing.push('Microcontroller explanation');
      if (!reqStr(ts.robusta_interest)) missing.push('Programming vs hardware');
      if (!reqStr(ts.robusta_preference)) missing.push('Preference choice');
      if (!reqStr(ts.robusta_preference_reason)) missing.push('Preference reason');
    } else if (t === 'Programmers (Coding & Development)') {
      if (!reqStr(ts.languages_frameworks)) missing.push('Languages & frameworks');
      if (!reqStr(ts.project_example)) missing.push('Project example');
      if (!reqArr(ts.programmers_interests)) missing.push('Interests');
      if (!reqStr(ts.debug_approach)) missing.push('Bug approach');
      if (!reqStr(ts.fast_learning_example)) missing.push('Fast learning example');
      if (!reqStr(ts.programmers_project_idea)) missing.push('Club project idea');
    } else if (t === 'Core Team – Content Writing') {
      if (!reqStr(ts.cw_why)) missing.push('Why Content Writing');
      if (!reqStr(ts.cw_strength)) missing.push('Strength pick');
      if (!reqStr(ts.cw_caption)) missing.push('Caption');
      if (!reqStr(ts.cw_explain_approach)) missing.push('Explain approach');
      if (!reqArr(ts.cw_topics)) missing.push('Topics');
      if (!reqStr(ts.cw_block_approach)) missing.push("Writer's block approach");
    } else if (t === 'Core Team – Graphic Designing') {
      if (!reqStr(ts.gd_why)) missing.push('Why Graphic Designing');
      if (!reqArr(ts.gd_tools)) missing.push('Design tools');
      // gd_samples_link intentionally optional
      if (!reqStr(ts.gd_poster_priority)) missing.push('Poster priority');
      if (!reqArr(ts.gd_interests)) missing.push('Design interests');
      if (!reqStr(ts.gd_stargazing_poster_concept)) missing.push('Stargazing poster concept');
    } else if (t === 'Core Team – Photography/Videography') {
      if (!reqStr(ts.pv_why)) missing.push('Why Photography/Videography');
      if (!reqStr(ts.pv_equipment_access)) missing.push('Equipment access');
      // pv_samples_link intentionally optional
      if (!reqArr(ts.pv_interests)) missing.push('Interest areas');
      if (!reqStr(ts.pv_highlight_shots)) missing.push('Highlight video shots');
      // pv_editing_comfort has a default; no strict check needed
    }

    if (missing.length > 0) {
      return `Please complete the ${t} questions: ${missing.join(', ')}.`;
    }
    return null;
  };

  // First step: open review modal if valid
  const handleOpenReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setMessage(null);
    setError(null);
    if (!canSubmit) {
      setError('Please complete all required fields.');
      return;
    }
    const tsError = validateTeamSpecific();
    if (tsError) {
      setError(tsError);
      return;
    }
    setShowReview(true);
  };

  // Final step: actually submit to API
  const submitApplication = async () => {
    if (!canSubmit || submitting) return;
    setSubmitting(true);
    setMessage(null);
    setError(null);
    try {
      const tsError = validateTeamSpecific();
      if (tsError) {
        setError(tsError);
        setSubmitting(false);
        setShowReview(false);
        return;
      }
      // Capture summary before we reset the form
      const summary = {
        name: form.full_name,
        email: form.email,
        track: form.team_preference,
      };
      const payload = { ...form, whatsapp_phone: form.phone };
      const res = await axios.post("/api/recruitment", payload);
      if (res.status === 200) {
        setMessage(null);
        setLastSubmitted(summary);
        setShowThankYou(true);
        setShowReview(false);
        setForm({
          full_name: "",
          registration_number: "",
          branch: "",
          year: YEAR_OPTIONS[0],
          phone: "",
          email: "",
          team_preference: TEAM_OPTIONS[0],
          team_specific: {},
        });
      }
    } catch (err: unknown) {
      let msg = "Submission failed";
      if (typeof err === 'object' && err && 'response' in err) {
        const resp = (err as { response?: { data?: { error?: string } } }).response;
        if (resp?.data?.error) msg = resp.data.error;
      }
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Help Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        onClick={() => setShowHelp(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group touch-manipulation"
        title="Recruitment Helpline"
      >
        <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
        <div className="absolute -top-10 sm:-top-12 right-0 bg-slate-900 text-white text-xs px-2 sm:px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Recruitment Helpline
        </div>
      </motion.button>

      <main className="relative z-30 max-w-5xl mx-auto px-3 sm:px-4 md:px-8 pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-16">
      <motion.header initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-30 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-1 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
          <Rocket className="h-3 w-3 sm:h-4 sm:w-4" /> Recruitment Open • 2025 🚀
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight">
          GITAM Aero Astro Club Recruitment 2025
        </h1>
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
          Welcome to the official recruitment portal for the GITAM Aero Astro Club (GAAC). Join a community of innovators across astronomy, robotics, software, and club operations. Fill out this form—shortlisted candidates will receive interview and task details by email.
        </p>
      </motion.header>

    {/* Key info badges */}
  <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="relative z-30 mb-8 sm:mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
        <div className="flex items-center gap-2 px-2.5 sm:px-3 py-2.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm">
          <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" /> ✅ Eligibility: 1st–Pre-Final Year GITAM students
        </div>
        <div className="flex items-center gap-2 px-2.5 sm:px-3 py-2.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm">
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" /> 🧩 Teams: Stargazers • Robusta • Programmers • Core Team
        </div>
        <div className="flex items-center gap-2 px-2.5 sm:px-3 py-2.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm sm:col-span-2 lg:col-span-1">
          <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300 shrink-0" /> 🛠️ Process: Apply → Shortlist → Task/Interview → Result
        </div>
      </motion.section>

    {/* Process Overview */}
  <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative z-30 mb-10 sm:mb-14">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3"><ClipboardList className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400" /> How it works</h2>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />, title: "Apply", desc: "Submit your profile & interests" },
            { icon: <ClipboardList className="h-5 w-5 sm:h-6 sm:w-6" />, title: "Review", desc: "Team evaluates submissions" },
            { icon: <Send className="h-5 w-5 sm:h-6 sm:w-6" />, title: "Task", desc: "(Optional) receive a challenge" },
            { icon: <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />, title: "Interview", desc: "Schedule & confirm slot" },
          ].map((s, i) => (
            <motion.div 
              key={s.title} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="relative bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300 group overflow-hidden active:scale-95 touch-manipulation"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 transition-opacity duration-300" />
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-300 mb-2 sm:mb-3 ring-1 ring-emerald-400/30">
                {s.icon}
              </div>
              <h3 className="text-white font-semibold text-sm tracking-wide mb-1">{i + 1}. {s.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Help & Support Section */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.15 }} 
        className="relative z-30 mb-6 sm:mb-8"
      >
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-400/30 rounded-xl p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 border border-blue-400/30 rounded-xl flex items-center justify-center mx-auto sm:mx-0">
              <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center justify-center sm:justify-start gap-2">
                Recruitment Helpline - We&apos;re Here for You! 💬
              </h3>
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                Stuck while filling the application? Have questions about the process? Don&apos;t worry - our recruitment helpline is available 24/7 to assist you!
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Email Support */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="font-semibold text-white">Email Support</span>
                  </div>
                  <a 
                    href="mailto:aeroastro_vzg@gitam.in"
                    className="text-cyan-300 hover:text-cyan-200 transition-colors text-sm font-medium"
                  >
                    aeroastro_vzg@gitam.in
                  </a>
                  <p className="text-slate-400 text-xs mt-1">Best for detailed questions • Response within 24hrs</p>
                </div>

                {/* Phone Support */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-5 h-5 text-green-400" />
                    <span className="font-semibold text-white">Call/WhatsApp</span>
                  </div>
                  <div className="space-y-1">
                    <a 
                      href="tel:+919553316797"
                      className="block text-green-300 hover:text-green-200 transition-colors text-sm font-medium"
                    >
                      +91 95533 16797
                    </a>
                    <a 
                      href="tel:+917382338771"
                      className="block text-green-300 hover:text-green-200 transition-colors text-sm font-medium"
                    >
                      +91 73823 38771
                    </a>
                  </div>
                  <p className="text-slate-400 text-xs mt-1">For urgent assistance • Available 24 hrs</p>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
                <a
                  href="https://wa.me/919553316797?text=Hi! I need help with the GAAC recruitment application form."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 active:scale-95 transition-all duration-200 text-sm font-medium touch-manipulation"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Help
                </a>
                <button
                  onClick={() => setShowHelp(true)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 active:scale-95 transition-all duration-200 text-sm font-medium touch-manipulation"
                >
                  <HelpCircle className="w-4 h-4" />
                  Common Questions
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Application Form */}
      <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative z-30 mb-16 sm:mb-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
          <div className="flex items-center gap-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Application Form</h2>
            <span className="text-2xl">✍️</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-medium">
              ⏱️ 3–5 mins
            </span>
            <span className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-medium">
              📝 Auto-save
            </span>
          </div>
        </div>

        {/* Enhanced Form Container */}
        <div className="relative bg-gradient-to-br from-white/8 via-white/5 to-white/8 border border-white/15 rounded-3xl backdrop-blur-md overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
          
          <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
            <form onSubmit={handleOpenReview} className="space-y-8 sm:space-y-10 md:space-y-12">
              
              {/* Section: Applicant Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center">
                    <span className="text-lg sm:text-xl">👤</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Personal Information</h3>
                    <p className="text-sm text-slate-400">Tell us how to reach you</p>
                  </div>
                </div>

                {/* Enhanced Grid Layout for Desktop and Mobile */}
                <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {/* Full Name */}
                  <div className="group lg:col-span-1">
                    <label className="block text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                      <span className="text-base">👤</span>
                      Full Name
                    </label>
                    <div className="relative">
                      <input 
                        value={form.full_name} 
                        onChange={(e)=>setForm({...form, full_name: e.target.value})} 
                        placeholder="Enter your full name" 
                        className="w-full px-4 py-4 sm:py-5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400/50 hover:border-white/25 transition-all duration-300 group-hover:bg-white/10 touch-manipulation text-sm sm:text-base" 
                        required 
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Registration Number */}
                  <div className="group lg:col-span-1">
                    <label className="block text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                      <span className="text-base">🪪</span>
                      Registration Number
                    </label>
                    <div className="relative">
                      <input 
                        value={form.registration_number} 
                        onChange={(e)=>setForm({...form, registration_number: e.target.value})} 
                        placeholder="e.g., 1223XXXXX" 
                        className="w-full px-4 py-4 sm:py-5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400/50 hover:border-white/25 transition-all duration-300 group-hover:bg-white/10 touch-manipulation text-sm sm:text-base" 
                        required 
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Branch */}
                  <div className="group lg:col-span-1">
                    <label className="block text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                      <span className="text-base">🏷️</span>
                      Branch
                    </label>
                    <div className="relative">
                      <input 
                        value={form.branch} 
                        onChange={(e)=>setForm({...form, branch: e.target.value})} 
                        placeholder="e.g., CSE / ECE / Mechanical" 
                        className="w-full px-4 py-4 sm:py-5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400/50 hover:border-white/25 transition-all duration-300 group-hover:bg-white/10 touch-manipulation text-sm sm:text-base" 
                        required 
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Year of Study */}
                  <div className="group md:col-span-1">
                    <label className="block text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                      <span className="text-base">🎓</span>
                      Year of Study
                    </label>
                    <div className="relative">
                      <select 
                        value={form.year} 
                        onChange={(e)=>setForm({...form, year: e.target.value as Year})} 
                        className="w-full px-4 py-4 sm:py-5 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400/50 hover:border-white/25 transition-all duration-300 group-hover:bg-white/10 touch-manipulation text-sm sm:text-base appearance-none cursor-pointer"
                      >
                        {YEAR_OPTIONS.map((y) => <option key={y} value={y} className="bg-slate-900 text-white">{y}</option>)}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="group md:col-span-1">
                    <label className="block text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                      <span className="text-base">📞</span>
                      Phone Number
                    </label>
                    <div className="relative">
                      <input 
                        value={form.phone} 
                        onChange={(e)=>setForm({...form, phone: e.target.value})} 
                        placeholder="+91 98765 43210"
                        type="tel"
                        className="w-full px-4 py-4 sm:py-5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400/50 hover:border-white/25 transition-all duration-300 group-hover:bg-white/10 touch-manipulation text-sm sm:text-base" 
                        required 
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">Prefer your WhatsApp-enabled number for faster updates.</p>
                  </div>

              {/* Email Address */}
              <div className="group">
                <label className="block text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                  <span className="text-base">📧</span>
                  Email Address
                </label>
                <div className="relative">
                  <input 
                    type="email" 
                    value={form.email} 
                    onChange={(e)=>setForm({...form, email: e.target.value})} 
                    placeholder="yourname@gitam.in" 
                    className="w-full px-4 py-4 sm:py-5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400/50 hover:border-white/25 transition-all duration-300 group-hover:bg-white/10 touch-manipulation text-sm sm:text-base" 
                    required 
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Team Preference */}
              <div className="group md:col-span-2">
                <label className="block text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                  <span className="text-base">🎯</span>
                  Preferred Track
                </label>
                <div className="relative">
                  <select 
                    value={form.team_preference} 
                    onChange={(e)=>{
                      const value = e.target.value as Team;
                      setForm(prev=>({ ...prev, team_preference: value, team_specific: {} }))
                    }} 
                    className="w-full px-4 py-4 sm:py-5 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400/50 hover:border-white/25 transition-all duration-300 group-hover:bg-white/10 touch-manipulation text-sm sm:text-base appearance-none cursor-pointer"
                  >
                    {TEAM_OPTIONS.map((t) => <option key={t} value={t} className="bg-slate-900 text-white">{t}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>

            {/* Dynamic section per track - placeholders for now */}
            <div className="md:col-span-2 mt-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-white font-semibold text-sm mb-3">📸✨ Additional Questions — {form.team_preference}</h3>
                {form.team_preference === 'Stargazers (Astronomy, Space and Rocketry)' && (
                  <div className="space-y-5">
                    {/* Description */}
                    <div className="text-slate-300 text-sm leading-relaxed bg-white/5 border border-white/10 rounded-lg p-4">
                      <p>Stargazers is the astronomy & space exploration wing of the GITAM Aero Astro Club. We dive into the cosmos through night sky observations, astrophotography, space research, and public outreach — bringing the universe a little closer to our campus.</p>
                      <p className="mt-3">Raptor is our dedicated propulsion & rocketry division within Stargazers. Its mission is to design, develop, and test propulsion systems for aerospace applications — starting with small-scale rocketry and moving toward advanced hybrid and liquid propulsion technologies.</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {/* Q1 */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Have you ever participated in any astronomy or stargazing events before? If yes, what was it about?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, astro_events_experience: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Your experience (if any)"></textarea>
                      </div>

                      {/* Q2 */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">What excites you most about astronomy and the universe?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, excitement_about_astronomy: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Share what fascinates you"></textarea>
                      </div>

                      {/* Q3 Areas - checkbox group */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Which areas of Stargazers would you like to contribute to?</label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {[
                            'Night sky observations & telescope operations',
                            'Data analysis & space simulation software',
                            'Astronomy research & article writing',
                            'Event planning for observation nights and workshops',
                            'Public science talks & educational sessions',
                          ].map((opt) => {
                            const areas = (form.team_specific.areas as string[] | undefined) ?? []
                            const checked = areas.includes(opt)
                            return (
                              <label key={opt} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-sm">
                                <input
                                  type="checkbox"
                                  className="accent-emerald-500"
                                  checked={checked}
                                  onChange={(e)=>{
                                    const next = new Set(areas)
                                    if (e.target.checked) next.add(opt); else next.delete(opt)
                                    setForm({...form, team_specific: { ...form.team_specific, areas: Array.from(next) }})
                                  }}
                                />
                                <span>{opt}</span>
                              </label>
                            )
                          })}
                        </div>
                      </div>

                      {/* Q4 */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Describe a sci-fi or space-related film that completely drew you in, and why.</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, favorite_space_film: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Your thoughts"></textarea>
                      </div>

                      {/* Q5 */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">You get to design a space mission with unlimited budget. What’s its main goal?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, mission_idea: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Your mission concept"></textarea>
                      </div>

                      {/* Q6 Raptor interest */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Would you like to be considered for the Raptor sub-team (Rocketry) as well?</label>
                        <div className="flex items-center gap-4">
                          {[{label:'Yes', val:true},{label:'No', val:false}].map(opt => (
                            <label key={String(opt.val)} className="inline-flex items-center gap-2">
                              <input
                                type="radio"
                                name="raptor_interest"
                                className="accent-emerald-500"
                                checked={Boolean(form.team_specific.raptor_interest) === opt.val}
                                onChange={()=>setForm({...form, team_specific: { ...form.team_specific, raptor_interest: opt.val }})}
                              />
                              <span className="text-slate-200 text-sm">{opt.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {form.team_preference === 'Robusta (Robotics & Automation)' && (
                  <div className="space-y-5">
                    {/* Description */}
                    <div className="text-slate-300 text-sm leading-relaxed bg-white/5 border border-white/10 rounded-lg p-4">
                      <p>Robusta is the robotics & automation wing of the GITAM Aero Astro Club. We design, build, and program robots for challenges like Robo Wars, and autonomous engineering projects. Our work ranges from mechanical design to AI programming — combining creativity, engineering, and teamwork to push the limits of what machines can do.</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {/* Q1 */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">What areas of robotics or automation fascinate you the most?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, fascination_areas: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Your interests (e.g., autonomous navigation, CV, control systems, mechatronics)"></textarea>
                      </div>

                      {/* Q2 */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">If you could build any robot just for fun, with no deadlines or rules, what would it do?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, dream_robot: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Describe your robot idea"></textarea>
                      </div>

                      {/* Q3 */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Have you worked on any hardware/software projects (Arduino, Raspberry Pi, etc.) before? If yes, what were those about?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, past_projects: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="List any relevant projects"></textarea>
                      </div>

                      {/* Q4 */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">How would you explain what a microcontroller does to someone who has never heard of it?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, microcontroller_explanation: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Your simple explanation"></textarea>
                      </div>

                      {/* Q5 */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Which excites you more?</label>
                        <div className="flex items-center gap-4 flex-wrap">
                          {['Programming robots', 'Building hardware', 'Both'].map(label => (
                            <label key={label} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                              <input
                                type="radio"
                                name="robusta_interest"
                                className="accent-emerald-500"
                                checked={form.team_specific.robusta_interest === label}
                                onChange={()=>setForm({...form, team_specific: { ...form.team_specific, robusta_interest: label }})}
                              />
                              <span className="text-slate-200 text-sm">{label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Q6 */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Pick one and explain why:</label>
                        <div className="flex items-center gap-4 flex-wrap">
                          {['Perfect circuits', 'Messy prototype that works'].map(label => (
                            <label key={label} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                              <input
                                type="radio"
                                name="robusta_preference"
                                className="accent-emerald-500"
                                checked={form.team_specific.robusta_preference === label}
                                onChange={()=>setForm({...form, team_specific: { ...form.team_specific, robusta_preference: label }})}
                              />
                              <span className="text-slate-200 text-sm">{label}</span>
                            </label>
                          ))}
                        </div>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, robusta_preference_reason: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Explain your choice"></textarea>
                      </div>
                    </div>
                  </div>
                )}
                {form.team_preference === 'Programmers (Coding & Development)' && (
                  <div className="space-y-5">
                    {/* Description */}
                    <div className="text-slate-300 text-sm leading-relaxed bg-white/5 border border-white/10 rounded-lg p-4">
                      <p>The Programmers Team builds software solutions for the GITAM Aero Astro Club — from AI/ML models for Raptor, to automation scripts for Robusta, to astronomy data tools for Stargazers. We code, debug, and innovate to make ideas real.</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {/* Q1 */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">What programming languages and frameworks are you most comfortable with?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, languages_frameworks: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="e.g., Python, React, Node.js, TensorFlow, ROS"></textarea>
                      </div>

                      {/* Q2 */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Share a project you’ve worked on (about the Languages/Frameworks/Libraries used). What problem did it solve?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, project_example: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Project details"></textarea>
                      </div>

                      {/* Q3 Interests - checkbox group */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Which of these interests you the most?</label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {[
                            'AI/ML development',
                            'Web/App development',
                            'Automation tools & scripting',
                            'Data analysis & visualization',
                          ].map((opt) => {
                            const interests = (form.team_specific.programmers_interests as string[] | undefined) ?? []
                            const checked = interests.includes(opt)
                            return (
                              <label key={opt} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-sm">
                                <input
                                  type="checkbox"
                                  className="accent-emerald-500"
                                  checked={checked}
                                  onChange={(e)=>{
                                    const next = new Set(interests)
                                    if (e.target.checked) next.add(opt); else next.delete(opt)
                                    setForm({...form, team_specific: { ...form.team_specific, programmers_interests: Array.from(next) }})
                                  }}
                                />
                                <span>{opt}</span>
                              </label>
                            )
                          })}
                        </div>
                      </div>

                      {/* Q4 Debug approach - radio */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Pick your approach to bugs</label>
                        <div className="flex items-center gap-4 flex-wrap">
                          {[
                            'Debug methodically, step-by-step',
                            'Rewrite from scratch',
                            'Try random fixes until it works',
                          ].map(label => (
                            <label key={label} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                              <input
                                type="radio"
                                name="debug_approach"
                                className="accent-emerald-500"
                                checked={form.team_specific.debug_approach === label}
                                onChange={()=>setForm({...form, team_specific: { ...form.team_specific, debug_approach: label }})}
                              />
                              <span className="text-slate-200 text-sm">{label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Q5 */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Describe a time when you had to learn a new technology fast. How did you do it?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, fast_learning_example: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Your story"></textarea>
                      </div>

                      {/* Q6 */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">What would you love to build as a club project?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, programmers_project_idea: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Your idea"></textarea>
                      </div>
                    </div>
                  </div>
                )}
                {form.team_preference === 'Core Team – Content Writing' && (
                  <div className="space-y-5">
                    {/* Description */}
                    <div className="text-slate-300 text-sm leading-relaxed bg-white/5 border border-white/10 rounded-lg p-4">
                      <p>Content Writers are the voice of GAAC. They craft engaging captions, detailed event reports, and informative posts that make our audience feel the excitement of space, robotics, and engineering. From social media snippets to long-form articles, they help shape how the world sees our club.</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {/* Q1 */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Why do you want to be a content writer for GAAC?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, cw_why: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Your motivation"></textarea>
                      </div>

                      {/* Q2 Strength - radio */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Pick one</label>
                        <div className="flex items-center gap-4 flex-wrap">
                          {[
                            'I’m better at creative storytelling',
                            'I’m better at technical/explainer writing',
                            'I’m good at both',
                          ].map(label => (
                            <label key={label} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                              <input
                                type="radio"
                                name="cw_strength"
                                className="accent-emerald-500"
                                checked={form.team_specific.cw_strength === label}
                                onChange={()=>setForm({...form, team_specific: { ...form.team_specific, cw_strength: label }})}
                              />
                              <span className="text-slate-200 text-sm">{label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Q3 Caption */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Write a short caption (max 20 words) for a photo of our club observing the night sky.</label>
                        <input onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, cw_caption: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Your caption" />
                        <div className="text-[11px] text-slate-400">Words: {String(form.team_specific.cw_caption || '').trim() ? String(form.team_specific.cw_caption || '').trim().split(/\s+/).length : 0} / 20</div>
                      </div>

                      {/* Q4 Explain approach */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">If given a complex space concept, how would you make it engaging for a general audience?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, cw_explain_approach: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Your approach"></textarea>
                      </div>

                      {/* Q5 Topics - checkbox group */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Which topics would you be most excited to write about?</label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {[
                            'Astronomy & space exploration',
                            'Robotics & Technology',
                            'Club events & activities',
                            'Member spotlight & interviews',
                          ].map((opt) => {
                            const topics = (form.team_specific.cw_topics as string[] | undefined) ?? []
                            const checked = topics.includes(opt)
                            return (
                              <label key={opt} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-sm">
                                <input
                                  type="checkbox"
                                  className="accent-emerald-500"
                                  checked={checked}
                                  onChange={(e)=>{
                                    const next = new Set(topics)
                                    if (e.target.checked) next.add(opt); else next.delete(opt)
                                    setForm({...form, team_specific: { ...form.team_specific, cw_topics: Array.from(next) }})
                                  }}
                                />
                                <span>{opt}</span>
                              </label>
                            )
                          })}
                        </div>
                      </div>

                      {/* Q6 Writer's block */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">What’s your approach when you get writer’s block?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, cw_block_approach: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Your approach"></textarea>
                      </div>
                    </div>
                  </div>
                )}
                {form.team_preference === 'Core Team – Graphic Designing' && (
                  <div className="space-y-5">
                    {/* Description */}
                    <div className="text-slate-300 text-sm leading-relaxed bg-white/5 border border-white/10 rounded-lg p-4">
                      <p>Graphic Designers turn GAAC’s ideas into visuals that inspire. From social media posts to event posters, your designs will capture the excitement of space, robotics, and engineering while keeping our brand consistent and eye-catching.</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {/* Q1: Why GD */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Why do you want to be a graphic designer for GAAC?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, gd_why: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Your motivation"></textarea>
                      </div>

                      {/* Q2: Tools multi-select + other */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Which tools/software do you use for designing?</label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {['Photoshop','Canva','Adobe Illustrator','Figma','GIMP/Inkscape'].map((opt) => {
                            const tools = (form.team_specific.gd_tools as string[] | undefined) ?? []
                            const checked = tools.includes(opt)
                            return (
                              <label key={opt} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-sm">
                                <input
                                  type="checkbox"
                                  className="accent-emerald-500"
                                  checked={checked}
                                  onChange={(e)=>{
                                    const next = new Set(tools)
                                    if (e.target.checked) next.add(opt); else next.delete(opt)
                                    setForm({...form, team_specific: { ...form.team_specific, gd_tools: Array.from(next) }})
                                  }}
                                />
                                <span>{opt}</span>
                              </label>
                            )
                          })}
                        </div>
                        <input onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, gd_tools_other: e.target.value }})} className="mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Other tools (list here)" />
                      </div>

                      {/* Q3: Poster priority radio */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">What’s more important for a club poster?</label>
                        <div className="flex items-center gap-4 flex-wrap">
                          {[
                            'A striking visual, even if text is minimal',
                            'Clear information, even if visuals are simple',
                            'A balance of both',
                          ].map(label => (
                            <label key={label} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                              <input
                                type="radio"
                                name="gd_poster_priority"
                                className="accent-emerald-500"
                                checked={form.team_specific.gd_poster_priority === label}
                                onChange={()=>setForm({...form, team_specific: { ...form.team_specific, gd_poster_priority: label }})}
                              />
                              <span className="text-slate-200 text-sm">{label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Q4: Samples drive link with instruction */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Upload samples of your previous work (Google Drive link)</label>
                        <input onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, gd_samples_link: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="https://drive.google.com/… (ensure link is public)" />
                        <p className="text-[11px] text-yellow-300/90">Add all sample folders/files to a single Google Drive link and set it to public access before submitting.</p>
                      </div>

                      {/* Q5: Types of design work + other */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Which types of design work are you most interested in?</label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {['Event posters','Social media templates','Infographics','Merchandise (stickers, T-shirts etc)'].map((opt) => {
                            const interests = (form.team_specific.gd_interests as string[] | undefined) ?? []
                            const checked = interests.includes(opt)
                            return (
                              <label key={opt} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-sm">
                                <input
                                  type="checkbox"
                                  className="accent-emerald-500"
                                  checked={checked}
                                  onChange={(e)=>{
                                    const next = new Set(interests)
                                    if (e.target.checked) next.add(opt); else next.delete(opt)
                                    setForm({...form, team_specific: { ...form.team_specific, gd_interests: Array.from(next) }})
                                  }}
                                />
                                <span>{opt}</span>
                              </label>
                            )
                          })}
                        </div>
                        <input onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, gd_interests_other: e.target.value }})} className="mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Others (add here)" />
                      </div>

                      {/* Q6: Stargazing poster concept */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">If you had to design a poster for a stargazing night, what would be your main idea or visual concept?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, gd_stargazing_poster_concept: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Your concept"></textarea>
                      </div>
                    </div>
                  </div>
                )}
                {form.team_preference === 'Core Team – Photography/Videography' && (
                  <div className="space-y-5">
                    {/* Description */}
                    <div className="text-slate-300 text-sm leading-relaxed bg-white/5 border border-white/10 rounded-lg p-4">
                      <p>Photographers & Videographers will be the eyes of GAAC. From capturing rocket launches and stargazing nights to filming interviews and behind-the-scenes moments, your work will tell the visual story of our club. Whether it’s through stills or motion, you’ll help people see the magic of aerospace and robotics.</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {/* Q1: Motivation */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Why do you want to be a photographer/videographer for GAAC?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, pv_why: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Your motivation"></textarea>
                      </div>

                      {/* Q2: Equipment access */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Do you own or have regular access to photography/videography equipment?</label>
                        <div className="flex items-center gap-4 flex-wrap">
                          {[ 
                            'Yes, professional camera gear',
                            'Yes, basic DSLR/mirrorless',
                            'Only smartphone camera',
                            'No, but willing to learn and arrange',
                          ].map(label => (
                            <label key={label} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                              <input
                                type="radio"
                                name="pv_equipment_access"
                                className="accent-emerald-500"
                                checked={form.team_specific.pv_equipment_access === label}
                                onChange={()=>setForm({...form, team_specific: { ...form.team_specific, pv_equipment_access: label }})}
                              />
                              <span className="text-slate-200 text-sm">{label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Q3: Samples drive link with instruction */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Upload samples of your previous work (Google Drive link)</label>
                        <input onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, pv_samples_link: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="https://drive.google.com/... (ensure link is public)" />
                        <p className="text-[11px] text-yellow-300/90">Add all sample folders/files to a single Google Drive link and set it to public access before submitting.</p>
                      </div>

                      {/* Q4: Interest areas - checkbox group */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Which areas are you more interested in?</label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {[
                            'Event photography',
                            'Event videography',
                            'Editing & post-production',
                            'Drone photography/videography',
                          ].map((opt) => {
                            const interests = (form.team_specific.pv_interests as string[] | undefined) ?? []
                            const checked = interests.includes(opt)
                            return (
                              <label key={opt} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-sm">
                                <input
                                  type="checkbox"
                                  className="accent-emerald-500"
                                  checked={checked}
                                  onChange={(e)=>{
                                    const next = new Set(interests)
                                    if (e.target.checked) next.add(opt); else next.delete(opt)
                                    setForm({...form, team_specific: { ...form.team_specific, pv_interests: Array.from(next) }})
                                  }}
                                />
                                <span>{opt}</span>
                              </label>
                            )
                          })}
                        </div>
                      </div>

                      {/* Q5: 30-second highlight shots */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">If you had to make a 30-second highlight video for a stargazing night, what shots would you include?</label>
                        <textarea rows={3} onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, pv_highlight_shots: e.target.value }})} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500" placeholder="Shot list or description"></textarea>
                      </div>

                      {/* Q6: Editing software comfort - range slider */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">How comfortable are you with editing software?</label>
                        <div className="flex items-center gap-3">
                          <input
                            type="range"
                            min={1}
                            max={5}
                            step={1}
                            value={Number(form.team_specific.pv_editing_comfort ?? 3)}
                            onChange={(e)=>setForm({...form, team_specific: { ...form.team_specific, pv_editing_comfort: parseInt(e.target.value, 10) }})}
                            className="w-full accent-emerald-500"
                          />
                          <span className="text-slate-200 text-sm w-6 text-center">{Number(form.team_specific.pv_editing_comfort ?? 3)}</span>
                        </div>
                        <div className="flex justify-between text-[11px] text-slate-400">
                          <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {error && <div className="col-span-1 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3">{error}</div>}
            {message && <div className="col-span-1 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">{message}</div>}
            <div className="col-span-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
              <p className="text-xs text-slate-400 order-2 sm:order-1">By submitting, you agree to be contacted for recruitment updates.</p>
              <button 
                type="submit" 
                disabled={!canSubmit || submitting} 
                className="order-1 sm:order-2 w-full sm:w-auto px-6 py-3.5 sm:py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-sm font-semibold text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-emerald-600 hover:to-teal-700 active:scale-95 transition-all duration-200 touch-manipulation"
              >
                Review your application ✨
              </button>
            </div>
          </form>
        </div>
      </div>
      </motion.section>

      {/* Notes / Help */}
      <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="relative z-30 mb-6">
        <div className="relative z-30 bg-white/5 border border-white/10 rounded-xl p-4">
          <h3 className="text-white font-semibold text-sm mb-2 flex items-center gap-2"><Info className="w-4 h-4 text-cyan-300" /> Helpful notes ✨</h3>
          <ul className="space-y-2 text-slate-300 text-sm list-disc ml-5">
            <li>🎯 Pick one track — relevant questions appear automatically.</li>
            <li>🔓 For Google Drive links, set sharing to “Anyone with the link”.</li>
            <li>📧 Watch your email/WhatsApp for shortlist and next steps.</li>
          </ul>
        </div>
      </motion.section>

      {/* Enhanced Review Modal */}
      {showReview && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pt-20 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/90 to-black/80" onClick={()=>setShowReview(false)} />
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-[101] w-full max-w-5xl mx-auto bg-gradient-to-br from-slate-900/98 via-slate-800/95 to-slate-900/98 border border-emerald-400/20 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh]"
          >
            {/* Header with gradient background */}
            <div className="relative bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border-b border-emerald-400/20 px-4 sm:px-8 py-4 sm:py-6">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5" />
              <div className="relative">
                {/* Top row with title and close button */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                        Review Your Application ✨
                      </h3>
                      <p className="text-emerald-200/80 text-xs sm:text-sm">Please review all details carefully before submitting</p>
                    </div>
                  </div>
                  <button 
                    onClick={()=>setShowReview(false)}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
                
                {/* Prominent Submit Button Row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-400/30 rounded-xl px-4 py-3">
                      <div className="flex items-center gap-2 text-amber-200">
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Ready to submit? Review the details below and click Submit when ready!</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <button 
                      onClick={()=>setShowReview(false)} 
                      className="flex-1 sm:flex-none px-4 sm:px-6 py-3 rounded-xl border border-white/20 text-slate-200 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-200 font-medium text-sm"
                    >
                      ← Edit
                    </button>
                    <button 
                      onClick={submitApplication} 
                      disabled={submitting} 
                      className="flex-1 sm:flex-none px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-lg hover:from-emerald-600 hover:to-teal-700 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span className="hidden sm:inline">Submitting...</span>
                          <span className="sm:hidden">Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span className="hidden sm:inline">Submit Application</span>
                          <span className="sm:hidden">Submit</span>
                          <Rocket className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="max-h-[70vh] overflow-y-auto px-8 py-6">
              <div className="space-y-8">
                {/* Applicant Details Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-400/20 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-300" />
                    </div>
                    <h4 className="text-lg font-semibold text-blue-200">Personal Information</h4>
                  </div>
                  <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { label: "Full Name", value: form.full_name },
                      { label: "Registration Number", value: form.registration_number },
                      { label: "Branch", value: form.branch },
                      { label: "Year of Study", value: form.year },
                      { label: "Phone Number", value: form.phone },
                      { label: "Email Address", value: form.email },
                    ].map((item, index) => (
                      <motion.div 
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ delay: 0.2 + index * 0.05 }}
                        className="bg-white/5 border border-white/10 rounded-lg p-4"
                      >
                        <dt className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">{item.label}</dt>
                        <dd className="text-white font-medium">{item.value || '—'}</dd>
                      </motion.div>
                    ))}
                  </dl>
                  <div className="mt-4 bg-white/5 border border-white/10 rounded-lg p-4">
                    <dt className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">Preferred Track</dt>
                    <dd className="text-emerald-300 font-semibold text-lg">{form.team_preference}</dd>
                  </div>
                </motion.div>

                {/* Track-Specific Responses Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-r from-emerald-500/5 to-teal-500/5 border border-emerald-400/20 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                      <ClipboardList className="w-4 h-4 text-emerald-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-200">Track-Specific Responses</h4>
                      <p className="text-emerald-300/70 text-sm">{form.team_preference}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {(() => {
                      const ts = form.team_specific as Record<string, unknown>;
                      const join = (val: unknown) => Array.isArray(val) ? val.join(', ') : '';
                      const val = (k: string) => {
                        const v = ts?.[k];
                        if (Array.isArray(v)) return v.join(', ');
                        if (typeof v === 'boolean') return v ? 'Yes' : 'No';
                        return typeof v === 'number' || typeof v === 'string' ? String(v) : '';
                      };
                      const ResponseCard = ({ label, k, index }: { label: string; k: string; index: number }) => (
                        <motion.div 
                          initial={{ opacity: 0, y: 5 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          transition={{ delay: 0.4 + index * 0.05 }}
                          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-200"
                        >
                          <div className="text-sm font-medium text-emerald-300 mb-2">{label}</div>
                          <div className="text-white leading-relaxed">{val(k) || '—'}</div>
                        </motion.div>
                      );

                      const ArrayResponseCard = ({ label, values, index }: { label: string; values: string; index: number }) => (
                        <motion.div 
                          initial={{ opacity: 0, y: 5 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          transition={{ delay: 0.4 + index * 0.05 }}
                          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-200"
                        >
                          <div className="text-sm font-medium text-emerald-300 mb-2">{label}</div>
                          <div className="text-white leading-relaxed">{values || '—'}</div>
                        </motion.div>
                      );

                      switch (form.team_preference) {
                        case 'Stargazers (Astronomy, Space and Rocketry)':
                          return (
                            <div className="grid gap-4"> 
                              <ResponseCard label="Astronomy/stargazing experience" k="astro_events_experience" index={0} />
                              <ResponseCard label="What excites you about astronomy" k="excitement_about_astronomy" index={1} />
                              <ArrayResponseCard label="Areas of contribution" values={join(ts.areas)} index={2} />
                              <ResponseCard label="Favorite space film" k="favorite_space_film" index={3} />
                              <ResponseCard label="Space mission idea" k="mission_idea" index={4} />
                              <ResponseCard label="Raptor sub-team interest" k="raptor_interest" index={5} />
                            </div>
                          );
                        case 'Robusta (Robotics & Automation)':
                          return (
                            <div className="grid gap-4">
                              <ResponseCard label="Fascination areas" k="fascination_areas" index={0} />
                              <ResponseCard label="Dream robot" k="dream_robot" index={1} />
                              <ResponseCard label="Past projects" k="past_projects" index={2} />
                              <ResponseCard label="Microcontroller explanation" k="microcontroller_explanation" index={3} />
                              <ResponseCard label="Interest (programming vs hardware)" k="robusta_interest" index={4} />
                              <ResponseCard label="Preference" k="robusta_preference" index={5} />
                              <ResponseCard label="Preference reason" k="robusta_preference_reason" index={6} />
                            </div>
                          );
                        case 'Programmers (Coding & Development)':
                          return (
                            <div className="grid gap-4">
                              <ResponseCard label="Languages & frameworks" k="languages_frameworks" index={0} />
                              <ResponseCard label="Project example" k="project_example" index={1} />
                              <ArrayResponseCard label="Interests" values={join(ts.programmers_interests)} index={2} />
                              <ResponseCard label="Bug approach" k="debug_approach" index={3} />
                              <ResponseCard label="Fast learning example" k="fast_learning_example" index={4} />
                              <ResponseCard label="Club project idea" k="programmers_project_idea" index={5} />
                            </div>
                          );
                        case 'Core Team – Content Writing':
                          return (
                            <div className="grid gap-4">
                              <ResponseCard label="Why Content Writing" k="cw_why" index={0} />
                              <ResponseCard label="Strength" k="cw_strength" index={1} />
                              <ResponseCard label="Caption" k="cw_caption" index={2} />
                              <ResponseCard label="Explain approach" k="cw_explain_approach" index={3} />
                              <ArrayResponseCard label="Topics" values={join(ts.cw_topics)} index={4} />
                              <ResponseCard label="Writer's block approach" k="cw_block_approach" index={5} />
                            </div>
                          );
                        case 'Core Team – Graphic Designing':
                          return (
                            <div className="grid gap-4">
                              <ResponseCard label="Why Graphic Designing" k="gd_why" index={0} />
                              <ArrayResponseCard label="Design tools" values={join(ts.gd_tools)} index={1} />
                              {typeof ts.gd_samples_link === 'string' && ts.gd_samples_link ? (
                                <ResponseCard label="Samples link" k="gd_samples_link" index={2} />
                              ) : null}
                              <ResponseCard label="Poster priority" k="gd_poster_priority" index={3} />
                              <ArrayResponseCard label="Design interests" values={join(ts.gd_interests)} index={4} />
                              <ResponseCard label="Stargazing poster concept" k="gd_stargazing_poster_concept" index={5} />
                            </div>
                          );
                        case 'Core Team – Photography/Videography':
                          return (
                            <div className="grid gap-4">
                              <ResponseCard label="Why Photography/Videography" k="pv_why" index={0} />
                              <ResponseCard label="Equipment access" k="pv_equipment_access" index={1} />
                              {typeof ts.pv_samples_link === 'string' && ts.pv_samples_link ? (
                                <ResponseCard label="Samples link" k="pv_samples_link" index={2} />
                              ) : null}
                              <ArrayResponseCard label="Interest areas" values={join(ts.pv_interests)} index={3} />
                              <ResponseCard label="30-sec highlight shots" k="pv_highlight_shots" index={4} />
                              <ResponseCard label="Editing software comfort (1-5)" k="pv_editing_comfort" index={5} />
                            </div>
                          );
                        default:
                          return null;
                      }
                    })()}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="border-t border-emerald-400/20 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 px-4 sm:px-8 py-4 sm:py-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
                  ⚠️ Review all information carefully. Once submitted, changes cannot be made.
                </div>
                <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <motion.button 
                    initial={{ opacity: 0, x: 10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.5 }}
                    onClick={()=>setShowReview(false)} 
                    className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-white/20 text-slate-200 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-200 font-medium text-sm"
                  >
                    ← Edit Application
                  </motion.button>
                  <motion.button 
                    initial={{ opacity: 0, x: 10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.6 }}
                    onClick={submitApplication} 
                    disabled={submitting} 
                    className="flex-1 sm:flex-none px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-lg hover:from-emerald-600 hover:to-teal-700 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="hidden sm:inline">Submitting...</span>
                        <span className="sm:hidden">Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span className="hidden sm:inline">Submit Application</span>
                        <span className="sm:hidden">Submit</span>
                        <Rocket className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Thank You Overlay */}
      {showThankYou && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/80" onClick={()=>setShowThankYou(false)} />
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.35 }} className="relative z-[81] w-full max-w-2xl mx-auto bg-gradient-to-b from-slate-900/95 to-slate-900/90 border border-white/10 rounded-2xl shadow-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-emerald-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
                  Thank you for applying to the GITAM Aero Astro Club! ✨
                </h3>
                <p className="mt-2 text-slate-300">
                  We’ve received your application{lastSubmitted?.name ? `, ${lastSubmitted.name}` : ''}. Our team will review it and reach out via email with the next steps.
                </p>
                {lastSubmitted && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <div className="text-slate-400">Email</div>
                      <div className="text-white">{lastSubmitted.email}</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <div className="text-slate-400">Selected Track</div>
                      <div className="text-white">{lastSubmitted.track}</div>
                    </div>
                  </div>
                )}
                <div className="mt-4">
                  <ul className="text-slate-300 text-sm space-y-2 list-disc ml-5">
                    <li>Check your inbox (and spam) for an acknowledgement within a few minutes.</li>
                    <li>If shortlisted, you’ll receive task and interview details by email.</li>
                    <li>You can revisit this page to submit another application only if invited.</li>
                  </ul>
                  
                  <div className="mt-6 bg-cyan-500/10 border border-cyan-400/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-cyan-300 font-semibold text-sm">Track Your Application</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">
                      Want to check your application status anytime? Use our tracking system with your email address.
                    </p>
                    <a 
                      href="/track" 
                      target="_blank"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      🔍 Track Application Status
                    </a>
                  </div>
                  
                  <div className="mt-4 bg-blue-500/10 border border-blue-400/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <HelpCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-300 font-semibold text-sm">Recruitment Helpline</span>
                    </div>
                    <p className="text-slate-300 text-xs mb-2">Need assistance? We&apos;re available 24/7:</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <a href="mailto:aeroastro_vzg@gitam.in" className="text-cyan-300 hover:underline">aeroastro_vzg@gitam.in</a>
                      <span className="text-slate-500">•</span>
                      <a href="tel:+919553316797" className="text-green-300 hover:underline">+91 95533 16797</a>
                      <span className="text-slate-500">•</span>
                      <a href="tel:+917382338771" className="text-green-300 hover:underline">+91 73823 38771</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-3">
              <button onClick={()=>setShowThankYou(false)} className="px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold">
                Done
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80" onClick={() => setShowHelp(false)} />
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.98 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            transition={{ duration: 0.35 }}
            className="relative z-[81] w-full max-w-3xl mx-auto bg-gradient-to-b from-slate-900/95 to-slate-900/90 border border-white/10 rounded-2xl shadow-2xl p-8 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-blue-400" />
                Recruitment Helpline - FAQ
              </h3>
              <button 
                onClick={() => setShowHelp(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">🤔 What if I&apos;m unsure about which team to choose?</h4>
                <p className="text-slate-300 text-sm">
                  Don&apos;t worry! Choose the team that interests you most. During the interview, we&apos;ll discuss your preferences and may suggest the best fit based on your skills and interests.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">📝 Can I edit my application after submitting?</h4>
                <p className="text-slate-300 text-sm">
                  Once submitted, applications cannot be edited. However, if you made a significant error, contact us immediately at{' '}
                  <a href="mailto:aeroastro_vzg@gitam.in" className="text-cyan-300 hover:underline">aeroastro_vzg@gitam.in</a> with your details.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">⏰ How long does the review process take?</h4>
                <p className="text-slate-300 text-sm">
                  We typically review applications within 3-5 business days. Shortlisted candidates will receive email notifications with next steps.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">📱 I&apos;m having technical issues with the form</h4>
                <p className="text-slate-300 text-sm">
                  Try refreshing the page or using a different browser. If issues persist, contact us via WhatsApp at{' '}
                  <a href="https://wa.me/919553316797" className="text-green-300 hover:underline">+91 95533 16797</a> for immediate assistance.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">🎯 What should I include in my motivation?</h4>
                <p className="text-slate-300 text-sm">
                  Be genuine! Share why you&apos;re interested in the club, what you hope to learn, and how you can contribute. Quality matters more than length.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-lg p-4">
                <h4 className="text-blue-300 font-semibold mb-2">📞 Recruitment Helpline - Available 24/7</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href="mailto:aeroastro_vzg@gitam.in" className="text-cyan-300 hover:underline">
                      aeroastro_vzg@gitam.in
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-400" />
                    <div className="flex gap-4">
                      <a href="tel:+919553316797" className="text-green-300 hover:underline">+91 95533 16797</a>
                      <a href="tel:+917382338771" className="text-green-300 hover:underline">+91 73823 38771</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => setShowHelp(false)}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
              >
                Got it!
              </button>
            </div>
          </motion.div>
        </div>
      )}
      </main>
    </>
  );
}
