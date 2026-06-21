import * as THREE from "three";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader} from "@react-three/fiber";

function CardMesh ({ imageSrc}: {imageSrc: string}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mouse, setMouse] = useState({ x: 0, y:0});

  const texture = useLoader(THREE.TextureLoader, imageSrc);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse ({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if(!meshRef.current)return;

    const targetX = mouse.y *0.25;
    const targetY = mouse.x * 0.25;

    meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.1;
    meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.1;
  });

  return (
    <group>
      <mesh position={[0,0, -0.05]}>
        <planeGeometry args={[2.2, 2,2]} />
        <meshBasicMaterial map={texture} toneMapped={false}/>
      </mesh>
    </group>
  );
};

export default function Hero3D({ imageSrc}: {imageSrc: string}){
  return (
    <div className="w-64 h-64 lg:w-80 lg:h-80 select-none drop-shadow-[0_0_25px_rgba(6,182,212,0.15)] ">
      <Canvas camera={{position: [0,0, 2.5], fov: 50}}>
        <ambientLight intensity={1}/>
        <CardMesh imageSrc={imageSrc}/>
      </Canvas>
    </div>
  )
}