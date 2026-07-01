# 🖥️ Portfolio OS - Desktop Web Environment

Bienvenido a mi portafolio interactivo modelado como un entorno de sistema operativo de escritorio retro-moderno. Este proyecto centraliza mi perfil profesional, proyectos de ingeniería y habilidades técnicas en una interfaz web fluida, interactiva y totalmente responsiva.

---

## 🚀 Características Principales

* **Entorno de Escritorio Virtual:** Manejo dinámico de ventanas interactivas con sistema de enfoque basado en capas de profundidad (`zIndex`).
* **DooM Engine Local (WebAssembly):** Integración nativa del binario clásico de DooM (`doom.wasm`) renderizado eficientemente a través de un aislamiento por *Sandbox* (Iframe Local) y optimización de rendimiento a 60 FPS estables.
* **Terminal interactiva (Terminal.sh):** Simulador de consola de comandos con soporte para utilidades del sistema (`help`, `clear`), despliegue de información del desarrollador y un comando `neofetch` personalizado.
* **Arquitectura Limpia y Modular:** Componentes reutilizables en TypeScript estructurados bajo los estándares modernos de desarrollo ágil.

---

## 🛠️ Stack Tecnológico

* **Frontend:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
* **Bundler:** [Vite](https://vite.dev/)
* **Tecnologías Core Especiales:** WebAssembly (Wasm), HTML5 Canvas, CSS Gradients Downsampling.

---

## 📂 Estructura del Proyecto

Tras una reestructuración y optimización de la raíz del repositorio, el árbol de directorios principal se organiza de la siguiente manera:

```text
├── public/                  # Archivos estáticos globales
│   └── doom/                # Módulo independiente del juego DooM
│       ├── index.html       # Orquestador del motor gráfico
│       └── doom.wasm        # Binario compilado de WebAssembly
├── src/
│   ├── Components/
│   │   ├── Apps/            # Aplicaciones del sistema (AboutMe, Projects, Doom, Terminal)
│   │   ├── DesktopIcon.tsx  # Componente de íconos de acceso directo
│   │   ├── Taskbar.tsx      # Barra de tareas del sistema operativo
│   │   └── Window.tsx       # Contenedor flotante y maximizable de ventanas
│   ├── App.tsx              # Componente raíz
│   └── main.tsx             # Punto de entrada de la aplicación
├── package.json             # Dependencias y scripts del proyecto
└── vite.config.ts           # Configuración de empaquetado de Vite