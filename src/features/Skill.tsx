const GROUPS = [
  { title: 'Frontend', tech: 'Vue 3 / React / TypeScript', detail: '운영 도메인 UI, 공통 컴포넌트와 반응형 화면을 설계합니다.' },
  { title: 'Mobile', tech: 'React Native / Expo', detail: '카메라·Bluetooth scanner 등 디바이스 기능과 앱 배포를 다룹니다.' },
  { title: 'State & Data', tech: 'Pinia / Zustand / TanStack Query', detail: '클라이언트 상태와 서버 상태를 구분하고 query lifecycle을 관리합니다.' },
  { title: 'Testing', tech: 'Playwright / Vitest / Jest', detail: '핵심 사용자 흐름과 비즈니스 로직을 자동화 테스트로 검증합니다.' },
  { title: 'Production', tech: 'Axios / Auth / Error Handling / OTA', detail: '인증, 공통 오류 처리, 모니터링과 운영 배포까지 연결합니다.' },
  { title: 'Infra & UI', tech: 'AWS / Docker Compose / Vuetify / Tailwind', detail: '제품에 필요한 배포 환경과 일관된 UI 기반을 구성합니다.' },
]

const Skill = () => (
  <section aria-labelledby="technical-title">
    <div className="mb-8 grid gap-3 sm:grid-cols-[220px_1fr]">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Technical Experience</p>
        <h2 id="technical-title" className="text-2xl font-semibold tracking-tight text-slate-950">기술을 사용한 맥락</h2>
      </div>
      <p className="max-w-[560px] text-sm leading-6 text-slate-500">기술 이름보다 실제 제품에서 담당한 범위와 사용 목적을 설명합니다.</p>
    </div>
    <dl className="grid border-t border-slate-950 sm:grid-cols-2">
      {GROUPS.map((group) => (
        <div key={group.title} className="border-b border-slate-200 py-6 sm:odd:pr-8 sm:even:border-l sm:even:pl-8">
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">{group.title}</dt>
          <dd className="mt-2 text-base font-semibold text-slate-950">{group.tech}</dd>
          <dd className="mt-2 text-sm leading-6 text-slate-600">{group.detail}</dd>
        </div>
      ))}
    </dl>
  </section>
)

export default Skill
