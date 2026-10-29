import { useParams, Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { getService, services, serviceHref } from '../data/services'
import { SEOHead } from '../components/SEOHead'
import { PageHero } from '../components/PageHero'
import { SmartImage } from '../components/SmartImage'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'
import { CTASection } from '../components/CTASection'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/Button'
import NotFound from './NotFound'

export default function ServicePage() {
  const { slug = '' } = useParams()
  const service = getService(slug)
  if (!service) return <NotFound />

  const related = service.related.map(getService).filter((s): s is NonNullable<typeof s> => Boolean(s))
  const index = services.findIndex((s) => s.slug === service.slug)
  const next = services[(index + 1) % services.length]

  return (
    <>
      <SEOHead title={`${service.title} | EQNS`} description={service.metaDescription} />
      <PageHero
        eyebrow={`Service ${service.number} · ${service.category}`}
        title={service.title}
        intro={service.heroIntro}
        image={service.image}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: service.shortTitle }]}
        actions={<>
          <Button to={`/contact?service=${service.slug}`} variant="accent" arrow>Enquire About This Service</Button>
          <Button to="/contact" variant="outline-light">Contact EQNS</Button>
        </>}
      />

      <section aria-labelledby="overview-h" className="section">
        <div className="container-eqns grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">Overview</p>
            <h2 id="overview-h" className="display-md">{service.summary}</h2>
            <Reveal className="mt-10 hidden lg:block"><SmartImage image={service.image} ratio="4 / 3" sizes="40vw" /></Reveal>
          </div>
          <div className="space-y-6 text-muted-text lg:col-span-7">
            {service.overview.map((p, i) => (<p key={i} className={i === 0 ? 'lead !max-w-none' : undefined}>{p}</p>))}
            <Link to="/contact" className="text-link mt-4">Contact EQNS about your property</Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="areas-h" className="section bg-stone">
        <div className="container-eqns">
          <SectionHeading eyebrow="Key areas of support" title={<span id="areas-h">How EQNS can help.</span>} text="The scope of every project is discussed and agreed with you. These are the main areas this service can cover." />
          <ul className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {service.areas.map((a, i) => (
              <Reveal as="li" key={a.title} delay={(i % 3) * 0.06} className="bg-white p-7 md:p-8">
                <Check size={20} className="text-bronze" aria-hidden="true" />
                <h3 className="mt-5 text-lg">{a.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-muted-text">{a.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="fit-h" className="section">
        <div className="container-eqns grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-5">Part of the EQNS offering</p>
            <h2 id="fit-h" className="display-md">Connected to everything else we do.</h2>
            <p className="mt-6 text-muted-text">{service.fit}</p>
            <div className="mt-8"><Link to="/our-approach" className="text-link">Our approach</Link></div>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">All EQNS services</p>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={serviceHref(s.slug)} aria-current={s.slug === service.slug ? 'page' : undefined} className={`flex items-baseline gap-4 py-3.5 transition-colors hover:text-bronze-text ${s.slug === service.slug ? 'font-semibold text-bronze-text' : 'text-charcoal'}`}>
                    <span className="font-display text-xs tracking-[0.18em] text-bronze-text">{s.number}</span>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section aria-labelledby="related-h" className="section bg-stone">
        <div className="container-eqns">
          <SectionHeading eyebrow="Related services" title={<span id="related-h">Often considered alongside.</span>} />
          <ul className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-6">
            {related.map((s) => (<li key={s.slug}><ServiceCard service={s} /></li>))}
          </ul>
          <p className="mt-10 text-sm text-muted-text">Next service: <Link to={serviceHref(next.slug)} className="font-semibold text-ink underline underline-offset-4 hover:text-bronze-text">{next.title}</Link></p>
        </div>
      </section>

      <CTASection
        title={`Discuss ${service.shortTitle.toLowerCase()} with EQNS.`}
        text="Tell us about your property and what you need. We will review your requirements and respond."
        primary={{ label: 'Discuss a Project', to: `/contact?service=${service.slug}` }}
        secondary={{ label: 'Contact EQNS', to: '/contact' }}
      />
    </>
  )
}
