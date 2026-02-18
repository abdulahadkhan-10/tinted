"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Snappier, less "heavy" spring config
    const springConfig = { damping: 30, stiffness: 500, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleOver = (e) => {
            // Simple check for interactive elements
            if (e.target.closest('a, button, .interactive, [role="button"]')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor, { passive: true });
        window.addEventListener("mouseover", handleOver, { passive: true });

        // Hide real cursor on desktop
        document.body.style.cursor = "none";

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleOver);
            document.body.style.cursor = "auto";
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Outer Circle - Snappy Scale */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-electric-blue/60 pointer-events-none z-[9999] hidden md:block will-change-transform"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovered ? 2.5 : 1,
                    backgroundColor: isHovered ? "rgba(42, 102, 255, 0.15)" : "transparent",
                    borderColor: isHovered ? "rgba(42, 102, 255, 1)" : "rgba(42, 102, 255, 0.6)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
            />

            {/* Inner Point - Direct Tracking */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-electric-blue rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
}
