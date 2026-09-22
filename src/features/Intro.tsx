'use client'

import { ArrowDown, Download } from 'lucide-react'

const handleDownload = () => {
  const link = document.createElement('a')
  link.href = '/resume.pdf'
  link.download = '전승희_이력서.pdf'
  link.click()
}

const Intro = () => {
  return (
    <section className="grid gap-8 border-b border-slate-200 py-16 sm:grid-cols-[1fr_auto] sm:items-end sm:py-24">
      <div className="max-w-[720px]">
        <p className="mb-4 text-sm font-semibold text-blue-600">Frontend Developer</p>
        <h1 className="text-[32px] font-semibold leading-[1.35] tracking-[-0.025em] text-slate-950 sm:text-[40px]">
          복잡한 비즈니스 요구사항을
          <br className="hidden sm:block" /> 실제 운영 가능한 제품으로 만듭니다.
        </h1>
        <p className="mt-6 max-w-[640px] text-[15px] leading-7 text-slate-600 sm:text-base">
          전승희입니다. 물류·커머스 도메인에서 Web과 Mobile 서비스를
          설계하고 개발하며, 테스트·배포·운영 중 발생한 문제까지 해결해왔습니다.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 sm:justify-end">
        <a href="#work" className="inline-flex h-10 items-center gap-2 border border-slate-300 px-4 text-sm font-medium text-slate-800 transition-colors hover:border-slate-950">
          프로젝트 보기 <ArrowDown className="size-4" />
        </a>
        <button type="button" className="inline-flex h-10 cursor-pointer items-center gap-2 bg-slate-950 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-600" onClick={handleDownload}>
          이력서 <Download className="size-4" />
        </button>
      </div>
    </section>
  )
}

export default Intro
