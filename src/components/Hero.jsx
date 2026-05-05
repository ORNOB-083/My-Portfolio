"use client";

import "animate.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-24 lg:pt-20 bg-[#34353A]"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center order-1 md:order-2"
                >
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-[4px] bg-gradient-to-r from-[#746465] to-[#C9C9C9] shadow-xl shadow-[#746465]/30">
                        
                        {/* Clean Inner Circle */}
                        <div className="w-full h-full rounded-full overflow-hidden bg-[#34353A]">
                            <Image
                                src="/profile.png"
                                alt=""
                                width={400}
                                height={400}
                                className="object-cover w-full h-full scale-110"
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
                        <span>Hello, I&apos;m</span>
                        <br />
                        <span className="text-4xl sm:text-5xl lg:text-5xl bg-gradient-to-r from-[#746465] to-[#C9C9C9] bg-clip-text text-transparent">
                            Shalehin Ahmed Ornob
                        </span>
                    </h1>

                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#726865] mb-6 h-16 flex justify-center md:justify-start">
                        <Typewriter
                            options={{
                                strings: [
                                    "Junior Web Developer",
                                    "Frontend Developer",
                                    "React Developer",
                                    "Next.js Developer",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </div>

                    <p className="text-base sm:text-lg text-[#C9C9C9]/80 mb-8 max-w-lg mx-auto md:mx-0">
                        Passionate about building smooth, user-friendly, and responsive web
                        interfaces using JavaScript, React, and Next.js.
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start items-center">
                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#746465] to-[#9a7a7b] hover:from-[#5C5051] hover:to-[#8a6b6c] text-white rounded-lg transition-all shadow-lg hover:shadow-[#746465]/50"
                        >
                            <HiDownload size={20} /> Download Resume
                        </a>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/sa.ornob.79"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-[#C9C9C9]/30 rounded-full hover:bg-[#746465] hover:border-[#746465] transition-all text-[#C9C9C9] hover:text-white"
                            >
                                <FaFacebook size={20} />
                            </a>

                            <a
                                href="https://github.com/ORNOB-083"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-[#C9C9C9]/30 rounded-full hover:bg-[#746465] hover:border-[#746465] transition-all text-[#C9C9C9] hover:text-white"
                            >
                                <FaGithub size={20} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/shalehin-ahmed-ornob/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-[#C9C9C9]/30 rounded-full hover:bg-[#746465] hover:border-[#746465] transition-all text-[#C9C9C9] hover:text-white"
                            >
                                <FaLinkedin size={20} />
                            </a>

                            <a
                                href="https://x.com/Saornob_08"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-[#C9C9C9]/30 rounded-full hover:bg-[#746465] hover:border-[#746465] transition-all text-[#C9C9C9] hover:text-white"
                            >
                                <FaTwitter size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}