import Image from 'next/image'
import type { CaseFigure, CaseSection, CaseStudy as CaseStudyData } from '@/data/cases'

const pad = (n: number) => String(n).padStart(2, '0')

function Figure({ figure }: { figure: CaseFigure }) {
  const sizes = figure.variant === 'phone' ? '200px' : '(max-width: 760px) 92vw, 720px'
  return (
    <figure className={`case-figure case-figure--${figure.variant}`}>
      <div className="case-figure__frame" style={{ aspectRatio: figure.aspectRatio }}>
        <Image src={figure.src} alt={figure.alt} fill sizes={sizes} />
      </div>
      <figcaption>{figure.caption}</figcaption>
    </figure>
  )
}

function Section({ section, index }: { section: CaseSection; index: number }) {
  const phone = section.figure?.variant === 'phone' ? section.figure : undefined
  const wide = section.figure?.variant === 'wide' ? section.figure : undefined

  return (
    <section className="case-row">
      <h4><span>{pad(index + 1)}</span>{section.label}</h4>
      <div className={phone ? 'case-row__body case-row__body--aside' : 'case-row__body'}>
        <div>
          <h5>{section.heading}</h5>
          {section.paragraphs?.map((text, i) => <p key={i}>{text}</p>)}

          {section.scope && (
            <div className="case-scope">
              {section.scope.map(group => (
                <section key={group.title}>
                  <h6>{group.title}</h6>
                  <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
                </section>
              ))}
            </div>
          )}

          {section.reasoning && (
            <dl className="case-reasoning">
              {section.reasoning.map(({ term, description }) => (
                <div key={term}><dt>{term}</dt><dd>{description}</dd></div>
              ))}
            </dl>
          )}

          {section.results && (
            <dl className="case-results" data-count={section.results.length}>
              {section.results.map(({ label, value }) => (
                <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
          )}

          {section.note && <p className="case-note">{section.note}</p>}
          {wide && <Figure figure={wide} />}
        </div>
        {phone && <Figure figure={phone} />}
      </div>
    </section>
  )
}

export default function CaseStudy({ data, index }: { data: CaseStudyData; index: number }) {
  const titleId = `${data.id}-title`
  return (
    <article className="case" id={data.id} aria-labelledby={titleId}>
      <header className="case-head">
        <p className="eyebrow">{pad(index + 1)} / SELECTED WORK · {data.eyebrow}</p>
        <h3 id={titleId}>{data.title}</h3>
        <p className="case-head__lead">{data.lead}</p>
        <p className="case-head__intro">{data.intro}</p>
        <dl className="case-summary">
          {data.summary.map(({ label, value }) => (
            <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
          ))}
        </dl>
      </header>

      {data.sections.map((section, i) => <Section key={section.label} section={section} index={i} />)}
    </article>
  )
}
