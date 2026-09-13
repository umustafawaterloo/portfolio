import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  kicker?: string
  title?: string
  helperText?: string
  children: ReactNode
  className?: string
}

/**
 * Shared section wrapper: consistent width/spacing, an optional small accent-colored
 * "kicker" label, heading, and short assisting text under the heading.
 * `scroll-mt-24` keeps the sticky header from covering the top of the section when
 * a nav link scrolls here — must stay >= the header's rendered height.
 */
export default function Section({ id, kicker, title, helperText, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-8 sm:py-12 ${className}`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {(kicker || title) && (
          <div className="mb-8">
            {kicker && (
              <p className="text-accent mb-2 text-sm font-semibold tracking-wide uppercase">{kicker}</p>
            )}
            {title && <h2 className="text-ink text-3xl font-bold sm:text-4xl">{title}</h2>}
            {helperText && <p className="text-ink-soft mt-3 max-w-2xl">{helperText}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
