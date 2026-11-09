import { ArrowDown } from 'lucide-react'
import { CASES } from '@/data/cases'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow hero-in">FRONTEND ENGINEER · SEOUL</p>
      <h1 className="hero-in delay-1">프론트엔드 개발자<br /><em>전승희</em>입니다.</h1>
      <p className="hero-lead hero-in delay-2">
        쓰는 사람이 믿을 수 있는 화면을 만듭니다. 출시로 끝내지 않고, 측정하고 검증하며 운영까지 책임집니다.
      </p>
      <div className="hero-actions hero-in delay-2">
        <a className="hero-cta" href={`#${CASES[0].id}`}>대표 프로젝트 보기 <ArrowDown size={17} strokeWidth={2.2} /></a>
      </div>
      <ol className="hero-proof hero-in delay-3" aria-label="대표 프로젝트 요약">
        {CASES.map((item, i) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>
              <span>{String(i + 1).padStart(2, '0')} · {item.shortName}</span>
              <strong>{item.proof}</strong>
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}
