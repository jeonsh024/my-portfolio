import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '전승희 | 프론트렌드 개발자',
  description: '전승희 프론트엔드 포트폴리오',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  )
}
