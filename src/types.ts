import type { IconType } from 'react-icons'
import type { ComponentType, SVGProps } from 'react'

/** Either a react-icons component or a plain inline-SVG component works as an icon. */
export type Icon = IconType | ComponentType<SVGProps<SVGSVGElement>>

export interface Internship {
  id: string
  company: string
  role: string
  timeframe: string
  location: string
  team: string
  logo: string
  bullets: string[]
}

export interface Project {
  id: string
  title: string
  caption: string
  photo: string
  /** null represents "no public repo for this project" (was "N/A" in the source content). */
  githubUrl: string | null
  tech: string[]
}

export type SkillCategoryName =
  'Programming Languages' | 'Technologies & Frameworks' | 'Developer Tools' | 'Applications'

export interface Skill {
  name: string
  icon: Icon
}

export interface ContactLink {
  id: string
  label: string
  href: string
  icon: Icon
}
