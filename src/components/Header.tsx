import NavLinks from './NavLinks'
import ContactIcons from './ContactIcons'

export default function Header() {
  return (
    <header className="border-hairline bg-paper/90 sticky top-0 z-50 border-b backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <nav className="min-w-0">
          <NavLinks />
        </nav>
        <div className="shrink-0">
          <ContactIcons variant="header" />
        </div>
      </div>
    </header>
  )
}
