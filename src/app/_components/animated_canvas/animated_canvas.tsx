"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Mesh } from 'three';


export const AnimatedCanvas: React.FC = () => {
    const plane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, -0.6, -0.5), 0.8), []);

    return (
        <Canvas
            camera={{ fov: 6, position: [0, 15, 1], near: 0.25, far: 16 }}
            style={{ height: '50vh', width: '100vw' }}
            onCreated={({ gl }) => {
                gl.localClippingEnabled = true;
            }}
        >
            <ambientLight intensity={1} color={0x2563eb} castShadow={false} />
            <spotLight intensity={100} angle={Math.PI / 5} penumbra={0.4} position={[2, 3, 3]} castShadow={false} />
            <AnimatedMesh plane={plane} />
        </Canvas>
    );
};

const AnimatedMesh: React.FC<{
    plane: THREE.Plane
}> = (props) => {
    const meshRef = useRef<Mesh>(null);
    const startTime = useMemo(() => Date.now(), []);

    useFrame(() => {
        const currentTime = Date.now();
        const time = (currentTime - startTime) / 2500;

        if (meshRef.current) {
        meshRef.current.position.y = 0.8;
        meshRef.current.rotation.x = time * 0.5;
        meshRef.current.rotation.y = time * 0.2;
        meshRef.current.scale.setScalar(Math.cos(time) * 0.125 + 0.875);
        }
    });

    return (
        <mesh ref={meshRef}>
        <torusKnotGeometry args={[0.4, 0.08, 95, 20]} />
        <meshPhongMaterial
            color={0xffffff}
            shininess={0}
            side={THREE.DoubleSide}
            clippingPlanes={[props.plane]}
            clipShadows={false}
            alphaToCoverage={false}
        />
        </mesh>
    );
};