import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Layers, ExternalLink, Github, FileText, ChevronDown } from 'lucide-react'
import { PROJECTS, PERSONAL } from '../data/portfolio'

const BASE = import.meta.env.BASE_URL

const linkKind = (url = '') => {
  if (url.includes('github.com')) return { badge: 'GITHUB', action: 'Buka repository' }
  if (/drive\.google\.com|\.pdf($|\?)/i.test(url)) return { badge: 'PDF', action: 'Buka PDF' }
  return { badge: 'ARTIKEL', action: 'Buka artikel' }
}

// Id file dari tautan Google Drive (…/d/FILE_ID/view atau …?id=FILE_ID)
const driveId = (url = '') => url.match(/\/d\/([\w-]+)/)?.[1] || url.match(/[?&]id=([\w-]+)/)?.[1] || null

// 1) gambar sendiri di /public/previews  2) thumbnail otomatis halaman pertama PDF di Google Drive
function previewSrc(project) {
  if (project.preview) return `${BASE}previews/${project.preview}`
  const id = driveId(project.link)
  return id ? `https://drive.google.com/thumbnail?id=${id}&sz=w1000` : null
}

function Thumb({ project }) {
  const [failed, setFailed] = useState(false)
  const src = previewSrc(project)
  const kind = linkKind(project.link)

  const body = (
    <>
      {src && !failed ? (
        <img
          src={src}
          alt={`Pratinjau ${project.title}`}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-5xl bg-gradient-to-br from-accent-500/15 to-coral-500/10" aria-hidden="true">
          {project.icon}
        </div>
      )}
      {project.link && (
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-ink-900/80 border border-slate-700/40 font-mono text-[10px] text-accent-400">
          {kind.badge}
        </span>
      )}
    </>
  )

  const cls = 'relative block aspect-[2/1] overflow-hidden bg-ink-700 border-b border-slate-700/30'
  return project.link ? (
    <a href={project.link} target="_blank" rel="noreferrer" className={cls} aria-label={`${kind.action}: ${project.title}`} tabIndex={-1}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  )
}

// Studi kasus ringkas: tampil hanya untuk bagian yang datanya diisi
function CaseStudy({ project }) {
  const [open, setOpen] = useState(false)
  const parts = [
    ['Konteks', project.context],
    ['Pendekatan', project.approach],
    ['Hasil', project.result],
  ].filter(([, v]) => v)
  if (!parts.length) return null

  return (
    <div className="mb-5">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 text-xs font-600 text-accent-400 hover:text-accent-300 transition-colors"
      >
        Studi kasus
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.dl
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-3 pl-3 border-l-2 border-accent-500/30">
              {parts.map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-[10px] tracking-widest text-coral-400 uppercase">{k}</dt>
                  <dd className="text-slate-400 text-sm leading-relaxed mt-0.5">{v}</dd>
                </div>
              ))}
            </div>
          </motion.dl>
        )}
      </AnimatePresence>
    </div>
  )
}

function ProjectCard({ project }) {
  const kind = linkKind(project.link)
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35 }}
      className="glass glass-hover card-lift rounded-2xl overflow-hidden group flex flex-col"
    >
      <Thumb project={project} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {project.category && (
            <span className="px-2.5 py-0.5 rounded-full bg-accent-500/10 border border-accent-500/25 text-[11px] font-mono text-accent-400">
              {project.category}
            </span>
          )}
          <span className="px-2.5 py-0.5 rounded-full bg-coral-500/10 border border-coral-500/25 text-[11px] font-mono text-coral-400">
            {project.status}
          </span>
        </div>

        <h3 className="font-display font-700 text-base text-slate-100 leading-snug mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

        <CaseStudy project={project} />

        <div className="mt-auto flex items-end justify-between gap-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            {project.tech.map((t) => (
              <span key={t} className="px-2 py-0.5 bg-ink-700/80 border border-slate-700/40 rounded-md text-xs font-mono text-slate-400">
                {t}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 text-xs font-600 text-slate-300 hover:text-accent-400 transition-colors"
            >
              {kind.action}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('Semua')

  const categories = useMemo(() => {
    const names = [...new Set(PROJECTS.map((p) => p.category).filter(Boolean))]
    return ['Semua', ...names]
  }, [])
  const shown = filter === 'Semua' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)
  const countOf = (c) => (c === 'Semua' ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length)

  return (
    <section id="projects" className="section-base relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-accent-500/4 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-10" data-reveal="right">
          <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
            <Layers className="w-5 h-5 text-accent-400" />
          </div>
          <div>
            <p className="font-mono text-xs text-accent-500 tracking-widest mb-0.5">05 / PROJECTS</p>
            <h2 className="font-display font-700 text-3xl text-slate-100">Proyek</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-accent-500/25 to-transparent ml-4" />
        </div>

        {/* Filter kategori */}
        {categories.length > 2 && (
          <div role="group" aria-label="Filter proyek" className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-500 border transition-colors ${
                  filter === c
                    ? 'bg-accent-600 border-accent-600 text-white'
                    : 'border-slate-700/50 text-slate-400 hover:text-slate-100 hover:border-accent-500/40'
                }`}
              >
                {c} <span className="opacity-70 font-mono text-xs ml-1">{countOf(c)}</span>
              </button>
            ))}
          </div>
        )}

        <motion.div layout className="grid md:grid-cols-2 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-10" data-reveal="up">
          <a href={PERSONAL.github} target="_blank" rel="noreferrer" className="btn-outline">
            <Github className="w-4 h-4" />
            Lihat semua di GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
