"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Showreel() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-12 md:py-24 px-6">
            <div
                className="max-w-7xl mx-auto relative group overflow-hidden rounded-[3rem] aspect-video bg-gray-900 border border-white/5 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Placeholder Video / Image */}
                <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=80"
                    alt="Showreel Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Interactive Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                    <motion.div
                        animate={{
                            scale: isHovered ? [1, 1.1, 1] : 1,
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-8 relative group"
                    >
                        <div className="absolute inset-0 rounded-full bg-electric-blue/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Play fill="white" className="w-10 h-10 md:w-12 md:h-12 text-white ml-2 relative z-10" />
                    </motion.div>

                    <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none select-none">
                        Show<span className="text-gray-500 italic">reel</span>
                    </h2>
                </div>

                {/* Corner Accents */}
             

                <div className="absolute bottom-12 right-12">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/60">© 2026 Tinted Media</span>
                </div>
            </div>
        </section>
    );
}
