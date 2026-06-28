"use client";

import "animate.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";

export default function Hero() {
    const [particles, setParticles] = useState([]);
    const [mediumBubbles, setMediumBubbles] = useState([]);

    useEffect(() => {
        // Small glowing particles
        const generatedParticles = [...Array(15)].map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: `${8 + Math.random() * 10}s`,
            delay: `${Math.random() * 10}s`,
        }));
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setParticles(generatedParticles);

        // Medium bubbles (Increased size and better visibility)
        /* const generatedBubbles = [...Array(5)].map((_, i) => ({
            id: `bubble-${i}`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${40 + Math.random() * 40}px`, // Increased size: between 40px and 80px
            duration: `${15 + Math.random() * 10}s`,
            delay: `${Math.random() * 10}s`,
        }));
        setMediumBubbles(generatedBubbles); */
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-24 lg:pt-20 bg-[#f0e6f6] dark:bg-[#1a1525] overflow-hidden transition-colors duration-300"
        >
            {/* 🏳️ AURORA GLOWS & MESH GRADIENTS */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-80 dark:opacity-60">
                <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] rounded-full blur-[80px] opacity-40 dark:opacity-30 animate-[aurora-1_20s_ease-in-out_infinite] mix-blend-multiply dark:mix-blend-screen"></div>

                <div className="absolute bottom-[-15%] right-[-15%] w-[35%] h-[35%] dark:w-[50%] dark:h-[50%] bg-gradient-to-r from-[#c084fc] to-[#d946ef] dark:from-[#4c1d95] dark:to-[#2e1065] rounded-full blur-[100px] opacity-60 dark:opacity-100 animate-[aurora-2_25s_ease-in-out_infinite] mix-blend-multiply dark:mix-blend-screen"></div>

                <div className="absolute top-[45%] left-[55%] w-[40%] h-[40%] bg-gradient-to-r from-[#f0abfc] to-[#8b5cf6] dark:from-[#a21caf] dark:to-[#6b21a8] rounded-full blur-[70px] opacity-30 dark:opacity-100 animate-[aurora-1_15s_ease-in-out_infinite_reverse] mix-blend-multiply dark:mix-blend-screen"></div>
            </div>

            {/* 🧊 FLOATING WIREFRAMES & CODE SNIPPETS */}
            <div className="absolute inset-0 pointer-events-none z-0 text-[#6b21a8] dark:text-[#c4b5fd] opacity-40 dark:opacity-30">

                {/* ✨ Floating Code Block (Top Left) */}
                <motion.div className="absolute top-[15%] left-[5%] font-mono text-xs rotate-2" animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                    <span className="text-[#7c3aed] dark:text-[#a78bfa]">console</span><span className="text-[#6b21a8] dark:text-[#c4b5fd]">.log</span><span className="text-[#c026d3] dark:text-[#e879f9]">(&quot;hello visitor&quot;);</span>
                </motion.div>

                {/* Floating Code Block 1 (Top Right) - Middle Left on Mobile */}
                <motion.div
                    className="absolute top-[45%] right-[5%] md:top-[20%] md:right-[5%] md:rotate-6 font-mono text-xs"
                    animate={{ y: [0, -30, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="text-[#c026d3] dark:text-[#e879f9] font-bold">const</span> profile = &#123;<br />
                    &nbsp;&nbsp;<span className="text-[#7c3aed] dark:text-[#a78bfa]">return</span> ( <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#4c1d95] dark:text-[#c084fc]">&lt;div&gt;</span>Header<span className="text-[#4c1d95] dark:text-[#c084fc]">&lt;/div&gt;</span><br />
                    &nbsp;&nbsp;)<br />
                    &#125;
                </motion.div>

                {/* Floating Code Block 2 (Bottom Left) */}
                <motion.div className="absolute bottom-[15%] left-[5%] font-mono text-xs -rotate-3" animate={{ y: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                    <span className="text-[#d946ef] dark:text-[#f0abfc]">JS FUNCTION</span><br />
                    <span className="text-[#6b21a8] dark:text-[#c4b5fd] opacity-70">const handle = () =&gt; &#123;...&#125;</span>
                </motion.div>

                {/* Floating 3D Wireframe Cube (SVG) */}
                <motion.svg viewBox="0 0 100 100" className="absolute top-[15%] left-[20%] w-16 h-16 md:w-24 md:h-24 fill-none stroke-[#c026d3] dark:stroke-[#e879f9] stroke-1 opacity-40" animate={{ rotateY: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}>
                    <path d="M10,10 L30,10 L30,30 L10,30 Z" />
                    <path d="M10,30 L30,30 L30,50 L10,50 Z" />
                    <path d="M10,10 L10,30 M30,10 L30,30" />
                    <path d="M10,30 L10,50 M30,30 L30,50" />
                </motion.svg>
            </div>

            {/* ✨ SCATTERED GLOWING PARTICLES */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#c026d3] dark:bg-[#e879f9] rounded-full shadow-[0_0_6px_#c026d3] dark:shadow-[0_0_6px_#e879f9] opacity-0"
                        style={{
                            top: particle.top,
                            left: particle.left,
                            animation: `particle-float ${particle.duration} linear infinite`,
                            animationDelay: particle.delay,
                        }}
                    />
                ))}
            </div>

            {/* MEDIUM SIZE BUBBLES */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {mediumBubbles.map((bubble) => (
                    <div
                        key={bubble.id}
                        className="absolute rounded-full bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] blur-[50px] opacity-40 dark:opacity-60 mix-blend-screen"
                        style={{
                            width: bubble.size,
                            height: bubble.size,
                            top: bubble.top,
                            left: bubble.left,
                            animation: `float-bubble ${bubble.duration} ease-in-out infinite`,
                            animationDelay: bubble.delay,
                        }}
                    />
                ))}
            </div>

            {/* 🎯 MAIN CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center order-1 md:order-2"
                >
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-[4px] bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] shadow-xl shadow-[#c084fc]/30 dark:shadow-[#7c3aed]/40 transition-all duration-300">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-[#1a1525] flex items-center justify-center">
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

                    <p className="text-base sm:text-lg text-[#6b21a8]/80 dark:text-[#c4b5fd]/80 mb-8 max-w-lg mx-auto md:mx-0 transition-colors duration-300">
                        Passionate about building smooth, user-friendly, and responsive web interfaces using JavaScript, React, and Next.js.
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start items-center">
                        <motion.a
                            href="/Shalehin_Ahmed_Ornob_Resume.pdf"
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                boxShadow: ["0px 0px 0px 0px rgba(192, 132, 252, 0.4)", "0px 0px 25px 10px rgba(192, 132, 252, 0.25)", "0px 0px 0px 0px rgba(192, 132, 252, 0.4)"]
                            }}
                            transition={{ boxShadow: { duration: 2.5, repeat: Infinity } }}
                            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#c026d3] to-[#7c3aed] dark:from-[#e879f9] dark:to-[#a78bfa] hover:from-[#c084fc] hover:to-[#7c3aed] dark:hover:from-[#c084fc] dark:hover:to-[#a78bfa] text-white font-medium shadow-lg transition-all duration-300"
                        >
                            <HiDownload className="w-5 h-5" />
                            <span>Download CV</span>
                        </motion.a>

                        <div className="flex items-center gap-3">
                            <motion.a href="https://www.facebook.com/sa.ornob.79" target="_blank" rel="noopener noreferrer" title="Facebook" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 border border-[#c084fc]/50 dark:border-[#7c3aed]/50 rounded-full bg-transparent hover:bg-[#c026d3] dark:hover:bg-[#e879f9] hover:border-[#c026d3] dark:hover:border-[#e879f9] hover:text-white dark:hover:text-[#1a1525] text-[#6b21a8] dark:text-[#c4b5fd] transition-all duration-300"><FaFacebook size={20} /></motion.a>

                            <motion.a href="https://github.com/ORNOB-083" target="_blank" rel="noopener noreferrer" title="GitHub" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 border border-[#c084fc]/50 dark:border-[#7c3aed]/50 rounded-full bg-transparent hover:bg-[#c026d3] dark:hover:bg-[#e879f9] hover:border-[#c026d3] dark:hover:border-[#e879f9] hover:text-white dark:hover:text-[#1a1525] text-[#6b21a8] dark:text-[#c4b5fd] transition-all duration-300"><FaGithub size={20} /></motion.a>

                            <motion.a href="https://www.linkedin.com/in/shalehin-ahmed-ornob/" target="_blank" rel="noopener noreferrer" title="LinkedIn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 border border-[#c084fc]/50 dark:border-[#7c3aed]/50 rounded-full bg-transparent hover:bg-[#c026d3] dark:hover:bg-[#e879f9] hover:border-[#c026d3] dark:hover:border-[#e879f9] hover:text-white dark:hover:text-[#1a1525] text-[#6b21a8] dark:text-[#c4b5fd] transition-all duration-300"><FaLinkedin size={20} /></motion.a>

                            <motion.a href="https://x.com/Saornob_08" target="_blank" rel="noopener noreferrer" title="X (Twitter)" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 border border-[#c084fc]/50 dark:border-[#7c3aed]/50 rounded-full bg-transparent hover:bg-[#c026d3] dark:hover:bg-[#e879f9] hover:border-[#c026d3] dark:hover:border-[#e879f9] hover:text-white dark:hover:text-[#1a1525] text-[#6b21a8] dark:text-[#c4b5fd] transition-all duration-300"><FaXTwitter size={20} /></motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}