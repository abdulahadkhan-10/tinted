"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 w-full z-[100] px-6 py-0 md:px-12 flex justify-between items-center bg-[#05070a]/80 backdrop-blur-xl border-b border-white/5 h-20 md:h-24"
        >
            <div className="relative w-32 md:w-48 h-full flex items-center">
                <Link href="/" className="absolute left-0 top-1/2 -translate-y-1/2 block group z-10 w-[180px] md:w-[280px]">
                    <Image
                        src="/logo (1).png"
                        alt="Tinted Media Logo"
                        width={600}
                        height={200}
                        className="w-full h-auto object-contain transition-transform group-hover:scale-105"
                        priority
                    />
                </Link>
            </div>

            {/* Absolutely Centered Links */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-16">
                {['About', 'Work', 'Services', 'UGC', 'Contact'].map((item) => (
                    <Link
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        className="relative text-xs uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-white transition-colors group/link"
                    >
                        {item}
                        <motion.div
                            className="absolute -bottom-1 left-0 w-0 h-[1px] bg-electric-blue transition-all duration-300 group-hover/link:w-full"
                        />
                    </Link>
                ))}
            </div>

            <Link
                href="/contact"
                className="group relative px-8 py-2.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full overflow-hidden transition-all transform hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.15)] z-10"
            >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Enquire</span>
                <div className="absolute inset-0 bg-electric-blue transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
        </motion.nav>
    );
}
