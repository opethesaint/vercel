import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <Image
        src="/images/logistics-fleet.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/70"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-36">
        <Reveal className="max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-primary-foreground/60">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Get Started
          </p>
          <h2 className="mt-5 text-balance font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Let&apos;s build what&apos;s next.
          </h2>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Whether you&apos;re exploring a partnership, looking for a technology
            solution, or simply want to learn more about FLEETNOVA, we&apos;d like
            to hear from you.
          </p>
          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
