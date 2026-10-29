interface SiteConfig {
  name: string
  slogan: string
  tagline: string
  description: string
  url: string
  contact: { email: string; phone: string; address: string; hours: string }
  social: { linkedin: string; instagram: string; facebook: string; x: string }
  legal: { companyName: string; registeredAddress: string; registrationNumber: string; privacyContact: string }
  enquiryEndpoint: string
}

/**
 * Central business configuration.
 * Anything left as an empty string is treated as "not supplied" and is
 * hidden from the interface. Fill these in when the business confirms them.
 */
export const site: SiteConfig = {
  name: 'EQNS',
  slogan: 'The Right Elements. The Right Results.',
  tagline: 'Construction & Property Management',
  description:
    'EQNS brings together construction expertise, refurbishment, maintenance and professional property management to help owners protect and improve long-term property value.',
  /** Production origin. Set VITE_SITE_URL at build time. */
  url: (import.meta.env.VITE_SITE_URL as string | undefined) ?? '',
  contact: {
    email: '', // TODO: supplied by EQNS
    phone: '', // TODO: supplied by EQNS
    address: '', // TODO: supplied by EQNS
    hours: '', // TODO: supplied by EQNS
  },
  /** Official profile URLs only. Empty entries are not rendered. */
  social: {
    linkedin: '',
    instagram: '',
    facebook: '',
    x: '',
  },
  /** Legal details required before the policy pages are published. */
  legal: {
    companyName: '', // TODO: registered legal name
    registeredAddress: '',
    registrationNumber: '',
    privacyContact: '',
  },
  /** Form endpoint accepting a JSON POST. See src/lib/submitEnquiry.ts */
  enquiryEndpoint: (import.meta.env.VITE_ENQUIRY_ENDPOINT as string | undefined) ?? '',
}

export const hasContactDetails =
  Boolean(site.contact.email) || Boolean(site.contact.phone) || Boolean(site.contact.address)
