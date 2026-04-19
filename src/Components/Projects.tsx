import React from 'react';
import { ExternalLink, Github, Database, Layout} from 'lucide-react';

const projects = [
    {
        title: "E-Commerce Repuestos San Antonio",
        description: "Plataforma digitalizada para la gestión de inventario automotriz con filtrado avanzado por modelo y año.",
        tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "TypeScript"],
        link: "https://e-commerce-five-virid-58.vercel.app/",
        github: "https://github.com/SmatamorosN04/E_Commerce",
        image: "/Ecommerce.png",
        features: ["Filtrado dinámico", "Gestión de existencias", "UX Reactiva"]
    },
    {
        title: "Ariel Scheduling System",
        description: "Sistema de agendamiento integral con panel administrativo para técnicos y reserva pública de citas.",
        tech: ["Next.js", "MongoDB", "Server Actions", "Context API"],
        link: "https://scheduling-app-orcin-eight.vercel.app/",
        github: "https://github.com/SmatamorosN04/scheduling_APP",
        image: "Portada.png",
        features: ["Zonas horarias", "Dashboard CRUD", "Auth segura"]
    }
];
const Projects = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <div key={index} className="group relative bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                    {/* Overlay de imagen o placeholder */}
                    <div className="h-48 bg-slate-800 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
                        <Layout className="w-12 h-12 text-slate-700 group-hover:scale-110 transition-transform" />
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t, i) => (
                                <span key={i} className="text-[10px] font-mono text-cyan-300 bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10">
                  {t}
                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <a href={project.github} className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-sm">
                                <Github size={18} /> Code
                            </a>
                            <a href={project.link} className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-sm">
                                <ExternalLink size={18} /> Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Projects;