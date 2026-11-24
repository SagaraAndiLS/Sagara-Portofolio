import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { GMAIL_LINK } from '../data/portfolio'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang', href: '#about' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Pendidikan', href: '#education' },
  { label: 'Sertifikasi', href: '#certifications' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('#hero')
  const [open, setOpen] = useState(false)

  // Bagian yang sedang berada di tengah layar dianggap aktif (tanpa membaca layout tiap scroll)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navItems.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1))
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-3 inset-x-0 z-50 px-3 sm:px-6"
    >
      <nav
        aria-label="Navigasi utama"
        className="glass mx-auto max-w-6xl rounded-full pl-3 pr-2.5 h-14 flex items-center justify-between gap-3"
      >
        {/* Logo monogram */}
        <a href="#hero" onClick={(e) => go(e, '#hero')} className="flex items-center gap-2.5 group" aria-label="Ke atas">
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-600 to-coral-500 flex items-center justify-center font-display font-800 text-sm text-white">
            SA
          </span>
          <span className="font-display font-700 text-sm text-slate-100 hidden sm:block">
            Sagara<span className="text-coral-400">.</span>
          </span>
        </a>

        {/* Menu desktop */}
        <ul className="hidden xl:flex items-center gap-5">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => go(e, href)}
                aria-current={active === href ? 'true' : undefined}
                className={`nav-link ${active === href ? 'active' : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={GMAIL_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !py-2 !px-4 !text-xs hidden sm:inline-flex"
          >
            Hubungi Saya
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            className="xl:hidden w-9 h-9 rounded-full border border-slate-700/50 flex items-center justify-center text-slate-200 hover:text-accent-400 transition-colors"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="xl:hidden glass mx-auto max-w-6xl mt-2 rounded-3xl p-3"
          >
            <ul className="grid grid-cols-2 gap-1">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => go(e, href)}
                    className={`block py-2.5 px-4 rounded-2xl text-sm font-500 transition-colors ${
                      active === href ? 'text-accent-400 bg-accent-500/10' : 'text-slate-300 hover:text-accent-400'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a href={GMAIL_LINK} target="_blank" rel="noreferrer" className="btn-primary w-full mt-3 !text-sm">
              Hubungi Saya
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
