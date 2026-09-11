import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

interface FeatureBandProps {
  eyebrow: string
  heading: string
  body: string
  image: string
  alt: string
  tags?: string[]
  /** When true the image sits on the left on desktop. */
  reverse?: boolean
  tone?: 'light' | 'muted'
}

export function FeatureBand({
  eyebrow,
  heading,
  body,
  image,
  alt,
  tags,
  reverse = false,
  tone = 'light',
}: FeatureBandProps) {
  return (
    <section className={cn(tone === 'muted' ? 'bg-secondary' : 'bg-background')}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <Reveal
          className={cn(reverse ? 'lg:order-2' : 'lg:order-1')}
        >
          <div className="relative aspect-[5/4] overflow-hidden rounded-sm bg-muted">
            <Image
              src={image || '/placeholder.svg'}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className={cn(reverse ? 'lg:order-1' : 'lg:order-2')}
        >
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.03] tracking-tight text-foreground sm:text-5xl">
            {heading}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {body}
          </p>

          {tags && tags.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-sm border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </div>
    </section>
  )
}
