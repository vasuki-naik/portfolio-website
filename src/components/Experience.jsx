import { motion } from 'framer-motion'
import { Briefcase, Award, Zap, Lightbulb, ChevronRight } from 'lucide-react'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
import { useInView } from './useInView'

const timeline = [
  {
    icon:Briefcase, c:'#3F6F59', bg:'#EAF2EC', b:'#C0D9CA',
    date:'December 2025', title:'Data Analytics Job Simulation', org:'Deloitte · Forage',
    points:['Built interactive dashboards and analysed business data to surface key trends.','Supported client advisory and forensic decision-making in a simulated professional engagement.','Delivered structured insights and recommendations to stakeholders.'],
    tags:['Power BI','EDA','Business Intelligence'],
  },
  {
    icon:Lightbulb, c:'#5F8F78', bg:'#EAF2EC', b:'#C0D9CA',
    date:'November 2024', title:'Smart India Biz-Tech Ideathon 2.0', org:'REVA University · Atratist Pvt. Ltd.',
    points:['Brainstormed innovative ideas and tackled real-world business challenges alongside Safwan Shaik.','Received valuable insights from industry experts across 2 competitive days (Nov 15 & 19, 2024).','Enhanced problem-solving, teamwork, and entrepreneurial thinking skills.'],
    tags:['Ideation','Entrepreneurship','Problem Solving'],
  },
  {
    icon:Zap, c:'#2B5242', bg:'#E4EDE8', b:'#B5D4C3',
    date:'April 2025', title:'NammaSuraksha — National Hackathon', org:'Presidency University · Karnataka State Police',
    points:['Designed and prototyped a public safety kiosk for real-time emergency police contact at bus stands and railway stations.','Collaborated in a 3-day competitive team sprint.'],
    tags:['Prototyping','Public Safety','IoT Concept'],
  },
  {
    icon:Award, c:'#5F8F78', bg:'#EAF2EC', b:'#C0D9CA',
    date:'2025', title:'Certifications', org:'Kaggle · SoloLearn · RemarkSkill / NITK Surathkal',
    points:['Python for Data Analysis — Kaggle (June 2025)','SQL Intermediate — SoloLearn (August 2025)','Data Science Technical Workshop — RemarkSkill in collaboration with Incident, NITK Surathkal (March 2025)'],
    tags:['Python','SQL','Data Science'],
  },
]

function Item({ item, index, total }) {
  const { ref, inView } = useInView()
  const Icon = item.icon
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, x:-24, filter:'blur(3px)' }}
      animate={inView ? { opacity:1, x:0, filter:'blur(0px)' } : {}}
      transition={{ duration:0.7, delay:index*0.1, ease:[0.22,1,0.36,1] }}
      className="relative pl-10 md:pl-16"
    >
      {index < total-1 && (
        <div className="absolute left-[13px] md:left-[19px] top-10 bottom-0 w-px"
          style={{ background:'linear-gradient(to bottom,#C8DAD1,transparent)' }}
        />
      )}
      <div className="absolute left-0 md:left-1.5 top-0 w-7 h-7 rounded-full flex items-center justify-center"
        style={{ background:item.bg, border:`1px solid ${item.b}` }}>
        <Icon size={13} style={{ color:item.c }} strokeWidth={1.8} />
      </div>
      <div className="card p-5 mb-5">
        <div className="mb-3">
          <p className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color:'#8A9E94' }}>{item.date}</p>
          <h3 className="text-sm font-semibold text-[#18261E]">{item.title}</h3>
          <p className="text-[12px] mt-0.5" style={{ color:'#6B7C72' }}>{item.org}</p>
        </div>
        <ul className="space-y-2 mb-4">
          {item.points.map(pt => (
            <li key={pt} className="flex gap-2 text-[13px] leading-relaxed" style={{ color:'#526359' }}>
              <ChevronRight size={13} className="mt-0.5 flex-shrink-0" style={{ color:'#C8DAD1' }} strokeWidth={2} />
              {pt}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader label="Background" title="Experience & Activities" />
      <div>{timeline.map((item, i) => <Item key={item.title} item={item} index={i} total={timeline.length} />)}</div>
    </SectionWrapper>
  )
}
