"use client";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-black border-t border-white/5 pt-32 pb-10 px-6 relative overflow-hidden">
            {/* Massive Background Text */}
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 text-[15vw] font-black text-white/[0.02] tracking-tighter select-none pointer-events-none uppercase">
                Tinted Media
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 relative z-10">
                <div className="space-y-4">
                    <Image
                        src="/logo (2).png"
                        alt="Tinted Media Logo"
                        width={800}
                        height={260}
                        className="h-16 md:h-24 w-auto object-contain opacity-100"
                    />
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1] uppercase">
                        Start <br /> <span className="gradient-text italic pr-4">Something.</span>
                    </h2>
                </div>

                <div className="flex flex-col justify-end items-start lg:items-end gap-6 pb-2">
                    <div className="space-y-1 lg:text-right">
                        <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Inquiries</p>
                        <a href="mailto:hello@tintedmedia.co" className="text-xl md:text-3xl font-light hover:text-electric-blue transition-colors">
                            hello@tintedmedia.co
                        </a>
                    </div>
                    <div className="space-y-2 lg:text-right">
                        <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Connect</p>
                        <div className="flex gap-3">
                            {[Instagram, Linkedin, Twitter, Mail].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-[0.3em] text-gray-600 border-t border-white/5 pt-10 relative z-10">
                <p>&copy; 2026 Tinted Media. All rights reserved.</p>
                <div className="flex gap-10 mt-6 md:mt-0">
                    <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                    <Link href="#" className="hover:text-white transition-colors">Careers</Link>
                </div>
            </div>
        </footer>
    );
}
