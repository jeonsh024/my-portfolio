import Image from 'next/image'
import { PUBLISHING_WORKS } from '@/data/profile'

export default function Publishing() {
  return (
    <section className="section publishing" id="publishing">
      <div className="section-label" data-reveal><span>04</span> PUBLISHING ARCHIVE</div>
      <div className="section-head" data-reveal>
        <h2>퍼블리싱 작업</h2>
        <p>다양한 화면과 디바이스를 다루며 쌓은 UI 구현 경험입니다.</p>
      </div>
      <div className="publishing-grid">
        {PUBLISHING_WORKS.map(work => (
          <article key={work.title} data-reveal>
            <div className={work.crop ? 'publishing-image publishing-image--crop' : 'publishing-image'}>
              <Image src={work.image} alt={`${work.title} 반응형 웹 작업`} fill sizes="(max-width: 760px) 46vw, 270px" />
            </div>
            <span>{work.period}</span>
            <h3>{work.title}</h3>
            <p>{work.role}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
