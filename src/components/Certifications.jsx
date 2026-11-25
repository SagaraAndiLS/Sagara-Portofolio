import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { CERTIFICATIONS } from '../data/portfolio'

const BASE = import.meta.env.BASE_URL

// ══ ISI LINK & GAMBAR SERTIFIKAT DI SINI ══
// Judul di kiri harus sama persis dengan title di src/data/portfolio.js
//   link      : link sertifikat (kosong = tidak bisa diklik)
//   image     : nama file gambar di folder public/certs/ (kosong = tampil ikon)
//   glow      : warna cahaya kartu saat aktif (kode hex)
//   linkLabel : tulisan tombol link
const CERT_EXTRAS = {
  'Teknologi Informasi Dan Komunikasi - Microsoft Excel': {
    link: 'https://drive.google.com/file/d/1kpMhLfLwW_dmURGTfVYyVMnXy5vHR-uz/view?usp=drivesdk',
    image: '',
    glow: '#21A366',
    linkLabel: 'Lihat sertifikat (PDF)',
  },
  'Teknologi Informasi Dan Komunikasi - ASEAN Data Science Explorers: Enablement Session': {
    link: 'https://drive.google.com/file/d/1dRlEeVVHHhqZ1aOUXO9cXKzTDweFdehQ/view?usp=drivesdk',
    image: '',
    glow: '#0FAAFF',
    linkLabel: 'Lihat sertifikat (PDF)',
  },
  'TOEFL ITP (520)': {
    link: 'https://drive.google.com/file/d/1CN8FSXn7Wvnczq3mcBB7qFZJK6zTxOB3/view?usp=drivesdk',
    image: '',
    glow: '#F7704F',
    linkLabel: 'Lihat sertifikat (PDF)',
  },
}

const MAX_TOPICS = 4

function CertCard({ cert, offset, onSelect }) {
  const extra = CERT_EXTRAS[cert.title] ?? {}
  const glow = extra.glow ?? (cert.color === 'accent' ? '#818CF8' : '#FF8F73')
  const link = extra.link
  const abs = Math.abs(offset)
  const isActive = offset === 0
  const shownTopics = cert.topics.slice(0, MAX_TOPICS)
  const hiddenCount = cert.topics.length - shownTopics.length

  const linkProps = isActive
    ? { tabIndex: 0 }
    : { tabIndex: -1, style: { pointerEvents: 'none' } }

  return (
    <div className="absolute inset-x-0 top-4 flex justify-center pointer-events-none">
      <motion.div
        onClick={() => !isActive && onSelect()}
        initial={false}
        animate={{
          x: `${offset * 58}%`,
          scale: 1 - abs * 0.14,
          rotateY: -offset * 26,
          opacity: abs > 2 ? 0 : 1 - abs * 0.4,
          filter: `blur(${abs * 2.5}px)`,
        }}
        transition={{ type: 'spring', stiffness: 140, damping: 20 }}
        style={{
          zIndex: 20 - abs,
          pointerEvents: abs > 2 ? 'none' : 'auto',
          cursor: isActive ? 'default' : 'pointer',
        }}
        className="w-[min(26rem,84vw)]"
        aria-hidden={!isActive}
      >
        <div
          className="flex flex-col h-[31rem] rounded-2xl overflow-hidden transition-[box-shadow,border-color] duration-500"
          style={{
            background: 'rgb(var(--ink-800))',
            border: `1.5px solid ${
              isActive ? `color-mix(in srgb, ${glow} 75%, transparent)` : 'rgb(var(--slate-700) / 0.35)'
            }`,
            boxShadow: isActive
              ? `0 0 34px -4px color-mix(in srgb, ${glow} 55%, transparent), 0 26px 48px -22px rgb(0 0 0 / 0.55)`
              : 'var(--card-shadow)',
          }}
        >
          {/* Pratinjau sertifikat */}
          <div
            className="relative h-[14rem] shrink-0 overflow-hidden"
            style={{
              background: `linear-gradient(145deg, color-mix(in srgb, ${glow} 30%, rgb(var(--ink-800))), color-mix(in srgb, ${glow} 8%, rgb(var(--ink-800))))`,
            }}
          >
            {extra.image ? (
              <img
                src={`${BASE}certs/${extra.image}`}
                alt={`Sertifikat ${cert.title}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            ) : (
              <div className="w-full h-full grid place-items-center text-6xl">{cert.badge}</div>
            )}
            <span
              className="absolute top-3 left-3 rounded-md px-2.5 py-1 font-mono text-[0.65rem] tracking-widest"
              style={{
                background: 'rgb(0 0 0 / 0.55)',
                color: '#fff',
                border: `1px solid color-mix(in srgb, ${glow} 60%, transparent)`,
                backdropFilter: 'blur(4px)',
              }}
            >
              SERTIFIKAT
            </span>
          </div>

          {/* Isi kartu */}
          <div className="flex flex-col flex-1 p-5 min-h-0">
            <div className="flex items-start justify-between gap-3">
              <h3
                title={cert.title}
                className="font-display font-700 text-base text-slate-100 leading-snug line-clamp-2"
              >
                {cert.title}
              </h3>
              {cert.highlight && (
                <span
                  className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-mono"
                  style={{
                    color: glow,
                    border: `1px solid color-mix(in srgb, ${glow} 55%, transparent)`,
                    background: `color-mix(in srgb, ${glow} 12%, transparent)`,
                  }}
                >
                  Featured
                </span>
              )}
            </div>

            <p className="text-sm font-medium mt-1" style={{ color: glow }}>
              {cert.issuer}
            </p>

            <div className="flex items-center gap-2 text-slate-500 text-xs mt-3">
              <Calendar className="w-3 h-3" />
              <span className="font-mono">{cert.period}</span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 mt-3">
              {shownTopics.map((topic) => (
                <span
                  key={topic}
                  className="inline-block px-2.5 py-0.5 rounded text-xs font-mono"
                  style={{
                    color: glow,
                    border: `1px solid color-mix(in srgb, ${glow} 35%, transparent)`,
                    background: `color-mix(in srgb, ${glow} 10%, transparent)`,
                  }}
                >
                  {topic}
                </span>
              ))}
              {hiddenCount > 0 && (
                <span className="text-xs font-mono text-slate-500">+{hiddenCount}</span>
              )}
            </div>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                {...linkProps}
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-600 hover:underline underline-offset-4"
                style={{ color: glow, ...(linkProps.style ?? {}) }}
              >
                {extra.linkLabel ?? 'Lihat sertifikat'}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function ArrowButton({ onClick, disabled, label, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="grid place-items-center w-11 h-11 rounded-full border border-accent-500/30 text-accent-400 transition-all duration-300 enabled:hover:-translate-y-0.5 enabled:hover:border-accent-500/70 disabled:opacity-30 disabled:cursor-not-allowed"
      style={{ background: 'rgb(var(--ink-800))', boxShadow: 'var(--card-shadow)' }}
    >
      {children}
    </button>
  )
}

export default function Certifications() {
  const [active, setActive] = useState(0)
  const last = CERTIFICATIONS.length - 1

  const go = (i) => setActive(Math.max(0, Math.min(last, i)))

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') go(active - 1)
    if (e.key === 'ArrowRight') go(active + 1)
  }

  return (
    <section id="certifications" className="section-base relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-coral-500/4 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10" data-reveal="right">
          <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
            <Award className="w-5 h-5 text-accent-400" />
          </div>
          <div>
            <p className="font-mono text-xs text-accent-500 tracking-widest mb-0.5">04 / CERTIFICATIONS</p>
            <h2 className="font-display font-700 text-3xl text-slate-100">Pelatihan & Sertifikasi</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-accent-500/20 to-transparent ml-4" />
        </div>

        {/* Carousel */}
        <motion.div
          role="region"
          aria-roledescription="carousel"
          aria-label="Pelatihan dan sertifikasi"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPanEnd={(_, info) => {
            if (info.offset.x < -50) go(active + 1)
            else if (info.offset.x > 50) go(active - 1)
          }}
          className="relative h-[35rem] outline-none"
          style={{ perspective: '1400px', touchAction: 'pan-y' }}
        >
          {CERTIFICATIONS.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} offset={i - active} onSelect={() => go(i)} />
          ))}
        </motion.div>

        {/* Kontrol */}
        <div className="flex items-center justify-center gap-5 mt-2">
          <ArrowButton onClick={() => go(active - 1)} disabled={active === 0} label="Sebelumnya">
            <ChevronLeft className="w-5 h-5" />
          </ArrowButton>

          <div className="flex items-center gap-2.5">
            {CERTIFICATIONS.map((cert, i) => (
              <button
                key={cert.title}
                type="button"
                onClick={() => go(i)}
                aria-label={`Sertifikat ${i + 1}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-accent-400' : 'w-2 bg-slate-600/60 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <ArrowButton onClick={() => go(active + 1)} disabled={active === last} label="Berikutnya">
            <ChevronRight className="w-5 h-5" />
          </ArrowButton>
        </div>

        {/* Stats bar */}
        <motion.div
          data-reveal="up"
          data-delay="200"
          className="mt-12 glass rounded-xl border border-accent-500/10 p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { label: 'Total Sertifikat', value: String(CERTIFICATIONS.length), icon: '🏅' },
            { label: 'Jam Pelatihan', value: '250+', icon: '⏱️' },
            { label: 'Penyelenggara', value: String(new Set(CERTIFICATIONS.map((c) => c.issuer)).size), icon: '🖥️' },
            { label: 'Tahun Belajar', value: '4+', icon: '📅' },
          ].map(({ label, value, icon }) => (
            <div key={label}>
              <div className="text-2xl mb-1">{icon}</div>
              <div className="font-display font-700 text-2xl text-accent-400">{value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
