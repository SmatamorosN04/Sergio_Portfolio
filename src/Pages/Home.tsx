import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Experience from '../Components/Experience';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';
import Contact from '../Components/Contact';

export default function Home() {
    return (
        <div className="relative bg-white dark:bg-slate-950 transition-colors duration-300 selection:bg-cyan-500/30 selection:text-cyan-200">
            <Navbar/>
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] rounded-full bg-cyan-500/10 dark:bg-cyan-900/20 blur-[120px]"/>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 dark:bg-blue-900/20 blur-[120px]"/>
            </div>

            <main className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
                <section id="inicio" className="min-h-screen flex items-center pt-20">
                    <Hero/>
                </section>

                <section id="experiencia" className="py-24 border-t border-slate-100 dark:border-slate-900">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-4">
                            <span className="text-cyan-600 dark:text-cyan-500 font-mono text-xl">01.</span>
                            Experiencia Profesional
                        </h2>
                        <div className="h-1 w-20 bg-cyan-500 mt-2 rounded-full"/>
                    </div>
                    <Experience/>
                </section>

                <section id="proyectos" className="py-24 border-t border-slate-100 dark:border-slate-900">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-4">
                            <span className="text-cyan-600 dark:text-cyan-500 font-mono text-xl">02.</span>
                            Proyectos Destacados
                        </h2>
                        <div className="h-1 w-20 bg-cyan-500 mt-2 rounded-full"/>
                    </div>
                    <Projects/>
                </section>

                <section id="skills" className="py-24 border-t border-slate-100 dark:border-slate-900">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-4">
                            <span className="text-cyan-600 dark:text-cyan-500 font-mono text-xl">03.</span>
                            Stack & Formacion
                        </h2>
                        <div className="h-1 w-20 bg-cyan-500 mt-2 rounded-full"/>
                    </div>
                    <Skills/>
                </section>

                <section id="contacto" className="py-24 border-t border-slate-100 dark:border-slate-900">
                    <Contact/>
                </section>
            </main>

            <footer className="relative z-10 py-12 text-center border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors duration-300">
                <p className="text-slate-500 text-sm tracking-widest font-mono">
                    SERGIO MATAMOROS &copy; {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    )
}
