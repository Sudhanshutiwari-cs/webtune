import type { ComponentType, SVGProps } from 'react'
import { Blob, RibbonTopRight } from './decorations'
import { BarChartIcon, MagnetIcon, TrendIcon } from './icons'

type Pillar = {
  title: string
  description: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  iconBg: string
  border: string
}

const pillars: Pillar[] = [
  {
    title: 'Optimize',
    description:
      'Measure customer acquisition costs by understanding the value of your current website traffic.',
    Icon: BarChartIcon,
    iconBg: 'from-orange-400 via-pink-500 to-fuchsia-500',
    border: 'border-sky-100',
  },
  {
    title: 'Engage',
    description:
      'Leverage analytics to make data-informed decisions and improve strategies & planning.',
    Icon: MagnetIcon,
    iconBg: 'from-sky-400 to-blue-600',
    border: 'border-sky-100',
  },
  {
    title: 'Profit',
    description:
      'Ensure a seamless UX for all-improving key objectives visitors may encounter.',
    Icon: TrendIcon,
    iconBg: 'from-fuchsia-500 to-violet-600',
    border: 'border-fuchsia-100',
  },
]

export function CroSection() {
  return (
    <section className="relative overflow-hidden bg-[#fbfbfe] pb-20 pt-24">
      <RibbonTopRight className="-right-24 -top-24 h-[420px] w-[520px] md:h-[520px] md:w-[640px]" />
      <Blob className="-bottom-40 -left-40 h-[360px] w-[360px] bg-gradient-to-tr from-orange-200/70 via-pink-200/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6">
        <div className="flex items-center gap-4">
          <span aria-hidden className="h-0.5 w-14 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500" />
          <p className="bg-gradient-to-r from-fuchsia-500 to-violet-500 bg-clip-text text-sm font-semibold uppercase tracking-[0.12em] text-transparent">
            Our services
          </p>
        </div>
        <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-[#141c2e] md:text-[64px]">
          Conversion Rate
          <br />
          Optimization
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map(({ title, description, Icon, iconBg, border }) => (
            <article
              key={title}
              className={`rounded-2xl border ${border} bg-white/80 p-8 shadow-[0_8px_30px_-12px_rgba(99,102,241,0.15)] backdrop-blur-sm`}
            >
              <div
                className={`flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${iconBg} text-white shadow-lg shadow-fuchsia-500/20`}
              >
                <Icon className="size-8" />
              </div>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-[#141c2e]">{title}</h3>
              <div aria-hidden className="mt-3 flex h-px items-center">
                <span className="h-0.5 w-9 rounded-full bg-gradient-to-r from-orange-400 via-fuchsia-500 to-sky-500" />
                <span className="h-px w-36 bg-slate-100" />
              </div>
              <p className="mt-6 leading-relaxed text-slate-500">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
