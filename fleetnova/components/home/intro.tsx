import { Reveal } from '@/components/reveal'

export function Intro() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                <span className="h-px w-8 bg-accent" aria-hidden="true" />
                Who We Are
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-balance font-display text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                FLEETNOVA is a Nigerian technology company building the systems
                that move people and goods — connecting transportation,
                mobility, and logistics into one intelligent, reliable network.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                We work at the intersection of technology and movement, designing
                infrastructure that reflects how modern cities actually operate —
                from the first mile to the last.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
