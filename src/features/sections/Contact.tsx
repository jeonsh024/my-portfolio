'use client'

import { ArrowDown, ArrowUpRight, Check, Copy, Download, Github, Mail } from 'lucide-react'
import { useState } from 'react'
import { CONTACT } from '@/data/profile'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    await navigator.clipboard.writeText(CONTACT.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }
  return (
    <section className="contact" id="contact">
      <p className="eyebrow">CONTACT</p>
      <h2>좋은 제품을 만드는 일에 대해<br />함께 이야기 나눠요.</h2>
      <p className="contact-copy">궁금한 점이 있다면 편하게 연락해 주세요.</p>
      <button onClick={copyEmail} className="email-button">
        <Mail size={20} />
        <span aria-live="polite">{copied ? '이메일을 복사했습니다' : CONTACT.email}</span>
        {copied ? <Check size={18} /> : <Copy size={18} />}
      </button>
      <div className="contact-links">
        <a href={CONTACT.github} target="_blank" rel="noreferrer"><Github size={18} />GitHub <ArrowUpRight size={15} /></a>
        <a href={CONTACT.resume} download><Download size={18} />Resume</a>
      </div>
      <footer>
        <span>© 2026 JEON SEUNGHEE</span>
        <a href="#top">BACK TO TOP <ArrowDown className="up" size={14} /></a>
      </footer>
    </section>
  )
}
