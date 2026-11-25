import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { STATS, SKILLS, PROJECTS } from '../data/portfolio'

// Semua angka di dashboard ini dihitung dari data/portfolio.js, jadi ikut berubah saat datanya diedit.
const MODES = [
  { id: 'skills', label: 'Keahlian' },
  { id: 'tools', label: 'Tools di proyek' },
]

function useChartData() {
  return useMemo(() => {
    const skills = (SKILLS || [])
      .slice(0, 3)
      .flatMap((c) => c.items || [])
      .sort((a, b) => b.level - a.level)
      .slice(0, 6)
      .map(({ name, level }) => ({
        name,
        value: level,
        text: `${level}%`,
        max: 100,
      }))

    const count = {}
    ;(PROJECTS || []).forEach((p) => {
      ;(p.tech || []).forEach((t) => {
        count[t] = (count[t] || 0) + 1
      })
    })

    const entries = Object.entries(count)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
    const top = entries[0]?.[1] || 1
    const tools = entries.map(([name, n]) => ({
      name,
      value: n,
      text: `${n} proyek`,
      max: top,
    }))

    return { skills, tools }
  }, [])
}

export default function HeroDashboard() {
  const [mode, setMode] = useState('skills')
  const [hover, setHover] = useState(null)
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const reduce = useReducedMotion()
  const data = useChartData()
  const rows = data[mode] || []

  const handleModeChange = (newMode) => {
    setMode(newMode)
    setHover(null)
  }

  return (
    <div ref={ref} className="glass rounded-3xl p-5 sm:p-6 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent-500/15 blur-3xl pointer-events-none" />

      {/* Judul dashboard */}
      <div className="relative flex items-center justify-between gap-3 mb-5">
        <div>
          <p className="font-mono text-[11px] tracking-widest text-accent-400">
            DASHBOARD PROFIL
          </p>
        </div>
        <span className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-slow" />
          dihitung dari data portofolio
        </span>
      </div>

      {/* KPI */}
      <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
        {(STATS || []).map(({ label, value, suffix, prefix, decimals }, i) => (
          <div
            key={label}
            className="rounded-2xl bg-ink-700/70 border border-slate-700/30 px-3.5 py-3"
          >
            <p className="font-display font-extrabold text-2xl leading-none text-slate-50">
              {prefix}
              {inView ? (
                <CountUp
                  end={value}
                  decimals={decimals || 0}
                  duration={reduce ? 0 : 1.8}
                  delay={reduce ? 0 : i * 0.1}
                />
              ) : (
                0
              )}
              {suffix && <span className="text-coral-400">{suffix}</span>}
            </p>
            <p className="text-[11px] text-slate-500 mt-1.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Pilihan grafik */}
      <div className="relative flex flex-wrap items-center justify-between gap-2 mb-3">
        <div
          role="group"
          aria-label="Pilih data grafik"
          className="inline-flex rounded-full bg-ink-700/70 border border-slate-700/30 p-1"
        >
          {MODES.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={mode === id}
              onClick={() => handleModeChange(id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                mode === id
                  ? 'bg-accent-600 text-white'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="font-mono text-[11px] text-slate-500">
          {mode === 'skills' ? 'Top 6 · skor mandiri' : 'Top 6 · jumlah proyek'}
        </span>
      </div>

      {/* Grafik batang horizontal */}
      <ul className="relative space-y-2.5" key={mode}>
        {rows.map(({ name, value, text, max }, i) => {
          const pct = Math.min(100, Math.max(0, Math.round((value / max) * 100)))
          const on = hover === name

          return (
            <li
              key={name}
              onMouseEnter={() => setHover(name)}
              onMouseLeave={() => setHover(null)}
              className="grid grid-cols-[minmax(0,9.5rem)_1fr_3.6rem] sm:grid-cols-[minmax(0,12rem)_1fr_4.2rem] items-center gap-3"
            >
              <span
                className={`text-xs truncate transition-colors ${
                  on ? 'text-slate-50' : 'text-slate-400'
                }`}
                title={name}
              >
                {name}
              </span>
              <div
                role="progressbar"
                aria-label={name}
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={max}
                className="h-2.5 rounded-full bg-accent-500/10 overflow-hidden"
              >
                <motion.div
                  className={`h-full rounded-full ${
                    i % 2
                      ? 'bg-gradient-to-r from-coral-600 to-coral-400'
                      : 'bg-gradient-to-r from-accent-600 to-accent-400'
                  }`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${pct}%` } : { width: 0 }}
                  transition={{
                    delay: reduce ? 0 : 0.08 + i * 0.06,
                    duration: reduce ? 0 : 0.85,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  style={{ opacity: hover && !on ? 0.45 : 1 }}
                />
              </div>
              <span
                className={`font-mono text-[11px] text-right transition-colors ${
                  on ? 'text-slate-50' : 'text-slate-500'
                }`}
              >
                {text}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
