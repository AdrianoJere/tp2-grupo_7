import { useEffect, useRef, useState } from 'react'
import './SkillBar.css'

export default function SkillBar({ name, value, color = 'cyan', delay = 0 }) {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(value), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, delay])

  const blocks = Math.round(value / 5) // 20 blocks max

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className={`skill-bar__value skill-bar__value--${color}`}>{value}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className={`skill-bar__fill skill-bar__fill--${color}`}
          style={{ width: `${width}%`, transition: `width 1s ease ${delay}ms` }}
        />
        <div className="skill-bar__blocks">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`skill-bar__block ${i < blocks && width > 0 ? `skill-bar__block--on skill-bar__block--${color}` : ''}`}
              style={{ transitionDelay: `${delay + i * 40}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
