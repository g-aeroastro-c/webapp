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
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.433-2.001 4.72-1.194 1.391-2.731 2.085-4.61 2.085-.837 0-1.628-.152-2.378-.456l-.748-.304c-.497-.2-1.04-.479-1.627-.836-.587-.357-1.098-.735-1.532-1.134-.434-.399-.748-.798-.942-1.197-.194-.399-.291-.778-.291-1.137 0-.618.194-1.137.583-1.556.389-.419.896-.628 1.522-.628.279 0 .543.06.792.179.249.119.498.299.747.539.249.24.518.539.807.896.289.357.628.628 1.018.813.389.185.837.278 1.343.278.896 0 1.628-.24 2.197-.718.568-.479.852-1.137.852-1.975 0-.538-.12-.976-.359-1.316-.24-.34-.568-.599-.986-.777-.418-.179-.896-.298-1.433-.359-.538-.06-1.098-.09-1.687-.09H8.1v-2.4h1.018c.538 0 1.018-.03 1.433-.09.418-.06.777-.149 1.076-.269.299-.119.538-.278.718-.478.179-.199.269-.458.269-.777 0-.418-.12-.777-.359-1.076-.24-.299-.568-.448-.986-.448-.359 0-.687.09-.986.269-.299.179-.568.418-.807.718-.24.299-.458.628-.658.986-.199.359-.389.687-.568.986-.179.299-.389.538-.628.718-.24.179-.538.269-.896.269-.538 0-.986-.179-1.343-.538-.359-.359-.538-.837-.538-1.433 0-.359.09-.718.269-1.076.179-.359.418-.687.718-.986.299-.299.658-.538 1.076-.718.418-.179.896-.269 1.433-.269.896 0 1.687.149 2.378.448.687.299 1.254.718 1.702 1.254.448.538.673 1.194.673 1.975 0 .538-.12 1.018-.359 1.433-.24.418-.568.777-.986 1.076-.418.299-.896.538-1.433.718-.538.179-1.137.269-1.796.269-.359 0-.718-.03-1.076-.09-.359-.06-.687-.149-.986-.269-.299-.119-.568-.269-.807-.448-.24-.179-.418-.389-.538-.628-.119-.24-.179-.508-.179-.807 0-.299.06-.568.179-.807.119-.24.299-.418.538-.538.24-.119.538-.179.896-.179.299 0 .568.06.807.179.24.119.418.299.538.538.119.24.179.508.179.807z"/>
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
                <a href="/" className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blogs" className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="/signup" className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm">
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
                <svg className="w-4 h-4 text-[#09C0F9] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:getintouchv2@gaac.in" className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm">
                  getintouchv2@gaac.in
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
              <a href="#" className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}