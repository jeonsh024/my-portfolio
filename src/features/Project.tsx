'use client'

import {
  Code2,
  Layers,
  Monitor,
  Package,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

const PROJECT_ICONS: LucideIcon[] = [
  Smartphone,
  Monitor,
  Package,
  Layers,
  Code2,
]

type ProjectItem = {
  id: string
  title: string
  period: string
  summary: string[]
  skills: string[]
  detailType: 'LINK' | 'CONTENTS'
  detailLink?: string
  contents?: string[]
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'mfc-rn-2025-11',
    title: 'MFC 모바일 앱 (React Native)',
    period: '2025.11 - 재직 중',
    summary: [
      'React Native · Expo 기반으로 물류 업무용 모바일 앱 설계 및 개발',
      '입고, 피킹, CS, 회수, 출퇴근, 배송 등 도메인 기능을 모바일 UX에 맞게 구현',
      'Zustand, TanStack Query, Axios 기반으로 상태 관리 및 서버 데이터 흐름 구조화',
      'EAS Build / Update 기반 배포 프로세스와 CI/CD 파이프라인을 구축, 앱 출시 담당',
      'REST API 연동',
    ],
    skills: [
      'React Native',
      'Expo',
      'TypeScript',
      'Zustand',
      'TanStack Query',
      'Expo Router',
      'Axios',
      'EAS Build',
      'EAS Update',
      'CI/CD',
      'GitHub Actions',
      'Firebase',
    ],
    detailType: 'CONTENTS',
  },
  {
    id: 'app-2-test-2025',
    title: '앱 2.0 테스트 코드 구축',
    period: '2025.09 - 2025.12',
    summary: [
      '앱 2.0 주요 사용자 플로우를 대상으로 Playwright 기반 E2E 테스트 시나리오를 설계 및 작성',
      '인증, 검색, 장바구니, 주문/결제, 마이페이지, 즐겨찾기, 주문 취소 등 핵심 기능에 대한 통합 테스트 구성',
      '모달, 토스트, 리다이렉트, 네트워크 지연 등 다양한 예외 상황을 고려해 헬퍼·재시도·폴백 전략으로 테스트 안정성 강화',
      'Jest 기반 유틸 함수 및 수량 조절 컴포넌트 Unit Test를 작성해 비즈니스 로직과 UI 동작 검증',
    ],
    skills: [
      'Playwright',
      'TypeScript',
      'Jest',
      'E2E Testing',
      'Unit Testing',
      'Test Automation',
    ],
    detailType: 'CONTENTS',
  },
  {
    id: 'tms-saas-2025-08',
    title: 'TMS (SaaS) · MFC 모바일',
    period: '2025.08 - 2025.10',
    summary: [
      'SaaS 형태의 TMS 프론트엔드 초기 구조 설계 및 개발',
      'Vue 3 · TypeScript 기반으로 MFC 모바일 신규 기능 및 개선 기능 개발',
      '도메인별 화면 구성과 API 연동을 통해 운영 업무 플로우 반영',
      'REST API 연동',
    ],
    skills: ['Vue 3', 'TypeScript', 'TanStack Query', 'Sass'],
    detailType: 'CONTENTS',
  },
  {
    id: 'app-2-2025',
    title: '앱 2.0',
    period: '2025.01 - 2025.05',
    summary: [
      'Vue 3, TypeScript, Vue Query(TanStack Query) 기반 프론트엔드 개발',
      '즐겨찾기 “다나와” 방식 그룹핑 기능 개발',
      '페이지네이션·무한스크롤 개선으로 성능 리팩토링',
      'REST API 연동',
    ],
    skills: ['Vue 3', 'TypeScript', 'TanStack Query', 'Sass', 'Vuetify'],
    detailType: 'CONTENTS',
  },
  {
    id: 'admin-2-2024h2',
    title: '어드민 2.0',
    period: '2024.07 - 2024.12',
    summary: [
      '발급 쿠폰 관리, 파트너 코드 등록, 프린트 리팩토링',
      '상품단가 업데이트, 상세권한, 주문 변경 이력 모달 등 기능 확장',
      '데이터 테이블 프리셋 리팩토링 및 접근 권한 고도화',
      '다이나믹 서치 모듈 개발',
      'REST API 연동',
    ],
    skills: ['Vue 3', 'TypeScript', 'TanStack Query', 'Sass', 'Vuetify'],
    detailType: 'CONTENTS',
  },
  {
    id: 'app-2-2024h2',
    title: '앱 2.0',
    period: '2024.07 - 2024.12',
    summary: [
      '즐겨찾기 개선, 장바구니 UX 개선, 주문조회 상세, 간편결제 등 리팩토링',
      '배너/이미지 최적화, 조건부 버튼 노출 등 마이크로 UX 대응',
    ],
    skills: ['Vue 3', 'TypeScript', 'TanStack Query', 'Sass', 'Vuetify'],
    detailType: 'CONTENTS',
  },
  {
    id: 'mfc-mobile-2024h2',
    title: 'MFC 모바일',
    period: '2024.07 - 2024.12',
    summary: [
      '휴대폰번호/매장정보 추가',
      '오류 수정 및 코드 정비',
      'REST API 연동',
    ],
    skills: ['Vue 3', 'TypeScript', 'TanStack Query', 'Sass', 'Vuetify'],
    detailType: 'CONTENTS',
  },
  {
    id: 'recall-2024',
    title: '어드민 & MFC 모바일 2.0 - 회수 처리 기능',
    period: '2024',
    summary: [
      '회수 처리 기능 신규 개발',
      '각 시스템 통합 적용',
      '업무 플로우 구현',
      'REST API 연동',
    ],
    skills: ['Vue 3', 'TypeScript', 'TanStack Query', 'Sass', 'Vuetify'],
    detailType: 'CONTENTS',
  },
  {
    id: 'admin-2-renewal',
    title: '어드민 2.0 전면 리뉴얼',
    period: '2023.12 - 2024.07',
    summary: [
      '프론트 아키텍처 설계 및 전면 리뉴얼 개발',
      '다이나믹 서치, 커스텀 셀렉트, 글로벌 Confirm 모달 등 시스템 공통 모듈 개발',
      '도메인별 페이지 설계, 상세권한·콘텐츠 관리·키밸류 설정 구현',
      '메인 콘텐츠 관리(카테고리/노출/상품선택) 및 유통사 상품·주문·결제로그 리팩토링',
      'REST API 연동',
    ],
    skills: ['Vue 3', 'TypeScript', 'TanStack Query', 'Sass'],
    detailType: 'CONTENTS',
  },
  {
    id: 'app-2-renewal',
    title: '앱 2.0 전면 리뉴얼',
    period: '2023.12 - 2024.07',
    summary: [
      '프론트 아키텍처 설계 및 전면 리뉴얼',
      'Vuetify 커스터마이징·테마 시스템 설계',
      '메인/마이페이지/장바구니/배송조회 등 UI/UX 설계 및 개발',
      '주문/취소/반품 전자상거래 플로우 고도화 및 신규 화면 개발',
      'REST API 연동',
    ],
    skills: ['Vue 3', 'TypeScript', 'TanStack Query', 'Vuetify', 'Sass'],
    detailType: 'CONTENTS',
  },
  {
    id: 'mfc-2-0',
    title: 'MFC 모바일 2.0',
    period: '2023.12 - 2024.07',
    summary: [
      '2.0 API 연동, 물류 기능 대응(배송순번 변경, 스캐너 UI, 지정일 운행)',
      'API 중복 제거 및 구조 최적화, 사용자 가이드/운영 문서 작성',
      'REST API 연동',
    ],
    skills: ['Vue 3', 'TypeScript', 'Sass'],
    detailType: 'CONTENTS',
  },
  {
    id: 'wms-2023',
    title: 'WMS 프론트 개발',
    period: '2023.09 - 2023.11',
    summary: [
      'Vue 3, TypeScript 기반 전체 프론트 구조 및 기능 설계',
      '상품 등록 모달, 멀티 셀렉트 등 커스텀 컴포넌트 개발',
      'REST API 연동',
      '템플릿 구조 설계 및 공통 UI 퍼블리싱',
    ],
    skills: ['Vue 3', 'TypeScript', 'Sass', 'Vuetiy'],
    detailType: 'CONTENTS',
  },
  {
    id: 'legacy-maintenance-2023',
    title: '구 시스템 유지보수',
    period: '2023.06 - 2023.12',
    summary: [
      '구 어드민/구 앱 개선(검수확인서, 상품 CS, 정산, 상세 검색)',
      '신 어드민 모듈 문서 페이지 퍼블리싱 및 도큐먼트 정리',
      '시스템 유지보수',
    ],
    skills: ['HTML/CSS', 'Sass', 'JavaScript', 'TypeScript'],
    detailType: 'CONTENTS',
  },
  {
    id: 'rnd-senior',
    title: '[R&D] 시니어 영양급식',
    period: '2023.08 - 2023.09',
    summary: [
      '영양사가 부족한 시설을 위한 식단 추천 시스템 PoC 개발',
      '아이디어 검증을 위한 프로토타입 설계 및 구현',
    ],
    skills: ['HTML/CSS', 'Sass', 'JavaScript'],
    detailType: 'LINK',
    detailLink:
      'http://sn-alb-1238897415.ap-northeast-2.elb.amazonaws.com/NutritionMain.php',
  },
  {
    id: 'mfc-mobile-2023',
    title: 'MFC 모바일(Vue 3)',
    period: '2023.01 - 2023.03',
    summary: [
      '물류 도메인 - 피킹리스트, 다스 등 물류 기능 기획 및 UI/UX 디자인',
      '모바일 화면 전체 퍼블리싱 및 레이아웃 구성',
      '배송탭, 누락 대응 프로세스 시나리오 구현, 가이드 제작',
      'REST API 연동',
    ],
    skills: ['Vue 3', 'TypeScript', 'Sass'],
    detailType: 'CONTENTS',
  },
  {
    id: 'new-admin-2022',
    title: '신어드민 구축 및 유지보수',
    period: '2022.08 - 2023.05',
    summary: [
      '초기 템플릿 및 레이아웃 퍼블리싱',
      '식당/주문/쿠폰/권한 등 페이지 설계 및 반응형 개발',
      'MFC 대시보드(피킹리스트, 박스관리) 반응형 퍼블리싱',
    ],
    skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'Sass'],
    detailType: 'CONTENTS',
  },
  {
    id: 'official-2022',
    title: '공식 웹사이트 · 앱 · 어드민 유지보수',
    period: '2022.06 - 2023.05',
    summary: [
      '공식 웹사이트 디자인 리뉴얼 및 퍼블리싱',
      '앱 주요 페이지 전면 리뉴얼 퍼블리싱(카테고리, 즐겨찾기, 파트너관 등)',
      'Alert/Modal/회원가입 등 핵심 컴포넌트 스타일 리팩토링',
    ],
    skills: ['HTML/CSS', 'JavaScript'],
    detailType: 'CONTENTS',
  },
  {
    id: 'official-2021',
    title: 'Klanze 웹 퍼블리싱',
    period: '2021.11 - 2021.12',
    summary: ['Klanze 마이크로 홈페이지 웹 퍼블리싱'],
    skills: ['HTML/CSS', 'JavaScript'],
    detailType: 'LINK',
    detailLink: 'https://www.klenze.co.kr/',
  },
  {
    id: 'product3-2021',
    title: 'KCC실리콘 웹 퍼블리싱',
    period: '2021.06 - 2021.11',
    summary: ['KCC실리콘 리뉴얼 웹 퍼블리싱'],
    skills: ['HTML/CSS', 'JavaScript'],
    detailType: 'LINK',
    detailLink: 'https://www.kccsilicone.com/main.do',
  },
  {
    id: 'product2-2019',
    title: '한라건설 vr 현장관리 시스템 퍼블리싱',
    period: '2019.04 - 2019.12',
    summary: ['한라건설 vr 현장관리 시스템 퍼블리싱'],
    skills: ['HTML/CSS', 'JavaScript'],
    detailType: 'LINK',
    detailLink: 'https://www.klenze.co.kr/',
  },
  {
    id: 'product1-2017',
    title: 'Fairliar 골프웨어 쇼핑몰 반응형 퍼블리싱',
    period: '2017.06 - 2023.08',
    summary: ['Fairliar 쇼핑몰 반응형 퍼블리싱'],
    skills: ['HTML/CSS', 'JavaScript'],
    detailType: 'LINK',
    detailLink: 'https://fairliar.com/',
  },
]

const ITEMS_PER_PAGE = 6

const Project = () => {
  const [visible, setVisible] = useState(ITEMS_PER_PAGE)
  // const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  const visibleItems = PROJECTS.slice(0, visible)
  const hasMore = visible < PROJECTS.length

  const handleLoadMore = () => {
    setVisible((v) => Math.min(v + ITEMS_PER_PAGE, PROJECTS.length))
  }

  const handleProjectClick = (project: ProjectItem) => {
    if (project.detailLink) {
      window.open(project.detailLink, '_blank', 'noopener,noreferrer')
      return
    }

    // setSelectedProject(project)
  }

  return (
    <section className="mx-auto w-full max-w-[1000px] space-y-10">
      <h2 className="text-center text-2xl font-bold tracking-tight text-foreground">
        주요 프로젝트
      </h2>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
        {visibleItems.map((p, index) => {
          const Icon = PROJECT_ICONS[index % PROJECT_ICONS.length]
          const description = p.summary.join(' ')

          return (
            <li
              key={p.id}
              className={cn(
                'group flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 cursor-pointer',
                'hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:shadow-lg',
                'dark:border-white/10 dark:bg-card dark:hover:border-blue-500 dark:hover:bg-blue-600',
              )}
              onClick={() => handleProjectClick(p)}
            >
              <div className="flex shrink-0 items-start justify-between gap-3">
                <div
                  className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-white/15 group-hover:text-white"
                  aria-hidden
                >
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <span className="pt-0.5 text-right text-[11px] font-medium leading-tight text-muted-foreground transition-colors group-hover:text-blue-100">
                  {p.period}
                </span>
              </div>

              <div className="min-h-0 flex-1 overflow-hidden pt-4">
                <h3 className="text-base font-bold leading-snug text-card-foreground transition-colors group-hover:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-5 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/90">
                  {description}
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-2 pt-4">
                {p.skills.map((s, skillIndex) => {
                  return (
                    <span
                      key={`${p.id}-${skillIndex}-${s}`}
                      title={s}
                      className="inline-flex h-6 items-center rounded-sm bg-muted px-3 text-[11px] font-medium text-muted-foreground transition-colors group-hover:bg-white/20 group-hover:text-white"
                    >
                      {s}
                    </span>
                  )
                })}
              </div>
            </li>
          )
        })}
      </ul>

      {hasMore ? (
        <div className="relative z-20 flex justify-center px-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleLoadMore()
            }}
            className=" cursor-pointer rounded-2xl bg-secondary px-10 py-2 text-sm font-semibold text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            더 보기
          </button>
        </div>
      ) : null}
    </section>
  )
}

export default Project
