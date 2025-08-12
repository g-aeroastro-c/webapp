'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Users, Crown, Mail, Linkedin, Star, Award, Target, Heart } from 'lucide-react';

export default function ExecutivePage() {
  const executives = [
    {
      name: "Sarah Johnson",
      position: "President",
      department: "Aerospace Engineering",
      year: "Final Year",
      bio: "Leading the club with a passion for space exploration and team building. Specializes in mission planning and organizational development.",
      email: "sarah.johnson@student.gitam.edu",
      linkedin: "#",
      achievements: ["NASA Internship 2023", "Best Leadership Award", "Published Research Paper"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Michael Chen",
      position: "Vice President",
      department: "Computer Science",
      year: "Third Year",
      bio: "Bridging technology and aerospace through innovative software solutions. Expert in flight simulation and control systems.",
      email: "michael.chen@student.gitam.edu",
      linkedin: "#",
      achievements: ["Google Summer of Code", "Hackathon Winner", "Open Source Contributor"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Emily Rodriguez",
      position: "Technical Lead",
      department: "Mechanical Engineering",
      year: "Final Year",
      bio: "Overseeing technical projects with expertise in robotics and propulsion systems. Passionate about sustainable aerospace technologies.",
      email: "emily.rodriguez@student.gitam.edu",
      linkedin: "#",
      achievements: ["AIAA Design Competition", "Patent Application", "Research Excellence"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "David Park",
      position: "Secretary",
      department: "Physics",
      year: "Second Year",
      bio: "Managing communications and documentation with a focus on astrophysics research and outreach programs.",
      email: "david.park@student.gitam.edu",
      linkedin: "#",
      achievements: ["Science Communication Award", "Research Publication", "Community Outreach"],
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Lisa Wang",
      position: "Treasurer",
      department: "Business Administration",
      year: "Third Year",
      bio: "Managing finances and partnerships while bringing business acumen to aerospace projects and sustainability initiatives.",
      email: "lisa.wang@student.gitam.edu",
      linkedin: "#",
      achievements: ["Finance Competition Winner", "Sponsorship Growth", "Budget Optimization"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "James Wilson",
      position: "Events Coordinator",
      department: "Marketing",
      year: "Second Year",
      bio: "Organizing impactful events and workshops that inspire the next generation of aerospace engineers and researchers.",
      email: "james.wilson@student.gitam.edu",
      linkedin: "#",
      achievements: ["Event Excellence Award", "Speaker Coordination", "Community Building"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-purple-800/20 animate-gradient-shift"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-1 h-1 bg-blue-400/30 rounded-full"></div>
          </div>
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-6 pt-24 sm:pt-32 pb-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/teams" className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors mb-6">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Teams
          </Link>
          
          <div className="flex items-center mb-4">
            <Crown className="h-12 w-12 text-yellow-400 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Executive Body
            </h1>
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl">
            Meet the passionate leaders driving innovation and excellence at GITAM Aero Astro Club.
          </p>
        </motion.div>

        {/* Club Vision */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Target className="h-8 w-8 text-blue-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
              <p className="text-slate-300 text-sm">Fostering innovation and excellence in aerospace education and research.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Star className="h-8 w-8 text-yellow-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
              <p className="text-slate-300 text-sm">To be the leading student organization in aerospace technology and exploration.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Heart className="h-8 w-8 text-red-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Our Values</h3>
              <p className="text-slate-300 text-sm">Innovation, collaboration, excellence, and inclusive learning for all members.</p>
            </div>
          </div>
        </motion.section>

        {/* Executive Team */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((executive, index) => (
              <motion.div
                key={executive.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  {/* Profile Header */}
                  <div className={`h-32 bg-gradient-to-r ${executive.color} relative`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-6">
                      <div className="w-16 h-16 bg-white/20 rounded-full border-2 border-white/50 flex items-center justify-center backdrop-blur-sm">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">{executive.name}</h3>
                      <p className="text-sm font-semibold text-blue-300 mb-1">{executive.position}</p>
                      <p className="text-xs text-slate-400">{executive.department} • {executive.year}</p>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {executive.bio}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-1 text-yellow-400" />
                        Key Achievements
                      </h4>
                      <div className="space-y-1">
                        {executive.achievements.map((achievement, i) => (
                          <div key={i} className="text-xs text-slate-300 flex items-center">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
                      <a
                        href={`mailto:${executive.email}`}
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                        title="Email"
                      >
                        <Mail className="h-4 w-4 text-blue-300" />
                      </a>
                      <a
                        href={executive.linkedin}
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4 text-blue-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-300/20"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Have questions about the club or want to collaborate? Our executive team is always ready to help 
            and discuss new opportunities for growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link 
              href="/about" 
              className="border border-blue-300/50 text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-300/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
