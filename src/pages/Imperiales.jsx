import Profile from './Profile'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const DATA = {
  nombre: 'Jeremías',
  apellido: 'IMPERIALES',
  rol: 'DESARROLLADOR WEB FRONTEND',
  descripcion: 'Apasionado dev web en formación. Enfocado en UI/UX, accesibilidad y tecnologías frontend modernas.',
  avatar: 'https://pfo-1-front-indol.vercel.app/img/avatar.png',
  color: 'yellow',
  bio: 'Soy un apasionado desarrollador web en formación, enfocado en crear experiencias digitales atractivas e intuitivas. Me interesa el diseño UI/UX, la accesibilidad web y las tecnologías frontend modernas. Mi misión es combinar creatividad y código para construir sitios web que no solo funcionen bien, sino que también inspiren. Fan de Interstellar, Matrix y Blade Runner 2049.',
  skills: [
    { name: 'HTML5',         value: 90 },
    { name: 'CSS3',          value: 88 },
    { name: 'JavaScript',    value: 65 },
    { name: 'Git / GitHub',  value: 65 },
    { name: 'Figma / UI-UX', value: 60 },
    { name: 'React (aprendiendo)', value: 40 },
  ],
  techStack: [
    { name: 'HTML5',      icon: '🌐' },
    { name: 'CSS3',       icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Git',        icon: '🌿' },
    { name: 'Figma',      icon: '✏️' },
    { name: 'UI/UX',      icon: '🎯' },
    { name: 'React',      icon: '⚛️' },
  ],
  proyectos: [
    {
      nombre: 'Dashboard Analytics',
      emoji: '📊',
      descripcion: 'Aplicación web interactiva para visualización de datos con gráficos dinámicos y panel de control en tiempo real.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://pfo-1-front-indol.vercel.app/',
      repo: 'https://github.com/imperialesjeremias',
    },
    {
      nombre: 'TaskFlow App',
      emoji: '📱',
      descripcion: 'Diseño de interfaz para una aplicación móvil de gestión de tareas con una experiencia de usuario fluida y moderna.',
      stack: ['Figma', 'UI/UX', 'Prototipo'],
      demo: 'https://pfo-1-front-indol.vercel.app/',
      repo: 'https://github.com/imperialesjeremias',
    },
    {
      nombre: 'TP1 — Sitio Web Equipo 7',
      emoji: '🕹️',
      descripcion: 'Sitio web estático con estética arcade para IFTS N°29. A cargo del diseño visual y animaciones CSS.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://tp-1-dswf-caloni-gutierrez-imperial-eta.vercel.app/',
      repo: 'https://github.com/emilianog4/TP1_DSWF_CALONI_GUTIERREZ_IMPERIALES',
    },
  ],
  socials: [
    { label: 'GITHUB',   icon: <FiGithub />,   url: 'https://github.com/imperialesjeremias' },
    { label: 'LINKEDIN', icon: <FiLinkedin />,  url: 'https://linkedin.com' },
    { label: 'TWITTER',  icon: <FiTwitter />,   url: 'https://twitter.com' },
  ],
}

export default function Imperiales() {
  return <Profile data={DATA} />
}
