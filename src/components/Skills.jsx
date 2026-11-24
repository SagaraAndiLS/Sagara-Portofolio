import { Zap } from 'lucide-react'
import TechStack from './TechStack'

export default function Skills() {
  return (
    <section id="skills" className="section-base relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-coral-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-14" data-reveal="right">
          <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
            <Zap className="w-5 h-5 text-accent-400" />
          </div>
          <div>
            <p className="font-mono text-xs text-accent-500 tracking-widest mb-0.5">02 / SKILLS</p>
            <h2 className="font-display font-700 text-3xl text-slate-100">Keahlian & Teknologi</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-accent-500/20 to-transparent ml-4" />
        </div>

        {/* Tech stack (logo) */}
        <TechStack />
      </div>
    </section>
  )
}
