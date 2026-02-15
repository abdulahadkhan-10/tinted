"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, Sparkles, PlayCircle } from "lucide-react";

export default function ContentGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-7xl mx-auto bg-white">
            {/* BTS Section - Industrial/Tech Aesthetic */}
            <Link href="/bts" className="group">
                <motion.div
                    whileHover={{ y: -12 }}
                    className="h-[500px] border border-black/5 bg-gray-50 relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
                >
                    {/* Edge Glow */}
                    <div className="absolute inset-0 border border-black/5 rounded-[2.5rem] pointer-events-none z-20" />
                    {/* Scanning Line Effect */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-electric-blue/20 blur-sm animate-[scan_4s_linear_infinite]" />

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.05]"
                        style={{ backgroundImage: "linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

                    <div className="absolute top-10 left-10 space-y-2">
                        <span className="px-3 py-1 border border-electric-blue text-electric-blue font-mono text-[10px] uppercase tracking-widest rounded-full">System // Online</span>
                        <h3 className="text-4xl font-black uppercase tracking-tighter text-foreground">Behind <br /> The Scenes</h3>
                    </div>

                    <div className="absolute bottom-10 left-10 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center border border-black/10 group-hover:bg-electric-blue group-hover:border-electric-blue transition-all duration-500">
                            <Camera className="w-5 h-5 text-foreground group-hover:text-white group-hover:scale-110 transition-all" />
                        </div>
                        <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Explore Process</span>
                    </div>

                    <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 text-[12rem] font-black text-black/[0.02] select-none group-hover:text-electric-blue/[0.05] transition-colors duration-1000 uppercase">
                        BTS
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
                </motion.div>
            </Link>

            {/* UGC Section - Ethereal/Fluid Aesthetic */}
            <Link href="/ugc" className="group">
                <motion.div
                    whileHover={{ y: -12 }}
                    className="h-[500px] border border-black/5 bg-gradient-to-br from-electric-blue/10 via-white to-gray-50 relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
                >
                    {/* Edge Glow */}
                    <div className="absolute inset-0 border border-black/5 rounded-[2.5rem] pointer-events-none z-20" />
                    {/* Abstract Orbs */}
                    <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-electric-blue/10 blur-[100px] rounded-full group-hover:scale-125 transition-transform duration-1000" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-electric-purple/10 blur-[100px] rounded-full group-hover:scale-125 transition-transform duration-1000" />

                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 mix-blend-overlay"></div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                        <div className="relative mb-8">
                            <Sparkles className="w-20 h-20 text-electric-blue animate-pulse" />
                            <div className="absolute inset-0 bg-electric-blue/10 blur-2xl rounded-full" />
                        </div>
                        <h3 className="text-6xl font-black text-foreground italic tracking-tighter drop-shadow-xl mb-4 group-hover:scale-105 transition-transform duration-500">
                            UGC <span className="text-electric-blue text-4xl block not-italic mt-2">Empire</span>
                        </h3>
                        <p className="text-gray-600 font-medium max-w-[200px] text-sm uppercase tracking-widest leading-relaxed">
                            Powering community driven growth
                        </p>
                    </div>

                    <div className="absolute bottom-10 w-full flex justify-center">
                        <div className="flex items-center gap-2 text-gray-400 group-hover:text-foreground transition-colors">
                            <PlayCircle className="w-5 h-5" />
                            <span className="text-[10px] uppercase font-bold tracking-[0.3em]">View Showcase</span>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </div>
    );
}
