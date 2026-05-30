import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import {
  FiHome, FiUser, FiDatabase, FiGlobe,
  FiImage, FiBook, FiGitBranch, FiMenu, FiX
} from 'react-icons/fi'
import './Sidebar.css'

const NAV = [
  { to: '/',           label: 'HOME',       icon: <FiHome />,      color: 'cyan'    },
  { to: '/caloni',     label: 'CALONI',     icon: <FiUser />,      color: 'cyan'    },
  { to: '/gutierrez',  label: 'GUTIERREZ',  icon: <FiUser />,      color: 'magenta' },
  { to: '/imperiales', label: 'IMPERIALES', icon: <FiUser />,      color: 'yellow'  },
  { to: '/explorer',   label: 'EXPLORADOR', icon: <FiDatabase />,  color: 'green'   },
  { to: '/api',        label: 'API',        icon: <FiGlobe />,     color: 'orange'  },
  { to: '/gallery',    label: 'GALERÍA',    icon: <FiImage />,     color: 'cyan'    },
  { to: '/bitacora',   label: 'BITÁCORA',   icon: <FiBook />,      color: 'magenta' },
  { to: '/arbol',      label: 'ÁRBOL',      icon: <FiGitBranch />, color: 'yellow'  },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      {/* Mobile toggle */}
      <button className="sidebar-toggle" onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </button>

      <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="sidebar-logo__badge">E7</div>
          <div className="sidebar-logo__text">
            <span className="sidebar-logo__title">EQUIPO 7</span>
            <span className="sidebar-logo__sub">IFTS N°29</span>
          </div>
        </div>

        {/* Score display */}
        <div className="sidebar-score">
          <span className="sidebar-score__label">HI-SCORE</span>
          <span className="sidebar-score__value">99999</span>
        </div>

        <div className="sidebar-divider" />

        {/* Nav */}
        <nav className="sidebar-nav">
          <span className="sidebar-nav__group">— SECCIONES —</span>
          {NAV.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `sidebar-nav__link sidebar-nav__link--${item.color} ${isActive ? 'active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              <span className="sidebar-nav__icon">{item.icon}</span>
              <span className="sidebar-nav__label">{item.label}</span>
              <span className="sidebar-nav__arrow">▶</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <span className="sidebar-footer__text">TP2 · 2026</span>
          <span className="sidebar-footer__blink">■</span>
        </div>
      </aside>

      {/* Overlay mobile */}
      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}
    </>
  )
}
