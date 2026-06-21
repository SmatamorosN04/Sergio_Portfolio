import * as THREE from "three"
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.cjs';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const [sphere] = useState(() => {
    const data = new Float32Array(4500)
    return random.inSphere(data, {radius: 1.2}) as Float32Array;
}
);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        setMouse({
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: -(e.clientY / window.innerHeight) * 2 + 1,
        });
    };

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    
    ref.current.rotation.x -= delta * 0.05;
    ref.current.rotation.y -= delta * 0.03;

    ref.current.position.x += (mouse.x * 0.1 - ref.current.position.x) * 0.05;
    ref.current.position.y += (mouse.y * 0.1 - ref.current.position.y) * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.007}
          depthTest={true}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 h-full w-full pointer-events-none opacity-50">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
}