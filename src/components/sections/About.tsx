import { motion } from 'framer-motion'
import { FiCode, FiLayers, FiZap } from 'react-icons/fi'
import { SectionTitle } from '../ui/SectionTitle'

const stats = [
  { icon: FiCode, label: 'Projetos Concluídos', value: '10+' },
  { icon: FiLayers, label: 'Tecnologias', value: '4+' },
  { icon: FiZap, label: 'Anos de Experiência', value: '1+' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function About() {
  return (
    <section id="sobre" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Sobre Mim" subtitle="Conheça um pouco da minha história" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-muted text-lg leading-relaxed">
              Sou um desenvolvedor front-end apaixonado por criar experiências digitais{' '}
              <span className="text-text font-medium">intuitivas e leves</span>. Acredito que um bom
              produto vai além do código, é sobre como as pessoas se sentem ao usá-lo.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted text-lg leading-relaxed">
              Tenho foco em construir interfaces modernas com{' '}
              <span className="text-primary font-medium">React</span>,{' '}
              <span className="text-primary font-medium">TypeScript</span> e boas práticas de UX,
              sempre buscando soluções elegantes para problemas complexos.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted text-lg leading-relaxed">
              Além do desenvolvimento, exploro automações com{' '}
              <span className="text-accent font-medium">n8n</span> para otimizar fluxos de trabalho e
              aumentar produtividade.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="glass rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(56,189,248,0.2)' }}
              >
                <Icon className="text-primary mx-auto mb-3" size={28} />
                <div className="text-3xl font-extrabold text-gradient mb-1">{value}</div>
                <div className="text-muted text-sm">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
