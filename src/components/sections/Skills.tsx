import { SectionTitle } from '../ui/SectionTitle'
import { SkillCard } from '../ui/SkillCard'
import { skills } from '../../data/skills'

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface/20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Skills"
          subtitle="Tecnologias e ferramentas que uso no dia a dia"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
