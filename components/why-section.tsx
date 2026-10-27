import type { ReactNode } from 'react'
import { ArrowRightIcon, RocketIcon, TargetIcon, UsersIcon } from './icons'
import { Blob, RibbonTopRight } from './decorations'

type Feature = {
  title: string
  body: string
  icon: ReactNode
  iconBg: string
  arrow: string
  border: string
}

const features: Feature[] = [
  {
    title: 'Take client-agency collaboration further',
    body: 'We operate as an extension of your team, proactive and easily approachable.',
    icon: <UsersIcon className="size-8" />,
    iconBg: 'from-[#ff9a8b] via-[#f472d0] to-[#c26cf5]',
    arrow: 'bg-pink-50 text-pink-500',
    border: 'from-pink-200 via-violet-200 to-cyan-200',
  },
  {
    title: 'Make your goals a reality, much faster',
    body: 'We prioritize the activities that can improve your bottom line from day one.',
    icon: <TargetIcon className="size-8" />,
    iconBg: 'from-[#38a8f8] to-[#3ee0f5]',
    arrow: 'bg-sky-50 text-sky-500',
    border: 'from-violet-200 via-cyan-300 to-sky-300',
  },
  {
    title: 'A team that has a deliver-more attitude',
    body: 'We help our clients achieve more by moving forward with other marketing activities.',
    icon: <RocketIcon className="size-8" />,
    iconBg: 'from-[#e96bf2] to-[#8a5cf6]',
    arrow: 'bg-violet-50 text-violet-500',
    border: 'from-violet-200 via-pink-200 to-violet-200',
  },
]

export function WhySection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <RibbonTopRight className="-right-16 -top-24 w-[520px] md:w-[720px]" />
      <Blob className="-left-48 bottom-0 h-[380px] w-[380px] bg-gradient-to-t from-orange-200/70 via-pink-200/50 to-violet-200/60" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6">
        <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em]">
          <span aria-hidden className="h-0.5 w-12 rounded-full bg-gradient-to-r from-violet-500 to-pink-400" />
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            Why teams rely on Entlify
          </span>
        </p>

        <h2 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-[-0.035em] text-[#141c2e] md:text-[76px]">
          Seamless onboarding,
          <br />
          outstanding results
          <span className="bg-gradient-to-br from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">.</span>
        </h2>

        <p className="mt-8 max-w-[720px] text-lg font-semibold leading-relaxed text-slate-500 md:text-[22px]">
          Webtune Digitals is a digital marketing and web development agency that works with SaaS teams operating in
          cloud management, programming, cybersecurity, and more.
        </p>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <li key={f.title} className={`rounded-2xl bg-gradient-to-br p-px ${f.border}`}>
              <a
                href="#services"
                className="group flex h-full gap-6 rounded-[15px] bg-white/95 p-7 transition-shadow hover:shadow-xl hover:shadow-violet-100"
              >
                <span
                  className={`flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg shadow-violet-200 ${f.iconBg}`}
                >
                  {f.icon}
                </span>
                <span className="flex-1">
                  <span className="flex items-start justify-between gap-3">
                    <span className="text-lg font-semibold leading-snug text-[#141c2e] md:text-xl">{f.title}</span>
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-transform group-hover:translate-x-1 ${f.arrow}`}
                    >
                      <ArrowRightIcon className="size-4" />
                    </span>
                  </span>
                  <span className="mt-3 block text-[15px] leading-relaxed text-slate-500">{f.body}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
