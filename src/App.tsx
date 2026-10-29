import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './layouts/SiteLayout'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const OurApproach = lazy(() => import('./pages/OurApproach'))
const WhoWeWorkWith = lazy(() => import('./pages/WhoWeWorkWith'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))
const PrivacyPolicy = lazy(() => import('./pages/Legal').then((m) => ({ default: m.PrivacyPolicy })))
const CookiePolicy = lazy(() => import('./pages/Legal').then((m) => ({ default: m.CookiePolicy })))

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-ink" aria-hidden="true" />}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServicePage />} />
          <Route path="our-approach" element={<OurApproach />} />
          <Route path="who-we-work-with" element={<WhoWeWorkWith />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
