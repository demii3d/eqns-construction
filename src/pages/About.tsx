import { SEOHead } from '../components/SEOHead'
import { PageHero } from '../components/PageHero'
import { SmartImage } from '../components/SmartImage'
import { SectionHeading } from '../components/SectionHeading'
import { PrincipleCard } from '../components/PrincipleCard'
import { CTASection } from '../components/CTASection'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/Button'
import { seo } from '../data/seo'
import { images } from '../data/images'
import { brandElements, principles, importance } from '../data/content'

export default function About() {
  return (
    <>
      <SEOHead {...seo.about} />
      <PageHero
        eyebrow="About EQNS"
        title="The Right Elements Make the Difference."
        intro="EQNS brings construction expertise and professional property management together, with a clear belief that how a property is built, maintained and managed all matter."
        image={images.architecture}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <section aria-labelledby="intro-h" className="section">
        <div className="container-eqns grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">Who we are</p>
            <h2 id="intro-h" className="display-md">One partner for the whole life of a property.</h2>
          </div>
          <div className="space-y-6 text-muted-text lg:col-span-7">
            <p className="lead !max-w-none">EQNS is a construction and property management company. We work with owners, landlords, investors and businesses to build, improve, maintain and manage residential and commercial property.</p>
            <p>Property is rarely served well by disconnected parts. A building project, a repair, an inspection and the day-to-day management of a property all affect one another. EQNS brings these disciplines together so that decisions are joined up and the property is looked after as a whole.</p>
            <p>Our name captures how we think about that work, and the four principles behind it shape the way we plan, communicate and deliver.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="meaning-h" className="section bg-stone">
        <div className="container-eqns">
          <SectionHeading eyebrow="The meaning of EQNS" title={<span id="meaning-h">Four principles. One name.</span>} text="Each letter stands for a commitment that informs how we work." />
          <ul className="mt-14 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
            {brandElements.map((b, i) => (
              <Reveal as="li" key={b.name} delay={i * 0.07} className="border-b border-line py-10 sm:px-8 sm:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:first:pl-0">
                <span aria-hidden="true" className="serif-accent text-7xl leading-none text-bronze">{b.letter}</span>
                <h3 className="mt-6 text-xl">{b.name}</h3>
                <p className="mt-3 text-[0.9375rem] text-muted-text">{b.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="phil-h" className="section">
        <div className="container-eqns grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-6 lg:order-2"><SmartImage image={images.planning} ratio="4 / 3" sizes="(min-width: 1024px) 50vw, 100vw" /></Reveal>
          <Reveal className="lg:col-span-6 lg:order-1" delay={0.1}>
            <p className="eyebrow mb-5">Our philosophy</p>
            <h2 id="phil-h" className="display-md">Build well. Manage well. Look after what matters.</h2>
            <div className="mt-6 space-y-5 text-muted-text">
              <p>Construction decides how a property starts its life. Management and maintenance decide how it continues. EQNS treats these as one continuous responsibility rather than separate jobs.</p>
              <p>Understanding how a building is made helps us manage it more sensibly. Understanding how it is used and cared for helps us build and improve it more thoughtfully. That relationship runs through everything we do.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="imp-h" className="on-dark section bg-ink">
        <div className="container-eqns">
          <SectionHeading dark eyebrow="Why it matters" title={<span id="imp-h">Quality, planning and coordination.</span>} text="Property outcomes are shaped long before work begins, and long after it finishes. Three things matter most." />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {importance.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}><PrincipleCard number={`0${i + 1}`} title={p.title} text={p.text} dark /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="core-h" className="section">
        <div className="container-eqns">
          <SectionHeading eyebrow="Core principles" title={<span id="core-h">How we aim to work.</span>} />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (<Reveal key={p.number} delay={(i % 3) * 0.06}><PrincipleCard {...p} /></Reveal>))}
          </div>
          <div className="mt-14"><Button to="/our-approach" variant="outline" arrow>See Our Approach</Button></div>
        </div>
      </section>

      <CTASection title="Talk to EQNS about your property." text="Tell us what you are planning or what your property needs, and we will take it from there." primary={{ label: 'Discuss a Project', to: '/contact' }} secondary={{ label: 'View Our Services', to: '/services' }} />
    </>
  )
}
