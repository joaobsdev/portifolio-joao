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
    id: 'fresh-marmitas',
    title: 'Fresh Marmitas',
    description:
      'Central de pedidos de restaurante fit feita com React e TypeScript com um dashboard de gestão.',
    image: '/img/fresh-marmitas.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'Aplicação Web',
    demoUrl: 'https://fresh-marmitas.vercel.app',
    githubUrl: '#',
  },
    {
    id: 'movies-app',
    title: 'Movies App',
    description:
      'Um projeto completo de aplicação web para visualização de filmes, consumindo dados em tempo real da API do TMDB.',
    image: '/img/Movies-app.png',
    tags: ['React', 'TypeScript', 'API REST', 'SASS'],
    category: 'Aplicação Web',
    demoUrl: 'https://movies-app-lake-three.vercel.app',
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
]

export const categories = ['Todos', ...Array.from(new Set(projects.map((p) => p.category)))]
