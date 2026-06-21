import TechCube from "./Animations/TechCube";
import { motion } from 'framer-motion';

const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite.js", "UX/UI"],
    backend: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "RESTful APIs"],
    tools: ["Git/GitHub", "Metodologías Ágiles", "Gestión de BD"],
    soft: ["Trabajo en Equipo", "Empatía", "Liderazgo", "Pensamiento Analítico", "Detallismo"]
};

const courses = [
    { name: "React Avanzado", date: "Nov 2025", school: "Platzi" },
    { name: "Next.js & Server Actions", date: "Ene 2026", school: "Platzi" },
    { name: "Manejo de Bases de Datos NoSQL", date: "Dic 2025", school: "Platzi" },
    { name: "Node.js & Express", date: "Nov 2025", school: "Platzi" }
];

const Skills = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
                    Expertise Técnica
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div 
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/30 transition-all"
                        >
                            <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-4 uppercase tracking-[0.2em] font-bold">
                                {category === 'soft' ? 'Habilidades Blandas' : category}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {items.map(s => (
                                    <span key={s} className="px-3 py-1 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 text-xs hover:text-cyan-600 dark:hover:text-white hover:border-cyan-500/50 transition-all cursor-default">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
                    Formación
                </h3>
                <div className="space-y-6">
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-5 rounded-2xl bg-cyan-50 dark:bg-gradient-to-br dark:from-cyan-500/10 dark:to-blue-500/10 border border-cyan-200 dark:border-cyan-500/20"
                    >
                        <p className="text-slate-900 dark:text-white font-bold mb-1">Ingeniería en Computación</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 flex justify-between items-center">
                            <span>UNI</span>
                            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">2020-Presente</span>
                        </p>
                    </motion.div>

                    <div className="space-y-3 mt-6">
                        <p className="text-sm font-mono text-cyan-400 uppercase tracking-widest">Certificados Recientes</p>
                        {courses.map((course, index) => (
                            <div key={index} className="flex justify-between items-center text-sm border-b border-slate-900 pb-2">
                                <span className="text-slate-300">{course.name}</span>
                                <span className="text-slate-500 font-mono text-xs">{course.date}</span>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
                        <div className="w-full flex flex-col items-center justify-center pt-8 border-t border-slate-900/50">
                <p className="text-xs font-mono text-slate-600 mb-4 tracking-widest uppercase animate-pulse">
                    Interactúa con el cubo del Stack
                </p>
                <TechCube />
            </div>
                    <div className="space-y-4">
                        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest ml-1">Certificaciones Recientes</p>
                        <div className="space-y-3">
                            {courses.map((course, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex justify-between items-center p-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all group"
                                >
                                    <div>
                                        <p className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{course.name}</p>
                                        <p className="text-[10px] text-slate-500">{course.school}</p>
                                    </div>
                                    <span className="text-xs font-mono text-slate-400 dark:text-slate-600">{course.date}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;
