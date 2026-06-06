"use client";

import "animate.css";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaExternalLinkAlt, FaSearch } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#3A3B42] text-[#C9C9C9]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white">
            Education & <span className="bg-gradient-to-r from-[#746465] to-[#C9C9C9] bg-clip-text text-transparent">Career</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#746465] to-[#C9C9C9] mx-auto mt-4 rounded-full"></div>
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
              <FaGraduationCap className="w-8 h-8 text-[#746465]" />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>

            {/* University (UITS) */}
            <div className="bg-[#424654]/30 border border-[#424654] rounded-xl p-6 hover:border-[#746465] transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-medium text-white">University of Information Technology & Sciences (UITS)</h4>
                <span className="text-sm bg-[#746465] text-white px-3 py-1 w-38 rounded-full">2024 - Present</span>
              </div>
              <div className="flex items-center gap-2 text-[#D1D5DB] text-sm mb-3">
                <FaMapMarkerAlt className="w-4 h-4 text-[#746465]" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <p className="text-[#D1D5DB] text-sm leading-relaxed">
                Currently pursuing my degree with a focus on Computer Science & Engineering.
              </p>
            </div>

            {/* College (DMRC) */}
            <div className="bg-[#424654]/30 border border-[#424654] rounded-xl p-6 hover:border-[#746465] transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-medium text-white">Dr. Mahbubur Rahman Mollah College (DMRC)</h4>
                <span className="text-sm bg-[#746465] text-white px-3 py-1 rounded-full">2020 - 2022</span>
              </div>
              <div className="flex items-center gap-2 text-[#D1D5DB] text-sm mb-3">
                <FaMapMarkerAlt className="w-4 h-4 text-[#746465]" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <p className="text-[#D1D5DB] text-sm leading-relaxed">
                Completed Higher Secondary Certificate (HSC) with a strong foundation in Science.
              </p>
            </div>

            {/* School (Ideal School) */}
            <div className="bg-[#424654]/30 border border-[#424654] rounded-xl p-6 hover:border-[#746465] transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-medium text-white">Ideal School & College</h4>
                <span className="text-sm bg-[#746465] text-white px-3 py-1 rounded-full">2016 - 2020</span>
              </div>
              <div className="flex items-center gap-2 text-[#D1D5DB] text-sm mb-3">
                <FaMapMarkerAlt className="w-4 h-4 text-[#746465]" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <p className="text-[#D1D5DB] text-sm leading-relaxed">
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
              <FaSearch className="w-8 h-8 text-[#746465]" />
              <h3 className="text-2xl font-semibold text-white">Open to Work</h3>
            </div>

            <div className="bg-[#424654]/30 border border-[#424654] rounded-xl p-6 hover:border-[#746465] transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-medium text-white">🚀 Seeking New Opportunities</h4>
              </div>
              <div className="flex items-center gap-2 text-[#D1D5DB] text-sm mb-3">
                <FaMapMarkerAlt className="w-4 h-4 text-[#746465]" />
                <span>Dhaka, Bangladesh (Remote / Hybrid)</span>
              </div>
              <p className="text-[#D1D5DB] text-sm leading-relaxed mb-4">
                I am a passionate Junior Web Developer currently seeking entry-level roles in <span className="text-white font-medium">Frontend</span> or <span className="text-white font-medium">Full Stack</span> development.
              </p>
              <p className="text-[#D1D5DB] text-sm leading-relaxed mb-4">
                I bring strong skills in <span className="text-white font-medium">React.js</span>, <span className="text-white font-medium">Next.js</span>, and <span className="text-white font-medium">Tailwind CSS</span>, along with a keen eye for UI/UX and a passion for clean code.
              </p>
              <div className="flex flex-wrap gap-3 pt-2 border-t border-[#424654]/50">
                <a
                  href="#contact"
                  className="flex items-center gap-1 px-4 py-2 bg-[#746465] hover:bg-[#5C5051] text-white rounded-lg transition-colors text-sm"
                >
                  <FaBriefcase className="w-4 h-4" /> Hire Me
                </a>
                <a
                  href="/Shalehin_Ahmed_Ornob_Resume.pdf"
                  download
                  className="flex items-center gap-1 px-4 py-2 border border-[#746465] text-[#C9C9C9] hover:bg-[#746465] hover:text-white rounded-lg transition-colors text-sm"
                >
                  <FaExternalLinkAlt className="w-4 h-4" /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}