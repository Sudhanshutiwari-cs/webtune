import { ArrowRightIcon } from './icons'
import { RibbonLeftWave } from './decorations'

export function CtaSection() {
  return (
    <section id="request-call" className="relative overflow-hidden bg-white py-20 md:py-24">
      <RibbonLeftWave className="-left-6 bottom-0 w-[360px] md:w-[520px]" />
      <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">
        <h2 className="text-balance text-4xl font-bold leading-[1.15] tracking-[-0.035em] text-[#141c2e] md:text-[56px]">
          Find the{' '}
          <span className="bg-gradient-to-r from-[#ff6a5c] via-[#c45cf5] to-[#2bb3f5] bg-clip-text text-transparent">
            shortest path
          </span>
          <br />
          to revenue with Webtune Digitals
        </h2>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#10a8f5] to-[#1fd3ec] px-14 py-5 text-lg font-semibold text-white shadow-lg shadow-cyan-400/30 transition-opacity hover:opacity-90"
        >
          Request a Call
          <ArrowRightIcon className="size-5" />
        </a>
      </div>
    </section>
  )
}
