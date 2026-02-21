import { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points in a spherical distribution
const generatePoints = (count) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        // Random spherical coordinates
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);

        // Random radius with some variation
        const radius = 10 + Math.random() * 2;

        // Convert to Cartesian
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
};

const ParticleCloud = () => {
    // Create 3000 points
    const sphereData = useMemo(() => generatePoints(3000), []);

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points positions={sphereData} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#B6FF33"
                    size={0.08}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
};

const ParticleSphere = () => {
    return (
        <div className="absolute inset-0 w-full h-full z-0 cursor-grab active:cursor-grabbing">
            {/* The Canvas itself needs to be responsive. We drop the camera back slightly */}
            <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
                {/* Subtle ambient light just in case */}
                <ambientLight intensity={0.5} />
                <ParticleCloud />

                {/* Incredibly smooth interaction and auto-rotation */}
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.8}
                    dampingFactor={0.05}
                />
            </Canvas>
        </div>
    );
};

export default ParticleSphere;
