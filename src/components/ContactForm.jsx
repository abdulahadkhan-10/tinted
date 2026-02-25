"use client";
import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Image from "next/image";

export default function ContactForm() {
    return (
        <section id="contact" className="py-20 px-6 bg-white border-t border-gray-100 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                {/* Header Row */}
                <div className="mb-12">
                    <h3 className="text-electric-blue font-mono text-[10px] tracking-[0.4em] uppercase mb-2">Connect</h3>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-black">
                        Let's work <span className="text-gray-400 italic font-light">Together</span>
                    </h2>
                </div>

                {/* Main 3-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr_1fr] gap-8 items-start">

                    {/* Left Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col gap-6"
                    >
                        {/* PLUG image — dominant, hero */}
                        <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                            <Image
                                src="/connect/PLUG.jpg"
                                alt="Let's Connect"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Info blurb below */}
                        <div className="space-y-4 pl-1">
                            <p className="text-gray-500 text-sm font-light leading-relaxed">
                                Ready to plug in? Send us a message and we'll get back to you soon.
                            </p>
                            <div className="space-y-3">
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400">Collab</p>
                                    <a href="mailto:collab@tintedmedia.com" className="text-sm font-medium hover:text-electric-blue transition-colors text-black">
                                        collab@tintedmedia.com
                                    </a>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400">Interview</p>
                                    <a href="mailto:join@tintedmedia.com" className="text-sm font-medium hover:text-electric-blue transition-colors text-black">
                                        join@tintedmedia.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Centre — Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-5 bg-gray-50/60 border border-black/5 rounded-3xl p-8 shadow-sm"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-black text-sm placeholder:text-gray-300 focus:outline-none focus:border-electric-blue transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-black text-sm placeholder:text-gray-300 focus:outline-none focus:border-electric-blue transition-colors"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Subject</label>
                            <select className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-gray-500 text-sm focus:outline-none focus:border-electric-blue transition-colors appearance-none cursor-pointer">
                                <option>Select a Service</option>
                                <option>Social Media</option>
                                <option>Digital Marketing</option>
                                <option>Content Creation</option>
                                <option>Talent Management</option>
                                <option>BTS Production</option>
                                <option>UGC</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Tell us about your project..."
                                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-black text-sm placeholder:text-gray-300 focus:outline-none focus:border-electric-blue transition-colors resize-none"
                            />
                        </div>
                        <button className="w-full bg-black py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs text-white flex items-center justify-center gap-3 group hover:bg-electric-blue transition-all duration-300">
                            Send Message
                            <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.form>

                    {/* Right Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="flex flex-col gap-6 items-end lg:items-center"
                    >
                        {/* Phone illustration — slightly smaller, offset */}
                        <div className="relative w-[85%] aspect-square rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/connect/IMG_4647 2.JPG"
                                alt="Get in touch"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Decorative tag */}
                        <div className="bg-black text-white rounded-2xl px-5 py-4 text-center w-[85%]">
                            <p className="text-[9px] uppercase tracking-[0.4em] text-white/60 mb-1">Let's make something</p>
                            <p className="text-xl font-black tracking-tighter">Memorable.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
