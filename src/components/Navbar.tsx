"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener for mobile transparency
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Add transparency when scrolled more than 100px
      setIsScrolled(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={cn("fixed top-10 inset-x-0 max-w-7xl mx-auto z-50 px-3 sm:px-4 lg:px-6", className)}
      >        <nav className={cn(
          "flex items-center justify-between rounded-full px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 shadow-xl border border-gray-800/30 hover:border-gray-700/50 hover:shadow-[0_8px_32px_rgba(9,192,249,0.12)] transition-all duration-300 relative group",
          // Desktop: Keep full opacity always
          "lg:bg-[#17191C]/95 lg:backdrop-blur-md",
          // Mobile: Apply scroll-based transparency
          isScrolled 
            ? "md:bg-[#17191C]/70 md:backdrop-blur-sm bg-[#17191C]/70 backdrop-blur-sm"
            : "md:bg-[#17191C]/95 md:backdrop-blur-md bg-[#17191C]/95 backdrop-blur-md"
        )}>
        {/* Subtle glow effect on navbar hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#09C0F9]/5 via-transparent to-[#09C0F9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>        {/* Enhanced Desktop Logo with Responsive Sizing */}
        <div className="hidden lg:flex items-center z-20 group/logo cursor-pointer">
          <div className="relative">            <Image
              src="/gaacLogo.png"
              alt="GITAM Aero Astro Club"
              width={64}
              height={64}
              className="h-12 w-12 xl:h-16 xl:w-16 transition-all duration-200 ease-out group-hover/logo:scale-105"
              priority
            />
            {/* Subtle pulse ring on hover */}
            <div className="absolute inset-0 rounded-full bg-[#09C0F9]/20 scale-90 opacity-0 group-hover/logo:scale-110 group-hover/logo:opacity-100 transition-all duration-300 blur-sm"></div>
            <div className="absolute inset-0 rounded-full border border-[#09C0F9]/30 scale-100 opacity-0 group-hover/logo:scale-125 group-hover/logo:opacity-100 transition-all duration-500"></div>
          </div>
        </div>

        {/* Medium Screen Logo - Compact Design */}
        <div className="hidden md:flex lg:hidden items-center z-20 group/logo cursor-pointer">
          <div className="relative">
            <Image
              src="/gaacLogo.png"
              alt="GITAM Aero Astro Club"
              width={48}
              height={48}
              className="h-10 w-10 transition-all duration-200 ease-out group-hover/logo:scale-105"
              priority
            />
            {/* Subtle pulse ring on hover */}
            <div className="absolute inset-0 rounded-full bg-[#09C0F9]/20 scale-90 opacity-0 group-hover/logo:scale-110 group-hover/logo:opacity-100 transition-all duration-300 blur-sm"></div>
            <div className="absolute inset-0 rounded-full border border-[#09C0F9]/30 scale-100 opacity-0 group-hover/logo:scale-125 group-hover/logo:opacity-100 transition-all duration-500"></div>
          </div>
        </div>

        {/* Mobile Layout with Leftmost Green Dot */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Leftmost Flashy Green Dot Button */}
          <a
            href="/recruitment"
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 active:scale-95 group/flash z-30"
            aria-label="We're Recruiting"
          >
            <span className="relative z-10 text-white text-base">🚀</span>
            {/* Pulsing ring effect */}
            <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75"></div>
            <div className="absolute inset-0 rounded-full bg-emerald-400/50 animate-pulse"></div>
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/30 to-teal-600/30 scale-0 group-hover/flash:scale-150 transition-transform duration-300 blur-sm"></div>
          </a>
          
          {/* Centered GAAC Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group/logo cursor-pointer">
            <div className="relative">
              <Image
                src="/gaacLogo.png"
                alt="GITAM Aero Astro Club"
                width={64}
                height={64}
                className="h-16 w-16 transition-all duration-300 ease-out group-hover/logo:scale-105"
                priority
              />
              {/* Enhanced pulse ring for mobile */}
              <div className="absolute inset-0 rounded-full bg-[#09C0F9]/25 scale-90 opacity-0 group-hover/logo:scale-115 group-hover/logo:opacity-100 transition-all duration-400 blur-sm"></div>
              <div className="absolute inset-0 rounded-full border border-[#09C0F9]/40 scale-100 opacity-0 group-hover/logo:scale-130 group-hover/logo:opacity-100 transition-all duration-600"></div>
            </div>
          </div>
          
          {/* Right side spacer for balance */}
          <div className="w-10 h-10"></div>
        </div>

        {/* Desktop Menu with Enhanced Spacing and Responsive Behavior */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          <a
            href="#about-club"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("about-club");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="relative text-[#FAFAFA]/90 hover:text-[#FAFAFA] transition-all duration-200 cursor-pointer px-3 xl:px-4 py-2.5 rounded-lg group/link overflow-hidden"
          >
            <span className="relative z-10 font-medium text-sm xl:text-base">About Us</span>
            {/* Simple background on hover */}
            <div className="absolute inset-0 bg-white/5 scale-95 opacity-0 group-hover/link:scale-100 group-hover/link:opacity-100 transition-all duration-200 rounded-lg"></div>
            {/* Minimal underline */}
            <div className="absolute bottom-1 left-1/2 w-0 h-px bg-[#09C0F9] group-hover/link:w-6 group-hover/link:left-1/2 group-hover/link:-translate-x-1/2 transition-all duration-250"></div>
          </a>
          {/* Teams Dropdown */}
          <div className="relative group/teams">
            <button
              className="relative text-[#FAFAFA]/90 hover:text-[#FAFAFA] transition-all duration-200 cursor-pointer px-3 xl:px-4 py-2.5 rounded-lg group/link overflow-hidden flex items-center space-x-1"
              onMouseEnter={() => setActive("teams")}
            >
              <span className="relative z-10 font-medium text-sm xl:text-base">Teams</span>
              <svg className="w-4 h-4 xl:w-5 xl:h-5 transition-transform duration-200 group-hover/teams:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <div className="absolute inset-0 bg-white/5 scale-95 opacity-0 group-hover/link:scale-100 group-hover/link:opacity-100 transition-all duration-200 rounded-lg"></div>
              <div className="absolute bottom-1 left-1/2 w-0 h-px bg-[#09C0F9] group-hover/link:w-6 group-hover/link:left-1/2 group-hover/link:-translate-x-1/2 transition-all duration-250"></div>
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className={cn(
                "absolute top-full left-0 mt-2 w-56 bg-[#17191C]/95 backdrop-blur-md rounded-xl border border-gray-800/50 shadow-2xl transition-all duration-300 z-50",
                active === "teams" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              )}
              onMouseLeave={() => setActive(null)}
            >
              <div className="p-2">
                <a
                  href="/teams"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group/dropdown"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#09C0F9]/20 to-[#0EA5E9]/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🏠</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Team Homepage</div>
                    <div className="text-xs text-gray-500">Overview of all teams</div>
                  </div>
                </a>
                
                <a
                  href="/teams/robotics"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group/dropdown"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#09C0F9]/20 to-[#0EA5E9]/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🤖</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Robotics Team</div>
                    <div className="text-xs text-gray-500">Build autonomous systems</div>
                  </div>
                </a>
                
                <a
                  href="/teams/programming"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group/dropdown"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#09C0F9]/20 to-[#0EA5E9]/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">💻</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Programming Team</div>
                    <div className="text-xs text-gray-500">Software development</div>
                  </div>
                </a>
                
                <a
                  href="/teams/astronomy"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group/dropdown"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#09C0F9]/20 to-[#0EA5E9]/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🔭</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Astronomy Team</div>
                    <div className="text-xs text-gray-500">Space exploration</div>
                  </div>
                </a>
                
                <div className="my-2 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
                
                <a
                  href="#executive-body"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("executive-body");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                    setActive(null);
                  }}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group/dropdown"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#09C0F9]/20 to-[#0EA5E9]/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">👥</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Executive Body</div>
                    <div className="text-xs text-gray-500">Leadership team</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <a
            href="/projects"
            className="relative text-[#FAFAFA]/90 hover:text-[#FAFAFA] transition-all duration-200 cursor-pointer px-3 xl:px-4 py-2.5 rounded-lg group/link overflow-hidden"
          >
            <span className="relative z-10 font-medium text-sm xl:text-base">Projects</span>
            <div className="absolute inset-0 bg-white/5 scale-95 opacity-0 group-hover/link:scale-100 group-hover/link:opacity-100 transition-all duration-200 rounded-lg"></div>
            <div className="absolute bottom-1 left-1/2 w-0 h-px bg-[#09C0F9] group-hover/link:w-6 group-hover/link:left-1/2 group-hover/link:-translate-x-1/2 transition-all duration-250"></div>
          </a>
          <a
            href="/blogs"
            className="relative text-[#FAFAFA]/90 hover:text-[#FAFAFA] transition-all duration-200 cursor-pointer px-3 xl:px-4 py-2.5 rounded-lg group/link overflow-hidden"
          >
            <span className="relative z-10 font-medium text-sm xl:text-base">Blogs</span>
            <div className="absolute inset-0 bg-white/5 scale-95 opacity-0 group-hover/link:scale-100 group-hover/link:opacity-100 transition-all duration-200 rounded-lg"></div>
            <div className="absolute bottom-1 left-1/2 w-0 h-px bg-[#09C0F9] group-hover/link:w-6 group-hover/link:left-1/2 group-hover/link:-translate-x-1/2 transition-all duration-250"></div>
          </a>
          <a
            href="/contact"
            className="relative text-[#FAFAFA]/90 hover:text-[#FAFAFA] transition-all duration-200 cursor-pointer px-3 xl:px-4 py-2.5 rounded-lg group/link overflow-hidden"
          >
            <span className="relative z-10 font-medium text-sm xl:text-base">Contact Us</span>
            <div className="absolute inset-0 bg-white/5 scale-95 opacity-0 group-hover/link:scale-100 group-hover/link:opacity-100 transition-all duration-200 rounded-lg"></div>
            <div className="absolute bottom-1 left-1/2 w-0 h-px bg-[#09C0F9] group-hover/link:w-6 group-hover/link:left-1/2 group-hover/link:-translate-x-1/2 transition-all duration-250"></div>
          </a>
        </div>        {/* Desktop Auth Buttons with Refined Interactions */}
        <div className="hidden md:flex items-center space-x-3">
        </div>        {/* Enhanced Desktop Right CTA Section with Better Spacing */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          <a
            href="/recruitment"
            className="relative inline-flex items-center gap-2 pl-2.5 xl:pl-3 pr-3 xl:pr-4 py-2 xl:py-2.5 rounded-full border border-emerald-400/30 bg-gradient-to-r from-emerald-500/15 to-teal-600/15 text-emerald-200 hover:text-white hover:border-emerald-400/50 hover:from-emerald-500/25 hover:to-teal-600/25 transition-all duration-300 shadow-[0_8px_32px_rgba(16,185,129,0.15)]"
          >
            <span className="inline-flex w-2.5 h-2.5 xl:w-3 xl:h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.8)]"></span>
            <span className="font-semibold text-sm xl:text-base tracking-wide">We&apos;re Recruiting</span>
            <span className="text-base xl:text-lg">🚀</span>
          </a>
          <a
            href="/track"
            className="relative inline-flex items-center gap-2 px-3 xl:px-4 py-2 xl:py-2.5 rounded-lg border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 text-cyan-200 hover:text-white hover:border-cyan-400/50 hover:from-cyan-500/20 hover:to-blue-600/20 transition-all duration-300 text-sm xl:text-base"
            title="Track Application"
          >
            <span className="text-base xl:text-lg">🔍</span>
            <span className="font-medium">Track</span>
          </a>
          <a
            href="/admin-check?redirect=/admin"
            className="relative inline-flex items-center gap-2 px-3 xl:px-4 py-2 xl:py-2.5 rounded-lg border border-white/10 text-slate-200 hover:text-white hover:border-white/25 bg-white/5 hover:bg-white/10 transition-all duration-200 text-sm xl:text-base"
            aria-label="Admin Hub"
            title="Admin Hub"
          >
            <span className="text-base xl:text-lg">🔑</span>
            <span className="font-medium">Hub</span>
          </a>
        </div>

        {/* Compact CTA Section for Medium Screens (md to lg) */}
        <div className="hidden md:flex lg:hidden items-center gap-1.5">
          <a
            href="/recruitment"
            className="relative inline-flex items-center gap-1.5 pl-2 pr-2.5 py-2 rounded-full border border-emerald-400/30 bg-gradient-to-r from-emerald-500/15 to-teal-600/15 text-emerald-200 hover:text-white hover:border-emerald-400/50 hover:from-emerald-500/25 hover:to-teal-600/25 transition-all duration-300 shadow-[0_8px_32px_rgba(16,185,129,0.15)]"
          >
            <span className="inline-flex w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
            <span className="font-semibold text-xs tracking-wide">Recruiting</span>
            <span className="text-sm">🚀</span>
          </a>
          <a
            href="/track"
            className="relative inline-flex items-center gap-1 px-2.5 py-2 rounded-lg border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 text-cyan-200 hover:text-white hover:border-cyan-400/50 hover:from-cyan-500/20 hover:to-blue-600/20 transition-all duration-300 text-xs"
            title="Track Application"
          >
            <span className="text-sm">🔍</span>
            <span className="font-medium">Track</span>
          </a>
          <a
            href="/admin-check?redirect=/admin"
            className="relative inline-flex items-center gap-1 px-2.5 py-2 rounded-lg border border-white/10 text-slate-200 hover:text-white hover:border-white/25 bg-white/5 hover:bg-white/10 transition-all duration-200 text-xs"
            aria-label="Admin Hub"
            title="Admin Hub"
          >
            <span className="text-sm">🔑</span>
            <span className="font-medium">Hub</span>
          </a>
        </div>        {/* Enhanced Mobile Menu Button - Right Side */}
        <button
          className="md:hidden relative z-30 flex items-center justify-center w-12 h-12 sm:w-11 sm:h-11 rounded-lg transition-all duration-300 bg-white/5 hover:bg-white/10 border border-gray-700/50 hover:border-[#09C0F9]/30 focus:ring-2 focus:ring-[#09C0F9]/50 focus:outline-none hover:shadow-lg hover:shadow-[#09C0F9]/10 active:scale-95 group/burger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={mobileMenuOpen}
        >{/* Animated hamburger lines with rich microinteractions */}
          <div className="flex flex-col space-y-1.5">
            <span
              className={cn(
                "block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-out group-hover/burger:bg-[#09C0F9]",
                mobileMenuOpen ? "rotate-45 translate-y-2 scale-110" : "group-hover/burger:scale-110"
              )}
            />
            <span
              className={cn(
                "block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-out group-hover/burger:bg-[#09C0F9]",
                mobileMenuOpen ? "opacity-0 scale-0" : "group-hover/burger:scale-110"
              )}
            />
            <span
              className={cn(
                "block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-out group-hover/burger:bg-[#09C0F9]",
                mobileMenuOpen ? "-rotate-45 -translate-y-2 scale-110" : "group-hover/burger:scale-110"
              )}
            />
          </div>
          
          {/* Subtle pulse effect on button */}
          <div className="absolute inset-0 rounded-lg bg-[#09C0F9]/20 scale-90 opacity-0 group-hover/burger:scale-100 group-hover/burger:opacity-100 transition-all duration-300"></div>
        </button>        </nav>
      </div>      {/* Mobile Menu Overlay with Smooth Fade Animation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ease-out"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}      {/* Mobile Menu with Enhanced Animations */}
      {mobileMenuOpen && (
        <div 
          className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-[#1A1D21] to-[#151719] border-l border-gray-800/50 shadow-2xl z-50 transform translate-x-0 transition-transform duration-400 ease-out"
        >
          {/* Sophisticated swipe indicator with pulse */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-gradient-to-b from-transparent via-[#09C0F9]/50 to-transparent rounded-r-full animate-pulse"></div>
          
          {/* Enhanced Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800/30 bg-gradient-to-r from-transparent to-[#09C0F9]/5">
            <div className="flex items-center space-x-3 group/header">
              <div className="relative">                <Image
                  src="/gaacLogo.png"
                  alt="GAAC"
                  width={40}
                  height={40}
                  className="w-10 h-10 transition-all duration-300 group-hover/header:scale-110 group-hover/header:rotate-6"
                />
                {/* Subtle glow effect on logo */}
                <div className="absolute inset-0 rounded-full bg-[#09C0F9]/20 scale-75 opacity-0 group-hover/header:scale-110 group-hover/header:opacity-100 transition-all duration-300 blur-sm"></div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-base group-hover/header:text-[#09C0F9] transition-colors duration-300">GAAC</h3>
                <p className="text-gray-400 text-sm group-hover/header:text-gray-300 transition-colors duration-300">Aero Astro Club</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/15 flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-[#09C0F9]/50 focus:outline-none group/close hover:rotate-90 active:scale-95"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 text-white group-hover/close:text-[#09C0F9] transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>          {/* Enhanced Mobile Navigation Links with Rich Interactions */}
          <nav className="flex-1 px-6 py-6">
            <div className="space-y-3">
              {/* Primary Recruitment CTA at Top */}
              <div className="mb-6">
                <a
                  href="/recruitment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative flex items-center justify-center w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-teal-600 hover:to-emerald-600 text-white font-bold rounded-2xl transition-all duration-300 active:scale-95 group/cta focus:ring-2 focus:ring-emerald-500/50 focus:outline-none shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700 ease-in-out"></div>
                  <span className="relative z-10 flex items-center space-x-3">
                    <span className="inline-flex w-3 h-3 rounded-full bg-white animate-pulse shadow-[0_0_12px_rgba(255,255,255,0.8)]"></span>
                    <span className="text-lg font-extrabold">We&apos;re Recruiting</span>
                    <span className="text-xl">🚀</span>
                  </span>
                </a>
              </div>

              {/* Navigation Links with Enhanced Smoothness */}
              <a
                href="#about-club"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("about-club");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                  setMobileMenuOpen(false);
                }}
                className="flex items-center space-x-4 px-5 py-4 rounded-2xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-white/8 hover:to-[#09C0F9]/8 active:bg-white/12 transition-all duration-500 ease-out group/link focus:ring-2 focus:ring-[#09C0F9]/50 focus:outline-none transform hover:translate-x-2 hover:scale-105 active:scale-100"
              >
                <div className="relative">
                  <svg className="w-6 h-6 text-gray-500 group-hover/link:text-[#09C0F9] transition-all duration-500 group-hover/link:scale-110 group-hover/link:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  {/* Enhanced icon glow effect */}
                  <div className="absolute inset-0 bg-[#09C0F9]/30 rounded-full scale-0 group-hover/link:scale-150 transition-transform duration-500 blur-md"></div>
                </div>
                <span className="font-semibold text-base group-hover/link:text-[#09C0F9] transition-colors duration-500">About Us</span>
                <svg className="w-5 h-5 text-gray-600 group-hover/link:text-[#09C0F9] opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-2 transition-all duration-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Admin Hub with Enhanced Smoothness */}
              <a
                href="/admin-check?redirect=/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-4 px-5 py-4 rounded-2xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-white/8 hover:to-[#09C0F9]/8 active:bg-white/12 transition-all duration-500 ease-out group/link focus:ring-2 focus:ring-[#09C0F9]/50 focus:outline-none transform hover:translate-x-2 hover:scale-105 active:scale-100"
              >
                <div className="relative">
                  <svg className="w-6 h-6 text-gray-500 group-hover/link:text-[#09C0F9] transition-all duration-500 group-hover/link:scale-110 group-hover/link:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 11-4 0 2 2 0 014 0zm-6 7a6 6 0 1112 0v1a3 3 0 01-3 3H9a3 3 0 01-3-3v-1z" />
                  </svg>
                  <div className="absolute inset-0 bg-[#09C0F9]/30 rounded-full scale-0 group-hover/link:scale-150 transition-transform duration-500 blur-md"></div>
                </div>
                <span className="font-semibold text-base group-hover/link:text-[#09C0F9] transition-colors duration-500">Admin Hub</span>
                <svg className="w-5 h-5 text-gray-600 group-hover/link:text-[#09C0F9] opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-2 transition-all duration-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Teams Section with Enhanced Smoothness */}
              <div className="space-y-2 mt-4">
                <div className="flex items-center space-x-4 px-5 py-3 text-gray-400">
                  <div className="relative">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-base">Teams</span>
                </div>
                
                <div className="ml-8 space-y-2">
                  <a
                    href="/teams"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-white/8 hover:to-[#09C0F9]/8 active:bg-white/12 transition-all duration-500 ease-out group/sublink transform hover:translate-x-1 hover:scale-105"
                  >
                    <span className="text-lg transition-transform duration-500 group-hover/sublink:scale-110">🏠</span>
                    <span className="text-sm group-hover/sublink:text-[#09C0F9] transition-colors duration-500 font-medium">Team Homepage</span>
                  </a>
                  
                  <a
                    href="/teams/robotics"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-white/8 hover:to-[#09C0F9]/8 active:bg-white/12 transition-all duration-500 ease-out group/sublink transform hover:translate-x-1 hover:scale-105"
                  >
                    <span className="text-lg transition-transform duration-500 group-hover/sublink:scale-110">🤖</span>
                    <span className="text-sm group-hover/sublink:text-[#09C0F9] transition-colors duration-500 font-medium">Robotics Team</span>
                  </a>
                  
                  <a
                    href="/teams/programming"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-white/8 hover:to-[#09C0F9]/8 active:bg-white/12 transition-all duration-500 ease-out group/sublink transform hover:translate-x-1 hover:scale-105"
                  >
                    <span className="text-lg transition-transform duration-500 group-hover/sublink:scale-110">💻</span>
                    <span className="text-sm group-hover/sublink:text-[#09C0F9] transition-colors duration-500 font-medium">Programming Team</span>
                  </a>
                  
                  <a
                    href="/teams/astronomy"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-white/8 hover:to-[#09C0F9]/8 active:bg-white/12 transition-all duration-500 ease-out group/sublink transform hover:translate-x-1 hover:scale-105"
                  >
                    <span className="text-lg transition-transform duration-500 group-hover/sublink:scale-110">🔭</span>
                    <span className="text-sm group-hover/sublink:text-[#09C0F9] transition-colors duration-500 font-medium">Astronomy Team</span>
                  </a>
                  
                  <a
                    href="#executive-body"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.getElementById("executive-body");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-white/8 hover:to-[#09C0F9]/8 active:bg-white/12 transition-all duration-500 ease-out group/sublink transform hover:translate-x-1 hover:scale-105"
                  >
                    <span className="text-lg transition-transform duration-500 group-hover/sublink:scale-110">👥</span>
                    <span className="text-sm group-hover/sublink:text-[#09C0F9] transition-colors duration-500 font-medium">Executive Body</span>
                  </a>
                </div>
              </div>

              <a
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-4 px-5 py-4 rounded-2xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-white/8 hover:to-[#09C0F9]/8 active:bg-white/12 transition-all duration-500 ease-out group/link focus:ring-2 focus:ring-[#09C0F9]/50 focus:outline-none transform hover:translate-x-2 hover:scale-105 active:scale-100"
              >
                <div className="relative">
                  <svg className="w-6 h-6 text-gray-500 group-hover/link:text-[#09C0F9] transition-all duration-500 group-hover/link:scale-110 group-hover/link:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <div className="absolute inset-0 bg-[#09C0F9]/30 rounded-full scale-0 group-hover/link:scale-150 transition-transform duration-500 blur-md"></div>
                </div>
                <span className="font-semibold text-base group-hover/link:text-[#09C0F9] transition-colors duration-500">Projects</span>
                <svg className="w-5 h-5 text-gray-600 group-hover/link:text-[#09C0F9] opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-2 transition-all duration-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="/blogs"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-4 px-5 py-4 rounded-2xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-white/8 hover:to-[#09C0F9]/8 active:bg-white/12 transition-all duration-500 ease-out group/link focus:ring-2 focus:ring-[#09C0F9]/50 focus:outline-none transform hover:translate-x-2 hover:scale-105 active:scale-100"
              >
                <div className="relative">
                  <svg className="w-6 h-6 text-gray-500 group-hover/link:text-[#09C0F9] transition-all duration-500 group-hover/link:scale-110 group-hover/link:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <div className="absolute inset-0 bg-[#09C0F9]/30 rounded-full scale-0 group-hover/link:scale-150 transition-transform duration-500 blur-md"></div>
                </div>
                <span className="font-semibold text-base group-hover/link:text-[#09C0F9] transition-colors duration-500">Blogs</span>
                <svg className="w-5 h-5 text-gray-600 group-hover/link:text-[#09C0F9] opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-2 transition-all duration-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-4 px-5 py-4 rounded-2xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-white/8 hover:to-[#09C0F9]/8 active:bg-white/12 transition-all duration-500 ease-out group/link focus:ring-2 focus:ring-[#09C0F9]/50 focus:outline-none transform hover:translate-x-2 hover:scale-105 active:scale-100"
              >
                <div className="relative">
                  <svg className="w-6 h-6 text-gray-500 group-hover/link:text-[#09C0F9] transition-all duration-500 group-hover/link:scale-110 group-hover/link:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="absolute inset-0 bg-[#09C0F9]/30 rounded-full scale-0 group-hover/link:scale-150 transition-transform duration-500 blur-md"></div>
                </div>
                <span className="font-semibold text-base group-hover/link:text-[#09C0F9] transition-colors duration-500">Contact Us</span>
                <svg className="w-5 h-5 text-gray-600 group-hover/link:text-[#09C0F9] opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-2 transition-all duration-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </nav>          {/* Bottom Track Application Button */}
          <div className="p-6 border-t border-gray-800/30 bg-gradient-to-r from-transparent to-cyan-500/5">
            <a
              href="/track"
              onClick={() => setMobileMenuOpen(false)}
              className="relative flex items-center justify-center w-full py-4 px-6 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 text-cyan-200 hover:text-white hover:border-cyan-400/50 hover:from-cyan-500/30 hover:to-blue-600/30 font-semibold rounded-2xl transition-all duration-500 active:scale-95 group/track focus:ring-2 focus:ring-cyan-500/50 focus:outline-none shadow-lg hover:shadow-xl hover:shadow-cyan-500/25"
            >
              <span className="flex items-center space-x-3">
                <span className="text-lg">🔍</span>
                <span className="text-base font-bold">Track Application</span>
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}