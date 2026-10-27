import { Blob } from './decorations'

function TrafficChart() {
  return (
    <svg viewBox="0 0 1200 380" className="h-auto w-full" role="img" aria-label="Organic and paid traffic growth chart">
      <defs>
        <linearGradient id="organic" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="45%" stopColor="#a855f7" />
          <stop offset="70%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="paid" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#e0e7ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 320 C 150 270, 300 280, 450 275 C 560 270, 620 255, 670 268 C 760 260, 800 180, 900 160 C 1020 130, 1100 110, 1200 30 L 1200 360 L 0 360 Z"
        fill="url(#area)"
      />
      <line x1="625" y1="270" x2="625" y2="360" stroke="#e2e8f0" strokeDasharray="4 4" />
      <path
        d="M0 320 C 150 270, 300 280, 450 275 C 560 270, 600 255, 625 268 C 720 260, 800 180, 900 160 C 1020 130, 1100 110, 1200 30"
        fill="none"
        stroke="url(#organic)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M0 350 C 150 310, 300 320, 450 315 C 540 312, 590 312, 625 312 C 720 312, 800 260, 900 230 C 1020 200, 1120 170, 1200 115"
        fill="none"
        stroke="url(#paid)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="625" cy="268" r="8" fill="#ec4899" stroke="#fff" strokeWidth="3" />
      <circle cx="625" cy="312" r="8" fill="#06b6d4" stroke="#fff" strokeWidth="3" />
      <circle cx="830" cy="183" r="7" fill="#db2777" stroke="#fff" strokeWidth="3" />
    </svg>
  )
}

const columns = [
  {
    label: 'More visibility',
    pill: 'border-violet-300 text-violet-600',
    paragraphs: [
      "Increase conversion by helping content with your customers' search intent.",
      'Turn your already significant SEO investment by prioritizing product-aligned keywords.',
    ],
  },
  {
    label: 'Higher authority',
    pill: 'border-cyan-300 text-cyan-500',
    paragraphs: [
      'Outperform the competition by identifying opportunities and ranking opportunities.',
      'Leverage content investment through optimization and authoritative measurements.',
    ],
  },
]

export function SeoSection() {
  return (
    <section id="work" className="relative overflow-hidden bg-white pb-28 pt-10">
      <Blob className="-bottom-24 -right-24 h-[320px] w-[320px] bg-gradient-to-tl from-sky-200/70 to-violet-200/60" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <p className="bg-gradient-to-r from-orange-500 via-fuchsia-500 to-violet-500 bg-clip-text text-xs font-bold uppercase tracking-[0.25em] text-transparent">
              Our approach
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-[#141c2e] md:text-[56px]">
              Search Engine
              <br />
              Optimization
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-500 md:text-2xl">
              Get found. Get clicks.
              <br />
              Build your business.
            </p>
          </div>
          <ul className="flex items-center gap-8 self-start rounded-full border border-slate-200 bg-white px-7 py-4 text-sm text-slate-600 shadow-sm">
            <li className="flex items-center gap-3">
              <span aria-hidden className="size-3 rounded-full bg-violet-600" />
              Organic Traffic
            </li>
            <li className="flex items-center gap-3">
              <span aria-hidden className="size-3 rounded-full bg-sky-500" />
              Paid Traffic
            </li>
          </ul>
        </div>

        <div className="-mt-4 md:-mt-24 md:pl-0">
          <TrafficChart />
        </div>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          {columns.map((c) => (
            <div key={c.label}>
              <span
                className={`inline-block rounded-full border-2 px-9 py-2.5 text-xs font-bold uppercase tracking-[0.25em] ${c.pill}`}
              >
                {c.label}
              </span>
              <div className="mt-6 max-w-[460px] space-y-6 text-lg leading-relaxed text-slate-500">
                {c.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
