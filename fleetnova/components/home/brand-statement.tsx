import { Reveal } from '@/components/reveal'

export function BrandStatement() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-40">
        <Reveal>
          <h2 className="text-balance font-display text-5xl font-bold leading-[0.98] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            Better technology
            <br />
            creates{' '}
            <span className="text-accent">better movement.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
