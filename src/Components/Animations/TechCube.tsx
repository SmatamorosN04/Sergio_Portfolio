// Components/Animations/TechCube.tsx
import { useRef, useState } from "react";

// Mantenemos tus mismos imports locales intactos
import nextLogo from "../../assets/Next.js.png";
import reactLogo from "../../assets/React.png";
import tsLogo from "../../assets/TypeScript.png";
import nodeLogo from "../../assets/Node.js.png";
import pythonLogo from "../../assets/Python.png";
import postgresLogo from "../../assets/PostgresSQL.png";

export default function TechCube() {
    const cubeRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [rotation, setRotation] = useState({ x: -20, y: 45 });
    const dragStart = useRef({ x: 0, y: 0 });

    // Capturar el inicio del arrastre (Mouse)
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        dragStart.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        
        const deltaX = e.clientX - dragStart.current.x;
        const deltaY = e.clientY - dragStart.current.y;

        setRotation((prev) => ({
            x: prev.x - deltaY * 0.5,
            y: prev.y + deltaX * 0.5,
        }));

        dragStart.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => setIsDragging(false);

    const faces = [
        { img: nextLogo, transform: "rotateY(0deg) translateZ(80px)" },       // Frontal
        { img: reactLogo, transform: "rotateY(180deg) translateZ(80px)" },   // Trasera
        { img: tsLogo, transform: "rotateY(90deg) translateZ(80px)" },      // Derecha
        { img: nodeLogo, transform: "rotateY(-90deg) translateZ(80px)" },    // Izquierda
        { img: pythonLogo, transform: "rotateX(90deg) translateZ(80px)" },     // Superior
        { img: postgresLogo, transform: "rotateX(-90deg) translateZ(80px)" },  // Inferior
    ];

    return (
        <div 
            className="w-full h-75 sm:h-100 flex items-center justify-center select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ perspective: "800px" }} // Define la profundidad espacial
        >
            <div
                ref={cubeRef}
                className={`relative w-40 h-40 transform-style-3d ${!isDragging ? 'animate-[spin_20s_linear_infinite]' : ''}`}
                style={{
                    transform: isDragging 
                        ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` 
                        : undefined,
                    cursor: isDragging ? "grabbing" : "grab",
                    transition: isDragging ? "none" : "transform 0.1s ease-out"
                }}
            >
                {faces.map((face, index) => (
                    <div
                        key={index}
                        className="absolute inset-0 bg-slate-900/90 border-2 border-slate-800 rounded-xl flex items-center justify-center p-6 shadow-xl shadow-cyan-500/5 backface-hidden"
                        style={{ transform: face.transform }}
                    >
                        <img 
                            src={face.img} 
                            alt="tech-logo" 
                            className="w-full h-full object-contain pointer-events-none filter drop-shadow-[0_0_8px_rgba(6,182,212,0.15)]"
                        />
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes spin {
                    0% { transform: rotateX(-20deg) rotateY(0deg); }
                    100% { transform: rotateX(-20deg) rotateY(360deg); }
                }
                .transform-style-3d { transform-style: preserve-3d; }
                .backface-hidden { backface-visibility: hidden; }
            `}</style>
        </div>
    );
}