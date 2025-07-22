"use client";

import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Autonomous Robotics in Space Exploration",
    excerpt: "Exploring how autonomous robots are revolutionizing space missions and what this means for the future of interplanetary exploration.",
    author: "Dr. Sarah Chen",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Space Tech",
    image: "/blogs/space-robotics.jpg",
    tags: ["Robotics", "Space", "AI", "Automation"]
  },
  {
    id: 2,
    title: "Building Your First Drone: A Complete Guide",
    excerpt: "Step-by-step tutorial on building a custom drone from scratch, including component selection, assembly, and programming.",
    author: "Alex Rodriguez",
    date: "2025-01-12",
    readTime: "12 min read",
    category: "Robotics",
    image: "/blogs/drone-build.jpg",
    tags: ["Drones", "DIY", "Electronics", "Programming"]
  },
  {
    id: 3,
    title: "Discovering Exoplanets: Modern Detection Methods",
    excerpt: "An in-depth look at the latest techniques astronomers use to discover planets beyond our solar system.",
    author: "Prof. Michael Johnson",
    date: "2025-01-10",
    readTime: "10 min read",
    category: "Astronomy",
    image: "/blogs/exoplanets.jpg",
    tags: ["Astronomy", "Exoplanets", "Research", "Discovery"]
  },
  {
    id: 4,
    title: "Machine Learning in Astronomical Data Analysis",
    excerpt: "How artificial intelligence is transforming the way we process and analyze vast amounts of astronomical data.",
    author: "Dr. Emily Watson",
    date: "2025-01-08",
    readTime: "15 min read",
    category: "AI & Astronomy",
    image: "/blogs/ml-astronomy.jpg",
    tags: ["Machine Learning", "Data Science", "Astronomy", "AI"]
  },
  {
    id: 5,
    title: "The Physics Behind Rocket Propulsion",
    excerpt: "Understanding the fundamental principles that make rocket flight possible and the innovations driving modern propulsion.",
    author: "James Parker",
    date: "2025-01-05",
    readTime: "11 min read",
    category: "Space Tech",
    image: "/blogs/rocket-physics.jpg",
    tags: ["Physics", "Rockets", "Propulsion", "Engineering"]
  },
  {
    id: 6,
    title: "Programming Robotic Arms: Inverse Kinematics Explained",
    excerpt: "A technical deep-dive into the mathematics and programming concepts behind precise robotic arm control.",
    author: "Lisa Chang",
    date: "2025-01-03",
    readTime: "14 min read",
    category: "Robotics",
    image: "/blogs/robotic-arms.jpg",
    tags: ["Robotics", "Programming", "Mathematics", "Control Systems"]
  }
];

const categories = ["All", "Space Tech", "Robotics", "Astronomy", "AI & Astronomy"];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [filteredPosts, setFilteredPosts] = React.useState(blogPosts);

  React.useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

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
              Knowledge Hub
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Latest Insights
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Dive deep into the world of technology, space exploration, and robotics with our 
              expert articles and research insights.
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

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12 sm:mb-16"
            >
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-gray-800/50 hover:border-[#09C0F9]/30 overflow-hidden transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#09C0F9]/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Featured Image */}
                  <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-[#09C0F9]/20 to-[#0EA5E9]/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#09C0F9]/30 via-[#0EA5E9]/20 to-[#0284C7]/30 flex items-center justify-center">
                      <div className="text-8xl sm:text-9xl opacity-20">
                        {filteredPosts[0].category === "Robotics" && "🤖"}
                        {filteredPosts[0].category === "Space Tech" && "🚀"}
                        {filteredPosts[0].category === "Astronomy" && "🔭"}
                        {filteredPosts[0].category === "AI & Astronomy" && "🧠"}
                      </div>
                    </div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] text-black text-sm font-bold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Featured Content */}
                  <div className="p-8 sm:p-10 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-[#09C0F9]/20 text-[#09C0F9] text-sm font-semibold rounded-full border border-[#09C0F9]/30">
                        {filteredPosts[0].category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[#09C0F9] transition-colors duration-300 leading-tight">
                      {filteredPosts[0].title}
                    </h2>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {filteredPosts[0].excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#09C0F9] to-[#0EA5E9] rounded-full flex items-center justify-center">
                          <span className="text-black font-bold text-sm">
                            {filteredPosts[0].author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-white font-medium">{filteredPosts[0].author}</p>
                          <p className="text-gray-400 text-sm">{formatDate(filteredPosts[0].date)}</p>
                        </div>
                      </div>
                      <span className="text-gray-400 text-sm">{filteredPosts[0].readTime}</span>
                    </div>

                    <button className="self-start px-6 py-3 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#0284C7] text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-[#09C0F9]/25">
                      Read Full Article
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-[#09C0F9]/30 overflow-hidden transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#09C0F9]/10"
              >
                {/* Post Image */}
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-[#09C0F9]/20 to-[#0EA5E9]/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#09C0F9]/30 via-[#0EA5E9]/20 to-[#0284C7]/30 flex items-center justify-center">
                    <div className="text-6xl sm:text-7xl opacity-20">
                      {post.category === "Robotics" && "🤖"}
                      {post.category === "Space Tech" && "🚀"}
                      {post.category === "Astronomy" && "🔭"}
                      {post.category === "AI & Astronomy" && "🧠"}
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#09C0F9]/20 text-[#09C0F9] text-xs font-semibold rounded-full border border-[#09C0F9]/30">
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/30 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#09C0F9] transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-md border border-gray-700/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author & Date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#09C0F9] to-[#0EA5E9] rounded-full flex items-center justify-center">
                        <span className="text-black font-bold text-xs">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{post.author}</p>
                        <p className="text-gray-400 text-xs">{formatDate(post.date)}</p>
                      </div>
                    </div>
                    
                    <button className="p-2 rounded-lg bg-white/10 hover:bg-[#09C0F9]/20 text-gray-400 hover:text-[#09C0F9] transition-all duration-300 hover:scale-110 active:scale-95">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 sm:mt-20 text-center"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-gray-800/50 p-8 sm:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights in technology, 
                space exploration, and robotics.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09C0F9]/50 focus:border-[#09C0F9]/50 backdrop-blur-sm transition-all duration-300"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-[#09C0F9] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#0284C7] text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-[#09C0F9]/25 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}