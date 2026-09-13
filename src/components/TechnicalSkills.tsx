import Section from './Section'
import SkillCategoryBlock from './SkillCategoryBlock'
import { skillCategories, skillsByCategory } from '../data/skills'

export default function TechnicalSkills() {
  return (
    <Section
      id="skills"
      kicker="Skills"
      title="Technical Skills"
      helperText="Hover over a logo to see which skill it represents."
    >
      <div className="space-y-10">
        {skillCategories.map((category) => (
          <SkillCategoryBlock key={category} category={category} skills={skillsByCategory[category]} />
        ))}
      </div>
    </Section>
  )
}
