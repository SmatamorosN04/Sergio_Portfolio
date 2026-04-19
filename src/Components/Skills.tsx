
const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite.js", "UX/UI"],
    backend: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "RESTful APIs"],
    tools: ["Git/GitHub", "Metodologías Ágiles", "Gestión de BD"]
};

const courses = [
    { name: "React Avanzado", date: "Nov 2025", school: "Platzi" },
    { name: "Next.js & Server Actions", date: "Ene 2026", school: "Platzi" },
    { name: "Manejo de Bases de Datos NoSQL", date: "Dic 2025", school: "Platzi" },
    { name: "Node.js & Express", date: "Nov 2025", school: "Platzi" }
];

const Skills = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-xl font-semibold text-white mb-6">Habilidades Tecnicas</h3>
                <div className="space-y-6">
                    <div>
                        <p className="text-sm font-mono text-cyan-400 mb-3 uppercasetrackiong-widest">Frontend</p>
                        <div className="flex flex-wrap gap-2">
                            {skills.frontend.map(s => (
                                <span key={s} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300 text-sm">{s}</span>

                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-mono text-cyan-400 mb-3 uppercase tracking-widest">Backend & DB</p>
                        <div className="flex flex-wrap gap-2">
                            {skills.backend.map(s => (
                                <span key={s} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300 text-sm">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-white mb-6">Formacion Continua</h3>
                <div className="space-y-4">
                    <div className="p4 rounded-lg bg-blue-500/5 border border-blue-500/10">
                        <p className="text-white font-medium">Ingenieria en Computacion</p>
                        <p className="text-sm text-slate-400">UNI | 2020-Presente</p>
                    </div>

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

        </div>
    )
}
export default Skills;