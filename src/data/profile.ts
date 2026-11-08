export const CONTACT = {
  email: 'jeonsh024@gmail.com',
  github: 'https://github.com/jeonsh024',
  resume: '/resume.pdf',
}

/** 퍼블리싱 아카이브 노출 여부. true로 바꾸면 섹션과 메뉴가 함께 다시 보입니다. */
export const SHOW_PUBLISHING = false

export const TOTAL_CAREER = '7년 6개월'

export type Career = {
  period: string
  duration: string
  company: string
  role: string
  description: string
  stack: string[]
  /** 대표 프로젝트에 담지 않은 업무 */
  highlights?: string[]
  /** 대표 프로젝트로 연결 */
  caseLinks?: boolean
}

export const CAREERS: Career[] = [
  {
    period: '2022.06 — 현재',
    duration: '4년 4개월',
    company: '주식회사 딜리버리랩',
    role: '프론트엔드 개발자',
    description: '커머스·물류 플랫폼 — 고객 주문 앱, 본사 어드민, TMS, 물류 모바일 앱',
    stack: ['Vue 3 · TypeScript', 'React Native · React', 'TanStack Query · Zustand', 'Playwright · Vitest', 'Vite · Docker · CI/CD'],
    highlights: [
      'WMS·TMS·MFC 모바일의 초기 구조와 물류 도메인 기능 설계·개발',
      '고객 주문 앱 Vite 8·Vitest 전환',
    ],
    caseLinks: true,
  },
  {
    period: '2021.06 — 2022.02',
    duration: '9개월',
    company: '주식회사 러움',
    role: '퍼블리셔 · 사원',
    description: 'KCC실리콘 홈페이지·기술자료 검색 페이지와 Klenze 마이크로사이트를 반응형으로 구축하고 유지보수했습니다.',
    stack: ['HTML · CSS · JavaScript · Responsive Web'],
  },
  {
    period: '2020.01 — 2020.12',
    duration: '1년',
    company: '프리랜서',
    role: '웹 퍼블리셔',
    description: '다자요, 미니스쿨, AXGATE 대시보드 등 기업·쇼핑몰 반응형 웹 프로젝트를 수행했습니다.',
    stack: ['HTML · CSS · JavaScript'],
  },
  {
    period: '2018.11 — 2020.02',
    duration: '1년 4개월',
    company: '주식회사 에이투젯',
    role: '퍼블리셔',
    description: 'VRMaker Client/CMS 리뉴얼, 네이버 SEO·GA 운영과 제주관광공사·한라 B2B 프로젝트를 담당했습니다.',
    stack: ['HTML · CSS · JavaScript · SEO · Analytics'],
  },
  {
    period: '2017.07 — 2017.09',
    duration: '3개월',
    company: '(주)씨에프디에이',
    role: '퍼블리셔 · 인턴',
    description: 'Fairliar 골프웨어 쇼핑몰의 웹·모바일 화면을 퍼블리싱하고 상품 페이지를 운영했습니다.',
    stack: ['HTML · CSS · JavaScript · Makeshop'],
  },
]

export const SKILLS = [
  {
    title: 'Frontend',
    items: 'TypeScript · JavaScript · Vue 3 · React · React Native · Expo · HTML · CSS · Sass · Tailwind CSS',
    usage: 'Vue 3 커머스 앱·어드민 리뉴얼, React AI 대시보드, React Native 물류 앱 출시',
  },
  {
    title: 'State & Data',
    items: 'TanStack Query · Zustand · React Hook Form · Axios · REST API · OpenAPI',
    usage: '서버 상태와 클라이언트 상태 분리, OpenAPI 기반 프론트엔드 타입 생성',
  },
  {
    title: 'Test & Quality',
    items: 'Playwright · Vitest · Jest · ESLint · oxlint · TypeScript Type Check',
    usage: 'E2E 핵심 플로우 검증·병렬화, 어드민 린트 복구와 하이브리드 린트 체계 운영',
  },
  {
    title: 'Build & Operations',
    items: 'Vite · Node.js · pnpm · GitHub Actions · EAS Build/Update · Docker · Sentry · Firebase',
    usage: 'Vite 8 마이그레이션, 앱스토어 배포·OTA, 모니터링과 Docker 서비스 운영',
  },
]

export const PUBLISHING_WORKS = [
  { title: 'KCC실리콘', period: '2021', role: '기업 웹사이트 반응형 퍼블리싱 · 유지보수', image: '/captures/publishing/kccsilicone.png', crop: true },
  { title: 'Klenze', period: '2021', role: '브랜드 마이크로사이트 반응형 퍼블리싱', image: '/captures/publishing/klenze.png', crop: true },
  { title: 'VRMaker', period: '2018 — 2020', role: 'Client·CMS 리뉴얼 · 반응형 UI · SEO·GA 운영', image: '/captures/publishing/vrmaker.png' },
  { title: '제주 J·Start Up', period: '2019', role: '공공 프로젝트 반응형 웹 퍼블리싱', image: '/captures/publishing/jstartup.png' },
  { title: 'Fairliar', period: '2017 · 2020', role: '골프웨어 쇼핑몰 웹·모바일 퍼블리싱', image: '/captures/publishing/fairliar.png' },
  { title: '다자요', period: '2020', role: '서비스 반응형 웹 퍼블리싱', image: '/captures/publishing/dazayo.png' },
  { title: '미니스쿨 · 미니TV', period: '2020', role: '교육 서비스·관리자 반응형 웹 퍼블리싱', image: '/captures/publishing/minischool.png' },
]

export const EDUCATION = [
  { period: '2010.02 — 2015.02', school: '서울종합예술학교', detail: '패션디자인과 학사 졸업' },
  { period: '수료', school: '더조은컴퓨터아카데미', detail: 'UI/UX 웹디자인·웹퍼블리셔 과정' },
]
