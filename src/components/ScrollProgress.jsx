import { motion, useScroll, useSpring } from 'framer-motion'

// Garis tipis di atas layar yang menunjukkan sejauh mana halaman sudah dibaca
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-accent-500 via-accent-400 to-coral-400"
    />
  )
}
