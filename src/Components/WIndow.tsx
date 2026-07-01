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
  
  // Refs para controlar el arrastre síncrono sin re-renders innecesarios
  const isDraggingRef = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  if (app.isMinimized) return null;

  const handlePointerDown = (e: React.PointerEvent) => {
    // Evitamos arrastrar si la ventana está maximizada
    if (app.isMaximized) return; 
    
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
    if (!isDraggingRef.current) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  return (
    <div
      onClick={onFocus}
      style={{
        zIndex: app.zIndex,
        transform: app.isMaximized ? "none" : `translate(${position.x}px, ${position.y}px)`,
        top: app.isMaximized ? "0px" : "0",
        left: app.isMaximized ? "0px" : "0",
        width: app.isMaximized ? "100%" : "580px",
        height: app.isMaximized ? "calc(100% - 48px)" : "400px", // Deja espacio para la Taskbar clara
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
          <button aria-label="Minimize" onClick={(e) => { e.stopPropagation(); onMinimize(); }} />
          <button aria-label="Maximize" onClick={(e) => { e.stopPropagation(); onMaximize(); }} />
          <button aria-label="Close" onClick={(e) => { e.stopPropagation(); onClose(); }} />
        </div>
      </div>

      {/* CUERPO GRIS TRADICIONAL DE XP */}
      <div className="window-body flex-1 overflow-auto bg-[#f0f0ed] m-1 p-3 flex flex-col relative border border-[#7f9db9]">
        {children}
      </div>

    </div>
  );
}