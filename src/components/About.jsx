"use client";

import "animate.css";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

export default function About() {
  const stats = [
    { value: "10+", label: "Projects" },
    { value: "200+", label: "Commits" },
    { value: "12+", label: "Technologies" },
  ];

  return (
    <section id="about" className="py-24 bg-[#424654]/30 text-[#C9C9C9]">
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
            About <span className="bg-gradient-to-r from-[#746465] to-[#C9C9C9] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#746465] to-[#C9C9C9] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Who I Am */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#34353A] border border-[#424654] rounded-2xl p-10 flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaUser className="w-7 h-7 text-[#746465] animate-pulse" />
                <h3 className="text-2xl font-bold text-white">Who I Am</h3>
              </div>

              <p className="text-[#C9C9C9]/90 text-base leading-relaxed mb-6">
                I&apos;m <span className="text-white font-semibold">Shalehin Ahmed Ornob</span>, a Junior Web Developer from Bangladesh. My programming journey started from pure curiosity. I wanted to build my own custom projects and see my ideas come to life on a screen. That spark turned into a passion, and I&apos;ve been coding ever since.
              </p>

              <p className="text-[#C9C9C9]/90 text-base leading-relaxed mb-6">
                I genuinely enjoy solving problems and building clean, responsive interfaces. Whether it&apos;s a landing page or a full web app, I love turning complex requirements into functional, user-friendly experiences using <span className="text-white font-medium">React.js</span>, <span className="text-white font-medium">Next.js</span>, and <span className="text-white font-medium">Tailwind CSS</span>.
              </p>

              <p className="text-[#C9C9C9]/90 text-base leading-relaxed mb-12">
                Outside of coding, I enjoy watching <span className="text-white font-medium">movies</span>, listening to <span className="text-white font-medium">music</span>, and playing mobile games like <span className="text-white font-medium">Clash of Clans</span>, <span className="text-white font-medium">Hay Day</span>, and <span className="text-white font-medium">PUBG</span>. I believe creativity and attention to detail come from these hobbies.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 text-center border-t border-[#424654] pt-8">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl font-extrabold text-[#746465] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#C9C9C9]/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Short Highlight / Fun Fact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#34353A] border border-[#424654] rounded-2xl p-10 flex flex-col justify-center h-full"
          >
            <h3 className="text-2xl font-bold text-white mb-4">What Drives Me</h3>
            <p className="text-[#C9C9C9]/90 text-base leading-relaxed mb-6">
              I&apos;m a firm believer in <span className="text-white font-medium">clean code</span>, <span className="text-white font-medium">continuous learning</span>, and building digital experiences that truly matter. I bring passion, patience, and a deep attention to detail to every project I work on.
            </p>
            <div className="bg-[#424654]/30 rounded-xl p-6 border-l-4 border-[#746465]">
              <p className="text-[#C9C9C9]/80 italic">
                &quot;Every great developer you know got there by solving problems they didn&apos;t know how to solve at first.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}