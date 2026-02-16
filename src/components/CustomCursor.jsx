"use client";
import React, { useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    // We use MotionValues for position - these do NOT trigger React re-renders when they change
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const cursorScale = useMotionValue(1);
    const innerOpacity = useMotionValue(1);
    const innerScale = useMotionValue(1);

    // Smooth springs for the outer ring
    const springConfig = { damping: 45, stiffness: 400, mass: 0.4 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // 1. Position update is pure MotionValue - zero React overhead
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        // 2. State-less hover detection using event delegation
        // Instead of useState, we update MotionValues directly
        const handleOver = (e) => {
            const target = e.target;
            const magneticEl = target.closest('.magnetic');
            const interactiveEl = target.closest('a, button, .interactive');

            if (magneticEl) {
                cursorScale.set(1.5);
                innerOpacity.set(0.8);
                innerScale.set(0.5);
            } else if (interactiveEl) {
                cursorScale.set(1.6);
                innerOpacity.set(0.2);
                innerScale.set(4);
            } else {
                cursorScale.set(1);
                innerOpacity.set(1);
                innerScale.set(1);
            }
        };

        window.addEventListener("mousemove", moveCursor, { passive: true });
        window.addEventListener("mouseover", handleOver, { passive: true });

        // Hide real cursor on body
        document.body.style.cursor = "none";

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleOver);
            document.body.style.cursor = "auto";
        };
    }, []); // Empty dependency array means this only runs once

    return (
        <>
            {/* Outer Ring - Spring based for weighted feel */}
            <motion.div
                className="fixed top-0 left-0 rounded-full border border-electric-blue/40 pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    width: 40,
                    height: 40,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: cursorScale,
                }}
            />

            {/* Inner Dot - Low latency (no spring) */}
            <motion.div
                className="fixed top-0 left-0 bg-electric-blue rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    width: 6,
                    height: 6,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: innerScale,
                    opacity: innerOpacity,
                }}
            />
        </>
    );
}
