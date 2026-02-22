import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';

// 3D Particles Field component
const ParticleField = (props) => {
    const ref = useRef();

    // Generate 400 random particles within a sphere of radius 2.0
    // Float32Array is required for Three.js buffer geometry
    const MathRandomInSphereCount = 400 * 3;
    const sphere = random.inSphere(new Float32Array(MathRandomInSphereCount), { radius: 2.0 });

    useFrame((state, delta) => {
        // Slowly rotate the particle field over time
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#b6ff33"
                    size={0.003} // Very tiny particles
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.4}
                />
            </Points>
        </group>
    );
};

// Main Global Background Component
const GlobalBackground = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none overflow-hidden bg-[#050505]">

            {/* 1. Ambient Glowing Orbs (Framer Motion) */}
            {/* Top Left Green Orb */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, 30, -30, 0],
                    scale: [1, 1.2, 0.9, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-brand-green/10 rounded-full blur-[120px]"
            />

            {/* Bottom Right Blue/Dark Orb to add depth */}
            <motion.div
                animate={{
                    x: [0, -70, 40, 0],
                    y: [0, -50, 60, 0],
                    scale: [1, 1.3, 0.8, 1],
                    opacity: [0.05, 0.15, 0.05]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#111] rounded-full blur-[150px]"
            />

            {/* 2. 3D Floating Particle Field (Three.js/Fiber) */}
            <div className="absolute inset-0 opacity-60">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <ParticleField />
                </Canvas>
            </div>

            {/* Default overlay pattern for texture */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        </div>
    );
};

export default GlobalBackground;
