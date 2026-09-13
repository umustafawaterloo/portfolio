import { contactLinks } from '../data/contact'

interface ContactIconsProps {
  variant?: 'header' | 'section'
}

/**
 * Renders the same contact links (LinkedIn, GitHub, Email) used both in the sticky
 * header (top-right) and in the full Contact section, from one shared data source.
 */
export default function ContactIcons({ variant = 'section' }: ContactIconsProps) {
  const size = variant === 'header' ? 20 : 28

  return (
    <ul className="flex items-center gap-4">
      {contactLinks.map((link) => {
        const Icon = link.icon
        return (
          <li key={link.id} className="group relative flex">
            <a
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={link.label}
              className="text-ink-soft hover:text-accent transition-colors"
            >
              <Icon size={size} />
            </a>
            <span
              role="tooltip"
              className="bg-ink pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 rounded-md px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100"
            >
              {link.label}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
