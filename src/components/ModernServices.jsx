"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
    {
        id: "01",
        title: "Film & Photography",
        desc: "High-end cinematic production and professional photography that captures the essence of your brand.",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "02",
        title: "Digital Marketing",
        desc: "Performance-driven strategies that amplify your reach and convert audiences into loyal customers.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "03",
        title: "Web Development",
        desc: "Seamless, high-performance digital experiences built with the latest technologies.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "04",
        title: "Graphic Design",
        desc: "Cutting-edge visual identities and artistic designs that set you apart from the competition.",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80"
    }
];

export default function ModernServices() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="py-32 bg-[#05070a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-electric-blue font-mono text-[10px] tracking-[0.4em] uppercase">Our Expertise</h3>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                            Our <br /> <span className="text-gray-500 italic font-light">Services</span>
                        </h2>
                    </div>
                </div>

                <div className="relative border-t border-white/10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative border-b border-white/10 py-12 md:py-16 cursor-pointer flex flex-col md:flex-row md:items-center justify-between transition-all duration-500"
                        >
                            <div className="flex items-center gap-8 md:gap-16 z-10 transition-transform duration-500 group-hover:translate-x-4">
                                <span className="text-xl md:text-2xl font-mono text-electric-blue/50 group-hover:text-electric-blue">
                                    {service.id}
                                </span>
                                <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-gray-400 group-hover:text-white transition-colors duration-500">
                                    {service.title}
                                </h3>
                            </div>

                            <div className="mt-6 md:mt-0 flex items-center gap-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-10 group-hover:translate-x-0">
                                <p className="hidden md:block text-gray-200 max-w-sm text-right text-sm font-medium leading-relaxed">
                                    {service.desc}
                                </p>
                                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-electric-blue group-hover:border-electric-blue transition-all duration-500">
                                    <ArrowRight className="text-white group-hover:rotate-[-45deg] transition-transform duration-500" />
                                </div>
                            </div>

                            {/* Hover Image Reveal - Optimized size and position */}
                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, x: 50, rotate: 5 }}
                                        animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, x: 50, rotate: 5 }}
                                        className="fixed top-1/2 right-[5%] -translate-y-1/2 w-[280px] md:w-[350px] aspect-[3/4] rounded-2xl overflow-hidden pointer-events-none z-[5] hidden lg:block shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
