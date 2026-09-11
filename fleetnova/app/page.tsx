import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/home/hero'
import { Intro } from '@/components/home/intro'
import { WhatWeDo } from '@/components/home/what-we-do'
import { LagosMobility } from '@/components/home/lagos-mobility'
import { FeatureBand } from '@/components/home/feature-band'
import { WhyFleetnova } from '@/components/home/why-fleetnova'
import { AboutVision } from '@/components/home/about-vision'
import { BrandStatement } from '@/components/home/brand-statement'
import { FinalCta } from '@/components/home/final-cta'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <WhatWeDo />
        <LagosMobility />

        <FeatureBand
          eyebrow="Last-Mile Logistics"
          heading="Last-mile logistics, reimagined."
          body="The final stretch is where reliability is won or lost. Our dispatch network pairs professional riders with real-time technology to deliver speed, precision and accountability on every drop."
          image="/images/last-mile-rider.png"
          alt="Professional Nigerian dispatch rider holding a delivery box beside a modern motorcycle on a Lagos street"
          tags={['Speed', 'Technology', 'Reliability', 'Professionalism']}
          reverse
        />

        <FeatureBand
          eyebrow="Market Fit"
          heading="Mobility that fits the market."
          body="Real solutions reflect real streets. The keke is a trusted part of how Nigeria moves, and we bring it into a modern, technology-driven network — clean, coordinated and dependable."
          image="/images/keke-lagos.png"
          alt="A clean, well-maintained keke tricycle operating on an organized Lagos street"
          tone="muted"
        />

        <FeatureBand
          eyebrow="End to End"
          heading="From first mile to last mile."
          body="Motorcycles, keke, vans, mini trucks and commercial vehicles — orchestrated as a single system. FLEETNOVA connects every link in the chain so goods move seamlessly from origin to destination."
          image="/images/logistics-fleet.png"
          alt="A coordinated logistics fleet of motorcycles, keke, vans and trucks in an organized Lagos depot"
          reverse
        />

        <WhyFleetnova />
        <AboutVision />
        <BrandStatement />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
