import { Reveal } from '@/components/reveal'

const PILLARS = [
  {
    label: 'Vision',
    text: 'A future where movement is seamless — where technology removes friction from every journey and shipment.',
  },
  {
    label: 'Mission',
    text: 'To build the intelligent infrastructure that connects transportation, mobility and logistics across Africa and beyond.',
  },
]

export function AboutVision() {
  return (
    <section id="about" className="scroll-mt-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                <span className="h-px w-8 bg-accent" aria-hidden="true" />
                About FLEETNOVA
              </p>
              <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Designed for a moving world.
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                FLEETNOVA TECHNOLOGIES LIMITED exists to help shape a more connected
                and efficient future of mobility. We believe technology can remove
                friction, improve access, and create better experiences across
                transportation and logistics.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border">
              {PILLARS.map((pillar, i) => (
                <Reveal key={pillar.label} delay={i * 120}>
                  <div className="bg-background p-8">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      {pillar.label}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-foreground">
                      {pillar.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
