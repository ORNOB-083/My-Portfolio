"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import { projectsData } from "@/data/projectsData";

export default function ProjectDetails() {
  const params = useParams();
  const project = projectsData.find((p) => p.id === parseInt(params.id));
  const [isImageOpen, setIsImageOpen] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f0e6f6] dark:bg-[#1a1525] text-[#6b21a8] dark:text-[#c4b5fd] flex flex-col items-center justify-center px-6 transition-colors duration-300">
        <h1 className="text-4xl font-bold text-[#6b21a8] dark:text-[#c4b5fd] mb-4">Project Not Found</h1>
        <motion.a
          href="/#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-[#c026d3] dark:text-[#e879f9] hover:text-[#7c3aed] dark:hover:text-[#a78bfa] transition-colors font-medium"
        >
          <FaArrowLeft /> Back to Projects
        </motion.a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0e6f6] dark:bg-[#1a1525] text-[#6b21a8] dark:text-[#c4b5fd] pt-24 pb-12 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Back Button (Smooth) */}
        <motion.a
          href="/#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 text-[#c026d3] dark:text-[#e879f9] hover:text-[#7c3aed] dark:hover:text-[#a78bfa] mb-6 transition-colors duration-300 font-medium"
        >
          <FaArrowLeft /> Back to Projects
        </motion.a>

        {/* Project Image - Clickable */}
        <div
          className="relative h-80 w-full mb-8 rounded-2xl overflow-hidden border-2 border-[#c026d3]/30 dark:border-[#e879f9]/30 cursor-pointer group"
          onClick={() => setIsImageOpen(true)}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#1a1525]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-sm font-medium px-4 py-2 bg-[#c026d3]/80 dark:bg-[#e879f9]/80 rounded-lg">
              Click to enlarge
            </span>
          </div>
        </div>

        {/* Image Lightbox Overlay */}
        <AnimatePresence>
          {isImageOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-[#1a1525]/95 flex items-center justify-center p-4"
              onClick={() => setIsImageOpen(false)}
            >
              <button
                onClick={() => setIsImageOpen(false)}
                className="absolute top-6 right-6 text-white hover:text-[#e879f9] transition-colors"
                aria-label="Close image"
              >
                <FaTimes size={32} />
              </button>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-5xl w-full h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Title & Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-[#6b21a8] dark:text-[#c4b5fd] mb-4 transition-colors duration-300">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-white/70 dark:bg-[#1a1525]/70 text-[#6b21a8] dark:text-[#c4b5fd] border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-full transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links (Smooth Buttons) */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.liveLink && project.liveLink !== "#" && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] hover:from-[#c084fc] hover:to-[#7c3aed] dark:hover:from-[#c084fc] dark:hover:to-[#a78bfa] text-white font-medium shadow-lg transition-all duration-300"
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
            )}
            {project.githubLink && project.githubLink !== "#" && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#c026d3]/50 dark:border-[#e879f9]/50 text-[#6b21a8] dark:text-[#c4b5fd] hover:bg-[#c026d3] dark:hover:bg-[#e879f9] hover:text-white dark:hover:text-[#1a1525] transition-all duration-300"
              >
                <FaGithub /> GitHub Repository
              </motion.a>
            )}
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#6b21a8] dark:text-[#c4b5fd] mb-3 transition-colors duration-300">About the Project</h2>
            <p className="text-gray-600 dark:text-[#c4b5fd]/90 leading-relaxed text-lg transition-colors duration-300">
              {project.description}
            </p>
          </div>

          {/* Challenges */}
          <div className="mb-8 p-6 bg-white/70 dark:bg-[#1a1525]/70 backdrop-blur-md border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold text-[#6b21a8] dark:text-[#c4b5fd] mb-3 transition-colors duration-300">Challenges Faced</h2>
            <p className="text-gray-600 dark:text-[#c4b5fd]/90 leading-relaxed transition-colors duration-300">
              {project.challenges}
            </p>
          </div>

          {/* Future Plans */}
          <div className="p-6 bg-[#c026d3]/10 dark:bg-[#e879f9]/10 border border-[#c026d3]/30 dark:border-[#e879f9]/30 rounded-xl transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-[#6b21a8] dark:text-[#c4b5fd] mb-3 transition-colors duration-300">Future Improvements</h2>
            <p className="text-gray-600 dark:text-[#c4b5fd]/90 leading-relaxed transition-colors duration-300">
              {project.futurePlans}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}