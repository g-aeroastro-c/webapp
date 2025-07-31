"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0B0C0D] via-[#151719] to-[#1C1E21] border-t border-gray-800/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09C0F9]/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Club Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/gaacLogo.png"
                alt="GAAC Logo"
                className="h-12 w-12 mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-white">GAAC</h3>
                <p className="text-gray-400 text-sm">GITAM Aero Astro Club</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              Empowering students to explore the frontiers of technology through
              robotics, programming, and astronomy. Join us in building the
              future.
            </p>
            <div className="flex space-x-4">
              {/* discord */}
              <a
                href="https://discord.com/invite/tVQCyVS6NW"
                className="w-10 h-10 bg-white/10 hover:bg-[#09C0F9]/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-[#09C0F9]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.078.037c-.211.375-.444.864-.608 1.249a18.288 18.288 0 0 0-5.487 0 12.522 12.522 0 0 0-.617-1.249.077.077 0 0 0-.078-.037A19.736 19.736 0 0 0 3.677 4.37a.069.069 0 0 0-.031.027C.533 9.296-.32 14.043.099 18.735a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.033.077.077 0 0 0 .084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.104 13.153 13.153 0 0 1-1.872-.893.077.077 0 0 1-.008-.129c.126-.094.252-.192.371-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.099.245.197.372.291a.077.077 0 0 1-.006.129 12.276 12.276 0 0 1-1.873.893.076.076 0 0 0-.04.105c.36.699.772 1.364 1.225 1.994a.076.076 0 0 0 .085.028 19.873 19.873 0 0 0 6.002-3.034.077.077 0 0 0 .03-.055c.5-5.177-.838-9.886-3.548-14.339a.061.061 0 0 0-.03-.027zM8.02 15.331c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z" />
                </svg>
              </a>
              {/* linked in  */}
              <a
                href="https://www.linkedin.com/company/gitam-aero-astro-club/posts/?feedView=all"
                className="w-10 h-10 bg-white/10 hover:bg-[#09C0F9]/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-[#09C0F9]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
    2.76 2.24 5 5 5h14c2.76 0 5-2.24 
    5-5v-14c0-2.76-2.24-5-5-5zm-11.75 
    20h-2.5v-10h2.5v10zm-1.25-11.27c-.83 
    0-1.5-.68-1.5-1.5s.67-1.5 
    1.5-1.5 1.5.68 1.5 
    1.5-.67 1.5-1.5 
    1.5zm13 11.27h-2.5v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
    0-2.16 1.46-2.16 2.97v5.7h-2.5v-10h2.4v1.36h.03c.33-.63 
    1.14-1.29 2.35-1.29 2.51 0 2.97 1.65 2.97 3.8v6.13z"
                  />{" "}
                </svg>
              </a>
              {/* insta */}
              <a
                href="https://www.instagram.com/gitam.aeroastro?igsh=MW9vYW1ydDkwMjRvNA=="
                className="w-10 h-10 bg-white/10 hover:bg-[#09C0F9]/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-[#09C0F9]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.003.24 2.466.403a4.92 4.92 0 0 1 1.775 1.153 4.92 4.92 0 0 1 1.153 1.775c.163.463.347 1.26.403 2.466.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.24 2.003-.403 2.466a4.92 4.92 0 0 1-1.153 1.775 4.92 4.92 0 0 1-1.775 1.153c-.463.163-1.26.347-2.466.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.003-.24-2.466-.403a4.92 4.92 0 0 1-1.775-1.153 4.92 4.92 0 0 1-1.153-1.775c-.163-.463-.347-1.26-.403-2.466C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.206.24-2.003.403-2.466a4.92 4.92 0 0 1 1.153-1.775 4.92 4.92 0 0 1 1.775-1.153c.463-.163 1.26-.347 2.466-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.012 7.052.07 5.773.127 4.805.308 4.005.543 3.13.796 2.403 1.23 1.73 1.903.997 2.637.563 3.364.31 4.239.075 5.04-.106 6.008-.163 7.287-.221 8.567-.233 8.97-.233 12s.012 3.433.07 4.713c.057 1.279.238 2.247.473 3.048.253.875.687 1.602 1.36 2.275.733.733 1.46 1.167 2.335 1.42.8.235 1.768.416 3.048.473 1.279.058 1.682.07 4.913.07s3.433-.012 4.713-.07c1.279-.057 2.247-.238 3.048-.473a5.95 5.95 0 0 0 2.275-1.36 5.95 5.95 0 0 0 1.36-2.275c.235-.801.416-1.769.473-3.048.058-1.28.07-1.683.07-4.913s-.012-3.433-.07-4.713c-.057-1.279-.238-2.247-.473-3.048a5.95 5.95 0 0 0-1.36-2.275A5.95 5.95 0 0 0 19.7.543c-.801-.235-1.769-.416-3.048-.473C15.433.012 15.03 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0-2.881 0 1.44 1.44 0 0 0 2.881 0z" />
                </svg>
              </a>
              {/* github */}
              <a
                href="https://github.com/g-aeroastro-c"
                className="w-10 h-10 bg-white/10 hover:bg-[#09C0F9]/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-[#09C0F9]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 7.618 11.387.599-.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm"
                >
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 text-[#09C0F9] mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:aeroastro_vzg@gitam.in"
                  className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm"
                >
                  aeroastro_vzg@gitam.in
                </a>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 text-[#09C0F9] mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div className="text-gray-400 text-sm">
                  <a
                    href="tel:+917036442464"
                    className="hover:text-[#09C0F9] transition-colors block"
                  >
                    +91 7013844384
                  </a>
                  <a
                    href="tel:+917382236771"
                    className="hover:text-[#09C0F9] transition-colors block"
                  >
                    +91 7382338771
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 text-[#09C0F9] mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
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
              <a
                href="#"
                className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
