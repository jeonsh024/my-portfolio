export const CONTACT = {
  email: 'jeonsh024@gmail.com',
  github: 'https://github.com/jeonsh024',
  resume: '/resume.pdf',
}

/** 퍼블리싱 아카이브 노출 여부. true로 바꾸면 섹션과 메뉴가 함께 다시 보입니다. */
export const SHOW_PUBLISHING = false

/* ==========================================================================
   경력 기간 계산 — 'YYYY.MM' 문자열에서 자동 계산합니다.
   시작·종료 달을 모두 포함해 세고(이력서 플랫폼과 같은 방식), 겹치는 달은 한 번만 셉니다.
   종료가 없으면 빌드 시점의 달까지로 계산합니다.
   ========================================================================== */
type CareerSource = Omit<Career, 'period' | 'duration'> & { start: string; end?: string }

const monthIndex = (ym: string) => {
  const [y, m] = ym.split('.').map(Number)
  return y * 12 + (m - 1)
}

const currentYM = () => {
  const d = new Date()
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}`
}

const formatMonths = (total: number) => {
  const years = Math.floor(total / 12)
  const months = total % 12
  return [years > 0 && `${years}년`, months > 0 && `${months}개월`].filter(Boolean).join(' ')
}

const careerDuration = (start: string, end?: string) =>
  formatMonths(monthIndex(end ?? currentYM()) - monthIndex(start) + 1)

const totalCareer = (items: CareerSource[]) => {
  const months = new Set<number>()
  for (const { start, end } of items) {
    for (let i = monthIndex(start); i <= monthIndex(end ?? currentYM()); i++) months.add(i)
  }
  return formatMonths(months.size)
}

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

const CAREER_SOURCE: CareerSource[] = [
  {
    start: '2022.06',
    company: '주식회사 딜리버리랩',
    role: '프론트엔드 개발자',
    description: '커머스·물류 플랫폼 — 고객 주문 앱, 본사 어드민, TMS, 물류 모바일 앱, 배송사진 AI 검수',
    stack: ['Vue 3 · TypeScript', 'React Native · React', 'TanStack Query · Zustand', 'Playwright · Vitest', 'Vite · Sentry · Docker · CI/CD'],
    highlights: [
      'WMS·TMS·MFC 모바일의 초기 구조와 물류 도메인 기능 설계·개발',
      '고객 주문 앱 Vite 8·Vitest 전환, 의존성 업그레이드로 보안 취약점 104건 → 42건',
    ],
    caseLinks: true,
  },
  {
    start: '2021.06',
    end: '2022.02',
    company: '주식회사 러움',
    role: '퍼블리셔 · 사원',
    description: 'KCC실리콘 홈페이지·기술자료 검색 페이지와 Klenze 마이크로사이트를 반응형으로 구축하고 유지보수했습니다.',
    stack: ['HTML · CSS · JavaScript · Responsive Web'],
  },
  {
    start: '2020.01',
    end: '2020.12',
    company: '프리랜서',
    role: '웹 퍼블리셔',
    description: '다자요, 미니스쿨, AXGATE 대시보드 등 기업·쇼핑몰 반응형 웹 프로젝트를 수행했습니다.',
    stack: ['HTML · CSS · JavaScript'],
  },
  {
    start: '2018.11',
    end: '2020.02',
    company: '주식회사 에이투젯',
    role: '퍼블리셔',
    description: 'VRMaker Client/CMS 리뉴얼, 네이버 SEO·GA 운영과 제주관광공사·한라 B2B 프로젝트를 담당했습니다.',
    stack: ['HTML · CSS · JavaScript · SEO · Analytics'],
  },
  {
    start: '2017.07',
    end: '2017.09',
    company: '(주)씨에프디에이',
    role: '퍼블리셔 · 인턴',
    description: 'Fairliar 골프웨어 쇼핑몰의 웹·모바일 화면을 퍼블리싱하고 상품 페이지를 운영했습니다.',
    stack: ['HTML · CSS · JavaScript · Makeshop'],
  },
]

export const TOTAL_CAREER = totalCareer(CAREER_SOURCE)

export const CAREERS: Career[] = CAREER_SOURCE.map(({ start, end, ...rest }) => ({
  ...rest,
  period: `${start} — ${end ?? '현재'}`,
  duration: careerDuration(start, end),
}))

export const SKILLS = [
  {
    title: 'Frontend',
    items: 'TypeScript · JavaScript · Vue 3 · React · React Native · Expo · Storybook · HTML · CSS · Sass · Tailwind CSS',
    usage: 'Vue 3 커머스 앱·어드민 리뉴얼, React AI 검수 대시보드, React Native 물류 앱 출시와 Storybook·디자인 토큰 도입',
  },
  {
    title: 'State & Data',
    items: 'TanStack Query · Zustand · React Hook Form · Axios · REST API · OpenAPI',
    usage: '서버 상태와 클라이언트 상태 분리, OpenAPI 기반 프론트엔드 타입 생성',
  },
  {
    title: 'Test & Quality',
    items: 'Playwright · Vitest · Jest · ESLint · oxlint · TypeScript Type Check',
    usage: 'E2E 핵심 플로우 검증·병렬화, 어드민 린트·타입 검사 복구와 CI 게이트, 하이브리드 린트 체계 운영',
  },
  {
    title: 'Build & Operations',
    items: 'Vite · Node.js · pnpm · GitHub Actions · EAS Build/Update · Docker · Sentry · Web Vitals · Firebase',
    usage: 'Vite 8 마이그레이션, 앱스토어 배포·OTA, Sentry 관측 체계 일원화, Docker 서비스 운영',
  },
  {
    title: 'Backend & AI',
    items: 'Python · FastAPI · Qwen3-VL · Gemini · LLM 프롬프트·룰 엔진 설계',
    usage: 'AI 검수 시스템의 백엔드·판정 로직·2단계 검증을 직접 개발하고 운영',
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
