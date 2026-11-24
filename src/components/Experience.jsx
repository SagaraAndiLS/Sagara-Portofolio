import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Users, ChevronDown, ChevronUp, Calendar, MapPin } from 'lucide-react'
import { ORGANIZATIONS, PROFESSIONAL_EXPERIENCE } from '../data/portfolio'

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
    <div className="flex flex-wrap gap-3 mt-2">
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

function ColumnTitle({ icon: Icon, title, note }) {
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
  return (
    <motion.div {...fadeUp(delay)} className="glass glass-hover rounded-xl border border-slate-700/30 p-5">
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
        </div>
      </div>

      {item.metrics?.length > 0 && (
        <dl className="mt-4 grid grid-cols-3 gap-2">
          {item.metrics.map(({ value, label }) => (
            <div key={label} className="rounded-xl bg-ink-700/70 border border-slate-700/30 px-3 py-2.5">
              <dt className="font-display font-800 text-base text-accent-400 leading-none">{value}</dt>
              <dd className="text-[10px] text-slate-500 mt-1.5 leading-snug">{label}</dd>
            </div>
          ))}
        </dl>
      )}

      {item.points?.length > 0 && (
        <ul className="mt-4 space-y-1.5 pl-3 border-l border-accent-500/20">
          {item.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-500 mt-1.5 shrink-0" />
              <span className="text-slate-400 text-xs leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      )}
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
  // Without professional entries, the organizational list simply takes the full width.
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

        <div className={hasPro ? 'grid lg:grid-cols-2 gap-10 items-start' : ''}>
          {hasPro && (
            <div>
              <ColumnTitle
                icon={Briefcase}
                title="Pengalaman Profesional"
                note="Magang, pekerjaan, dan peran berbasis proyek"
              />
              <div className="space-y-4">
                {PROFESSIONAL_EXPERIENCE.map((item, i) => (
                  <ProCard key={`${item.role}-${i}`} item={item} delay={i * 0.08} />
                ))}
              </div>
            </div>
          )}

          <div>
            <ColumnTitle
              icon={Users}
              title="Pengalaman Organisasi"
              note="Kepemimpinan dan keterlibatan komunitas"
            />
            <div className={hasPro ? 'space-y-4' : 'grid sm:grid-cols-2 gap-4'}>
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
