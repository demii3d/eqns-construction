import { SEOHead } from '../components/SEOHead'
import { PageHero } from '../components/PageHero'
import { Button } from '../components/Button'
import { images } from '../data/images'
import { seo } from '../data/seo'

export default function NotFound() {
  return (
    <>
      <SEOHead {...seo.notFound} noindex />
      <PageHero
        eyebrow="Error 404"
        title="This page could not be found."
        intro="The page may have moved or the address may be incorrect. Try one of the links below."
        image={images.towers}
        actions={<><Button to="/" variant="accent" arrow>Back to Home</Button><Button to="/services" variant="outline-light">View Services</Button></>}
      />
    </>
  )
}
