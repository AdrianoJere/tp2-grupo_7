import Profile from './Profile'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const DATA = {
  nombre: 'Emiliano',
  apellido: 'GUTIERREZ',
  rol: 'DATA MAGE & DEV',
  descripcion:
    'Apasionado de la tecnología y los datos. Stack principal: Python y SQL.',
  avatar: 'https://pfo-1-delta.vercel.app/img/avatar.png',
  color: 'magenta',
  bio: 'Apasionado de la tecnología y los datos. Disfruto combinar la lógica del código con el análisis de información para encontrar soluciones creativas. Fan del cine clásico — de Forrest Gump a Interstellar — y siempre con ganas de aprender nuevas tecnologías.',
  skills: [
    { name: 'Python', value: 80 },
    { name: 'SQL', value: 78 },
    { name: 'Git / GitHub', value: 70 },
    { name: 'HTML / CSS', value: 65 },
    { name: 'Pintura y Dibujo', value: 75 },
    { name: 'React (aprendiendo)', value: 40 },
  ],
  techStack: [
    { name: 'Python', icon: '🐍' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Git', icon: '🌿' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Figma', icon: '✏️' },
    { name: 'React', icon: '⚛️' },
  ],
  proyectos: [
    {
      nombre: 'Proyecto 1',
      emoji: '📊',
      descripcion:
        'Proyecto de análisis de datos con Python y SQL. Procesamiento y visualización de datasets.',
      stack: ['Python', 'SQL', 'Pandas'],
      imagen: '/proyectos/data_banner.jpg',
      demo: 'https://sites.google.com/view/emiliano-gutierrez/projects/e-commerce',
      repo: null,
    },
    {
      nombre: 'Proyecto 2',
      emoji: '💡',
      descripcion:
        'Desarrollo web con HTML, CSS y JavaScript. Interfaces dinámicas y diseño responsivo.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://pfo-1-delta.vercel.app/',
      repo: null,
    },
    {
      nombre: 'TP1 — Sitio Web Equipo 7',
      emoji: '🕹️',
      descripcion:
        'Sitio web estático con estética arcade para IFTS N°29. HTML, CSS y JS vanilla.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://tp-1-dswf-caloni-gutierrez-imperial-eta.vercel.app/',
      repo: 'https://github.com/emilianog4/TP1_DSWF_CALONI_GUTIERREZ_IMPERIALES',
    },
  ],
  socials: [
    {
      label: 'GITHUB',
      icon: <FiGithub />,
      url: 'https://github.com/emilianog4',
    },
    { label: 'LINKEDIN', icon: <FiLinkedin />, url: 'https://linkedin.com' },
  ],
}

export default function Gutierrez() {
  return <Profile data={DATA} />
}
