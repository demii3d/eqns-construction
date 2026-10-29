import { site } from '../data/site'
import { getService } from '../data/services'
import type { EnquiryValues } from './validation'

/**
 * Enquiry submission boundary.
 *
 * - With VITE_ENQUIRY_ENDPOINT set, POSTs JSON to it and reports 'sent' on a 2xx.
 * - Without one, it never claims delivery:
 *     dev build  -> 'preview'      (clearly labelled as not sent)
 *     prod build -> 'unconfigured' (tells the visitor to use another route)
 *
 * To connect a backend or form service, set the env var, or replace the
 * fetch call below to match the provider's required payload.
 */
export type SubmitResult = { status: 'sent' } | { status: 'preview' } | { status: 'unconfigured' }

export async function submitEnquiry(values: EnquiryValues): Promise<SubmitResult> {
  if (values.website) return { status: 'sent' } // honeypot tripped: silently discard

  if (!site.enquiryEndpoint) {
    return import.meta.env.DEV ? { status: 'preview' } : { status: 'unconfigured' }
  }

  const res = await fetch(site.enquiryEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      service: getService(values.service)?.title ?? values.service,
      propertyAddress: values.address.trim(),
      propertyType: values.propertyType,
      message: values.message.trim(),
      privacyAcknowledged: values.privacy,
    }),
  })
  if (!res.ok) throw new Error(`Enquiry endpoint responded ${res.status}`)
  return { status: 'sent' }
}
