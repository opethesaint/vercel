'use client'

import { useId, useState, type ReactNode } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface AccordionItemData {
  question: string
  answer: ReactNode
}

export function Accordion({ items }: { items: AccordionItemData[] }) {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <div className="border-t border-border">
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `${baseId}-panel-${i}`
        const btnId = `${baseId}-btn-${i}`
        return (
          <div key={i} className="border-b border-border">
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg font-medium tracking-tight text-foreground sm:text-xl">
                  {item.question}
                </span>
                <Plus
                  className={cn(
                    'h-5 w-5 shrink-0 text-accent transition-transform duration-300',
                    isOpen && 'rotate-45',
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="pb-6"
            >
              <div className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                {item.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
