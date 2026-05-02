"use client";

import "animate.css";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode className="w-6 h-6 text-[#746465]" />,
      percentage: 85,
      skills: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend",
      icon: <FaServer className="w-6 h-6 text-[#746465]" />,
      percentage: 75,
      skills: ["Node.js", "MongoDB", "APIs", "Firebase", "PHP", "MySQL"],
    },
    {
      title: "Tools & Others",
      icon: <FaTools className="w-6 h-6 text-[#746465]" />,
      percentage: 70,
      skills: [
        "Git & GitHub",
        "DaisyUI",
        "HeroUI",
        "React Icons",
        "Animate.css",
        "Figma",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#34353A]">
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
            My <span className="bg-gradient-to-r from-[#746465] to-[#C9C9C9] bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#746465] to-[#C9C9C9] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#C9C9C9]/70 mt-4 text-lg">
            Technologies I work with daily
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#424654]/50 border border-[#424654] rounded-2xl p-8 hover:border-[#746465] transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Circular Progress Bar */}
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-[#424654] stroke-current"
                      strokeWidth="8"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                    />
                    <motion.circle
                      className="text-[#746465] stroke-current"
                      strokeWidth="8"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      initial={{ strokeDasharray: "0 251" }}
                      whileInView={{ strokeDasharray: `${category.percentage * 2.51} 251` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-[#C9C9C9]">
                      {category.percentage}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-[#34353A] text-[#C9C9C9]/80 border border-[#424654] rounded-full hover:border-[#746465] hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}