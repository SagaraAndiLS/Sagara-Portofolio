import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Loader2, MessageCircle, Github, Linkedin } from 'lucide-react'
import Swal from 'sweetalert2'
import Comments from './Comments'
import { PERSONAL, GMAIL_LINK  } from '../data/portfolio'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

// Komentar hanya tampil kalau Supabase sudah dikonfigurasi
const COMMENTS_ENABLED = Boolean(
  import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY
)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Nama wajib diisi'
    if (!form.email.trim()) e.email = 'Email wajib diisi'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Format email tidak valid'
    if (!form.message.trim()) e.message = 'Pesan wajib diisi'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    // Tanpa Formspree: buka Gmail dengan isi pesan yang sudah terisi
    if (!FORMSPREE_ID) {
      const subject = form.subject.trim() || `Pesan dari ${form.name}`
      const body = `Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
        '_blank',
        'noreferrer'
      )
      Swal.fire({
        title: 'Gmail dibuka',
        text: 'Pesan Anda sudah terisi. Tinggal tekan Kirim di Gmail.',
        icon: 'info',
        confirmButtonText: 'Oke',
      })
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Gagal mengirim')
      const name = form.name
      setForm({ name: '', email: '', subject: '', message: '' })
      setErrors({})
      Swal.fire({
        title: 'Pesan Terkirim! 🎉',
        text: `Terima kasih ${name}! Saya akan membalas pesan Anda secepatnya.`,
        icon: 'success',
        confirmButtonText: 'Oke!',
        timer: 4000,
        timerProgressBar: true,
      })
    } catch {
      Swal.fire({
        title: 'Gagal mengirim',
        text: 'Silakan coba lagi, atau hubungi saya lewat email/WhatsApp.',
        icon: 'error',
        confirmButtonText: 'Oke',
      })
    } finally {
      setSubmitting(false)
    }
  }

  const contactItems = [
    { icon: Mail, label: 'Email', value: PERSONAL.email, href: GMAIL_LINK, color: 'accent' },
    { icon: Phone, label: 'WhatsApp', value: PERSONAL.phone, href: `https://wa.me/${PERSONAL.phone.replace(/\D/g, '')}`, color: 'accent' },
    { icon: MapPin, label: 'Lokasi', value: PERSONAL.location, href: null, color: 'coral' },
    { icon: Linkedin, label: 'LinkedIn', value: 'sagaraandiladzuardi', href: PERSONAL.linkedin, color: 'accent' },
    { icon: Github, label: 'GitHub', value: 'SagaraAndiLS', href: PERSONAL.github, color: 'coral' },
  ]

  return (
    <section id="contact" className="section-base relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-accent-500/3 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-14" data-reveal="right">
          <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
            <Mail className="w-5 h-5 text-accent-400" />
          </div>
          <div>
            <p className="font-mono text-xs text-accent-500 tracking-widest mb-0.5">07 / CONTACT</p>
            <h2 className="font-display font-700 text-3xl text-slate-100">Hubungi Saya</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-accent-500/20 to-transparent ml-4" />
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 ${COMMENTS_ENABLED ? 'mb-16' : ''}`}>
          {/* Left: Info */}
          <div data-reveal="right">
            <p className="text-slate-400 leading-relaxed mb-8">
              Tertarik bekerja sama atau punya pertanyaan tentang data analysis? 
              Jangan ragu menghubungi saya — saya selalu terbuka untuk diskusi, 
              kolaborasi, dan peluang baru.
            </p>

            <div className="space-y-4 mb-8">
              {contactItems.map(({ icon: Icon, label, value, href, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    color === 'accent'
                      ? 'bg-accent-500/10 border border-accent-500/20'
                      : 'bg-coral-500/10 border border-coral-500/20'
                  }`}>
                    <Icon className={`w-4 h-4 ${color === 'accent' ? 'text-accent-400' : 'text-coral-400'}`} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-mono">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer"
                        className="text-slate-300 text-sm hover:text-accent-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="text-slate-300 text-sm">{value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="glass rounded-xl p-4 border border-accent-500/15">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
                <span className="font-mono text-xs text-accent-400 tracking-widest">TERSEDIA UNTUK HIRE</span>
              </div>
              <p className="text-slate-400 text-xs">
                Terbuka untuk posisi Data Analyst, Junior Data Scientist, atau peran terkait data.
                Tersedia untuk full-time maupun freelance.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div data-reveal="left">
            <form onSubmit={handleSubmit} className="glass rounded-xl border border-slate-700/30 p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1.5 tracking-wide">NAMA *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Nama Anda"
                    className={`w-full bg-ink-900/50 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-600 border transition-colors outline-none focus:border-accent-500/50 ${
                      errors.name ? 'border-danger/40' : 'border-slate-700/40'
                    }`}
                  />
                  {errors.name && <p className="text-danger text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1.5 tracking-wide">EMAIL *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="email@contoh.com"
                    className={`w-full bg-ink-900/50 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-600 border transition-colors outline-none focus:border-accent-500/50 ${
                      errors.email ? 'border-danger/40' : 'border-slate-700/40'
                    }`}
                  />
                  {errors.email && <p className="text-danger text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 mb-1.5 tracking-wide">SUBJEK</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  placeholder="Perihal pesan Anda"
                  className="w-full bg-ink-900/50 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-600 border border-slate-700/40 transition-colors outline-none focus:border-accent-500/50"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 mb-1.5 tracking-wide">PESAN *</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tulis pesan Anda..."
                  className={`w-full bg-ink-900/50 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-600 border transition-colors outline-none focus:border-accent-500/50 resize-none ${
                    errors.message ? 'border-danger/40' : 'border-slate-700/40'
                  }`}
                />
                {errors.message && <p className="text-danger text-xs mt-1">{errors.message}</p>}
              </div>

              <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-60">
                {submitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Mengirim...</>
                ) : (
                  <><Send className="w-4 h-4" /> Kirim Pesan</>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Comment section (hanya tampil jika Supabase sudah dikonfigurasi) */}
        {COMMENTS_ENABLED && (
          <div className="border-t border-slate-800 pt-12" data-reveal="up">
            <div className="flex items-center gap-3 mb-10">
              <MessageCircle className="w-5 h-5 text-accent-400" />
              <h3 className="font-display font-700 text-2xl text-slate-100">Tamu & Komentar</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-accent-500/20 to-transparent ml-2" />
            </div>
            <Comments />
          </div>
        )}
      </div>
    </section>
  )
}
