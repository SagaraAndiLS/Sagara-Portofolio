import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Users, ChevronDown, ChevronUp, Calendar, MapPin, ExternalLink } from 'lucide-react'
import { ORGANIZATIONS, PROFESSIONAL_EXPERIENCE } from '../data/portfolio'

const BASE = import.meta.env.BASE_URL

// ══ ISI BUKTI PENGALAMAN DI SINI ══
// Kunci di kiri = role di src/data/portfolio.js (beda tanda hubung/spasi/huruf besar tidak masalah)
//   link      : link bukti (sertifikat/surat keterangan, misal Google Drive). Kosong = tombol tidak muncul.
//   linkLabel : tulisan di tombol
//   photos    : daftar nama file foto yang ada di folder public/ (tulis nama filenya saja,
//               tanpa "public/"). Kosong = tidak ada foto.
const PRO_PROOF = {
  'Intern - Departemen SI&OP': {
    link: '',
    linkLabel: 'Lihat bukti magang',
    photos: [],
  },
  'Asisten Laboratorium': {
    link: '',
    linkLabel: 'Lihat bukti asisten lab',
    photos: [],
  },
  'Korps Protokoler Mahasiswa (KPM)': {
    link: '', // KPM tidak ada sertifikat, cukup foto
    linkLabel: '',
    photos: [], // contoh: ['KPM 1.jpg', 'KPM 2.jpg']
  },
}

// Samakan bentuk teks supaya pencocokan kunci tidak rewel
const norm = (s = '') =>
  s
    .normalize('NFKC')
    .replace(/[\u2010-\u2015\u2212]/g, '-')
    .replace(/[\s\u00a0\u200b]+/g, ' ')
    .trim()
    .toLowerCase()

const PROOF_BY_KEY = Object.fromEntries(
  Object.entries(PRO_PROOF).map(([role, proof]) => [norm(role), proof])
)
const getProof = (role) => PROOF_BY_KEY[norm(role)] ?? {}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.45 },
})

function IconBox({ children }) {
  return (
    <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0 text-xl">
      {children}
    </div>
  )
}

function Meta({ period, location }) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1.5 mt-2">
      <div className="flex items-center gap-1.5 text-slate-500 text-xs">
        <Calendar className="w-3 h-3" />
        <span className="font-mono">{period}</span>
      </div>
      {location && (
        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
          <MapPin className="w-3 h-3" />
          <span>{location}</span>
        </div>
      )}
    </div>
  )
}

function SectionTitle({ icon: Icon, title, note }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-2.5">
        <Icon className="w-4 h-4 text-accent-400" />
        <h3 className="font-display font-600 text-lg text-slate-100">{title}</h3>
      </div>
      {note && <p className="text-slate-500 text-xs mt-1 ml-[26px]">{note}</p>}
    </div>
  )
}

function ProCard({ item, delay }) {
  const proof = getProof(item.role)
  const photos = proof.photos ?? []

  return (
    <motion.div {...fadeUp(delay)} className="glass glass-hover rounded-xl border border-slate-700/30 p-5 sm:p-6">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-8">
        {/* Kiri: identitas */}
        <div className="flex items-start gap-4">
          <IconBox>{item.icon || '💼'}</IconBox>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="font-display font-600 text-sm text-slate-100 leading-tight">{item.role}</h4>
              {item.type && (
                <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-coral-500/20 bg-coral-500/10 text-coral-400">
                  {item.type}
                </span>
              )}
            </div>
            <p className="text-accent-400 text-xs mt-0.5 font-medium">{item.company}</p>
            <Meta period={item.period} location={item.location} />

            {proof.link && (
              <a
                href={proof.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-accent-500/30 bg-accent-500/10 px-3 py-1.5 text-xs font-600 text-accent-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/60"
              >
                {proof.linkLabel || 'Lihat bukti'}
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Kanan: deskripsi + foto */}
        <div className="min-w-0">
          {item.metrics?.length > 0 && (
            <dl className="mb-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {item.metrics.map(({ value, label }) => (
                <div key={label} className="rounded-xl bg-ink-700/70 border border-slate-700/30 px-3 py-2.5">
                  <dt className="font-display font-800 text-base text-accent-400 leading-none">{value}</dt>
                  <dd className="text-[10px] text-slate-500 mt-1.5 leading-snug">{label}</dd>
                </div>
              ))}
            </dl>
          )}

          {item.points?.length > 0 && (
            <ul className="space-y-2 pl-3 border-l border-accent-500/20">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent-500 mt-2 shrink-0" />
                  <span className="text-slate-400 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          )}

          {photos.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-3">
              {photos.map((file) => {
                const src = `${BASE}${encodeURI(file)}`
                return (
                  <a
                    key={file}
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-xl border border-slate-700/40 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/50"
                    style={{ boxShadow: 'var(--card-shadow)' }}
                    aria-label={`Buka foto ${item.role}`}
                  >
                    <img
                      src={src}
                      alt={`Dokumentasi ${item.role}`}
                      loading="lazy"
                      draggable={false}
                      className="h-28 sm:h-32 w-auto max-w-[16rem] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function OrgCard({ org, delay }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div {...fadeUp(delay)} className="glass glass-hover rounded-xl border border-slate-700/30 p-5">
      <div className="flex items-start gap-4">
        <IconBox>{org.icon}</IconBox>
        <div className="flex-1 min-w-0">
          <h4 className="font-display font-600 text-sm text-slate-100 leading-tight">{org.role}</h4>
          <p className="text-accent-400 text-xs mt-0.5 font-medium">{org.org}</p>
          <Meta period={org.period} location={org.location} />
        </div>
      </div>

      {org.events?.length > 0 && (
        <div className="mt-3">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-accent-400 transition-colors"
          >
            {open ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            {open ? 'Sembunyikan' : `Lihat ${org.events.length} kegiatan`}
          </button>

          {open && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-3 space-y-1.5 pl-3 border-l border-accent-500/20 overflow-hidden"
            >
              {org.events.map((event, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent-500 mt-1.5 shrink-0" />
                  <span className="text-slate-400 text-xs leading-relaxed">{event}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      )}
    </motion.div>
  )
}

export default function Experience() {
  const hasPro = PROFESSIONAL_EXPERIENCE.length > 0

  return (
    <section id="experience" className="section-base relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-accent-500/4 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-14" data-reveal="right">
          <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-accent-400" />
          </div>
          <div>
            <p className="font-mono text-xs text-accent-500 tracking-widest mb-0.5">06 / EXPERIENCE</p>
            <h2 className="font-display font-700 text-3xl text-slate-100">Pengalaman</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-accent-500/20 to-transparent ml-4" />
        </div>

        <div className="space-y-14">
          {/* Pengalaman profesional (lebar penuh) */}
          {hasPro && (
            <div>
              <SectionTitle
                icon={Briefcase}
                title="Pengalaman Profesional"
                note="Magang, pekerjaan, dan peran berbasis proyek"
              />
              <div className="space-y-5">
                {PROFESSIONAL_EXPERIENCE.map((item, i) => (
                  <ProCard key={`${item.role}-${i}`} item={item} delay={i * 0.08} />
                ))}
              </div>
            </div>
          )}

          {/* Pengalaman organisasi (di bawahnya) */}
          <div>
            <SectionTitle
              icon={Users}
              title="Pengalaman Organisasi"
              note="Kepemimpinan dan keterlibatan komunitas"
            />
            <div className="grid md:grid-cols-2 gap-4 items-start">
              {ORGANIZATIONS.map((org, i) => (
                <OrgCard key={`${org.role}-${i}`} org={org} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
