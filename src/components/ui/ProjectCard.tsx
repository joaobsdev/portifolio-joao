import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import type { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, image, tags, demoUrl, githubUrl } = project

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="glass rounded-2xl overflow-hidden group"
      whileHover={{ y: -6 }}
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 gap-3">
          {demoUrl && demoUrl !== '#' && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all"
              aria-label={`Demo de ${title}`}
            >
              <FiExternalLink size={16} />
            </a>
          )}
          {githubUrl && githubUrl !== '#' && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all"
              aria-label={`GitHub de ${title}`}
            >
              <FiGithub size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-text font-bold text-xl mb-2">{title}</h3>
        <p className="text-muted text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
