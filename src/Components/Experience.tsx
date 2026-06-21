import { motion } from 'framer-motion';

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
        <div className="space-y-8">
            {experience.map((exp, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/30 transition-all duration-300"
                >
                    <div className="md:col-span-1">
                        <span className="text-sm font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 inline-block">
                            {exp.period}
                        </span>
                    </div>
                    
                    <div className="md:col-span-3">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-1">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                {exp.role}
                            </h3>
                            <p className="text-slate-500 dark:text-cyan-100/60 font-medium italic text-sm">
                                {exp.company}
                            </p>
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                            {exp.description}
                        </p>
                        
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            {exp.achievements.map((item, i) => (
                                <li key={i} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                                    <span className="text-cyan-500 mt-1">▹</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2">
                            {exp.tech.map((t, i) => (
                                <span key={i} className="text-[10px] uppercase tracking-wider font-bold bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded border border-slate-300 dark:border-slate-700 group-hover:border-cyan-500/30 transition-colors">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
export default Experience;
