export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  demoUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 'gerador-de-senhas',
    title: 'Gerador de Senhas',
    description:
      'Aplicação web para geração de senhas seguras com opções personalizáveis. Desenvolvida com React e Vite.',
    image: '/img/Password-Generator.png',
    tags: ['React', 'JavaScript', 'Vite'],
    category: 'Aplicação Web',
    demoUrl: 'https://gerador-de-senhas-kohl-chi.vercel.app',
    githubUrl: '#',
  },
  {
    id: 'paw-pet',
    title: 'Pet Shop Landing Page',
    description:
      'Landing page responsiva para pet shop com foco em UX e boas práticas de desenvolvimento front-end. Design moderno, animações suaves e layout otimizado para conversão.',
    image: '/img/Paw-Pet.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsivo'],
    category: 'Landing Page',
    demoUrl: 'https://petshop-website-tawny.vercel.app',
    githubUrl: '#',
  },
  {
    id: 'calculadora-react',
    title: 'Calculadora React',
    description:
      'Calculadora funcional em React.js com gerenciamento de estados (useState), ciclo de vida (useEffect) e suporte a eventos de teclado.',
    image: '/img/Calculadora.png',
    tags: ['React', 'JavaScript', 'Vite'],
    category: 'Aplicação Web',
    demoUrl: 'https://calculadora-react-mu-ashen.vercel.app',
    githubUrl: '#',
  },
]

export const categories = ['Todos', ...Array.from(new Set(projects.map((p) => p.category)))]
