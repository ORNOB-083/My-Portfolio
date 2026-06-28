"use client";

import "animate.css";
import { motion } from "framer-motion";
import { FaUser, FaLightbulb, FaCode, FaRocket } from "react-icons/fa";

export default function About() {
  const stats = [
    { value: "15+", label: "Projects", icon: <FaCode className="w-5 h-5" /> },
    { value: "400+", label: "Commits", icon: <FaRocket className="w-5 h-5" /> },
    { value: "12+", label: "Technologies", icon: <FaLightbulb className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-24 bg-[#f0e6f6] dark:bg-[#1a1525] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#6b21a8] dark:text-[#c4b5fd] transition-colors duration-300">
            About <span className="bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* Card 1: Who I Am */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 dark:bg-[#1a1525]/70 backdrop-blur-md border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-2xl p-8 lg:p-10 flex flex-col justify-between hover:shadow-xl hover:shadow-[#c084fc]/20 dark:hover:shadow-[#7c3aed]/20 transition-all duration-300 h-full"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-[#c026d3]/20 dark:bg-[#e879f9]/20 backdrop-blur-md">
                  <FaUser className="w-6 h-6 text-[#c026d3] dark:text-[#e879f9] animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-[#6b21a8] dark:text-[#c4b5fd] transition-colors duration-300">
                  Who I Am
                </h3>
              </div>

              <div className="space-y-4 text-gray-600 dark:text-[#c4b5fd]/90 text-base leading-relaxed">
                <p>
                  I&apos;m <span className="font-semibold text-[#6b21a8] dark:text-white">Shalehin Ahmed Ornob</span>, a Junior Web Developer from Bangladesh. My programming journey started from pure curiosity. I wanted to build my own custom projects and see my ideas come to life on a screen. That spark turned into a passion, and I&apos;ve been coding ever since.
                </p>
                <p>
                  I genuinely enjoy solving problems and building clean, responsive interfaces. Whether it&apos;s a landing page or a full web app, I love turning complex requirements into functional, user-friendly experiences using <span className="text-[#6b21a8] dark:text-[#c4b5fd] font-medium">React.js</span>, <span className="text-[#6b21a8] dark:text-[#c4b5fd] font-medium">Next.js</span>, and <span className="text-[#6b21a8] dark:text-[#c4b5fd] font-medium">Tailwind CSS</span>.
                </p>
                <p>
                  Outside of coding, I enjoy watching <span className="text-[#6b21a8] dark:text-[#c4b5fd] font-medium">movies</span>, listening to <span className="text-[#6b21a8] dark:text-[#c4b5fd] font-medium">music</span>, and playing mobile games like <span className="text-[#6b21a8] dark:text-[#c4b5fd] font-medium">Clash of Clans</span>, <span className="text-[#6b21a8] dark:text-[#c4b5fd] font-medium">Hay Day</span>, and <span className="text-[#6b21a8] dark:text-[#c4b5fd] font-medium">PUBG</span>. I believe creativity and attention to detail come from these hobbies.
                </p>
              </div>
            </div>

            {/* Stats Row - Dashboard Style */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-300/50 dark:border-[#3d2d5c]/50">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-3 bg-[#f0e6f6]/50 dark:bg-[#1a1525]/50 rounded-xl backdrop-blur-sm border border-gray-200/30 dark:border-[#3d2d5c]/30 hover:scale-105 transition-transform duration-300">
                  <div className="text-[#c026d3] dark:text-[#e879f9] mb-1">{stat.icon}</div>
                  <div className="text-2xl font-extrabold text-[#c026d3] dark:text-[#e879f9]">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-[#c4b5fd]/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: What Drives Me */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 dark:bg-[#1a1525]/70 backdrop-blur-md border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-2xl p-8 lg:p-10 flex flex-col justify-center hover:shadow-xl hover:shadow-[#c084fc]/20 dark:hover:shadow-[#7c3aed]/20 transition-all duration-300 h-full"
          >
            <h3 className="text-2xl font-bold text-[#6b21a8] dark:text-[#c4b5fd] transition-colors duration-300 mb-4 flex items-center gap-3">
              <div className="p-3 rounded-full bg-[#c026d3]/20 dark:bg-[#e879f9]/20 backdrop-blur-md">
                <FaLightbulb className="w-5 h-5 text-[#c026d3] dark:text-[#e879f9]" />
              </div>
              What Drives Me
            </h3>

            <p className="text-gray-600 dark:text-[#c4b5fd]/90 text-base leading-relaxed mb-8">
              I&apos;m a firm believer in <span className="text-[#6b21a8] dark:text-[#c4b5fd] font-medium">clean code</span>, <span className="text-[#6b21a8] dark:text-[#c4b5fd] font-medium">continuous learning</span>, and building digital experiences that truly matter. I bring passion, patience, and a deep attention to detail to every project I work on.
            </p>

            <div className="bg-[#f0e6f6]/80 dark:bg-[#1a1525]/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-[#c026d3] dark:border-[#e879f9] shadow-inner">
              <p className="text-gray-600 dark:text-[#c4b5fd] italic text-lg">
                &quot;Every great developer you know got there by solving problems they didn&apos;t know how to solve at first.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}