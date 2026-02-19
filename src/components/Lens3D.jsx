"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Environment,
    Float,
    PerspectiveCamera,
    MeshDistortMaterial
} from "@react-three/drei";
import * as THREE from "three";

function LiquidChrome({ scrollProgress }) {
    const meshRef = useRef();
    const materialRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const scroll = scrollProgress.get();

        if (meshRef.current) {
            // Constant subtle rotation
            meshRef.current.rotation.x = t * 0.1;
            meshRef.current.rotation.y = t * 0.15;

            // Dynamic scale pulse
            const s = 1.8 + Math.sin(t * 0.5) * 0.1;
            meshRef.current.scale.set(s, s, s);
        }

        if (materialRef.current) {
            // PHASE 1: NOISE (Scroll 0.0 - 0.3)
            // PHASE 2: FOCUS (Scroll 0.3 - 0.6)
            // PHASE 3: TINT (Scroll 0.6 - 1.0)

            // Calculate distort based on scroll
            // Starts high (0.5), goes to near zero (0.0) as we scroll down
            const targetDistort = THREE.MathUtils.lerp(0.5, 0.0, scroll * 1.5);
            materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, targetDistort, 0.05);

            // Calculate speed
            const targetSpeed = THREE.MathUtils.lerp(4, 1, scroll);
            materialRef.current.speed = THREE.MathUtils.lerp(materialRef.current.speed, targetSpeed, 0.05);

            // Calculate Color/Tint logic
            // We want it silver for most of it, then turning blue at the end (The Tint)
            const tintStrength = Math.max(0, (scroll - 0.5) * 2.0);

            const baseColor = new THREE.Color("#ffffff");
            const tintColor = new THREE.Color("#2a66ff");

            materialRef.current.color.lerpColors(baseColor, tintColor, tintStrength);

            // Emissive glow logic
            const baseEmissive = new THREE.Color("#000000");
            const targetEmissive = new THREE.Color("#001133");
            materialRef.current.emissive.lerpColors(baseEmissive, targetEmissive, tintStrength);
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1, 128, 128]} />
            <MeshDistortMaterial
                ref={materialRef}
                color="#ffffff"
                envMapIntensity={1}
                clearcoat={1}
                clearcoatRoughness={0}
                metalness={0.9}
                roughness={0.1}
                distort={0.5}
                speed={4}
            />
        </mesh>
    );
}

export default function Lens3D({ scrollProgress }) {
    return (
        <div className="w-full h-full">
            <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
                <ambientLight intensity={0.5} />

                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={2} color="#2a66ff" />

                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                    <LiquidChrome scrollProgress={scrollProgress} />
                </Float>

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
