import { useEffect, lazy, Suspense } from 'react'
import { initReveal } from './lib/reveal'

import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Experience from './components/Experience'
const Contact = lazy(() => import('./components/Contact')) // berisi form + Supabase + SweetAlert: dimuat belakangan
import Footer from './components/Footer'
import Divider from './components/Divider'

export default function App() {
  useEffect(() => initReveal(), [])

  return (
    <div className="relative min-h-screen bg-ink-900">
      <a href="#main" className="skip-link">Lompat ke konten utama</a>
      <ScrollProgress />
      <Navbar />

      <main id="main">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Education />
        <Divider />
        <Certifications />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Suspense fallback={<div id="contact" className="min-h-[24rem]" />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
