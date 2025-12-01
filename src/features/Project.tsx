'use client'

import { useMemo, useState } from 'react'

type ProjectItem = {
  id: string
  title: string
  period: string
  summary: string[]
  skills: string[]
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'mfc-rn-2025-11',
    title: 'MFC 모바일 앱 (React Native)',
    period: '2025.11 - 재직 중',
    summary: [
      'React Native 기반으로 MFC 모바일 앱 개발 진행',
      '물류 업무 플로우 및 모바일 UX 고도화',
    ],
    skills: ['React Native', 'TypeScript'],
  },
  {
    id: 'tms-saas-2025-08',
    title: 'TMS (SaaS) · MFC 모바일',
    period: '2025.08 - 2025.10',
    summary: [
      'SaaS 형태의 TMS 프론트엔드 초기 개발 (Vue.js)',
      'MFC 모바일 신규/개선 기능 개발 (Vue.js)',
    ],
    skills: ['Vue 3', 'TypeScript'],
  },
  {
    id: 'app-2-2025',
    title: '앱 2.0',
    period: '2025.01 - 2025.05',
    summary: [
      'Vue 3, TypeScript, Vue Query 기반 프론트엔드 개발',
      '즐겨찾기 “다나와” 방식 그룹핑 기능 개발',
      '페이지네이션·무한스크롤 개선으로 성능 리팩토링',
    ],
    skills: [
      'Vue 3',
      'TypeScript',
      'Vue Query',
      'Infinite Scroll',
      'Pagination',
    ],
  },
  {
    id: 'admin-2-2024h2',
    title: '어드민 2.0',
    period: '2024.07 - 2024.12',
    summary: [
      '발급 쿠폰 관리, 파트너 코드 등록, 프린트 리팩토링',
      '상품단가 업데이트, 상세권한, 주문 변경 이력 모달 등 기능 확장',
      '데이터 테이블 프리셋 리팩토링 및 접근 권한 고도화',
    ],
    skills: ['Vue 3', 'TypeScript', 'Vue Query', 'RBAC', 'Data Table'],
  },
  {
    id: 'app-2-2024h2',
    title: '앱 2.0',
    period: '2024.07 - 2024.12',
    summary: [
      '즐겨찾기 개선, 장바구니 UX 개선, 주문조회 상세, 간편결제 등 리팩토링',
      '배너/이미지 최적화, 조건부 버튼 노출 등 마이크로 UX 대응',
    ],
    skills: ['Vue 3', 'TypeScript', 'Vue Query', 'UX 개선', '이미지 최적화'],
  },
  {
    id: 'mfc-mobile-2024h2',
    title: 'MFC 모바일',
    period: '2024.07 - 2024.12',
    summary: ['휴대폰번호/매장정보 추가', '오류 수정 및 코드 정비'],
    skills: ['Vue 3', 'TypeScript', 'Mobile UI'],
  },
  {
    id: 'recall-2024',
    title: '어드민 & MFC 모바일 2.0 - 회수 처리 기능',
    period: '2024',
    summary: ['회수 처리 기능 신규 개발', '각 시스템 통합 적용'],
    skills: ['Vue 3', 'TypeScript', 'Workflow', 'API Integration'],
  },
  {
    id: 'admin-2-renewal',
    title: '어드민 2.0 전면 리뉴얼',
    period: '2023.12 - 2024.07',
    summary: [
      '프론트 아키텍처 설계 및 전면 리뉴얼 개발',
      '다이나믹 서치, 커스텀 셀렉트, 글로벌 Confirm 모달 등 공통 모듈 개발',
      '도메인별 페이지 설계, 상세권한·콘텐츠 관리·키밸류 설정 구현',
      '메인 콘텐츠 관리(카테고리/노출/상품선택) 및 유통사 상품·주문·결제로그 리팩토링',
    ],
    skills: [
      'Vue 3',
      'TypeScript',
      'Vue Query',
      'Design System',
      'Modular Architecture',
    ],
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
    ],
    skills: ['Vue 3', 'TypeScript', 'Vue Query', 'Vuetify', 'Theming'],
  },
  {
    id: 'mfc-2-0',
    title: 'MFC 모바일 2.0',
    period: '2023.12 - 2024.07',
    summary: [
      '2.0 API 연동, 물류 기능 대응(배송순번 변경, 스캐너 UI, 지정일 운행)',
      'API 중복 제거 및 구조 최적화, 사용자 가이드/운영 문서 작성',
    ],
    skills: ['Vue 3', 'TypeScript', 'Logistics', 'API 최적화'],
  },
  {
    id: 'wms-2023',
    title: 'WMS 프론트 개발',
    period: '2023.09 - 2023.11',
    summary: [
      'Vue 3, TypeScript 기반 전체 프론트 구조 및 기능 설계',
      '상품 등록 모달, 멀티 셀렉트 등 커스텀 컴포넌트 개발',
      '템플릿 구조 설계 및 공통 UI 퍼블리싱',
    ],
    skills: ['Vue 3', 'TypeScript', 'Component Design', 'UX'],
  },
  {
    id: 'legacy-maintenance-2023',
    title: '구 시스템 유지보수',
    period: '2023.06 - 2023.12',
    summary: [
      '구 어드민/구 앱 개선(검수확인서, 상품 CS, 정산, 상세 검색)',
      '신 어드민 모듈 문서 페이지 퍼블리싱 및 도큐먼트 정리',
    ],
    skills: ['Vue', 'TypeScript', 'Maintenance', 'Docs'],
  },
  {
    id: 'rnd-senior',
    title: '[R&D] 시니어 영양급식',
    period: '2023.08 - 2023.09',
    summary: ['영양사가 부족한 시설을 위한 식단 추천 시스템 PoC 개발'],
    skills: ['Vue 3', 'TypeScript', 'PoC'],
  },
  {
    id: 'mfc-mobile-2023',
    title: 'MFC 모바일(Vue.js)',
    period: '2023.01 - 2023.03',
    summary: [
      '피킹리스트, 다스 등 물류 기능 기획 및 UI/UX 디자인',
      '모바일 화면 전체 퍼블리싱 및 레이아웃 구성',
      '배송탭, 누락 대응 프로세스 시나리오 구현, 가이드 제작',
    ],
    skills: ['Vue 3', 'TypeScript', 'Responsive Design', 'Logistics'],
  },
  {
    id: 'new-admin-2022',
    title: '신어드민 구축 및 유지보수',
    period: '2022.08 - 2023.05',
    summary: [
      '초기 템플릿 및 레이아웃 퍼블리싱',
      '식당/주문/쿠폰/권한 등 페이지 설계 및 반응형 개발',
      'MFC 대시보드(피킹리스트, 박스관리) 퍼블리싱',
    ],
    skills: ['Vue', 'TypeScript', 'Responsive', 'Dashboard'],
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
    skills: ['HTML/CSS', 'Vue', 'Design System', 'Refactoring'],
  },
]

const ITEMS_PER_PAGE = 6

const Project = () => {
  const [visible, setVisible] = useState(ITEMS_PER_PAGE)

  const list = useMemo(() => {
    return PROJECTS // 이미 최신순으로 정렬된 데이터
  }, [])

  const visibleItems = useMemo(() => list.slice(0, visible), [list, visible])
  const hasMore = visible < list.length

  return (
    <section className="w-full space-y-6">
      <h2 className="text-xl font-semibold">주요 프로젝트</h2>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {visibleItems.map((p) => (
          <li
            key={p.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-md dark:border-white/5 dark:bg-white/0"
          >
            <div className="mb-2 flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold">{p.title}</h3>
              <span className="shrink-0 text-xs text-foreground/70">
                {p.period}
              </span>
            </div>
            <ul className="mb-3 list-disc pl-5 text-sm text-foreground/90">
              {p.summary.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {p.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-white/20 bg-white/10 px-2 py-1 text-xs text-foreground/90 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                >
                  {s}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + ITEMS_PER_PAGE)}
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium shadow-md backdrop-blur-md hover:bg-white/20 transition-colors dark:border-white/10 dark:bg-white/5"
          >
            더보기
          </button>
        </div>
      )}
    </section>
  )
}

export default Project
