"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Rocket, Star, Satellite, Globe } from "lucide-react";

export default function NotFound() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random stars for the background
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 px-4 sm:px-6">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-purple-800/20 animate-gradient-shift"></div>
        
        {/* Floating Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full opacity-70"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating Planets */}
        <motion.div
          className="absolute top-16 sm:top-20 left-8 sm:left-12 lg:left-20 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20"
          animate={{
            rotate: 360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        <motion.div
          className="absolute bottom-24 sm:bottom-28 lg:bottom-32 right-8 sm:right-16 lg:right-32 w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-30"
          animate={{
            rotate: -360,
            x: [0, 15, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Floating Satellite */}
        <motion.div
          className="absolute top-1/3 right-1/4 hidden sm:block"
          animate={{
            rotate: 360,
            x: [0, 30, 0],
            y: [0, -15, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Satellite className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-300 opacity-40" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-6 sm:mb-8"
        >
          <div className="relative">
            {/* 404 Text with Glow Effect */}
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-none">
              404
            </h1>
            
            {/* Glowing effect behind 404 */}
            <div className="absolute inset-0 text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-cyan-400 opacity-20 blur-2xl leading-none">
              404
            </div>
            
            {/* Floating Rocket across the 404 */}
            <motion.div
              className="absolute top-1/2 left-0"
              animate={{
                x: ["0%", "200%", "400%"],
                y: [0, -20, -10],
                rotate: [0, 15, -5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Rocket className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-orange-400" />
            </motion.div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
            Houston, We Have a Problem!
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-4 sm:mb-6 leading-relaxed px-2 max-w-2xl mx-auto">
            The page you&apos;re looking for has drifted into deep space. 
            Our mission control is working to bring it back to Earth.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-cyan-300 mb-6 sm:mb-8 px-2">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base lg:text-lg font-semibold">Lost in the Digital Galaxy</span>
            <Star className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          {/* Return Home Button */}
          <Link
            href="/"
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Home className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm sm:text-base">Return to Mission Control</span>
            </div>
            
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-300"></div>
          </Link>

          {/* Go Back Button */}
          <button
            onClick={() => window.history.back()}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-400 hover:border-purple-300 text-purple-300 hover:text-purple-200 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-purple-400/10"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm sm:text-base">Navigate Back</span>
            </div>
          </button>
        </motion.div>

        {/* GAAC Branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 sm:mt-12"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            <span className="text-slate-300 font-medium text-sm sm:text-base">GITAM Aero Astro Club</span>
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
          </div>
        </motion.div>

        {/* Fun Space Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 max-w-2xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 backdrop-blur-sm">
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="text-cyan-300 font-semibold">Fun Fact:</span> Did you know that space is completely silent? 
              Just like this missing page - there&apos;s nothing here to make a sound! 🚀
            </p>
          </div>
        </motion.div>
      </div>

      {/* Additional Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
    </div>
  );
}
