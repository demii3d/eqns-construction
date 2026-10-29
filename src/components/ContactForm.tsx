import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AlertCircle, CheckCircle2, Info } from 'lucide-react'
import { services } from '../data/services'
import { site } from '../data/site'
import { emptyEnquiry, propertyTypes, validateEnquiry, validateField, type EnquiryErrors, type EnquiryValues } from '../lib/validation'
import { submitEnquiry } from '../lib/submitEnquiry'
import { Button } from './Button'

type Status = 'idle' | 'submitting' | 'sent' | 'preview' | 'unconfigured' | 'error'

const order: (keyof EnquiryValues)[] = ['name', 'email', 'phone', 'service', 'address', 'propertyType', 'message', 'privacy']

function Field({ id, label, required, error, hint, children }: { id: string; label: string; required?: boolean; error?: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {required ? <span className="text-[#a32020]" aria-hidden="true"> *</span> : <span className="font-normal text-muted-text"> (optional)</span>}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-2 text-[0.8125rem] text-muted-text">{hint}</p>}
      {error && (
        <p id={`${id}-error`} className="field-error">
          <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      )}
    </div>
  )
}

export function ContactForm() {
  const [params] = useSearchParams()
  const initialService = services.some((s) => s.slug === params.get('service')) ? params.get('service')! : ''
  const [values, setValues] = useState<EnquiryValues>({ ...emptyEnquiry, service: initialService })
  const [errors, setErrors] = useState<EnquiryErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const key = name as keyof EnquiryValues
    const next = { ...values, [key]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value } as EnquiryValues
    setValues(next)
    // Clear an existing error as soon as the field becomes valid
    if (errors[key] && !validateField(key, next)) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const onBlur = (key: keyof EnquiryValues) => () => {
    const msg = validateField(key, values)
    setErrors((er) => ({ ...er, [key]: msg }))
  }

  const ariaFor = (key: keyof EnquiryValues, hint = false) => ({
    'aria-invalid': errors[key] ? (true as const) : undefined,
    'aria-describedby': errors[key] ? `${key}-error` : hint ? `${key}-hint` : undefined,
  })

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const found = validateEnquiry(values)
    setErrors(found)
    const firstKey = order.find((k) => found[k])
    if (firstKey) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus()
      return
    }
    setStatus('submitting')
    try {
      const res = await submitEnquiry(values)
      setStatus(res.status)
      if (res.status === 'sent') setValues(emptyEnquiry)
    } catch {
      setStatus('error')
    }
    requestAnimationFrame(() => statusRef.current?.focus())
  }

  const errorCount = Object.values(errors).filter(Boolean).length

  if (status === 'sent') {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="border border-line bg-stone p-8 outline-none md:p-10">
        <CheckCircle2 className="text-bronze" size={32} aria-hidden="true" />
        <h2 className="display-md mt-5">Thank you. Your enquiry has been sent.</h2>
        <p className="mt-4 text-muted-text">We have received your message and will review the details you provided.</p>
        <Button variant="outline" className="mt-8" onClick={() => setStatus('idle')}>Send another enquiry</Button>
      </div>
    )
  }

  const banner =
    status === 'preview' ? { tone: 'info', title: 'Development preview. Nothing was sent.', text: 'Your details passed validation, but no form endpoint is configured yet. Set VITE_ENQUIRY_ENDPOINT to deliver enquiries to the business.' }
    : status === 'unconfigured' ? { tone: 'error', title: 'This form is not accepting enquiries yet.', text: site.contact.email ? `Please email us directly at ${site.contact.email}.` : 'Online enquiries are not yet available. Please check back soon or contact EQNS by another route.' }
    : status === 'error' ? { tone: 'error', title: 'We could not send your enquiry.', text: 'Something went wrong while sending. Your details are still here, so please try again in a moment.' }
    : null

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-label="Project enquiry form" className="space-y-6">
      {banner && (
        <div ref={statusRef} tabIndex={-1} role={banner.tone === 'error' ? 'alert' : 'status'} className={`flex gap-3 border p-5 outline-none ${banner.tone === 'error' ? 'border-[#a32020] bg-[#fffafa]' : 'border-champagne bg-stone'}`}>
          {banner.tone === 'error' ? <AlertCircle className="mt-0.5 shrink-0 text-[#a32020]" size={20} aria-hidden="true" /> : <Info className="mt-0.5 shrink-0 text-bronze" size={20} aria-hidden="true" />}
          <div>
            <p className="font-semibold text-ink">{banner.title}</p>
            <p className="mt-1 text-[0.9375rem] text-muted-text">{banner.text}</p>
          </div>
        </div>
      )}
      {errorCount > 0 && (
        <p role="alert" className="field-error !mt-0 font-semibold">
          <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
          Please correct {errorCount === 1 ? '1 field' : `${errorCount} fields`} below.
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <Field id="name" label="Full name" required error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={onChange} onBlur={onBlur('name')} className="field-control" {...ariaFor('name')} />
        </Field>
        <Field id="email" label="Email address" required error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange} onBlur={onBlur('email')} className="field-control" {...ariaFor('email')} />
        </Field>
        <Field id="phone" label="Telephone number" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={onChange} onBlur={onBlur('phone')} className="field-control" {...ariaFor('phone')} />
        </Field>
        <Field id="service" label="Service required" required error={errors.service}>
          <select id="service" name="service" value={values.service} onChange={onChange} onBlur={onBlur('service')} className="field-control" {...ariaFor('service')}>
            <option value="">Select a service</option>
            {services.map((s) => (<option key={s.slug} value={s.slug}>{s.title}</option>))}
          </select>
        </Field>
        <Field id="address" label="Property address" error={errors.address}>
          <input id="address" name="address" type="text" autoComplete="street-address" value={values.address} onChange={onChange} className="field-control" />
        </Field>
        <Field id="propertyType" label="Property type" error={errors.propertyType}>
          <select id="propertyType" name="propertyType" value={values.propertyType} onChange={onChange} className="field-control">
            <option value="">Select a property type</option>
            {propertyTypes.map((t) => (<option key={t} value={t}>{t}</option>))}
          </select>
        </Field>
      </div>

      <Field id="message" label="Project or maintenance requirements" required error={errors.message} hint="Tell us what you need, the type of property, and anything that affects timing.">
        <textarea id="message" name="message" rows={6} value={values.message} onChange={onChange} onBlur={onBlur('message')} className="field-control resize-y" {...ariaFor('message', true)} />
      </Field>

      {/* Honeypot, hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Leave this field empty<input type="text" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={onChange} /></label>
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input id="privacy" name="privacy" type="checkbox" checked={values.privacy} onChange={onChange} className="mt-1 h-5 w-5 shrink-0 accent-ink" {...ariaFor('privacy')} />
          <label htmlFor="privacy" className="text-[0.9375rem] text-charcoal">
            I have read the <Link to="/privacy-policy" className="underline underline-offset-4 hover:text-bronze-text">Privacy Policy</Link> and agree to EQNS using these details to respond to my enquiry.&nbsp;<span className="text-[#a32020]" aria-hidden="true">*</span>
          </label>
        </div>
        {errors.privacy && (
          <p id="privacy-error" className="field-error"><AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" /><span>{errors.privacy}</span></p>
        )}
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" arrow disabled={status === 'submitting'} className="w-full sm:w-auto" aria-busy={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
        </Button>
        <p className="text-[0.8125rem] text-muted-text"><span aria-hidden="true">*</span> Required fields</p>
      </div>
    </form>
  )
}
