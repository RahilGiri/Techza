import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShapes = () => {
    const group = useRef();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (state.mouse.x * Math.PI) / 5, 0.05);
            group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.mouse.y * Math.PI) / 5, 0.05);
        }
    });

    return (
        <group ref={group}>
            {/* Center abstract morphing sphere */}
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <Sphere args={[1, 64, 64]} position={[0, 0, -2]} scale={1.5}>
                    <MeshDistortMaterial
                        color="#0f2e1a"
                        attach="material"
                        distort={0.4}
                        speed={1.5}
                        roughness={0.2}
                        metalness={0.8}
                        wireframe={true}
                    />
                </Sphere>
            </Float>

            {/* Orbiting glowing orbs */}
            <Float speed={1.5} rotationIntensity={2} floatIntensity={3}>
                <mesh position={[-4, 2, -1]}>
                    <icosahedronGeometry args={[0.5, 0]} />
                    <meshStandardMaterial color="#B6FF33" wireframe opacity={0.3} transparent />
                </mesh>
            </Float>

            <Float speed={1.5} rotationIntensity={2} floatIntensity={3}>
                <mesh position={[4, -2, -1]}>
                    <octahedronGeometry args={[0.6, 0]} />
                    <meshStandardMaterial color="#B6FF33" wireframe opacity={0.3} transparent />
                </mesh>
            </Float>

            <Float speed={1} rotationIntensity={2} floatIntensity={2}>
                <mesh position={[2, 3, -3]}>
                    <torusGeometry args={[0.4, 0.1, 16, 100]} />
                    <meshStandardMaterial color="#ffffff" wireframe opacity={0.1} transparent />
                </mesh>
            </Float>

            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[-3, -3, -2]}>
                    <tetrahedronGeometry args={[0.7, 0]} />
                    <meshStandardMaterial color="#ffffff" wireframe opacity={0.1} transparent />
                </mesh>
            </Float>
        </group>
    );
};

const Pricing3DBackground = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50 block">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true, antialias: true }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -10]} color="#B6FF33" intensity={2} />
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <FloatingShapes />
            </Canvas>
        </div>
    );
};

export default Pricing3DBackground;
