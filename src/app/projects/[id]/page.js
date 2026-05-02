"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projectsData } from "@/data/projectsData";

export default function ProjectDetails() {
  const params = useParams();
  const project = projectsData.find((p) => p.id === parseInt(params.id));

  if (!project) {
    return (
      <div className="min-h-screen bg-[#34353A] text-[#C9C9C9] flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-[#746465] hover:text-[#5C5051] transition-colors"
        >
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#34353A] text-[#C9C9C9] pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[#746465] hover:text-[#5C5051] transition-colors mb-6"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Project Image */}
        <div className="relative h-80 w-full mb-8 rounded-2xl overflow-hidden border border-[#424654]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Title & Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-[#424654]/50 text-[#C9C9C9] border border-[#424654] rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.liveLink && project.liveLink !== "#" && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 bg-[#746465] hover:bg-[#5C5051] text-white rounded-lg transition-colors"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {project.githubLink && project.githubLink !== "#" && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 border border-[#424654] hover:border-[#746465] text-[#C9C9C9] hover:text-white rounded-lg transition-colors"
              >
                <FaGithub /> GitHub Repository
              </a>
            )}
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-3">About the Project</h2>
            <p className="text-[#C9C9C9]/90 leading-relaxed text-lg">
              {project.description}
            </p>
          </div>

          {/* Challenges */}
          <div className="mb-8 p-6 bg-[#424654]/30 border border-[#424654] rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-3">Challenges Faced</h2>
            <p className="text-[#C9C9C9]/90 leading-relaxed">
              {project.challenges}
            </p>
          </div>

          {/* Future Plans */}
          <div className="p-6 bg-[#746465]/10 border border-[#746465]/30 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-3">Future Improvements</h2>
            <p className="text-[#C9C9C9]/90 leading-relaxed">
              {project.futurePlans}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}