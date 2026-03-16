import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
import { useInView } from './useInView'
import { GraduationCap, Code2, Database, Brain } from 'lucide-react'

const highlights = [
  { icon: GraduationCap, label: 'CMR University', sub: 'B.E. IT · CGPA 8.80', c:'#3F6F59', bg:'#EAF2EC', b:'#C0D9CA' },
  { icon: Brain,  label: 'ML Research',    sub: 'Churn + threshold optimisation', c:'#5F8F78', bg:'#EAF2EC', b:'#C0D9CA' },
  { icon: Database,label: 'Data Pipelines', sub: 'EDA, modelling & BI dashboards', c:'#2B5242', bg:'#E4EDE8', b:'#B5D4C3' },
  { icon: Code2,  label: 'Tech Stack',      sub: 'Python · SQL · Power BI · sklearn',c:'#3F6F59', bg:'#EAF2EC', b:'#C0D9CA' },
]

export default function About() {
  const { ref, inView } = useInView()
  return (
    <SectionWrapper id="about">
      <SectionHeader label="Introduction" title="About Me" />
      <div className="grid md:grid-cols-[1fr_auto] gap-14 items-start">
        <motion.div className="space-y-5 max-w-xl"
          initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="body-text text-[15px]">
            I'm an IT undergraduate at{' '}
            <span className="font-semibold text-[#18261E]">CMR University, Bangalore</span>, working at the
            intersection of data analytics, machine learning, and business intelligence.
          </p>
          <p className="body-text text-[15px]">
            My hands-on work spans EDA, benchmarking ML models, and building interactive dashboards. I've
            achieved ROC-AUC 0.8317 in churn modelling with profit-optimised thresholds projecting{' '}
            <span className="font-semibold text-[#2B5242]">$18,820 / month uplift</span>.
          </p>
          <p className="body-text text-[15px]">
            I believe great data work is about more than accuracy — it's about solutions that are interpretable,
            actionable, and genuinely valuable to the business.
          </p>
        </motion.div>

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 gap-3 min-w-[210px]">
          {[{ v:'8.80',l:'CGPA'},{v:'0.83',l:'ROC-AUC'},{v:'3K+',l:'Records Analysed'},{v:'3',l:'Projects Built'}]
            .map((s, i) => (
            <motion.div key={s.l}
              initial={{ opacity:0, scale:0.8 }}
              animate={inView ? { opacity:1, scale:1 } : {}}
              transition={{ duration:0.5, delay:i*0.07, ease:[0.22,1,0.36,1] }}
              className="card p-4 text-center"
            >
              <p className="text-2xl font-bold grad-text">{s.v}</p>
              <p className="text-[11px] mt-1" style={{ color:'#8A9E94' }}>{s.l}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
        {highlights.map((h, i) => {
          const Icon = h.icon
          return (
            <motion.div key={h.label}
              initial={{ opacity:0, y:20 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.55, delay:0.2+i*0.08 }}
              className="card p-4 flex gap-3 items-start"
            >
              <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background:h.bg, border:`1px solid ${h.b}` }}>
                <Icon size={14} style={{ color:h.c }} strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#18261E]">{h.label}</p>
                <p className="text-[11px] mt-0.5 leading-snug" style={{ color:'#8A9E94' }}>{h.sub}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
