import type { Skill } from '../types'

export default function SkillIcon({ skill }: { skill: Skill }) {
  const Icon = skill.icon

  return (
    <div className="group relative flex flex-col items-center">
      <div className="border-hairline text-ink group-hover:border-accent group-hover:text-accent flex h-14 w-14 items-center justify-center rounded-xl border transition-colors">
        <Icon size={28} />
      </div>
      <span
        role="tooltip"
        className="bg-ink pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded-md px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100"
      >
        {skill.name}
      </span>
    </div>
  )
}
