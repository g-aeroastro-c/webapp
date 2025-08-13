import React from "react";
import Link from "next/link";

const AstronomyTeamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
      <div className="container mx-auto py-20 px-4 text-center relative z-30">
        <h1 className="text-5xl font-bold mt-8 mb-8 relative z-30">
          Astronomy Team
        </h1>
        <p className="mb-8 text-xl relative z-30">
          Welcome to the Astronomy Team page. Our team is dedicated to exploring
          the wonders of the universe and sharing our knowledge with others.
          Join us in our celestial journey!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
          <div className="bg-white text-black p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 relative z-20">
            <h2 className="text-2xl font-bold mb-4">Stargazing Nights</h2>
            <p className="mb-4">
              Join us for our monthly stargazing sessions where we explore the
              night sky together.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 relative z-20">
            <h2 className="text-2xl font-bold mb-4">Lectures & Workshops</h2>
            <p className="mb-4">
              We organize lectures and workshops delivered by experts in
              astronomy and astrophysics.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 relative z-20">
            <h2 className="text-2xl font-bold mb-4">Research Projects</h2>
            <p className="mb-4">
              Get involved in our exciting research projects exploring various
              phenomena in space.
            </p>
          </div>
        </div>
        <div className="mt-10 relative z-30">
          <Link href="/teams" className="text-lg underline hover:text-gray-200">
            Back to Teams
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AstronomyTeamPage;
