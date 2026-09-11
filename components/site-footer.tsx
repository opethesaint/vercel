import Link from 'next/link'
import type { ComponentType } from 'react'
import { COMPANY } from '@/lib/company'

type IconProps = { className?: string }

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z" />
    </svg>
  )
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.29-.04-1.3-.12-2.47-.12-2.44 0-4.11 1.49-4.11 4.22V9.9H7.7V13h2.72v8h3.08Z" />
    </svg>
  )
}

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'About FLEETNOVA', href: '/#about' },
      { label: 'What We Do', href: '/#what-we-do' },
      { label: 'Our Approach', href: '/#why' },
      { label: 'Careers', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/contact#faq' },
      { label: 'Partnerships', href: '/contact' },
      { label: 'Enquiries', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/contact#legal' },
      { label: 'Privacy Policy', href: '/contact#legal' },
    ],
  },
]

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817-5.968 6.817H1.677l7.73-8.835L1.254 2.25h6.83l4.713 6.231 5.447-6.231Zm-1.16 17.52h1.833L7.084 4.126H5.117l11.967 15.644Z" />
    </svg>
  )
}

const SOCIALS: { label: string; href: string; Icon: ComponentType<IconProps> }[] = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
  { label: 'X', href: 'https://x.com', Icon: XIcon },
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Top block */}
        <div className="grid grid-cols-1 gap-14 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10 lg:py-24">
          <div className="max-w-sm">
            <p className="font-display text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl">
              FLEETNOVA
              <span className="mt-2 block text-base font-medium tracking-[0.28em] text-accent sm:text-lg">
                TECHNOLOGIES LIMITED
              </span>
            </p>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/70">
              {COMPANY.tagline}
            </p>

            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-primary-foreground/15 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.95rem] text-primary-foreground/75 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="grid grid-cols-1 gap-6 border-t border-primary-foreground/10 py-10 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/45">
              Location
            </p>
            <p className="mt-2 text-primary-foreground/85">{COMPANY.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/45">
              Email
            </p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-2 block text-primary-foreground/85 transition-colors hover:text-accent"
            >
              {COMPANY.email}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/45">
              Phone
            </p>
            <a
              href={COMPANY.phoneHref}
              className="mt-2 block text-primary-foreground/85 transition-colors hover:text-accent"
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-primary-foreground/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-primary-foreground/55">
            © 2026 FLEETNOVA TECHNOLOGIES LIMITED. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/contact#legal"
              className="text-sm text-primary-foreground/55 transition-colors hover:text-accent"
            >
              Terms
            </Link>
            <Link
              href="/contact#legal"
              className="text-sm text-primary-foreground/55 transition-colors hover:text-accent"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
