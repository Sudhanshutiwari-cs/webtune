'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDownIcon } from './icons'

const services = [
  'Search Engine Optimization',
  'Web Design & Development',
  'Conversion Rate Optimization',
  'Paid Search Advertising',
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5">
      <Link href="/" aria-label="Webtune Digitals home" className="block">
        <Image
          src="/images/webtune-mark.png"
          alt=""
          width={90}
          height={58}
          priority
          className="h-[58px] w-auto"
        />
      </Link>

      <nav aria-label="Main" className="hidden md:block">
        <ul className="flex items-center gap-10 text-[15px] text-slate-800">
          <li className="relative">
            <button
              type="button"
              aria-expanded={open}
              aria-haspopup="true"
              onClick={() => setOpen((v) => !v)}
              onBlur={(e) => {
                if (!e.currentTarget.parentElement?.contains(e.relatedTarget)) setOpen(false)
              }}
              className="flex items-center gap-1 transition-colors hover:text-blue-600"
            >
              Services
              <ChevronDownIcon className={`size-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
              <ul className="absolute left-1/2 top-9 w-64 -translate-x-1/2 rounded-xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-200/60">
                {services.map((s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <a href="#work" className="transition-colors hover:text-blue-600">
              Our work
            </a>
          </li>
          <li>
            <a href="#contact" className="transition-colors hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <a
        href="#contact"
        className="rounded-lg bg-[#0a5cf0] px-6 py-3 text-[15px] font-semibold text-white shadow-lg shadow-blue-500/25 transition-colors hover:bg-[#084fd0] md:px-14"
      >
        {"Let's Talk"}
      </a>
    </header>
  )
}
