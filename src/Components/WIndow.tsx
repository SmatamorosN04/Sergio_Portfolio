import React, { useState, useRef } from "react";
import type { WindowApp } from "../Pages/Desktop";
import 'xp.css'

interface WindowProps {
  app: WindowApp;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  children: React.ReactNode;
}

export default function Window({ app, onClose, onMinimize, onMaximize, onFocus, children }: WindowProps) {
  // Posición inicial de la ventana
  const [position, setPosition] = useState({ x: 100, y: 80 });

  // Detección de pantallas móviles
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Refs para controlar el arrastre síncrono sin re-renders innecesarios
  const isDraggingRef = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent) => {
    // Evitamos arrastrar si la ventana está maximizada o es móvil
    if (app.isMaximized || isMobile) return; 
    
    // Enfocamos la ventana (sube el zIndex)
    onFocus();
    
    // Solo permitimos arrastrar si se hace clic en la barra de título o texto, no en los botones
    const target = e.target as HTMLElement;
    if (target.closest(".title-bar-controls")) return;

    isDraggingRef.current = true;
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || isMobile) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const forceMaximized = app.isMaximized || isMobile;

  return (
    <div
      onClick={onFocus}
      style={{
        zIndex: app.zIndex,
        transform: forceMaximized ? "none" : `translate(${position.x}px, ${position.y}px)`,
        top: forceMaximized ? "0px" : "0",
        left: forceMaximized ? "0px" : "0",
        width: forceMaximized ? "100%" : "580px",
        height: forceMaximized ? "calc(100% - 48px)" : "400px", // Deja espacio para la Taskbar clara
      }}
      /* 'window' activa el marco azul de XP, añadimos clases de Tailwind para el posicionamiento */
      className="absolute flex flex-col window transition-all duration-75 select-none shadow-[5px_5px_15px_rgba(0,0,0,0.3)]"
    >
      
      {/* BARRA DE TÍTULO AZUL (LUNA THEME) */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="title-bar cursor-move"
      >
        <div className="title-bar-text font-sans font-bold flex items-center gap-1">
          {/* Opcional: Podrías poner un mini icono aquí si usas PNGs */}
          {app.title}
        </div>

        {/* CONTROLES ORIGINALES EN 3D (Minimizar, Maximizar, Cerrar) */}
        <div className="title-bar-controls">
          <button aria-label="Minimizar" onClick={(e) => { e.stopPropagation(); onMinimize(); }} />
          <button aria-label="Maximizar" onClick={(e) => { e.stopPropagation(); onMaximize(); }} />
          <button aria-label="Cerrar" onClick={(e) => { e.stopPropagation(); onClose(); }} />
        </div>
      </div>

      {/* CUERPO GRIS TRADICIONAL DE XP */}
      <div className="window-body flex-1 overflow-auto bg-[#f0f0ed] m-1 p-3 flex flex-col relative border border-[#7f9db9]">
        {children}
      </div>

    </div>
  );
}