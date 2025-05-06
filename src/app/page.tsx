import Intro from '@/features/Intro'
import Header from '@/components/layout/Header'
import Experience from '@/features/Experience'
import Project from '@/features/Project'
import Profile from '@/features/Profile'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Intro />
        <Header />

        <Experience />
        <Project />
        <Profile />
      </main>
    </div>
  )
}
