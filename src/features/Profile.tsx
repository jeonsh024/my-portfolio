import { ArrowUpRight, Mail } from 'lucide-react'

const Profile = () => (
  <section className="border-t border-slate-950 py-12 sm:grid sm:grid-cols-[1fr_auto] sm:items-end sm:gap-10 sm:py-16" aria-labelledby="contact-title">
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Contact</p>
      <h2 id="contact-title" className="max-w-[560px] text-2xl font-semibold leading-9 tracking-tight text-slate-950">운영 가능한 제품을 함께 만들 프론트엔드 개발자를 찾고 계신가요?</h2>
      <p className="mt-4 text-sm text-slate-500">서울 · Frontend Developer 전승희</p>
    </div>
    <div className="mt-8 flex flex-col items-start gap-3 text-sm sm:mt-0 sm:items-end">
      <a href="mailto:jeonsh024@gmail.com" className="inline-flex items-center gap-2 font-medium text-slate-800 hover:text-blue-600"><Mail className="size-4" />jeonsh024@gmail.com</a>
      <a href="https://github.com/jeonsh024" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-950">github.com/jeonsh024 <ArrowUpRight className="size-3" /></a>
    </div>
  </section>
)

export default Profile
