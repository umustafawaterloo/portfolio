import SkillIcon from './SkillIcon'
import type { Skill, SkillCategoryName } from '../types'

export default function SkillCategoryBlock({
  category,
  skills,
}: {
  category: SkillCategoryName
  skills: Skill[]
}) {
  return (
    <div>
      <h3 className="text-ink-soft mb-4 text-sm font-semibold tracking-wide uppercase">{category}</h3>
      <div className="flex flex-wrap gap-x-5 gap-y-6">
        {skills.map((skill) => (
          <SkillIcon key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}
