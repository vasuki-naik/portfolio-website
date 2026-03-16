import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Download, MapPin } from 'lucide-react'

const stagger = {
  container: {
    animate: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  },
  item: {
    initial: { opacity: 0, y: 30, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imgY = useTransform(scrollYProgress, [0, 1], [0, -40])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -20])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">

      <motion.div style={{ opacity }} className="max-w-5xl mx-auto px-6 w-full">

        <div className="grid md:grid-cols-[auto_1fr] gap-16 md:gap-24 items-center">

          {/* Profile Image */}
          <motion.div
            style={{ y: imgY }}
            initial={{ opacity: 0, scale: 0.86, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center md:justify-start"
          >

            <div className="relative">

              {/* Glow */}
              <div
                className="absolute -inset-10 rounded-full animate-pulse-soft"
                style={{
                  background:
                    'radial-gradient(circle, rgba(95,143,120,0.22) 0%, rgba(168,208,188,0.10) 55%, transparent 100%)',
                  filter: 'blur(24px)',
                }}
              />

              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
                className="absolute -inset-[4px] rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 60%, rgba(95,143,120,0.4) 80%, rgba(139,191,166,0.6) 100%, transparent)',
                }}
              />

              {/* Inner ring */}
              <div
                className="absolute -inset-[2px] rounded-full"
                style={{
                  background:
                    'linear-gradient(145deg,rgba(95,143,120,0.5),rgba(168,208,188,0.25))',
                }}
              />

              {/* Photo */}
              <div
                className="relative w-[230px] h-[230px] md:w-[270px] md:h-[270px] rounded-full overflow-hidden bg-[#EAF2EC]"
                style={{
                  boxShadow:
                    '0 8px 48px rgba(95,143,120,0.22), 0 2px 12px rgba(24,38,30,0.08)',
                }}
              >
                <img
                  src="/profile.jpeg"
                  alt="Vasuki Nagesh Naik"
                  className="w-full h-full object-cover object-top"
                  style={{ transform: 'scale(1.03)' }}
                />
              </div>

              {/* Open to internships badge */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 1.0,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#C8DAD1] whitespace-nowrap"
                style={{ boxShadow: '0 2px 16px rgba(24,38,30,0.09)' }}
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                  transition={{ repeat: Infinity, duration: 2.4 }}
                  className="w-2 h-2 rounded-full bg-emerald-400"
                />

                <span className="text-[11px] font-semibold text-[#2D4035] tracking-wide">
                  Open to Internships
                </span>
              </motion.div>

            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            style={{ y: textY }}
            variants={stagger.container}
            initial="initial"
            animate="animate"
            className="space-y-7"
          >

            <motion.div variants={stagger.item}>
              <span className="label-text">Portfolio · 2025</span>
            </motion.div>

            <motion.h1 variants={stagger.item} className="hero-title text-[#18221E]">
              Vasuki <span className="grad-text">Nagesh</span>
              <br />
              <span style={{ color: '#2E3E36', fontWeight: 400 }}>Naik</span>
            </motion.h1>

            <motion.div variants={stagger.item} className="space-y-2">

              <p style={{ color: '#2F433A', fontSize: '1rem', fontWeight: 400 }}>
                Data Analyst
                <span style={{ color: '#C8DAD1', margin: '0 10px' }}>·</span>
                Machine Learning Enthusiast
              </p>

              <div
                className="flex items-center gap-1.5"
                style={{ color: '#4A5E54', fontSize: '0.85rem' }}
              >
                <MapPin size={12} strokeWidth={1.5} />
                <span>Bangalore, India · CMR University · CGPA 8.80</span>
              </div>

            </motion.div>

            <motion.p
              variants={stagger.item}
              style={{
                color: '#33463D',
                fontSize: '0.9rem',
                lineHeight: 1.8,
                maxWidth: '420px',
                paddingLeft: '16px',
                borderLeft: '2px solid #C0D9CA',
                fontStyle: 'italic',
              }}
            >
              "Turning data into meaningful business insights — building ML pipelines and dashboards that drive real decisions."
            </motion.p>

            <motion.div variants={stagger.item} className="flex flex-wrap gap-3 pt-1">

              <button
                onClick={() =>
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-primary"
              >
                View Projects <ArrowRight size={14} />
              </button>

              <a
                href="/vasuki_nagesh_data_analyst_intern_resume-2.pdf"
                download
                className="btn-outline"
              >
                <Download size={14} />
                Download Resume
              </a>

            </motion.div>

          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >

          <span
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: '#4F6F5B',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            scroll
          </span>

          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
            className="w-px h-12"
            style={{
              background:
                'linear-gradient(to bottom, rgba(95,143,120,0.7), transparent)',
            }}
          />

        </motion.div>

      </motion.div>
    </section>
  )
}