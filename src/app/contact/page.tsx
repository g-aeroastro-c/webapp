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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('
      
      submitted:', formData);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white">
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
                <a href="mailto:getintouchv2@gaac.in" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link break-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-xs sm:text-sm">getintouchv2@gaac.in</span>
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
                <a href="mailto:getintouchv2@gaac.in" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link break-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-xs sm:text-sm">getintouchv2@gaac.in</span>
                </a>
                <a href="tel:+912635464364" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 26354 64364
                </a>
                <a href="tel:+919533316797" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 95533 16797
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
                <a href="#" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  Twitter
                </a>
                <a href="#" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="#" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.333 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.752-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                  Instagram
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
              <form
  onSubmit={handleSubmit}
  className="space-y-6"
  name="club_contact_form"     // ✨ ADD THIS: Name for Netlify to identify your form
  method="POST"                // ✨ ADD THIS: Specifies the HTTP method for form submission
  data-netlify="true"          // ✨ ADD THIS: Tells Netlify to process this form
  netlify-honeypot="bot-field" // ✨ ADD THIS: For basic spam protection
>
  {/* ✨ ADD THIS: Hidden honeypot field for spam protection. Place it directly inside the form. */}
  <p style={{ display: 'none' }}>
    <label>
      Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-300">First Name</label>
      <input
        type="text"
        name="firstName" // Already present, which is great!
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
        name="lastName" // Already present, great!
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
      name="email" // Already present, great!
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
        name="countryCode" // ✨ ADD THIS: Netlify will capture this as 'countryCode'
      >
        <option value="+91" className="bg-gray-800">🇮🇳 +91</option>
        <option value="+1" className="bg-gray-800">🇺🇸 +1</option>
        <option value="+44" className="bg-gray-800">🇬🇧 +44</option>
      </select>
      <input
        type="tel"
        name="phone" // Already present, great!
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
      name="message" // Already present, great!
      value={formData.message}
      onChange={handleInputChange}
      placeholder="Enter your Message"
      rows={4}
      className="w-full px-4 py-3 sm:py-4 bg-white/10 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09C0F9]/50 focus:border-[#09C0F9]/50 transition-all duration-300 resize-none text-sm sm:text-base"
      required
    ></textarea>
  </div>

  <div className="flex items-start space-x-3">
    <input
      type="checkbox"
      id="terms"
      name="termsAgreed" // ✨ ADD THIS: Netlify will capture this as 'termsAgreed' (value will be 'on' if checked)
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

  <button
    type="submit"
    className="w-full py-3 sm:py-4 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#0284C7] text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-[#09C0F9]/25 text-sm sm:text-base"
  >
    Send Message
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
              <a href="#" className="inline-flex items-center text-[#09C0F9] hover:text-[#0EA5E9] transition-colors group/link text-sm sm:text-base">
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
