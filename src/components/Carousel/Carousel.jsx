import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub } from 'react-icons/fi'
import './Carousel.css'

export default function Carousel({ projects, color = 'cyan' }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i - 1 + projects.length) % projects.length)
  const next = () => setCurrent(i => (i + 1) % projects.length)

  const p = projects[current]

  return (
    <div className={`carousel carousel--${color}`}>
      <div className="carousel__header">
        <span className="carousel__label">PROYECTOS</span>
        <span className="carousel__counter">
          {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </span>
      </div>

      <div className="carousel__stage">
        <button className="carousel__arrow carousel__arrow--prev" onClick={prev}>
          <FiChevronLeft />
        </button>

        <div className="carousel__card" key={current}>
          <div className="carousel__thumb">
            <div className="carousel__thumb-placeholder">
              <span className="carousel__thumb-icon">{p.emoji}</span>
              <span className="carousel__thumb-name">{p.nombre}</span>
            </div>
          </div>
          <div className="carousel__info">
            <h4 className="carousel__title">{p.nombre}</h4>
            <p className="carousel__desc">{p.descripcion}</p>
            <div className="carousel__stack">
              {p.stack.map(t => <span key={t} className="carousel__tech">{t}</span>)}
            </div>
            <div className="carousel__links">
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="carousel__link">
                  <FiExternalLink /> DEMO
                </a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer" className="carousel__link">
                  <FiGithub /> REPO
                </a>
              )}
            </div>
          </div>
        </div>

        <button className="carousel__arrow carousel__arrow--next" onClick={next}>
          <FiChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="carousel__dots">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot ${i === current ? 'carousel__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  )
}
