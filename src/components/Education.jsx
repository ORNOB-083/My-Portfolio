"use client";

import "animate.css";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaExternalLinkAlt, FaSearch } from "react-icons/fa";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-[#f0e6f6] dark:bg-[#1a1525] text-[#6b21a8] dark:text-[#c4b5fd] transition-colors duration-300"
    >
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
            Education & <span className="bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] bg-clip-text text-transparent">Career</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaGraduationCap className="w-8 h-8 text-[#c026d3] dark:text-[#e879f9]" />
              <h3 className="text-2xl font-semibold text-[#6b21a8] dark:text-[#c4b5fd] transition-colors duration-300">Education</h3>
            </div>

            {/* University (UITS) */}
            <div className="bg-white/70 dark:bg-[#1a1525]/70 backdrop-blur-md border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-xl p-6 hover:border-[#c026d3] dark:hover:border-[#e879f9] hover:shadow-xl hover:shadow-[#c084fc]/20 dark:hover:shadow-[#7c3aed]/20 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-medium text-[#6b21a8] dark:text-[#c4b5fd] transition-colors duration-300">University of Information Technology & Sciences (UITS)</h4>
                <span className="text-sm bg-[#c026d3] text-white dark:bg-[#e879f9] dark:text-[#1a1525] px-3 py-1 rounded-full whitespace-nowrap">2024 - Present</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-[#c4b5fd]/70 text-sm mb-3">
                <FaMapMarkerAlt className="w-4 h-4 text-[#c026d3] dark:text-[#e879f9]" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <p className="text-gray-600 dark:text-[#c4b5fd]/80 text-sm leading-relaxed">
                Currently pursuing my degree with a focus on Computer Science & Engineering.
              </p>
            </div>

            {/* College (DMRC) */}
            <div className="bg-white/70 dark:bg-[#1a1525]/70 backdrop-blur-md border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-xl p-6 hover:border-[#c026d3] dark:hover:border-[#e879f9] hover:shadow-xl hover:shadow-[#c084fc]/20 dark:hover:shadow-[#7c3aed]/20 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-medium text-[#6b21a8] dark:text-[#c4b5fd] transition-colors duration-300">Dr. Mahbubur Rahman Mollah College (DMRC)</h4>
                <span className="text-sm bg-[#c026d3] text-white dark:bg-[#e879f9] dark:text-[#1a1525] px-3 py-1 rounded-full whitespace-nowrap">2020 - 2022</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-[#c4b5fd]/70 text-sm mb-3">
                <FaMapMarkerAlt className="w-4 h-4 text-[#c026d3] dark:text-[#e879f9]" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <p className="text-gray-600 dark:text-[#c4b5fd]/80 text-sm leading-relaxed">
                Completed Higher Secondary Certificate (HSC) with a strong foundation in Science.
              </p>
            </div>

            {/* School (Ideal School) */}
            <div className="bg-white/70 dark:bg-[#1a1525]/70 backdrop-blur-md border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-xl p-6 hover:border-[#c026d3] dark:hover:border-[#e879f9] hover:shadow-xl hover:shadow-[#c084fc]/20 dark:hover:shadow-[#7c3aed]/20 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-medium text-[#6b21a8] dark:text-[#c4b5fd] transition-colors duration-300">Ideal School & College</h4>
                <span className="text-sm bg-[#c026d3] text-white dark:bg-[#e879f9] dark:text-[#1a1525] px-3 py-1 rounded-full whitespace-nowrap">2016 - 2020</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-[#c4b5fd]/70 text-sm mb-3">
                <FaMapMarkerAlt className="w-4 h-4 text-[#c026d3] dark:text-[#e879f9]" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <p className="text-gray-600 dark:text-[#c4b5fd]/80 text-sm leading-relaxed">
                Completed Junior School Certificate (JSC) and Secondary School Certificate (SSC) with excellent academic standing.
              </p>
            </div>
          </motion.div>

          {/* Career / Open to Work Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaSearch className="w-8 h-8 text-[#c026d3] dark:text-[#e879f9]" />
              <h3 className="text-2xl font-semibold text-[#6b21a8] dark:text-[#c4b5fd] transition-colors duration-300">Open to Work</h3>
            </div>

            <div className="bg-white/70 dark:bg-[#1a1525]/70 backdrop-blur-md border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-xl p-6 hover:border-[#c026d3] dark:hover:border-[#e879f9] hover:shadow-xl hover:shadow-[#c084fc]/20 dark:hover:shadow-[#7c3aed]/20 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-medium text-[#6b21a8] dark:text-[#c4b5fd] transition-colors duration-300">🚀 Seeking New Opportunities</h4>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-[#c4b5fd]/70 text-sm mb-3">
                <FaMapMarkerAlt className="w-4 h-4 text-[#c026d3] dark:text-[#e879f9]" />
                <span>Dhaka, Bangladesh (Remote / Hybrid)</span>
              </div>
              <p className="text-gray-600 dark:text-[#c4b5fd]/80 text-sm leading-relaxed mb-4">
                I am a passionate Junior Web Developer currently seeking entry-level roles in <span className="text-[#6b21a8] dark:text-[#c4b5fd] font-medium">Frontend</span> or <span className="text-[#6b21a8] dark:text-[#c4b5fd] font-medium">Full Stack</span> development.
              </p>
              <p className="text-gray-600 dark:text-[#c4b5fd]/80 text-sm leading-relaxed mb-4">
                I bring strong skills in <span className="text-[#6b21a8] dark:text-[#c4b5fd] font-medium">React.js</span>, <span className="text-[#6b21a8] dark:text-[#c4b5fd] font-medium">Next.js</span>, and <span className="text-[#6b21a8] dark:text-[#c4b5fd] font-medium">Tailwind CSS</span>, along with a keen eye for UI/UX and a passion for clean code.
              </p>

              {/* 🎯 UPDATED BUTTONS WITH FRAMER MOTION EFFECTS */}
              <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-300/50 dark:border-[#3d2d5c]/50">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0px 0px 0px 0px rgba(192, 132, 252, 0.4)",
                      "0px 0px 25px 10px rgba(192, 132, 252, 0.25)",
                      "0px 0px 0px 0px rgba(192, 132, 252, 0.4)"
                    ]
                  }}
                  transition={{ boxShadow: { duration: 2.5, repeat: Infinity } }}
                  className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] hover:from-[#c084fc] hover:to-[#7c3aed] dark:hover:from-[#c084fc] dark:hover:to-[#a78bfa] text-white font-medium shadow-lg transition-all duration-300 text-sm"
                >
                  <FaBriefcase className="w-4 h-4" /> Hire Me
                </motion.a>

                <motion.a
                  href="/Shalehin_Ahmed_Ornob_Full_Stack_Web_Developer.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 px-4 py-2 rounded-full border border-[#c026d3]/50 dark:border-[#e879f9]/50 text-[#6b21a8] dark:text-[#c4b5fd] hover:bg-[#c026d3] dark:hover:bg-[#e879f9] hover:text-white dark:hover:text-[#1a1525] transition-all duration-300 text-sm"
                >
                  <FaExternalLinkAlt className="w-4 h-4" /> Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}