'use client'

import { useState, type FormEvent } from 'react'
import { SiteHeader } from './site-header'
import { RibbonTopRight, Blob } from './decorations'
import { LogoCloud } from './logo-cloud'

export function Hero() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
  }

  return (
    <section className="relative overflow-hidden bg-white">
      <RibbonTopRight className="-right-10 top-24 w-[560px] md:w-[760px]" />
      <Blob className="-left-40 top-56 h-[420px] w-[420px] bg-gradient-to-b from-sky-200/70 via-violet-200/60 to-orange-200/70" />

      <SiteHeader />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 pb-16 pt-12 md:pt-16">
        <div className="mx-auto max-w-[640px] text-center">
          <h1 className="text-balance text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-black md:text-[88px]">
            Rank higher,
            <br />
            convert better.
          </h1>
          <p className="mx-auto mt-8 max-w-[520px] text-pretty text-left text-lg leading-relaxed text-slate-800 md:text-[22px]">
            Fast-growing tech companies trust us with website development and SEO. Will you?
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-[600px] items-center rounded-2xl border border-slate-200 bg-white/80 p-0 shadow-sm backdrop-blur"
          >
            <label htmlFor="hero-email" className="sr-only">
              Work email
            </label>
            <input
              id="hero-email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setSent(false)
              }}
              placeholder="Enter your work email"
              className="min-w-0 flex-1 bg-transparent px-6 py-5 text-base text-slate-900 outline-none placeholder:text-slate-500"
            />
            <button
              type="submit"
              className="shrink-0 rounded-2xl bg-gradient-to-r from-[#45d9f5] to-[#25aef5] px-6 py-5 text-base font-semibold text-white shadow-lg shadow-cyan-400/30 transition-opacity hover:opacity-90 md:px-10 md:text-lg"
            >
              Request a Call
            </button>
          </form>
          <p role="status" className="mt-3 h-5 text-sm text-emerald-600">
            {sent ? "Thanks! We'll be in touch shortly." : ''}
          </p>
        </div>

        <LogoCloud />
      </div>
    </section>
  )
}
