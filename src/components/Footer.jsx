"use client";

import "animate.css";
import { motion } from "framer-motion";
import { FaHeart, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white/70 dark:bg-[#1a1525]/70 backdrop-blur-md border-t border-gray-300/50 dark:border-[#3d2d5c]/50 py-10 text-[#6b21a8] dark:text-[#c4b5fd] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] bg-clip-text text-transparent">
                Shalehin Ahmed Ornob
              </h3>
              <p className="text-medium text-gray-500 dark:text-[#c4b5fd]/60 mt-1 tracking-wide">Full Stack Developer</p>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-2 text-sm overflow-hidden rounded-full px-4 py-1.5 border border-transparent hover:border-[#c026d3]/30 dark:hover:border-[#e879f9]/30 transition-colors"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-[#c026d3]/20 to-[#a78bfa]/20 dark:from-red-500/20 dark:via-[#e879f9]/20 dark:to-[#a78bfa]/20"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />

              <span className="relative z-10 text-red-700 dark:text-red-700 hover:text-[#c026d3] dark:hover:text-[#e879f9] transition-colors duration-300">
                Back to Top
              </span>

              {/* Arrow (Stays Red initially, turns Purple on hover) */}
              <FaArrowUp className="relative z-10 w-3 h-3 text-red-700 dark:text-red-700 hover:text-[#c026d3] dark:hover:text-[#e879f9] group-hover:-translate-y-1 transition-all duration-300" />
            </motion.button>
          </motion.div>

          {/* Divider */}
          <div className="w-64 h-0.5 bg-gradient-to-r from-transparent via-[#c026d3] dark:via-[#e879f9] to-transparent"></div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-sm text-gray-500 dark:text-[#c4b5fd]/50 flex items-center justify-center gap-2">
              Built with <FaHeart className="text-[#c026d3] dark:text-[#e879f9] w-4 h-4" /> by Shalehin Ahmed Ornob using Next.js
              <span className="mx-2">•</span>
              {currentYear}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}