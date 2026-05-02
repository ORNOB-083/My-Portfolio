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
    <footer className="bg-[#34353A] border-t border-[#424654] py-10 text-[#C9C9C9]">
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
              <h3 className="text-3xl font-bold text-white">Shalehin Ahmed Ornob</h3>
              <p className="text-medium text-[#C9C9C9]/60 mt-1 tracking-wide">Junior Web Developer</p>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-[#C9C9C9]/40 hover:text-[#746465] transition-colors"
            >
              <span>Back to Top</span>
              <FaArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>

          {/* Divider */}
          <div className="w-64 h-0.5 bg-gradient-to-r from-transparent via-[#746465] to-transparent"></div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-sm text-[#C9C9C9]/50 flex items-center justify-center gap-2">
              Built with <FaHeart className="text-[#746465] w-4 h-4" /> by Shalehin Ahmed Ornob
              <span className="mx-2">•</span>
              {currentYear}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}