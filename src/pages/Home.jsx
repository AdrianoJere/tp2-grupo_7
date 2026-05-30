import { useEffect, useState } from 'react'
import PlayerCard from '../components/PlayerCard/PlayerCard'
import './Home.css'

const PLAYERS = [
  {
    id: 'P1',
    nombre: 'Adriano',
    apellido: 'CALONI',
    rol: 'BACKEND WARRIOR',
    descripcion: 'Dev backend, líder de soporte digital y co-fundador de Alcana Labs.',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=caloni&backgroundColor=020408',
    ruta: '/caloni',
  },
  {
    id: 'P2',
    nombre: 'Emiliano',
    apellido: 'GUTIERREZ',
    rol: 'DATA MAGE',
    descripcion: 'Especialista en Python, SQL y análisis de datos. Mente matemática del equipo.',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=gutierrez&backgroundColor=020408',
    ruta: '/gutierrez',
  },
  {
    id: 'P3',
    nombre: 'Jeremias',
    apellido: 'IMPERIALES',
    rol: 'FULL STACK DEV',
    descripcion: 'Desarrollador fullstack, entornos cloud y automatización de procesos.',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=imperiales&backgroundColor=020408',
    ruta: '/imperiales',
  },
]

const TICKER = '★ EQUIPO 7 ★ IFTS N°29 ★ DESARROLLO WEB ★ TP2 · 2026 ★ REACT + VITE ★ STAGE 02 ★ '

export default function Home() {
  const [time, setTime] = useState(new Date())
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const h = new Date().getHours()
    if (h < 12) setGreeting('BUENOS DÍAS')
    else if (h < 18) setGreeting('BUENAS TARDES')
    else setGreeting('BUENAS NOCHES')

    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="home">
      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-content">{TICKER.repeat(4)}</div>
      </div>

      {/* Header */}
      <div className="home__header">
        <div className="home__header-left">
          <p className="home__greeting neon-cyan">{greeting}, PLAYER</p>
          <h1 className="home__title">EQUIPO <span className="neon-cyan">7</span></h1>
          <p className="home__subtitle">IFTS N.°29 · DESARROLLO DE SISTEMAS WEB FRONT END</p>
        </div>
        <div className="home__clock">
          <span className="home__clock-time">
            {time.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
          <span className="home__clock-label">SYS TIME</span>
        </div>
      </div>

      {/* Divider */}
      <div className="home__divider">
        <span className="home__divider-text neon-cyan">— SELECT YOUR PLAYER —</span>
      </div>

      {/* Player grid */}
      <div className="home__grid">
        {PLAYERS.map((p, i) => (
          <PlayerCard key={p.id} player={p} index={i} />
        ))}
      </div>

      {/* Stats row */}
      <div className="home__stats">
        {[
          { label: 'INTEGRANTES', value: '03' },
          { label: 'TECNOLOGÍAS', value: '20+' },
          { label: 'COMPONENTES', value: '15+' },
          { label: 'COMISIÓN', value: 'VIE' },
        ].map(s => (
          <div key={s.label} className="home__stat">
            <span className="home__stat-value neon-cyan">{s.value}</span>
            <span className="home__stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Insert coin */}
      <p className="home__insert-coin">
        ▶ INSERT COIN TO CONTINUE ◀
      </p>
    </div>
  )
}
