"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    MeshTransmissionMaterial,
    Environment,
    Float,
    PerspectiveCamera,
    ContactShadows,
    AdaptiveDpr,
} from "@react-three/drei";

function OpticalCore({ scrollProgress }) {
    const coreRef = useRef();
    const ring1Ref = useRef();
    const ring2Ref = useRef();
    const ring3Ref = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const scroll = scrollProgress.get();

        // Core Rotation & Scale
        if (coreRef.current) {
            coreRef.current.rotation.y = scroll * Math.PI * 2;
            coreRef.current.rotation.z = Math.sin(t * 0.5) * 0.1;
            const s = 1 + scroll * 0.2;
            coreRef.current.scale.set(s, s, s);
        }

        // Mechanical Rings Animation - Optimized to only run if visible/scrolling
        if (ring1Ref.current) {
            ring1Ref.current.rotation.x = t * 0.2 + scroll * 4;
            ring1Ref.current.rotation.y = scroll * 2;
        }
        if (ring2Ref.current) {
            ring2Ref.current.rotation.z = -t * 0.3 - scroll * 6;
            ring2Ref.current.rotation.x = scroll * 3;
        }
        if (ring3Ref.current) {
            ring3Ref.current.rotation.y = t * 0.1 + scroll * 8;
            ring3Ref.current.rotation.z = scroll * 4;
        }
    });

    return (
        <group>
            {/* The Glass Central Lens - Dramatically reduced geometry for performance */}
            <mesh ref={coreRef}>
                <sphereGeometry args={[1.2, 24, 24]} />
                <MeshTransmissionMaterial
                    backside
                    samples={4} // Bare minimum for refractive effect
                    thickness={0.5}
                    chromaticAberration={0.05}
                    anisotropy={0.1}
                    distortion={0.1}
                    distortionScale={0.1}
                    temporalDistortion={0.1}
                    clearcoat={0.5}
                    attenuationDistance={1}
                    color="#e0f2fe"
                    roughness={0.1}
                    transmission={1}
                />
            </mesh>

            {/* Inner Glow Sphere */}
            <mesh scale={0.8}>
                <sphereGeometry args={[1, 16, 16]} />
                <meshStandardMaterial
                    color="#0066ff"
                    emissive="#0066ff"
                    emissiveIntensity={1.5}
                    toneMapped={false}
                    transparent
                    opacity={0.3}
                />
            </mesh>

            {/* Kinetic Technology Rings - Simplified to basic segments */}
            <group ref={ring1Ref}>
                <mesh>
                    <torusGeometry args={[1.8, 0.015, 8, 64]} />
                    <meshStandardMaterial color="#0066ff" emissive="#0066ff" emissiveIntensity={0.5} />
                </mesh>
            </group>

            <group ref={ring2Ref}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[2.1, 0.01, 8, 64]} />
                    <meshStandardMaterial color="#111" roughness={0.5} metalness={1} />
                </mesh>
            </group>

            <group ref={ring3Ref}>
                <mesh rotation={[0, Math.PI / 4, 0]}>
                    <torusGeometry args={[2.4, 0.005, 8, 64]} />
                    <meshStandardMaterial color="#0066ff" emissive="#0066ff" emissiveIntensity={1} />
                </mesh>
            </group>
        </group>
    );
}

export default function Lens3D({ scrollProgress }) {
    return (
        <div className="w-full h-full">
            <Canvas
                dpr={[1, 1.5]} // Capped at 1.5 for performance
                gl={{
                    antialias: false, // Disabling antialias for major performance gain 
                    alpha: true,
                    powerPreference: "high-performance"
                }}
                performance={{ min: 0.5 }} // Allows Three.js to drop detail if FPS drops
            >
                <AdaptiveDpr pixelated />
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />

                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                    <OpticalCore scrollProgress={scrollProgress} />
                </Float>

                <Environment preset="night" />
                <ContactShadows
                    position={[0, -3.5, 0]}
                    opacity={0.2}
                    scale={8}
                    blur={3}
                    far={4}
                />
            </Canvas>
        </div>
    );
}
