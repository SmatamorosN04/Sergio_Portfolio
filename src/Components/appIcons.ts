import {
  User,
  FolderGit2,
  Gamepad2,
  Terminal,
  Gauge,
  Package,
  GraduationCap,
  Brain,
  Bot,
  ShoppingCart,
  Briefcase,
  CalendarDays,
  Sparkles,
  Music,
  FileText,
  HelpCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { WindowApp } from "../Pages/Desktop";

export const iconMap: Record<string, LucideIcon> = {
  User,
  FolderGit2,
  Gamepad2,
  Terminal,
  Gauge,
  Package,
  GraduationCap,
  Brain,
  Bot,
  ShoppingCart,
  Briefcase,
  CalendarDays,
  Sparkles,
  Music,
  FileText,
};

/* --- Identidad visual (icono + degradado del "tile") por ventana --- */

const BASE_GRADIENTS: Record<string, string> = {
  about: "from-orange-400 via-amber-400 to-yellow-500",
  projects: "from-cyan-400 via-sky-500 to-blue-600",
  doom: "from-red-500 via-rose-600 to-red-700",
  terminal: "from-emerald-400 via-green-500 to-teal-600",
  // Apps de sitios desplegados
  cubanica: "from-rose-400 via-red-500 to-rose-600",
  ecommerce: "from-amber-400 via-orange-500 to-orange-600",
  cvcreator: "from-violet-500 via-purple-500 to-purple-600",
  scheduling: "from-sky-400 via-cyan-500 to-cyan-600",
};

const PALETTE = [
  "from-violet-500 to-purple-600",
  "from-fuchsia-500 to-pink-600",
  "from-teal-400 to-cyan-600",
  "from-indigo-500 to-blue-700",
  "from-amber-400 to-orange-500",
  "from-rose-500 to-red-600",
  "from-emerald-400 to-green-600",
  "from-sky-400 to-blue-600",
];

const hashString = (s: string) =>
  [...s].reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) % 997, 7);

export function getAppVisual(app: WindowApp): { Icon: LucideIcon; gradient: string } {
  const Icon = iconMap[app.icon] ?? HelpCircle;
  const gradient =
    BASE_GRADIENTS[app.id] ??
    PALETTE[hashString(app.id) % PALETTE.length];

  return { Icon, gradient };
}
