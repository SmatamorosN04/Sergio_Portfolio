import miFoto from '../assets/yo.png';
import micv from '../assets/Curriculum.pdf'
const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[70vh] py-20">

            <div className="flex-1 text-left z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
                    Disponible para nuevos proyectos
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                    Sergio Matamoros <br />
                    <span className="text-slate-500 text-4xl lg:text-6xl">
            FullStack Junior Developer.
          </span>
                </h1>

                <p className="text-lg lg:text-xl text-slate-400 max-w-xl mb-8 leading-relaxed">
                    Estudiante de último año de Ingeniería en Computación en la <span className="text-white">UNI</span>.
                    Especializado en crear aplicaciones modernas con el stack
                    <span className="text-cyan-400 font-mono"> Next.js, React, TypeScript, JavaScript, Java, Python, Node.js, MongoDB y PostgreSQL</span>.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="#proyectos"
                        className="px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
                    >
                        Explorar Proyectos
                    </a>

                    <a
                        href={micv}
                        download="Curriculum Vitae Sergio Matamoros.pdf"
                        className="px-6 py-3 border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2"
                    >
                        Descargar CV
                    </a>
                </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end relative">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                    <div className="absolute inset-0  blur-[80px] rounded-full animate-pulse" />

                    <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl">
                        <img
                            src={miFoto}
                            alt="Sergio Matamoros"
                            className="w-full h-full object-cover transition-all duration-700 ease-in-out scale-105 hover:scale-100"
                        />
                    </div>

                    <div className="absolute -bottom-4 -left-4 w-20 h-20 border-l-2 border-b-2 border-cyan-500/30 rounded-bl-2xl z-0" />
                </div>
            </div>
        </div>
    );
};

export default Hero;