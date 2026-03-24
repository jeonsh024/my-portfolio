'use client'

import Image from 'next/image'
import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export type ProjectItem = {
  id: string
  title: string
  subTitle: string
  period: string
  summary: string[]
  skills: string[]
  detailType: 'LINK' | 'CONTENTS'
  detailLink?: string
  contents?: string[]
  images?: string[]
}

type ProjectDetailDialogProps = {
  project: ProjectItem | null
  onClose: () => void
}

const ProjectDetailDialog = ({ project, onClose }: ProjectDetailDialogProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <Dialog
        open={!!project}
        onOpenChange={(open) => {
          if (!open) onClose()
        }}
      >
        {project && (
          <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{project.period}</DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              {project.images && project.images.length > 0 && (
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {project.images.map((src, i) => (
                    <button
                      key={i}
                      type="button"
                      className="group/img relative aspect-video cursor-pointer overflow-hidden rounded-lg border border-border transition-colors hover:border-blue-500"
                      onClick={() => setSelectedImage(src)}
                    >
                      <Image
                        src={src}
                        alt={`${project.title}_${i + 1}`}
                        fill
                        className="object-cover transition-transform group-hover/img:scale-105"
                        sizes="(max-width: 640px) 50vw, 200px"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.skills.map((s, i) => (
                  <span
                    key={`modal-${project.id}-${i}-${s}`}
                    className="inline-flex h-6 items-center rounded-sm bg-muted px-3 text-[11px] font-medium text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {project.contents && project.contents.length > 0 && (
                <div className="space-y-1.5">
                  <h4 className="text-sm font-semibold text-foreground">상세 내용</h4>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
                    {project.contents.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-1.5">
                <h4 className="text-sm font-semibold text-foreground">주요 업무</h4>
                <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
                  {project.summary.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => {
          if (!open) setSelectedImage(null)
        }}
      >
        {selectedImage && (
          <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none [&>button]:text-white">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={selectedImage}
                alt="프로젝트 이미지 확대"
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}

export default ProjectDetailDialog
