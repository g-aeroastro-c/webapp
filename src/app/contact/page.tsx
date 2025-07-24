"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [selectedCountry, setSelectedCountry] = useState("+91");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
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
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #09C0F9 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
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
                <a
                  href="mailto:getintouchv2@gaac.in"
                  className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link break-all"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-xs sm:text-sm">
                    aeroastro_vzg@gitam.in
                  </span>
                </a>
                <a
                  href="tel:+917036442464"
                  className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 70138 44384
                </a>
                <a
                  href="tel:+917382236771"
                  className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 95533 16797
                </a>
              </div>
            </div>

            {/* Technical Support */}
            <div className="group hover:bg-white/5 p-4 sm:p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-[#09C0F9]/30 bg-white/[0.02]">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-[#09C0F9] transition-colors">
                Technical Support
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <a
                  href="mailto:getintouchv2@gaac.in"
                  className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link break-all"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-xs sm:text-sm">
                    aeroastro_vzg@gitam.in
                  </span>
                </a>
                <a
                  href="tel:+912635464364"
                  className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 70138 44384
                </a>
                <a
                  href="tel:+919533316797"
                  className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 73823 38771
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
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm leading-relaxed">
                    GITAM Deemed University, Rushikonda Campus, Visakhapatnam,
                    Andhra Pradesh, India
                  </span>
                </div>
                <div className="flex items-center text-sm sm:text-base text-gray-300">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm">
                    Mon - Fri: 9:00 AM - 6:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="group hover:bg-white/5 p-4 sm:p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-[#09C0F9]/30 bg-white/[0.02]">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-[#09C0F9] transition-colors">
                Follow Us
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <a
                  href="https://discord.gg/tVQCyVS6NW"
                  className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.078.037c-.211.375-.444.864-.608 1.249a18.288 18.288 0 0 0-5.487 0 12.522 12.522 0 0 0-.617-1.249.077.077 0 0 0-.078-.037A19.736 19.736 0 0 0 3.677 4.37a.069.069 0 0 0-.031.027C.533 9.296-.32 14.043.099 18.735a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.033.077.077 0 0 0 .084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.104 13.153 13.153 0 0 1-1.872-.893.077.077 0 0 1-.008-.129c.126-.094.252-.192.371-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.099.245.197.372.291a.077.077 0 0 1-.006.129 12.276 12.276 0 0 1-1.873.893.076.076 0 0 0-.04.105c.36.699.772 1.364 1.225 1.994a.076.076 0 0 0 .085.028 19.873 19.873 0 0 0 6.002-3.034.077.077 0 0 0 .03-.055c.5-5.177-.838-9.886-3.548-14.339a.061.061 0 0 0-.03-.027zM8.02 15.331c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z" />
                  </svg>
                  Discord
                </a>
                <a
                  href="http://linkedin.com/company/gitam-aero-astro-club"
                  className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform"
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
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/gitam.aeroastro?igsh=MW9vYW1ydDkwMjRvNA=="
                  className="flex items-center text-sm sm:text-base text-gray-300 hover:text-[#09C0F9] transition-colors group/link"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.003.24 2.466.403a4.92 4.92 0 0 1 1.775 1.153 4.92 4.92 0 0 1 1.153 1.775c.163.463.347 1.26.403 2.466.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.24 2.003-.403 2.466a4.92 4.92 0 0 1-1.153 1.775 4.92 4.92 0 0 1-1.775 1.153c-.463.163-1.26.347-2.466.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.003-.24-2.466-.403a4.92 4.92 0 0 1-1.775-1.153 4.92 4.92 0 0 1-1.153-1.775c-.163-.463-.347-1.26-.403-2.466C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.206.24-2.003.403-2.466a4.92 4.92 0 0 1 1.153-1.775 4.92 4.92 0 0 1 1.775-1.153c.463-.163 1.26-.347 2.466-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.012 7.052.07 5.773.127 4.805.308 4.005.543 3.13.796 2.403 1.23 1.73 1.903.997 2.637.563 3.364.31 4.239.075 5.04-.106 6.008-.163 7.287-.221 8.567-.233 8.97-.233 12s.012 3.433.07 4.713c.057 1.279.238 2.247.473 3.048.253.875.687 1.602 1.36 2.275.733.733 1.46 1.167 2.335 1.42.8.235 1.768.416 3.048.473 1.279.058 1.682.07 4.913.07s3.433-.012 4.713-.07c1.279-.057 2.247-.238 3.048-.473a5.95 5.95 0 0 0 2.275-1.36 5.95 5.95 0 0 0 1.36-2.275c.235-.801.416-1.769.473-3.048.058-1.28.07-1.683.07-4.913s-.012-3.433-.07-4.713c-.057-1.279-.238-2.247-.473-3.048a5.95 5.95 0 0 0-1.36-2.275A5.95 5.95 0 0 0 19.7.543c-.801-.235-1.769-.416-3.048-.473C15.433.012 15.03 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0-2.881 0 1.44 1.44 0 0 0 2.881 0z" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://github.com/g-aeroastro-c"
                  className="flex items-center text-sm sm:text-base text-gray-300 hover:text-white transition-colors group/link"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 group-hover/link:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 
      0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.084-.729.084-.729 
      1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.334-5.467-5.93 
      0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 
      2.045.137 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 
      1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.42.36.81 1.096.81 2.215 0 1.6-.015 2.89-.015 3.285 0 .315.21.69.825.57C20.565 
      21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                  GitHub
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
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Get in Touch with GAAC
              </h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Ready to join our community or have questions? We&apos;d love to
              hear from you. Send us a message and we&apos;ll respond as soon as
              possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Quick Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#09C0F9]/20 rounded-xl flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-[#09C0F9]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a
                        href="mailto:getintouchv2@gaac.in"
                        className="text-gray-400 hover:text-[#09C0F9] transition-colors text-sm sm:text-base"
                      >
                        aeroastro_vzg@gitam.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#09C0F9]/20 rounded-xl flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-[#09C0F9]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <div className="space-y-1">
                        <a
                          href="tel:+91 70138 44384"
                          className="block text-gray-400 hover:text-[#09C0F9] transition-colors text-sm sm:text-base"
                        >
                          +91 70138 44384
                        </a>
                        <a
                          href="tel:+91 73823 38771"
                          className="block text-gray-400 hover:text-[#09C0F9] transition-colors text-sm sm:text-base"
                        >
                          +91 73823 38771
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#09C0F9]/20 rounded-xl flex items-center justify-center mr-4 mt-1">
                      <svg
                        className="w-6 h-6 text-[#09C0F9]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        GITAM Deemed University
                        <br />
                        Rushikonda Campus
                        <br />
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
                    <label className="text-sm font-medium text-gray-300">
                      First Name
                    </label>
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
                    <label className="text-sm font-medium text-gray-300">
                      Last Name
                    </label>
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
                  <label className="text-sm font-medium text-gray-300">
                    Email
                  </label>
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
                  <label className="text-sm font-medium text-gray-300">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="px-3 py-3 sm:py-4 bg-white/10 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#09C0F9]/50 focus:border-[#09C0F9]/50 transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="+91" className="bg-gray-800">
                        🇮🇳 +91
                      </option>
                      <option value="+1" className="bg-gray-800">
                        🇺🇸 +1
                      </option>
                      <option value="+44" className="bg-gray-800">
                        🇬🇧 +44
                      </option>
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
                  <label className="text-sm font-medium text-gray-300">
                    Message
                  </label>
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
                  <label
                    htmlFor="terms"
                    className="text-xs sm:text-sm text-gray-400 leading-relaxed"
                  >
                    I agree with{" "}
                    <a
                      href="#"
                      className="text-[#09C0F9] hover:text-[#0EA5E9] transition-colors"
                    >
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-[#09C0F9] hover:text-[#0EA5E9] transition-colors"
                    >
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
              If the question is not available on our FAQ section, Feel free to
              contact us personally, we will resolve your respective doubts.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#09C0F9] hover:text-[#0EA5E9] transition-colors mt-3 sm:mt-4 group text-sm sm:text-base"
            >
              Ask Question
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                question: "What is GAAC?",
                answer:
                  "The Gitam Aero Astro Club is a student organization at Gitam University focused on promoting aeronautics, programming, and robotics through three core teams: Stargazers, Robusta, and the Programming Team. They collaborate on projects, competitions, and skill-building activities in their fields.",
              },
              {
                question:
                  "What are the primary goals and activities of the GAAC and its core teams?",
                answer:
                  "GAAC aims to foster innovation and learning in aerospace, robotics, and programming through hands-on projects, competitions, workshops, and collaborative research initiatives.",
              },
              {
                question:
                  "What kinds of projects, events, or trips can students take part in as club members?",
                answer:
                  "Members can participate in rocket building, robotics competitions, coding challenges, astronomy observation trips, technical workshops, and inter-collegiate competitions.",
              },
              {
                question:
                  "What kind of support do students get from seniors and alumni in the club?",
                answer:
                  "Students receive mentorship, technical guidance, career advice, networking opportunities, and access to alumni networks for internships and job placements.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium text-white text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[#09C0F9] transform transition-transform flex-shrink-0 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
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
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-transparent hover:border-[#09C0F9]/20 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                Join this club
              </h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Join this club to access exclusive events, mentorship,
                resources, and a thriving tech community.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#09C0F9] hover:text-[#0EA5E9] transition-colors group/link text-sm sm:text-base"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover/link:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Join Now
              </a>
            </div>

            <div className="text-center group bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-transparent hover:border-[#09C0F9]/20 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                Blogs
              </h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Explore insightful blogs written by our members from tech trends
                to personal growth stories.
              </p>
              <a
                href="/blogs"
                className="inline-flex items-center text-[#09C0F9] hover:text-[#0EA5E9] transition-colors group/link text-sm sm:text-base"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover/link:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Read Blogs
              </a>
            </div>

            <div className="text-center group bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-transparent hover:border-[#09C0F9]/20 transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                Tech Events
              </h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Stay updated on upcoming tech events, workshops and conferences
                to enhance your knowledge.
              </p>
              <a
                href="/events"
                className="inline-flex items-center text-[#09C0F9] hover:text-[#0EA5E9] transition-colors group/link text-sm sm:text-base"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover/link:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
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
