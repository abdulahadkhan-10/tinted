"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MoveUpRight, Zap, Target, Palette, Box } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Social Media",
        desc: "Data-driven storytellng and viral growth strategies for the next generation.",
        icon: <Zap className="w-8 h-8" />,
        color: "from-blue-600 to-indigo-800",
        image: "https://images.unsplash.com/photo-1724862936518-ae7fcfc052c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D",
        delay: 0.1
    },
    {
        id: 2,
        title: "Digital Marketing",
        desc: "Performance marketing that actually converts culture into capital.",
        icon: <Target className="w-8 h-8" />,
        color: "from-indigo-600 to-purple-800",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        delay: 0.2
    },
    {
        id: 3,
        title: "Influencer Mgmt",
        desc: "Connecting the world's biggest brands with the most authentic voices.",
        icon: <Palette className="w-8 h-8" />,
        color: "from-purple-600 to-pink-800",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
        delay: 0.3
    },
    {
        id: 4,
        title: "Web Development",
        desc: "High-performance digital experiences built for speed and aesthetics.",
        icon: <Box className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-700",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        delay: 0.4
    }
];

export default function ServiceGrid() {
    return (
        <section className="w-full py-32 px-6 max-w-7xl mx-auto relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-lime/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="space-y-4">
                    <h3 className="text-electric-blue font-mono text-sm tracking-[0.3em] uppercase">Expertise</h3>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                        What we <span className="text-gray-500">Deliver</span>
                    </h2>
                </div>
                <p className="text-gray-400 max-w-sm text-lg font-light">
                    We combine cutting-edge tech with raw creativity to build unstoppable digital presence.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                    <Link href={`/services/${service.title.toLowerCase().replace(' ', '-')}`} key={service.id}>
                        <motion.div
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: service.delay }}
                            viewport={{ once: true }}
                            className="group relative h-[380px] rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden border border-white/10 cursor-pointer shadow-2xl"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-60`} />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                            </div>

                            <div className="relative z-10">
                                <div className="mb-6 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-white/80 text-sm font-medium leading-relaxed group-hover:text-white transition-colors">
                                    {service.desc}
                                </p>
                            </div>

                            <div className="relative z-10 w-full flex justify-end">
                                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:rotate-45">
                                    <MoveUpRight size={20} />
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
