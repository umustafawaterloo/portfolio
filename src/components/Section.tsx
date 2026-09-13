import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title?: string
  helperText?: string
  children: ReactNode
  className?: string
}

/**
 * Shared section wrapper: consistent width/spacing, a single heading (matching the
 * section's header nav label), and short assisting text under the heading.
 * `scroll-mt-24` keeps the sticky header from covering the top of the section when
 * a nav link scrolls here — must stay >= the header's rendered height.
 * The title uses `font-title` (Sora) rather than the site's Space Grotesk body
 * font, so headings stay visually distinct from body text.
 */
export default function Section({ id, title, helperText, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-8 sm:py-12 ${className}`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {(title || helperText) && (
          <div className="mb-8">
            {title && <h2 className="font-title text-ink text-3xl font-bold sm:text-4xl">{title}</h2>}
            {helperText && <p className="text-ink-soft mt-3 max-w-2xl">{helperText}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
