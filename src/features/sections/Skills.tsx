import { SKILLS } from '@/data/profile'

export default function Skills() {
  return (
    <section className="section section--dark skills" id="skills">
      <div className="section-label" data-reveal><span>03</span> SKILLS</div>
      <div className="section-head" data-reveal>
        <h2>기술 스택</h2>
        <p>실제 제품 개발과 출시·운영에 사용한 기술을 역할별로 정리했습니다.</p>
      </div>
      <div className="skill-groups">
        {SKILLS.map(skill => (
          <article key={skill.title} data-reveal>
            <h3>{skill.title}</h3>
            <div>
              <p>{skill.items}</p>
              <small>{skill.usage}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
