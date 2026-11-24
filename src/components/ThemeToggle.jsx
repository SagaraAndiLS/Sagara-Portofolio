import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { getTheme, setTheme } from '../lib/theme'

export default function ThemeToggle({ className = '' }) {
  const [theme, setLocal] = useState(getTheme)
  const next = theme === 'dark' ? 'light' : 'dark'

  const toggle = () => {
    setTheme(next)
    setLocal(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Ganti ke mode ${next === 'light' ? 'terang' : 'gelap'}`}
      title={`Mode ${next === 'light' ? 'terang' : 'gelap'}`}
      className={`w-9 h-9 shrink-0 rounded-full border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-accent-400 hover:border-accent-500/50 transition-colors ${className}`}
    >
      {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  )
}
