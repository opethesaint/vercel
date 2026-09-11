import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const NETWORK = [
  'Dispatch motorcycles',
  'Keke & tricycles',
  'Delivery vans',
  'Mini trucks',
  'Commercial vehicles',
]

export function LagosMobility() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-32">
        <Reveal className="order-2 lg:order-1">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-primary-foreground/60">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            The Lagos Reality
          </p>
          <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            Built around how Lagos moves.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/75">
            From dispatch riders and keke to vans and commercial vehicles,
            FLEETNOVA connects technology with the realities of modern mobility
            and logistics.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-primary-foreground/10 bg-primary-foreground/10 sm:grid-cols-2">
            {NETWORK.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 bg-primary px-5 py-4 text-sm font-medium text-primary-foreground/90"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/lagos-mobility.png"
              alt="A coordinated mix of delivery motorcycles, keke, vans and commercial vehicles on an organized Lagos street"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
