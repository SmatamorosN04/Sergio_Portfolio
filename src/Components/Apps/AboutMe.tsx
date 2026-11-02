import { ExternalLink, GraduationCap, Layers, Server, UserRound } from "lucide-react";

const STACK_GROUPS = [
  {
    title: "Frontend",
    Icon: Layers,
    accent: "bg-amber-400",
    hover: "hover:border-amber-400 hover:bg-amber-50",
    items: ["Next.js", "React", "TypeScript", "TailwindCSS", "CSS3"],
  },
  {
    title: "Backend & BD",
    Icon: Server,
    accent: "bg-emerald-500",
    hover: "hover:border-emerald-400 hover:bg-emerald-50",
    items: ["Node.js", "FastAPI", "Python", "PostgreSQL"],
  },
  {
    title: "Entorno",
    Icon: UserRound,
    accent: "bg-sky-500",
    hover: "hover:border-sky-400 hover:bg-sky-50",
    items: ["Arch Linux", "Git", "Bash", "Terminal.sh"],
  },
];

const PROJECTS = [
  {
    title: "Plataforma E-commerce SaaS",
    desc: "Sistema completo y comercializable de ventas orientado a repuestos de mototaxis, con persistencia avanzada de datos e historial de inventario utilizando PostgreSQL.",
    url: "https://e-commerce-five-virid-58.vercel.app",
  },
  {
    title: "Ariel Tech Service — Scheduling System",
    desc: "Plataforma de reserva, análisis de campo y optimización de citas diseñada para técnicos de mantenimiento y sistemas de aire acondicionado.",
    url: "https://scheduling-app-orcin-eight.vercel.app",
  },
];

export default function AboutMe() {
  return (
    <div className="font-sans text-xs text-slate-950 w-full h-full overflow-y-auto pr-1 flex flex-col gap-3 select-text">
      {/* --- Hero / presentación --- */}
      <div className="shrink-0 flex items-center gap-3 pb-3 border-b border-slate-300">
        <img
          src="https://github.com/SmatamorosN04.png"
          alt="Sergio Matamoros"
          className="w-14 h-14 shrink-0 rounded-lg object-cover border-2 border-white shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
        />
        <div className="min-w-0">
          <h2 className="text-[15px] font-black tracking-tight text-slate-950 m-0 leading-tight truncate">
            Sergio Armando Matamoros
          </h2>
          <span className="inline-flex items-center gap-1.5 mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold text-white bg-linear-to-r from-sky-500 to-blue-600 shadow-[0_1px_3px_rgba(0,60,116,0.4)] border border-blue-300/60">
            Full Stack Developer
          </span>
          <p className="m-0 mt-1 font-semibold text-[11px] text-slate-600 flex items-center gap-1">
            <GraduationCap size={12} className="text-slate-500 shrink-0" />
            Ingeniería de Sistemas · UNI
          </p>
        </div>
      </div>

      {/* --- Sobre mí --- */}
      <section className="rounded-lg border border-slate-300 bg-white/70 shadow-[1px_1px_3px_rgba(0,0,0,0.06)] p-3">
        <p className="m-0 text-[11px] leading-relaxed text-slate-700">
          Desarrollador <span className="font-bold text-slate-950">Full Stack</span> enfocado en construir
          aplicaciones web <span className="font-bold text-slate-950">funcionales, robustas y con gran rendimiento</span>,
          desde el diseño de la interfaz hasta la persistencia de datos. Me encanta el ecosistema Linux, la
          optimización de código y seguir aprendiendo nuevas tecnologías lado servidor y cliente.
        </p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 pt-2 border-t border-dashed border-slate-200 text-[10px] font-semibold text-slate-600">
          <span className="inline-flex items-center gap-1"><UserRound size={11} className="text-slate-400" /> Sergio Matamoros</span>
          <span className="inline-flex items-center gap-1"><ExternalLink size={11} className="text-slate-400" /> github.com/SmatamorosN04</span>
        </div>
      </section>

      {/* --- Stack tecnológico --- */}
      <section className="flex flex-col gap-1.5">
        <h3 className="m-0 font-bold text-sm text-slate-950 border-b border-slate-300 pb-0.5">
          Stack tecnológico
        </h3>
        <div className="flex flex-col gap-2">
          {STACK_GROUPS.map((group) => (
            <div key={group.title} className="flex items-start gap-2">
              <div className="w-20 shrink-0 flex items-center gap-1.5 pt-0.5">
                <span className={`w-1.5 h-1.5 rounded-full ${group.accent}`} />
                <span className="font-bold text-[11px] text-slate-800">{group.title}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 min-w-0">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`px-2 py-[2px] rounded-md bg-white border border-slate-300 shadow-[0_1px_2px_rgba(0,0,0,0.08)] font-bold text-[10px] text-slate-700 cursor-default transition-colors duration-100 ${group.hover}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Proyectos recientes --- */}
      <section className="flex flex-col gap-1.5">
        <h3 className="m-0 font-bold text-sm text-slate-950 border-b border-slate-300 pb-0.5">
          Proyectos recientes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="rounded-lg border border-slate-300 bg-white shadow-[1px_2px_4px_rgba(0,0,0,0.07)] hover:shadow-[2px_3px_8px_rgba(10,60,255,0.15)] hover:border-blue-300 transition-all duration-150 p-2.5 flex flex-col gap-1"
            >
              <h4 className="m-0 font-bold text-[11px] uppercase tracking-wide text-slate-900 leading-snug">
                {project.title}
              </h4>
              <p className="m-0 font-medium text-slate-600 leading-normal">{project.desc}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-1 text-[#0a60ff] font-semibold hover:underline"
              >
                Ver proyecto <ExternalLink size={11} />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
