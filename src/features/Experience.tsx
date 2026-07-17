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
      'React',
      'Expo',
      'Expo Router',
      'Vite',
      'Zustand',
      'TanStack Query',
      'Playwright',
      'Jest',
      'EAS Build',
      'CI/CD',
      'GitHub Actions',
      'Sentry',
      'Sass',
      'Tailwind',
      'Docker',
    ],
    details: [
      '배송사진 AI 검수 시스템 기획·설계 주도 — React 18 + Vite 대시보드 개발, Gemini 프롬프트 설계, FastAPI/Docker 풀스택 단독 구축',
      '앱 2.0 부팅 번들 88% 경량화(7.5MB → 874KB) — 번들 분석, 동적 import, WASM 청크 분리, vendor 분리 설계',
      'React Native · Expo 기반 물류 모바일 앱 설계부터 iOS/Android 출시·운영까지 단독 전담',
      '앱 운영 안정화 — 강제 업데이트(Firebase Remote Config), Sentry + Crashlytics 모니터링, 카메라 마이그레이션',
      '어드민 2.0 · 앱 2.0 프론트 아키텍처 설계 및 전면 리뉴얼 개발, Vuetify 테마 시스템 설계',
      '공통 컴포넌트(다이나믹 서치, 커스텀 셀렉트, 에러 핸들러 등) 설계로 팀 개발 효율 향상',
      'Playwright E2E · Jest Unit Test 구축으로 주요 플로우 테스트 자동화',
      'EAS Build/Update · GitHub Actions 기반 CI/CD 및 OTA 무중단 배포 체계화',
      'Vue 3 · TypeScript 기반 TMS, WMS, MFC 모바일 등 다수 서비스 프론트엔드 구조 설계 및 개발',
      '오더히어로 공식 웹사이트·앱·어드민 리뉴얼 퍼블리싱 및 전자상거래 플로우 고도화',
    ],
  },
  {
    id: 'reum-2021-2022',
    yearRange: '2021 - 2022',
    company: '주식회사 러움',
    companyType: '디지털 에이전시 · 웹 퍼블리싱/프론트엔드',
    skills: ['HTML/CSS', 'JavaScript', 'TypeScript', '반응형 웹', 'Publishing'],
    details: [
      'KCC실리콘 홈페이지 제작 퍼블리싱 및 유지보수',
      'KCC실리콘 기술자료검색 페이지 퍼블리싱',
      'Klenze 마이크로 홈페이지 제작 퍼블리싱',
    ],
  },
  {
    id: 'freelancer-2020',
    yearRange: '2020',
    company: '프리랜서',
    companyType: '웹 퍼블리싱 · 프론트엔드',
    skills: ['HTML/CSS', 'JavaScript', '반응형 웹'],
    details: [
      '제주 청소년 문화예술 캠프 소개 웹페이지 퍼블리싱',
      'Fairliar 골프웨어 쇼핑몰 리뉴얼 퍼블리싱',
      '슈퍼카 PC/MOBILE 반응형 퍼블리싱',
      '페이블루 리뉴얼 홈페이지 반응형 퍼블리싱',
      '다자요 리뉴얼 홈페이지 반응형 퍼블리싱',
      '미니스쿨, 미니티비 홈페이지 반응형 퍼블리싱',
      'AXGATE Dashboard 퍼블리싱',
    ],
  },
  {
    id: 'a2z-2018-2020',
    yearRange: '2018 - 2020',
    company: '주식회사 에이투젯',
    companyType: 'VRMaker Client/CMS 퍼블리싱 · 운영',
    skills: ['HTML/CSS', 'JavaScript', '반응형 웹', 'SEO', 'Analytics'],
    details: [
      'VRMaker 홈페이지를 Client page / CMS page 분리 리뉴얼 프론트 반응형 퍼블리싱',
      '네이버 검색엔진 최적화 및 구글 애널리틱스 등록 관리',
      '제주 관광공사 Jstartup 홈페이지 퍼블리싱 및 네이버 검색 최적화',
      '(주)한라 VR 현장관리 시스템 퍼블리싱',
      'VRMaker 리뉴얼 반응형 퍼블리싱',
    ],
  },
  {
    id: 'cfdia-2017',
    yearRange: '2017',
    company: '(주)씨에프디에이',
    companyType: '쇼핑몰 웹 퍼블리싱 (인턴)',
    skills: ['HTML/CSS', 'JavaScript', '반응형 웹'],
    details: [
      'Fairliar 골프웨어 쇼핑몰 홈페이지 디자인 퍼블리싱',
      '메이크샵 호스팅 사이트 이용 웹, 모바일 홈페이지 퍼블리싱',
      '쇼핑몰 웹디자인 및 제품등록',
    ],
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
