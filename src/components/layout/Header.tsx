'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItems = [
  { label: '기술', id: 'skill' },
  { label: '경력', id: 'experience' },
  { label: '프로젝트', id: 'project' },
  { label: '프로필', id: 'profile' },
]

const Header = () => {
  const [activeId, setActiveId] = useState<string>('skill')

  useEffect(() => {
    const ids = navItems.map((n) => n.id)
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        // 상단 고정 헤더 높이를 고려하여 중앙 근처에 들어왔을 때 활성화
        root: null,
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0.1,
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto my-2 flex w-full justify-center">
        <ul className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 p-2 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          {navItems.map(({ label, id }) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setActiveId(id)}
                  className={[
                    'px-4 py-2 rounded-lg border transition-colors backdrop-blur',
                    isActive
                      ? 'bg-white/30 border-white/40 text-gray-900 shadow-md dark:text-white'
                      : 'bg-white/10 hover:bg-white/20 border-white/20 text-gray-800/80 dark:text-white/80',
                  ].join(' ')}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

export default Header
