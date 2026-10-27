'use client'

import { useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon, QuoteIcon } from './icons'

type Testimonial = {
  headline: string
  body: string
  name: string
  role: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    headline: 'Excellent service at a competitive price.',
    body: "They've been working with the Webtune Digital team for over five years. They are proactive, knowledgeable, and helpful. I recommend them without any reservations.",
    name: 'Rakesh Goswami',
    role: 'Managing Partner',
    company: 'Arkward Spaces',
  },
  {
    headline: 'High-quality work and fast turnaround.',
    body: 'The team is capable of creating content that matches our brand voice and delivers results. The work is always on time and exceeds our expectations.',
    name: 'Vanshika Arora',
    role: 'Head of Marketing',
    company: 'VOLT.AI',
  },
  {
    headline: 'Our organic pipeline doubled in a year.',
    body: 'Webtune rebuilt our site and SEO strategy from the ground up. Rankings, traffic, and demo requests all moved in the right direction within months.',
    name: 'Arjun Mehta',
    role: 'VP Growth',
    company: 'Cloudbolt',
  },
  {
    headline: 'A true extension of our team.',
    body: 'Clear communication, sharp strategy, and reliable execution. They understand SaaS buyers and know how to turn visitors into qualified leads.',
    name: 'Priya Nair',
    role: 'Director of Demand Gen',
    company: 'Densify',
  },
]

const cardStyles = [
  { border: 'border-sky-400/70', quote: 'text-sky-400', link: 'text-sky-400' },
  { border: 'border-fuchsia-500/70', quote: 'text-fuchsia-400', link: 'text-sky-400' },
]

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length
  const visible = [testimonials[index], testimonials[(index + 1) % total]]

  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#0a0f24] py-24 text-white"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-32 h-[420px] w-[420px] rounded-full bg-violet-600/40 blur-[120px]" />
        <div className="absolute -left-20 top-[55%] h-[260px] w-[260px] rounded-full bg-fuchsia-500/30 blur-[100px]" />
        <div className="absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-gradient-to-bl from-orange-400/60 via-fuchsia-500/50 to-blue-600/40 blur-[110px]" />
        <div className="absolute right-1/4 top-0 h-[200px] w-[300px] rounded-full bg-blue-600/30 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="flex flex-wrap items-center justify-center gap-x-4 text-5xl font-bold tracking-[-0.04em] md:text-[72px]">
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
              Gain more
            </span>
            <ArrowUpRightIcon className="size-10 text-sky-400 md:size-12" />
            <span>with less</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-200 md:text-xl">
            Save time on the implementation of a digital marketing strategy, eliminate guesswork,
            and optimize your website for exceptional performance. All with one team.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-cyan-500/30 transition-transform hover:-translate-y-0.5"
          >
            Request a Call
            <ArrowRightIcon className="size-5" />
          </a>
        </div>

        <div className="mt-20 grid items-center gap-10 lg:grid-cols-[320px_1fr]">
          <div className="lg:pl-2">
            <div className="flex gap-8">
              <span aria-hidden className="w-1 shrink-0 rounded-full bg-gradient-to-b from-orange-400 via-fuchsia-500 to-violet-500" />
              <h3 className="text-5xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl">
                Our work
                <br />
                in action
              </h3>
            </div>
            <p className="mt-10 pl-9 text-xl leading-relaxed text-slate-200">
              Real-life feedback from
              <br />
              our incredible clients.
            </p>
            <div className="mt-10 flex gap-4 pl-9">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonials"
                className="flex size-14 items-center justify-center rounded-full border border-blue-500/80 bg-[#0d1430] shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-colors hover:bg-blue-500/20"
              >
                <ArrowLeftIcon className="size-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonials"
                className="flex size-14 items-center justify-center rounded-full border border-violet-500/80 bg-[#0d1430] shadow-[0_0_24px_rgba(139,92,246,0.35)] transition-colors hover:bg-violet-500/20"
              >
                <ArrowRightIcon className="size-5" />
              </button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2" aria-live="polite">
            {visible.map((t, i) => {
              const s = cardStyles[i]
              return (
                <figure
                  key={t.name}
                  className={`flex flex-col rounded-2xl border-2 ${s.border} bg-[#0b1230]/70 p-8 shadow-[0_0_40px_-10px_rgba(99,102,241,0.45)] backdrop-blur-sm`}
                >
                  <QuoteIcon className={`h-7 w-9 ${s.quote}`} />
                  <blockquote className="mt-6">
                    <p className="text-2xl font-semibold leading-snug">{t.headline}</p>
                    <p className="mt-5 leading-relaxed text-slate-200">{t.body}</p>
                  </blockquote>
                  <figcaption className="mt-auto pt-8">
                    <p className="font-semibold">{t.name}</p>
                    <p className="mt-1 text-slate-300">
                      {t.role} | <span className={s.link}>{t.company}</span>
                    </p>
                  </figcaption>
                </figure>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
