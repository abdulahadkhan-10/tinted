"use client";
import React, { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceLens from "@/components/ServiceLens";
import { servicesData } from "@/data/servicesData";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ServicePage({ params }) {
    const { slug } = use(params);
    const data = servicesData[slug] || {
        title: slug.split('-').join(' ').toUpperCase(),
        subtitle: "",
        description: "Innovative storytelling solutions for the modern digital era.",
        features: []
    };

    return (
        <main className="min-h-screen bg-white text-black selection:bg-electric-blue selection:text-white">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-40 pb-32 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
                <ServiceLens color="#0066ff" />

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-electric-blue font-mono text-sm tracking-[0.5em] uppercase mb-8">
                            Service // {slug.replace(/-/g, ' ')}
                        </h3>
                        <h1 className="text-7xl md:text-[12rem] font-black uppercase leading-[0.8] tracking-tighter mb-12">
                            {data.title} <br />
                            <span className="text-gray-300 italic font-light">{data.subtitle}</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-gray-600 max-w-3xl font-light leading-snug mb-12">
                            {data.description}
                        </p>

                        <Link
                            href="/contact"
                            className="magnetic inline-flex items-center gap-4 px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-electric-blue transition-all"
                        >
                            Start a Project <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CORE VALUE PILLARS */}
            <section className="py-32 px-6 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <h3 className="text-gray-400 font-mono text-xs tracking-[0.4em] uppercase mb-4">The Impact</h3>
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Strategic <span className="text-electric-blue italic font-light">Value</span></h2>
                        </div>
                        <p className="text-gray-500 max-w-sm font-medium">
                            Every execution is a calculated move designed to capture attention and convert it into brand equity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {data.features.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-12 rounded-[3.5rem] bg-white border border-black/5 hover:border-electric-blue/20 transition-all hover:shadow-2xl hover:shadow-electric-blue/5"
                            >
                                <div className="w-16 h-16 rounded-3xl bg-black text-white flex items-center justify-center mb-8 group-hover:bg-electric-blue transition-colors">
                                    <span className="text-2xl font-black">0{i + 1}</span>
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-light text-lg">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-40 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black z-0" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="space-y-12"
                    >
                        <h2 className="text-5xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none">
                            Ready to <br /> <span className="text-electric-blue italic font-light">Dominate?</span>
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link
                                href="/contact"
                                className="magnetic w-full md:w-auto px-12 py-6 bg-white text-black rounded-full font-black uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all text-sm"
                            >
                                Book a Discovery Call
                            </Link>
                            <Link
                                href="/work"
                                className="magnetic w-full md:w-auto px-12 py-6 border border-white/20 text-white rounded-full font-black uppercase tracking-widest hover:border-white transition-all text-sm"
                            >
                                View Our Work
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
