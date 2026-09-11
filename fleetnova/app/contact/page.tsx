import type { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactForm } from '@/components/contact/contact-form'
import { Accordion, type AccordionItemData } from '@/components/contact/accordion'
import { COMPANY } from '@/lib/company'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with the FLEETNOVA Technologies Limited team for partnerships, business enquiries, and technology solutions.',
}

const FAQS: AccordionItemData[] = [
  {
    question: 'What does FLEETNOVA do?',
    answer:
      'FLEETNOVA is a technology-driven mobility and logistics company. We build software, systems and operational solutions that make transportation, mobility and logistics smarter, more efficient and more connected.',
  },
  {
    question: 'Who does FLEETNOVA work with?',
    answer:
      'We work with businesses, partners and organizations across the mobility and logistics ecosystem — from those moving goods to those moving people — who want to operate with greater reliability and reach.',
  },
  {
    question: 'Does FLEETNOVA offer business solutions?',
    answer:
      'Yes. Our business mobility solutions help organizations manage transportation, logistics and operational needs through a single, technology-led platform tailored to how they work.',
  },
  {
    question: 'How can I work with FLEETNOVA?',
    answer:
      'The best first step is to send us an enquiry using the form on this page. Share a little about your needs and our team will follow up to explore how we can help.',
  },
  {
    question: 'Where is FLEETNOVA based?',
    answer:
      'FLEETNOVA is based in Lagos, Nigeria, and builds solutions designed around the realities of modern African mobility and logistics.',
  },
  {
    question: 'Can I discuss a partnership?',
    answer:
      'Absolutely. Select “Business Partnership” as your enquiry type when you reach out, and our partnerships team will be in touch to continue the conversation.',
  },
]

const CONTACT_DETAILS = [
  {
    label: 'Email',
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    Icon: Mail,
  },
  {
    label: 'Phone',
    value: COMPANY.phone,
    href: COMPANY.phoneHref,
    Icon: Phone,
  },
  {
    label: 'Location',
    value: COMPANY.location,
    href: null,
    Icon: MapPin,
  },
]

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 lg:pb-24 lg:pt-44">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-primary-foreground/60">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              Contact
            </p>
            <h1 className="mt-6 text-balance font-display text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Let&apos;s talk.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
              Have a question, partnership opportunity, or business enquiry? Get
              in touch with the FLEETNOVA team.
            </p>
          </div>
        </section>

        {/* Info + Form */}
        <section className="bg-background">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                Reach the team
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Prefer to reach out directly? Use the details below, or send an
                enquiry and we&apos;ll respond promptly.
              </p>

              <ul className="mt-10 space-y-8">
                {CONTACT_DETAILS.map(({ label, value, href, Icon }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-border text-accent">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-1 block text-lg text-foreground transition-colors hover:text-accent"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-lg text-foreground">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-8 lg:pl-8">
              <div className="rounded-sm border border-border bg-secondary/40 p-6 sm:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 border-t border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                  <span className="h-px w-8 bg-accent" aria-hidden="true" />
                  FAQ
                </p>
                <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-5xl">
                  Frequently asked questions
                </h2>
              </div>
              <div className="lg:col-span-8">
                <Accordion items={FAQS} />
              </div>
            </div>
          </div>
        </section>

        {/* Legal */}
        <section id="legal" className="scroll-mt-20 bg-background">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                  <span className="h-px w-8 bg-accent" aria-hidden="true" />
                  Legal
                </p>
                <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-5xl">
                  Terms &amp; Privacy
                </h2>
                <p className="mt-4 text-sm text-muted-foreground">
                  Last updated: {COMPANY.lastUpdated}
                </p>
              </div>
              <div className="lg:col-span-8">
                <Accordion items={LEGAL} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

const LEGAL: AccordionItemData[] = [
  {
    question: 'Terms of Service',
    answer: (
      <div className="space-y-4">
        <p>
          These Terms of Service govern your use of the FLEETNOVA Technology
          Limited website. By accessing or using this website, you agree to be
          bound by these terms. The content provided here is for general
          informational purposes only and does not constitute a binding offer or
          contract for any service.
        </p>
        <p>
          All content, trademarks and materials on this website are the property
          of FLEETNOVA Technology Limited and may not be reproduced or
          redistributed without prior written consent. We reserve the right to
          update or modify these terms at any time; continued use of the website
          constitutes acceptance of any changes.
        </p>
        <p>
          FLEETNOVA Technology Limited shall not be liable for any indirect or
          consequential loss arising from the use of this website. This is
          general placeholder content and should be replaced with reviewed legal
          text prior to production use.
        </p>
      </div>
    ),
  },
  {
    question: 'Privacy Policy',
    answer: (
      <div className="space-y-4">
        <p>
          This Privacy Policy explains how FLEETNOVA Technology Limited collects,
          uses and protects information you provide through this website. When
          you submit an enquiry, we collect the details you share — such as your
          name, company, email, phone number and message — solely to respond to
          your request.
        </p>
        <p>
          We do not sell your personal information. Information is stored securely
          and accessed only by authorized team members for the purpose of
          handling your enquiry and maintaining our business relationship. We may
          retain enquiry records for a reasonable period consistent with
          applicable law.
        </p>
        <p>
          You may request access to, correction of, or deletion of your personal
          information at any time by contacting us using the details on this
          page. This is general placeholder content and should be replaced with
          reviewed legal text prior to production use.
        </p>
      </div>
    ),
  },
]
