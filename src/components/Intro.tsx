import { intro } from '../data/intro'

export default function Intro() {
  return (
    <section id="intro" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h1 className="text-ink text-5xl font-extrabold tracking-tight sm:text-7xl">{intro.greeting}</h1>
        <p className="text-ink-soft mt-6 text-xl sm:text-2xl">{intro.welcome}</p>
      </div>
    </section>
  )
}
