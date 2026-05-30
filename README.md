# 🕹️ EQUIPO 7 — TP2 · Proyecto React

**IFTS N.°29 · Desarrollo de Sistemas Web Front End · Comisión Viernes**

> **Link al deploy:** [https://tp2-equipo7.vercel.app](https://tp2-equipo7.vercel.app) *(actualizar con el link real de Vercel)*

---

## Descripción

Este proyecto es la **evolución y migración** del Trabajo Práctico 1 hacia React + Vite. SPA con estética arcade/retro que incluye dashboard con tarjetas de integrantes, perfiles individuales con skill bars y carrusel, explorador de datos JSON con filtrado en tiempo real, PokeAPI con paginación, galería con lightbox, bitácora y árbol de renderizado.

---

## Integrantes

| Nombre | GitHub |
|--------|--------|
| Adriano Caloni | [@AdrianoJere](https://github.com/AdrianoJere) |
| Emiliano Gutierrez | [@emilianog4](https://github.com/emilianog4) |
| Jeremias Imperiales | [@imperialesjeremias](https://github.com/imperialesjeremias) |

---

## Tecnologías

- React 18 + Vite 6
- React Router DOM 7
- react-icons (Feather Icons)
- CSS3 con variables y animaciones
- Google Fonts: Press Start 2P + VT323
- PokeAPI (API pública)
- Vercel (deploy)

---

## Estructura de Archivos

```
src/
├── components/
│   ├── Sidebar/        ← Navegación lateral fija con React Router
│   ├── PlayerCard/     ← Tarjeta animada de integrante
│   ├── SkillBar/       ← Barra de progreso con IntersectionObserver
│   ├── Carousel/       ← Carrusel manual de proyectos
│   └── Lightbox/       ← Modal de imagen con teclado (ESC/←/→)
├── pages/
│   ├── Home            ← Dashboard con grilla de PlayerCards
│   ├── Profile         ← Template reutilizable de perfil
│   ├── Caloni/Gutierrez/Imperiales ← Perfiles individuales
│   ├── Explorer        ← Filtrado en tiempo real sobre JSON local
│   ├── ApiModule       ← PokeAPI asíncrona con paginación
│   ├── Gallery         ← Grid de imágenes + Lightbox
│   ├── Bitacora        ← Roles, timeline y análisis de migración
│   └── Arbol           ← Árbol de renderizado de componentes
├── data/
│   └── techData.json   ← 20 objetos de tecnologías
└── styles/
    └── global.css      ← Variables CSS, reset, animaciones globales
```

---

## Guía de Estilos

**Paleta de colores:**
- Fondo: `#020408` / `#060d14` / `#0a1520`
- Cyan (P1): `#00ffff`
- Magenta (P2): `#ff00ff`
- Amarillo (P3): `#ffff00`
- Verde: `#00ff41`
- Naranja: `#ff6600`
- Texto: `#e0e0e0` / `#888888`

**Tipografías:**
- [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) — Títulos y UI
- [VT323](https://fonts.google.com/specimen/VT323) — Cuerpo de texto

**Iconografía:** react-icons — paquete Feather Icons (`fi`)

---

## JavaScript / React

| Hook | Componente | Uso |
|------|-----------|-----|
| `useState` | Home, Explorer, ApiModule, Gallery, Carousel | Estado UI y datos |
| `useEffect` | ApiModule, SkillBar, Home | Fetch, IntersectionObserver, reloj |
| `useMemo` | Explorer | Filtrado optimizado del JSON |
| `useCallback` | Lightbox | Navegación con teclado |
| `useRef` | SkillBar | DOM para IntersectionObserver |

**Funciones dinámicas clave:**
- Filtrado en tiempo real (Explorer): `useMemo` sobre 20 objetos con búsqueda por texto + filtros de tipo y nivel
- Animación de SkillBars: `IntersectionObserver` dispara animación CSS al entrar al viewport
- Fetch asíncrono con cleanup: `useEffect` con flag `cancelled` para evitar updates en componentes desmontados
- Lightbox accesible: listener de teclado con ESC, ← y → para navegar y cerrar

---

## Enlace al Proyecto

**Vercel:** [https://tp2-equipo7.vercel.app](https://tp2-equipo7.vercel.app) *(actualizar)*

**Despliegue en Vercel:**
```
Framework: Vite | Build: npm run build | Output: dist
```

---

## Evolución TP1 → TP2

| TP1 (HTML/JS) | TP2 (React) |
|--------------|-------------|
| 5 archivos HTML separados | SPA con 9 rutas |
| CSS global único | CSS modular por componente |
| Links HTML con recarga | React Router (sin recarga) |
| Variables JS globales | useState + useMemo |
| Sin APIs externas | PokeAPI con paginación |
| Código duplicado | Componente Profile reutilizable |

---

## Uso de IA

- **Claude (Anthropic — Sonnet 4.6):** Arquitectura del proyecto, componentes React, lógica de hooks, CSS, README
- **Gemini (Google):** Avatares pixel-art (prompt: *"pixel art avatar, 8-bit retro game character, dark background"*)
- **Contenido:** Textos de bio, descripciones de proyectos y documentación técnica
- **Nota:** Todas las decisiones de diseño, integración y debugging fueron realizadas por el equipo

---

*TP2 · Desarrollo de Sistemas Web Front End · IFTS N.°29 · 2026*
