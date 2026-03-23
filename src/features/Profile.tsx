'use client'

const Profile = () => {
  return (
    <section className="w-full space-y-6 max-w-[580px] mx-auto">
      <h2 className="text-center text-2xl font-bold tracking-tight text-foreground">
        교육
      </h2>

      <ul className="space-y-6">
        <li className="grid grid-cols-[140px_1fr] items-start gap-4">
          <div className="pt-1 text-sm font-medium text-foreground/70">
            2010.02 - 2015.02
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-semibold">서울종합예술학교</h3>
            <p className="text-sm text-foreground/80">
              패션디자인학과 학사졸업
            </p>
          </div>
        </li>
        <li className="grid grid-cols-[140px_1fr] items-start gap-4">
          <div className="pt-1 text-sm font-medium text-foreground/70">
            수료
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-semibold">더조은컴퓨터아카데미</h3>
            <p className="text-sm text-foreground/80">
              UI/UX 웹디자인(웹퍼블리셔) 과정 수료
            </p>
          </div>
        </li>
      </ul>

      <div className="pt-[120px] pb-[100px]">
        <p className="text-[24px] font-semibold my-4 text-center">감사합니다</p>
        <div className="grid grid-cols-3 gap-3 bg-[#eef2f7] rounded-[14px] max-w-[320px] p-[20px] mx-auto text-[16px]">
          <p className="w-[90px] font-medium">전화번호</p>
          <p className="col-span-2">010.9308.3154</p>

          <p className="w-[90px] font-medium">이메일</p>
          <a
            href="mailto:jeonsh024@gmail.com"
            className="underline underline-offset-4 col-span-2"
          >
            jeonsh024@gmail.com
          </a>
          <p className="w-[90px] font-medium">Github</p>
          <p className="col-span-2">
            <a
              href="https://github.com/jeonsh024"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              @jeonsh024
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Profile
