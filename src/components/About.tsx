import Section from './Section'
import { aboutParagraphs } from '../data/about'

export default function About() {
  return (
    <Section id="about" kicker="About" title="A bit about me">
      <div className="text-ink-soft max-w-3xl space-y-4 text-lg leading-relaxed">
        {aboutParagraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
