import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiMail } from 'react-icons/fi'

const ROLES = ['Desenvolvedor Front-End', 'React Developer']

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(56,189,248,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 60%, rgba(129,140,248,0.1) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block text-primary font-mono text-sm mb-4 border border-primary/30 rounded-full px-4 py-1 bg-primary/5"
          >
            👋 Olá, eu sou
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
          >
            <span className="text-text">João</span>{' '}
            <span className="text-gradient">Pedro</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-2xl md:text-3xl font-bold text-muted mb-6 h-10">
            <span className="text-accent">{displayed}</span>
            <span className="animate-pulse text-primary">|</span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-muted text-lg leading-relaxed max-w-lg mb-8"
          >
            Apaixonado por transformar ideias em experiências digitais{' '}
            <span className="text-text font-medium">intuitivas</span> e{' '}
            <span className="text-text font-medium">marcantes</span>. Cada linha de código é uma oportunidade de criar algo incrível.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.button
              onClick={() => scrollTo('projetos')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-background font-semibold flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Ver Projetos <FiArrowDown size={16} />
            </motion.button>
            <motion.button
              onClick={() => scrollTo('contato')}
              className="px-6 py-3 rounded-xl border border-primary/40 text-primary font-semibold flex items-center gap-2 hover:bg-primary/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Entrar em Contato <FiMail size={16} />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl -z-10" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 -z-10" />
            <img
              src="/img/Jota_social.jpg"
              alt="Foto de perfil de João Pedro Bispo"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/40 shadow-2xl shadow-primary/20"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-primary transition-colors focus:outline-none"
        onClick={() => scrollTo('sobre')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Rolar para baixo"
      >
        <FiArrowDown size={24} />
      </motion.button>
    </section>
  )
}
