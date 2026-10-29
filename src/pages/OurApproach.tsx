import { SEOHead } from '../components/SEOHead'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { PrincipleCard } from '../components/PrincipleCard'
import { SmartImage } from '../components/SmartImage'
import { CTASection } from '../components/CTASection'
import { Reveal } from '../components/Reveal'
import { seo } from '../data/seo'
import { images } from '../data/images'
import { approachSteps, approachThemes } from '../data/content'

export default function OurApproach() {
  return (
    <>
      <SEOHead {...seo.approach} />
      <PageHero
        eyebrow="Our approach"
        title="A More Considered Approach to Property."
        intro="Good property outcomes come from consistent standards, organised delivery and honest communication, from the first conversation to long-term care."
        image={images.planning}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Our Approach' }]}
      />

      <section aria-labelledby="process-h" className="section">
        <div className="container-eqns">
          <SectionHeading eyebrow="How we work" title={<span id="process-h">From enquiry to ongoing support.</span>} text="This is a general outline of how EQNS approaches a property requirement. The detail of every project is agreed with you individually." />
          <ol className="mt-16 border-t border-ink">
            {approachSteps.map((s, i) => (
              <Reveal as="li" key={s.number} delay={0.03} className="grid gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-10">
                <span className="serif-accent text-5xl leading-none text-bronze md:col-span-2 md:text-6xl">{s.number}</span>
                <h3 className="text-2xl md:col-span-4">{s.title}</h3>
                <p className="text-muted-text md:col-span-6">{s.text}</p>
                <span className="sr-only">Step {i + 1} of {approachSteps.length}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="themes-h" className="section bg-stone">
        <div className="container-eqns grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading eyebrow="What guides us" title={<span id="themes-h">Seven things we care about.</span>} />
              <Reveal className="mt-10 hidden lg:block"><SmartImage image={images.facade} ratio="4 / 5" sizes="30vw" /></Reveal>
            </div>
          </div>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-8">
            {approachThemes.map((t, i) => (
              <Reveal key={t.title} delay={(i % 2) * 0.06}><PrincipleCard number={String(i + 1).padStart(2, '0')} title={t.title} text={t.text} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Let’s talk about your property." text="Share what you are planning and we will discuss how EQNS can help. Scope, timing and costs are agreed with you for each project." />
    </>
  )
}
