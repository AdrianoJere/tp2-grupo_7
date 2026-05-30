import SkillBar from '../components/SkillBar/SkillBar'
import Carousel from '../components/Carousel/Carousel'
import './Profile.css'

export default function Profile({ data }) {
  const { apellido, nombre, rol, descripcion, avatar, color,
          skills, proyectos, techStack, socials, bio } = data

  return (
    <div className={`profile profile--${color}`}>
      {/* Hero */}
      <div className="profile__hero">
        <div className="profile__avatar-wrap">
          <div className="profile__avatar-frame" />
          <img
            src={avatar}
            alt={nombre}
            className="profile__avatar"
            onError={e => { e.target.src = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${nombre}` }}
          />
          <div className="profile__avatar-scanlines" />
        </div>
        <div className="profile__hero-info">
          <p className={`profile__player-id neon-${color === 'cyan' ? 'cyan' : color === 'magenta' ? 'mag' : 'yel'}`}>
            {color === 'cyan' ? 'P1' : color === 'magenta' ? 'P2' : 'P3'} · PLAYER
          </p>
          <h1 className="profile__name">{apellido}</h1>
          <p className="profile__nombre">{nombre}</p>
          <p className={`profile__rol profile__rol--${color}`}>{rol}</p>
          <p className="profile__desc">{descripcion}</p>

          {/* Social */}
          <div className="profile__socials">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className={`profile__social profile__social--${color}`}
                title={s.label}
              >
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="profile__body">
        {/* Bio */}
        <section className="profile__section">
          <h2 className={`section-title neon-${color === 'cyan' ? 'cyan' : color === 'magenta' ? 'mag' : 'yel'}`}>
            // BIO
          </h2>
          <p className="profile__bio">{bio}</p>
        </section>

        {/* Skills */}
        <section className="profile__section">
          <h2 className={`section-title neon-${color === 'cyan' ? 'cyan' : color === 'magenta' ? 'mag' : 'yel'}`}>
            // SKILLS
          </h2>
          <div className="profile__skills">
            {skills.map((s, i) => (
              <SkillBar key={s.name} name={s.name} value={s.value} color={color} delay={i * 100} />
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="profile__section">
          <h2 className={`section-title neon-${color === 'cyan' ? 'cyan' : color === 'magenta' ? 'mag' : 'yel'}`}>
            // TECH STACK
          </h2>
          <div className="profile__stack">
            {techStack.map(t => (
              <div key={t.name} className={`profile__tech profile__tech--${color}`}>
                <span className="profile__tech-icon">{t.icon}</span>
                <span className="profile__tech-name">{t.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Carousel */}
        <section className="profile__section">
          <h2 className={`section-title neon-${color === 'cyan' ? 'cyan' : color === 'magenta' ? 'mag' : 'yel'}`}>
            // PROYECTOS
          </h2>
          <Carousel projects={proyectos} color={color} />
        </section>
      </div>
    </div>
  )
}
