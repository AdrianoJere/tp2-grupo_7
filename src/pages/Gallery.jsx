import { useState, useCallback } from 'react'
import Lightbox from '../components/Lightbox/Lightbox'
import './Gallery.css'

// Using placeholder images from picsum with tech/gaming aesthetic
const IMAGES = [
  { id: 1, src: 'https://picsum.photos/seed/arcade1/600/400',  titulo: 'STAGE 01 · ARCADE SETUP',      categoria: 'SETUP' },
  { id: 2, src: 'https://picsum.photos/seed/code2/600/400',    titulo: 'STAGE 02 · CODE REVIEW',        categoria: 'CODE'  },
  { id: 3, src: 'https://picsum.photos/seed/data3/600/400',    titulo: 'STAGE 03 · DATA PIPELINE',      categoria: 'DATA'  },
  { id: 4, src: 'https://picsum.photos/seed/team4/600/400',    titulo: 'STAGE 04 · TEAM MEETING',       categoria: 'TEAM'  },
  { id: 5, src: 'https://picsum.photos/seed/deploy5/600/400',  titulo: 'STAGE 05 · DEPLOY DAY',         categoria: 'DEVOPS'},
  { id: 6, src: 'https://picsum.photos/seed/debug6/600/400',   titulo: 'STAGE 06 · DEBUG SESSION',      categoria: 'CODE'  },
  { id: 7, src: 'https://picsum.photos/seed/sprint7/600/400',  titulo: 'STAGE 07 · SPRINT PLANNING',    categoria: 'TEAM'  },
  { id: 8, src: 'https://picsum.photos/seed/server8/600/400',  titulo: 'STAGE 08 · SERVER ROOM',        categoria: 'DEVOPS'},
  { id: 9, src: 'https://picsum.photos/seed/design9/600/400',  titulo: 'STAGE 09 · UI DESIGN',          categoria: 'SETUP' },
]

const CATS = ['Todos', ...new Set(IMAGES.map(i => i.categoria))]

export default function Gallery() {
  const [active,   setActive]   = useState(null)
  const [category, setCategory] = useState('Todos')

  const filtered = category === 'Todos' ? IMAGES : IMAGES.filter(i => i.categoria === category)

  const navigate = useCallback(dir => {
    setActive(prev => {
      const next = prev + dir
      if (next < 0) return filtered.length - 1
      if (next >= filtered.length) return 0
      return next
    })
  }, [filtered])

  return (
    <div className="gallery">
      <div className="ticker-wrap">
        <div className="ticker-content">{'★ GALERÍA INTERACTIVA ★ LIGHTBOX ★ ESC PARA CERRAR ★ ←→ PARA NAVEGAR ★ '.repeat(4)}</div>
      </div>

      <h1 className="section-title neon-cyan">// GALERÍA DE IMÁGENES</h1>

      {/* Categories */}
      <div className="gallery__cats">
        {CATS.map(c => (
          <button
            key={c}
            className={`gallery__cat ${category === c ? 'gallery__cat--active' : ''}`}
            onClick={() => { setCategory(c); setActive(null); }}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="gallery__hint">CLIC EN UNA IMAGEN PARA VER EN DETALLE · ESC PARA CERRAR</p>

      {/* Grid */}
      <div className="gallery__grid">
        {filtered.map((img, i) => (
          <div
            key={img.id}
            className="gallery__item"
            onClick={() => setActive(i)}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <img src={img.src} alt={img.titulo} className="gallery__img" loading="lazy" />
            <div className="gallery__overlay">
              <span className="gallery__overlay-title">{img.titulo}</span>
              <span className="gallery__overlay-cat">{img.categoria}</span>
              <span className="gallery__overlay-zoom">⊕ ZOOM</span>
            </div>
            <div className="gallery__item-id">#{String(img.id).padStart(2,'0')}</div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <Lightbox
          images={filtered}
          current={active}
          onClose={() => setActive(null)}
          onNav={dir => navigate(dir)}
        />
      )}
    </div>
  )
}
