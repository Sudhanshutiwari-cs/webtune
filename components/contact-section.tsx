'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRightIcon, LockIcon, MailIcon } from './icons'

const fields = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
  { name: 'company', label: 'Company', type: 'text', autoComplete: 'organization' },
  { name: 'email', label: 'Work email', type: 'email', autoComplete: 'email' },
] as const

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:grid-cols-[1fr_minmax(0,560px)] md:items-start">
      <div className="pt-4">
        <div className="flex items-center gap-4">
          <span aria-hidden className="h-0.5 w-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500" />
          <p className="bg-gradient-to-r from-fuchsia-500 to-violet-500 bg-clip-text text-sm font-semibold uppercase tracking-[0.08em] text-transparent">
            {"Let's connect"}
          </p>
        </div>
        <h2 className="mt-5 text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[#141c2e] md:text-[64px]">
          {"Let's get"}
          <br />
          started
        </h2>
        <a
          href="mailto:hello@webtunedigitals.com"
          className="mt-6 inline-flex items-center gap-3 text-lg text-slate-500 transition-colors hover:text-blue-600"
        >
          <MailIcon className="size-5 text-slate-400" />
          hello@webtunedigitals.com
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-violet-100 bg-white/90 p-7 shadow-[0_10px_40px_-15px_rgba(99,102,241,0.25)] backdrop-blur-sm"
      >
        <p className="text-lg font-medium text-[#141c2e]">Learn how Webtune Digitals can help your business</p>
        <div className="mt-5 space-y-3">
          {fields.map((f) => (
            <div key={f.name}>
              <label htmlFor={f.name} className="sr-only">
                {f.label}
              </label>
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                autoComplete={f.autoComplete}
                required
                placeholder={f.label}
                className="h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="mt-4 flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 font-semibold text-white shadow-lg shadow-sky-500/25 transition-opacity hover:opacity-95"
        >
          Request a Call
          <ArrowRightIcon className="size-5" />
        </button>
        <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
          <LockIcon className="size-4" />
          <span>
            By clicking the button, I agree to the{' '}
            <a href="#" className="text-slate-500 underline-offset-2 hover:underline">
              privacy policy
            </a>
          </span>
        </p>
        <p role="status" className="mt-3 text-sm font-medium text-emerald-600">
          {submitted ? "Thanks! We'll be in touch shortly." : ''}
        </p>
      </form>
    </div>
  )
}
