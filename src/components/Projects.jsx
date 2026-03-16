import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Github, ExternalLink, TrendingUp, BarChart3, Leaf } from 'lucide-react'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
import { useInView } from './useInView'

const projects = [
  {
    id:1, icon:TrendingUp, color:'#3F6F59', bg:'#EAF2EC', border:'#C0D9CA', period:'2025',
    title:'Customer Churn Prediction',
    description:'End-to-end ML pipeline on 7,043 telecom records — data cleaning, tenure binning, EDA, and benchmarked Logistic Regression, Random Forest & XGBoost with SMOTE in 5-fold stratified CV. Profit-based threshold optimisation.',
    highlights:['ROC-AUC 0.8317','Recall 87.4%','$18,820/mo uplift','Threshold 0.407'],
    stack:['Python','XGBoost','scikit-learn','SMOTE','Pandas','Seaborn'],
    github:'https://github.com/vasuki-naik/customer-churn-analysis',
  },
  {
    id:2, icon:BarChart3, color:'#5F8F78', bg:'#EAF2EC', border:'#C0D9CA', period:'2025',
    title:'Indian Startup Ecosystem Analysis',
    description:'Analysed 3,000+ startup funding records — year-wise growth, top sectors, investment stage distribution (Seed to PE). Built a 3-page interactive Power BI dashboard and a Random Forest Regressor for funding prediction.',
    highlights:['3,000+ Records','Power BI Dashboard','Funding Predictor','Sector Analysis'],
    stack:['Python','Power BI','SQL','Random Forest','Matplotlib'],
    github:'https://github.com/vasuki-naik/startup-funding-analytics-india',
  },
  {
    id:3, icon:Leaf, color:'#2B5242', bg:'#E4EDE8', border:'#B5D4C3', period:'2025',
    title:'Food Waste Prediction & Redistribution',
    description:'ML model to predict food waste generation patterns and optimise redistribution logistics to reduce waste and support communities. Combines predictive analytics with actionable supply-chain insights.',
    highlights:['Waste Reduction','ML Prediction','Redistribution Logic','Social Impact'],
    stack:['Python','scikit-learn','Pandas','Data Visualisation'],
    github:'https://github.com/vasuki-naik/Food_Waste_Prediction_And_Redistribution_Project',
  },
]

function ProjectCard({ project, index }) {
  const { ref: inViewRef, inView } = useInView()
  const cardRef = useRef(null)
  const Icon = project.icon

  const mx = useMotionValue(0), my = useMotionValue(0)
  const rx = useSpring(useTransform(my,[-0.5,0.5],[4,-4]),{stiffness:250,damping:28})
  const ry = useSpring(useTransform(mx,[-0.5,0.5],[-4,4]),{stiffness:250,damping:28})
  const onMove  = e => { const r=cardRef.current.getBoundingClientRect(); mx.set((e.clientX-r.left)/r.width-.5); my.set((e.clientY-r.top)/r.height-.5) }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <motion.div ref={inViewRef}
      initial={{ opacity:0, y:32, filter:'blur(6px)' }}
      animate={inView ? { opacity:1, y:0, filter:'blur(0px)' } : {}}
      transition={{ duration:0.8, delay:index*0.12, ease:[0.22,1,0.36,1] }}
      style={{ perspective:1000 }}
    >
      <motion.div ref={cardRef}
        onMouseMove={onMove} onMouseLeave={onLeave}
        style={{ rotateX:rx, rotateY:ry, transformStyle:'preserve-3d' }}
        className="card overflow-hidden group cursor-default h-full"
      >
        <div className="h-[3px]" style={{ background:`linear-gradient(90deg,${project.color}80,transparent)` }} />
        <div className="p-6">
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background:project.bg, border:`1px solid ${project.border}` }}>
                <Icon size={16} strokeWidth={1.8} style={{ color:project.color }} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color:'#8A9E94' }}>{project.period}</p>
                <h3 className="text-sm font-semibold text-[#18261E]">{project.title}</h3>
              </div>
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-0.5 text-[11px] transition-colors"
              style={{ color:'#8A9E94' }}
              onMouseEnter={e => e.currentTarget.style.color=project.color}
              onMouseLeave={e => e.currentTarget.style.color='#8A9E94'}
            >
              <Github size={14} />
              <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <p className="text-[13px] leading-relaxed mb-5" style={{ color:'#526359' }}>{project.description}</p>

          <div className="grid grid-cols-2 gap-2 mb-5">
            {project.highlights.map(h => (
              <div key={h} className="flex items-center gap-1.5 text-[11px] font-medium" style={{ color:'#2D4035' }}>
                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background:project.color }} />
                {h}
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap gap-1.5" style={{ borderTop:'1px solid #EAF2EC' }}>
            {project.stack.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader label="Work" title="Projects" subtitle="Data and ML solutions built from raw data to deployable insights." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
      </div>
    </SectionWrapper>
  )
}
