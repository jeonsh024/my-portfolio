import { CASES } from '@/data/cases'
import { CAREERS } from '@/data/profile'

export default function Experience() {
  return (
    <section className="section section--dark experience" id="experience">
      <div className="section-label" data-reveal><span>02</span> EXPERIENCE</div>
      <div className="section-head" data-reveal>
        <h2>경력</h2>
        <p>웹 퍼블리싱에서 시작해 커머스·물류 제품의 설계, 출시, 운영을 담당하는 프론트엔드 개발자로 성장했습니다.</p>
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
