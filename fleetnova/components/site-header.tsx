'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Wordmark } from '@/components/wordmark'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'What We Do', href: '/#what-we-do' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20">
        <Link
          href="/"
          className="shrink-0"
          aria-label="FLEETNOVA Technologies Limited home"
          onClick={() => setOpen(false)}
        >
          <Wordmark className="text-foreground" />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 lg:inline-flex"
          >
            Get in Touch
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-foreground lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-x-0 top-16 z-40 origin-top border-b border-border bg-background transition-all duration-300 lg:hidden',
          open ? 'visible opacity-100' : 'invisible -translate-y-2 opacity-0',
        )}
      >
        <nav className="flex flex-col px-5 py-6 sm:px-8" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-4 font-display text-2xl tracking-tight text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  )
}
