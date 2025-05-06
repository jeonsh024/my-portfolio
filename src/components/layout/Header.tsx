'use client'

import Link from 'next/link'

const navItems = [
  { label: '기술', id: 'skill' },
  { label: '경력', id: 'experience' },
  { label: '프로젝트', id: 'project' },
  { label: '프로필', id: 'profile' },
]

const Header = () => {
  return (
    <header>
      <div></div>
      <ul className="flex items-center gap-[10px]">
        {navItems.map(({ label, id }) => (
          <li key={id}>
            <Link href={id} className="hover:text-foreground transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
