"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Telescope, Star, Rocket, Atom, Satellite, ArrowLeft, BookOpen, Users, Search } from "lucide-react";

interface StarProps {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

const AstronomyTeamPage = () => {
  const [stars, setStars] = useState<StarProps[]>([]);

  useEffect(() => {
    // Generate random stars for the background
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 2,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Starfield Background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Celestial Objects */}
      <div className="absolute inset-0">
        {/* Large Planet */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20"
          animate={{
            rotate: 360,
            y: [0, -30, 0],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        {/* Saturn with Rings */}
        <motion.div
          className="absolute bottom-32 left-16 opacity-15"
          animate={{
            rotate: -360,
            x: [0, 20, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full"></div>
            <div className="absolute inset-0 w-32 h-32 border-4 border-yellow-300 rounded-full opacity-50 -top-6 -left-6"></div>
          </div>
        </motion.div>

        {/* Floating Satellite */}
        <motion.div
          className="absolute top-1/3 left-1/4"
          animate={{
            rotate: 360,
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Satellite className="w-12 h-12 text-cyan-300 opacity-30" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center relative z-30">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            href="/teams" 
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors duration-300 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Teams</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              StarGazers
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Telescope className="w-8 h-8 text-cyan-400" />
              <span className="text-xl sm:text-2xl text-slate-300 font-light">Astronomy Team</span>
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
            
            {/* Subtitle with animated icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center justify-center gap-4 text-slate-400 text-sm sm:text-base"
            >
              <div className="flex items-center gap-1">
                <Atom className="w-4 h-4" />
                <span>Astrophysics</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Telescope className="w-4 h-4" />
                <span>Astronomy</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Rocket className="w-4 h-4" />
                <span>Rocketry</span>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            Welcome to the StarGazers Team page. Our team is dedicated to exploring
            the wonders of the universe and sharing our knowledge with others.
            Join us in our celestial journey through astronomy, astrophysics, and rocketry!
          </motion.p>
        </motion.div>
        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-30"
        >
          {/* Stargazing Nights Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-md border border-blue-400/20 p-8 hover:border-blue-400/40 transition-all duration-300"
          >
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Floating Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative mb-6 inline-block"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Telescope className="w-8 h-8 text-white" />
              </div>
              {/* Icon Glow */}
              <div className="absolute inset-0 bg-blue-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </motion.div>

            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
              Stargazing Nights
            </h2>
            <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
              Join us for our monthly stargazing sessions where we explore the
              night sky together, observing celestial objects through telescopes and learning about constellations.
            </p>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              <Star className="w-6 h-6 text-yellow-400" />
            </div>
          </motion.div>

          {/* Lectures & Workshops Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-md border border-purple-400/20 p-8 hover:border-purple-400/40 transition-all duration-300"
          >
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Floating Icon */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative mb-6 inline-block"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              {/* Icon Glow */}
              <div className="absolute inset-0 bg-purple-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </motion.div>

            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
              Lectures & Workshops
            </h2>
            <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
              We organize lectures and workshops delivered by experts in
              astronomy and astrophysics, covering topics from planetary science to rocket propulsion.
            </p>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              <Atom className="w-6 h-6 text-pink-400" />
            </div>
          </motion.div>

          {/* Research Projects Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-md border border-cyan-400/20 p-8 hover:border-cyan-400/40 transition-all duration-300"
          >
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Floating Icon */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative mb-6 inline-block"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
              {/* Icon Glow */}
              <div className="absolute inset-0 bg-cyan-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </motion.div>

            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
              Research Projects
            </h2>
            <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
              Get involved in our exciting research projects exploring various
              phenomena in space, from exoplanet detection to rocket trajectory optimization.
            </p>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              <Rocket className="w-6 h-6 text-cyan-400" />
            </div>
          </motion.div>
        </motion.div>

        {/* Team Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-slate-400 text-sm">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
            <div className="text-slate-400 text-sm">Monthly Sessions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">8</div>
            <div className="text-slate-400 text-sm">Research Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">25+</div>
            <div className="text-slate-400 text-sm">Expert Lectures</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-md border border-cyan-400/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-semibold text-white">Join Our Cosmic Journey</h3>
              <Rocket className="w-6 h-6 text-purple-400" />
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Ready to explore the mysteries of the universe? Join StarGazers and embark on an extraordinary 
              journey through space, time, and the fundamental laws of physics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/recruitment"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Rocket className="w-4 h-4" />
                <span>Join Our Team</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-400 hover:border-purple-300 text-purple-300 hover:text-purple-200 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-purple-400/10"
              >
                <Star className="w-4 h-4" />
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Navigation Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <Link 
            href="/teams" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore Other Teams</span>
          </Link>
        </motion.div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/5 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
    </div>
  );
};

export default AstronomyTeamPage;
