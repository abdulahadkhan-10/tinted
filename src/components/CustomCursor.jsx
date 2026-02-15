"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [hoverType, setHoverType] = useState(null); // null, 'magnetic', 'large'
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Optimized springs
    const springConfig = { damping: 40, stiffness: 300, mass: 0.4 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleOver = (e) => {
            const target = e.target;
            const magneticEl = target.closest('.magnetic');
            const interactiveEl = target.closest('a, button, .interactive');

            if (magneticEl) {
                const rect = magneticEl.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Static magnetic pull - only snap center if very close
                // Otherwise just use large hover
                setHoverType('magnetic');
                // We don't overwrite cursor position here anymore to prevent lag
                // The physics should happen in the animation layer
            } else if (interactiveEl) {
                setHoverType('large');
            } else {
                setHoverType(null);
            }
        };

        window.addEventListener("mousemove", moveCursor, { passive: true });
        window.addEventListener("mouseover", handleOver, { passive: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 rounded-full border border-electric-blue/40 pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    width: 40,
                    height: 40,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: hoverType === 'magnetic' ? 1.5 : hoverType === 'large' ? 1.2 : 1,
                    backgroundColor: hoverType === 'magnetic' ? 'rgba(42, 102, 255, 0.1)' : 'transparent',
                }}
            />

            <motion.div
                className="fixed top-0 left-0 bg-electric-blue rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    width: 6,
                    height: 6,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: hoverType ? 2 : 1,
                    opacity: hoverType === 'large' ? 0.3 : 1
                }}
            />
        </>
    );
}
