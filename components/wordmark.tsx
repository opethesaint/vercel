import { cn } from '@/lib/utils'

interface WordmarkProps {
  className?: string
  /** Stack the two lines for large footer usage. */
  stacked?: boolean
}

export function Wordmark({ className, stacked = false }: WordmarkProps) {
  if (stacked) {
    return (
      <span className={cn('block font-display leading-[0.95]', className)}>
        <span className="block text-4xl font-bold tracking-tight sm:text-5xl">
          FLEETNOVA
        </span>
        <span className="block text-lg font-medium tracking-[0.28em] text-accent sm:text-xl">
          TECHNOLOGIES LIMITED
        </span>
      </span>
    )
  }

  return (
    <span
      className={cn(
        'flex items-baseline gap-2 font-display text-base font-bold tracking-tight',
        className,
      )}
    >
      <span className="text-lg">FLEETNOVA</span>
      <span
        aria-hidden="true"
        className="h-3.5 w-px bg-accent"
      />
      <span className="text-[0.68rem] font-medium tracking-[0.22em] text-foreground/55">
        TECHNOLOGIES
      </span>
    </span>
  )
}
