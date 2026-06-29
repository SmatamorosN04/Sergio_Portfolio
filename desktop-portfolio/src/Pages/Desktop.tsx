import { useState } from "react";
import Taskbar from "../Components/Taskbar";
import DesktopIcon from "../Components/DesktopIcon";
import Window from "../Components/WIndow";
import AboutMe from "../Components/Apps/AboutMe";
import Projects from "../Components/Apps/Projects";
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

    const focusWindow = (id: string) => {
        const newZ = maxZIndex + 1;
        setMaxZIndex(newZ);
        setWindows(
            windows.map((w) => 
            w.id === id ? {...w, zIndex: newZ, isMinized: false}: w
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
    <div className="h-screen w-screen relative overflow-hidden bg-slate-950 p-4 flex flex-col justify-between selection:bg-purple-500/30">
      
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.blogs.es/89aaa3/650_1000_bliss-original/1024_2000.jpg" 
          alt="Bliss Wallpaper Retro" 
          className="w-full h-full object-cover select-none pointer-events-none brightness-40 contrast-115 saturate-125"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-purple-950/10 to-transparent mix-blend-color-burn" />
      </div>
      <div className="flex-1 relative flex flex-col flex-wrap gap-4 items-start content-start pt-2 z-10">
        {windows.map((app) => (
          <DesktopIcon 
            key={app.id} 
            app={app} 
            onOpen={() => toggleWindow(app.id, "open")} 
          />
        ))}

        {windows.map((app) => app.isOpen && (
          <Window 
            key={app.id} 
            app={app} 
            onClose={() => toggleWindow(app.id, "close")}
            onMinimize={() => toggleWindow(app.id, "minimize")}
            onMaximize={() => toggleWindow(app.id, "maximize")}
            onFocus={() => focusWindow(app.id)}
          >
            {app.id === "about" && <AboutMe/>}

            {app.id === "projects" && <Projects/>}
            
          </Window>
        ))}
      </div>

      <Taskbar windows={windows} onIconClick={(id) => focusWindow(id)} />
    </div>
  );

}