import { Link } from 'react-router-dom'
import { SEOHead } from '../components/SEOHead'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceGrid } from '../components/ServiceGrid'
import { CTASection } from '../components/CTASection'
import { Reveal } from '../components/Reveal'
import { seo } from '../data/seo'
import { images } from '../data/images'
import { services, serviceHref } from '../data/services'

const groups = [
  { name: 'Build & Improve', text: 'Creating new structures and renewing existing ones.' },
  { name: 'Care & Maintain', text: 'Keeping buildings in good order and understanding their condition.' },
  { name: 'Manage & Coordinate', text: 'Overseeing properties and organising the people who work on them.' },
] as const

export default function Services() {
  return (
    <>
      <SEOHead {...seo.services} />
      <PageHero
        eyebrow="Our services"
        title="Integrated Property Services."
        intro="Seven connected services covering building works, improvement, upkeep and management, so your property is handled as a whole."
        image={images.construction}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section aria-labelledby="diff-h" className="section">
        <div className="container-eqns">
          <SectionHeading eyebrow="Understanding the difference" title={<span id="diff-h">Which service does your property need?</span>} text="Construction, refurbishment, maintenance and management are related but distinct. This guide helps you find the right starting point." />
          <div className="mt-14 grid gap-px border border-line bg-line lg:grid-cols-3">
            {groups.map((g) => (
              <div key={g.name} className="bg-white p-7 md:p-9">
                <h3 className="text-xl">{g.name}</h3>
                <p className="mt-2 text-[0.9375rem] text-muted-text">{g.text}</p>
                <ul className="mt-6 divide-y divide-line border-t border-line">
                  {services.filter((s) => s.category === g.name).map((s) => (
                    <li key={s.slug}>
                      <Link to={serviceHref(s.slug)} className="group block py-4">
                        <span className="font-display text-[0.9375rem] font-semibold text-ink group-hover:text-bronze-text">{s.shortTitle}</span>
                        <span className="mt-0.5 block text-[0.8125rem] text-muted-text">{s.distinction}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="all-h" className="section bg-stone">
        <div className="container-eqns">
          <SectionHeading eyebrow="All services" title={<span id="all-h">Explore each service.</span>} />
          <div className="mt-12 md:mt-16"><ServiceGrid items={services} /></div>
        </div>
      </section>

      <section aria-labelledby="joined-h" className="section">
        <div className="container-eqns grid gap-8 lg:grid-cols-12 lg:gap-20">
          <h2 id="joined-h" className="display-md lg:col-span-5">Not sure where to start?</h2>
          <Reveal className="space-y-5 text-muted-text lg:col-span-7">
            <p>Many property needs cross more than one service. A refurbishment may involve building works and trades coordination. A management role may involve repairs and inspections.</p>
            <p>Describe your property and what you are hoping to achieve, and EQNS can help identify which services are relevant.</p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
