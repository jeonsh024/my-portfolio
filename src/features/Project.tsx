'use client'

import {
  Code2,
  ExternalLink,
  Layers,
  Monitor,
  Package,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/lib/utils'
import ProjectDetailDialog, {
  type ProjectItem,
} from '@/components/common/ProjectDetailDialog'
import { PROJECTS } from '@/data/projects'

const PROJECT_ICONS: LucideIcon[] = [
  Smartphone,
  Monitor,
  Package,
  Layers,
  Code2,
]

const ITEMS_PER_PAGE = 6

const Project = () => {
  const [visible, setVisible] = useState(ITEMS_PER_PAGE)
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  const visibleItems = PROJECTS.slice(0, visible)
  const hasMore = visible < PROJECTS.length

  const handleLoadMore = () => {
    setVisible((v) => Math.min(v + ITEMS_PER_PAGE, PROJECTS.length))
  }

  const handleProjectClick = (project: ProjectItem) => {
    if (project.detailType === 'LINK' && project.detailLink) {
      window.open(project.detailLink, '_blank', 'noopener,noreferrer')
      return
    }

    if (project.detailType === 'CONTENTS') {
      setSelectedProject(project)
    }
  }

  return (
    <section className="mx-auto w-full max-w-[1000px] space-y-10">
      <h2 className="text-center text-2xl font-bold tracking-tight text-foreground">
        주요 프로젝트
      </h2>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
        {visibleItems.map((p, index) => {
          const Icon =
            p.detailType === 'LINK'
              ? ExternalLink
              : PROJECT_ICONS[index % PROJECT_ICONS.length]

          return (
            <li
              key={p.id}
              className={cn(
                'group flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 cursor-pointer',
                'hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:shadow-lg',
                'dark:border-white/10 dark:bg-card dark:hover:border-blue-500 dark:hover:bg-blue-600',
              )}
              onClick={() => handleProjectClick(p)}
            >
              <div className="flex shrink-0 items-start justify-between gap-3">
                <div
                  className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-white/15 group-hover:text-white"
                  aria-hidden
                >
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <span className="pt-0.5 text-right text-[11px] font-medium leading-tight text-muted-foreground transition-colors group-hover:text-blue-100">
                  {p.period}
                </span>
              </div>

              <div className="min-h-0 flex-1 overflow-hidden pt-4">
                <h3 className="text-base font-bold leading-snug text-card-foreground transition-colors group-hover:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-5 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/90">
                  {p.subTitle}
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-2 pt-4">
                {p.skills.map((s, skillIndex) => {
                  return (
                    <span
                      key={`${p.id}-${skillIndex}-${s}`}
                      title={s}
                      className="inline-flex h-6 items-center rounded-sm bg-muted px-3 text-[11px] font-medium text-muted-foreground transition-colors group-hover:bg-white/20 group-hover:text-white"
                    >
                      {s}
                    </span>
                  )
                })}
              </div>
            </li>
          )
        })}
      </ul>

      {hasMore ? (
        <div className="relative z-20 flex justify-center px-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleLoadMore()
            }}
            className=" cursor-pointer rounded-2xl bg-secondary px-10 py-2 text-sm font-semibold text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            더 보기
          </button>
        </div>
      ) : null}

      <ProjectDetailDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

export default Project
