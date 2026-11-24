/** @type {import('tailwindcss').Config} */

// Semua warna dibaca dari variabel CSS (lihat src/index.css) supaya mode gelap/terang
// cukup mengganti nilai variabel, tanpa mengubah class di komponen.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`
const scale = (prefix, steps) => Object.fromEntries(steps.map((s) => [s, v(`${prefix}-${s}`)]))

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontWeight: { 300: '300', 500: '500', 600: '600', 700: '700', 800: '800' },
      opacity: { 3: '0.03', 4: '0.04', 8: '0.08' },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: scale('ink', [950, 900, 800, 700, 600]), // permukaan / latar
        slate: scale('slate', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]), // teks & garis
        accent: scale('accent', [300, 400, 500, 600]), // indigo
        coral: scale('coral', [400, 500, 600]), // aksen kedua
        danger: v('danger'),
        success: v('success'),
      },
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 24s linear infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } },
      },
    },
  },
  plugins: [],
}
