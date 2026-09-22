import Image from 'next/image'
import { ArrowUpRight, LockKeyhole } from 'lucide-react'

import { FEATURED_PROJECTS, SELECTED_WORK } from '@/data/projects'

const Project = () => {
  return (
    <div className="space-y-16">
      <section aria-labelledby="featured-work-title">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Featured Work</p>
            <h2 id="featured-work-title" className="text-2xl font-semibold tracking-tight text-slate-950">운영 제품에서 해결한 문제</h2>
          </div>
          <p className="hidden max-w-[320px] text-right text-sm leading-6 text-slate-500 sm:block">화면보다 구현 범위와 운영 과정의 기술적 판단을 중심으로 정리했습니다.</p>
        </div>

        <ol className="border-t border-slate-950">
          {FEATURED_PROJECTS.map((project, index) => (
            <li key={project.id} className="grid gap-7 border-b border-slate-200 py-10 lg:grid-cols-[72px_minmax(0,1fr)_280px] lg:gap-8">
              <div className="text-sm font-medium text-slate-400">{String(index + 1).padStart(2, '0')}</div>
              <article>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">{project.name}</h3>
                  {project.period ? <p className="text-xs text-slate-500">{project.period}</p> : null}
                </div>
                <p className="mt-3 max-w-[650px] text-[15px] leading-7 text-slate-600">{project.description}</p>
                <dl className="mt-5 grid gap-2 text-sm sm:grid-cols-[72px_1fr]">
                  <dt className="font-medium text-slate-950">Role</dt><dd className="text-slate-600">{project.role}</dd>
                  <dt className="font-medium text-slate-950">Stack</dt><dd className="text-slate-600">{project.stack}</dd>
                </dl>
                <div className="mt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Engineering Highlights</p>
                  <ul className="mt-3 grid gap-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-700">
                        <span className="mt-[10px] size-1 shrink-0 bg-blue-600" aria-hidden />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <div className="lg:pt-1">
                {project.image ? (
                  <figure>
                    <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 bg-slate-50">
                      <Image src={project.image.src} alt={project.image.alt} fill className="object-cover" style={{ objectPosition: project.image.position }} sizes="(max-width: 1024px) 100vw, 280px" />
                    </div>
                    <figcaption className="mt-2 text-xs text-slate-400">Production UI · 일부 화면</figcaption>
                  </figure>
                ) : (
                  <div className="flex aspect-[4/3] flex-col justify-between border border-slate-200 bg-slate-50 p-5">
                    <LockKeyhole className="size-5 text-slate-400" />
                    <div>
                      <p className="text-sm font-medium text-slate-800">CS API → AI inspection → Operator decision</p>
                      <p className="mt-2 text-xs leading-5 text-slate-500">{project.note}</p>
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="selected-work-title" className="grid gap-6 border-b border-slate-200 pb-10 sm:grid-cols-[220px_1fr]">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Selected Work</p>
          <h2 id="selected-work-title" className="text-lg font-semibold text-slate-950">그 외 프로젝트</h2>
        </div>
        <ul className="grid sm:grid-cols-2">
          {SELECTED_WORK.map((work) => (
            <li key={work.name} className="flex items-center justify-between border-t border-slate-200 py-3 text-sm sm:odd:mr-6">
              <span className="font-medium text-slate-800">{work.name}</span>
              <span className="flex items-center gap-1 text-slate-400">{work.scope}<ArrowUpRight className="size-3" /></span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Project
