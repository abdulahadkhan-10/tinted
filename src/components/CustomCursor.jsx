"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export default function CustomCursor() {
    const [hoverType, setHoverType] = useState(null); // null, 'magnetic', 'large'
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth springs for a "premium" weighted feel
    const springConfig = { damping: 35, stiffness: 250, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const outerSize = 40;
    const innerSize = 6;

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX, clientY } = e;

            // Check for magnetic elements
            const hoveredEl = document.elementFromPoint(clientX, clientY);
            const magneticEl = hoveredEl?.closest('.magnetic');

            if (magneticEl) {
                const rect = magneticEl.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Pull toward center (Magnetic effect)
                const pullX = centerX + (clientX - centerX) * 0.4;
                const pullY = centerY + (clientY - centerY) * 0.4;

                cursorX.set(pullX);
                cursorY.set(pullY);
                setHoverType('magnetic');
            } else {
                cursorX.set(clientX);
                cursorY.set(clientY);

                // Regular interactive check
                if (hoveredEl?.closest('a, button, .interactive')) {
                    setHoverType('large');
                } else {
                    setHoverType(null);
                }
            }
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Outer Magnetic Ring */}
            <motion.div
                className="fixed top-0 left-0 rounded-full border border-electric-blue/40 pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    width: outerSize,
                    height: outerSize,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: hoverType === 'magnetic' ? 1.8 : hoverType === 'large' ? 1.5 : 1,
                    borderWidth: hoverType === 'magnetic' ? '1px' : '1px',
                    borderColor: hoverType === 'magnetic' ? 'rgb(42, 102, 255)' : 'rgba(42, 102, 255, 0.4)',
                    backgroundColor: hoverType === 'magnetic' ? 'rgba(42, 102, 255, 0.05)' : 'transparent',
                }}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
            />

            {/* The "Tint" Bleed / Core */}
            <motion.div
                className="fixed top-0 left-0 bg-electric-blue rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    width: innerSize,
                    height: innerSize,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: hoverType === 'magnetic' ? 0.5 : hoverType === 'large' ? 4 : 1,
                    opacity: hoverType === 'large' ? 0.2 : 1,
                    backgroundColor: hoverType === 'magnetic' ? '#55c2ff' : '#2a66ff',
                }}
            />

            {/* Subtle trailing glow */}
            <motion.div
                className="fixed top-0 left-0 w-32 h-32 bg-electric-blue/5 blur-3xl rounded-full pointer-events-none z-[9998] hidden md:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
}
