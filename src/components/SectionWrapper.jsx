import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function SectionWrapper({ children, id, className = '' }) {
  const { ref, inView } = useInView(0.08)
  return (
    <motion.section
      id={id} ref={ref}
      initial={{ opacity: 0, y: 40, filter: 'blur(3px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`py-28 max-w-5xl mx-auto px-6 ${className}`}
    >
      {children}
    </motion.section>
  )
}

export function SectionHeader({ label, title, subtitle }) {
  const { ref, inView } = useInView(0.2)
  return (
    <div ref={ref} className="mb-14">
      <motion.span
        className="label-text block mb-3"
        initial={{ opacity: 0, x: -12 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.span>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="mt-3 body-text text-sm max-w-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.16 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        className="mt-6 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.22 }}
      >
        <div className="h-[2px] rounded-full"
          style={{ width: '48px', background: 'linear-gradient(90deg,#3F6F59,#8BBFA6)' }}
        />
        <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg,#C8DAD1,transparent)' }} />
      </motion.div>
    </div>
  )
}
