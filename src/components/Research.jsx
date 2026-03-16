import { motion } from 'framer-motion'
import { Clock, Users } from 'lucide-react'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
import { useInView } from './useInView'

export default function Research() {
  const { ref, inView } = useInView()
  return (
    <SectionWrapper id="research">
      <SectionHeader label="Academic" title="Research" subtitle="Bridging ML theory with real-world business outcomes." />
      <motion.div ref={ref}
        initial={{ opacity:0, y:24, filter:'blur(4px)' }}
        animate={inView ? { opacity:1, y:0, filter:'blur(0px)' } : {}}
        transition={{ duration:0.8 }}
        className="card overflow-hidden max-w-3xl"
      >
        <div className="flex">
          <div className="w-[3px] flex-shrink-0"
            style={{ background:'linear-gradient(180deg,#3F6F59,#8BBFA6)' }}
          />
          <div className="p-8 flex-1">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200">
                <Clock size={10} /> Under Review
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-[#EAF2EC] text-[#3F6F59] border border-[#C0D9CA]">
                IEEE Submission
              </span>
              <span className="tag">Feb 2026</span>
            </div>

            <h3 className="text-base md:text-lg font-semibold text-[#18261E] leading-snug mb-4">
              ML-Based Customer Churn Prediction in Telecom with Business-Oriented Threshold Optimization
            </h3>

            <div className="flex items-start gap-2 mb-5 text-sm" style={{ color:'#526359' }}>
              <Users size={13} className="mt-0.5 flex-shrink-0" style={{ color:'#8A9E94' }} strokeWidth={1.5} />
              <span>
                <span className="font-medium text-[#2D4035]">Vasuki Nagesh Naik</span> and Dr. Mallikarjun Kodabagi
                <span style={{ color:'#8A9E94' }}> (Head of Department – IT; Director – IQAC, CMR University)</span>
              </span>
            </div>

            <p className="text-[13px] leading-relaxed mb-6" style={{ color:'#526359' }}>
              Research focused on improving business decision-making through ML models that optimise
              classification thresholds based on profit metrics rather than standard accuracy — directly
              bridging the gap between model performance and measurable business impact in telecom churn scenarios.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Machine Learning','Churn Prediction','Threshold Optimization','Business Analytics','Telecom']
                .map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
