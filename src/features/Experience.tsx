'use client'

type ExperienceItem = {
  id: string
  yearRange: string
  company: string
  companyType: string
  skills: string[]
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
      'Vue Query',
      'Vuetify',
      'React Native',
      'Sass',
      'Tailwind',
      'Design System',
    ],
  },
  {
    id: 'reum-2021-2022',
    yearRange: '2021 - 2022',
    company: '주식회사 러움',
    companyType: '디지털 에이전시 · 웹 퍼블리싱/프론트엔드',
    skills: ['Vue', 'TypeScript', 'Responsive UI', 'Publishing'],
  },
  {
    id: 'a2z-2018-2020',
    yearRange: '2018 - 2020',
    company: '주식회사 에이투젯',
    companyType: 'VRMaker Client/CMS 프론트엔드 · 운영',
    skills: ['HTML/CSS', 'JavaScript', 'Responsive', 'SEO', 'Analytics'],
  },
  {
    id: 'cfdia-2017',
    yearRange: '2017',
    company: '(주)씨에프디에이',
    companyType: '쇼핑몰 웹 퍼블리싱',
    skills: ['HTML/CSS', 'JavaScript', 'Responsive'],
  },
]

const Experience = () => {
  return (
    <section className="w-full space-y-6">
      <h2 className="text-xl font-semibold">경력</h2>

      <div className="relative">
        <div className="pointer-events-none absolute left-[10px] top-0 bottom-0 border-l border-white/15 dark:border-white/10" />
        <ul className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <li key={exp.id} className="relative pl-8">
              <span className="absolute left-[6px] top-2 h-2 w-2 rounded-full bg-sky-400 shadow ring-2 ring-white/60 dark:ring-white/30" />
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
                        className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-xs text-foreground/90 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Experience
