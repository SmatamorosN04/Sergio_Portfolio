/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import * as Icons from "lucide-react";
import type { WindowApp } from "../Pages/Desktop";

interface TaskbarProps {
  windows: WindowApp[];
  onIconClick: (id: string) => void;
}

export default function Taskbar({ windows, onIconClick }: TaskbarProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 w-full  bg-slate-900/40 backdrop-blur-2xl border-t border-white/10 absolute bottom-0 left-0 px-3 flex items-center justify-between z-50 select-none shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      
      <button 
        onClick={() => alert("Menú de Inicio")}
        className="flex items-center h-full rounded-4xl text-white font-sans font-black italic text-sm tracking-wider cursor-pointer hover:brightness-110 active:brightness-90 transition-all outline-none border-none"
        style={{ 
          background: "linear-gradient(to bottom, #53a93f 0%, #3c9324 45%, #235716 100%)",
          boxShadow: "inset 1px 1px 1px rgba(255,255,255,0.4), 2px 0 5px rgba(0,0,0,0.3)",
          textShadow: "1px 1px 1px rgba(0,0,0,0.6)",
          
        }}
      >
        <div className="grid grid-cols-2 gap-0.7 w-4 h-4 rotate-12 not-italic">
          <div className="bg-red-500 w-1.5 h-1.5 rounded-xs"></div>
          <div className="bg-blue-500 w-1.5 h-1.5 rounded-xs"></div>
          <div className="bg-green-500 w-1.5 h-1.5 rounded-xs"></div>
          <div className="bg-amber-400 w-1.5 h-1.5 rounded-xs"></div>
        </div>
        <span className="tracking-wide ml-1">inicio</span>
      </button>

      <div className="flex items-center gap-1.5 flex-1 max-w-xl mx-4 overflow-x-auto no-scrollbar">
        {windows.map(app => {
          if (!app.isOpen) return null;
          const LucideIcon = (Icons as any)[app.icon] || Icons.HelpCircle;

          return (
            <button
              key={app.id}
              onClick={() => onIconClick(app.id)}
              className={`flex items-center gap-2.5 px-3 h-8 rounded-md text-xs font-semibold transition-all duration-100 cursor-pointer truncate max-w-[140px] relative active:scale-98 border`}
              style={{
                background: app.isMinimized ? "rgba(15, 23, 42, 0.3)" : "rgba(255, 255, 255, 0.1)",
                borderColor: app.isMinimized ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.2)",
                color: app.isMinimized ? "#94a3b8" : "#ffffff",
                boxShadow: app.isMinimized ? "none" : "inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
            >
              <LucideIcon size={13} className={app.isMinimized ? "text-slate-500" : "text-cyan-300 drop-shadow-[0_0_4px_rgba(34,211,238,0.5)]"} />
              <span className="truncate">{app.title}</span>
              
              {!app.isMinimized && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-t-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
              )}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-3 text-xs font-bold font-mono bg-slate-950/40 border border-slate-800/80 px-4 h-8 rounded-md shadow-[inset_1px_1px_3px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-1.5 text-cyan-400/90 drop-shadow-[0_0_4px_rgba(34,211,238,0.3)]">
          <Icons.Cpu size={13} className="animate-spin" style={{ animationDuration: '8s' }} />
          <span className="text-[10px] text-slate-400 uppercase tracking-wider">hypr</span>
        </div>
        <div className="w-px h-3 bg-slate-800" />
        <span className="text-white font-medium tabular-nums tracking-wider">
          {time}
        </span>
      </div>

    </div>
  );
}