// src/Components/Animations/Hero3D.tsx
import * as THREE from "three";
import { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

function CardMesh({ imageSrc }: { imageSrc: string }) {
  // 1. Vinculamos correctamente el tipo del Mesh
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Optimización: Usamos una referencia mutables para que no congele el render
  const mouseRef = useRef({ x: 0, y: 0 });

  // Cargamos la textura de la imagen
  const texture = useLoader(THREE.TextureLoader, imageSrc);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;

    const targetX = mouseRef.current.y * 0.25;
    const targetY = mouseRef.current.x * 0.25;

    // Aplicamos suavizado LERP a la rotación física del objeto enlazado
    meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.1;
    meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.1;
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry args={[2.2, 2.2]} />
        <meshBasicMaterial map={texture} toneMapped={false} transparent />
      </mesh>
    </group>
  );
}

export default function Hero3D({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="w-64 h-64 lg:w-80 lg:h-80 select-none drop-shadow-[0_0_25px_rgba(6,182,212,0.15)] flex items-center justify-center">
      <Canvas 
        camera={{ position: [0, 0, 2.5], fov: 50 }}
        resize={{ scroll: false, debounce: 0 }}
      >
        <ambientLight intensity={1.2} />
        <CardMesh imageSrc={imageSrc} />
      </Canvas>
    </div>
  );
}