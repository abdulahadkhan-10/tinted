"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    MeshTransmissionMaterial,
    Environment,
    Float,
    PerspectiveCamera,
    ContactShadows
} from "@react-three/drei";
import * as THREE from "three";

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

        // Mechanical Rings Animation
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
            {/* The Glass Central Lens */}
            <mesh ref={coreRef}>
                <sphereGeometry args={[1.2, 32, 32]} />
                <MeshTransmissionMaterial
                    backside
                    samples={6}
                    thickness={0.5}
                    chromaticAberration={0.05}
                    anisotropy={0.1}
                    distortion={0.1}
                    distortionScale={0.1}
                    temporalDistortion={0.1}
                    clearcoat={1}
                    attenuationDistance={0.5}
                    attenuationColor="#ffffff"
                    color="#e0f2fe"
                    roughness={0}
                />
            </mesh>

            {/* Inner Glow Sphere */}
            <mesh scale={0.8}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    color="#0066ff"
                    emissive="#0066ff"
                    emissiveIntensity={2}
                    toneMapped={false}
                    transparent
                    opacity={0.3}
                />
            </mesh>

            {/* Kinetic Technology Rings */}
            <group ref={ring1Ref}>
                <mesh>
                    <torusGeometry args={[1.8, 0.02, 16, 100]} />
                    <meshStandardMaterial color="#0066ff" emissive="#0066ff" emissiveIntensity={0.5} />
                </mesh>
            </group>

            <group ref={ring2Ref}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[2.1, 0.015, 16, 100]} />
                    <meshStandardMaterial color="#333" roughness={0.1} metalness={1} />
                </mesh>
            </group>

            <group ref={ring3Ref}>
                <mesh rotation={[0, Math.PI / 4, 0]}>
                    <torusGeometry args={[2.4, 0.01, 16, 100]} />
                    <meshStandardMaterial color="#0066ff" emissive="#0066ff" emissiveIntensity={1} />
                </mesh>
            </group>

            {/* Floating Dust / Particles for Depth */}
            <Points />
        </group>
    );
}

function Points() {
    const pointsRef = useRef();
    const count = 500;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        pointsRef.current.rotation.y = t * 0.05;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.02} color="#0066ff" transparent opacity={0.4} sizeAttenuation={true} />
        </points>
    );
}

export default function Lens3D({ scrollProgress }) {
    return (
        <div className="w-full h-full">
            <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />

                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#0066ff" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <OpticalCore scrollProgress={scrollProgress} />
                </Float>

                <Environment preset="city" />
                <ContactShadows
                    position={[0, -3.5, 0]}
                    opacity={0.4}
                    scale={10}
                    blur={2}
                    far={4.5}
                />
            </Canvas>
        </div>
    );
}
