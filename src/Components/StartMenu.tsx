import { ArrowUpRight, LogOut, Power, Sparkles, Cpu } from "lucide-react";
import type { WindowApp } from "../Pages/Desktop";
import { getAppVisual } from "./appIcons";

/* Iconos de marca no existen en lucide: se usan SVG inline. */
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.19.69-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

interface StartMenuProps {
  windows: WindowApp[];
  onOpenApp: (id: string) => void;
  onClose: () => void;
}

export default function StartMenu({ windows, onOpenApp, onClose }: StartMenuProps) {
  const baseApps = windows.filter((w) => !w.siteUrl);
  const siteApps = windows.filter((w) => w.siteUrl);

  const links = [
    { label: "GitHub", sub: "@SmatamorosN04", href: "https://github.com/SmatamorosN04", Icon: GithubIcon, color: "text-white" },
    { label: "LinkedIn", sub: "Sergio Matamoros", href: "https://www.linkedin.com/in/smatamorosn04/", Icon: LinkedinIcon, color: "text-sky-300" },
    { label: "Correo", sub: "Contacto directo", href: "mailto:smatamorosn04@gmail.com", Icon: null, color: "text-emerald-300" },
  ];
  const mailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
  links[2].Icon = mailIcon;

  const renderItem = (app: WindowApp) => {
    const { Icon, gradient } = getAppVisual(app);
    return (
      <button
        key={app.id}
        onClick={() => { onOpenApp(app.id); onClose(); }}
        className="w-full flex items-center gap-3 px-2.5 py-1.5 rounded-lg hover:bg-white/10 active:bg-white/15 transition-colors cursor-pointer text-left group outline-none"
      >
        <span
          className={`w-8 h-8 shrink-0 flex items-center justify-center rounded-md bg-linear-to-br ${gradient} shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)] border border-white/15`}
        >
          <Icon size={16} strokeWidth={2.2} className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
        </span>
        <span className="flex-1 min-w-0">
          <span className="block text-[13px] font-bold text-white truncate group-hover:text-cyan-200 transition-colors">
            {app.title}
          </span>
          <span className="block text-[10px] text-white/60 truncate">
            {app.siteUrl ? "Página en vivo" : "Aplicación"}
          </span>
        </span>
        <ArrowUpRight size={13} className="text-white/30 group-hover:text-cyan-300 transition-colors shrink-0" />
      </button>
    );
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute bottom-12 left-1 right-1 sm:left-2 sm:right-auto z-[60] w-auto sm:w-[430px] rounded-xl overflow-hidden border border-white/15 bg-[#0b1220]/85 backdrop-blur-2xl shadow-[0_18px_50px_rgba(0,0,0,0.55)] animate-start-menu select-none"
    >
      {/* Banner de usuario */}
      <div className="flex items-center gap-3 px-4 py-3 bg-linear-to-r from-emerald-600/90 via-teal-600/80 to-cyan-600/60 border-b border-white/10">
        <img
          src="https://github.com/SmatamorosN04.png"
          alt="Avatar de Sergio Matamoros"
          className="w-11 h-11 rounded-lg border-2 border-white/30 shadow-md"
        />
        <div className="min-w-0">
          <p className="text-white font-black text-sm leading-tight tracking-wide" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}>
            Sergio Matamoros
          </p>
          <p className="text-[11px] text-white/80 font-medium">Full Stack Developer · Portfolio OS</p>
        </div>
        <Sparkles size={18} className="ml-auto text-white/70" />
      </div>

      {/* Cuerpo: apps a la izquierda, enlaces a la derecha */}
      <div className="flex flex-col sm:flex-row">
        {/* Columna de aplicaciones */}
        <div className="flex-1 min-w-0 p-2.5 flex flex-col gap-1 max-h-[46vh] sm:max-h-[380px] overflow-y-auto">
          <p className="px-2.5 pb-1 pt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Aplicaciones
          </p>
          {baseApps.map(renderItem)}

          {siteApps.length > 0 && (
            <>
              <p className="px-2.5 pb-1 pt-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Mis páginas
              </p>
              {siteApps.map(renderItem)}
            </>
          )}
        </div>

        {/* Columna de enlaces */}
        <div className="sm:w-40 shrink-0 border-t sm:border-t-0 sm:border-l border-white/10 bg-slate-950/50 p-2.5 flex flex-col gap-1">
          <p className="px-1.5 pb-1 pt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Enlaces
          </p>
          {links.map(({ label, sub, href, Icon, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="flex items-center gap-2 px-1.5 py-2 rounded-lg hover:bg-white/10 transition-colors group"
            >
              {Icon && <Icon className={`w-4.5 h-4.5 shrink-0 ${color}`} />}
              <span className="min-w-0">
                <span className="block text-[12px] font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {label}
                </span>
                <span className="block text-[10px] text-white/50 truncate">{sub}</span>
              </span>
            </a>
          ))}

          <div className="mt-auto pt-3 hidden sm:block">
            <div className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 flex items-center gap-2">
              <Cpu size={13} className="text-cyan-300 shrink-0 animate-spin" style={{ animationDuration: "8s" }} />
              <span className="text-[10px] text-white/60 leading-tight font-mono">
                Portfolio OS v2.0<br />React + Vite · online
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pie decorativo estilo XP */}
      <div className="flex items-center justify-between gap-2 bg-linear-to-r from-blue-700/80 to-blue-900/70 border-t border-white/10 px-3.5 py-2">
        <span className="text-[10px] text-white/60 font-mono">
          © {new Date().getFullYear()} Matamoros.DEV
        </span>
        <div className="flex items-center gap-1.5">
          <button
            title="Solo decorativo 😉"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/10 border border-white/10 text-white/80 text-[11px] font-semibold hover:bg-white/15 cursor-pointer transition-colors"
          >
            <LogOut size={12} /> Cerrar sesión
          </button>
          <button
            title="Solo decorativo 😉"
            className="p-1.5 rounded-md bg-red-500/20 border border-red-400/20 text-red-200 hover:bg-red-500/30 cursor-pointer transition-colors"
          >
            <Power size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
