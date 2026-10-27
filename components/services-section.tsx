import Image from 'next/image'
import type { ReactNode } from 'react'
import {
  ArrowRightIcon,
  BarChartIcon,
  DocumentIcon,
  FlaskIcon,
  GaugeIcon,
  SearchIcon,
  TrendIcon,
  UsersIcon,
} from './icons'
import { Blob } from './decorations'

const mainServices = [
  'Search Engine Optimization',
  'Web Design & Development',
  'Conversion Rate Optimization',
  'Paid Search Advertising',
]

type Extra = { label: string; icon: ReactNode; tone: string; arrow: string }

const extras: Extra[] = [
  { label: 'Keyword Mapping', icon: <SearchIcon className="size-5" />, tone: 'bg-orange-50 text-orange-500', arrow: 'text-orange-500' },
  { label: 'Competitor Analysis', icon: <BarChartIcon className="size-5" />, tone: 'bg-violet-50 text-violet-600', arrow: 'text-violet-600' },
  { label: 'Keyword Research', icon: <SearchIcon className="size-5" />, tone: 'bg-sky-50 text-sky-600', arrow: 'text-sky-500' },
  { label: 'Web Analytics', icon: <TrendIcon className="size-5" />, tone: 'bg-teal-50 text-teal-500', arrow: 'text-teal-500' },
  { label: 'Content Development', icon: <DocumentIcon className="size-5" />, tone: 'bg-pink-50 text-pink-500', arrow: 'text-pink-500' },
  { label: 'Traffic Acquisition', icon: <UsersIcon className="size-5" />, tone: 'bg-indigo-50 text-indigo-600', arrow: 'text-blue-500' },
  { label: 'A/B Testing', icon: <FlaskIcon className="size-5" />, tone: 'bg-emerald-50 text-emerald-500', arrow: 'text-teal-500' },
  { label: 'Core Web Vitals', icon: <GaugeIcon className="size-5" />, tone: 'bg-orange-50 text-orange-500', arrow: 'text-orange-500' },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-20 md:py-28">
      <Blob className="-right-32 -top-20 h-[360px] w-[360px] bg-gradient-to-bl from-pink-200/60 via-violet-200/50 to-sky-200/60" />
      <Blob className="-left-40 top-1/3 h-[320px] w-[320px] bg-sky-200/50" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="bg-gradient-to-r from-orange-500 via-fuchsia-500 to-blue-500 bg-clip-text text-xs font-bold uppercase tracking-[0.25em] text-transparent">
              Our services
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#141c2e] md:text-[56px]">
              More than
              <br />
              digital marketing
            </h2>
            <div className="relative mt-10 pl-8">
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-0.5 rounded-full bg-gradient-to-b from-violet-500 via-fuchsia-400 to-orange-500"
              />
              <ul className="space-y-5 text-lg text-slate-700 md:text-[22px]">
                {mainServices.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative mx-auto aspect-[830/535] w-full max-w-[480px]">
            <Image
              src="/images/webtune-mark.png"
              alt="Webtune Digitals ribbon logo"
              fill
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-contain"
            />
          </div>
        </div>

        <p className="mt-16 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Additional services we provide
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {extras.map((e) => (
            <li
              key={e.label}
              className="flex min-h-[170px] flex-col gap-5 rounded-xl border border-slate-200/80 bg-white/80 p-6 transition-shadow hover:shadow-lg hover:shadow-slate-100"
            >
              <span className={`flex size-12 items-center justify-center rounded-full ${e.tone}`}>{e.icon}</span>
              <span className="flex items-start gap-3 text-base text-slate-800 md:text-lg">
                <ArrowRightIcon className={`mt-1 size-4 shrink-0 ${e.arrow}`} />
                {e.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
