import { useState, useEffect } from "react";
import Taskbar from "../Components/Taskbar";
import DesktopIcon from "../Components/DesktopIcon";
import StartMenu from "../Components/StartMenu";
import Window from "../Components/WIndow";
import AboutMe from "../Components/Apps/AboutMe";
import Projects from "../Components/Apps/Projects";
import Doom from "../Components/Apps/Doom";
import Terminal from "../Components/Apps/Terminal";
import SiteViewer from "../Components/Apps/SiteViewer";
import { SITE_APPS } from "../Components/Apps/siteLinks";

export interface WindowApp {
  id: string;
  title: string;
  icon: string;
  /** Si la ventana muestra una página desplegada, su URL (se carga en un iframe). */
  siteUrl?: string;
  /** (opcional) repo de GitHub relacionado con la página */
  repoUrl?: string;
  isOpen: boolean;
  isMaximized: boolean;
  isMinimized: boolean;
  zIndex: number;
}

function makeSiteWindow(app: (typeof SITE_APPS)[number]): WindowApp {
  return {
    id: app.id,
    title: app.title,
    icon: app.icon,
    siteUrl: app.url,
    repoUrl: app.repoUrl,
    isOpen: false,
    isMaximized: false,
    isMinimized: false,
    zIndex: 1,
  };
}

export default function Desktop() {
  const [windows, setWindows] = useState<WindowApp[]>([
    { id: "about", title: "about me", icon: "User", isOpen: true, isMaximized: false, isMinimized: false, zIndex: 1 },
    { id: "projects", title: "projects", icon: "FolderGit2", isOpen: false, isMaximized: false, isMinimized: false, zIndex: 1 },
    { id: "doom", title: "doom.exe", icon: "Gamepad2", isOpen: false, isMaximized: false, isMinimized: false, zIndex: 1 },
    { id: "terminal", title: "Terminal.sh", icon: "Terminal", isOpen: false, isMaximized: false, isMinimized: false, zIndex: 1 },
    // Apps de tus páginas desplegadas (ver Components/Apps/siteLinks.ts)
    ...SITE_APPS.map(makeSiteWindow),
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
        w.id === id ? { ...w, zIndex: newZ, isMinimized: false } : w
      )
    );
  };

  const toggleWindow = (id: string, action: "open"| "close" | "maximize" | "minimize") => {
    setWindows(
      windows.map((w) => {
        if (w.id !== id) return w;

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

      <div className="absolute inset-0 z-0 overflow-hidden bg-linear-to-b from-sky-500 to-emerald-500">
        <img
          src="https://i.blogs.es/89aaa3/650_1000_bliss-original/1024_2000.jpg"
          alt="Bliss Wallpaper Retro"
          className="w-full h-full object-cover select-none pointer-events-none brightness-75 contrast-110 saturate-125"
        />
        {/* Brillo cálido arriba, profundidad abajo */}
        <div className="absolute inset-0 bg-linear-to-b from-sky-400/10 via-transparent to-emerald-950/50 mix-blend-multiply" />
        <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(2,6,23,0.55)]" />
      </div>

      <div className="flex-1 relative">

        <div className="absolute inset-0 z-10 flex flex-col flex-wrap gap-3 items-start content-start pt-2">
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
                  display: isVisible ? "block" : "none",
                }}
                className={`absolute pointer-events-auto transition-all duration-200 ${
                  forceMaximized
                    ? "inset-0 w-full h-full p-0"
                    : "top-8 left-8 w-auto h-auto"
                }`}
              >
                <Window
                  app={app}
                  onClose={() => toggleWindow(app.id, "close")}
                  onMinimize={() => toggleWindow(app.id, "minimize")}
                  onMaximize={() => toggleWindow(app.id, "maximize")}
                  onFocus={() => focusWindow(app.id)}
                >
                  {app.id === "about" && <AboutMe />}
                  {app.id === "projects" && <Projects />}
                  {app.id === "doom" && app.isOpen && <Doom />}
                  {app.id === "terminal" && <Terminal />}
                  {app.siteUrl && <SiteViewer url={app.siteUrl} repoUrl={app.repoUrl} title={app.title} />}
                </Window>
              </div>
            );
          })}
        </div>

      </div>

      {isStartMenuOpen && (
        <StartMenu
          windows={windows}
          onOpenApp={(id) => toggleWindow(id, "open")}
          onClose={() => setIsStartMenuOpen(false)}
        />
      )}

      <Taskbar
        windows={windows}
        onIconClick={(id) => focusWindow(id)}
        onQuickLaunch={(id) => {
          const target = windows.find((w) => w.id === id);
          if (target?.isOpen && !target.isMinimized) focusWindow(id);
          else toggleWindow(id, "open");
        }}
        onStartClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
        isStartMenuOpen={isStartMenuOpen}
      />
    </div>
  );
}
