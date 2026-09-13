import Section from './Section'
import InternshipCard from './InternshipCard'
import { internships } from '../data/internships'

export default function Internships() {
  return (
    <Section
      id="internships"
      kicker="Experience"
      title="Internships"
      helperText="Most recent first — each card lists the company, role, and what I worked on."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {internships.map((internship) => (
          <InternshipCard key={internship.id} internship={internship} />
        ))}
      </div>
    </Section>
  )
}
