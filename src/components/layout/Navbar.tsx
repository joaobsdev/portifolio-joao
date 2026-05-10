import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { useActiveSection } from '../../hooks/useActiveSection'

const NAV_LINKS = [
  { label: 'Início', href: 'hero' },
  { label: 'Sobre', href: 'sobre' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projetos', href: 'projetos' },
  { label: 'Contato', href: 'contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const sectionIds = useMemo(() => NAV_LINKS.map((l) => l.href), [])
  const activeSection = useActiveSection(sectionIds)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-background/50' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Navegação principal">
        <button
          onClick={() => scrollTo('hero')}
          className="font-bold text-xl tracking-tight focus:outline-none"
          aria-label="Ir para o início"
        >
          <span className="text-gradient">JP</span>
          <span className="text-muted">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => scrollTo(href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeSection === href
                    ? 'text-primary bg-primary/10'
                    : 'text-muted hover:text-text hover:bg-surface/60'
                }`}
                aria-current={activeSection === href ? 'page' : undefined}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-text p-2 rounded-lg hover:bg-surface/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            className="md:hidden glass border-t border-primary/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="px-6 py-4 flex flex-col gap-1" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all focus:outline-none ${
                      activeSection === href
                        ? 'text-primary bg-primary/10'
                        : 'text-muted hover:text-text hover:bg-surface/60'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
