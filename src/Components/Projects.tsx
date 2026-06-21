import { motion } from 'framer-motion';
import { ExternalLink, Github, Layout } from 'lucide-react';
import ecommerceimage from '../assets/Ecommerce.png'
import schedulingImage from '../assets/Portada.png'

const projects = [
    {
        title: "E-Commerce Repuestos San Antonio",
        description: "Plataforma digitalizada para la gestión de inventario automotriz con filtrado avanzado por modelo y año.",
        tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "TypeScript"],
        link: "https://e-commerce-five-virid-58.vercel.app/",
        github: "https://github.com/SmatamorosN04/E_Commerce",
        image: ecommerceimage,
        features: ["Filtrado dinámico", "Gestión de existencias", "UX Reactiva"]
    },
    {
        title: "Ariel Scheduling System",
        description: "Sistema de agendamiento integral con panel administrativo para técnicos y reserva pública de citas.",
        tech: ["Next.js", "MongoDB", "Server Actions", "Context API"],
        link: "https://scheduling-app-orcin-eight.vercel.app/",
        github: "https://github.com/SmatamorosN04/scheduling_APP",
        image: schedulingImage,
        features: ["Zonas horarias", "Dashboard CRUD", "Auth segura"]
    }
];

const Projects = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group relative bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-sm dark:shadow-none"
                >
                    <div className="relative h-56 w-full overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-80 dark:from-slate-950 dark:via-slate-950/20" />
                        
                        <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <a 
                                href={project.github} 
                                className="p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                                title="View Code"
                            >
                                <Github size={20} />
                            </a>
                            <a 
                                href={project.link} 
                                className="p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                                title="Live Demo"
                            >
                                <ExternalLink size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>
                            <Layout className="w-5 h-5 text-slate-400 dark:text-slate-600 group-hover:text-cyan-500 transition-colors" />
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-5 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t, i) => (
                                <span key={i} className="text-[10px] font-mono text-cyan-600 dark:text-cyan-300 bg-cyan-500/5 px-2 py-1 rounded border border-cyan-500/10">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                            <div className="flex gap-3">
                                {project.features.slice(0, 2).map((f, i) => (
                                    <span key={i} className="text-[10px] text-slate-400 dark:text-slate-500 italic">#{f}</span>
                                ))}
                            </div>
                            <a 
                                href={project.link} 
                                className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors flex items-center gap-1"
                            >
                                Case Study <ExternalLink size={12} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
};

export default Projects;
