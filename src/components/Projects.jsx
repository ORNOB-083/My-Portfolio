"use client";

import "animate.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-[#424654]/20 text-[#C9C9C9]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white">
            My <span className="bg-gradient-to-r from-[#746465] to-[#C9C9C9] bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#746465] to-[#C9C9C9] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#C9C9C9]/70 mt-4 text-lg">
            Some of the things I&apos;ve built recently
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-[#34353A] border border-[#424654] rounded-2xl overflow-hidden hover:border-[#746465] hover:shadow-xl hover:shadow-[#746465]/20 transition-all duration-300 flex flex-col h-full relative"
              >
                <div className="relative h-56 w-full flex-shrink-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#746465] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#C9C9C9]/80 text-sm mb-4 flex-grow">
                    {project.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-[#424654]/50 text-[#C9C9C9] border border-[#424654] rounded-full group-hover:border-[#746465]/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-[#424654]/50 text-[#C9C9C9] border border-[#424654] rounded-full">
                        +{project.stack.length - 4} more
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="relative flex items-center justify-center gap-2 px-4 py-2 bg-[#746465] hover:bg-[#5C5051] text-white rounded-lg transition-all duration-300 mt-auto text-sm font-medium overflow-hidden group/btn"
                  >
                    <span className="relative z-10">View Details</span>
                    <FaArrowRight className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5C5051] to-[#746465] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {projectsData.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#746465] to-[#9a7a7b] hover:from-[#5C5051] hover:to-[#8a6b6c] text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#746465]/40 font-medium"
            >
              {showAll ? (
                <>
                  <FaArrowUp className="w-4 h-4" /> Show Less
                </>
              ) : (
                <>
                  <FaArrowDown className="w-4 h-4" /> Show More Projects
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}