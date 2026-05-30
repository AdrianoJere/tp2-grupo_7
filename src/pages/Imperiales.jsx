import Profile from './Profile'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const DATA = {
  nombre: 'Jeremias',
  apellido: 'IMPERIALES',
  rol: 'FULL STACK DEV',
  descripcion: 'Desarrollador fullstack, entornos cloud y automatización de procesos.',
  avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=imperiales&backgroundColor=020408',
  color: 'yellow',
  bio: 'Fullstack developer con fuerte inclinación hacia la arquitectura de microservicios y el despliegue en la nube. Especializado en NestJS para el backend y React para el frontend, con experiencia en Docker y automatización de pipelines CI/CD. Siempre buscando optimizar el ciclo de desarrollo.',
  skills: [
    { name: 'NestJS',        value: 82 },
    { name: 'TypeScript',    value: 80 },
    { name: 'Docker',        value: 78 },
    { name: 'SQL / ORM',     value: 75 },
    { name: 'React',         value: 70 },
    { name: 'Git / CI/CD',   value: 85 },
  ],
  techStack: [
    { name: 'NestJS',  icon: '🐦' },
    { name: 'Docker',  icon: '🐳' },
    { name: 'SQL',     icon: '🗄️' },
    { name: 'TypeScript',icon:'🔷'},
    { name: 'React',   icon: '⚛️' },
    { name: 'AWS',     icon: '☁️' },
    { name: 'Git',     icon: '🌿' },
  ],
  proyectos: [
    {
      nombre: 'Microservices API',
      emoji: '🔧',
      descripcion: 'Arquitectura de microservicios con NestJS, comunicación mediante RabbitMQ y despliegue en Docker Compose.',
      stack: ['NestJS', 'Docker', 'RabbitMQ', 'TypeScript'],
      demo: null,
      repo: 'https://github.com/imperialesjeremias',
    },
    {
      nombre: 'TP1 — Sitio Web Equipo 7',
      emoji: '🕹️',
      descripcion: 'Sitio web estático con estética arcade para IFTS N°29. A cargo del diseño responsive y animaciones CSS.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://tp1dswf.vercel.app/',
      repo: 'https://github.com/emilianog4/TP1_DSWF_CALONI_GUTIERREZ_IMPERIALES',
    },
    {
      nombre: 'Process Automator',
      emoji: '🤖',
      descripcion: 'Script de automatización para procesos repetitivos con notificaciones y logging centralizado en la nube.',
      stack: ['Python', 'Docker', 'AWS Lambda', 'Bash'],
      demo: null,
      repo: 'https://github.com/imperialesjeremias',
    },
  ],
  socials: [
    { label: 'GITHUB',   icon: <FiGithub />,  url: 'https://github.com/imperialesjeremias' },
    { label: 'LINKEDIN', icon: <FiLinkedin />, url: 'https://linkedin.com' },
  ],
}

export default function Imperiales() {
  return <Profile data={DATA} />
}
