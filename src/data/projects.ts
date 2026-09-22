export type FeaturedProject = {
  id: string
  name: string
  period?: string
  description: string
  role: string
  stack: string
  highlights: string[]
  image?: { src: string; alt: string; position?: string }
  note?: string
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'mfc-mobile',
    name: 'MFC Mobile',
    period: '2025.11 — 2026.03',
    description:
      '기존 Vue 기반 현장 운영 앱을 React Native와 Expo 기반의 모바일 제품으로 전환했습니다.',
    role: 'Frontend development · UI design 100%',
    stack: 'React Native · Expo · Zustand · TanStack Query · Axios',
    highlights: [
      '입고·피킹·CS·회수·출퇴근·배송 업무 흐름을 모바일 환경에 맞게 구현',
      '카메라와 Bluetooth scanner를 함께 지원하고 haptic·sound feedback 적용',
      'Zustand persist/partialize와 TanStack Query로 로컬·서버 상태 분리',
      'Fold4 카메라 초기화 문제를 JS 레벨 재초기화로 복구하고 기존 EAS Update 경로로 배포',
    ],
    image: {
      src: '/captures/nowhero-app/스크린샷 2026-08-31 오후 4.00.07.png',
      alt: 'MFC Mobile 상품 입고 검수 화면',
      position: '50% 18%',
    },
  },
  {
    id: 'orderhero',
    name: 'OrderHero',
    description:
      'Customer Web과 Admin을 포함한 물류·커머스 서비스를 장기간 개발하고 운영했습니다.',
    role: 'Frontend development · Product maintenance',
    stack: 'Vue 3 · TypeScript · TanStack Vue Query · Pinia · Vuetify',
    highlights: [
      '주문·결제·취소·반품 등 전자상거래 흐름과 다수의 운영 도메인 구현',
      'Query lifecycle과 cache를 관리하고 Pinia를 역할에 따라 분리',
      '다이나믹 검색·커스텀 셀렉트·공통 오류 처리 등 재사용 UI 설계',
      'Playwright E2E와 Vitest/Jest 기반 테스트로 주요 사용자 흐름 검증',
    ],
    image: {
      src: '/captures/orderhero-app/00-main.png',
      alt: 'OrderHero 고객용 모바일 웹 메인 화면',
      position: '50% 8%',
    },
  },
  {
    id: 'delivery-photo-inspection',
    name: 'Delivery Photo Inspection',
    description:
      '전수 수작업 검수를 AI 1차 판정과 운영자 최종 판단으로 나눈 내부 검수 도구입니다.',
    role: 'Product design · Frontend · AI-assisted implementation',
    stack: 'React · React Query · Zustand · FastAPI · PostgreSQL',
    highlights: [
      'CS 등록 → 사진 수집 → AI 1차 검수 → 운영자 확정의 human-in-the-loop 설계',
      '검수 대시보드·정합성 분석·결정 저장을 하나의 운영 도구로 통합',
      'Grafana data query, CS API proxy, image hash 중복 감지 구성',
      'AI/LLM을 활용해 내부 도구의 Frontend와 Backend를 구현하고 Docker Compose로 배포',
    ],
    note: '내부 운영 정보 보호를 위해 실제 화면은 공개하지 않습니다.',
  },
]

export const SELECTED_WORK = [
  { name: 'TMS', scope: 'Admin · Mobile' },
  { name: 'WMS', scope: 'Web' },
  { name: 'VRMaker', scope: 'Client · CMS' },
  { name: 'Jstartup', scope: 'Web Publishing' },
]
