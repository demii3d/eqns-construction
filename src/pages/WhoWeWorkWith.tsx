import { SEOHead } from '../components/SEOHead'
import { PageHero } from '../components/PageHero'
import { ClientCategoryDetail } from '../components/ClientCategoryCard'
import { CTASection } from '../components/CTASection'
import { Reveal } from '../components/Reveal'
import { seo } from '../data/seo'
import { images } from '../data/images'
import { clientCategories } from '../data/content'

export default function WhoWeWorkWith() {
  return (
    <>
      <SEOHead {...seo.clients} />
      <PageHero
        eyebrow="Who we work with"
        title="Supporting the People Behind Every Property."
        intro="Owners, investors, businesses and professionals all approach property differently. EQNS adapts its support to what each of them needs."
        image={images.towers}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Who We Work With' }]}
      />
      <section className="section pb-0">
        <div className="container-eqns">
          <nav aria-label="Client categories" className="border-y border-line py-5">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {clientCategories.map((c) => (
                <li key={c.id}><a href={`#${c.id}`} className="text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-ink underline-offset-8 hover:text-bronze-text hover:underline">{c.title}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
      <section aria-label="Client categories in detail" className="section">
        <div className="container-eqns space-y-20 md:space-y-28">
          {clientCategories.map((c, i) => (
            <Reveal key={c.id}><ClientCategoryDetail category={c} index={i} /></Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  )
}
