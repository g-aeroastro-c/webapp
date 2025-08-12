'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Bot, Trophy, Users, Zap } from 'lucide-react';

export default function RoboticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-cyan-800/20 animate-gradient-shift"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 container mx-auto px-6 pt-24 sm:pt-32 pb-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/teams" className="inline-flex items-center text-cyan-300 hover:text-cyan-200 transition-colors mb-6">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Teams
          </Link>
          
          <div className="flex items-center mb-4">
          <Bot className="h-12 w-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Robotics Team
            </h1>
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl">
            Building the future through innovative robotics solutions and cutting-edge automation.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <Trophy className="h-8 w-8 text-yellow-400 mb-3" />
            <h3 className="text-2xl font-bold text-white mb-1">15+</h3>
            <p className="text-slate-300">Awards Won</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <Users className="h-8 w-8 text-cyan-400 mb-3" />
            <h3 className="text-2xl font-bold text-white mb-1">25+</h3>
            <p className="text-slate-300">Team Members</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <Zap className="h-8 w-8 text-purple-400 mb-3" />
            <h3 className="text-2xl font-bold text-white mb-1">50+</h3>
            <p className="text-slate-300">Projects Completed</p>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">About Our Team</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To push the boundaries of robotics technology and create innovative solutions that solve real-world problems. 
                We focus on developing autonomous systems, advanced sensors, and intelligent control algorithms.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">What We Do</h3>
              <p className="text-slate-300 leading-relaxed">
                From designing competition robots to developing industrial automation solutions, our team works on 
                diverse projects that challenge us to innovate and excel in mechanical design, programming, and system integration.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Projects Showcase */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-cyan-300/50 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <Bot className="h-8 w-8 text-blue-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Autonomous Navigation Robot</h3>
                <p className="text-slate-300 text-sm">
                  Advanced robot with LIDAR and computer vision for autonomous navigation in complex environments.
                </p>
              </div>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-purple-300/50 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <Zap className="h-16 w-16 text-purple-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Industrial Automation Arm</h3>
                <p className="text-slate-300 text-sm">
                  6-DOF robotic arm designed for precision manufacturing and quality control applications.
                </p>
              </div>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-yellow-300/50 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                <Trophy className="h-16 w-16 text-yellow-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Competition Bot 2024</h3>
                <p className="text-slate-300 text-sm">
                  Championship-winning robot designed for FIRST Robotics Competition with advanced game mechanics.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Join Us Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-300/20"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Whether you're passionate about mechanical design, programming, or electronics, we welcome motivated individuals 
            ready to push the boundaries of robotics technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300">
              Get In Touch
            </Link>
            <Link href="/projects" className="border border-cyan-300/50 text-cyan-300 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300/10 transition-all duration-300">
              View All Projects
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
