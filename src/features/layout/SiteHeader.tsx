'use client'

import { Download, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { CONTACT, SHOW_PUBLISHING } from '@/data/profile'

const NAV = [
  ['프로젝트', 'projects'],
  ['경력', 'experience'],
  ['기술', 'skills'],
  ...(SHOW_PUBLISHING ? [['퍼블리싱', 'publishing'] as const] : []),
  ['연락처', 'contact'],
] as const

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand" href="#top">SEUNGHEE<span>.</span></a>
      <nav id="site-nav" className={open ? 'nav open' : 'nav'} aria-label="주요 메뉴">
        {NAV.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="resume-link" href={CONTACT.resume} download>이력서 <Download size={15} /></a>
      </nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav" aria-label={open ? '메뉴 닫기' : '메뉴 열기'}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  )
}
