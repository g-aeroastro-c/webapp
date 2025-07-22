"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Autonomous Drone Navigation",
    description: "Advanced AI-powered drone system for autonomous navigation and obstacle avoidance using computer vision and machine learning algorithms.",
    image: "/projects/drone.jpg",
    category: "Robotics",
    technologies: ["Python", "OpenCV", "TensorFlow", "ROS"],
    status: "Completed",
    github: "https://github.com/gaac/drone-nav",
    demo: "https://demo.gaac.com/drone"
  },
  {
    id: 2,
    title: "Mars Rover Simulation",
    description: "High-fidelity Mars rover simulation environment for testing navigation algorithms and scientific instrument operations.",
    image: "/projects/rover.jpg",
    category: "Space Tech",
    technologies: ["Unity", "C#", "Physics Engine", "ML"],
    status: "In Progress",
    github: "https://github.com/gaac/mars-rover",
    demo: null
  },
  {
    id: 3,
    title: "Satellite Tracking System",
    description: "Real-time satellite tracking and prediction system with orbital mechanics calculations and visualization dashboard.",
    image: "/projects/satellite.jpg",
    category: "Astronomy",
    technologies: ["JavaScript", "Three.js", "Node.js", "WebGL"],
    status: "Completed",
    github: "https://github.com/gaac/sat-tracker",
    demo: "https://satellites.gaac.com"
  },
  {
    id: 4,
    title: "Rocket Launch Predictor",
    description: "Machine learning model to predict optimal launch windows based on weather conditions and orbital mechanics.",
    image: "/projects/rocket.jpg",
    category: "Space Tech",
    technologies: ["Python", "Scikit-learn", "Pandas", "API"],
    status: "In Progress",
    github: "https://github.com/gaac/launch-predictor",
    demo: null
  },
  {
    id: 5,
    title: "Robotic Arm Controller",
    description: "Precision robotic arm control system with inverse kinematics and path planning for laboratory automation.",
    image: "/projects/robotic-arm.jpg",
    category: "Robotics",
    technologies: ["Arduino", "C++", "Servo Control", "Sensors"],
    status: "Completed",
    github: "https://github.com/gaac/robotic-arm",
    demo: "https://demo.gaac.com/arm"
  },
  {
    id: 6,
    title: "Exoplanet Detection AI",
    description: "Deep learning model for detecting exoplanets in telescope data using transit photometry analysis.",
    image: "/projects/exoplanet.jpg",
    category: "Astronomy",
    technologies: ["Python", "PyTorch", "Astronomy APIs", "Data Analysis"],
    status: "Research Phase",
    github: "https://github.com/gaac/exoplanet-ai",
    demo: null
  }
];

const categories = ["All", "Robotics", "Space Tech", "Astronomy"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  React.useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0C0D] via-[#151719] to-[#1C1E21] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09C0F9]/5 to-transparent"></div>
      
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, #09C0F9 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <main className="relative z-10 pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-[#898A8C] uppercase mb-4 font-dm-sans text-sm tracking-wider">
              Our Work
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Innovative Projects
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our cutting-edge projects in robotics, space technology, and astronomy. 
              Each project represents our commitment to pushing the boundaries of innovation.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] text-black shadow-lg shadow-[#09C0F9]/25"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-gray-700/50 hover:border-[#09C0F9]/30"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-[#09C0F9]/30 overflow-hidden transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#09C0F9]/10"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-[#09C0F9]/20 to-[#0EA5E9]/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#09C0F9]/30 via-[#0EA5E9]/20 to-[#0284C7]/30 flex items-center justify-center">
                    <div className="text-6xl sm:text-7xl opacity-20">
                      {project.category === "Robotics" && "🤖"}
                      {project.category === "Space Tech" && "🚀"}
                      {project.category === "Astronomy" && "🔭"}
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Completed" 
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : project.status === "In Progress"
                        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#09C0F9]/20 text-[#09C0F9] border border-[#09C0F9]/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#09C0F9] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-md border border-gray-700/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 border border-gray-700/50 hover:border-[#09C0F9]/30"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#0284C7] text-black rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 font-medium shadow-lg hover:shadow-xl hover:shadow-[#09C0F9]/25"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16 sm:mt-20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Want to Collaborate?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join us in building the future of technology. Whether you're a beginner or expert, 
              there's a place for you in our innovative projects.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#0284C7] text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-[#09C0F9]/25"
              >
                Get In Touch
              </a>
              <a
                href="/signup"
                className="px-8 py-4 border-2 border-[#09C0F9]/50 hover:border-[#09C0F9] text-[#09C0F9] hover:text-white hover:bg-[#09C0F9]/10 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 font-medium"
              >
                Join Our Club
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}