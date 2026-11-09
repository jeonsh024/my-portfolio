import type { ReactNode } from 'react'

export type CaseFigure = {
  src: string
  alt: string
  caption: string
  /** phone: 세로 모바일 화면(본문 옆), wide: 가로 화면(본문 아래) */
  variant: 'phone' | 'wide'
  aspectRatio: string
}

export type CaseSection = {
  label: string
  heading: string
  paragraphs?: ReactNode[]
  scope?: { title: string; items: string[] }[]
  reasoning?: { term: string; description: ReactNode }[]
  results?: { label: string; value: string }[]
  note?: string
  figure?: CaseFigure
}

export type CaseStudy = {
  id: string
  /** 첫 화면 증거 목록과 바로가기에 쓰는 짧은 이름 */
  shortName: string
  stack: string
  proof: string
  eyebrow: string
  title: string
  lead: string
  intro: string
  summary: { label: string; value: string }[]
  sections: CaseSection[]
}

export const CASES: CaseStudy[] = [
  {
    id: 'inspection',
    shortName: 'AI 검수',
    stack: 'React',
    proof: '배송사진 AI 검수를 1인 개발 — 하루 약 1,000건 중 사람이 확인하는 건 약 3.5%',
    eyebrow: '기획부터 운영까지 1인 개발',
    title: '배송사진 AI 검수 시스템',
    lead: '관측은 LLM, 최종 판정은 코드로 분리했습니다.',
    intro: '사람이 모든 배송 사진을 확인하던 검수를, AI가 먼저 검수하고 사람은 일부만 확인하는 구조로 전환했습니다.',
    summary: [
      { label: '기간', value: '2026.05 — 진행 중' },
      { label: '팀', value: '1인 개발' },
      { label: '역할', value: '기획 · 프론트엔드 · 백엔드 · 배포·운영' },
      { label: '기술', value: 'React 18 · TypeScript · FastAPI · Qwen3-VL-32B · Gemini 3.8 Flash · Docker' },
    ],
    sections: [
      {
        label: '담당 범위',
        heading: '기획부터 배포·운영까지 혼자 진행했습니다.',
        paragraphs: ['검수 화면을 만드는 프론트엔드뿐 아니라 백엔드, AI 프롬프트와 룰 엔진, 배포와 운영까지 전 과정을 단독으로 담당했습니다.'],
        scope: [
          { title: '프론트엔드', items: ['검수 대시보드', '데이터 정합성 분석 화면', '등록 사진 점검 화면'] },
          { title: '판정 로직', items: ['Qwen3-VL-32B 프롬프트', 'LLM 관측층과 코드 판정층을 분리한 룰 엔진', 'Gemini 3.8 Flash 2단계 검증'] },
          { title: '서버와 운영', items: ['FastAPI 백엔드', 'Docker 배포·운영', '일일 정합도·불일치 사유 자동 리포트', '부실 등록 업장 자동 점검 · Slack 재등록 요청'] },
        ],
      },
      {
        label: '해결한 문제',
        heading: '하루에 검수할 수 있는 양이 한정되어 있었습니다.',
        paragraphs: [
          '검수팀은 배송 사진을 한 장씩 확인하고 5개 판정값을 어드민에 직접 옮겨 입력했습니다. 사람이 모든 사진을 보는 구조라 하루 검수량에 한계가 있었습니다.',
          'AI가 먼저 사진을 검수하고, 사람은 그중 일부만 확인하면 되는 자동 검수 시스템을 구축했습니다. 외부 적재 검수는 하루 200건 상한의 표본에서 전수로 넓혔고, 내부 적재도 전량 검수해 CS 등록까지 자동화했습니다. 지금은 하루 약 1,000건의 배송 사진을 모두 검수하고 있습니다.',
        ],
        results: [
          { label: '하루 검수 건수', value: '약 1,000건' },
          { label: '검수 완료율', value: '100%' },
          { label: '사람이 확인하는 건', value: '약 3.5%' },
        ],
        note: '2026년 10~11월 운영 대시보드 기준입니다. 사람이 확인하는 비율은 내부 적재 기준입니다.',
        figure: {
          src: '/captures/inspection-dashboard/00-inspection-dashboard-redacted.png',
          alt: '배송사진 AI 검수 대시보드 — 검수 현황 지표와 검수 리스트(개인정보 블러 처리)',
          caption: '검수 대시보드 · 검수 현황과 건별 판정 결과 (개인정보는 블러 처리)',
          variant: 'wide',
          aspectRatio: '1658 / 949',
        },
      },
      {
        label: '기술적 판단',
        heading: '판정 로직을 바꿔도 같은 조건에서 비교할 수 있게 했습니다.',
        reasoning: [
          { term: '역할 분리', description: 'LLM은 사진에서 보이는 것을 관측하는 역할만 맡고, 최종 판정은 코드로 작성한 룰 엔진이 내리도록 분리했습니다.' },
          { term: '오판 보정', description: '짐카트나 화물칸을 실내로 보는 것처럼 모델이 반복해서 틀리는 유형은 프롬프트를 고치는 대신 코드 룰로 보정했습니다. "AI는 관측, 코드가 확정"이라는 원칙을 유지한 결과입니다.' },
          { term: '검증 방식', description: '관측값을 고정한 채 판정 로직만 다시 실행할 수 있도록 설계했습니다. 판정 기준을 수정했을 때 변경 전후 결과를 동일한 입력으로 비교할 수 있습니다.' },
        ],
      },
      {
        label: '초기 검증',
        heading: '사람의 검수 결과를 기준으로 지표를 만들고, 검수팀과 기준을 합의했습니다.',
        paragraphs: ['골든셋을 기준으로 정밀도·재현율·kappa를 측정하는 평가 지표를 만들고, 검수팀과 정합도 분석을 공유하며 채점 기준을 합의해 룰에 반영했습니다. 운영 중에는 일일 정합도와 불일치 사유를 자동 리포트로 받아 점검하고 있습니다.'],
        results: [
          { label: '검증 골든셋', value: '247건' },
          { label: '초기 정합도 · 사람 검수 대비', value: '85%' },
          { label: '자동 테스트', value: '186개' },
        ],
        note: '정합도는 사람이 검수한 결과를 기준으로 AI 검수 결과가 일치하는 비율이며, 초기 내부 검증 기준입니다.',
      },
      {
        label: '2차 검증',
        heading: '다른 모델로 2차 검증을 더해, 사람이 볼 건을 줄였습니다.',
        paragraphs: ['검수 범위를 전체 배송사진으로 넓히면서, 1차 판정이 불확실한 건만 다른 계열 모델인 Gemini 3.8 Flash로 다시 판정하는 2차 검증을 추가했습니다. 검수 건은 AI가 바로 확정하는 건, 2차 검증과 일치해 확정되는 건, 두 판정이 갈려 사람이 확인해야 하는 건으로 나눠 처리합니다.'],
        results: [
          { label: '사람 검수 대상 · 일일 표본 200건 기준', value: '200건 → 27건 (87% 감소)' },
          { label: '오류 자동 차단', value: '48%' },
          { label: 'AI 확정 · 내부', value: '약 83~85%' },
          { label: '사람 확인 필요 · 내부', value: '약 3.5%' },
        ],
        note: '내부 수치는 전량 검수 운영 대시보드 기준으로 날짜별 차이가 있습니다.',
      },
      {
        label: '화면 성능',
        heading: '1,100행 표와 1MB 응답을 끊김 없이 보여주도록 했습니다.',
        paragraphs: ['검수 리스트는 하루치 건을 한 화면에서 보는 구조라 응답이 1MB를 넘고 표가 1,100행에 이릅니다. 표본 조회 쿼리를 8배 단축하고, 리스트 응답은 gzip으로 압축했으며, 표는 분할 렌더링해 첫 화면이 바로 뜨도록 했습니다.'],
        results: [
          { label: '표본 조회 쿼리', value: '8배 단축' },
          { label: '리스트 응답 · 1MB', value: 'gzip 압축' },
          { label: '1,100행 표', value: '분할 렌더링' },
        ],
      },
    ],
  },
  {
    id: 'orderhero',
    shortName: '주문 앱',
    stack: 'Vue',
    proof: 'Vue Query 전환 중 회귀를 E2E로 찾아 수정하고, 전체 E2E 44분 → 19분',
    eyebrow: '리뉴얼 이후 지속 개발·운영',
    title: '오더히어로 고객 주문 앱',
    lead: '주문 흐름을 구현하고, 변경 이후의 동작까지 검증합니다.',
    intro: '식자재 주문 서비스의 고객용 앱을 Vue 3·TypeScript 기반으로 리뉴얼하고, 출시 이후 기능 개발과 유지보수를 이어왔습니다.',
    summary: [
      { label: '기간', value: '2023.12 — 현재' },
      { label: '팀', value: '프론트엔드 3명' },
      { label: '역할', value: '프론트엔드 구조 설계 · 화면 개발 · 운영' },
      { label: '기술', value: 'Vue 3 · TypeScript · TanStack Query · Vite · Vitest · Playwright · Sentry' },
    ],
    sections: [
      {
        label: '담당 범위',
        heading: '리뉴얼의 프론트엔드 기반을 설계했습니다.',
        paragraphs: ['리뉴얼 당시 프론트엔드는 3명이었습니다. 이 중 UI 공통 컴포넌트, 디렉터리 구조, 공통 모듈을 설계했고, 그 위에서 팀원과 화면 개발을 나눠 진행했습니다.'],
        scope: [
          { title: '설계한 기반', items: ['UI 공통 컴포넌트', '디렉터리 구조', '공통 모듈'] },
          { title: '개발한 화면과 흐름', items: ['메인 · 마이페이지 · 장바구니 · 배송조회', '주문 · 취소 · 반품 흐름', '즐겨찾기 · 간편결제 · 주문조회 개선'] },
          { title: '출시 이후 운영', items: ['Vue Query 4 → 5 전환과 회귀 대응', 'E2E 테스트 실행 환경 개선', '초기 로딩·관측 체계 개선', '디자인 토큰 표준화와 CI 검사'] },
        ],
      },
      {
        label: '사용자 흐름 구현',
        heading: '상품을 담은 뒤 주문할 수 있을 때까지',
        paragraphs: [
          '장바구니의 상품 옵션·요청사항과 주문 전 검증을 구현했습니다. 배송정보가 없는 경우에는 장바구니와 주문서에서 정보를 입력할 수 있도록 연결했습니다.',
          '카테고리와 즐겨찾기 등 여러 진입점에서 상품을 담은 뒤 중복되던 조회 호출을 정리하고, 장바구니 정보를 갱신하는 흐름을 조정했습니다.',
        ],
        figure: {
          src: '/captures/orderhero-app/05-cart.png',
          alt: '오더히어로 장바구니 화면 — 배송 유형별 상품 묶음, 수량 조절, 주문하기 버튼',
          caption: '장바구니 · 배송 유형별 묶음과 주문 진입',
          variant: 'phone',
          aspectRatio: '786 / 1690',
        },
      },
      {
        label: '기술적 문제 해결',
        heading: '빌드는 통과했지만, 장바구니는 동작하지 않았습니다.',
        reasoning: [
          { term: '문제', description: 'Vue Query 4 → 5 전환 중 장바구니 회귀가 발생했습니다. 빌드·유닛 테스트 등으로 발견하지 못한 문제를 E2E에서 확인했습니다.' },
          { term: '판단과 수정', description: <>변경된 API에 맞춰 장바구니 mutation 5곳을 객체형으로 전환했습니다. 제거된 query 콜백에 있던 상품 목록 갱신은 <code>watch</code>로 옮겨, 응답 데이터의 변화에 따라 실행되도록 했습니다.</> },
          { term: '검증', description: '수정 후 E2E 실행 기록은 87건 통과·실패 0건·건너뜀 2건입니다. 빌드 성공과 별개로 실제 사용자 흐름의 회귀를 확인했습니다.' },
        ],
      },
      {
        label: '검증 환경 개선',
        heading: '서로의 장바구니를 바꾸지 않도록 테스트를 분리했습니다.',
        paragraphs: ['같은 계정을 사용하는 테스트가 장바구니·즐겨찾기 상태를 서로 변경하는 문제에 대응했습니다. 조회·입력 위주의 테스트와 상태 변경 테스트를 나누고, 상태 변경 테스트는 계정을 분리해 계정 수에 맞춰 병렬 실행하도록 구성했습니다.'],
        results: [
          { label: '전체 E2E 실행', value: '44분 → 19분' },
          { label: '빠른 확인 · 조회·입력 / Chrome', value: '2.6분' },
        ],
        note: '2.6분은 전체 테스트가 아닌 별도의 빠른 검증 범위입니다.',
      },
      {
        label: '성능과 관측',
        heading: '첫 화면에서 받는 것을 줄이고, 측정이 끊기지 않게 했습니다.',
        reasoning: [
          { term: '관측 일원화', description: 'AWS RUM을 제거하고 Sentry Logs로 일원화해 중복 비용과 페이지마다 받던 144kB 청크를 없앴습니다. 매달 스팬 한도를 넘겨 월말 Web Vitals가 버려지던 문제는 불필요한 스팬을 제외해 해결했습니다.' },
          { term: '초기 로딩', description: 'Sentry·Swiper·Firebase를 첫 화면 번들에서 분리하고, LCP 배너의 로딩 우선순위가 역전돼 있던 문제를 수정했습니다. 첫 화면에서 3.73MB를 받던 웹폰트는 dynamic-subset으로 바꾸고, 미압축 상품 이미지는 WebP로 전환했습니다.' },
          { term: '분석 근거와 업로드', description: '화면별 CLS를 수집하고, 개인정보를 가린 API 에러 본문을 기록해 성능·장애 분석의 근거를 마련했습니다. 업로드 전 WebP 압축으로 10MB 제한에 걸려 이미지 등록이 막히던 문제도 해결했습니다.' },
        ],
        results: [
          { label: '웹폰트 · 상품 이미지 전송량', value: '94% 절감' },
          { label: '페이지마다 받던 RUM 청크', value: '144kB 제거' },
          { label: '첫 화면 웹폰트', value: '3.73MB → dynamic-subset' },
        ],
      },
    ],
  },
  {
    id: 'admin',
    shortName: '어드민',
    stack: 'Vue',
    proof: '어드민 공통 모듈을 설계하고, 1년 넘게 멈춘 린트를 복구 (검출 0 → 286건)',
    eyebrow: '리뉴얼 설계부터 운영 개선까지',
    title: '오더히어로 본사 어드민',
    lead: '조회 조건이 많은 업무 화면을 공통 모듈로 정리했습니다.',
    intro: '식자재 주문 서비스의 본사 어드민을 Vue 3·TypeScript·vue-query 기반으로 리뉴얼하고, 도메인 기능 확장과 개발 환경 개선을 이어왔습니다.',
    summary: [
      { label: '기간', value: '2023.12 — 현재' },
      { label: '역할', value: '프론트엔드 아키텍처 설계 · 공통 모듈 · 도메인 개발' },
      { label: '운영 개선', value: '공통 에러 처리 · 린트·타입 검사 복구 · 레거시 정리' },
      { label: '기술', value: 'Vue 3 · TypeScript · vue-query · oxlint · pnpm' },
    ],
    sections: [
      {
        label: '담당 범위',
        heading: '어드민 2.0의 프론트엔드 구조를 설계했습니다.',
        paragraphs: ['Vue 3·TypeScript·vue-query 기반으로 어드민 2.0의 프론트엔드 아키텍처를 설계하고 전면 리뉴얼을 개발했습니다. 이후 도메인 기능을 확장하고, 에러 처리와 린트 환경 같은 운영 기반을 개선했습니다.'],
        scope: [
          { title: '공통 모듈', items: ['다이나믹 서치', '커스텀 셀렉트', '글로벌 confirm 모달', '데이터 테이블 프리셋'] },
          { title: '도메인 기능', items: ['상세권한 · 콘텐츠 관리 · 키밸류 설정', '유통사 상품 · 주문 · 결제로그', '쿠폰 · 거래명세표 프린트 · 상품 단가 업데이트'] },
          { title: '운영 개선', items: ['공통 mutation 에러 핸들러', 'oxlint 기반 린트 환경 복구', '타입 검사 복구와 CI 게이트', '라우트 생성 설정 수정 (433 → 123개)', '미사용 코드 약 2.2만 줄 제거'] },
        ],
      },
      {
        label: '공통 모듈',
        heading: '반복되는 조회 화면을 공통 컴포넌트로 만들었습니다.',
        paragraphs: ['상품·주문·결제로그 등 도메인 페이지는 검색 조건과 목록 항목이 많은 조회 화면입니다. 다이나믹 서치, 커스텀 셀렉트, 데이터 테이블 프리셋을 공통 모듈로 개발해 여러 도메인 페이지에서 사용하도록 했습니다.'],
        figure: {
          src: '/captures/orderhero-admin/02_dynamic_search.png',
          alt: '오더히어로 어드민 공급사 상품 관리 화면의 검색 영역 — 검색 프리셋과 조건을 조합하는 다이나믹 서치',
          caption: '공급사 상품 관리 · 조건을 조합하는 다이나믹 서치와 검색 프리셋',
          variant: 'wide',
          aspectRatio: '1600 / 764',
        },
      },
      {
        label: '기술적 판단',
        heading: '응답 형식이 바뀌어도 화면마다 고치지 않도록 했습니다.',
        reasoning: [
          { term: '상황', description: '백엔드의 응답 형식이 envelope 구조로 전환되면서, 어드민의 데이터 변경 요청 전체가 영향을 받았습니다.' },
          { term: '설계', description: <>응답과 에러 처리를 한곳에서 담당하는 공통 핸들러 <code>useMutationWithHandler</code>를 설계하고, 어드민 전체 mutation을 이 핸들러로 일괄 마이그레이션했습니다.</> },
        ],
      },
      {
        label: '개발 환경 복구',
        heading: '1년 넘게 멈춰 있던 린트와 타입 검사를 다시 동작하게 했습니다.',
        paragraphs: [
          '설정 충돌과 누락된 의존성 때문에 1년 이상 동작하지 않던 어드민 린트 환경을 oxlint 기반으로 재구축했습니다. 자동 수정 결과는 프로덕션 빌드 산출물 대조·속성 테스트·정규식 차등 테스트로 검증해 자동 수정이 회귀를 만들지 않도록 했습니다.',
          '사실상 꺼져 있던 타입 검사는 파일별 에러 기준선과 CI 게이트로 복구해 느슨한 타입 선언, 도달 불가능 코드, Vue prop 가려짐 같은 실제 결함을 찾아냈습니다. 페이지 내부 컴포넌트 310개가 URL로 노출되던 라우트 생성 설정도 바로잡았고, 미사용 코드·컴포넌트·의존성을 정리했습니다.',
        ],
        results: [
          { label: '린트 문제 검출', value: '0 → 286건' },
          { label: '린트 실행 · 1,068개 파일', value: '7.27초 → 0.074초' },
          { label: '어드민 라우트', value: '433 → 123개' },
          { label: '제거한 미사용 코드', value: '약 2.2만 줄' },
        ],
      },
    ],
  },
  {
    id: 'nowhero',
    shortName: '물류 앱',
    stack: 'React Native',
    proof: 'React Native 물류 앱을 초기 단독 개발부터 CI/CD·스토어 출시까지',
    eyebrow: '초기 단독 개발 · 출시 이후 운영과 확장',
    title: '나우히어로 물류 앱',
    lead: '초기 개발부터 CI/CD, 앱 출시까지 혼자 진행했습니다.',
    intro: '물류 현장의 입고·피킹·배송·회수 업무를 처리하던 Vue 레거시 모바일 웹을 React Native 기반 iOS·Android 앱으로 전환했습니다.',
    summary: [
      { label: '기간', value: '2025.11 — 2026.10' },
      { label: '팀', value: '초기 단독 개발 · 이후 팀원 합류' },
      { label: '역할', value: '초기 전체 개발 · CI/CD · 스토어 출시 · 운영' },
      { label: '기술', value: 'React Native · Expo · TanStack Query · Zustand · Sentry · Storybook' },
    ],
    sections: [
      {
        label: '담당 범위',
        heading: '첫 출시까지의 개발과 배포 체계를 혼자 만들었습니다.',
        paragraphs: ['앱의 초기 전체 개발을 단독으로 담당했고, CI/CD 구성부터 스토어 출시까지 직접 진행했습니다. 이후 팀원이 유지보수에 합류했으며, 2026년 10월까지 주 담당으로 기능 개발과 운영을 이어갔습니다.'],
        scope: [
          { title: '업무 기능', items: ['입고 · 피킹 · 배송 · 회수', 'CS · 근태', '배송 난이도 · 매장 사진 체계'] },
          { title: '빌드와 출시', items: ['EAS Build/Update 기반 CI/CD', 'OTA 배포', 'iOS · Android 스토어 출시', 'Expo SDK 55 메이저 업그레이드'] },
          { title: '운영', items: ['Sentry · Crashlytics 모니터링', 'Remote Config 운영', '웹 대응 · Galaxy/Fold 등 기기별 UI·인증 안정화'] },
        ],
      },
      {
        label: '전환 판단',
        heading: '레거시 웹을 고치는 대신 앱으로 다시 만들었습니다.',
        reasoning: [
          { term: '상황', description: '현장 업무를 처리하던 모바일 웹은 Vue 기반의 오래된 레거시 코드로, 리뉴얼이 필요한 부분이 컸습니다.' },
          { term: '판단', description: '카메라 기능과 현장에서의 앱 사용성을 개선하려면, 웹을 고치는 것보다 React Native 앱으로 넘어가는 것이 맞다고 판단했습니다.' },
          { term: '결과', description: '입고·피킹·배송·회수 업무를 iOS·Android 앱으로 옮기고, CS와 근태 기능까지 앱 안에서 처리할 수 있도록 개발했습니다.' },
        ],
        figure: {
          src: '/captures/nowhero-app/nowhero_05-redacted.png',
          alt: '나우히어로 배송 화면 — 피킹 순서와 업장별 배송 상태 목록(개인정보 블러 처리)',
          caption: '배송 · 피킹 순서와 업장별 배송 상태 (개인정보는 블러 처리)',
          variant: 'phone',
          aspectRatio: '857 / 1836',
        },
      },
      {
        label: '출시와 운영 체계',
        heading: '앱을 배포하고 문제를 확인하는 과정까지 구성했습니다.',
        reasoning: [
          { term: '빌드와 배포', description: 'EAS Build/Update로 CI/CD를 구성해 스토어 빌드와 OTA 배포를 운영했습니다.' },
          { term: '모니터링과 원격 설정', description: 'Sentry·Crashlytics로 오류를 수집하고, Remote Config를 도입해 운영 체계를 갖췄습니다.' },
        ],
      },
      {
        label: '운영 대응',
        heading: '카메라 오류를 OTA와 Remote Config로 빠르게 해결했습니다.',
        paragraphs: ['앱 운영 중 가장 큰 문제는 삼성 기기에서 카메라 화면이 검게 나오는 오류였습니다. expo-camera를 vision-camera로 옮겨 해결하고, OTA 업데이트와 Remote Config로 빠르게 배포했습니다. 출시 단계에서 갖춘 배포·운영 체계가 가장 크게 효과를 본 사례입니다.'],
      },
      {
        label: '유지와 확장',
        heading: '메이저 업그레이드와 디자인 체계까지 이어갔습니다.',
        reasoning: [
          { term: '업그레이드', description: 'Expo SDK 55(React Native 0.83) 메이저 업그레이드를 진행하고, 카메라 네이티브 패치를 다시 작성했습니다.' },
          { term: '디자인 체계', description: 'react-native-web 기반 Storybook과 디자인 토큰을 도입하고, 스토리가 빠진 컴포넌트는 테스트가 실패하도록 해 문서와 코드가 어긋나지 않게 했습니다.' },
          { term: '제품을 가로지르는 기능', description: '배송 난이도와 매장 사진 체계를 고객 앱·어드민·현장 앱·AI 검수 네 제품에 걸쳐 끝까지 구현했습니다.' },
        ],
      },
    ],
  },
]
