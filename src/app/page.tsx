'use client'

import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Check, Copy, Download, Github, Mail, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const projects = [
  { no:'01', kicker:'1인 개발 · FULL STACK', title:'배송사진 AI 검수 시스템', period:'2026.05 — 진행 중', intro:'검수팀이 배송 사진을 전수 확인하고 5개 판정값을 어드민에 옮기던 업무를 AI 기반 검수 흐름으로 전환했습니다.', quote:'관측은 LLM, 최종 판정은 코드로 분리', description:'기획, 프론트엔드, FastAPI 백엔드, AI 프롬프트와 룰 엔진, Docker 배포와 운영까지 전 과정을 단독으로 담당했습니다. LLM 관측값을 고정한 뒤 판정 로직만 재실행할 수 있도록 설계해 변경 전후를 동일 조건에서 검증했습니다.', stats:[['247건','검증 골든셋'],['85%','내부 정합도'],['186개','자동 테스트']], tags:['React','TypeScript','FastAPI','Qwen3-VL','Docker'], image:'/captures/inspection-dashboard/00-inspection-dashboard-redacted.png', images:['/captures/inspection-dashboard/00-inspection-dashboard-redacted.png','/captures/inspection-dashboard/01-inspection-dashboard-log-redacted.png'], points:['검수 대시보드와 정합성 분석 화면 설계·개발','LLM 관측층과 코드 판정층을 분리한 룰 엔진 구축','일일 정합도·불일치 사유 자동 리포트 운영'] },
  { no:'02', kicker:'프론트엔드 단독 · APP RELEASE', title:'나우히어로 물류 앱', period:'2025.11 — 2026.07', intro:'기존 모바일 웹으로 처리하던 입고·피킹·배송·회수 업무를 React Native 기반 iOS·Android 앱으로 전환했습니다.', quote:'설계부터 첫 출시와 초기 운영까지 단독 담당', description:'Expo Router 기반 구조와 17개 업무 도메인을 설계하고 스토어 심사, OTA 배포, 장애 모니터링까지 구축했습니다. 전체 403개 커밋 중 283개를 기여했으며 첫 출시까지 6개월간 프론트엔드를 단독 담당했습니다.', stats:[['70%','전체 커밋 기여'],['6개월','초기 단독 개발'],['17개','업무 도메인']], tags:['React Native','Expo','TanStack Query','Zustand','Sentry'], image:'/captures/nowhero-app/nowhero_03.png', images:['/captures/nowhero-app/nowhero_01.png','/captures/nowhero-app/nowhero_03.png','/captures/nowhero-app/nowhero_05-redacted.png','/captures/nowhero-app/nowhero_08.png'], points:['입고·피킹·배송·회수·CS·근태 기능 개발','EAS Build/Update 기반 CI/CD와 OTA 배포 구축','Sentry·Crashlytics·Remote Config 운영 체계 도입'] },
  { no:'03', kicker:'FRONTEND · RENEWAL & OPERATION', title:'오더히어로 고객 주문 앱', period:'2023.12 — 현재', intro:'식자재 주문 서비스의 고객용 앱을 Vue 3·TypeScript 기반으로 전면 리뉴얼하는 과정에 참여하고, 출시 이후 현재까지 기능 고도화와 유지보수를 이어오고 있습니다.', quote:'리뉴얼 개발부터 지속적인 운영과 개발환경 개선까지', description:'메인, 마이페이지, 장바구니, 배송조회 화면과 주문·취소·반품 등 전자상거래 핵심 흐름을 개발했습니다. 출시 후에는 즐겨찾기, 간편결제, 주문조회 등 사용자 경험을 지속적으로 개선했으며, 최근에는 빌드·테스트·린트 환경을 현대화해 장기 운영 기반도 함께 정비했습니다.', stats:[['Vue 3','앱 전면 리뉴얼'],['2,468건','유닛 테스트 통과'],['74%','빌드 시간 단축']], tags:['Vue 3','TypeScript','TanStack Query','Vuetify','Vite 8','Playwright'], image:'/captures/orderhero-app/00-main.png', images:['/captures/orderhero-app/00-main.png','/captures/orderhero-app/02-product-list.png','/captures/orderhero-app/03-product-detail.png','/captures/orderhero-app/05-cart.png'], points:['메인·마이페이지·장바구니·배송조회 및 주문 흐름 개발','즐겨찾기·간편결제·주문조회 등 출시 이후 기능 고도화와 유지보수','Vite 8·Vitest 전환과 E2E 병렬화로 개발·검증 환경 개선'] },
]

const publishingWorks = [
  { title:'KCC실리콘', period:'2021', role:'기업 웹사이트 반응형 퍼블리싱 · 유지보수', image:'/captures/publishing/kccsilicone.png' },
  { title:'Klenze', period:'2021', role:'브랜드 마이크로사이트 반응형 퍼블리싱', image:'/captures/publishing/klenze.png' },
  { title:'VRMaker', period:'2018 — 2020', role:'Client·CMS 리뉴얼 · 반응형 UI · SEO·GA 운영', image:'/captures/publishing/vrmaker.png' },
  { title:'제주 J·Start Up', period:'2019', role:'공공 프로젝트 반응형 웹 퍼블리싱', image:'/captures/publishing/jstartup.png' },
  { title:'Fairliar', period:'2017 · 2020', role:'골프웨어 쇼핑몰 웹·모바일 퍼블리싱', image:'/captures/publishing/fairliar.png' },
  { title:'다자요', period:'2020', role:'서비스 반응형 웹 퍼블리싱', image:'/captures/publishing/dazayo.png' },
  { title:'미니스쿨 · 미니TV', period:'2020', role:'교육 서비스·관리자 반응형 웹 퍼블리싱', image:'/captures/publishing/minischool.png' },
]

export default function Home(){
  const [menuOpen,setMenuOpen]=useState(false); const [copied,setCopied]=useState(false)
  useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el));return()=>observer.disconnect()},[])
  const copyEmail=async()=>{await navigator.clipboard.writeText('jeonsh024@gmail.com');setCopied(true);setTimeout(()=>setCopied(false),1600)}
  return <main>
    <header className="site-header"><a className="brand" href="#top">SEUNGHEE<span>.</span></a><nav className={menuOpen?'nav open':'nav'} aria-label="주요 메뉴">{[['경력','experience'],['프로젝트','projects'],['기술','skills'],['퍼블리싱','publishing'],['연락처','contact']].map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setMenuOpen(false)}>{label}</a>)}<a className="resume-link" href="/resume.pdf" download>이력서 <Download size={15}/></a></nav><button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-label="메뉴 열기">{menuOpen?<X/>:<Menu/>}</button></header>
    <section className="hero" id="top"><p className="eyebrow hero-in">FRONTEND ENGINEER · SEOUL</p><h1 className="hero-in delay-1">안녕하세요,<br/>프론트엔드 개발자<br/><em>전승희</em>입니다.</h1><p className="hero-copy hero-in delay-2">사용자가 마주하는 화면을 만들고,<br/>오래 가도록 검증 체계를 함께 설계합니다.</p><a className="scroll-cue hero-in delay-3" href="#experience"><span>아래로 스크롤</span><ArrowDown size={17}/></a></section>
    <section className="experience section" id="experience">
      <div className="section-label light" data-reveal><span>01</span> EXPERIENCE</div>
      <div className="experience-head" data-reveal>
        <h2>경력</h2>
        <p>웹 퍼블리싱에서 시작해 커머스·물류 제품의 설계, 출시, 운영을 담당하는 프론트엔드 개발자로 성장했습니다.</p>
      </div>
      <div className="career-summary" data-reveal>
        <div><strong>7년 6개월</strong><span>총 실무 경험</span></div>
        <div><strong>4년 4개월</strong><span>커머스·물류 제품 개발</span></div>
        <div><strong>Web · App</strong><span>웹과 네이티브 앱 출시 경험</span></div>
        <div><strong>End-to-End</strong><span>기획부터 배포·운영까지</span></div>
      </div>
      <div className="timeline">
        <article className="career-primary" data-reveal>
          <time>2022.06 — 현재<br/><small>4년 4개월</small></time>
          <div className="career-main">
            <div className="career-title"><div><h3>주식회사 딜리버리랩</h3><p>프론트엔드 개발자</p></div><small>커머스·물류 플랫폼 — 고객 주문 앱, 본사 어드민, TMS, 물류 모바일 앱</small></div>
            <div className="career-groups">
              <section><h4>제품 개발</h4><ul><li>Vue 3·TypeScript 기반 고객 주문 앱과 본사 어드민 전면 리뉴얼 주도</li><li>검색, 장바구니, 주문·결제, CS 등 커머스 핵심 사용자 흐름 개발</li><li>WMS·TMS·MFC 모바일의 초기 구조와 물류 도메인 기능 설계·개발</li></ul></section>
              <section><h4>출시와 운영</h4><ul><li>React Native 물류 앱을 설계부터 iOS·Android 첫 출시까지 단독 담당</li><li>EAS OTA 배포, Sentry·Crashlytics, Remote Config 운영 체계 구축</li><li>배송사진 AI 검수 시스템을 기획·풀스택 개발·배포·운영까지 1인 수행</li></ul></section>
              <section><h4>품질과 개발환경</h4><ul><li>Playwright E2E 도입 및 4계정 병렬화로 실행 시간 44분→2.6분 단축</li><li>Vite 8·Vitest 전환으로 빌드 74% 단축, 유닛 테스트 2,468건 통과</li><li>1년 이상 중단된 린트 환경 복구 및 oxlint·ESLint 하이브리드 체계 설계</li></ul></section>
            </div>
          </div>
          <b>Vue 3 · TypeScript<br/>React Native · React<br/>TanStack Query · Zustand<br/>Playwright · Vitest<br/>Vite · Docker · CI/CD</b>
        </article>
        <article data-reveal><time>2021.06 — 2022.02<br/><small>9개월</small></time><div><h3>주식회사 러움</h3><p>퍼블리셔 · 사원</p><small>KCC실리콘 홈페이지·기술자료 검색 페이지와 Klenze 마이크로사이트를 반응형으로 구축하고 유지보수했습니다.</small></div><b>HTML · CSS · JavaScript · Responsive Web</b></article>
        <article data-reveal><time>2020.01 — 2020.12<br/><small>1년</small></time><div><h3>프리랜서</h3><p>웹 퍼블리셔</p><small>다자요, 미니스쿨, AXGATE 대시보드 등 기업·쇼핑몰 반응형 웹 프로젝트를 수행했습니다.</small></div><b>HTML · CSS · JavaScript</b></article>
        <article data-reveal><time>2018.11 — 2020.02<br/><small>1년 4개월</small></time><div><h3>주식회사 에이투젯</h3><p>퍼블리셔</p><small>VRMaker Client/CMS 리뉴얼, 네이버 SEO·GA 운영과 제주관광공사·한라 B2B 프로젝트를 담당했습니다.</small></div><b>HTML · CSS · JavaScript · SEO · Analytics</b></article>
        <article data-reveal><time>2017.07 — 2017.09<br/><small>3개월</small></time><div><h3>(주)씨에프디에이</h3><p>퍼블리셔 · 인턴</p><small>Fairliar 골프웨어 쇼핑몰의 웹·모바일 화면을 퍼블리싱하고 상품 페이지를 운영했습니다.</small></div><b>HTML · CSS · JavaScript · Makeshop</b></article>
      </div>
    </section>
    <section className="projects section" id="projects">
      <div className="section-label" data-reveal><span>02</span> PROJECTS</div>
      <div className="projects-title" data-reveal><h2>대표 프로젝트</h2><p>최근 경력에서 기여 범위와 기술적 판단이 가장 잘 드러나는 프로젝트입니다.</p></div>
      <div className="project-spreads">{projects.map((project,index)=><article className={`project-spread project-${project.no}`} key={project.no}>
        <div className="spread-cover">
          <div className="spread-art"><div className="spread-watermark">{project.title}</div>{project.no==='01'?<div className="desktop-mockup"><Image src={project.image} alt={`${project.title} 대표 화면`} fill sizes="(max-width: 900px) 100vw, 68vw"/></div>:<div className="device-stack">{project.images.slice(0,3).map((src,i)=><div className={`device device-${i+1}`} key={src}><Image src={src} alt={`${project.title} 모바일 화면 ${i+1}`} fill sizes="(max-width: 720px) 42vw, 20vw"/></div>)}</div>}<span className="spread-index">0{index+1} / 03</span></div>
          <aside className="spread-overview"><span>OVERVIEW</span><h3>{project.title}</h3><blockquote>{project.quote}</blockquote><p>{project.intro}</p><div className="spread-info"><strong>PROJECT INFO</strong><p>{project.kicker}</p><p>{project.period}</p><p>{project.tags.join(' / ')}</p></div></aside>
        </div>
        <div className="spread-feature"><div className="feature-copy"><span>MAIN FEATURE</span><h4>{project.points[0]}</h4><p>{project.description}</p><div className="feature-stats">{project.stats.map(([a,b])=><div key={b}><strong>{a}</strong><small>{b}</small></div>)}</div></div><div className="feature-screens">{project.images.slice(0,3).map((src,i)=><div key={src} className={`feature-screen feature-screen-${i+1}`}><Image src={src} alt={`${project.title} 주요 화면 ${i+1}`} fill sizes="(max-width: 720px) 30vw, 20vw"/></div>)}</div></div>
      </article>)}</div>
    </section>
    <section className="skills section" id="skills">
      <div className="section-label light" data-reveal><span>03</span> SKILLS</div>
      <div className="skills-head" data-reveal><h2>기술 스택</h2><p>실제 제품 개발과 출시·운영에 사용한 기술을 역할별로 정리했습니다.</p></div>
      <div className="skill-groups">
        <article data-reveal><span>01</span><div><h3>Frontend</h3><p>TypeScript · JavaScript · Vue 3 · React · React Native · Expo · HTML · CSS · Sass · Tailwind CSS</p><small>Vue 3 커머스 앱·어드민 리뉴얼, React AI 대시보드, React Native 물류 앱 출시</small></div></article>
        <article data-reveal><span>02</span><div><h3>State & Data</h3><p>TanStack Query · Zustand · React Hook Form · Axios · REST API · OpenAPI</p><small>서버 상태와 클라이언트 상태 분리, OpenAPI 기반 프론트엔드 타입 생성</small></div></article>
        <article data-reveal><span>03</span><div><h3>Test & Quality</h3><p>Playwright · Vitest · Jest · ESLint · oxlint · TypeScript Type Check</p><small>E2E 핵심 플로우 구축·병렬화, 유닛 테스트 2,468건, 하이브리드 린트 체계 운영</small></div></article>
        <article data-reveal><span>04</span><div><h3>Build & Operations</h3><p>Vite · Node.js · pnpm · GitHub Actions · EAS Build/Update · Docker · Sentry · Firebase</p><small>Vite 8 마이그레이션, 앱스토어 배포·OTA, 모니터링과 Docker 서비스 운영</small></div></article>
      </div>
    </section>
    <section className="publishing section" id="publishing">
      <div className="section-label" data-reveal><span>04</span> PUBLISHING ARCHIVE</div>
      <div className="publishing-head" data-reveal><h2>퍼블리싱 작업</h2><p>다양한 화면과 디바이스를 다루며 쌓은 UI 구현 경험입니다.</p></div>
      <div className="publishing-grid">{publishingWorks.map((work,index)=><article key={work.title} data-reveal className={index<2?'featured':''}><div className="publishing-image"><Image src={work.image} alt={`${work.title} 반응형 웹 작업`} fill sizes="(max-width: 760px) 100vw, 50vw"/></div><div className="publishing-meta"><div><span>{work.period}</span><h3>{work.title}</h3></div><p>{work.role}</p></div></article>)}</div>
    </section>
    <section className="education section" id="education">
      <div className="section-label" data-reveal><span>05</span> EDUCATION</div>
      <div className="education-head" data-reveal><h2>교육</h2></div>
      <div className="education-list">
        <article data-reveal><time>2010.02 — 2015.02</time><div><h3>서울종합예술학교</h3><p>패션디자인과 학사 졸업</p></div></article>
        <article data-reveal><time>수료</time><div><h3>더조은컴퓨터아카데미</h3><p>UI/UX 웹디자인·웹퍼블리셔 과정</p></div></article>
      </div>
    </section>
    <section className="contact" id="contact"><p className="eyebrow">CONTACT</p><h2>좋은 제품을 만드는 일에 대해<br/>함께 이야기 나눠요.</h2><p className="contact-copy">궁금한 점이 있다면 편하게 연락해 주세요.</p><button onClick={copyEmail} className="email-button"><Mail size={20}/><span>{copied?'이메일을 복사했습니다':'jeonsh024@gmail.com'}</span>{copied?<Check size={18}/>:<Copy size={18}/>}</button><div className="contact-links"><a href="https://github.com/jeonsh024" target="_blank" rel="noreferrer"><Github size={18}/>GitHub <ArrowUpRight size={15}/></a><a href="/resume.pdf" download><Download size={18}/>Resume</a></div><footer><span>© 2026 JEON SEUNGHEE</span><a href="#top">BACK TO TOP <ArrowDown className="up" size={14}/></a></footer></section>
  </main>
}
