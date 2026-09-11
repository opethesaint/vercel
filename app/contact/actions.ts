'use server'

export type EnquiryState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors: Partial<Record<'fullName' | 'email' | 'enquiryType' | 'message', string>>
}

const ENQUIRY_TYPES = [
  'General Enquiry',
  'Business Partnership',
  'Mobility',
  'Logistics',
  'Technology',
  'Media',
  'Other',
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const fullName = String(formData.get('fullName') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const enquiryType = String(formData.get('enquiryType') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  const errors: EnquiryState['errors'] = {}

  if (fullName.length < 2) errors.fullName = 'Please enter your full name.'
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.'
  if (!ENQUIRY_TYPES.includes(enquiryType))
    errors.enquiryType = 'Please select an enquiry type.'
  if (message.length < 10)
    errors.message = 'Please provide a little more detail (10+ characters).'

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Please correct the highlighted fields and try again.',
      errors,
    }
  }

  // Simulate handing off to a CRM / email service.
  await new Promise((resolve) => setTimeout(resolve, 900))

  return {
    status: 'success',
    message: `Thank you, ${fullName.split(' ')[0]}. Your enquiry has reached the FLEETNOVA team — we'll be in touch shortly.`,
    errors: {},
  }
}
