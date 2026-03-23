import Intro from '@/features/Intro'
import Header from '@/components/layout/Header'
import Experience from '@/features/Experience'
import Project from '@/features/Project'
import Profile from '@/features/Profile'
import Skill from '@/features/Skill'

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.10),_transparent_45%)] px-5 pb-20 pt-8 sm:px-10 sm:pt-12">
      <main className="mx-auto flex w-full max-w-[1080px] flex-col gap-40">
        <Intro />
        <Header />

        <section id="skill" className="w-full scroll-mt-28">
          <Skill />
        </section>
        <section id="experience" className="w-full scroll-mt-28">
          <Experience />
        </section>
        <section id="project" className="w-full scroll-mt-28">
          <Project />
        </section>
        <section id="profile" className="w-full scroll-mt-28">
          <Profile />
        </section>
      </main>
    </div>
  )
}
