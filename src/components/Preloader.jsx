"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsVisible(false), 500);
                    return 100;
                }
                const diff = Math.random() * 15;
                return Math.min(oldProgress + diff, 100);
            });
        }, 150);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center"
                >
                    {/* Centered Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative w-48 md:w-64 h-24 mb-12"
                    >
                        <Image
                            src="/logo (1).png"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </motion.div>

                    {/* Minimal Progress Bar */}
                    <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-electric-blue"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Technical Status */}
                    <div className="mt-8 text-white/40 font-mono text-[10px] tracking-[0.5em] uppercase text-center space-y-2">
                        <motion.p
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            Initializing Optical Core // {Math.round(progress)}%
                        </motion.p>
                        <p>Subsystem: {progress > 80 ? 'Active' : 'Calibrating'}</p>
                    </div>

                    {/* Bottom Branding */}
                    <div className="absolute bottom-12 text-white/20 font-mono text-[8px] uppercase tracking-[0.8em]">
                        Tinted Media Systems v1.0
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
