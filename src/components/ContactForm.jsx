"use client";
import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
    return (
        <section className="py-32 px-6 bg-white border-t border-gray-100 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-electric-blue font-mono text-[10px] tracking-[0.4em] uppercase">Connect</h3>
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-black">
                            Let's work <br /> <span className="text-gray-400 italic font-light">Together</span>
                        </h2>
                    </div>
                    <p className="text-gray-600 max-w-md text-lg font-light leading-relaxed">
                        Ready to elevate your digital presence? Send us a message and our team will get back to you within 24 hours.
                    </p>
                    <div className="space-y-4 pt-8">
                        <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-500">Fast Forward</p>
                        <a href="mailto:hello@tintedmedia.co" className="text-2xl font-light hover:text-electric-blue transition-colors text-black">
                            hello@tintedmedia.co
                        </a>
                    </div>
                </div>

                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-4">Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-black placeholder:text-gray-300 focus:outline-none focus:border-electric-blue transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-4">Email</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-black placeholder:text-gray-300 focus:outline-none focus:border-electric-blue transition-colors"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-4">Subject</label>
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-gray-600 focus:outline-none focus:border-electric-blue transition-colors appearance-none cursor-pointer">
                            <option>Select a Service</option>
                            <option>Social Media</option>
                            <option>Digital Marketing</option>
                            <option>Content Creation</option>
                            <option>Web Design</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-4">Message</label>
                        <textarea
                            rows="4"
                            placeholder="Tell us about your project..."
                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-black placeholder:text-gray-300 focus:outline-none focus:border-electric-blue transition-colors"
                        />
                    </div>
                    <button className="w-full bg-electric-blue py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs text-white flex items-center justify-center gap-3 group hover:bg-black transition-all">
                        Send Message
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
