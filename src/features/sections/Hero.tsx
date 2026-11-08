import { ArrowDown, Download } from 'lucide-react'
import { CASES } from '@/data/cases'
import { CONTACT, TOTAL_CAREER } from '@/data/profile'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow hero-in">FRONTEND ENGINEER · SEOUL</p>
      <h1 className="hero-in delay-1">프론트엔드 개발자<br /><em>전승희</em>입니다.</h1>
      <p className="hero-lead hero-in delay-2">
        웹 퍼블리싱부터 {TOTAL_CAREER}. 지금은 커머스·물류 제품의 웹과 앱을 설계하고, 출시하고, 검증하며 운영합니다.
      </p>
      <div className="hero-actions hero-in delay-2">
        <a className="hero-cta" href={`#${CASES[0].id}`}>대표 프로젝트 보기 <ArrowDown size={19} /></a>
        <a className="hero-secondary" href={CONTACT.resume} download>이력서 <Download size={17} /></a>
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
