/**
 * Tus sitios desplegados. Cada entrada se convierte en una "app" del
 * Portfolio OS y, al abrirla, la página se renderiza dentro de la ventana
 * (estilo Internet Explorer: barra de dirección + iframe).
 *
 * Para agregar otra página, añade un objeto aquí y listo.
 */
export interface SiteAppConfig {
  /** id corto (se usa para el color/gradiente del icono y el id de la ventana) */
  id: string;
  /** Título en el escritorio, barra de tareas y menú de inicio */
  title: string;
  /** URL de la página que se carga en la ventana */
  url: string;
  /** Icono (clave de iconMap en appIcons.ts) */
  icon: string;
  /** (opcional) repo de GitHub relacionado: muestra el botón "Código" */
  repoUrl?: string;
}

export const SITE_APPS: SiteAppConfig[] = [
  {
    id: "cubanica",
    title: "cubanica",
    url: "https://cubanica.vercel.app",
    icon: "Music",
  },
  {
    id: "ecommerce",
    title: "e-commerce",
    url: "https://e-commerce-five-virid-58.vercel.app",
    icon: "ShoppingCart",
    repoUrl: "https://github.com/SmatamorosN04/E_Commerce",
  },
  {
    id: "cvcreator",
    title: "cv creator",
    url: "https://curriculum-vitae-creator.vercel.app/?id=818ea6d5-80ec-46fb-90fa-c5732aecf988",
    icon: "FileText",
  },
  {
    id: "scheduling",
    title: "scheduling app",
    url: "https://scheduling-app-orcin-eight.vercel.app",
    icon: "CalendarDays",
    repoUrl: "https://github.com/SmatamorosN04/scheduling_APP",
  },
];
