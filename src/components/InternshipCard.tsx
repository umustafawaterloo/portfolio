import type { Internship } from '../types'

export default function InternshipCard({ internship }: { internship: Internship }) {
  return (
    <article className="border-hairline rounded-xl border p-6">
      <div className="flex items-start gap-4">
        <img
          src={internship.logo}
          alt={`${internship.company} logo`}
          className="h-12 w-12 shrink-0 rounded-md object-contain"
        />
        <div className="min-w-0">
          <h3 className="text-ink text-lg font-semibold">{internship.role}</h3>
          <p className="text-ink-soft">
            {internship.company} · {internship.team}
          </p>
          <p className="text-ink-soft text-sm">
            {internship.timeframe} · {internship.location}
          </p>
        </div>
      </div>
    </article>
  )
}
