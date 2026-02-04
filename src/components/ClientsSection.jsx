"use client";
import React from "react";
import { motion } from "framer-motion";

const clients = [
    "NIVEA", "OPPO", "TITAN", "REDBULL",
    "PEPSI", "ADIDAS", "ZEB-TECH", "SONY",
    "NIVEA", "OPPO", "TITAN", "REDBULL" // Duplicate for smooth marquee
];

export default function ClientsSection() {
    return (
        <section className="w-full py-24 bg-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h2 className="text-black text-xs font-black uppercase tracking-[0.5em] text-center opacity-40">
                    A Global Partner Network
                </h2>
            </div>

            <div
                className="relative flex overflow-hidden group py-24 bg-white select-none pointer-events-none"
                style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
            >
                <motion.div
                    animate={{ x: [0, "-50%"] }}
                    transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
                    className="flex whitespace-nowrap"
                >
                    {/* Duplicating the list many times to ensure a massive width and flawless loop */}
                    {[...clients, ...clients, ...clients, ...clients, ...clients, ...clients].map((client, i) => (
                        <span
                            key={i}
                            className="text-7xl md:text-[10rem] font-black text-black tracking-tighter uppercase italic px-20 flex-shrink-0"
                        >
                            {client}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
