"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
    { label: "Projects Delivered", value: "300+", suffix: "" },
    { label: "Global Clients", value: "250+", suffix: "" },
    { label: "Team Members", value: "100+", suffix: "" },
    { label: "Years Experience", value: "10+", suffix: "" },
];

export default function StatsSection() {
    return (
        <section className="py-24 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="magnetic text-center space-y-2 group cursor-pointer"
                        >
                            <h4 className="text-4xl md:text-6xl font-black text-black tracking-tighter group-hover:text-electric-blue transition-colors duration-500">
                                {stat.value}
                            </h4>
                            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">
                                {stat.label}
                            </p>
                            <div className="h-[2px] w-0 bg-electric-blue group-hover:w-12 transition-all duration-500 mx-auto" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
