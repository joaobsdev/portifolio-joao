import {
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiCss,
} from 'react-icons/si'
import { FiImage } from 'react-icons/fi'
import type { IconType } from 'react-icons'

export interface Skill {
  id: string
  name: string
  description: string
  Icon: IconType
  color: string
}

export const skills: Skill[] = [
  {
    id: 'figma',
    name: 'Figma',
    description: 'Prototipagem e Design Systems',
    Icon: SiFigma,
    color: '#f24e1e',
  },
  {
    id: 'adobe',
    name: 'Adobe Suite',
    description: 'Photoshop & Illustrator',
    Icon: FiImage,
    color: '#ff0000',
  },
  {
    id: 'wireframing',
    name: 'Wireframing',
    description: 'Estrutura e fluxos de navegação',
    Icon: SiFigma,
    color: '#6c63ff',
  },
  {
    id: 'responsivo',
    name: 'Design Responsivo',
    description: 'Mobile First e Adaptabilidade',
    Icon: SiCss,
    color: '#264de4',
  },
  {
    id: 'htmlcss',
    name: 'HTML',
    description: 'Estilização e componentes',
    Icon: SiHtml5,
    color: '#e34f26',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Lógica de Programação',
    Icon: SiJavascript,
    color: '#f7df1e',
  },
  {
    id: 'react',
    name: 'React',
    description: 'Interfaces Modernas',
    Icon: SiReact,
    color: '#61dafb',
  },
];
