"use client";

import "animate.css";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode className="w-6 h-6 text-[#c026d3] dark:text-[#e879f9]" />,
      percentage: 85,
      skills: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Framer Motion",
        "Swiper.js",
      ],
    },
    {
      title: "Backend",
      icon: <FaServer className="w-6 h-6 text-[#c026d3] dark:text-[#e879f9]" />,
      percentage: 75,
      skills: [
        "Node.js",
        "Express.js",
        "JWT",
        "MongoDB",
        "REST APIs",
        "PHP",
        "MySQL",
      ],
    },
    {
      title: "Tools & Others",
      icon: <FaTools className="w-6 h-6 text-[#c026d3] dark:text-[#e879f9]" />,
      percentage: 70,
      skills: [
        "Git & GitHub",
        "DaisyUI",
        "HeroUI",
        "React Icons",
        "Animate.css",
        "Postman",
        "Figma",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-[#f0e6f6] dark:bg-[#1a1525] transition-colors duration-300"
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
            My <span className="bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#6b21a8]/70 dark:text-[#c4b5fd]/70 mt-4 text-lg transition-colors duration-300">
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
              className="bg-white/70 dark:bg-[#1a1525]/70 backdrop-blur-md border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-2xl p-8 hover:shadow-xl hover:shadow-[#c084fc]/20 dark:hover:shadow-[#7c3aed]/20 hover:border-[#c026d3] dark:hover:border-[#e879f9] transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-[#c026d3]/10 dark:bg-[#e879f9]/10 backdrop-blur-md">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[#6b21a8] dark:text-[#c4b5fd] transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Circular Progress Bar */}
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32">
                  {/* Background Track */}
                  <div className="absolute inset-0 rounded-full border-8 border-gray-200/50 dark:border-[#3d2d5c]/50"></div>

                  {/* Animated Progress Ring */}
                  <svg className="w-full h-full -rotate-90 relative z-10" viewBox="0 0 100 100">
                    <motion.circle
                      className="text-[#c026d3] dark:text-[#e879f9] stroke-current"
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
                    />
                  </svg>

                  {/* Percentage Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-[#6b21a8] dark:text-[#c4b5fd] transition-colors duration-300">
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
                    className="px-3 py-1 text-sm bg-[#f0e6f6]/50 dark:bg-[#1a1525]/50 text-[#6b21a8] dark:text-[#c4b5fd] border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-full hover:bg-[#c026d3] dark:hover:bg-[#e879f9] hover:text-white dark:hover:text-[#1a1525] transition-all duration-300"
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