"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section className="w-full py-32 px-6 max-w-7xl mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* Visual Asset Side */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex-1 relative group"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-electric-blue to-neon-lime opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src="/Stop.png"
                            alt="Stop Posting Start Marketing"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </motion.div>

                {/* Text Content Side */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-8"
                >
                    <div className="space-y-4">
                        <h3 className="text-neon-lime font-mono text-sm tracking-[0.3em] uppercase">Behind the lens</h3>
                        <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter">
                            Crafting <br />
                            <span className="gradient-text italic">Digital Legacies.</span>
                        </h2>
                    </div>

                    <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                        At Tinted Media, we don't just "post" content. We architect visual experiences that command attention.
                        Born in the digital age, we speak the language of Gen Z while delivering results for the world's biggest brands.
                    </p>

                    <div className="pt-4">
                        <Link
                            href="/about"
                            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all"
                        >
                            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                                Discover More <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 bg-electric-blue transform translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
