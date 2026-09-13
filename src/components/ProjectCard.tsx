import type { Project } from '../types'

export default function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <img src={project.photo} alt={project.title} className="h-48 w-full rounded-t-xl object-cover" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-ink text-lg font-semibold">{project.title}</h3>
        <p className="text-ink-soft mt-2 flex-1 text-sm">{project.caption}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech} className="bg-hairline/60 text-ink-soft rounded-full px-2.5 py-1 text-xs">
              {tech}
            </li>
          ))}
        </ul>
        <p className="text-ink-soft mt-4 text-xs font-medium">
          {project.githubUrl ? 'View on GitHub →' : 'No public repository'}
        </p>
      </div>
    </>
  )

  const cardClasses =
    'flex h-full flex-col overflow-hidden rounded-xl border border-hairline bg-paper transition-shadow'

  if (project.githubUrl) {
    return (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardClasses} hover:shadow-lg`}
      >
        {content}
      </a>
    )
  }

  return (
    <div className={cardClasses} aria-disabled="true">
      {content}
    </div>
  )
}
