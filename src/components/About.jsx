"use client";

import "animate.css";
import { motion } from "framer-motion";
import { FaUser, FaCode } from "react-icons/fa";

export default function About() {
    const stats = [
        { value: "10+", label: "Projects" },
        { value: "200+", label: "Commits" },
        { value: "12+", label: "Technologies" },
    ];

    const toolboxBars = [
        { label: "Frontend", percentage: "85%" },
        { label: "Backend", percentage: "75%" },
        { label: "Tools", percentage: "70%" },
    ];

    const skills = [
        "React", "Next.js", "Tailwind CSS", "JavaScript",
        "Node.js", "Firebase", "MongoDB",
        "Animation", "Git & GitHub", "DaisyUI", "PHP", "MySQL",
    ];

    return (
        <section id="about" className="py-24 bg-[#424654]/30 text-[#C9C9C9]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white">
                        About <span className="bg-gradient-to-r from-[#746465] to-[#C9C9C9] bg-clip-text text-transparent">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#746465] to-[#C9C9C9] mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#34353A] border border-[#424654] rounded-2xl p-10 flex flex-col justify-between h-full"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <FaUser className="w-7 h-7 text-[#746465] animate-pulse" />
                                <h3 className="text-2xl font-bold text-white">Who I Am</h3>
                            </div>

                            <p className="text-[#C9C9C9]/90 text-base leading-relaxed mb-6">
                                I&apos;m Shalehin Ahmed Ornob, a Junior Web Developer who loves turning ideas into real interfaces. I work with React, Next.js, and Tailwind CSS to build responsive, user-friendly web experiences.
                            </p>

                            <p className="text-[#C9C9C9]/90 text-base leading-relaxed mb-12">
                                Outside of coding, I play Valorant, explore new tech trends, and capture cityscapes through my camera lens.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-center border-t border-[#424654] pt-8">
                            {stats.map((stat, idx) => (
                                <div key={idx}>
                                    <div className="text-4xl font-extrabold text-[#746465] mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-[#C9C9C9]/70">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#34353A] border border-[#424654] rounded-2xl p-10 flex flex-col h-full"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <FaCode className="w-7 h-7 text-[#746465]" />
                            <h3 className="text-2xl font-bold text-white">My Toolbox</h3>
                        </div>

                        <div className="space-y-6 mb-10">
                            {toolboxBars.map((bar, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between text-sm font-semibold mb-2">
                                        <span className="text-[#C9C9C9]">{bar.label}</span>
                                        <span className="text-[#C9C9C9]/60">{bar.percentage}</span>
                                    </div>
                                    <div className="w-full bg-[#424654] h-2 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: bar.percentage }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                            className="bg-gradient-to-r from-[#746465] to-[#C9C9C9] h-full rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-2.5 mt-auto">
                            {skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-1.5 bg-[#424654]/50 text-sm text-[#C9C9C9] border border-[#424654] rounded-xl hover:border-[#746465] hover:text-white transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}