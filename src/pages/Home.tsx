import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { SEOHead } from '../components/SEOHead'
import { seo } from '../data/seo'
import { images } from '../data/images'
import { services } from '../data/services'
import { principles, clientCategories } from '../data/content'
import { Button, TextLink } from '../components/Button'
import { SmartImage } from '../components/SmartImage'
import { SectionHeading } from '../components/SectionHeading'
import { BrandPillars } from '../components/BrandPillars'
import { ServiceGrid } from '../components/ServiceGrid'
import { PrincipleCard } from '../components/PrincipleCard'
import { ClientCategoryCard } from '../components/ClientCategoryCard'
import { CTASection } from '../components/CTASection'
import { Reveal } from '../components/Reveal'

function Hero() {
  const reduce = useReducedMotion()
  const item = (d: number) => reduce ? {} : { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d, ease: [0.25, 1, 0.5, 1] as const } }
  return (
    <section aria-labelledby="hero-heading" className="on-dark relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <SmartImage image={images.hero} fill eager sizes="100vw" position="60% center" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" aria-hidden="true" />
      <div className="container-eqns relative pb-24 pt-[calc(var(--header-h)+5rem)] md:pb-28">
        <div className="max-w-3xl">
          <motion.p {...item(0.05)} className="eyebrow mb-6">Construction &amp; Property Management</motion.p>
          <motion.h1 {...item(0.15)} id="hero-heading" className="display-xl !text-white">
            The Right Elements.<br />
            <span className="serif-accent font-normal text-champagne">The Right Results.</span>
          </motion.h1>
          <motion.p {...item(0.3)} className="lead mt-7 max-w-xl">
            From construction and refurbishment to ongoing property management, EQNS brings quality, structure, and dependable service together to protect and improve your property.
          </motion.p>
          <motion.div {...item(0.45)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to="/services" variant="accent" arrow>Explore Our Services</Button>
            <Button to="/contact" variant="outline-light">Discuss a Project</Button>
          </motion.div>
        </div>
      </div>
      <a href="#intro" aria-label="Scroll to introduction" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white md:flex">
        Scroll
        <ArrowDown size={16} aria-hidden="true" className="text-champagne" />
      </a>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <SEOHead {...seo.home} />
      <Hero />

      {/* Brand introduction */}
      <section id="intro" aria-labelledby="intro-heading" className="section">
        <div className="container-eqns grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-5">Welcome to EQNS</p>
            <h2 id="intro-heading" className="display-lg">Built on Quality. <span className="serif-accent font-normal text-bronze">Managed with Precision.</span></h2>
            <p className="lead mt-6">
              EQNS brings together construction expertise, property maintenance, refurbishment, and management to help property owners maintain standards, improve performance, and protect long-term value.
            </p>
            <BrandPillars className="mt-10" />
            <div className="mt-10"><TextLink to="/about">Discover EQNS</TextLink></div>
          </Reveal>
          <Reveal delay={0.1} className="relative lg:col-span-6">
            <SmartImage image={images.interior} ratio="4 / 5" sizes="(min-width: 1024px) 45vw, 100vw" />
            <div className="absolute -bottom-5 -left-5 -z-10 hidden h-2/3 w-2/3 border border-champagne md:block" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section aria-labelledby="services-heading" className="section bg-stone">
        <div className="container-eqns">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="What we do" title={<span id="services-heading">Integrated Property Services.</span>} text="Practical expertise and organised delivery for every stage of your property’s lifecycle." />
            <div className="hidden md:block"><TextLink to="/services">View All Services</TextLink></div>
          </div>
          <div className="mt-12 md:mt-16"><ServiceGrid items={services} /></div>
          <div className="mt-12 text-center md:hidden"><Button to="/services" variant="outline" arrow>View All Services</Button></div>
        </div>
      </section>

      {/* About */}
      <section aria-labelledby="about-heading" className="section">
        <div className="container-eqns grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5 lg:pt-16">
            <SmartImage image={images.architecture} ratio="3 / 4" sizes="(min-width: 1024px) 40vw, 100vw" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="eyebrow mb-5">About EQNS</p>
            <h2 id="about-heading" className="display-lg max-w-2xl">The Right Elements <span className="serif-accent font-normal text-bronze">Make the Difference.</span></h2>
            <div className="mt-8 grid gap-6 text-muted-text md:grid-cols-2 md:gap-10">
              <p>Successful property projects depend on more than construction alone. They require quality workmanship, effective planning, skilled people, clear communication, and structured management working together.</p>
              <p>EQNS aims to be a dependable partner that understands both the physical condition of a property and the importance of managing it effectively over time.</p>
            </div>
            <figure className="mt-10 border-l-2 border-champagne pl-6">
              <blockquote className="serif-accent text-2xl leading-snug text-ink md:text-3xl">Equilibrium. Quality. Network. Structure.</blockquote>
              <figcaption className="mt-3 text-[0.8125rem] uppercase tracking-[0.16em] text-muted-text">The four principles behind the name</figcaption>
            </figure>
            <div className="mt-10"><TextLink to="/about">More About EQNS</TextLink></div>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section aria-labelledby="approach-heading" className="on-dark section bg-ink">
        <div className="container-eqns">
          <SectionHeading dark eyebrow="Our approach" title={<span id="approach-heading">A More Considered Approach to Property.</span>} />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.number} delay={(i % 3) * 0.06}><PrincipleCard {...p} dark /></Reveal>
            ))}
          </div>
          <div className="mt-14"><TextLink to="/our-approach">Explore Our Approach</TextLink></div>
        </div>
      </section>

      {/* Who we work with */}
      <section aria-labelledby="clients-heading" className="section">
        <div className="container-eqns">
          <SectionHeading eyebrow="Who we work with" title={<span id="clients-heading">Supporting the People Behind Every Property.</span>} />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {clientCategories.map((c, i) => (
              <Reveal key={c.id} delay={(i % 3) * 0.06}><ClientCategoryCard category={c} index={i} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
