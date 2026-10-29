import { services } from '../data/services'

export const propertyTypes = ['Residential', 'Commercial', 'Mixed-use', 'Other'] as const

export interface EnquiryValues {
  name: string
  email: string
  phone: string
  service: string
  address: string
  propertyType: string
  message: string
  privacy: boolean
  /** Honeypot: real visitors never fill this */
  website: string
}

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>

export const emptyEnquiry: EnquiryValues = {
  name: '', email: '', phone: '', service: '', address: '', propertyType: '', message: '', privacy: false, website: '',
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const phoneRe = /^[+()\d][\d\s().-]{5,}$/

export function validateField(key: keyof EnquiryValues, v: EnquiryValues): string | undefined {
  switch (key) {
    case 'name':
      return v.name.trim().length < 2 ? 'Please enter your full name.' : undefined
    case 'email':
      if (!v.email.trim()) return 'Please enter your email address.'
      return emailRe.test(v.email.trim()) ? undefined : 'Please enter a valid email address, for example name@example.com.'
    case 'phone':
      return v.phone.trim() && !phoneRe.test(v.phone.trim()) ? 'Please enter a valid telephone number, or leave this blank.' : undefined
    case 'service':
      return services.some((s) => s.slug === v.service) ? undefined : 'Please choose the service you need.'
    case 'message':
      if (!v.message.trim()) return 'Please tell us about your requirements.'
      return v.message.trim().length < 20 ? 'Please give us a little more detail (at least 20 characters).' : undefined
    case 'privacy':
      return v.privacy ? undefined : 'Please confirm you have read the Privacy Policy.'
    default:
      return undefined
  }
}

export const requiredKeys: (keyof EnquiryValues)[] = ['name', 'email', 'phone', 'service', 'message', 'privacy']

export function validateEnquiry(v: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {}
  for (const k of requiredKeys) {
    const e = validateField(k, v)
    if (e) errors[k] = e
  }
  return errors
}
