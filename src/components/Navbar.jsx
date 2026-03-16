import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const navItems = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Research',   href: '#research'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) }),
      { threshold: 0.35 }
    )
    document.querySelectorAll('section[id]').forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const go = href => { setMenuOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0,  opacity: 1  }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F5F6F2]/82 backdrop-blur-2xl border-b border-[#C8DAD1]/60 shadow-sm'
            : ''
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-[18px] flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-bold tracking-tight text-[#18261E]"
          >
            Vasuki<span style={{ color: '#5F8F78' }}>.</span>
          </button>

          <div className="hidden md:flex items-center gap-9">
            {navItems.map(item => (
              <button key={item.label} onClick={() => go(item.href)}
                className={`nav-link ${active === item.href ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <a href="/vasuki_nagesh_data_analyst_intern_resume-2.pdf" download
            className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-semibold px-4 py-[9px] rounded-full border border-[#C8DAD1] bg-white/70 text-[#526359] hover:border-[#5F8F78] hover:text-[#3F6F59] hover:bg-[#EAF2EC] transition-all duration-300 shadow-sm tracking-wide"
          >
            <Download size={11} strokeWidth={2.2} /> Resume
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#8A9E94]">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1,  y: 0,  scale: 1    }}
            exit={{   opacity: 0,  y: -8, scale: 0.98  }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[61px] left-4 right-4 z-40 rounded-2xl bg-white/92 backdrop-blur-2xl border border-[#C8DAD1] shadow-lg md:hidden overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navItems.map(item => (
                <button key={item.label} onClick={() => go(item.href)}
                  className="text-left text-sm font-medium text-[#526359] hover:text-[#18261E] transition-colors"
                >{item.label}</button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
