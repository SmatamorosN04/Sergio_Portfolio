import React, { useState, useRef, useEffect } from "react";

interface TerminalHistoryItem {
  command?: string;
  output: string;
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalHistoryItem[]>([
    { output: "Microsoft Windows XP [Versión 5.1.2600]" },
    { output: "(C) Copyright 1985-2001 Microsoft Corp." },
    { output: "" },
    { output: "Bienvenido a Terminal.sh - Portafolio de Sergio Matamoros." },
    { output: "Escribe 'help' para ver una lista de comandos disponibles." },
    { output: "" },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let reply = "";

    switch (trimmedCmd) {
      case "help":
        reply = `Comandos disponibles:
  help      - Muestra esta lista de comandos.
  about     - Información general sobre mí.
  projects  - Resumen de mis proyectos recientes.
  skills    - Stack tecnológico y herramientas.
  sysinfo   - Muestra detalles del sistema en estilo retro (neofetch).
  clear     - Limpia la pantalla de la terminal.`;
        break;

      case "about":
        reply = `Sergio Armando Matamoros
------------------------------------
Estudiante de Ingeniería de Sistemas (UNI)
Rol: Junior Full Stack Developer
Localización: Arch Linux Localhost

Soy un desarrollador de software enfocado en construir sistemas web funcionales, robustos y con gran rendimiento. Me encanta el entorno Linux, la optimización de código y aprender nuevas tecnologías backend y frontend.`;
        break;

      case "projects":
        reply = `Proyectos Destacados:
------------------------------------
1. Plataforma E-commerce SaaS:
   Sistema comercializable de ventas para repuestos de mototaxis.
   Stack: Next.js, React, PostgreSQL.
   
2. Ariel Tech Service - Scheduling System:
   Plataforma de reserva y optimización de citas para técnicos de mantenimiento.
   Stack: FastAPI, React, PostgreSQL.

* Visita mi Github para ver el código: https://github.com/SmatamorosN04`;
        break;

      case "skills":
        reply = `Stack Tecnológico:
------------------------------------
- Frontend : Next.js, React, TypeScript, TailwindCSS, CSS3
- Backend  : Node.js, FastAPI (Python)
- Bases de Datos : PostgreSQL
- Entorno  : Arch Linux, Git, Bash Shell`;
        break;

      case "sysinfo":
      case "neofetch":
        reply = `     _   _  _____ _____  _   _  _____ _____
    | | | ||  ___|  _  || | | ||  ___|  _  |
    | | | || |__  | | | || |_| || |__  | | |
    | | | ||  __| | | | ||  _  ||  __| | | |
    \\ \\_/ /| |___ \\ \\_/ /| | | || |___ \\ \\_/ /
     \\___/ \____/  \\___/ \_| |_/\____/  \___/
---------------------------------------------
OS: Portfolio OS (Vite/React Engine)
Host: Sergio-Dev-Laptop
Kernel: 6.9.1-arch1-1-custom
Uptime: 100% Activo
Shell: Terminal.sh (zsh emulation)
CPU: Gemini 3.5 Flash (AI Engine)
Memory: 512MB / 16GB (Optimized)`;
        break;

      case "clear":
        setHistory([]);
        return;

      case "":
        reply = "";
        break;

      default:
        reply = `El comando '${cmd}' no se reconoce como un comando interno o externo,
programa o archivo por lotes ejecutable. Escribe 'help' para ver los comandos válidos.`;
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output: reply }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  return (
    <div 
      className="w-full h-full bg-black font-mono text-[11px] sm:text-xs text-[#00ff00] p-2 flex flex-col overflow-y-auto select-text leading-relaxed select-text"
      style={{ textShadow: "0 0 2px rgba(0, 255, 0, 0.4)" }}
    >
      <div className="flex-1">
        {history.map((item, index) => (
          <div key={index} className="mb-2 whitespace-pre-wrap">
            {item.command !== undefined && (
              <div className="flex items-center gap-1">
                <span className="text-[#3b82f6]">C:\\portfolio&gt;</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
            )}
            {item.output && <div className="mt-0.5">{item.output}</div>}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-1 mt-2 border-t border-zinc-800 pt-2 shrink-0">
        <span className="text-[#3b82f6] shrink-0">C:\\portfolio&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-white font-mono p-0 h-auto"
          style={{ boxShadow: "none" }}
          autoFocus
          placeholder="Escribe un comando..."
        />
      </form>
    </div>
  );
}
