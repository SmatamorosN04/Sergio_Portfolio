import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github} from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Listo para iniciar un proyecto?
            </h2>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
                Actualmente estoy buscando oportunidades para integrarme a un equipo dinámico como desarrollador Junior.
                Si tienes una pregunta o simplemente quieres saludar, ¡mi bandeja de entrada está abierta!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <a
                href="mailto:smatamorosn12@gmail.com"
                className="p-6 bg-slate=900/50 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-all group">
                    <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform"/>
                    <h4 className="text-white font-medium mb-1 ">Email</h4>
                    <p className="text-sm text-slate-500">smatamorosn12@gmail.com</p>

                </a>

                <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
                    <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4"/>
                    <h4 className="text-white font-medium mb-1">Ubicacion</h4>
                    <p className="text-sm text-slate-500">Ticuantepe, Managua, Nicaragua</p>
                </div>

                <a
                href="https://wa.me/50587731532"
                target="_blank"
                className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-all group"
                >
                    <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform"/>
                    <h4 className="text-white font-medium mb-1">Whatsapp</h4>
                    <p className="text-sm text-slate-500">+505 8773-1532</p>
                </a>
            </div>

            <div className="flex justify-center gap-6">
                <a href="https://github.com/SmatamorosN04"
                className="text-slate-400 hover:text-white transition-colors"
                >
                   <Github size={24}/>
                </a>
                <a href="www.linkedin.com/in/sergio-matamoros-nuñez-6a75a026a"
                className="text-slate-400 hover:text-white transition-colors"
                >
                    <Linkedin size={24}/>
                </a>
            </div>
        </div>
    )
}
export default Contact