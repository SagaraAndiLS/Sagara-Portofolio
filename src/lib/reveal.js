// Animasi "muncul saat di-scroll" tanpa library tambahan.
// Pakai: <div data-reveal="up|left|right" data-delay="200">
export function initReveal() {
  document.documentElement.classList.add('js')

  const show = (el) => el.classList.add('is-visible')
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-reveal]').forEach(show)
    return () => {}
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        show(e.target)
        io.unobserve(e.target)
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  )

  const watch = (el) => {
    const d = el.dataset.delay
    if (d) el.style.setProperty('--reveal-delay', `${d}ms`)
    io.observe(el)
  }

  const scan = (root) => {
    if (root.matches?.('[data-reveal]:not(.is-visible)')) watch(root)
    root.querySelectorAll?.('[data-reveal]:not(.is-visible)').forEach(watch)
  }

  scan(document)

  // elemen yang muncul belakangan (mis. komentar yang baru dimuat) ikut dipantau
  const mo = new MutationObserver((list) => {
    for (const m of list) m.addedNodes.forEach((n) => n.nodeType === 1 && scan(n))
  })
  mo.observe(document.body, { childList: true, subtree: true })

  return () => { io.disconnect(); mo.disconnect() }
}
