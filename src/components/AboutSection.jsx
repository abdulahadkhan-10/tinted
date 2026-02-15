"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Lens3D from "./Lens3D";

export default function AboutSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Story chapters data
    const chapters = [
        {
            title: "The Noise",
            text: "The digital landscape is crowded. Thousands of voices shouting at once, creating a chaotic static where messages get lost.",
            highlight: "We silence the static."
        },
        {
            title: "The Focus",
            text: "Precision is our currency. We strip away the unnecessary, honing in on the core narrative that resonates with your specific audience.",
            highlight: "Strategic clarity."
        },
        {
            title: "The Tint",
            text: "We don't just capture moments; we transform them. Adding our signature color, energy, and perspective to create something unmistakable.",
            highlight: "Permanent impact."
        }
    ];

    return (
        <section ref={containerRef} className="relative w-full bg-white">

            {/* STICKY CONTAINER */}
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto items-start relative">

                {/* LEFT: Sticky Visual (The "Lens") */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen sticky top-20 lg:top-0 z-10 flex items-center justify-center p-4 lg:p-10 pointer-events-none">
                    <div className="relative w-full h-full max-w-[300px] md:max-w-[450px] lg:max-w-[600px] flex items-center justify-center">

                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-electric-blue/5 blur-[80px] lg:blur-[160px] rounded-full opacity-30" />

                        {/* 3D CANVAS COMPONENT */}
                        <Lens3D scrollProgress={scrollYProgress} />

                        {/* Subtle Floating Labels for Tech Feel */}
                        <motion.div
                            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-[0.6em] text-gray-400 font-mono animate-pulse"
                        >
                            Optical Core // Phase 01
                        </motion.div>
                    </div>
                </div>

                {/* RIGHT: Scrolling Text Content */}
                <div className="w-full lg:w-1/2 relative z-20">
                    {/* Intro Spacer */}
                    <div className="h-[10vh] lg:h-[50vh]" />

                    {/* Chapters */}
                    {chapters.map((chapter, index) => (
                        <div key={index} className="h-screen flex flex-col justify-center px-6 lg:px-20 relative">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ amount: 0.5 }}
                                className="space-y-6"
                            >
                                <span className="text-electric-blue font-mono text-sm tracking-[0.3em] uppercase block">
                                    0{index + 1} // {chapter.title}
                                </span>
                                <h3 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter text-foreground">
                                    {chapter.highlight}
                                </h3>
                                <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-md">
                                    {chapter.text}
                                </p>
                            </motion.div>
                        </div>
                    ))}

                    {/* Call to Action at the end */}
                    <div className="h-[50vh] flex items-center px-6 lg:px-20 pb-20">
                        <Link
                            href="/about"
                            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-foreground text-background font-bold text-lg rounded-full overflow-hidden transition-all shadow-xl"
                        >
                            <span className="relative z-10 flex items-center gap-2 group-hover:text-background transition-colors duration-300">
                                Start Your Journey <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 bg-electric-blue transform translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
