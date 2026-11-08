import { CASES } from '@/data/cases'
import CaseStudy from '@/features/case-study/CaseStudy'

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-label" data-reveal><span>01</span> PROJECTS</div>
      <div className="section-head" data-reveal>
        <h2>대표 프로젝트</h2>
        <p>최근 경력에서 기여 범위와 기술적 판단이 가장 잘 드러나는 프로젝트입니다.</p>
      </div>
      <nav className="project-jump" aria-label="대표 프로젝트 바로가기">
        {CASES.map((item, i) => (
          <a key={item.id} href={`#${item.id}`}>{String(i + 1).padStart(2, '0')} {item.shortName} · {item.stack}</a>
        ))}
      </nav>
      <div className="case-list">
        {CASES.map((item, i) => <CaseStudy key={item.id} data={item} index={i} />)}
      </div>
    </section>
  )
}
