import './Bitacora.css'

const ROLES = [
  {
    nombre: 'Adriano Caloni',
    rol: 'Backend Lead',
    color: 'cyan',
    responsabilidades: [
      'Arquitectura del proyecto y estructura de carpetas',
      'Configuración de React Router y rutas',
      'Desarrollo de componentes de navegación',
      'Integración de datos JSON y lógica de filtrado',
      'Revisión de Pull Requests y merge final',
    ],
  },
  {
    nombre: 'Emiliano Gutierrez',
    rol: 'Frontend Lead',
    color: 'magenta',
    responsabilidades: [
      'Sistema de diseño global y variables CSS',
      'Componente PlayerCard y animaciones de entrada',
      'Página de explorador con búsqueda en tiempo real',
      'Responsive design y media queries',
      'Sección de galería con lightbox',
    ],
  },
  {
    nombre: 'Jeremias Imperiales',
    rol: 'Fullstack Dev',
    color: 'yellow',
    responsabilidades: [
      'Integración de PokeAPI con paginación',
      'Componente Carousel de proyectos',
      'SkillBars animadas con IntersectionObserver',
      'Configuración de Vercel y despliegue continuo',
      'Árbol de renderizado y documentación técnica',
    ],
  },
]

const TIMELINE = [
  { semana: '01', titulo: 'Kickoff del Proyecto', desc: 'Reunión inicial, división de roles y configuración del repositorio. Setup de Vite + React + React Router.' },
  { semana: '02', titulo: 'Estructura Base',      desc: 'Creación del layout principal, Sidebar con navegación, Home con PlayerCards. Sistema de diseño arcade.' },
  { semana: '03', titulo: 'Perfiles Individuales', desc: 'Desarrollo de páginas de perfil con SkillBars, Carousel de proyectos y sección de tech stack.' },
  { semana: '04', titulo: 'Módulos Funcionales',   desc: 'Explorador JSON con búsqueda, consumo de PokeAPI con paginación y galería con Lightbox.' },
  { semana: '05', titulo: 'Pulido Final',           desc: 'Responsive design, optimización de animaciones, README completo y despliegue en Vercel.' },
]

export default function Bitacora() {
  return (
    <div className="bitacora">
      <div className="ticker-wrap">
        <div className="ticker-content">{'★ BITÁCORA ★ GITFLOW ★ EVOLUCIÓN HTML → REACT ★ ROLES DEL EQUIPO ★ '.repeat(4)}</div>
      </div>

      <h1 className="section-title neon-mag">// BITÁCORA DEL PROYECTO</h1>

      {/* Roles */}
      <section className="bitacora__section">
        <h2 className="bitacora__subtitle neon-mag">ROLES DEL EQUIPO</h2>
        <div className="bitacora__roles">
          {ROLES.map(r => (
            <div key={r.nombre} className={`bitacora__role bitacora__role--${r.color}`}>
              <div className="bitacora__role-header">
                <h3 className="bitacora__role-name">{r.nombre.toUpperCase()}</h3>
                <span className="bitacora__role-title">{r.rol}</span>
              </div>
              <ul className="bitacora__role-list">
                {r.responsabilidades.map((resp, i) => (
                  <li key={i} className="bitacora__role-item">
                    <span className="bitacora__role-bullet">▶</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bitacora__section">
        <h2 className="bitacora__subtitle neon-mag">FLUJO DE TRABAJO · GITFLOW</h2>
        <div className="bitacora__timeline">
          {TIMELINE.map((t, i) => (
            <div key={t.semana} className="bitacora__event" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="bitacora__event-week">
                <span className="bitacora__event-num">S{t.semana}</span>
              </div>
              <div className="bitacora__event-body">
                <h4 className="bitacora__event-title">{t.titulo}</h4>
                <p className="bitacora__event-desc">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Migration analysis */}
      <section className="bitacora__section">
        <h2 className="bitacora__subtitle neon-mag">MIGRACIÓN: HTML/JS → REACT</h2>
        <div className="bitacora__migration">
          <div className="bitacora__mig-col bitacora__mig-col--before">
            <h3 className="bitacora__mig-title">TP1 · HTML/CSS/JS</h3>
            <ul className="bitacora__mig-list">
              <li>Páginas HTML independientes por integrante</li>
              <li>Estilos en un único archivo CSS global</li>
              <li>JavaScript vanilla con manipulación del DOM</li>
              <li>Sin estado centralizado ni reactividad</li>
              <li>Navegación mediante links HTML simples</li>
              <li>Código duplicado entre páginas</li>
            </ul>
          </div>
          <div className="bitacora__mig-arrow">→</div>
          <div className="bitacora__mig-col bitacora__mig-col--after">
            <h3 className="bitacora__mig-title">TP2 · REACT + VITE</h3>
            <ul className="bitacora__mig-list">
              <li>Single Page Application con componentes reutilizables</li>
              <li>CSS modular por componente sin colisiones</li>
              <li>useState / useEffect para lógica reactiva</li>
              <li>Estado global y props para datos compartidos</li>
              <li>React Router con rutas declarativas</li>
              <li>Arquitectura de componentes escalable</li>
            </ul>
          </div>
        </div>
        <div className="bitacora__mig-conclusion">
          <p>
            La migración de HTML/JS estático a React permitió eliminar la duplicación de código,
            centralizar la lógica de navegación y escalar el proyecto de forma organizada. 
            El sistema de componentes facilita el mantenimiento y la colaboración en equipo,
            mientras que React Router transforma el sitio en una SPA fluida sin recargas de página.
          </p>
        </div>
      </section>

      {/* GitFlow */}
      <section className="bitacora__section">
        <h2 className="bitacora__subtitle neon-mag">ESTRATEGIA DE RAMAS · GITFLOW</h2>
        <div className="bitacora__branches">
          {[
            { rama: 'main',       color: 'cyan',    desc: 'Rama principal. Solo recibe merges de develop cuando hay una versión estable.' },
            { rama: 'develop',    color: 'magenta', desc: 'Rama de integración continua. Todas las features se mergean aquí.' },
            { rama: 'feat/caloni',    color: 'yellow',  desc: 'Feature branch de Adriano Caloni.' },
            { rama: 'feat/gutierrez', color: 'green',   desc: 'Feature branch de Emiliano Gutierrez.' },
            { rama: 'feat/imperiales',color: 'orange',  desc: 'Feature branch de Jeremias Imperiales.' },
          ].map(b => (
            <div key={b.rama} className={`bitacora__branch bitacora__branch--${b.color}`}>
              <span className="bitacora__branch-name">{b.rama}</span>
              <span className="bitacora__branch-desc">{b.desc}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
