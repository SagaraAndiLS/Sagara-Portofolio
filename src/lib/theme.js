// Mode gelap/terang. Nilai awal dipasang oleh skrip kecil di index.html (agar tidak berkedip).
const KEY = 'theme'

export const getTheme = () =>
  document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'

export function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#F6F7FB' : '#0C0D1A')
  try { localStorage.setItem(KEY, theme) } catch { /* mode privat: abaikan */ }
}
