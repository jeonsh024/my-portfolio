import { EDUCATION, SHOW_PUBLISHING } from '@/data/profile'

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="section-label" data-reveal><span>{SHOW_PUBLISHING ? '05' : '04'}</span> EDUCATION</div>
      <div className="section-head" data-reveal><h2>교육</h2></div>
      <div className="education-list">
        {EDUCATION.map(item => (
          <article key={item.school} data-reveal>
            <time>{item.period}</time>
            <div><h3>{item.school}</h3><p>{item.detail}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}
