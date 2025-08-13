import React from "react";
import Link from "next/link";

const AstronomyTeamPage = () => {
  return (
    // Base container, z-0 ensures background starts at lowest stacking level
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
      {/* Main content wrapper, high z-index to layer over navbars or overlays */}
      <div className="container mx-auto py-20 px-4 text-center relative z-30">
        {/* Title at topmost level to ensure visibility over all elements */}
        <h1 className="text-5xl font-bold mt-8 mb-8 relative z-40">
          Astronomy Team
        </h1>
        {/* Intro text, same level as title for consistent layering */}
        <p className="mb-8 text-xl relative z-40">
          Welcome to the Astronomy Team page. Our team is dedicated to exploring
          the wonders of the universe and sharing our knowledge with others.
          Join us in our celestial journey!
        </p>
        {/* Grid container with z-30 ensures cards stay above background but below title */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-30">
          {/* Child cards inherit z-30 from parent — no extra z-index needed */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Stargazing Nights</h2>
            <p className="mb-4">
              Join us for our monthly stargazing sessions where we explore the
              night sky together.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Lectures & Workshops</h2>
            <p className="mb-4">
              We organize lectures and workshops delivered by experts in
              astronomy and astrophysics.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Research Projects</h2>
            <p className="mb-4">
              Get involved in our exciting research projects exploring various
              phenomena in space.
            </p>
          </div>
        </div>
        {/* Navigation link, z-40 to keep it above everything else for clickability */}
        <div className="mt-10 relative z-40">
          <Link href="/teams" className="text-lg underline hover:text-gray-200">
            Back to Teams
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AstronomyTeamPage;
