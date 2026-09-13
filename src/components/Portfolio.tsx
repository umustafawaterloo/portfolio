import Section from './Section'
import ProjectCarousel from './ProjectCarousel'
import { projects } from '../data/projects'

export default function Portfolio() {
  return (
    <Section
      id="portfolio"
      kicker="Projects"
      title="Portfolio"
      helperText="Click a project to view its code on GitHub. Projects without a public repo aren't clickable."
    >
      <ProjectCarousel projects={projects} />
    </Section>
  )
}
