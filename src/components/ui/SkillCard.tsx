import { motion } from 'framer-motion'
import type { Skill } from '../../data/skills'

interface SkillCardProps {
  skill: Skill
  index: number
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const { name, description, Icon, color } = skill

  return (
    <motion.div
      className="glass rounded-2xl p-6 flex flex-col items-center text-center gap-4 cursor-default"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.06, boxShadow: `0 0 28px ${color}55` }}
    >
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center"
        style={{ background: `${color}18`, border: `1px solid ${color}40` }}
      >
        <Icon size={36} style={{ color }} />
      </div>
      <div>
        <h3 className="text-text font-bold text-xl mb-1">{name}</h3>
        <p className="text-muted text-sm">{description}</p>
      </div>
    </motion.div>
  )
}
