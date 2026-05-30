import Profile from './Profile'
import { FiGithub, FiLinkedin, FiGlobe, FiMail } from 'react-icons/fi'

const DATA = {
  nombre: 'Adriano Jeremías',
  apellido: 'CALONI',
  rol: 'LÍDER SOPORTE DIGITAL & DEV BACKEND',
  descripcion: '+7 años de experiencia en .NET, T-SQL y APIs. Líder de Soporte en Banco Coinag S.A. Co-fundador de Alcana Labs.',
  avatar: 'https://pfo1-adriano-caloni.vercel.app/img/acaloniOK.png',
  color: 'cyan',
  bio: 'Desarrollador Backend y Líder de Soporte Digital con más de 7 años de experiencia en tecnología. Especializado en .NET, T-SQL, API integrations y análisis de datos. Actualmente lidero el equipo de soporte en Banco Coinag S.A., con experiencia previa en SG Financial Technology – Ágil Pagos y La Segunda Seguros CLSG. Co-fundador de Alcana Labs, donde desarrollamos Mentor+, una plataforma institucional de mentorías académicas ya en producción en mentormas.com.ar.',
  skills: [
    { name: '.NET / C#',            value: 90 },
    { name: 'T-SQL / SQL Server',   value: 90 },
    { name: 'ASP.NET Web API',      value: 88 },
    { name: 'Git / GitHub / GitLab',value: 80 },
    { name: 'Análisis de Datos',    value: 70 },
    { name: 'HTML / CSS',           value: 65 },
  ],
  techStack: [
    { name: '.NET',    icon: '⚙️' },
    { name: 'C#',      icon: '🔷' },
    { name: 'T-SQL',   icon: '🗄️' },
    { name: 'API REST',icon: '🔌' },
    { name: 'Git',     icon: '🌿' },
    { name: 'Docker',  icon: '🐳' },
    { name: 'Azure',   icon: '☁️' },
  ],
  proyectos: [
    {
      nombre: 'Mentor+',
      emoji: '🚀',
      imagen: '/proyectos/mentorMas.png',
      descripcion: 'Plataforma institucional de mentorías académicas en producción. Login con DNI, gestión de roles (alumno, mentor, admin), agenda y reservas.',
      stack: ['Next.js', '.NET Core', 'T-SQL', 'SQL Server'],
      demo: 'https://mentormas.com.ar/login',
      repo: 'https://github.com/AdrianoJere',
    },
    {
      nombre: 'Alcana Labs',
      emoji: '⬡',
      imagen: '/proyectos/alcanalabs.png',
      descripcion: 'Estudio de desarrollo co-fundado en Córdoba. Creamos soluciones tecnológicas para instituciones educativas y empresas.',
      stack: ['.NET', 'Next.js', 'SQL Server'],
      demo: 'https://www.instagram.com/alcanalabs/',
      repo: 'https://github.com/AdrianoJere',
    },
    {
      nombre: 'Banco Coinag — APIs Bancarias',
      emoji: '🏦',
      imagen: '/proyectos/coinag.png',
      descripcion: 'Desarrollo de APIs bancarias integradas con billeteras virtuales, cámaras compensadoras y servicios fintech. Stored procedures complejos en T-SQL.',
      stack: ['.NET 8', 'C#', 'T-SQL', 'ASP.NET Web API'],
      demo: null,
      repo: 'https://github.com/AdrianoJere',
    },
  ],
  socials: [
    { label: 'GITHUB',   icon: <FiGithub />,  url: 'https://github.com/AdrianoJere' },
    { label: 'LINKEDIN', icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/adriano-jeremias-caloni/' },
    { label: 'MENTOR+',  icon: <FiGlobe />,   url: 'https://mentormas.com.ar/login' },
    { label: 'EMAIL',    icon: <FiMail />,     url: 'mailto:caloniadrianoj@gmail.com' },
  ],
}

export default function Caloni() {
  return <Profile data={DATA} />
}
