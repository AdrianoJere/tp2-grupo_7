import './Arbol.css'

const TREE = {
  name: 'App.jsx',
  type: 'root',
  children: [
    {
      name: 'BrowserRouter',
      type: 'router',
      children: [
        {
          name: 'Layout',
          type: 'layout',
          children: [
            { name: 'Sidebar', type: 'component', children: [
              { name: 'NavLink ×9', type: 'native' },
            ]},
            {
              name: 'Routes',
              type: 'router',
              children: [
                { name: 'Home', type: 'page', children: [
                  { name: 'PlayerCard ×3', type: 'component' },
                ]},
                { name: 'Caloni / Gutierrez / Imperiales', type: 'page', children: [
                  { name: 'Profile', type: 'component', children: [
                    { name: 'SkillBar ×6', type: 'component' },
                    { name: 'Carousel', type: 'component' },
                  ]},
                ]},
                { name: 'Explorer', type: 'page', children: [
                  { name: 'SearchFilter', type: 'component' },
                ]},
                { name: 'ApiModule', type: 'page', children: [
                  { name: 'PokemonCard ×12', type: 'component' },
                ]},
                { name: 'Gallery', type: 'page', children: [
                  { name: 'Lightbox', type: 'component' },
                ]},
                { name: 'Bitacora', type: 'page' },
                { name: 'Arbol', type: 'page' },
              ],
            },
          ],
        },
      ],
    },
  ],
}

function Node({ node, depth = 0 }) {
  const colors = {
    root:      'cyan',
    router:    'yellow',
    layout:    'magenta',
    page:      'green',
    component: 'cyan',
    native:    'dim',
  }
  const icons = {
    root:      '◈',
    router:    '⬡',
    layout:    '▣',
    page:      '▷',
    component: '◇',
    native:    '·',
  }

  return (
    <div className="arbol__node-wrap" style={{ '--depth': depth }}>
      <div className={`arbol__node arbol__node--${colors[node.type]}`}>
        <span className="arbol__node-icon">{icons[node.type]}</span>
        <span className="arbol__node-name">{node.name}</span>
        <span className={`arbol__node-type arbol__node-type--${colors[node.type]}`}>{node.type}</span>
      </div>
      {node.children && (
        <div className="arbol__children">
          {node.children.map((child, i) => (
            <Node key={i} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

const LEGEND = [
  { type: 'root',      color: 'cyan',    label: 'Root — Punto de entrada' },
  { type: 'router',    color: 'yellow',  label: 'Router — Gestión de rutas' },
  { type: 'layout',    color: 'magenta', label: 'Layout — Estructura visual' },
  { type: 'page',      color: 'green',   label: 'Page — Vista completa' },
  { type: 'component', color: 'cyan',    label: 'Component — Reutilizable' },
  { type: 'native',    color: 'dim',     label: 'Native — Elemento HTML/lib' },
]

export default function Arbol() {
  return (
    <div className="arbol">
      <div className="ticker-wrap">
        <div className="ticker-content">{'★ ÁRBOL DE RENDERIZADO ★ ARQUITECTURA DE COMPONENTES ★ REACT COMPONENT TREE ★ '.repeat(4)}</div>
      </div>

      <h1 className="section-title neon-yel">// ÁRBOL DE RENDERIZADO</h1>

      {/* Legend */}
      <div className="arbol__legend">
        {LEGEND.map(l => (
          <div key={l.type} className="arbol__legend-item">
            <span className={`arbol__legend-dot arbol__legend-dot--${l.color}`} />
            <span className="arbol__legend-type">{l.type}</span>
            <span className="arbol__legend-label">— {l.label}</span>
          </div>
        ))}
      </div>

      {/* Tree */}
      <div className="arbol__tree">
        <Node node={TREE} />
      </div>

      {/* Stats */}
      <div className="arbol__stats">
        {[
          { label: 'PÁGINAS',     value: '08' },
          { label: 'COMPONENTES', value: '08' },
          { label: 'RUTAS',       value: '09' },
          { label: 'HOOKS USADOS',value: '05' },
        ].map(s => (
          <div key={s.label} className="arbol__stat">
            <span className="arbol__stat-value neon-yel">{s.value}</span>
            <span className="arbol__stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
