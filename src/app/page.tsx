import RevealObserver from '@/features/layout/RevealObserver'
import SiteHeader from '@/features/layout/SiteHeader'
import Contact from '@/features/sections/Contact'
import Education from '@/features/sections/Education'
import Experience from '@/features/sections/Experience'
import Hero from '@/features/sections/Hero'
import Projects from '@/features/sections/Projects'
import Publishing from '@/features/sections/Publishing'
import Skills from '@/features/sections/Skills'
import { SHOW_PUBLISHING } from '@/data/profile'

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      {SHOW_PUBLISHING && <Publishing />}
      <Education />
      <Contact />
      <RevealObserver />
    </main>
  )
}
