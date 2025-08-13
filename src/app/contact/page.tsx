"use client";

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [selectedCountry, setSelectedCountry] = useState('+91');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          countryCode: selectedCountry,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        setSelectedCountry('+91');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0C0D] via-[#151719] to-[#1C1E21] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09C0F9]/5 to-transparent"></div>
      
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, #09C0F9 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      {/* Contact Information Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Contact Categories Grid - Mobile First Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            
            {/* General Inquiries */}
            <div className="group hover:bg-white/5 p-4 sm:p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-[#09C0F9]/30 bg-white/[0.02]">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-[#09C0F9] transition-colors">
                General Inquiries
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <a href="mailto:aeroastro_vzg@gitam.in" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link break-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-xs sm:text-sm">aeroastro@gitam.in</span>
                </a>
                <a href="tel:+917036442464" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 7036 442464
                </a>
                <a href="tel:+917382236771" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 73823 36771
                </a>
              </div>
            </div>

            {/* Technical Support */}
            <div className="group hover:bg-white/5 p-4 sm:p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-[#09C0F9]/30 bg-white/[0.02]">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-[#09C0F9] transition-colors">
                Technical Support
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <a href="mailto:aeroastro_vzg@gitam.in" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link break-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-xs sm:text-sm">aeroastro_vzg@gitam.in</span>
                </a>
                <a href="tel:+917036442464" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 7036 442464
                </a>
                <a href="tel:+917382236771" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 73823 36771
                </a>
              </div>
            </div>

            {/* Our Office */}
            <div className="group hover:bg-white/5 p-4 sm:p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-[#09C0F9]/30 bg-white/[0.02]">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-[#09C0F9] transition-colors">
                Our Office
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start text-sm sm:text-base text-gray-300">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm leading-relaxed">GITAM Deemed University, Rushikonda Campus, Visakhapatnam, Andhra Pradesh, India</span>
                </div>
                <div className="flex items-center text-sm sm:text-base text-gray-300">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm">Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="group hover:bg-white/5 p-4 sm:p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-[#09C0F9]/30 bg-white/[0.02]">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-[#09C0F9] transition-colors">
                Follow Us
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <a href="https://www.instagram.com/gitam.aeroastro/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.333 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.752-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                  Instagram
                </a>
                <a href="https://www.linkedin.com/company/gitam-aero-astro-club/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://github.com/g-aeroastro-c" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a href="https://www.gaac.site" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>

      {/* Get in Touch Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Get in Touch with GAAC
              </h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Ready to join our community or have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Quick Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Contact Information</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#09C0F9]/20 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#09C0F9]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a href="mailto:getintouchv2@gaac.in" className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm sm:text-base">
                        getintouchv2@gaac.in
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#09C0F9]/20 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#09C0F9]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <div className="space-y-1">
                        <a href="tel:+917036442464" className="block text-gray-400 hover:text-[#09C0F9] transition-colors text-sm sm:text-base">
                          +91 7036 442464
                        </a>
                        <a href="tel:+917382236771" className="block text-gray-400 hover:text-[#09C0F9] transition-colors text-sm sm:text-base">
                          +91 73823 36771
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#09C0F9]/20 rounded-xl flex items-center justify-center mr-4 mt-1">
                      <svg className="w-6 h-6 text-[#09C0F9]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        GITAM Deemed University<br />
                        Rushikonda Campus<br />
                        Visakhapatnam, Andhra Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter First Name"
                      className="w-full px-4 py-3 sm:py-4 bg-white/10 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09C0F9]/50 focus:border-[#09C0F9]/50 transition-all duration-300 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter Last Name"
                      className="w-full px-4 py-3 sm:py-4 bg-white/10 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09C0F9]/50 focus:border-[#09C0F9]/50 transition-all duration-300 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your Email"
                    className="w-full px-4 py-3 sm:py-4 bg-white/10 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09C0F9]/50 focus:border-[#09C0F9]/50 transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Phone Number</label>
                  <div className="flex gap-2">
                    <select 
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="px-3 py-3 sm:py-4 bg-white/10 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#09C0F9]/50 focus:border-[#09C0F9]/50 transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="+91" className="bg-gray-800">🇮🇳 +91</option>
                      <option value="+1" className="bg-gray-800">🇺🇸 +1</option>
                      <option value="+44" className="bg-gray-800">🇬🇧 +44</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter Phone Number"
                      className="flex-1 px-4 py-3 sm:py-4 bg-white/10 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09C0F9]/50 focus:border-[#09C0F9]/50 transition-all duration-300 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your Message"
                    rows={4}
                    className="w-full px-4 py-3 sm:py-4 bg-white/10 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09C0F9]/50 focus:border-[#09C0F9]/50 transition-all duration-300 resize-none text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 w-4 h-4 text-[#09C0F9] bg-transparent border-gray-600 rounded focus:ring-[#09C0F9]/50 focus:ring-2"
                    required
                  />
                  <label htmlFor="terms" className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    I agree with{' '}
                    <a href="#" className="text-[#09C0F9] hover:text-[#0EA5E9] transition-colors">
                      Terms of Use
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-[#09C0F9] hover:text-[#0EA5E9] transition-colors">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-sm">
                    ✅ Message sent successfully! We&apos;ll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-sm">
                    ❌ Failed to send message. Please try again or contact us directly.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 sm:py-4 font-semibold rounded-xl transition-all duration-300 transform shadow-lg text-sm sm:text-base ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#0284C7] text-black hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-[#09C0F9]/25'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              If the question is not available on our FAQ section, Feel free to contact us personally, we will resolve your respective doubts.
            </p>
            <a href="#" className="inline-flex items-center text-[#09C0F9] hover:text-[#0EA5E9] transition-colors mt-3 sm:mt-4 group text-sm sm:text-base">
              Ask Question
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                question: "What is GAAC?",
                answer: "The Gitam Aero Astro Club is a student organization at Gitam University focused on promoting aeronautics, programming, and robotics through three core teams: Stargazers, Robusta, and the Programming Team. They collaborate on projects, competitions, and skill-building activities in their fields."
              },
              {
                question: "What are the primary goals and activities of the GAAC and its core teams?",
                answer: "GAAC aims to foster innovation and learning in aerospace, robotics, and programming through hands-on projects, competitions, workshops, and collaborative research initiatives."
              },
              {
                question: "What kinds of projects, events, or trips can students take part in as club members?",
                answer: "Members can participate in rocket building, robotics competitions, coding challenges, astronomy observation trips, technical workshops, and inter-collegiate competitions."
              },
              {
                question: "What kind of support do students get from seniors and alumni in the club?",
                answer: "Students receive mentorship, technical guidance, career advice, networking opportunities, and access to alumni networks for internships and job placements."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium text-white text-sm sm:text-base pr-4">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[#09C0F9] transform transition-transform flex-shrink-0 ${expandedFaq === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>

      {/* Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[#09C0F9] text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4">
              Learn, Connect, and Innovate
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Step Into the Future with GAAC&apos;s Vision
            </h2>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-transparent hover:border-[#09C0F9]/20 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Join this club</h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Join this club to access exclusive events, mentorship, resources, and a thriving tech community.
              </p>
              <a href="/recruitment" className="inline-flex items-center text-[#09C0F9] hover:text-[#0EA5E9] transition-colors group/link text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover/link:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Join Now
              </a>
            </div>

            <div className="text-center group bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-transparent hover:border-[#09C0F9]/20 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Blogs</h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Explore insightful blogs written by our members from tech trends to personal growth stories.
              </p>
              <a href="/blogs" className="inline-flex items-center text-[#09C0F9] hover:text-[#0EA5E9] transition-colors group/link text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover/link:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Read Blogs
              </a>
            </div>

            <div className="text-center group bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-transparent hover:border-[#09C0F9]/20 transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Tech Events</h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Stay updated on upcoming tech events, workshops and conferences to enhance your knowledge.
              </p>
              <a href="/events" className="inline-flex items-center text-[#09C0F9] hover:text-[#0EA5E9] transition-colors group/link text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover/link:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                View Events
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}