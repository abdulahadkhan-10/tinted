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
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-10 items-start">

                    {/* LEFT: STICKY VISUAL */}
                    <div className="w-full lg:w-1/2 sticky top-0 h-[60vh] lg:h-screen flex items-center justify-center z-10">
                        <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">

                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-electric-blue/5 blur-[100px] rounded-full opacity-30" />

                            {/* 3D Core */}
                            <div className="w-full h-full">
                                <Lens3D scrollProgress={scrollYProgress} />
                            </div>

                            {/* Technical Labels */}
                            <motion.div
                                style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.5em] text-gray-400 font-mono"
                            >
                                SYS // OPTICAL_CORE_v1
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT: SCROLLING CONTENT */}
                    <div className="w-full lg:w-1/2">
                        {/* Initial Spacer to allow visual to be seen alone */}
                        <div className="h-[20vh] lg:h-[40vh]" />

                        {chapters.map((chapter, index) => (
                            <div key={index} className="min-h-screen flex flex-col justify-center py-20">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ amount: 0.6 }}
                                    className="space-y-8"
                                >
                                    <span className="text-electric-blue font-mono text-xs tracking-[0.4em] uppercase">
                                        Phase // 0{index + 1}
                                    </span>
                                    <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-black">
                                        {chapter.highlight}
                                    </h3>
                                    <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-md">
                                        {chapter.text}
                                    </p>
                                </motion.div>
                            </div>
                        ))}

                        {/* FINAL CTA */}
                        <div className="h-screen flex items-center pt-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="space-y-10"
                            >
                                <h3 className="text-4xl font-black uppercase tracking-tighter text-black">
                                    Ready to change <br /> your <span className="text-electric-blue italic font-light">perspective?</span>
                                </h3>
                                <Link
                                    href="/contact"
                                    className="magnetic group relative inline-flex items-center gap-6 px-12 py-6 bg-black text-white font-black text-sm uppercase tracking-widest rounded-full overflow-hidden transition-all shadow-2xl"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Start Your Journey <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </span>
                                    <div className="absolute inset-0 bg-electric-blue transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
