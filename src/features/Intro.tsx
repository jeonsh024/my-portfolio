'use client'

import { Button } from '@/components/ui/index'
import { Download } from 'lucide-react'

const handleDownload = () => {
  const link = document.createElement('a')
  link.href = '/resume.pdf' // public 디렉토리에 파일 위치
  link.download = '전승희_이력서_20250505.pdf'
  link.click()
}

const Intro = () => {
  return (
    <div className="w-full text-center">
      <h1 className="m-auto text-[32px] font-medium leading-[1.4]">
        안녕하세요
        <br />
        프론트엔드 개발자
        <br />
        <strong>전승희</strong>입니다.
      </h1>

      <Button
        variant="secondary"
        className="cursor-pointer mt-[20px]"
        onClick={handleDownload}
      >
        이력서 다운로드 <Download />
      </Button>
    </div>
  )
}

export default Intro
