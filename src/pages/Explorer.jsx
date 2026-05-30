import { useState, useMemo } from 'react'
import { FiSearch, FiFilter, FiX } from 'react-icons/fi'
import techData from '../data/techData.json'
import './Explorer.css'

const TIPOS     = ['Todos', ...new Set(techData.map(t => t.tipo))]
const NIVELES   = ['Todos', ...new Set(techData.map(t => t.nivel))]
const NIVEL_COLOR = { Avanzado: 'cyan', Intermedio: 'magenta', Básico: 'yellow' }

export default function Explorer() {
  const [query,  setQuery]  = useState('')
  const [tipo,   setTipo]   = useState('Todos')
  const [nivel,  setNivel]  = useState('Todos')

  const results = useMemo(() => {
    return techData.filter(item => {
      const matchQ = item.nombre.toLowerCase().includes(query.toLowerCase())
                  || item.descripcion.toLowerCase().includes(query.toLowerCase())
                  || item.creador.toLowerCase().includes(query.toLowerCase())
      const matchT = tipo  === 'Todos' || item.tipo  === tipo
      const matchN = nivel === 'Todos' || item.nivel === nivel
      return matchQ && matchT && matchN
    })
  }, [query, tipo, nivel])

  const clear = () => { setQuery(''); setTipo('Todos'); setNivel('Todos') }

  return (
    <div className="explorer">
      <div className="ticker-wrap">
        <div className="ticker-content">{'★ EXPLORADOR DE DATOS ★ 20 TECNOLOGÍAS ★ FILTRO EN TIEMPO REAL ★ '.repeat(4)}</div>
      </div>

      <h1 className="section-title neon-green">// EXPLORADOR DE DATOS</h1>

      {/* Search bar */}
      <div className="explorer__search-wrap">
        <div className="explorer__search">
          <FiSearch className="explorer__search-icon" />
          <input
            type="text"
            className="explorer__input"
            placeholder="BUSCAR TECNOLOGÍA, CREADOR..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {query && (
            <button className="explorer__clear" onClick={() => setQuery('')}><FiX /></button>
          )}
        </div>

        <div className="explorer__filters">
          <FiFilter className="explorer__filter-icon" />
          <select className="explorer__select" value={tipo} onChange={e => setTipo(e.target.value)}>
            {TIPOS.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <select className="explorer__select" value={nivel} onChange={e => setNivel(e.target.value)}>
            {NIVELES.map(n => <option key={n} value={n}>{n}</option>)}
          </select>
          <button className="explorer__clear-all" onClick={clear}>RESET</button>
        </div>
      </div>

      {/* Results count */}
      <div className="explorer__meta">
        <span className="neon-green">{String(results.length).padStart(2, '0')}</span>
        <span className="explorer__meta-text"> / {techData.length} RESULTADOS</span>
        {(query || tipo !== 'Todos' || nivel !== 'Todos') && (
          <span className="explorer__active-filters">
            {query && <span className="explorer__tag">"{query}"</span>}
            {tipo  !== 'Todos' && <span className="explorer__tag">{tipo}</span>}
            {nivel !== 'Todos' && <span className="explorer__tag">{nivel}</span>}
          </span>
        )}
      </div>

      {/* Grid */}
      {results.length === 0 ? (
        <div className="explorer__empty">
          <span className="explorer__empty-icon">?</span>
          <p>NO SE ENCONTRARON RESULTADOS</p>
          <button className="btn-pixel" onClick={clear}>LIMPIAR FILTROS</button>
        </div>
      ) : (
        <div className="explorer__grid">
          {results.map(item => (
            <div key={item.id} className="explorer__card">
              <div className="explorer__card-header">
                <span className="explorer__card-id">#{String(item.id).padStart(2,'0')}</span>
                <span className={`explorer__card-nivel explorer__card-nivel--${NIVEL_COLOR[item.nivel]}`}>
                  {item.nivel}
                </span>
              </div>
              <h3 className="explorer__card-name neon-green">{item.nombre}</h3>
              <div className="explorer__card-tags">
                <span className="explorer__card-tag">{item.categoria}</span>
                <span className="explorer__card-tag">{item.tipo}</span>
              </div>
              <p className="explorer__card-desc">{item.descripcion}</p>
              <div className="explorer__card-footer">
                <span className="explorer__card-meta">BY {item.creador.toUpperCase()}</span>
                <span className="explorer__card-meta">{item.año}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
