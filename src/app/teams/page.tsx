import React from 'react';
import Link from 'next/link';
import { Bot, Code, Telescope, Users } from 'lucide-react';

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-grid-white/[0.05] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm">
              <Users className="h-12 w-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Teams
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the passionate teams that drive innovation and exploration at GITAM Aero Astro Club. 
            Each team brings unique expertise to push the boundaries of aerospace technology.
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Robotics Team */}
          <Link href="/teams/robotics" className="group block">
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-400/20 backdrop-blur-sm hover:border-red-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-red-500/20 rounded-xl border border-red-400/30">
                    <Bot className="h-8 w-8 text-red-400" />
                  </div>
                  <div className="h-2 w-2 bg-red-400 rounded-full animate-pulse" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors">
                  Robotics Team
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Building autonomous systems and robotic solutions for aerospace applications. 
                  From rovers to drones, we create the machines of tomorrow.
                </p>
                
                <div className="flex items-center text-red-400 group-hover:text-red-300 transition-colors">
                  <span className="font-medium">Explore Robotics</span>
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Programming Team */}
          <Link href="/teams/programming" className="group block">
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/20 backdrop-blur-sm hover:border-green-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-green-500/20 rounded-xl border border-green-400/30">
                    <Code className="h-8 w-8 text-green-400" />
                  </div>
                  <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                  Programming Team
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Developing cutting-edge software solutions for aerospace missions. 
                  From flight control systems to data analysis tools.
                </p>
                
                <div className="flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                  <span className="font-medium">View Projects</span>
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Astronomy Team */}
          <Link href="/teams/astronomy" className="group block">
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-400/30">
                    <Telescope className="h-8 w-8 text-purple-400" />
                  </div>
                  <div className="h-2 w-2 bg-purple-400 rounded-full animate-pulse" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  Astronomy Team
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Exploring the cosmos through observation, research, and analysis. 
                  Unlocking the mysteries of space and celestial phenomena.
                </p>
                
                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="font-medium">Discover Space</span>
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Executive Body CTA */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-400/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Meet Our Leadership</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Get to know the passionate individuals who guide and lead GITAM Aero Astro Club.
            </p>
            <Link href="/teams/executive" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Users className="h-5 w-5 mr-2" />
              Executive Body
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

