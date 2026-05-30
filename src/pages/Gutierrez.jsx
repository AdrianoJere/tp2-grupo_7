import Profile from './Profile'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const DATA = {
  nombre: 'Emiliano',
  apellido: 'GUTIERREZ',
  rol: 'DATA MAGE',
  descripcion: 'Especialista en Python, SQL y análisis de datos. Mente matemática del equipo.',
  avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=gutierrez&backgroundColor=020408',
  color: 'magenta',
  bio: 'Apasionado por el análisis de datos y la inteligencia artificial. Con sólida base matemática, trabaja en proyectos que van desde la manipulación de datasets hasta la visualización de tendencias. Cree que los datos bien interpretados son la herramienta más poderosa para tomar decisiones.',
  skills: [
    { name: 'Python',        value: 88 },
    { name: 'SQL / Queries', value: 85 },
    { name: 'Pandas / NumPy',value: 80 },
    { name: 'Data Analysis', value: 75 },
    { name: 'Git / GitHub',  value: 85 },
    { name: 'React',         value: 60 },
  ],
  techStack: [
    { name: 'Python',  icon: '🐍' },
    { name: 'SQL',     icon: '🗄️' },
    { name: 'Pandas',  icon: '🐼' },
    { name: 'NumPy',   icon: '🔢' },
    { name: 'Git',     icon: '🌿' },
    { name: 'Jupyter', icon: '📓' },
    { name: 'Excel',   icon: '📊' },
  ],
  proyectos: [
    {
      nombre: 'Análisis de Datos',
      emoji: '📊',
      descripcion: 'Pipeline de análisis de datasets públicos con Pandas, visualización con Matplotlib y conclusiones estadísticas.',
      stack: ['Python', 'Pandas', 'Matplotlib', 'Jupyter'],
      demo: null,
      repo: 'https://github.com/emilianog4',
    },
    {
      nombre: 'TP1 — Sitio Web Equipo 7',
      emoji: '🕹️',
      descripcion: 'Sitio web estático con estética arcade para IFTS N°29. Lideró la integración de JavaScript dinámico.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://tp1dswf.vercel.app/',
      repo: 'https://github.com/emilianog4/TP1_DSWF_CALONI_GUTIERREZ_IMPERIALES',
    },
    {
      nombre: 'Query Optimizer',
      emoji: '⚡',
      descripcion: 'Herramienta CLI para analizar y optimizar queries SQL, identificando cuellos de botella y sugiriendo índices.',
      stack: ['Python', 'SQL', 'CLI', 'SQLite'],
      demo: null,
      repo: 'https://github.com/emilianog4',
    },
  ],
  socials: [
    { label: 'GITHUB',   icon: <FiGithub />,  url: 'https://github.com/emilianog4' },
    { label: 'LINKEDIN', icon: <FiLinkedin />, url: 'https://linkedin.com' },
  ],
}

export default function Gutierrez() {
  return <Profile data={DATA} />
}
