"use client";

import "animate.css";
import { useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Initialize state as null to avoid hydration mismatch
  const [isDark, setIsDark] = useState(null);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load and apply theme BEFORE the browser paints (Eliminates the flash completely)
  useLayoutEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = saved === "dark" || (!saved && prefersDark);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(initialDark);
    if (initialDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  // Toggle Theme (Save to localStorage and apply to HTML)
  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  };

  const handleLinkClick = () => setIsOpen(false);

  const isActive = (link) => {
    if (typeof window !== "undefined") {
      if (link === "Home" && window.location.hash === "") return true;
      return window.location.hash === `#${link.toLowerCase()}`;
    }
    return false;
  };

  // Avoid rendering the toggle button until state is ready (Prevents hydration mismatch)
  if (isDark === null) return null;

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto transition-all duration-300 ${scrolled || isOpen
        ? "bg-[#f0e6f6]/80 dark:bg-[#1a1525]/80 shadow-xl backdrop-blur-lg"
        : "bg-[#f0e6f6]/60 dark:bg-[#1a1525]/60 backdrop-blur-md"
        } border border-[#d4b8e0]/50 dark:border-[#3d2d5c]/50 rounded-full md:px-4 md:py-2 px-4 py-2 animate__animated animate__fadeInDown`}
    >
      <div className="flex items-center justify-between w-full md:w-auto gap-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/letter-s (1).png"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full ring-2 ring-[#c084fc]/40 dark:ring-[#7c3aed]/40"
          />
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] bg-clip-text text-transparent sm:block">
            ORNOB
          </span>
        </Link>

        {/* Spacer */}
        <div className="hidden md:block w-8" />

        {/* Desktop Links - Increased text size and padding */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={handleLinkClick}
                className={`px-5 py-2 rounded-full text-base font-medium transition-all duration-300 ${active
                  ? "bg-[#c084fc]/30 dark:bg-[#7c3aed]/40 text-[#6b21a8] dark:text-[#e9d5ff] shadow-sm"
                  : "text-[#6b21a8] dark:text-[#c4b5fd] hover:bg-[#c084fc]/20 dark:hover:bg-[#7c3aed]/20 hover:text-[#7c3aed] dark:hover:text-white"
                  }`}
              >
                {link}
              </Link>
            );
          })}
        </div>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-[#c084fc]/40 dark:border-[#7c3aed]/40 text-[#6b21a8] dark:text-[#c4b5fd] hover:bg-[#c084fc]/20 dark:hover:bg-[#7c3aed]/20 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-full text-[#6b21a8] dark:text-[#c4b5fd] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-14 left-0 right-0 mx-4 bg-[#f0e6f6]/95 dark:bg-[#1a1525]/95 backdrop-blur-lg border border-[#d4b8e0]/50 dark:border-[#3d2d5c]/50 rounded-2xl shadow-2xl p-4 flex flex-col gap-2"
        >
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block px-4 py-3 rounded-xl text-base font-medium text-[#6b21a8] dark:text-[#c4b5fd] hover:bg-[#c084fc]/20 dark:hover:bg-[#7c3aed]/20 transition-all duration-200"
              onClick={handleLinkClick}
            >
              {link}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}