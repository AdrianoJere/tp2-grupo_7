import { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight, FiLoader } from 'react-icons/fi'
import './ApiModule.css'

const PAGE_SIZE = 12
const TYPE_COLORS = {
  fire:'#ff6600', water:'#00aaff', grass:'#00cc44', electric:'#ffff00',
  psychic:'#ff00ff', ice:'#00ffff', dragon:'#6600ff', dark:'#333366',
  normal:'#888888', fighting:'#ff4444', flying:'#aaaaff', poison:'#aa00aa',
  ground:'#cc8844', rock:'#888844', bug:'#88aa00', ghost:'#6644aa',
  steel:'#aaaacc', fairy:'#ffaacc',
}

function TypeBadge({ type }) {
  return (
    <span
      className="api-pokemon__type"
      style={{ borderColor: TYPE_COLORS[type] || '#888', color: TYPE_COLORS[type] || '#888' }}
    >
      {type}
    </span>
  )
}

function PokemonCard({ pokemon }) {
  const { name, sprites, types, stats, id } = pokemon
  const hp  = stats.find(s => s.stat.name === 'hp')?.base_stat || 0
  const atk = stats.find(s => s.stat.name === 'attack')?.base_stat || 0
  const def = stats.find(s => s.stat.name === 'defense')?.base_stat || 0
  const mainType = types[0]?.type?.name || 'normal'
  const color = TYPE_COLORS[mainType] || '#00ffff'

  return (
    <div className="api-pokemon" style={{ '--pkm-color': color }}>
      <div className="api-pokemon__id">#{String(id).padStart(3, '0')}</div>
      <img
        src={sprites.front_default || sprites.other?.['official-artwork']?.front_default}
        alt={name}
        className="api-pokemon__img"
      />
      <h3 className="api-pokemon__name">{name.toUpperCase()}</h3>
      <div className="api-pokemon__types">
        {types.map(t => <TypeBadge key={t.type.name} type={t.type.name} />)}
      </div>
      <div className="api-pokemon__stats">
        {[['HP', hp], ['ATK', atk], ['DEF', def]].map(([label, val]) => (
          <div key={label} className="api-pokemon__stat">
            <span className="api-pokemon__stat-label">{label}</span>
            <div className="api-pokemon__stat-bar">
              <div
                className="api-pokemon__stat-fill"
                style={{ width: `${Math.min(100, val / 1.5)}%` }}
              />
            </div>
            <span className="api-pokemon__stat-val">{val}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ApiModule() {
  const [page,    setPage]    = useState(0)
  const [data,    setData]    = useState([])
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState(null)
  const [total,   setTotal]   = useState(0)

  const totalPages = Math.ceil(total / PAGE_SIZE)

  useEffect(() => {
    let cancelled = false
    async function fetchPage() {
      setLoading(true)
      setError(null)
      try {
        const listRes = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${PAGE_SIZE}&offset=${page * PAGE_SIZE}`
        )
        if (!listRes.ok) throw new Error('Error al conectar con la API')
        const list = await listRes.json()
        if (!cancelled) setTotal(list.count)

        const details = await Promise.all(
          list.results.map(p => fetch(p.url).then(r => r.json()))
        )
        if (!cancelled) setData(details)
      } catch (e) {
        if (!cancelled) setError(e.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    fetchPage()
    return () => { cancelled = true }
  }, [page])

  return (
    <div className="api-module">
      <div className="ticker-wrap">
        <div className="ticker-content">{'★ API EXTERNA ★ POKEAPI ★ CARGA ASÍNCRONA ★ PAGINACIÓN ★ '.repeat(4)}</div>
      </div>

      <div className="api-module__header">
        <h1 className="section-title neon-orange">// API EXTERNA · POKÉDEX</h1>
        <div className="api-module__source">
          <span className="api-module__source-label">SOURCE</span>
          <a href="https://pokeapi.co" target="_blank" rel="noreferrer" className="api-module__source-url">
            pokeapi.co
          </a>
        </div>
      </div>

      {/* Pagination */}
      <div className="api-pagination">
        <button
          className="api-pagination__btn"
          onClick={() => setPage(p => Math.max(0, p - 1))}
          disabled={page === 0 || loading}
        >
          <FiChevronLeft /> PREV
        </button>

        <div className="api-pagination__info">
          <span className="api-pagination__current">
            {String(page + 1).padStart(2, '0')}
          </span>
          <span className="api-pagination__sep"> / </span>
          <span className="api-pagination__total">
            {totalPages ? String(totalPages).padStart(2, '0') : '--'}
          </span>
          <div className="api-pagination__bar">
            <div
              className="api-pagination__fill"
              style={{ width: totalPages ? `${((page + 1) / totalPages) * 100}%` : '0%' }}
            />
          </div>
        </div>

        <button
          className="api-pagination__btn"
          onClick={() => setPage(p => p + 1)}
          disabled={page >= totalPages - 1 || loading}
        >
          NEXT <FiChevronRight />
        </button>
      </div>

      {/* States */}
      {loading && (
        <div className="api-module__loading">
          <span className="api-module__loading-icon"><FiLoader /></span>
          <span>CARGANDO DATOS...</span>
        </div>
      )}

      {error && (
        <div className="api-module__error">
          <span className="api-module__error-icon">!</span>
          <span>ERROR: {error}</span>
          <button className="btn-pixel" onClick={() => setPage(p => p)}>REINTENTAR</button>
        </div>
      )}

      {!loading && !error && (
        <div className="api-module__grid">
          {data.map((pkm, i) => (
            <div key={pkm.id} style={{ animationDelay: `${i * 0.05}s` }}>
              <PokemonCard pokemon={pkm} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
