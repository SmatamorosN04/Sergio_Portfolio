import React from 'react'
const experience = [
    {
        role: "Desarrollador FullStack",
        company: "Freelance",
        period: "Febrero 2026 - Marzo 2026",
        description: "Plataforma de comercio con gestión dinámica de inventario y filtrado avanzado por modelo de vehículo.",
        achievements: [
            "Diseño de esquema relacional en PostgreSQL para manejo de órdenes y existencias.",
            "Optimización de la UX mediante interfaces reactivas con lógica de negocio automotriz.",
        ],
        tech: ["PostgreSQL", "Next.js", "Tailwind CSS", "UX/UI"]
    },
    {
        role: "Desarrollador FullStack",
        company: "Freelance",
        period: "Noviembre 2025 - Enero 2026",
        description: "Sistema integral de agendamiento con dashboard administrativo y reserva pública.",
        achievements: [
            "Implementación de arquitectura con Next.js Server Actions y API Routes para CRUD seguro.",
            "Configuración de lógica avanzada de zonas horarias para precisión regional en citas.",
        ],
        tech: ["Next.js", "MongoDB", "Server Actions", "API Routes"]
    }
];
const Experience = () => {
    return (
        <div className="space-y-12">
            {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l border-slate-800 pb-8 last:pb-0">
                    <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]"/>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <h3 className="text-cl font-bold text-white ">{exp.role}</h3>
                        <span className="text-sm font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 ">
                            {exp.period}
                        </span>
                    </div>

                    <p className="text-cyan-100/80 font-medium mb-4 italic">{exp.company}</p>
                    <p className="text-slate-400 mb-4">{exp.description}</p>

                    <ul className="list-disc list-inside space-y-2 mb-6 text-slate-300">
                        {exp.achievements.map((item, i) => (
                            <li key={i} className="text-sm leading-relaxed">
                                <span className="relative -left-1">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t,i) => (
                            <span key={i} className="text-[10px] uppercase tracking-wider font-bold bg-slate-900 text-slate-400 px-2 py-1 rounded border border-slate-800">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Experience;