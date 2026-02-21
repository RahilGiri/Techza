import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const GalaxyPlanes = () => {
    const groupRef = useRef();
    const planesRef = useRef([]);
    const count = 45; // Amount of orbiting planes

    const orbitData = useMemo(() => {
        return Array.from({ length: count }).map(() => ({
            radius: 2.5 + Math.random() * 3.0, // Tighter orbit distance
            speed: (Math.random() > 0.5 ? 1 : -1) * (0.1 + Math.random() * 0.3), // Orbit speed
            angle: Math.random() * Math.PI * 2, // Start position
            yOffset: (Math.random() - 0.5) * 1.5, // Less vertical spread
            rotationSpeedX: (Math.random() - 0.5) * 1.5,
            rotationSpeedY: (Math.random() - 0.5) * 1.5,
            rotationSpeedZ: (Math.random() - 0.5) * 1.5,
            scale: 0.15 + Math.random() * 0.3, // Slightly smaller planes
            isWireframe: Math.random() > 0.4,
            opacity: 0.2 + Math.random() * 0.5,
            aspectRatio: Math.random() > 0.5 ? 1.5 : 1 // Some squares, some rectangles
        }));
    }, [count]);

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        // Subtly tilt and rotate the entire galaxy field
        groupRef.current.rotation.x = Math.PI / 8;
        groupRef.current.rotation.y += delta * 0.05;

        planesRef.current.forEach((plane, i) => {
            if (!plane) return;
            const data = orbitData[i];

            // Advance orbit angle
            data.angle += data.speed * delta;

            // Calculate 3D orbital position around center
            plane.position.x = Math.cos(data.angle) * data.radius;
            plane.position.y = data.yOffset + Math.sin(data.angle * 2) * 0.3; // Slight vertical wave
            plane.position.z = Math.sin(data.angle) * data.radius;

            // Continuous tumbling rotation for the object itself
            plane.rotation.x += data.rotationSpeedX * delta;
            plane.rotation.y += data.rotationSpeedY * delta;
            plane.rotation.z += data.rotationSpeedZ * delta;
        });
    });

    return (
        <group ref={groupRef}>
            {orbitData.map((data, i) => (
                <mesh
                    key={i}
                    ref={(el) => (planesRef.current[i] = el)}
                    scale={[data.scale, data.scale, data.scale]}
                >
                    <planeGeometry args={[data.aspectRatio, 1]} />
                    <meshBasicMaterial
                        color="#b6ff33"
                        transparent={true}
                        opacity={data.opacity}
                        side={THREE.DoubleSide}
                        wireframe={data.isWireframe}
                        blending={THREE.AdditiveBlending}
                    />
                </mesh>
            ))}
        </group>
    );
};

const WireframeGlobe = () => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        // Slow constant rotation
        groupRef.current.rotation.y += delta * 0.2;
        groupRef.current.rotation.x += delta * 0.1;

        // Strong reaction to mouse pointer
        groupRef.current.rotation.x += (state.pointer.y * 1.2 - groupRef.current.rotation.x) * 0.15;
        groupRef.current.rotation.y += (state.pointer.x * 1.5 - groupRef.current.rotation.y) * 0.15;
    });

    return (
        <group ref={groupRef}>
            {/* Inner Core */}
            <Sphere args={[2, 32, 32]}>
                <meshBasicMaterial color="#050505" />
            </Sphere>

            {/* Glowing Wireframe Outer Layer */}
            <Sphere args={[2.02, 16, 16]}>
                <meshBasicMaterial
                    color="#b6ff33"
                    wireframe={true}
                    transparent={true}
                    opacity={0.3}
                />
            </Sphere>

            {/* Orbiting Ring */}
            <mesh rotation={[Math.PI / 3, 0, 0]}>
                <torusGeometry args={[2.5, 0.01, 16, 100]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
            </mesh>

            {/* Second Orbiting Ring */}
            <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
                <torusGeometry args={[2.8, 0.01, 16, 100]} />
                <meshBasicMaterial color="#b6ff33" transparent opacity={0.4} />
            </mesh>
        </group>
    );
};

const EarthModel = () => {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex items-center justify-center">
            {/* Container exactly matching the layout bounds, no bleeding */}
            <div className="w-full h-full">
                <Canvas camera={{ position: [0, 0, 9.2], fov: 60 }}>
                    <ambientLight intensity={1} />
                    <WireframeGlobe />
                    <GalaxyPlanes />
                </Canvas>
            </div>
            {/* Core Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-green/20 blur-[80px] rounded-full pointer-events-none -z-10"></div>
        </div>
    );
};

export default EarthModel;
