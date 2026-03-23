'use client'

import { X } from 'lucide-react'
import { useEffect } from 'react'

type ContentModalProps = {
  open: boolean
  title?: string
  subtitle?: string
  onClose: () => void
  children: React.ReactNode
}

const ContentModal = ({
  open,
  title,
  subtitle,
  onClose,
  children,
}: ContentModalProps) => {
  useEffect(() => {
    if (!open) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-[720px] overflow-hidden rounded-2xl border border-white/10 bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
          <div className="min-w-0">
            {title ? (
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            ) : null}
            {subtitle ? (
              <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
            ) : null}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="모달 닫기"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-5 py-5">{children}</div>
      </div>
    </div>
  )
}

export default ContentModal
