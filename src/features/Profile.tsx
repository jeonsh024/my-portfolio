'use client'

const Profile = () => {
  return (
    <section className="w-full space-y-6">
      <h2 className="text-xl font-semibold">교육</h2>

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

      <p className="text-sm">감사합니다</p>
      <ul className="space-y-1 text-sm">
        <li>전화번호: 010.9308.3154</li>
        <li>
          이메일:{' '}
          <a
            href="mailto:jeonsh024@gmail.com"
            className="underline underline-offset-4"
          >
            jeonsh024@gmail.com
          </a>
        </li>
        <li>
          Github:{' '}
          <a
            href="https://github.com/jeonsh024"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            @jeonsh024
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Profile
