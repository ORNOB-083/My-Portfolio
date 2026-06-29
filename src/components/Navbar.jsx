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
  const [isDark, setIsDark] = useState(null);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.toLowerCase());
    const sections = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            if (window.location.hash !== `#${entry.target.id}`) {
              window.history.replaceState(null, "", `#${entry.target.id}`);
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -30% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Theme logic
  useLayoutEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = saved === "dark" || (!saved && prefersDark);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(initialDark);
    if (initialDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

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

  const handleLinkClick = (link) => {
    setActiveSection(link.toLowerCase());
    setIsOpen(false);
  };

  if (isDark === null) return null;

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto transition-all duration-300 ${scrolled || isOpen
          ? "bg-[#f0e6f6]/80 dark:bg-[#1a1525]/80 shadow-xl backdrop-blur-lg"
          : "bg-[#f0e6f6]/70 dark:bg-[#1a1525]/70 backdrop-blur-md"
        } border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-full md:px-4 md:py-2 px-4 py-2 animate__animated animate__fadeInDown`}
    >
      <div className="flex items-center justify-between w-full md:w-auto gap-8">

        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/letter-s (1).png"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full ring-2 ring-gray-300/40 dark:ring-[#7c3aed]/40"
          />
          <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-[#c4b5fd] sm:block">
            ORNOB
          </span>
        </Link>

        <div className="hidden md:block w-8" />

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = activeSection === link.toLowerCase();
            return (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => handleLinkClick(link)}
                className={`px-5 py-2 rounded-full text-base font-medium transition-all duration-300 ${active
                    ? "bg-white dark:bg-[#7c3aed]/40 text-gray-900 dark:text-[#e9d5ff] shadow-sm"
                    : "text-gray-600 dark:text-[#c4b5fd] hover:bg-gray-200/50 dark:hover:bg-[#7c3aed]/20 hover:text-gray-900 dark:hover:text-white"
                  }`}
              >
                {link}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300/50 dark:border-[#3d2d5c]/50 text-gray-600 dark:text-[#c4b5fd] hover:bg-gray-200/50 dark:hover:bg-[#7c3aed]/20 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-full text-gray-600 dark:text-[#c4b5fd] hover:text-gray-900 dark:hover:text-white transition-colors"
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
          className="md:hidden absolute top-14 left-0 right-0 mx-4 bg-[#f0e6f6]/95 dark:bg-[#1a1525]/95 backdrop-blur-lg border border-gray-300/50 dark:border-[#3d2d5c]/50 rounded-2xl shadow-2xl p-4 flex flex-col gap-2"
        >
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-600 dark:text-[#c4b5fd] hover:bg-gray-200/50 dark:hover:bg-[#7c3aed]/20 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}