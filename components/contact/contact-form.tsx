'use client'

import { useActionState, useEffect, useRef } from 'react'
import { useFormStatus } from 'react-dom'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { submitEnquiry, type EnquiryState } from '@/app/contact/actions'
import { cn } from '@/lib/utils'

const ENQUIRY_TYPES = [
  'General Enquiry',
  'Business Partnership',
  'Mobility',
  'Logistics',
  'Technology',
  'Media',
  'Other',
]

const initialState: EnquiryState = { status: 'idle', message: '', errors: {} }

const fieldBase =
  'w-full rounded-sm border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Sending…
        </>
      ) : (
        <>
          Send Enquiry
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </>
      )}
    </button>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-2 text-sm text-destructive">
      {message}
    </p>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitEnquiry, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
    }
  }, [state.status])

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-start rounded-sm border border-border bg-secondary p-8 sm:p-10">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground">
          Enquiry received
        </h3>
        <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <form ref={formRef} action={formAction} noValidate className="space-y-6">
      {state.status === 'error' && state.message && (
        <div
          role="alert"
          className="rounded-sm border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-foreground">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            aria-invalid={!!state.errors.fullName}
            aria-describedby="fullName-error"
            className={cn(fieldBase, state.errors.fullName ? 'border-destructive' : 'border-border')}
            placeholder="Ada Okafor"
          />
          <FieldError id="fullName-error" message={state.errors.fullName} />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={cn(fieldBase, 'border-border')}
            placeholder="Company name"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!state.errors.email}
            aria-describedby="email-error"
            className={cn(fieldBase, state.errors.email ? 'border-destructive' : 'border-border')}
            placeholder="you@company.com"
          />
          <FieldError id="email-error" message={state.errors.email} />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={cn(fieldBase, 'border-border')}
            placeholder="+234 …"
          />
        </div>
      </div>

      <div>
        <label htmlFor="enquiryType" className="mb-2 block text-sm font-medium text-foreground">
          Enquiry Type <span className="text-accent">*</span>
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          defaultValue=""
          aria-invalid={!!state.errors.enquiryType}
          aria-describedby="enquiryType-error"
          className={cn(
            fieldBase,
            'appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10',
            state.errors.enquiryType ? 'border-destructive' : 'border-border',
          )}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="" disabled>
            Select an enquiry type
          </option>
          {ENQUIRY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <FieldError id="enquiryType-error" message={state.errors.enquiryType} />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={!!state.errors.message}
          aria-describedby="message-error"
          className={cn(
            fieldBase,
            'resize-y',
            state.errors.message ? 'border-destructive' : 'border-border',
          )}
          placeholder="Tell us a little about your enquiry…"
        />
        <FieldError id="message-error" message={state.errors.message} />
      </div>

      <SubmitButton />
    </form>
  )
}
