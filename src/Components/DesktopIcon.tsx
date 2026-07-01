import * as Icons from "lucide-react";
import type { WindowApp } from "../Pages/Desktop";

interface IconProps {
  app: WindowApp;
  onOpen: () => void;
}

export default function DesktopIcon({ app, onOpen }: IconProps) {
  const LucideIcon = (Icons as any)[app.icon] || Icons.HelpCircle;

  const getIconColorClass = (id: string) => {
    switch (id) {
      case "about":
        return "text-orange-400";
      case "projects":
        return "text-amber-400";
      case "doom":
        return "text-red-500";
      case "terminal":
        return "text-emerald-400";
      default:
        return "text-slate-300";
    }
  };

  return (
    <button
      onClick={onOpen}
      className="w-24 flex flex-col items-center justify-center gap-1.5 p-2 bg-transparent  hover:bg-sky-400/20  active:bg-sky-500/30 active:border-sky-300/50 transition-all group cursor-pointer text-center select-none z-20 outline-none"
      style={{ background: "none", boxShadow: "none", border: "none"}}
    >
      <div className={`w-12 h-12 flex items-center justify-center transition-transform duration-75 group-hover:scale-105 ${getIconColorClass(app.id)}`}>
        <LucideIcon size={34} strokeWidth={1.8} />
      </div>

      <span className="text-[11px] font-sans font-medium text-white text-shadow-xp leading-tight px-1 py-0.5 truncate w-full rounded-xs transition-colors block">
        {app.title}
      </span>
    </button>
  );
}