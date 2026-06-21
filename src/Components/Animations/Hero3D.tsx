// src/Components/Animations/Hero3D.tsx
import * as THREE from "three";
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

function CardMesh({ imageSrc }: { imageSrc: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);

  const originalTexture = useLoader(THREE.TextureLoader, imageSrc);

  const texture = useMemo(() => {
    if (!originalTexture) return null;
    const clonedTexture = originalTexture.clone();
    clonedTexture.wrapS = THREE.RepeatWrapping;
    clonedTexture.wrapT = THREE.ClampToEdgeWrapping;
    clonedTexture.repeat.set(0.8, 1); 
    clonedTexture.offset.set(0.1, 0); 
    clonedTexture.needsUpdate = true;
    return clonedTexture;
  }, [originalTexture]);

  useFrame(() => {
    if (!meshRef.current) return;

    // Invertimos el eje Y para que cuando subas el mouse la tarjeta apunte hacia arriba
    const targetX = isHoveredRef.current ? -mouseRef.current.y * 0.35 : 0;
    const targetY = isHoveredRef.current ? mouseRef.current.x * 0.35 : 0;

    // El factor 0.1 hace que el movimiento sea súper suave y elegante
    meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.1;
    meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.1;
  });

  return (
    <group>
      <mesh 
        ref={meshRef} 
        position={[0, 0, 0]}
        onPointerMove={(e) => {
          isHoveredRef.current = true;
          // 🛠️ SOLUCIÓN: e.pointer nos da valores limpios entre -1 y 1
          mouseRef.current = {
            x: e.pointer.x,
            y: e.pointer.y
          };
        }}
        onPointerLeave={() => {
          isHoveredRef.current = false;
        }}
      >
        <planeGeometry args={[2.5, 2.5]} />
        {texture && <meshBasicMaterial map={texture} toneMapped={false} transparent />}
      </mesh>
    </group>
  );
}

export default function Hero3D({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="w-64 h-64 lg:w-80 lg:h-80 select-none drop-shadow-[0_0_25px_rgba(6,182,212,0.15)] flex items-center justify-center">
      <Canvas 
        camera={{ position: [0, 0, 4], fov: 40 }}
        resize={{ scroll: false, debounce: 0 }}
      >
        <ambientLight intensity={1.2} />
        <CardMesh imageSrc={imageSrc} />
      </Canvas>
    </div>
  );
}