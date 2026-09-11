import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-primary">
      <Image
        src="/images/hero-dispatch-rider.png"
        alt="Professional dispatch rider on a delivery motorcycle navigating a busy Lagos street at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Tonal overlays for legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/20 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:pb-28">
        <div className="max-w-4xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-primary-foreground/70">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            Mobility &amp; Logistics Technology
          </p>
          <h1 className="text-balance font-display text-5xl font-bold leading-[0.98] tracking-tight text-primary-foreground sm:text-6xl lg:text-8xl">
            Building the future of mobility.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
            Technology-driven solutions making transportation, mobility, and
            logistics smarter, more efficient, and more connected.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="#what-we-do"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Explore What We Do
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary-foreground/25 px-7 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:border-primary-foreground/60 hover:bg-primary-foreground/5"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
