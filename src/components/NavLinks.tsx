interface NavItem {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: 'intro', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'internships', label: 'Internships' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function NavLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-x-1 gap-y-1 sm:gap-x-2">
      {navItems.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="text-ink-soft hover:text-accent rounded-md px-2 py-1 text-sm font-medium transition-colors sm:px-3 sm:text-base"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
