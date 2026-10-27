import { Hero } from '@/components/hero'
import { WhySection } from '@/components/why-section'
import { ServicesSection } from '@/components/services-section'
import { CtaSection } from '@/components/cta-section'
import { SeoSection } from '@/components/seo-section'
import { CroSection } from '@/components/cro-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <main id="top">
        <Hero />
        <WhySection />
        <ServicesSection />
        <CtaSection />
        <SeoSection />
        <CroSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </>
  )
}
