import { CASES } from '@/data/cases'
import { CAREERS, TOTAL_CAREER } from '@/data/profile'

export default function Experience() {
  return (
    <section className="section section--dark experience" id="experience">
      <div className="section-label" data-reveal><span>02</span> EXPERIENCE</div>
      <div className="section-head" data-reveal>
        <h2>경력</h2>
        <p>총 경력 {TOTAL_CAREER}. 2022년부터 커머스·물류 제품의 프론트엔드를 맡고 있으며, 대표 프로젝트 {CASES.length}건은 모두 딜리버리랩에서의 작업입니다.</p>
      </div>
      <div className="timeline">
        {CAREERS.map(career => (
          <article key={career.company} data-reveal>
            <time>{career.period}<small>{career.duration}</small></time>
            <div className="timeline__main">
              <h3>{career.company}</h3>
              <p className="timeline__role">{career.role}</p>
              <p className="timeline__desc">{career.description}</p>
              {career.caseLinks && (
                <p className="timeline__cases">
                  대표 프로젝트 {CASES.map((item, i) => <span key={item.id}>{i > 0 && ' · '}<a href={`#${item.id}`}>{item.shortName}</a></span>)}
                </p>
              )}
              {career.highlights && (
                <ul>{career.highlights.map(text => <li key={text}>{text}</li>)}</ul>
              )}
            </div>
            <p className="timeline__stack">{career.stack.map((s, i) => <span key={s}>{i > 0 && <br />}{s}</span>)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
