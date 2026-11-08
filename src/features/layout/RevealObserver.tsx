'use client'

import { useEffect } from 'react'

/** [data-reveal] 요소가 화면에 들어오면 is-visible을 붙여 등장 애니메이션을 실행합니다. */
export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return null
}
