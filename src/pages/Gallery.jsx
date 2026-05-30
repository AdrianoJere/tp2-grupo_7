import { useState, useCallback } from 'react'
import Lightbox from '../components/Lightbox/Lightbox'
import sf2         from '../assets/gallery/sf2.png'
import pacman      from '../assets/gallery/pacman.png'
import spaceinvaders from '../assets/gallery/spaceinvaders.png'
import mk          from '../assets/gallery/mk.png'
import donkeykong  from '../assets/gallery/donkeykong.png'
import galaga      from '../assets/gallery/galaga.png'
import contra      from '../assets/gallery/contra.png'
import metalslug   from '../assets/gallery/metalslug.png'
import tetris      from '../assets/gallery/tetris.png'
import frogger     from '../assets/gallery/frogger.png'
import asteroids   from '../assets/gallery/asteroids.png'
import './Gallery.css'

const IMAGES = [
  { id: 1,  src: '/gallery/sf2.png',          titulo: 'STREET FIGHTER II · 1991', categoria: 'CAPCOM'   },
  { id: 2,  src: '/gallery/mk.png',           titulo: 'MORTAL KOMBAT · 1992',     categoria: 'MIDWAY'   },
  { id: 3,  src: '/gallery/pacman.png',       titulo: 'PAC-MAN · 1980',           categoria: 'NAMCO'    },
  { id: 4,  src: '/gallery/spaceinvaders.png',titulo: 'SPACE INVADERS · 1978',    categoria: 'TAITO'    },
  { id: 5,  src: '/gallery/donkeykong.png',   titulo: 'DONKEY KONG · 1981',       categoria: 'NINTENDO' },
  { id: 6,  src: '/gallery/galaga.png',       titulo: 'GALAGA · 1981',            categoria: 'NAMCO'    },
  { id: 7,  src: '/gallery/contra.png',       titulo: 'CONTRA · 1987',            categoria: 'KONAMI'   },
  { id: 8,  src: '/gallery/metalslug.png',    titulo: 'METAL SLUG · 1996',        categoria: 'SNK'      },
  { id: 9,  src: '/gallery/tetris.png',       titulo: 'TETRIS · 1984',            categoria: 'NINTENDO' },
  { id: 10, src: '/gallery/frogger.png',      titulo: 'FROGGER · 1981',           categoria: 'KONAMI'   },
  { id: 11, src: '/gallery/asteroids.png',    titulo: 'ASTEROIDS · 1979',         categoria: 'ATARI'    },
  
  { id: 1,  src: sf2,          titulo: 'STREET FIGHTER II · 1991', categoria: 'CAPCOM'   },
  { id: 2,  src: mk,           titulo: 'MORTAL KOMBAT · 1992',     categoria: 'MIDWAY'   },
  { id: 3,  src: pacman,       titulo: 'PAC-MAN · 1980',           categoria: 'NAMCO'    },
  { id: 4,  src: spaceinvaders,titulo: 'SPACE INVADERS · 1978',    categoria: 'TAITO'    },
  { id: 5,  src: donkeykong,   titulo: 'DONKEY KONG · 1981',       categoria: 'NINTENDO' },
  { id: 6,  src: galaga,       titulo: 'GALAGA · 1981',            categoria: 'NAMCO'    },
  { id: 7,  src: contra,       titulo: 'CONTRA · 1987',            categoria: 'KONAMI'   },
  { id: 8,  src: metalslug,    titulo: 'METAL SLUG · 1996',        categoria: 'SNK'      },
  { id: 9,  src: tetris,       titulo: 'TETRIS · 1984',            categoria: 'NINTENDO' },
  { id: 10, src: frogger,      titulo: 'FROGGER · 1981',           categoria: 'KONAMI'   },
  { id: 11, src: asteroids,    titulo: 'ASTEROIDS · 1979',         categoria: 'ATARI'    },
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
        <div className="ticker-content">
          {'★ GALERÍA ARCADE ★ SF2 ★ MK ★ PAC-MAN ★ SPACE INVADERS ★ DONKEY KONG ★ GALAGA ★ CONTRA ★ METAL SLUG ★ TETRIS ★ FROGGER ★ ASTEROIDS ★ '.repeat(3)}
        </div>
      </div>

      <h1 className="section-title neon-cyan">// GALERÍA ARCADE</h1>

      <div className="gallery__cats">
        {CATS.map(c => (
          <button
            key={c}
            className={`gallery__cat ${category === c ? 'gallery__cat--active' : ''}`}
            onClick={() => { setCategory(c); setActive(null) }}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="gallery__hint">CLIC EN UNA IMAGEN PARA VER EN DETALLE · ESC PARA CERRAR · ← → PARA NAVEGAR</p>

      <div className="gallery__grid">
        {filtered.map((img, i) => (
          <div
            key={img.id}
            className="gallery__item"
            onClick={() => setActive(i)}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <img src={img.src} alt={img.titulo} className="gallery__img" loading="lazy"/>
            <div className="gallery__overlay">
              <span className="gallery__overlay-title">{img.titulo}</span>
              <span className="gallery__overlay-cat">{img.categoria}</span>
              <span className="gallery__overlay-zoom">⊕ ZOOM</span>
            </div>
            <div className="gallery__item-id">#{String(img.id).padStart(2,'0')}</div>
          </div>
        ))}
      </div>

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
