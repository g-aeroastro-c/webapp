"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showCookieModal, setShowCookieModal] = useState(false);

  const TermsModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#17191C] to-[#1C1E21] rounded-2xl border border-white/10 max-w-4xl max-h-[80vh] overflow-y-auto">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
            <button 
              onClick={() => setShowTermsModal(false)}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
        <div className="p-6 text-gray-300 space-y-4">
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h3>
            <p>By accessing and using the GITAM Aero Astro Club (GAAC) website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">2. Membership</h3>
            <p>Membership to GAAC is open to GITAM University students. All members must maintain good academic standing and adhere to university policies and club guidelines.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">3. Code of Conduct</h3>
            <p>Members are expected to conduct themselves professionally and respectfully. Harassment, discrimination, or inappropriate behavior will not be tolerated and may result in membership termination.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">4. Intellectual Property</h3>
            <p>All content created during club activities, including projects, research, and documentation, may be subject to shared intellectual property rights between the club and contributing members.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">5. Privacy and Data</h3>
            <p>We are committed to protecting your privacy. Personal information collected during registration and activities will be used solely for club-related purposes and will not be shared with third parties without consent.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">6. Limitation of Liability</h3>
            <p>GAAC and GITAM University shall not be liable for any damages arising from participation in club activities. Members participate at their own risk and should follow all safety guidelines.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">7. Changes to Terms</h3>
            <p>These terms may be updated periodically. Continued use of our services after changes constitutes acceptance of the new terms.</p>
          </section>
          
          <p className="text-sm text-gray-400 pt-4 border-t border-white/10">
            Last updated: August 2025<br/>
            For questions about these terms, contact us at aeroastro_vzg@gitam.in
          </p>
        </div>
      </div>
    </div>
  );

  const CookieModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#17191C] to-[#1C1E21] rounded-2xl border border-white/10 max-w-4xl max-h-[80vh] overflow-y-auto">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Cookie Policy</h2>
            <button 
              onClick={() => setShowCookieModal(false)}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
        <div className="p-6 text-gray-300 space-y-4">
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">What Are Cookies</h3>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving our services.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">How We Use Cookies</h3>
            <div className="space-y-2">
              <p><strong>Essential Cookies:</strong> These are necessary for the website to function properly, including authentication and security features.</p>
              <p><strong>Performance Cookies:</strong> These help us understand how visitors interact with our website by collecting anonymous information.</p>
              <p><strong>Functionality Cookies:</strong> These remember your preferences and provide enhanced features and personalization.</p>
            </div>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">Third-Party Cookies</h3>
            <p>We may use third-party services like Google Analytics to help us analyze website usage. These services may place their own cookies on your device.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">Managing Cookies</h3>
            <p>You can control and manage cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">Data Retention</h3>
            <p>Cookies are stored for varying periods depending on their purpose. Session cookies are deleted when you close your browser, while persistent cookies remain until they expire or are manually deleted.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
            <p>If you have any questions about our use of cookies, please contact us at aeroastro_vzg@gitam.in</p>
          </section>
          
          <p className="text-sm text-gray-400 pt-4 border-t border-white/10">
            Last updated: August 2025
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {showTermsModal && <TermsModal />}
      {showCookieModal && <CookieModal />}
      
      <footer className="relative bg-gradient-to-br from-[#0B0C0D] via-[#151719] to-[#1C1E21] border-t border-gray-800/50">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09C0F9]/5 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Club Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Image
                  src="/gaacLogo.png"
                  alt="GAAC Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">GAAC</h3>
                  <p className="text-gray-400 text-sm">GITAM Aero Astro Club</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
                Empowering students to explore the frontiers of technology through robotics, 
                programming, and astronomy. Join us in building the future.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#09C0F9]/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#09C0F9]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#09C0F9]/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#09C0F9]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#09C0F9]/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#09C0F9]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#09C0F9]/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#09C0F9]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 7.618 11.387.599-.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/recruitment" className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm">
                    Join Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#09C0F9] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:aeroastro_vzg@gitam.in" className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm">
                    aeroastro_vzg@gitam.in
                  </a>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#09C0F9] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div className="text-gray-400 text-sm">
                    <a href="tel:+917036442464" className="hover:text-[#09C0F9] transition-colors block">
                      +91 7036 442464
                    </a>
                    <a href="tel:+917382236771" className="hover:text-[#09C0F9] transition-colors block">
                      +91 73823 36771
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#09C0F9] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-400 text-sm">
                    GITAM University, Visakhapatnam
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800/50 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm mb-4 sm:mb-0">
                © 2025 GITAM Aero Astro Club. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm">
                  Privacy Policy
                </a>
                <button 
                  onClick={() => setShowTermsModal(true)}
                  className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => setShowCookieModal(true)}
                  className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm"
                >
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}