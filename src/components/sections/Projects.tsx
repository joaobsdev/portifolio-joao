import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'
import { ProjectCard } from '../ui/ProjectCard'
import { projects, categories } from '../../data/projects'

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projetos" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Projetos"
          subtitle="Uma seleção dos meus trabalhos mais recentes"
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary to-accent text-background shadow-lg shadow-primary/20'
                  : 'border border-primary/30 text-muted hover:border-primary hover:text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.p
            className="text-center text-muted mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Nenhum projeto nesta categoria ainda.
          </motion.p>
        )}
      </div>
    </section>
  )
}
