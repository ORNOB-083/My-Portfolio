"use client";

import "animate.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowDown, FaArrowUp, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 6);

  return (
    <section
      id="projects"
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
            My <span className="bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#6b21a8]/70 dark:text-[#c4b5fd]/70 mt-4 text-lg">
            Some of the things I&apos;ve built recently
          </p>
        </motion.div>

        {/* Project Cards Grid */}
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
                className="group bg-white/70 dark:bg-[#1a1525]/70 backdrop-blur-md border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#c084fc]/20 dark:hover:shadow-[#7c3aed]/20 hover:border-[#c026d3] dark:hover:border-[#e879f9] transition-all duration-300 flex flex-col h-full relative"
              >
                {/* Image Container with Floating Icons Overlay */}
                <div className="relative h-56 w-full flex-shrink-0 overflow-hidden">
                  {/* Image with Smooth Zoom */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* ✨ Floating Overlay (No Blur - Image Stays Sharp) */}
                  <div className="absolute inset-0 bg-black/20 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 z-10">
                    {/* Live Demo Icon */}
                    {project.liveLink && project.liveLink !== "#" && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/90 dark:bg-[#1a1525]/90 text-[#c026d3] dark:text-[#e879f9] p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-[#c026d3] dark:hover:bg-[#e879f9] hover:text-white dark:hover:text-[#1a1525]"
                      >
                        <FaExternalLinkAlt size={20} />
                      </motion.a>
                    )}

                    {/* GitHub Icon */}
                    {project.githubLink && project.githubLink !== "#" && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/90 dark:bg-[#1a1525]/90 text-[#c026d3] dark:text-[#e879f9] p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-[#c026d3] dark:hover:bg-[#e879f9] hover:text-white dark:hover:text-[#1a1525]"
                      >
                        <FaGithub size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-[#6b21a8] dark:text-[#c4b5fd] mb-2 group-hover:text-[#c026d3] dark:group-hover:text-[#e879f9] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-[#c4b5fd]/80 text-sm mb-4 flex-grow">
                    {project.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-[#f0e6f6]/50 dark:bg-[#1a1525]/50 text-[#6b21a8] dark:text-[#c4b5fd] border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-full group-hover:border-[#c026d3]/50 dark:group-hover:border-[#e879f9]/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-[#f0e6f6]/50 dark:bg-[#1a1525]/50 text-[#6b21a8] dark:text-[#c4b5fd] border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-full">
                        +{project.stack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Fluid View Details Button */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="relative flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#c026d3]/30 dark:border-[#e879f9]/30 text-[#c026d3] dark:text-[#e879f9] font-medium shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#c026d3]/30 dark:hover:shadow-[#e879f9]/30 mt-auto overflow-hidden group/btn"
                  >
                    {/* Sliding Background Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa]"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />

                    <span className="relative z-10 group-hover/btn:text-cyan-500 transition-colors duration-300">
                      View Details
                    </span>
                    <FaArrowRight className="relative z-10 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-white" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Button */}
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
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] hover:from-[#c084fc] hover:to-[#7c3aed] dark:hover:from-[#c084fc] dark:hover:to-[#a78bfa] text-white font-medium shadow-lg transition-all duration-300 hover:-translate-y-1"
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