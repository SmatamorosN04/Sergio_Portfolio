
const Hero = () => {
    return (
        <div className="flex flex-col items-start justify-center min-h-[60vh]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6 animate-fade-in">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>

                </span>
                Disponibilidad para nuevos proyectos
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                Sergio Matamoros <br/>
                <span className="text-slate-500 text-4xl lg:text-6xl">
                    FullStack Junior Developer
                </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
                Estudiante de último año de Ingeniería en Computación en la <span className="text-white">UNI</span>.
                Me especializo en crear aplicaciones web modernas y seguras utilizando el stack
                <span className="text-cyan-400 font-mono"> Next.js, React, Node.js, Java, MongoDB y PostgreSQL</span>.
                Apasionado por transformar problemas complejos en interfaces intuitivas.
            </p>

            <div className="flex flex-wrap gap-4">
                <a
                href="#projects"
                className="px-6 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
                >
                    Explorar Proyectos
                </a>
                <a
                href="/Curriculum.pdf"
                target="_blank"
                className="px-6 py-3 bg-white border border-slate-700 font-semibold rounded-lg hover:bg-slate-800 transition-all"
                >
                    Descargar CV
                </a>
            </div>
        </div>
    )
};
export default  Hero
