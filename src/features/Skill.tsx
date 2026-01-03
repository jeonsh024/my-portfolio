'use client'

import { useMemo, useState } from 'react'

type TabKey = '프론트엔드' | '라이브러리' | '환경 및 배포' | '디자인'

const TABS: { key: TabKey; label: TabKey }[] = [
  { key: '프론트엔드', label: '프론트엔드' },
  { key: '라이브러리', label: '라이브러리' },
  { key: '환경 및 배포', label: '환경 및 배포' },
  { key: '디자인', label: '디자인' },
]

const SKILLS: Record<TabKey, string[]> = {
  프론트엔드: [
    'Vue.js',
    'React.js',
    'Next.js',
    'React Native',
    'JavaScript',
    'TypeScript',
  ],
  라이브러리: [
    'TanStack Query',
    'React Hook Form',
    'Sass',
    'Tailwind',
    'Vue Query',
  ],
  '환경 및 배포': ['GitHub'],
  디자인: ['Photoshop', 'Sketch', 'Figma', 'XD'],
}

const Skill = () => {
  const [activeTab, setActiveTab] = useState<TabKey | null>(null)

  const allSkills = useMemo(() => {
    return Array.from(new Set(Object.values(SKILLS).flat()))
  }, [])

  const displaySkills = useMemo(() => {
    if (!activeTab) return allSkills
    return SKILLS[activeTab]
  }, [activeTab, allSkills])

  const handleTabClick = (tab: TabKey) => {
    setActiveTab((prev) => (prev === tab ? null : tab))
  }

  return (
    <div className="w-full  flex flex-col gap-8">
      <h4 className="text-center font-semibold text-primary">
        기술 스택 및 도구
      </h4>
      <div className="mx-auto flex items-center justify-center rounded-[30px] bg-secondary p-1">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => handleTabClick(tab.key)}
              className={[
                'px-4 py-2 rounded-[20px] border transition-all border-0',
                isActive ? 'bg-white font-semibold' : 'bg-transparent',
              ].join(' ')}
              aria-pressed={isActive}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <ul className="mx-auto grid w-90 max-w-[420px] grid-cols-2 gap-3 rounded-[20px] border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-md sm:grid-cols-3 md:grid-cols-4 dark:border-white/5 dark:bg-white/0">
        {displaySkills.map((skill) => (
          <li
            key={skill}
            className="rounded-[20px] border border-white/20 bg-white/10 px-3 py-2 text-center text-sm font-medium text-gray-900 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skill
