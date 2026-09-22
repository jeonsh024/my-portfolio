const EXPERIENCES = [
  {
    period: '2022.06 — Present',
    company: 'DeliveryLab',
    role: 'Frontend Developer',
    description: 'OrderHero Customer Web·Admin과 물류 Web/Mobile 제품 개발 및 운영',
  },
  {
    period: '2021.06 — 2022.02',
    company: '러움',
    role: 'Web Publisher',
    description: '기업 웹사이트와 기술자료 검색 페이지의 반응형 웹 퍼블리싱',
  },
  {
    period: 'Around 2020',
    company: 'Freelance',
    role: 'Web Publisher',
    description: '쇼핑몰·브랜드 웹사이트의 PC/Mobile 반응형 퍼블리싱',
  },
  {
    period: '2018.11 — 2020.02',
    company: '에이투젯',
    role: 'Web Publisher / UI Development',
    description: 'VRMaker Client·CMS 리뉴얼, 운영 및 검색 최적화',
  },
  {
    period: 'Around 2017',
    company: '씨에프디에이',
    role: 'Web Publishing Intern',
    description: '쇼핑몰 Web/Mobile 퍼블리싱과 운영',
  },
]

const Experience = () => (
  <section aria-labelledby="experience-title">
    <div className="mb-8 grid gap-3 sm:grid-cols-[220px_1fr]">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Experience</p>
        <h2 id="experience-title" className="text-2xl font-semibold tracking-tight text-slate-950">경력의 확장</h2>
      </div>
      <p className="max-w-[600px] text-sm leading-6 text-slate-500">Web Publishing을 기반으로 Frontend Development, Web/Mobile 제품 개발과 운영까지 역할을 확장했습니다.</p>
    </div>

    <ol className="border-t border-slate-950">
      {EXPERIENCES.map((experience) => (
        <li key={`${experience.company}-${experience.period}`} className="grid gap-2 border-b border-slate-200 py-5 sm:grid-cols-[180px_1fr] sm:gap-10">
          <p className="text-xs font-medium text-slate-500 sm:pt-1">{experience.period}</p>
          <div className="grid gap-1 sm:grid-cols-[180px_1fr] sm:gap-6">
            <div>
              <h3 className="text-sm font-semibold text-slate-950">{experience.company}</h3>
              <p className="mt-1 text-xs text-blue-600">{experience.role}</p>
            </div>
            <p className="text-sm leading-6 text-slate-600">{experience.description}</p>
          </div>
        </li>
      ))}
    </ol>
  </section>
)

export default Experience
