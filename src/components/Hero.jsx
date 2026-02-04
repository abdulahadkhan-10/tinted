"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
            {/* Drifting Background Text */}
            <div className="absolute top-1/2 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none z-0">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
                    className="text-[20rem] font-black uppercase whitespace-nowrap italic"
                >
                    Creative Mastery // Digital Dominance // Tinted Media //
                </motion.div>
            </div>

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

            {/* Production ID Badge - Premium Detail */}
         

            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-electric-blue/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-electric-purple/20 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-20 text-center mb-10 mt-10"
            >
                <Image
                    src="/logo (2).png"
                    alt="Tinted Media"
                    width={450}
                    height={150}
                    className="mx-auto h-auto max-w-[80%] md:max-w-[450px] drop-shadow-[0_0_30px_rgba(42,102,255,0.4)]"
                    priority
                />
                <p className="text-gray-400 mt-6 uppercase tracking-[0.5em] text-sm font-light">
                    Your Vision Perfectly <span className="text-white font-bold">Tinted</span>
                </p>
            </motion.div>

            {/* High Impact Collage Asset */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="relative z-10 w-full max-w-4xl px-6"
            >
                <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden premium-glass p-2 animate-float">
                    {/* Tape Details */}
                    <div className="absolute top-[-10px] left-[10%] w-32 h-10 bg-white/10 backdrop-blur-md rotate-[-5deg] z-20 border border-white/5 shadow-sm" />
                    <div className="absolute bottom-[-10px] right-[10%] w-32 h-10 bg-white/10 backdrop-blur-md rotate-[-5deg] z-20 border border-white/5 shadow-sm" />

                    <Image
                        src="/gad 3.png"
                        alt="Creative Vision"
                        fill
                        className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent opacity-60" />
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2 z-20"
            >
                <div className="w-1 h-2 bg-electric-blue rounded-full" />
            </motion.div>
        </section>
    );
}
