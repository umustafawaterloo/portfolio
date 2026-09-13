import { intro } from '../data/intro'

export default function Intro() {
  return (
    <section id="intro" className="scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h1 className="font-display text-ink text-5xl font-medium tracking-tight sm:text-7xl">
          {intro.greeting}
        </h1>
        <p className="text-ink-soft mt-6 text-xl sm:text-2xl">{intro.welcome}</p>
      </div>
    </section>
  )
}
