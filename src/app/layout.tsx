import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ),
  title: '전승희 — Frontend Engineer',
  description: '측정하고 검증하며, 출시와 운영까지 책임지는 프론트엔드 개발자 전승희의 포트폴리오입니다.',
  openGraph: {
    title: '전승희 — Frontend Engineer',
    description: '측정하고 검증하며, 출시와 운영까지.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '전승희 — Frontend Engineer',
    description: '측정하고 검증하며, 출시와 운영까지.',
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={` antialiased`}>{children}</body>
    </html>
  )
}
