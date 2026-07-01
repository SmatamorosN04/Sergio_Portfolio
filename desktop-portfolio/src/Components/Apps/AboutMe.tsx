import React from "react";

export default function AboutMe(){
    return (
        <div className="font-mono text-xs text-slate-900 w-full h-full flex flex-col gap-4 select-text">
           <div className="flex flex-col gap-1 bg-white/40 p-3 border border-slate-300 rounded-xs shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05)]">
            <h2 className="text-base font-bold text-[#0a60ff] tracking-tight m-0">
                Sergio Armando Matamoros 
            </h2>
            <p className="text-slate-500 font-mono text-xs m-0 -mt-0.5 pb-1 border-b border-dashed border-slate-300">
                System: Portfolio OS
            </p>
            <div className="pt-1.5 space-y-1 font-medium text-slate-800">
                <p className="m-0">
                    <span className="text-slate-500 font-bold">Universidad: </span> Computer Engineering Student @ UNI
                </p>
                <p className="m-0">
                    <span className="text-slate-500 font-bold">Rol: </span>Junior Full Stack Developer
                </p>
            </div>
           </div>

            <div className="flex flex-col gap-1.5">
                <h3 className="font-sans font-bold text-sm text-[#0a60ff] border-b border-slate-300 pb-0.5">
                    Stack Tecnologico 
                </h3>
                <ul className="list-disc list-inside space-y-1 pl-1 text-slate-700">
                    <li> <span className="font-bold tex-slate-900">FRONTEND:</span>NEXT.JS, REACT, TYPESCRIPT</li>
                    <li> <span className="font-bold tex-slate-900">BACKEND & DB:</span>NODE.JS, FASTAPI, POSTGRESQL</li>
                    <li> <span className="font-bold tex-slate-900">ENTORNO LOCAL:</span>ARCH LINUX</li>


                </ul>
            </div>

            <div className="flex flex-col gap-1.5">
                <h3 className="font-sans font-bold text-sm text-[#0a60ff] border-b border-slate-300 pb-0.5">
                    Proyectos recientes
                </h3>
                <div className="space-y-3.5 pl-1 ">
                    <div>
                        <h4 className="font-bold text-slate-950 text-xs uppercase m-0 tracking-wide">plataforma E-commerce SaaS</h4>
<p className="text-slate-600 m-0 mt-0.5 font-medium">Sistema completo y comercializable de ventas orientado a repuestos de mototaxis, con persistencia avanzada de datos e historial de inventario utilizando PostgreSQL.</p>                    </div>
                    <div>
                        <h4 className="font-bold text-slate-950 text-xs uppercase m-0 tracking-wide">Ariel Tech Service - Scheduling System</h4>
                        <p className="text-slate-600 m-0 mt-0.5 font-medium">Plataforma de reserva, análisis de campo y optimización de citas diseñada para técnicos de mantenimiento y sistemas de aire acondicionado.</p>
                    </div>
                </div>
            </div>

            

        </div>
    )
} 