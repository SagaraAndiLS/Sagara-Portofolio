import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronRight, MapPin, Download } from 'lucide-react'
import { PERSONAL, GMAIL_LINK } from '../data/portfolio'
import HeroDashboard from './HeroDashboard'

const BASE = import.meta.env.BASE_URL
const CV_FILE = 'CV-Sagara-Andi-Ladzuardi-Suwarsa.pdf'
const ROLES = ['Data Analyst', 'Visualisasi Data', 'Pemodelan Statistik']

// Kata yang berganti dengan transisi halus (lebih ringan dari efek mengetik)
function RotatingRole() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % ROLES.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <span className="relative inline-grid" aria-live="off">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[i]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35 }}
          className="gradient-text font-display font-700"
        >
          {ROLES[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const go = (id) => (e) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const fade = (delay) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

export default function Hero() {
  const socials = [
    { icon: Github, href: PERSONAL.github, label: 'GitHub' },
    { icon: Linkedin, href: PERSONAL.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: GMAIL_LINK, label: 'Email' },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Latar: titik halus + dua cahaya lembut (tanpa canvas, jadi ringan) */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(rgb(var(--accent-500) / 0.28) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at 50% 40%, #000 25%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, #000 25%, transparent 75%)',
        }}
      />
      <div className="absolute -top-32 -left-24 w-[34rem] h-[34rem] rounded-full bg-accent-500/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-coral-500/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-16">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-14 items-center">
          {/* Kiri: perkenalan */}
          <div className="space-y-6">
            <motion.div
              {...fade(0.1)}
              className="inline-flex items-center gap-2.5 rounded-full border border-slate-700/40 bg-ink-800/70 px-4 py-1.5"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-60" />
                <span className="relative w-2 h-2 rounded-full bg-success" />
              </span>
              <span className="text-xs font-500 text-slate-300">Terbuka untuk magang & posisi entry-level</span>
            </motion.div>

            <motion.h1
              {...fade(0.2)}
              className="font-display font-800 text-4xl sm:text-5xl xl:text-6xl leading-[1.08] tracking-tight text-slate-50 text-balance"
            >
              Sagara Andi
              <br />
              <span className="gradient-text">Ladzuardi Suwarsa</span>
            </motion.h1>

            <motion.p {...fade(0.3)} className="font-display text-xl sm:text-2xl text-slate-300 h-9">
              <RotatingRole />
            </motion.p>

            <motion.p {...fade(0.4)} className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-xl">
              {PERSONAL.tagline}. Lulusan S1 Sains Data yang terbiasa mengolah data operasional,
              membangun dashboard, dan membuat model statistik.
            </motion.p>

            <motion.div {...fade(0.5)} className="flex flex-wrap gap-3 pt-1">
              <a href="#projects" onClick={go('projects')} className="btn-primary">
                Lihat Proyek <ChevronRight className="w-4 h-4" />
              </a>
              <a href={`${BASE}${CV_FILE}`} download className="btn-outline">
                <Download className="w-4 h-4" /> Unduh CV
              </a>
            </motion.div>

            <motion.div {...fade(0.6)} className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
              <div className="flex items-center gap-2.5">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    title={label}
                    className="w-10 h-10 rounded-full border border-slate-700/50 bg-ink-800/60 flex items-center justify-center text-slate-300 hover:text-accent-400 hover:border-accent-500/50 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <span className="flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-coral-400" />
                {PERSONAL.location}
              </span>
            </motion.div>
          </div>

          {/* Kanan: dashboard interaktif */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
