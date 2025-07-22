"use client";

import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  animationOffset: number;
}

export function EnhancedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [animationTime, setAnimationTime] = useState(0);
  const [scanLinePosition, setScanLinePosition] = useState(20);

  useEffect(() => {
    setIsClient(true);
    
    // Generate particles only on client
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const colors = ['#09C0F9', '#0EA5E9', '#0284C7', '#0369A1'];
      
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          opacity: Math.random() * 0.6 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          animationOffset: Math.random() * Math.PI * 2
        });
      }
      setParticles(newParticles);
    };

    generateParticles();

    // Animation loop using requestAnimationFrame for smoother performance
    let animationFrameId: number;
    
    const animate = () => {
      const currentTime = performance.now() * 0.001;
      setAnimationTime(currentTime);
      setScanLinePosition(20 + Math.sin(currentTime) * 30);
      
      setParticles(prev => prev.map(particle => {
        const newX = particle.x + particle.speedX;
        const newY = particle.y + particle.speedY;
        
        return {
          ...particle,
          x: newX > window.innerWidth ? 0 : newX < 0 ? window.innerWidth : newX,
          y: newY > window.innerHeight ? 0 : newY < 0 ? window.innerHeight : newY
        };
      }));
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-br from-[#0B0C0D] via-[#151719] to-[#1C1E21]" 
           style={{
             background: `
               radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(9, 192, 249, 0.1) 0%, transparent 50%),
               linear-gradient(to bottom right, #0B0C0D, #151719, #1C1E21)
             `
           }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20"
           style={{
             backgroundImage: `
               linear-gradient(rgba(9, 192, 249, 0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(9, 192, 249, 0.1) 1px, transparent 1px)
             `,
             backgroundSize: '50px 50px'
           }} />
      
      {/* Floating particles */}
      {isClient && particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            transform: `scale(${1 + Math.sin(animationTime + particle.animationOffset) * 0.2})`
          }}
        />
      ))}

      {/* Orb effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#09C0F9]/20 via-[#09C0F9]/5 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-[#0EA5E9]/15 via-[#0EA5E9]/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-2/3 left-1/6 w-64 h-64 bg-gradient-radial from-[#0284C7]/10 via-[#0284C7]/2 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />

      {/* Scanning line effect */}
      {isClient && (
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#09C0F9] to-transparent animate-slide-in-up opacity-50" 
             style={{ 
               top: `${scanLinePosition}%`,
               animationDuration: '3s',
               animationIterationCount: 'infinite'
             }} />
      )}
    </div>
  );
}
