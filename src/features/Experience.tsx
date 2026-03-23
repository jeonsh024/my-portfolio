'use client'

import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'

type ExperienceItem = {
  id: string
  yearRange: string
  company: string
  companyType: string
  skills: string[]
  details?: string[]
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'deliverylab-2022-now',
    yearRange: '2022 - 현재',
    company: '주식회사 딜리버리랩',
    companyType: '커머스·물류 플랫폼 (앱/어드민, TMS, MFC 모바일)',
    skills: [
      'Vue 3',
      'TypeScript',
      'React Native',
      'Expo',
      'Expo Router',
      'Zustand',
      'TanStack Query',
      'Playwright',
      'Jest',
      'EAS Build',
      'CI/CD',
      'GitHub Actions',
      'Sass',
      'Tailwind',
    ],
    details: [
      'Vue 3 기반 어드민·커머스 앱, TMS, MFC 모바일 등 다양한 서비스 프론트엔드 개발',
      'React Native · Expo 기반 물류 업무용 모바일 앱 설계, 개발, 배포 및 출시 담당',
      'Playwright E2E / Jest Unit Test 구축으로 주요 사용자 플로우 테스트 자동화',
      'EAS Build · Update, GitHub Actions 기반 CI/CD 및 운영 환경 구성',
    ],
  },
  {
    id: 'reum-2021-2022',
    yearRange: '2021 - 2022',
    company: '주식회사 러움',
    companyType: '디지털 에이전시 · 웹 퍼블리싱/프론트엔드',
    skills: ['HTML/CSS', 'JavaScript', 'TypeScript', '반응형 웹', 'Publishing'],
    details: [
      'KCC 실리콘 리뉴얼 프로젝트 웹 퍼블리싱',
      'Klenze 홈페이지 퍼블리싱',
    ],
  },
  {
    id: 'a2z-2018-2020',
    yearRange: '2018 - 2020',
    company: '주식회사 에이투젯',
    companyType: 'VRMaker Client/CMS 퍼블리싱 · 운영',
    skills: ['HTML/CSS', 'JavaScript', '반응형 웹', 'SEO', 'Analytics'],
    details: [
      '360도 VR 파노라마 이미지와 동영상 제작 플랫폼 반응형 웹 퍼블리싱',
      '한라건설 VR 현장관리 시스템 웹 퍼블리싱',
    ],
  },
  {
    id: 'cfdia-2017',
    yearRange: '2017',
    company: '(주)씨에프디에이',
    companyType: '쇼핑몰 웹 퍼블리싱',
    skills: ['HTML/CSS', 'JavaScript', '반응형 웹'],
    details: ['Fairliar 골프웨어 쇼핑몰 반응형 웹 퍼블리싱'],
  },
]

const Experience = () => {
  const [openIds, setOpenIds] = useState<string[]>([])

  const toggleDetail = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }
  return (
    <section className="w-full space-y-6 max-w-[680px] mx-auto">
      <h2 className="text-center text-2xl font-bold tracking-tight text-foreground">
        경력
      </h2>

      <div className="relative">
        <div className="pointer-events-none absolute left-[10px] top-0 bottom-0 border-l border-white/15 dark:border-white/10" />
        <ul className="space-y-8">
          {EXPERIENCES.map((exp) => {
            const isOpen = openIds.includes(exp.id)
            const hasDetails = !!exp.details?.length

            return (
              <li key={exp.id} className="relative pl-8">
                <span
                  className={[
                    'absolute left-[6px] top-2 h-2 w-2 rounded-full shadow ring-2 ring-white/60 dark:ring-white/30',
                    exp.id === 'deliverylab-2022-now'
                      ? 'bg-blue-600'
                      : 'bg-gray-300 dark:bg-white/30',
                  ].join(' ')}
                />
                <div className="grid grid-cols-[96px_1fr] items-start gap-4">
                  <div className="pt-1 text-sm font-medium text-foreground/70">
                    {exp.yearRange}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-semibold">{exp.company}</h3>
                    <p className="text-sm text-foreground/80">
                      {exp.companyType}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {exp.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-gray/20 bg-white/10 px-2 py-1 text-xs text-foreground/90 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    {hasDetails ? (
                      <div className="pt-1">
                        <button
                          type="button"
                          onClick={() => toggleDetail(exp.id)}
                          className="flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-500 cursor-pointer"
                        >
                          {isOpen ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}{' '}
                          상세보기
                        </button>
                      </div>
                    ) : null}

                    {hasDetails && isOpen ? (
                      <ul className="space-y-1.5 pt-1">
                        {exp.details?.map((detail, index) => (
                          <li
                            key={`${exp.id}-detail-${index}`}
                            className="flex items-start gap-2 text-sm leading-relaxed text-foreground/80"
                          >
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Experience
