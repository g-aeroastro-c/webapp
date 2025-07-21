"use client";

import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({ size = "md", className = "" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className="w-full h-full border-2 border-[#09C0F9]/20 border-t-[#09C0F9] rounded-full"></div>
      </div>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0C0D] via-[#151719] to-[#1C1E21] flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <img
            src="/gaacLogo.png"
            alt="GAAC Logo"
            className="h-16 w-16 mx-auto animate-pulse"
          />
          <div className="absolute inset-0 rounded-full bg-[#09C0F9]/20 scale-75 animate-ping"></div>
        </div>
        <LoadingSpinner size="lg" />
        <p className="text-gray-300 mt-4 text-sm">Loading GAAC...</p>
      </div>
    </div>
  );
}