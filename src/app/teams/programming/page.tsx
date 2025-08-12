'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Code, Cpu, Database, Globe, GitBranch, Smartphone } from 'lucide-react';

export default function ProgrammingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-violet-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-violet-800/20 animate-gradient-shift"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      
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
            <Code className="h-12 w-12 text-blue-400 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">
              Programming Team
            </h1>
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl">
            Crafting elegant solutions and building tomorrow's digital infrastructure with cutting-edge technologies.
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
            <GitBranch className="h-8 w-8 text-green-400 mb-3" />
            <h3 className="text-2xl font-bold text-white mb-1">100+</h3>
            <p className="text-slate-300">Repositories</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <Cpu className="h-8 w-8 text-blue-400 mb-3" />
            <h3 className="text-2xl font-bold text-white mb-1">30+</h3>
            <p className="text-slate-300">Active Developers</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <Globe className="h-8 w-8 text-violet-400 mb-3" />
            <h3 className="text-2xl font-bold text-white mb-1">75+</h3>
            <p className="text-slate-300">Apps Deployed</p>
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
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To be at the forefront of technological innovation by developing scalable, maintainable, and 
                impactful software solutions that address complex problems across various domains.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-violet-300 mb-4">Our Expertise</h3>
              <p className="text-slate-300 leading-relaxed">
                From full-stack web development to machine learning, mobile apps to cloud infrastructure, 
                our diverse team masters multiple programming languages and cutting-edge frameworks.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technologies We Master</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Go',
              'Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Rust'
            ].map((tech) => (
              <div key={tech} className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-center hover:border-blue-300/50 transition-all duration-300">
                <span className="text-white font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-blue-300/50 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <Globe className="h-16 w-16 text-blue-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">E-Commerce Platform</h3>
                <p className="text-slate-300 text-sm mb-3">
                  Full-stack marketplace with real-time payments, inventory management, and analytics dashboard.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-violet-500/20 text-violet-300 px-2 py-1 rounded">Node.js</span>
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">PostgreSQL</span>
                </div>
              </div>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-violet-300/50 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center">
                <Smartphone className="h-16 w-16 text-violet-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">AI-Powered Mobile App</h3>
                <p className="text-slate-300 text-sm mb-3">
                  Cross-platform mobile application with machine learning capabilities for image recognition.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">React Native</span>
                  <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded">TensorFlow</span>
                  <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">Python</span>
                </div>
              </div>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-green-300/50 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center">
                <Database className="h-16 w-16 text-green-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Microservices Architecture</h3>
                <p className="text-slate-300 text-sm mb-3">
                  Scalable cloud-native architecture handling millions of requests with high availability.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Go</span>
                  <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded">Docker</span>
                  <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">Kubernetes</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Open Source */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-xl p-8 border border-blue-300/20">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Open Source Contributions</h2>
            <p className="text-slate-300 text-center mb-6 max-w-2xl mx-auto">
              We believe in giving back to the community. Our team actively contributes to open source projects 
              and maintains several libraries used by developers worldwide.
            </p>
            <div className="flex justify-center">
              <Link href="https://github.com" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center">
                <GitBranch className="mr-2 h-5 w-5" />
                View Our GitHub
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Join Us Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-xl p-8 border border-blue-300/20"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Development Team</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Whether you're a seasoned developer or just starting your coding journey, we welcome passionate individuals 
            who want to create impactful software solutions and grow their skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300">
              Get In Touch
            </Link>
            <Link href="/projects" className="border border-blue-300/50 text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-300/10 transition-all duration-300">
              View All Projects
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
