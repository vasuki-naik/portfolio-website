import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Research from './components/Research'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

/* ── Luxury custom cursor ──────────────────────────────── */
function Cursor() {
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)
  const mx = useMotionValue(-100), my = useMotionValue(-100)
  const sx = useSpring(mx, { stiffness: 180, damping: 22 })
  const sy = useSpring(my, { stiffness: 180, damping: 22 })
  const dx = useSpring(mx, { stiffness: 80,  damping: 18 })
  const dy = useSpring(my, { stiffness: 80,  damping: 18 })

  useEffect(() => {
    const move  = e => { mx.set(e.clientX); my.set(e.clientY); setVisible(true) }
    const down  = () => setClicking(true)
    const up    = () => setClicking(false)
    const enter = e => { if (e.target.closest('a,button,[data-hover]')) setHovering(true) }
    const leave = e => { if (!e.target.closest('a,button,[data-hover]')) setHovering(false) }
    window.addEventListener('mousemove',  move)
    window.addEventListener('mousedown',  down)
    window.addEventListener('mouseup',    up)
    document.addEventListener('mouseover',  enter)
    document.addEventListener('mouseleave', () => { setVisible(false); setHovering(false) })
    document.addEventListener('mouseout',   leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup',   up)
    }
  }, [])

  if (!visible) return null
  return (
    <>
      {/* Small dot — precise */}
      <motion.div
        style={{ background: '#5F8F78', x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: clicking ? 0.5 : 1, opacity: hovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 z-[9999] w-[6px] h-[6px] rounded-full pointer-events-none"
      />
      {/* Outer ring — lags behind */}
      <motion.div
        style={{ x: dx, y: dy, translateX: '-50%', translateY: '-50%', borderColor: '#8BBFA6' }}
        animate={{
          scale:  clicking ? 0.7 : hovering ? 1.8 : 1,
          opacity: hovering ? 0.5 : 0.25,
          borderColor: hovering ? '#5F8F78' : '#8BBFA6',
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 z-[9998] w-[36px] h-[36px] rounded-full border-[1.5px] pointer-events-none"
      />
    </>
  )
}

/* ── Ambient background ────────────────────────────────── */
function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0" style={{ background: '#F5F6F2' }} />

      {/* Dot grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, rgba(95,143,120,0.18) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        opacity: 0.7,
      }} />

      {/* Drifting sage orbs */}
      <div className="absolute top-[-15%] left-[-10%] w-[55vw] h-[55vw] max-w-[700px] rounded-full animate-drift"
        style={{ background: 'radial-gradient(circle, rgba(95,143,120,0.11) 0%, transparent 68%)', filter: 'blur(70px)' }}
      />
      <div className="absolute bottom-[-20%] right-[-12%] w-[50vw] h-[50vw] max-w-[640px] rounded-full animate-drift-slow"
        style={{ background: 'radial-gradient(circle, rgba(95,143,120,0.09) 0%, transparent 68%)', filter: 'blur(70px)', animationDelay: '8s' }}
      />
      {/* Soft centre warmth */}
      <div className="absolute top-[35%] left-[50%] -translate-x-1/2 w-[40vw] h-[30vw] max-w-[500px]"
        style={{ background: 'radial-gradient(ellipse, rgba(200,230,216,0.25) 0%, transparent 70%)', filter: 'blur(50px)' }}
      />
    </div>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Cursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Research />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
