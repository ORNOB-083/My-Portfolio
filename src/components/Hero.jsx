"use client";

import "animate.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-24 lg:pt-20 bg-[#f0e6f6] dark:bg-[#1a1525] transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center order-1 md:order-2"
                >
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-[4px] bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] shadow-xl shadow-[#c084fc]/30 dark:shadow-[#7c3aed]/40 transition-all duration-300">
                        <div className="w-full h-full rounded-full overflow-hidden bg-[#f0e6f6] dark:bg-[#1a1525]">
                            <Image
                                src="/profile_3.jpg"
                                alt="Shalehin Ahmed Ornob"
                                width={400}
                                height={400}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1 text-center md:text-left"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 leading-tight">
                        <span className="text-[#6b21a8] dark:text-[#c4b5fd] transition-colors duration-300">Hello, I&apos;m</span>
                        <br />
                        <span className="text-4xl sm:text-5xl lg:text-5xl bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] bg-clip-text text-transparent transition-colors duration-300">
                            Shalehin Ahmed Ornob
                        </span>
                    </h1>

                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#6b21a8] dark:text-[#c4b5fd] mb-6 h-16 flex justify-center md:justify-start transition-colors duration-300">
                        <Typewriter
                            options={{
                                strings: [
                                    "Full Stack Developer",
                                    "MERN Stack Developer",
                                    "Junior Web Developer",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </div>

                    <p className="text-base sm:text-lg text-[#6b21a8]/80 dark:text-[#c4b5fd]/80 mb-8 max-w-lg mx-auto md:mx-0 transition-colors duration-300">Passionate about building smooth, user-friendly, and responsive web interfaces using JavaScript, React, and Next.js.
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start items-center">
                        {/* Updated Resume Button Gradient */}
                        <a
                            href="/Shalehin_Ahmed_Ornob_Resume.pdf"
                            download
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] hover:from-[#6b21a8] hover:to-[#7c3aed] dark:hover:from-[#c084fc] dark:hover:to-[#a78bfa] text-white rounded-lg transition-all shadow-lg shadow-[#c084fc]/50 dark:shadow-[#7c3aed]/50"
                        >
                            <HiDownload size={20} /> Download Resume
                        </a>

                        {/* Updated Social Icons */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/sa.ornob.79"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-[#c084fc]/50 dark:border-[#7c3aed]/50 rounded-full hover:bg-[#c026d3] dark:hover:bg-[#e879f9] hover:border-[#c026d3] dark:hover:border-[#e879f9] hover:text-white transition-all duration-300 text-[#6b21a8] dark:text-[#c4b5fd]"
                            >
                                <FaFacebook size={20} />
                            </a>

                            <a
                                href="https://github.com/ORNOB-083"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-[#c084fc]/50 dark:border-[#7c3aed]/50 rounded-full hover:bg-[#c026d3] dark:hover:bg-[#e879f9] hover:border-[#c026d3] dark:hover:border-[#e879f9] hover:text-white transition-all duration-300 text-[#6b21a8] dark:text-[#c4b5fd]"
                            >
                                <FaGithub size={20} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/shalehin-ahmed-ornob/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-[#c084fc]/50 dark:border-[#7c3aed]/50 rounded-full hover:bg-[#c026d3] dark:hover:bg-[#e879f9] hover:border-[#c026d3] dark:hover:border-[#e879f9] hover:text-white transition-all duration-300 text-[#6b21a8] dark:text-[#c4b5fd]"
                            >
                                <FaLinkedin size={20} />
                            </a>

                            <a
                                href="https://x.com/Saornob_08"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-[#c084fc]/50 dark:border-[#7c3aed]/50 rounded-full hover:bg-[#c026d3] dark:hover:bg-[#e879f9] hover:border-[#c026d3] dark:hover:border-[#e879f9] hover:text-white transition-all duration-300 text-[#6b21a8] dark:text-[#c4b5fd]"
                            >
                                <FaXTwitter size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}