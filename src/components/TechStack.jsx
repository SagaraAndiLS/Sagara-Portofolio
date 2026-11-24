import { motion } from 'framer-motion'
import { FaDatabase } from 'react-icons/fa6'
import { TbSql } from 'react-icons/tb'
import { PiMicrosoftExcelLogoFill, PiMicrosoftWordLogoFill, PiMicrosoftPowerpointLogoFill } from 'react-icons/pi'
import { SiPython, SiPandas, SiScipy, SiScikitlearn, SiR, SiGooglecolab, SiSap, SiMendeley } from 'react-icons/si'
import { PowerBIIcon, TableauIcon, LookerStudioIcon } from './TechLogos'

// icon = komponen ikon, ATAU img = nama file di public/logos/ (logo resmi)
const GROUPS = [
  {
    title: 'Data & Database',
    items: [
      { name: 'SQL', icon: TbSql, color: '#38BDF8' }, // hapus baris ini jika belum dipakai
      { name: 'Microsoft Excel', icon: PiMicrosoftExcelLogoFill, color: '#21A366' },
      { name: 'Python', icon: SiPython, color: '#4B8BBE' },
      { name: 'Pandas', icon: SiPandas, color: '#8F86E8' },
      { name: 'SciPy', icon: SiScipy, color: '#6C8EEF' },
      { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'R Studio', icon: SiR, color: '#3B8BE0' },
      { name: 'Google Colab', icon: SiGooglecolab, color: '#F9AB00' },
    ],
  },
  {
    title: 'Visualisasi & BI',
    items: [
      { name: 'Power BI', icon: PowerBIIcon, color: '#F2C811' },
      { name: 'Tableau', icon: TableauIcon, color: '#E97627' },
      { name: 'Looker Studio', icon: LookerStudioIcon, color: '#4285F4' },
      { name: 'SAP Analytics Cloud', icon: SiSap, color: '#0FAAFF' },
      { name: 'DAX & Power Query', icon: FaDatabase, color: '#F2C811' },
    ],
  },
  {
    title: 'Office & Riset',
    items: [
      { name: 'Word', icon: PiMicrosoftWordLogoFill, color: '#4A7FD6' },
      { name: 'PowerPoint', icon: PiMicrosoftPowerpointLogoFill, color: '#E8663D' },
      { name: 'Mendeley', icon: SiMendeley, color: '#E5484D' },
    ],
  },
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
          {img ? <img src={`${BASE}logos/${img}`} alt="" className="w-7 h-7 object-contain" /> : <Icon className="w-7 h-7" />}
        </span>
        <span className="text-xs font-500 text-slate-300 text-center leading-snug px-1">{name}</span>
      </div>
    </motion.li>
  )
}

export default function TechStack() {
  return (
    <div data-reveal="up" data-delay="200" className="space-y-10">
      <p className="font-mono text-xs text-slate-500 text-center tracking-widest">TECH STACK</p>
      {GROUPS.map(({ title, items }) => (
        <div key={title}>
          <h3 className="font-display font-700 text-sm text-slate-200 mb-4 flex items-center gap-3">
            {title}
            <span className="flex-1 h-px bg-gradient-to-r from-accent-500/25 to-transparent" />
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {items.map((it, i) => (
              <Tile key={it.name} {...it} delay={i * 0.05} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
