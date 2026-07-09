# 🖥️ Portfolio OS — Desktop Web Environment

**Portafolio interactivo de Sergio Matamoros** modelado como un entorno de sistema operativo de escritorio retro-moderno estilo **Windows XP**. Este proyecto centraliza mi perfil profesional, proyectos de ingeniería y habilidades técnicas en una interfaz web fluida, interactiva y totalmente responsiva.

> 🔗 **Live Demo:** [smatamorosn04.github.io/Sergio_Portfolio](https://smatamorosn04.github.io/Sergio_Portfolio/)
> 👤 **Autor:** Sergio Armando Matamoros · [@SmatamorosN04](https://github.com/SmatamorosN04)

---

## 🎯 ¿De qué trata este proyecto?

En lugar de un portafolio tradicional (página estática con secciones de scroll), este proyecto replica la experiencia de un sistema operativo de escritorio directamente en el navegador. El usuario puede:

- **Abrir y cerrar ventanas** igual que en Windows XP.
- **Arrastrar y reposicionar** las ventanas libremente por el escritorio.
- **Minimizar, maximizar y apilar** ventanas con un sistema de capas `zIndex`.
- **Navegar por mi perfil** desde el Menú de Inicio estilo XP.
- **Explorar mis proyectos** de GitHub en tiempo real.
- **Usar la terminal interactiva** con comandos personalizados (`help`, `neofetch`, `skills`, etc.).
- **Jugar Doom** embebido directamente en el escritorio mediante WebAssembly.

---

## 🚀 Características Principales

| Característica | Descripción |
|---|---|
| 🪟 **Ventanas interactivas** | Sistema completo de gestión de ventanas con drag, focus, minimizar, maximizar y cerrar |
| 📋 **Menú de Inicio** | Menú XP clásico con acceso a todas las apps, links externos y botón de apagado |
| 💻 **Terminal.sh** | Emulador de consola interactivo con comandos personalizados para explorar el perfil |
| 📁 **Proyectos en tiempo real** | Tarjetas de repos cargadas dinámicamente desde la GitHub API |
| 🎮 **Doom.exe** | Juego clásico embebido via WebAssembly e iframe, activado bajo demanda |
| 📱 **Diseño responsivo** | En móvil, las ventanas se fuerzan a pantalla completa automáticamente |
| ⚡ **Performance 100/100** | Tree-shaking agresivo de iconos + build optimizado con Vite = bundle mínimo |
| 🔍 **SEO optimizado** | Open Graph, JSON-LD, robots.txt, sitemap.xml y font-display: swap |

---

## 🛠️ Stack Tecnológico

| Categoría | Tecnología |
|---|---|
| **Framework UI** | React 19 + TypeScript |
| **Estilos** | TailwindCSS v4 + xp.css (estética Windows XP) |
| **Bundler** | Vite 8 |
| **Iconos** | Lucide React (imports individuales para tree-shaking) |
| **Juego embebido** | WebAssembly (Doom.wasm) + iframe sandboxado |
| **Datos dinámicos** | GitHub REST API v3 |
| **Fuentes** | Pixelated MS Sans Serif + Perfect DOS VGA 437 |

---

## 🏗️ Arquitectura y Cómo Funciona

### 1. Estado Central del Escritorio (`Desktop.tsx`)

Toda la lógica de gestión del sistema operativo vive en `src/Pages/Desktop.tsx`. Este componente actúa como el **kernel** de la aplicación.

```ts
// Cada "aplicación" es un objeto WindowApp con su estado completo
const [windows, setWindows] = useState<WindowApp[]>([
    { id: "about", title: "about me", icon: "User", isOpen: true, isMaximized: false, isMinimized: false, zIndex: 1 },
    { id: "projects", ..., isOpen: false },
    { id: "terminal", ..., isOpen: false },
    { id: "doom", ..., isOpen: false },
]);
```

La función `toggleWindow(id, action)` actúa como el **despachador de acciones del sistema**, capaz de abrir, cerrar, maximizar o minimizar cualquier ventana. El sistema de profundidad (`zIndex`) se gestiona con un contador incremental `maxZIndex`: cada vez que el usuario hace clic en una ventana, ésta sube al frente.

### 2. El Componente `Window.tsx` — El Gestor de Ventanas

`Window.tsx` es el componente más complejo del sistema. Encapsula toda la lógica de:

- **Arrastre por Pointer Events** — Usa `setPointerCapture` para capturar eventos del puntero incluso fuera del elemento, lo que permite arrastrar suavemente incluso si el cursor sale de la barra de título.
- **Detección de pantallas móviles** — Al arrancar y en cada `resize`, detecta si el ancho de pantalla es menor a 768px. En ese caso, la ventana se **fuerza a estado maximizado** automáticamente, deshabilitando el arrastre.
- **`aria-labels` en español** — Los botones de control tienen etiquetas `aria-label="Minimizar"`, `aria-label="Maximizar"` y `aria-label="Cerrar"` para compatibilidad con el atributo `lang="es"` del documento.

```
┌─── title-bar (cursor: move) ────────────────────[_][□][X]─┐
│                                                             │
│   window-body (flex-1, overflow-auto)                       │
│   ← Aquí se renderiza el children del componente →          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 3. SEO Consciente: Contenido Siempre en el DOM

Una decisión arquitectónica clave para SEO: en lugar de destruir los componentes con condicional `{app.isOpen && <Component/>}`, las ventanas de `about` y `projects` **siempre se renderizan en el DOM**, pero se ocultan con `display: none` cuando no están abiertas.

```tsx
// ✅ Las apps críticas de SEO siempre viven en el DOM
const shouldRenderInDOM = app.id === "about" || app.id === "projects" || app.isOpen;

// Se ocultan visualmente, pero los crawlers las pueden indexar
<div style={{ display: isVisible ? "block" : "none" }}>
```

Esto garantiza que Googlebot y otros crawlers puedan leer el contenido de texto (perfil, stack, proyectos) sin necesidad de simular interacciones de usuario.

### 4. Gestión de Íconos: Tree-Shaking Agresivo

Los tres componentes que usan iconos (`DesktopIcon`, `Taskbar`, `Projects`) reemplazaron el import masivo `import * as Icons from "lucide-react"` por imports individuales con nombre y un mapa estático. Esto redujo el bundle de **~834 KB a ~211 KB** (75% menos):

```ts
// ❌ ANTES: Carga la librería entera (~800KB)
const Icon = (Icons as any)[app.icon];

// ✅ AHORA: Solo los 6 íconos necesarios (~11KB)
const iconMap = { User, FolderGit2, Gamepad2, Terminal };
const Icon = iconMap[app.icon] || HelpCircle;
```

### 5. La Terminal Interactiva (`Terminal.tsx`)

Emulador de consola con un historial de ítems renderizado en una lista de estado React. Al enviar un formulario, `handleCommand` evalúa el input con un `switch` y anexa la respuesta al historial. Un `useEffect` con `ref.scrollIntoView` asegura el auto-scroll al fondo en cada nuevo output.

```
C:\portfolio> help           → Lista de comandos
C:\portfolio> about          → Información personal
C:\portfolio> skills         → Stack tecnológico
C:\portfolio> projects       → Resumen de proyectos
C:\portfolio> sysinfo        → ASCII art estilo neofetch
C:\portfolio> clear          → Limpia la pantalla
```

### 6. Doom.exe via WebAssembly

El juego Doom se carga de forma **diferida** — únicamente cuando el usuario hace clic en "PLAY" dentro del componente. El binario `public/doom/doom.wasm` se ejecuta en un iframe sandboxado con `allow="autoplay; keyboard; gamepad"`. En el árbol del DOM inicial, Doom **no existe**, evitando cualquier impacto en el tiempo de carga.

---

## 📂 Estructura del Proyecto

```text
Sergio_Portfolio/
├── public/
│   ├── doom/                  # Módulo Doom (WebAssembly)
│   │   └── doom.wasm          # Binario del juego compilado a WASM
│   ├── robots.txt             # Instrucciones para rastreadores SEO
│   ├── sitemap.xml            # Mapa del sitio para indexación
│   └── favicon.svg            # Favicon del sistema operativo
├── src/
│   ├── Components/
│   │   ├── Apps/
│   │   │   ├── AboutMe.tsx    # Ventana de perfil personal
│   │   │   ├── Projects.tsx   # Galería dinámica de repos de GitHub
│   │   │   ├── Terminal.tsx   # Emulador de consola interactivo
│   │   │   └── Doom.tsx       # Wrapper del juego WebAssembly
│   │   ├── DesktopIcon.tsx    # Iconos de acceso directo del escritorio
│   │   ├── StartMenu.tsx      # Menú de Inicio estilo Windows XP
│   │   ├── Taskbar.tsx        # Barra de tareas inferior del sistema
│   │   └── WIndow.tsx         # Gestor de ventanas con drag & drop
│   ├── Pages/
│   │   └── Desktop.tsx        # Estado central (kernel) del sistema
│   ├── App.tsx                # Punto de entrada de componentes
│   ├── index.css              # Estilos globales + font-display overrides
│   └── main.tsx               # Bootstrap de React (DOM root)
├── index.html                 # Shell HTML con meta SEO, OG y JSON-LD
├── vite.config.ts             # Configuración de Vite (build optimizado)
└── package.json               # Dependencias del proyecto
```

---

## ⚡ Resultados de Lighthouse (Producción)

Auditado con `npm run build && npm run preview` sobre `localhost:4173`:

| Categoría | Puntuación |
|---|---|
| ⚡ Performance | **100 / 100** |
| ✅ Best Practices | **100 / 100** |
| ♿ Accessibility | **90 / 100** |
| 🔍 SEO | **92 / 100** |

> Las puntuaciones de SEO y Accesibilidad alcanzarán el **100/100** en el dominio de producción desplegado, donde el enlace canonical, robots.txt y la política de idioma se validan correctamente.

---

## 🧑‍💻 Instalación y Desarrollo Local

### Prerrequisitos
- Node.js >= 18
- npm >= 9

### Comandos

```bash
# 1. Clonar el repositorio
git clone https://github.com/SmatamorosN04/Sergio_Portfolio.git
cd Sergio_Portfolio

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo (con HMR)
npm run dev
# → http://localhost:5173

# 4. Build de producción optimizado
npm run build

# 5. Previsualizar el build de producción (para auditar con Lighthouse)
npm run preview
# → http://localhost:4173
```

> ⚠️ **Importante:** Siempre audita el rendimiento en `npm run preview` (`localhost:4173`) y **no** en `npm run dev` (`localhost:5173`). El servidor de desarrollo usa HMR con WebSockets abiertos y módulos sin minificar, lo que produce puntuaciones de Lighthouse artificialmente bajas.

---

## 📄 Licencia

MIT License — Libre para uso, modificación y distribución con atribución al autor original.

---

<p align="center">
  Construido con ❤️ por <strong>Sergio Armando Matamoros</strong> · Estudiante de Ingeniería de Sistemas · UNI
</p>