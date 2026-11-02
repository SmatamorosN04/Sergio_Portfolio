import type { WindowApp } from "../Pages/Desktop";
import { getAppVisual } from "./appIcons";

interface IconProps {
  app: WindowApp;
  onOpen: () => void;
}

export default function DesktopIcon({ app, onOpen }: IconProps) {
  const { Icon, gradient } = getAppVisual(app);

  return (
    <button
      onClick={onOpen}
      className="group w-[94px] flex flex-col items-center justify-center gap-1.5 p-2 rounded-lg cursor-pointer text-center select-none z-20 outline-none hover:outline hover:outline-1 hover:outline-dashed hover:outline-white/60 hover:bg-cyan-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 active:bg-cyan-500/25 transition-colors"
    >
      {/* Sombra proyectada del tile */}
      <div className="relative">
        <div
          className={`absolute inset-x-1.5 bottom-0.5 h-2 rounded-[50%] bg-cyan-950/60 blur-[3px] transition-all duration-150 group-hover:scale-x-110 group-hover:-translate-y-[1px]`}
        />
        <div
          className={`relative w-14 h-14 flex items-center justify-center rounded-2xl bg-linear-to-br ${gradient} border border-white/30 shadow-[inset_0_2px_3px_rgba(255,255,255,0.5),inset_0_-8px_12px_rgba(0,0,0,0.18)] transition-transform duration-150 group-hover:scale-110 group-hover:-translate-y-0.5 group-active:scale-95`}
        >
          {/* Reflejo superior tipo vidrio */}
          <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-linear-to-b from-white/35 to-transparent pointer-events-none" />
          <Icon size={30} strokeWidth={2} className="relative text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]" />
        </div>
      </div>

      <span
        className="text-[11px] font-sans font-semibold text-white leading-tight px-1 py-0.5 truncate w-full rounded-xs transition-colors block text-shadow-xp group-hover:text-cyan-100"
      >
        {app.title}
      </span>
    </button>
  );
}
