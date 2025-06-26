export default function Home() {
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
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto">
          <div id="about-us" className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <div className="mb-8">
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
              GITAM AERO ASTRO CLUB
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight">
              Kickstart your Career
              <br />
              <span className="text-white">Here</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4 sm:px-0">
              Welcome to the GITAM Aero Astro Club! We are a passionate community 
              of curious individuals dedicated to exploring, learning, and building 
              exciting projects in the fields of Robotics, Programming, and Astronomy.
            </p>
          </div>

          {/* Email Signup */}
          <div className="w-full max-w-lg mx-auto mb-12 px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                aria-label="Email address"
                className="flex-1 px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-white/10 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09C0F9]/50 focus:border-[#09C0F9]/50 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base min-h-[48px]"
              />
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#0284C7] text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-[#09C0F9]/25 text-sm sm:text-base whitespace-nowrap">
                Join Us
              </button>
            </div>
          </div>

          <p className="text-gray-400 text-xs sm:text-sm px-4 sm:px-0">
            We care about your data in our{" "}
            <a href="#" className="text-[#09C0F9] hover:text-[#0EA5E9] hover:underline transition-colors duration-200">
              privacy policy
            </a>
            .
          </p>
        </div>

        {/* 3D Sphere/Orb - Enhanced for mobile */}
        <div className="relative mt-12 sm:mt-16 lg:mt-20">
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] mx-auto">
            {/* Animated background sphere with gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#09C0F9]/30 via-[#0EA5E9]/20 to-[#0284C7]/30 blur-xl animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#09C0F9]/40 via-[#0EA5E9]/30 to-[#0284C7]/40 blur-lg animate-pulse delay-100"></div>
            <div className="absolute inset-8 rounded-full bg-gradient-to-bl from-[#09C0F9]/50 via-[#0EA5E9]/40 to-[#0284C7]/50 blur-md animate-pulse delay-200"></div>
            
            {/* Central sphere with swirl effect */}
            <div className="absolute inset-12 rounded-full bg-gradient-to-r from-[#09C0F9]/60 via-[#0EA5E9]/80 to-[#0284C7]/60 backdrop-blur-sm border border-[#09C0F9]/30 shadow-2xl shadow-[#09C0F9]/20">
              {/* Inner swirl pattern - simplified version */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-bl from-transparent via-white/5 to-transparent animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-transparent via-white/8 to-transparent animate-spin" style={{ animationDuration: '25s' }}></div>
            </div>

            {/* Floating particles effect - responsive */}
            <div className="absolute -top-8 sm:-top-10 -left-8 sm:-left-10 w-3 h-3 sm:w-4 sm:h-4 bg-[#09C0F9]/50 rounded-full animate-bounce delay-100"></div>
            <div className="absolute -top-4 sm:-top-6 right-6 sm:right-8 w-2 h-2 bg-[#0EA5E9]/70 rounded-full animate-bounce delay-300"></div>
            <div className="absolute bottom-3 sm:bottom-4 -left-6 sm:-left-8 w-2 sm:w-3 h-2 sm:h-3 bg-[#0284C7]/60 rounded-full animate-bounce delay-500"></div>
            <div className="absolute -bottom-6 sm:-bottom-8 right-10 sm:right-12 w-2 h-2 bg-[#09C0F9]/80 rounded-full animate-bounce delay-700"></div>
          </div>
        </div>
        </div>
      </main>

      {/* Contact Section */}
      <section id="contact-us" className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">
            Get in touch and become part of our amazing community!
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 max-w-md sm:max-w-none mx-auto">
            <a
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#0284C7] text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-[#09C0F9]/25 text-sm sm:text-base"
            >
              Contact Us
            </a>
            <a
              href="/projects"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#09C0F9]/50 hover:border-[#09C0F9] text-[#09C0F9] hover:text-white hover:bg-[#09C0F9]/10 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base font-medium"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

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
