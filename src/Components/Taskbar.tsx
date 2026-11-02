import { useEffect, useState } from "react";
import { Wifi, Volume2, MonitorPlay } from "lucide-react";
import type { WindowApp } from "../Pages/Desktop";
import { getAppVisual } from "./appIcons";

interface TaskbarProps {
  windows: WindowApp[];
  onIconClick: (id: string) => void;
  onQuickLaunch: (id: string) => void;
  onStartClick: () => void;
  isStartMenuOpen: boolean;
}

export default function Taskbar({ windows, onIconClick, onQuickLaunch, onStartClick, isStartMenuOpen }: TaskbarProps) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }));
      setDate(
        new Intl.DateTimeFormat("es-NI", { day: "2-digit", month: "2-digit", year: "numeric" }).format(now)
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const pinned = windows.filter((w) => ["about", "projects", "terminal"].includes(w.id));

  return (
    <div className="h-12 w-full bg-slate-950/55 backdrop-blur-2xl border-t border-white/10 absolute bottom-0 left-0 px-2.5 flex items-center justify-between z-50 select-none shadow-[0_-4px_24px_rgba(0,0,0,0.45)]">

      {/* Botón de inicio */}
      <button
        onClick={(e) => { e.stopPropagation(); onStartClick(); }}
        aria-expanded={isStartMenuOpen}
        className={`xp-start flex items-center h-9 px-3.5 rounded-lg text-white font-sans font-black italic text-sm tracking-wider cursor-pointer hover:brightness-110 active:brightness-90 transition-all outline-none border-none ${
          isStartMenuOpen ? "brightness-90" : ""
        }`}
        style={{
          background: isStartMenuOpen
            ? "linear-gradient(to bottom, #3c9324 0%, #235716 100%)"
            : "linear-gradient(to bottom, #53a93f 0%, #3c9324 45%, #235716 100%)",
          boxShadow: isStartMenuOpen
            ? "inset 2px 2px 4px rgba(0,0,0,0.45)"
            : "inset 1px 1px 1px rgba(255,255,255,0.4), 0 2px 6px rgba(0,0,0,0.4)",
          textShadow: "1px 1px 1px rgba(0,0,0,0.6)",
        }}
      >
        <div className="grid grid-cols-2 gap-[2.5px] w-4 h-4 rotate-12 not-italic drop-shadow-sm">
          <div className="bg-red-500 w-[7px] h-[7px] rounded-[2px]" />
          <div className="bg-blue-500 w-[7px] h-[7px] rounded-[2px]" />
          <div className="bg-amber-400 w-[7px] h-[7px] rounded-[2px]" />
          <div className="bg-emerald-400 w-[7px] h-[7px] rounded-[2px]" />
        </div>
        <span className="tracking-wide ml-1.5">inicio</span>
      </button>

      {/* Quick launch */}
      <div className="flex items-center gap-1 ml-1.5 px-1.5 h-8 rounded-md bg-white/5 border border-white/10">
        {pinned.map((app) => {
          const { Icon, gradient } = getAppVisual(app);
          const isActive = app.isOpen && !app.isMinimized;
          return (
            <button
              key={app.id}
              onClick={() => onQuickLaunch(app.id)}
              title={app.title}
              className={`w-7 h-7 flex items-center justify-center rounded-md bg-linear-to-br ${gradient} border border-white/20 transition-all cursor-pointer hover:scale-110 active:scale-95 ${
                isActive ? "outline-2 outline-cyan-400/80" : "outline-none"
              }`}
            >
              <Icon size={14} strokeWidth={2.2} className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
            </button>
          );
        })}
      </div>

      {/* Ventanas abiertas */}
      <div className="flex items-center gap-1.5 ml-2 mr-auto overflow-x-auto no-scrollbar max-w-[40vw] sm:max-w-md md:max-w-xl">
        {windows.map((app) => {
          if (!app.isOpen) return null;
          const { Icon, gradient } = getAppVisual(app);
          return (
            <button
              key={app.id}
              onClick={() => onIconClick(app.id)}
              className={`flex items-center gap-2 px-2.5 h-8 rounded-md text-xs font-semibold transition-all duration-100 cursor-pointer truncate max-w-[150px] relative active:scale-[0.97] border ${
                app.isMinimized
                  ? "bg-slate-950/70 border-white/10 text-slate-300 hover:text-slate-100"
                  : "bg-slate-900/70 border-white/25 text-white"
              }`}
            >
              <span
                className={`w-4.5 h-4.5 shrink-0 flex items-center justify-center rounded-[5px] bg-linear-to-br ${gradient} border border-white/20 ${
                  app.isMinimized ? "opacity-50 grayscale" : ""
                }`}
              >
                <Icon size={11} strokeWidth={2.4} className="text-white" />
              </span>
              <span className="truncate">{app.title}</span>
              {!app.isMinimized && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-7 h-0.5 rounded-t-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Bandeja del sistema */}
      <div className="flex items-center gap-2.5 text-xs font-bold font-mono bg-slate-950/50 border border-white/10 px-3 sm:px-4 h-8 rounded-md shadow-[inset_1px_1px_3px_rgba(0,0,0,0.5)]">
        <div className="hidden md:flex items-center gap-2 text-cyan-300/90">
          <Wifi size={13} />
          <Volume2 size={13} />
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-cyan-400/90 drop-shadow-[0_0_4px_rgba(34,211,238,0.3)]">
          <MonitorPlay size={13} />
          <span className="text-[10px] text-slate-400 uppercase tracking-wider">hypr</span>
        </div>
        <div className="hidden md:block w-px h-3.5 bg-white/10" />
        <div className="flex flex-col items-end leading-none">
          <span className="text-white font-medium tabular-nums tracking-wider text-[13px]">{time}</span>
          <span className="text-[9px] text-slate-400 font-medium tracking-wider">{date}</span>
        </div>
      </div>
    </div>
  );
}
