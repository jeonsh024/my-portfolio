'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Work', id: 'work' },
  { label: 'Technical', id: 'technical' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

const Header = () => {
  const [activeId, setActiveId] = useState('work')

  useEffect(() => {
    const elements = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[1080px] items-center justify-between px-5 sm:px-10">
        <Link href="#top" className="text-sm font-semibold tracking-tight text-slate-950">전승희</Link>
        <nav aria-label="주요 섹션">
          <ul className="flex items-center gap-4 sm:gap-6">
            {navItems.map(({ label, id }) => (
              <li key={id}>
                <Link href={`#${id}`} aria-current={activeId === id ? 'location' : undefined} className={activeId === id ? 'text-xs font-semibold text-blue-600 sm:text-sm' : 'text-xs text-slate-500 transition-colors hover:text-slate-950 sm:text-sm'}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
