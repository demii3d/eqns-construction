import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { SEOHead } from '../components/SEOHead'
import { PageHero } from '../components/PageHero'
import { ContactForm } from '../components/ContactForm'
import { SmartImage } from '../components/SmartImage'
import { seo } from '../data/seo'
import { images } from '../data/images'
import { site } from '../data/site'

export default function Contact() {
  const { email, phone, address, hours } = site.contact
  const hasDetails = email || phone || address || hours
  return (
    <>
      <SEOHead {...seo.contact} />
      <PageHero
        eyebrow="Contact EQNS"
        title="Discuss a Project."
        intro="Tell us about your property and what you need. Whether it is building works, refurbishment, maintenance or management, we are ready to understand your requirements."
        image={images.modernHome}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />
      <section aria-labelledby="form-h" className="section">
        <div className="container-eqns grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <h2 id="form-h" className="display-md">Send an enquiry</h2>
            <p className="mb-10 mt-4 max-w-xl text-muted-text">Complete the form below and include as much detail as you can. Fields marked with an asterisk are required.</p>
            <ContactForm />
          </div>
          <aside aria-label="Contact information" className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SmartImage image={images.facade} ratio="4 / 3" sizes="(min-width: 1024px) 40vw, 100vw" />
              <div className="mt-8 border-t border-ink pt-8">
                <h2 className="text-xl">Contact details</h2>
                {hasDetails ? (
                  <ul className="mt-5 space-y-4 text-[0.9375rem]">
                    {email && <li className="flex gap-3"><Mail size={18} className="mt-1 shrink-0 text-bronze" aria-hidden="true" /><a className="underline underline-offset-4" href={`mailto:${email}`}>{email}</a></li>}
                    {phone && <li className="flex gap-3"><Phone size={18} className="mt-1 shrink-0 text-bronze" aria-hidden="true" /><a className="underline underline-offset-4" href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></li>}
                    {address && <li className="flex gap-3"><MapPin size={18} className="mt-1 shrink-0 text-bronze" aria-hidden="true" />{address}</li>}
                    {hours && <li className="flex gap-3"><Clock size={18} className="mt-1 shrink-0 text-bronze" aria-hidden="true" />{hours}</li>}
                  </ul>
                ) : (
                  <p className="mt-4 text-[0.9375rem] text-muted-text">The enquiry form is the quickest way to reach EQNS. We will review your requirements and respond.</p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
