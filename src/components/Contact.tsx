import Section from './Section'
import ContactIcons from './ContactIcons'

export default function Contact() {
  return (
    <Section
      id="contact"
      kicker="Get in touch"
      title="Contact"
      helperText="Hover over an icon to see what it links to, and click it to reach out."
    >
      <ContactIcons variant="section" />
    </Section>
  )
}
