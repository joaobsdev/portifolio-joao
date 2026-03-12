import { SiJavascript, SiReact, SiTypescript, SiN8N } from 'react-icons/si'
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
    id: 'js',
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
  {
    id: 'ts',
    name: 'TypeScript',
    description: 'Tipagem Segura',
    Icon: SiTypescript,
    color: '#3178c6',
  },
  {
    id: 'n8n',
    name: 'n8n',
    description: 'Automações',
    Icon: SiN8N,
    color: '#ea4b71',
  },
]
