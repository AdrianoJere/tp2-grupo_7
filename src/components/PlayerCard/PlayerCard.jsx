import { Link } from 'react-router-dom'
import './PlayerCard.css'

export default function PlayerCard({ player, index }) {
  const colors = { P1: 'cyan', P2: 'magenta', P3: 'yellow' }
  const tags   = { P1: ['NET', 'SQL', 'API'], P2: ['PY', 'SQL', 'DATA'], P3: ['NEST', 'SQL', 'DOCKER'] }
  const color  = colors[player.id]
  const skills = tags[player.id]

  return (
    <div
      className={`player-card player-card--${color}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="player-card__id">{player.id}</div>

      <div className="player-card__avatar-wrap">
        <div className="player-card__avatar-ring" />
        <img
          src={player.avatar}
          alt={player.nombre}
          className="player-card__avatar"
          onError={e => { e.target.src = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${player.nombre}` }}
        />
        <div className="player-card__avatar-glow" />
      </div>

      <div className="player-card__info">
        <h3 className="player-card__name">{player.apellido}</h3>
        <p className="player-card__role">{player.rol}</p>
        <p className="player-card__desc">{player.descripcion}</p>

        <div className="player-card__tags">
          {skills.map(s => (
            <span key={s} className="player-card__tag">{s}</span>
          ))}
        </div>

        <Link to={player.ruta} className="player-card__btn">
          VER PERFIL ▶
        </Link>
      </div>

      <div className="player-card__corner tl" />
      <div className="player-card__corner tr" />
      <div className="player-card__corner bl" />
      <div className="player-card__corner br" />
    </div>
  )
}
