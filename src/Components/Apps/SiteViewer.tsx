import { useState } from "react";
import { ExternalLink, FolderGit2, Globe, Loader2, RotateCw } from "lucide-react";

interface SiteViewerProps {
  /** URL de la página que se renderiza en la ventana */
  url: string;
  /** Repo de GitHub relacionado (opcional, botón "Código") */
  repoUrl?: string;
  /** Título del sitio (para el atributo title del iframe) */
  title: string;
}

export default function SiteViewer({ url, repoUrl, title }: SiteViewerProps) {
  const [reloadKey, setReloadKey] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const openExternal = (target: string) => window.open(target, "_blank", "noopener,noreferrer");

  const reload = () => {
    setLoaded(false);
    setReloadKey((k) => k + 1);
  };

  return (
    <div className="w-full h-full flex flex-col gap-1.5 font-sans text-xs text-slate-950 select-text">
      {/* --- Barra de dirección estilo Internet Explorer --- */}
      <div className="flex items-center gap-1.5 shrink-0">
        <label htmlFor="site-address" className="font-bold text-slate-700 shrink-0">
          Dirección:
        </label>
        <input
          id="site-address"
          type="text"
          value={url}
          readOnly
          onClick={(e) => e.currentTarget.select()}
          onFocus={(e) => e.currentTarget.select()}
          className="flex-1 min-w-0 font-mono text-[11px]"
        />
        <button
          onClick={reload}
          title="Recargar página (F5)"
          aria-label="Recargar"
        >
          <span className="inline-flex items-center justify-center w-[18px]">
            <RotateCw size={11} />
          </span>
        </button>
        <button onClick={() => openExternal(url)} title="Abrir en pestaña nueva">
          <span className="inline-flex items-center gap-1">
            <ExternalLink size={11} /> Nueva pestaña
          </span>
        </button>
        {repoUrl && (
          <button onClick={() => openExternal(repoUrl)} title="Ver el código fuente">
            <span className="inline-flex items-center gap-1">
              <FolderGit2 size={11} /> Código
            </span>
          </button>
        )}
      </div>

      {/* --- Viewport de la página --- */}
      <div className="flex-1 min-h-0 relative rounded-sm border border-[#7f9db9] bg-white overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-[#f0f0ed]">
            <Loader2 className="animate-spin text-[#0a60ff]" size={22} />
            <span className="text-[11px] font-medium text-slate-500">Conectando con {title}…</span>
          </div>
        )}
        <iframe
          key={reloadKey}
          src={url}
          title={`Página de ${title}`}
          onLoad={() => setLoaded(true)}
          className="w-full h-full border-0"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* --- Barra de estado XP --- */}
      <div className="status-bar shrink-0 flex font-sans">
        <div className="status-bar-field flex-1 min-w-0">
          <span className="inline-flex items-center gap-1 truncate">
            <Globe size={10} /> {(loaded ? "Listo" : "Conectando…") + " — " + new URL(url).hostname}
          </span>
        </div>
        <div className="status-bar-field hidden sm:block shrink-0 w-24 text-right">Internet</div>
      </div>
    </div>
  );
}
