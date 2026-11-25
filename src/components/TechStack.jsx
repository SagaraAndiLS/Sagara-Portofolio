import { motion } from 'framer-motion'
import { FaDatabase, FaGithub } from 'react-icons/fa6'
import { PiMicrosoftExcelLogoFill, PiMicrosoftWordLogoFill, PiMicrosoftPowerpointLogoFill } from 'react-icons/pi'
import { SiPython, SiPandas, SiScipy, SiScikitlearn, SiR, SiGooglecolab, SiSap, SiMendeley } from 'react-icons/si'
import { LogoDefs, PowerBIIcon, TableauIcon, LookerStudioIcon, AccessIcon, CanvaIcon, PythonIcon } from './TechLogos'

// icon = komponen ikon, ATAU img = nama file di public/logos/ (logo resmi)
// color = warna cahaya kartu (dan warna ikon untuk ikon satu warna)
const PythonLogo = (p) => <PythonIcon Si={SiPython} {...p} />

const GROUPS = [
  {
    title: 'Visualisasi & BI',
    items: [
      { name: 'Power BI', icon: PowerBIIcon, color: '#F2C811' },
      { name: 'Looker Studio', icon: LookerStudioIcon, color: '#A78BFA' },
      { name: 'Tableau', icon: TableauIcon, color: '#E97627' },
      { name: 'SAP Analytics Cloud', icon: SiSap, color: '#0FAAFF' },
      { name: 'DAX & Power Query', icon: FaDatabase, color: '#F2C811' },
    ],
  },
  {
    title: 'Programming & Analisis',
    items: [
      { name: 'Python', icon: PythonLogo, color: '#FFD43B' },
      { name: 'R Studio', icon: SiR, color: '#3B8BE0' },
      { name: 'Pandas', icon: SiPandas, color: '#8F86E8' },
      { name: 'SciPy', icon: SiScipy, color: '#6C8EEF' },
      { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'Google Colab', icon: SiGooglecolab, color: '#F9AB00' },
    ],
  },
  {
    title: 'Office & Riset',
    items: [
      { name: 'Excel', icon: PiMicrosoftExcelLogoFill, color: '#21A366' },
      { name: 'Word', icon: PiMicrosoftWordLogoFill, color: '#4A7FD6' },
      { name: 'PowerPoint', icon: PiMicrosoftPowerpointLogoFill, color: '#E8663D' },
      { name: 'Access', icon: AccessIcon, color: '#C6414C' },
      { name: 'Mendeley', icon: SiMendeley, color: '#E5484D' },
    ],
  },
  {
    title: 'Kolaborasi & Desain',
    items: [
      { name: 'GitHub', icon: FaGithub, color: '#E6EDF3' },
      { name: 'Canva', icon: CanvaIcon, color: '#00C4CC' },
    ],
  },
]

// Soft skills mengikuti CV. "bukti" muncul saat kursor diarahkan ke label.
const SOFT_SKILLS = [
  { name: 'Kepemimpinan', bukti: 'Ketua Umum Himpunan Mahasiswa Sains Data' },
  { name: 'Komunikasi', bukti: 'Membimbing mahasiswa praktikum dan mendampingi tamu pada acara kampus' },
  { name: 'Kerja Tim', bukti: 'KPR, Ikopin Badminton Club, dan kepanitiaan kampus' },
  { name: 'Koordinasi Acara', bukti: 'Korps Protokoler Mahasiswa: tata tempat dan koordinasi panitia' },
  { name: 'Mentoring', bukti: 'Asisten Laboratorium: membimbing sekitar 9 mahasiswa' },
  { name: 'Problem Solving', bukti: 'Analisis bottleneck produksi saat magang di SI&OP' },
]

const BASE = import.meta.env.BASE_URL

function Tile({ name, icon: Icon, img, color, delay }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
    >
      <div className="tech-tile" style={{ '--c': color }}>
        <span className="tech-icon">
          {img ? <img src={`${BASE}logos/${img}`} alt="" className="w-9 h-9 object-contain" /> : <Icon className="w-9 h-9" />}
        </span>
        <span className="text-xs font-500 text-slate-200 text-center leading-snug px-1">{name}</span>
      </div>
    </motion.li>
  )
}

export default function TechStack() {
  return (
    <div data-reveal="up" data-delay="200" className="space-y-12">
      <LogoDefs />

      <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10">
        {GROUPS.map(({ title, items }) => (
          <div key={title}>
            <h3 className="font-mono text-xs tracking-widest uppercase text-slate-400 mb-4">{title}</h3>
            <ul className="flex flex-wrap gap-3.5">
              {items.map((it, i) => (
                <Tile key={it.name} {...it} delay={i * 0.05} />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-mono text-xs tracking-widest uppercase text-slate-400 mb-4">Soft Skills</h3>
        <ul className="flex flex-wrap gap-3">
          {SOFT_SKILLS.map(({ name, bukti }, i) => (
            <motion.li
              key={name}
              title={bukti}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              className="rounded-full border border-coral-500/25 px-4 py-1.5 text-sm font-500 text-coral-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-coral-500/60"
              style={{ background: 'rgb(var(--ink-800))', boxShadow: 'var(--card-shadow)' }}
            >
              {name}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
