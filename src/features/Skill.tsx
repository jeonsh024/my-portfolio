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
    'Vue 3',
    'React Native, React.js',
    'Expo',
    'Next.js',
    'JavaScript',
    'TypeScript',
  ],
  라이브러리: [
    'TanStack Query',
    'Zustand',
    'Jest',
    'React Hook Form',
    'Playwright',
    'Sass',
    'Tailwind CSS',
  ],
  '환경 및 배포': [
    'GitHub, GitHub Actions',
    'Firebase',
    'Vite',
    'pnpm',
  ],
  디자인: ['Photoshop', 'XD', 'Figma', 'Sketch', 'Zeplin'],
}

const SKILL_ICON_SRC_MAP: Record<string, string> = {
  'Vue 3': '/assets/images/skill/vue-icon.png',
  'Next.js': '/assets/images/skill/nextjs-icon.svg',
  'React Native, React.js': '/assets/images/skill/react-native.png',
  Expo: '/assets/images/skill/expo-icon.svg',
  JavaScript: '/assets/images/skill/javascript-icon.svg',
  TypeScript: '/assets/images/skill/ts-icon.png',
  'TanStack Query': '/assets/images/skill/tanstack-query-icon.png',
  Zustand: '/assets/images/skill/zustand-icon.svg',
  Jest: '/assets/images/skill/Jest-icon.svg',
  'React Hook Form': '/assets/images/skill/react-hook-form-icon.png',
  Sass: '/assets/images/skill/sass-icon.png',
  'Tailwind CSS': '/assets/images/skill/tailwind-icon.svg',
  'GitHub, GitHub Actions': '/assets/images/skill/github-icon.svg',
  Firebase: '/assets/images/skill/firebase-icon.svg',
  Vite: '/assets/images/skill/vitejs-icon.svg',
  Photoshop: '/assets/images/skill/photoshop-icon.png',
  XD: '/assets/images/skill/xd-icon.png',
  Figma: '/assets/images/skill/figma-icon.svg',
  Sketch: '/assets/images/skill/sketch-icon.svg',
  Zeplin: '/assets/images/skill/zeplin-icon.svg',
  pnpm: '/assets/images/skill/pnpm-icon.svg',
  Playwright: '/assets/images/skill/playwright-icon.png',
  Yarn: '/assets/images/skill/yarn-icon.svg',
}

export function getSkillInitials(skill: string) {
  const parts = skill
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }

  return (parts[0]?.slice(0, 2) ?? '').toUpperCase()
}

export function getPlaceholderIconSrc(initials: string) {
  const safeInitials = initials.slice(0, 2) || '?'

  // SVG data URI placeholder (so even "missing icons" still render as an <img>).
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <rect x="8" y="8" width="48" height="48" rx="16" fill="#60a5fa" fill-opacity="0.18"/>
      <text x="32" y="36" text-anchor="middle" font-family="Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Arial" font-size="18" font-weight="800" fill="#3b82f6">
        ${safeInitials}
      </text>
    </svg>
  `.trim()

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
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
    <div className="w-full flex flex-col gap-8">
      <h4 className="text-center text-2xl font-bold tracking-tight text-primary">
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

      <ul className="mx-auto w-100 max-w-[480px] flex flex-wrap gap-3 justify-center rounded-[20px] border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-md sm:grid-cols-3 md:grid-cols-4 dark:border-white/5 dark:bg-white/0">
        {displaySkills.map((skill) => (
          <li
            key={skill}
            title={skill}
            className="h-12 w-12 group relative flex items-center justify-center rounded-[10px] border border-white/20 bg-white/10 text-center shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5"
          >
            <span
              role="tooltip"
              className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-2 whitespace-nowrap rounded-md bg-foreground/90 px-2 py-1 text-[11px] font-medium text-background opacity-0 shadow-sm transition-opacity group-hover:opacity-100 dark:bg-foreground/95"
            >
              {skill}
            </span>

            {SKILL_ICON_SRC_MAP[skill] ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={SKILL_ICON_SRC_MAP[skill]}
                alt={skill}
                className="h-10 w-10 object-contain"
                loading="lazy"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={getPlaceholderIconSrc(getSkillInitials(skill))}
                alt={skill}
                className="h-10 w-10 object-contain"
                loading="lazy"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skill
