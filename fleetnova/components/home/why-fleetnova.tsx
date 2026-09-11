import { Reveal } from '@/components/reveal'

const PRINCIPLES = [
  {
    title: 'Technology First',
    body: 'Every solution starts with software and data — intelligent systems that turn complex movement into clear, coordinated action.',
  },
  {
    title: 'Built for Scale',
    body: 'Our infrastructure is engineered to grow, adapting to more vehicles, more routes and more demand without losing reliability.',
  },
  {
    title: 'Operational Excellence',
    body: 'We obsess over the details that keep networks running — precision, consistency and accountability at every stage.',
  },
  {
    title: 'Future Focused',
    body: 'We build for where mobility is going, not just where it is today, designing for a more connected and efficient tomorrow.',
  },
]

export function WhyFleetnova() {
  return (
    <section id="why" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Why FLEETNOVA
          </p>
          <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Principles that shape everything we build.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 border-t border-border md:grid-cols-2">
          {PRINCIPLES.map((principle, i) => (
            <Reveal
              key={principle.title}
              delay={(i % 2) * 120}
              className="border-b border-border md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:pr-12 md:[&:nth-child(even)]:pl-12"
            >
              <div className="py-10 md:py-12">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm font-semibold tabular-nums text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
                    {principle.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-md pl-9 text-base leading-relaxed text-muted-foreground">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
