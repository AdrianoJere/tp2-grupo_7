import Profile from './Profile'
import { FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi'

const DATA = {
  nombre: 'Adriano',
  apellido: 'CALONI',
  rol: 'BACKEND WARRIOR',
  descripcion: 'Dev backend, líder de soporte digital y co-fundador de Alcana Labs.',
  avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=caloni&backgroundColor=020408',
  color: 'cyan',
  bio: 'Desarrollador backend apasionado por la arquitectura de sistemas y la resolución de problemas complejos. Co-fundador de Alcana Labs, donde aplica soluciones tecnológicas para la gestión digital. Enfocado en construir APIs robustas, optimizar bases de datos y garantizar la seguridad y escalabilidad de las aplicaciones.',
  skills: [
    { name: '.NET / C#',   value: 85 },
    { name: 'SQL Server',  value: 80 },
    { name: 'API REST',    value: 75 },
    { name: 'Python',      value: 60 },
    { name: 'Git / GitHub',value: 90 },
    { name: 'HTML / CSS',  value: 70 },
  ],
  techStack: [
    { name: '.NET',    icon: '⚙️'  },
    { name: 'C#',      icon: '🔷'  },
    { name: 'SQL',     icon: '🗄️'  },
    { name: 'API',     icon: '🔌'  },
    { name: 'Git',     icon: '🌿'  },
    { name: 'Docker',  icon: '🐳'  },
    { name: 'Azure',   icon: '☁️'  },
  ],
  proyectos: [
    {
      nombre: 'Alcana Labs',
      emoji: '🏢',
      descripcion: 'Sistema de gestión digital para pequeñas y medianas empresas. Backend en .NET con SQL Server.',
      stack: ['.NET', 'C#', 'SQL', 'REST API'],
      demo: null,
      repo: 'https://github.com/AdrianoJere',
    },
    {
      nombre: 'TP1 — Sitio Web Equipo 7',
      emoji: '🕹️',
      descripcion: 'Sitio web estático con estética arcade desarrollado para IFTS N°29. HTML, CSS y JS vanilla.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://tp1dswf.vercel.app/',
      repo: 'https://github.com/emilianog4/TP1_DSWF_CALONI_GUTIERREZ_IMPERIALES',
    },
    {
      nombre: 'API de Inventario',
      emoji: '📦',
      descripcion: 'API RESTful para gestión de inventario con autenticación JWT y documentación Swagger.',
      stack: ['C#', '.NET', 'JWT', 'Swagger'],
      demo: null,
      repo: 'https://github.com/AdrianoJere',
    },
  ],
  socials: [
    { label: 'GITHUB',   icon: <FiGithub />,   url: 'https://github.com/AdrianoJere' },
    { label: 'LINKEDIN', icon: <FiLinkedin />,  url: 'https://linkedin.com' },
  ],
}

export default function Caloni() {
  return <Profile data={DATA} />
}
