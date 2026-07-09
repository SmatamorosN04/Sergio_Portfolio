import { useState, useEffect } from "react";
import Taskbar from "../Components/Taskbar";
import DesktopIcon from "../Components/DesktopIcon";
import Window from "../Components/WIndow";
import AboutMe from "../Components/Apps/AboutMe";
import Projects from "../Components/Apps/Projects";
import Doom from "../Components/Apps/Doom";
import Terminal from "../Components/Apps/Terminal";

export interface WindowApp { 
    id: string;
    title: string;
    icon: string;
    isOpen: boolean;
    isMaximized: boolean;
    isMinimized: boolean;
    zIndex: number;
}

export default function Desktop() {
    const [windows, setWindows] = useState<WindowApp[]>([
        { id: "about", title: "about me", icon: "User", isOpen: true, isMaximized: false, isMinimized: false, zIndex: 1 },
        { id: "projects", title: "projects", icon: "FolderGit2", isOpen: false, isMaximized: false, isMinimized: false, zIndex: 1 },
        { id: "doom", title: "doom.exe", icon: "Gamepad2", isOpen: false, isMaximized: false, isMinimized: false, zIndex: 1 },
        { id: "terminal", title: "Terminal.sh", icon: "Terminal", isOpen: false, isMaximized: false, isMinimized: false, zIndex: 1 },
    ]);

    const [maxZIndex, setMaxZIndex] = useState(1);

    // Estado del Menú de Inicio
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

    // Detección de pantallas móviles
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const focusWindow = (id: string) => {
        const newZ = maxZIndex + 1;
        setMaxZIndex(newZ);
        setWindows(
            windows.map((w) => 
                w.id === id ? {...w, zIndex: newZ, isMinimized: false}: w
            )
        );
    };

    const toggleWindow = (id: string, action: "open"| "close" | "maximize" | "minimize") => {
        setWindows(
            windows.map((w) => {
                if(w.id !== id) return w;
                
                switch (action) {
                    case "open":
                        return { ...w, isOpen: true, isMinimized: false, zIndex: maxZIndex + 1 };
                    case "close":
                        return { ...w, isOpen: false };
                    case "maximize":
                        return { ...w, isMaximized: !w.isMaximized };
                    case "minimize":
                        return { ...w, isMinimized: true };
                    default:
                        return w;
                }
            })
        );
        if (action === "open") {
            setMaxZIndex(prevZ => prevZ + 1);
        }
    };

    return (
        <div 
          onClick={() => setIsStartMenuOpen(false)}
          className="h-screen w-screen relative overflow-hidden bg-slate-950 p-4 flex flex-col justify-between selection:bg-purple-500/30"
        >
          
          <div className="absolute inset-0 z-0">
            <img 
              src="https://i.blogs.es/89aaa3/650_1000_bliss-original/1024_2000.jpg" 
              alt="Bliss Wallpaper Retro" 
              className="w-full h-full object-cover select-none pointer-events-none brightness-40 contrast-115 saturate-125"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-purple-950/10 to-transparent mix-blend-color-burn" />
          </div>

          <div className="flex-1 relative">
            
            <div className="absolute inset-0 z-10 flex flex-col flex-wrap gap-4 items-start content-start pt-2">
              {windows.map((app) => (
                <DesktopIcon 
                  key={app.id} 
                  app={app} 
                  onOpen={() => toggleWindow(app.id, "open")} 
                />
              ))}
            </div>

            <div className="absolute inset-0 z-20 pointer-events-none">
              {windows.map((app) => {
                
                // Renderizar siempre en el DOM "about" y "projects" para permitir indexación SEO.
                // Doom se mantiene condicional por rendimiento (descarga de emulador/juego).
                const shouldRenderInDOM = app.id === "about" || app.id === "projects" || app.isOpen;
                if (!shouldRenderInDOM) return null;

                const isVisible = app.isOpen && !app.isMinimized;
                const forceMaximized = app.isMaximized || isMobile;

                return (
                  <div 
                    key={app.id} 
                    style={{ 
                      zIndex: app.zIndex,
                      display: isVisible ? "block" : "none" 
                    }} 
                    className={`absolute pointer-events-auto transition-all duration-200 ${
                      forceMaximized 
                        ? "inset-0 w-full h-full p-0" 
                        : "top-10 left-10 w-auto h-auto" 
                    }`}
                  >
                    <Window 
                      app={app} 
                      onClose={() => toggleWindow(app.id, "close")}
                      onMinimize={() => toggleWindow(app.id, "minimize")}
                      onMaximize={() => toggleWindow(app.id, "maximize")}
                      onFocus={() => focusWindow(app.id)}
                    >
                      {app.id === "about" && <AboutMe/>}
                      {app.id === "projects" && <Projects/>}
                      {app.id === "doom" && app.isOpen && <Doom/>}
                      {app.id === "terminal" && <Terminal/>}
                    </Window>
                  </div>
                );
              })}
            </div>

          </div>


          <Taskbar 
            windows={windows} 
            onIconClick={(id) => focusWindow(id)} 
            onStartClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
          />
        </div>
    );
}