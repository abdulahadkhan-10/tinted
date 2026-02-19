"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    MeshDistortMaterial,
    Sphere,
    Environment,
    Float
} from "@react-three/drei";

function DistortionSphere({ color = "#0066ff" }) {
    const mesh = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.x = t * 0.1;
            mesh.current.rotation.y = t * 0.15;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere args={[1, 100, 100]} scale={2}>
                <MeshDistortMaterial
                    ref={mesh}
                    color={color}
                    speed={3}
                    distort={0.4}
                    radius={1}
                    metalness={0.9}
                    roughness={0.1}
                    emissive={color}
                    emissiveIntensity={0.2}
                />
            </Sphere>
        </Float>
    );
}

export default function ServiceLens({ color }) {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 lg:opacity-40">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <DistortionSphere color={color} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
