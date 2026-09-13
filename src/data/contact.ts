import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import type { ContactLink } from '../types'

export const contactLinks: ContactLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/umaralimustafa',
    icon: FaLinkedin,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/umaralimustafa',
    icon: FaGithub,
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:umaramustafa23@gmail.com',
    icon: MdEmail,
  },
]
