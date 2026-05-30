import { useState, useCallback } from 'react'
import Lightbox from '../components/Lightbox/Lightbox'
import './Gallery.css'

// Imágenes arcade de dominio público / Wikimedia Commons
const IMAGES = [
  {
    id: 1,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Streetfighterhead.svg/640px-Streetfighterhead.svg.png',
    titulo: 'STREET FIGHTER II',
    categoria: 'CAPCOM'
  },
  {
    id: 2,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Camponotus_flavomarginatus_ant.jpg/320px-Camponotus_flavomarginatus_ant.jpg',
    titulo: 'SPACE INVADERS · 1978',
    categoria: 'TAITO'
  },
  {
    id: 3,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pacman.svg/480px-Pacman.svg.png',
    titulo: 'PAC-MAN · 1980',
    categoria: 'NAMCO'
  },
  {
    id: 4,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Arcade_game_-_Ms._Pac-Man_%28Midway%29.jpg/480px-Arcade_game_-_Ms._Pac-Man_%28Midway%29.jpg',
    titulo: 'MS. PAC-MAN ARCADE',
    categoria: 'MIDWAY'
  },
  {
    id: 5,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Donkey_Kong_arcade.jpg/320px-Donkey_Kong_arcade.jpg',
    titulo: 'DONKEY KONG · 1981',
    categoria: 'NINTENDO'
  },
  {
    id: 6,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Space_Invaders_arcade.jpg/320px-Space_Invaders_arcade.jpg',
    titulo: 'SPACE INVADERS CABINET',
    categoria: 'TAITO'
  },
  {
    id: 7,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Galaga_arcade_game.jpg/320px-Galaga_arcade_game.jpg',
    titulo: 'GALAGA · 1981',
    categoria: 'NAMCO'
  },
  {
    id: 8,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Blanka-Street-Fighter.jpg/320px-Blanka-Street-Fighter.jpg',
    titulo: 'SF II · BLANKA',
    categoria: 'CAPCOM'
  },
  {
    id: 9,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Frogger_game_arcade.jpg/320px-Frogger_game_arcade.jpg',
    titulo: 'FROGGER · 1981',
    categoria: 'KONAMI'
  },
]

// Fallback con placeholders temáticos por si alguna imagen falla
const FALLBACKS = [
  'https://placehold.co/600x400/020408/00ffff?text=STREET+FIGHTER+II&font=monospace',
  'https://placehold.co/600x400/020408/ff00ff?text=SPACE+INVADERS&font=monospace',
  'https://placehold.co/600x400/020408/ffff00?text=PAC-MAN+1980&font=monospace',
  'https://placehold.co/600x400/020408/00ff41?text=MS+PAC-MAN&font=monospace',
  'https://placehold.co/600x400/020408/ff6600?text=DONKEY+KONG&font=monospace',
  'https://placehold.co/600x400/020408/00ffff?text=SPACE+INVADERS+CAB&font=monospace',
  'https://placehold.co/600x400/020408/ff00ff?text=GALAGA+1981&font=monospace',
  'https://placehold.co/600x400/020408/ffff00?text=SF+II+BLANKA&font=monospace',
  'https://placehold.co/600x400/020408/00ff41?text=FROGGER+1981&font=monospace',
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
          {'★ GALERÍA ARCADE ★ STREET FIGHTER ★ PAC-MAN ★ SPACE INVADERS ★ DONKEY KONG ★ GALAGA ★ KONAMI ★ CAPCOM ★ NAMCO ★ '.repeat(3)}
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
            <img
              src={img.src}
              alt={img.titulo}
              className="gallery__img"
              loading="lazy"
              onError={e => { e.target.src = FALLBACKS[img.id - 1] }}
            />
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
