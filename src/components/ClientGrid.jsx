"use client";
import React from "react";
import { motion } from "framer-motion";

const clients = [
    "NIVEA", "OPPO", "TITAN", "REDBULL",
    "PEPSI", "ADIDAS", "ZEB-TECH", "SONY",
    "NETFLIX", "GUCCI", "PRADA", "BMW",
    "AUDI", "NIKE", "PUMA", "NESTLE"
];

export default function ClientGrid() {
    return (
        <section className="py-32 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-electric-blue font-mono text-[15px] tracking-[0.4em] uppercase mb-4">Integrations</h3>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground">
                        Global <span className="text-gray-400 italic font-light">Network</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-black/5">
                    {clients.map((client, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="h-40 border-r border-b border-black/5 flex items-center justify-center group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-black/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            <span className="text-2xl md:text-3xl font-black text-black/10 group-hover:text-foreground transition-all duration-500 tracking-tighter uppercase italic z-10">
                                {client}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
