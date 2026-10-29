import type { ReactNode } from 'react'
import { SEOHead } from '../components/SEOHead'
import { PageHero } from '../components/PageHero'
import { images } from '../data/images'
import { seo } from '../data/seo'
import { site } from '../data/site'
import { AlertTriangle } from 'lucide-react'

function Review({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 flex gap-3 border border-champagne bg-stone p-4 text-[0.9375rem] text-charcoal">
      <AlertTriangle size={18} className="mt-0.5 shrink-0 text-bronze" aria-hidden="true" />
      <span><strong>Owner review required:</strong> {children}</span>
    </p>
  )
}

function Shell({ meta, title, children }: { meta: { title: string; description: string }; title: string; children: ReactNode }) {
  return (
    <>
      <SEOHead {...meta} noindex />
      <PageHero title={title} image={images.facade} breadcrumbs={[{ label: 'Home', href: '/' }, { label: title }]} />
      <section className="section">
        <div className="container-eqns max-w-3xl space-y-12 [&_h2]:text-2xl [&_p]:mt-4 [&_p]:text-muted-text [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-muted-text">
          <div role="note" className="border-l-4 border-bronze bg-stone p-5 text-[0.9375rem] text-charcoal">
            <strong>Draft structure.</strong> This page is a placeholder. It has not been reviewed by EQNS or a legal adviser and must not be published as-is. It is excluded from search indexing until finalised.
          </div>
          {children}
        </div>
      </section>
    </>
  )
}

export function PrivacyPolicy() {
  const legalName = site.legal.companyName || '[Legal company name to be confirmed]'
  return (
    <Shell meta={seo.privacy} title="Privacy Policy">
      <div>
        <h2>1. Who we are</h2>
        <p>This website is operated by {legalName}, trading as {site.name}.</p>
        <Review>Insert the registered legal name, registered address, registration number and data controller details.</Review>
      </div>
      <div>
        <h2>2. Information we collect</h2>
        <p>When you use the enquiry form on this website, you may provide your name, email address, telephone number, property address, property type, the service you are interested in and a description of your requirements.</p>
        <Review>Confirm the categories of personal data actually collected and any data received through other channels.</Review>
      </div>
      <div>
        <h2>3. How we use your information</h2>
        <p>[Describe purposes, for example responding to enquiries, and the lawful basis relied on.]</p>
        <Review>Complete with the business’s actual practices.</Review>
      </div>
      <div>
        <h2>4. Sharing and storage</h2>
        <p>[Describe who receives enquiry data, including any form or email service providers, where it is stored and for how long.]</p>
        <Review>This depends on the form service or backend selected for the website.</Review>
      </div>
      <div>
        <h2>5. Your rights</h2>
        <p>[Set out the rights available under applicable data protection law and how to exercise them.]</p>
        <Review>Have this section checked against the law that applies to the business.</Review>
      </div>
      <div>
        <h2>6. Contact</h2>
        <p>{site.legal.privacyContact || site.contact.email || '[Privacy contact details to be supplied.]'}</p>
      </div>
    </Shell>
  )
}

export function CookiePolicy() {
  return (
    <Shell meta={seo.cookies} title="Cookie Policy">
      <div>
        <h2>Current use of cookies</h2>
        <p>As built, this website does not set advertising or analytics cookies and does not use third-party tracking tools. For that reason it does not display a cookie consent banner.</p>
        <p>The site loads typefaces from Google Fonts. Requests to that service may share your IP address with Google. Review this with a legal adviser, or host the fonts locally, if that is a concern.</p>
        <Review>If analytics, embedded maps, chat tools or advertising pixels are added later, update this page and add a consent mechanism that matches what is actually used.</Review>
      </div>
      <div>
        <h2>Strictly necessary storage</h2>
        <p>The website does not currently store information in your browser for tracking. Any storage added for essential functions, such as remembering form progress, would be listed here.</p>
      </div>
      <div>
        <h2>Contact</h2>
        <p>{site.legal.privacyContact || site.contact.email || '[Contact details to be supplied.]'}</p>
      </div>
    </Shell>
  )
}
