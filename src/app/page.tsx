import Intro from '@/features/Intro'
import Header from '@/components/layout/Header'
import Experience from '@/features/Experience'
import Project from '@/features/Project'
import Profile from '@/features/Profile'
import Skill from '@/features/Skill'

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white text-slate-950">
      <Header />
      <main className="mx-auto w-full max-w-[1080px] px-5 sm:px-10">
        <Intro />
        <div className="flex flex-col gap-24 py-20 sm:gap-32 sm:py-28">
          <section id="work" className="scroll-mt-24"><Project /></section>
          <section id="technical" className="scroll-mt-24"><Skill /></section>
          <section id="experience" className="scroll-mt-24"><Experience /></section>
        </div>
        <section id="contact" className="scroll-mt-24"><Profile /></section>
      </main>
    </div>
  )
}
