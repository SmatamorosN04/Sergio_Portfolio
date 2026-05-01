import { motion } from 'framer-motion';
import miFoto from '../assets/yo.png';
import micv from '../assets/Curriculum.pdf'

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[70vh] py-20">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 text-left z-10"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    Disponible para nuevos proyectos
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight leading-[1.1]">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-500">
                        Sergio Matamoros
                    </span>
                    <br />
                    <span className="text-slate-500 dark:text-slate-500 text-4xl lg:text-6xl font-medium">
                        FullStack Developer.
                    </span>
                </h1>

                <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-xl mb-8 leading-relaxed">
                    Estudiante de último año de Ingeniería en Computación en la <span className="text-slate-900 dark:text-white font-semibold">UNI</span>. 
                    Enfocado en construir soluciones escalables y experiencias digitales de alto impacto utilizando 
                    <span className="text-cyan-600 dark:text-cyan-400 font-mono ml-1">Next.js, TypeScript y Node.js</span>.
                </p>

                <div className="flex flex-wrap gap-4">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#proyectos"
                        className="px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
                    >
                        Explorar Proyectos
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={micv}
                        download="Curriculum Vitae Sergio Matamoros.pdf"
                        className="px-8 py-4 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
                    >
                        Descargar CV
                    </motion.a>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 flex justify-center lg:justify-end relative"
            >
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                    <div className="absolute inset-0 bg-cyan-500/20 dark:bg-cyan-500/20 blur-[100px] rounded-full animate-pulse" />

                    <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-2xl group">
                        <img
                            src={miFoto}
                            alt="Sergio Matamoros"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>

                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-cyan-500/30 rounded-br-3xl z-0" />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
