"use client";

import "animate.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#424654]/20 text-[#C9C9C9]">
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
            My <span className="bg-gradient-to-r from-[#746465] to-[#C9C9C9] bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#746465] to-[#C9C9C9] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#C9C9C9]/70 mt-4 text-lg">
            Some of the things I&apos;ve built recently
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#34353A] border border-[#424654] rounded-2xl overflow-hidden hover:border-[#746465] transition-all duration-300 flex flex-col h-full"
            >
              {/* Full Homepage Image */}
              <div className="relative h-56 w-full flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[#C9C9C9]/80 text-sm mb-4 flex-grow">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-[#424654]/50 text-[#C9C9C9] border border-[#424654] rounded-full"
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
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-[#746465] hover:bg-[#5C5051] text-white rounded-lg transition-all duration-300 mt-auto text-sm font-medium"
                >
                  View Details <FaArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}