import Image from 'next/image'
import { ContactSection } from './contact-section'
import { Blob } from './decorations'
import { ArrowUpIcon } from './icons'

const links = ['Join Our Team', 'Cookies', 'Privacy Policy']

function RibbonBottomLeft() {
  return (
    <svg
      viewBox="0 0 400 420"
      className="pointer-events-none absolute -bottom-10 -left-10 h-[420px] w-[400px]"
      aria-hidden
    >
      <defs>
        <linearGradient id="footer-ribbon-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffc6a8" />
          <stop offset="45%" stopColor="#e9a6f2" />
          <stop offset="100%" stopColor="#9fd0ff" />
        </linearGradient>
        <linearGradient id="footer-ribbon-b" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3b5ee" />
          <stop offset="100%" stopColor="#a8d8ff" />
        </linearGradient>
        <filter id="footer-ribbon-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
      <path
        d="M-20 40 C 80 80, 160 180, 200 280 C 230 350, 240 400, 260 460"
        stroke="url(#footer-ribbon-a)"
        strokeWidth="80"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
        filter="url(#footer-ribbon-blur)"
      />
      <path
        d="M20 460 C 40 300, 160 190, 270 230 C 360 260, 360 380, 330 460"
        stroke="url(#footer-ribbon-b)"
        strokeWidth="70"
        fill="none"
        opacity="0.6"
        filter="url(#footer-ribbon-blur)"
      />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#fbfbfe] pt-24">
      <RibbonBottomLeft />
      <Blob className="-right-20 top-10 h-[260px] w-[260px] bg-violet-100/60" />

      <div className="relative z-10">
        <ContactSection />

        <div className="mx-auto mt-20 max-w-[1240px] px-6">
          <div className="flex flex-col gap-6 border-t border-slate-200 py-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-8">
              <Image
                src="/images/webtune-mark.png"
                alt="Webtune Digitals"
                width={74}
                height={48}
                className="h-12 w-auto"
              />
              <span aria-hidden className="hidden h-10 w-px bg-slate-200 md:block" />
              <p className="text-sm text-slate-500">
                {'\u00A9'} {new Date().getFullYear()} Webtune Digitals. All rights reserved.
              </p>
            </div>
            <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-slate-500">
              {links.map((l) => (
                <a key={l} href="#" className="transition-colors hover:text-blue-600">
                  {l}
                </a>
              ))}
              <a href="#top" className="inline-flex items-center gap-1 transition-colors hover:text-blue-600 md:ml-8">
                Back to top
                <ArrowUpIcon className="size-3.5" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
