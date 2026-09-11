import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const PILLARS = [
  {
    index: '01',
    title: 'Mobility Solutions',
    description:
      'Technology-enabled solutions designed to improve how people and organizations move.',
    image: '/images/mobility-solutions.png',
    alt: 'Professional Nigerian operators coordinating modern mobility in Lagos',
  },
  {
    index: '02',
    title: 'Logistics Technology',
    description:
      'Modern technology and operational solutions designed to make logistics more efficient and connected.',
    image: '/images/logistics-technology.png',
    alt: 'Logistics technology and coordinated delivery operations in an urban Lagos setting',
  },
  {
    index: '03',
    title: 'Transportation Solutions',
    description:
      'Innovative transportation solutions focused on reliability, efficiency and accessibility.',
    image: '/images/transportation-solutions.png',
    alt: 'Clean, professionally operated transportation vehicles on a Lagos road',
  },
  {
    index: '04',
    title: 'Business Mobility',
    description:
      'Solutions helping businesses manage transportation, mobility and operational needs.',
    image: '/images/business-mobility.png',
    alt: 'Nigerian business professionals managing transportation and operations',
  },
]

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32">
        <Reveal>
          <div className="flex flex-col gap-6 border-b border-border pb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                <span className="h-px w-8 bg-accent" aria-hidden="true" />
                What We Do
              </p>
              <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Four disciplines,
                <br className="hidden sm:block" /> one connected network.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Every solution we build shares a single purpose — to make movement
              smarter across the entire mobility and logistics ecosystem.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-x-12 lg:gap-y-20">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i % 2) * 120} as="article">
              <div className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                  <Image
                    src={pillar.image || '/placeholder.svg'}
                    alt={pillar.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 font-display text-sm font-semibold tracking-widest text-primary-foreground/80 mix-blend-difference">
                    {pillar.index}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
