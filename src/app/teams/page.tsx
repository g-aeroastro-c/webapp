export default function TeamsPage() {
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-[#0B0C0D] via-[#151719] to-[#1C1E21] relative overflow-hidden" 
      style={{
        background: 'linear-gradient(to bottom right, #0B0C0D, #151719, #1C1E21)',
        minHeight: '100vh'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09C0F9]/5 to-transparent"></div>
      
      {/* Main Content */}
      <main className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 sm:mb-20">
            <p 
              className="text-center uppercase mb-6 font-dm-sans"
              style={{
                color: '#898A8C',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0.98px'
              }}
            >
              GAAC TEAMS
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight">
              Our Specialized
              <br />
              <span className="text-[#09C0F9]">Teams</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our three core teams, each dedicated to pushing the boundaries of innovation 
              in their respective domains through collaborative projects and cutting-edge research.
            </p>
          </div>

          {/* Teams Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Robotics Team */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-[#09C0F9]/30 p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#09C0F9]/10">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#09C0F9] transition-colors">
                Robotics Team
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Building autonomous systems, robotic arms, and intelligent machines that solve real-world problems through innovative engineering and programming.
              </p>
              <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#09C0F9] rounded-full mr-3"></div>
                  Autonomous Navigation Systems
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#09C0F9] rounded-full mr-3"></div>
                  Machine Learning Integration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#09C0F9] rounded-full mr-3"></div>
                  Hardware Design & Prototyping
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#09C0F9] rounded-full mr-3"></div>
                  Sensor Integration & Control
                </li>
              </ul>
              <a
                href="/teams/robotics"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#0284C7] text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-[#09C0F9]/25"
              >
                Explore Team
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Programming Team */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-[#09C0F9]/30 p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#09C0F9]/10">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#09C0F9] transition-colors">
                Programming Team
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Mastering modern programming languages and frameworks to create innovative software solutions and cutting-edge applications.
              </p>
              <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#09C0F9] rounded-full mr-3"></div>
                  Full-Stack Web Development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#09C0F9] rounded-full mr-3"></div>
                  AI/ML Applications & Research
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#09C0F9] rounded-full mr-3"></div>
                  Open Source Contributions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#09C0F9] rounded-full mr-3"></div>
                  Mobile App Development
                </li>
              </ul>
              <a
                href="/teams/programming"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#0284C7] text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-[#09C0F9]/25"
              >
                Explore Team
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Astronomy Team */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-[#09C0F9]/30 p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#09C0F9]/10">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🔭</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#09C0F9] transition-colors">
                Astronomy Team
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Exploring the cosmos through observation, data analysis, and space technology research to unlock the mysteries of the universe.
              </p>
              <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#09C0F9] rounded-full mr-3"></div>
                  Telescope Operations & Imaging
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#09C0F9] rounded-full mr-3"></div>
                  Astronomical Data Analysis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#09C0F9] rounded-full mr-3"></div>
                  Space Research Projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#09C0F9] rounded-full mr-3"></div>
                  Astrophotography & Observation
                </li>
              </ul>
              <a
                href="/teams/astronomy"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#0284C7] text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-[#09C0F9]/25"
              >
                Explore Team
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Team Stats */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-8 mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Team Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#09C0F9] mb-2">150+</div>
                <div className="text-gray-300 text-sm">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#09C0F9] mb-2">30+</div>
                <div className="text-gray-300 text-sm">Ongoing Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#09C0F9] mb-2">15+</div>
                <div className="text-gray-300 text-sm">Awards Won</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#09C0F9] mb-2">50+</div>
                <div className="text-gray-300 text-sm">Workshops Conducted</div>
              </div>
            </div>
          </div>

          {/* Join Teams CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join a Team?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose your passion and become part of our innovative community. Each team offers unique opportunities for growth and learning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#0284C7] text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-[#09C0F9]/25"
              >
                Apply Now
              </a>
              <a
                href="#executive-body"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/#executive-body";
                }}
                className="px-8 py-4 border-2 border-[#09C0F9]/50 hover:border-[#09C0F9] text-[#09C0F9] hover:text-white hover:bg-[#09C0F9]/10 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 font-medium"
              >
                Meet Leadership
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Background pattern overlay for texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, #09C0F9 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </div>
  );
}