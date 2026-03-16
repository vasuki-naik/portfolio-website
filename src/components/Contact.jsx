import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
import { useInView } from './useInView'

const links = [
  { icon:Mail,     label:'Email',    value:'naikvasuki413@gmail.com',               href:'mailto:naikvasuki413@gmail.com',                          c:'#3F6F59', bg:'#EAF2EC', b:'#C0D9CA' },
  { icon:Linkedin, label:'LinkedIn', value:'linkedin.com/in/vasuki-naik-4608432a6', href:'https://www.linkedin.com/in/vasuki-naik-4608432a6/',       c:'#5F8F78', bg:'#EAF2EC', b:'#C0D9CA' },
  { icon:Github,   label:'GitHub',   value:'github.com/vasuki-naik',                href:'https://github.com/vasuki-naik',                          c:'#2B5242', bg:'#E4EDE8', b:'#B5D4C3' },
]

export default function Contact() {
  const { ref, inView } = useInView()
  return (
    <SectionWrapper id="contact">
      <SectionHeader label="Get in Touch" title="Contact" />
      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
        <div>
          <p className="text-[15px] leading-relaxed mb-10 max-w-md body-text">
            I'm actively seeking Data Analyst internship roles. Whether you have an opportunity, a project,
            or just want to connect — feel free to reach out.
          </p>
          <div ref={ref} className="space-y-3">
            {links.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity:0, y:14, filter:'blur(3px)' }}
                  animate={inView ? { opacity:1, y:0, filter:'blur(0px)' } : {}}
                  transition={{ duration:0.6, delay:i*0.1 }}
                  className="card flex items-center gap-4 p-4 group no-underline"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background:item.bg, border:`1px solid ${item.b}` }}>
                    <Icon size={15} strokeWidth={1.8} style={{ color:item.c }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color:'#8A9E94' }}>{item.label}</p>
                    <p className="text-sm truncate mt-0.5 font-medium" style={{ color:'#2D4035' }}>{item.value}</p>
                  </div>
                  <ArrowUpRight size={14} strokeWidth={1.5}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ color:item.c }}
                  />
                </motion.a>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity:0, scale:0.9, filter:'blur(4px)' }}
          animate={inView ? { opacity:1, scale:1, filter:'blur(0px)' } : {}}
          transition={{ duration:0.8, delay:0.25, ease:[0.22,1,0.36,1] }}
          className="card p-8 text-center min-w-[200px] relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{ background:'radial-gradient(circle at 50% 0%, rgba(95,143,120,0.06) 0%, transparent 70%)' }}
          />
          <div className="relative">
            <p className="text-4xl mb-3">🌿</p>
            <p className="text-sm font-bold text-[#18261E] mb-1">Let's work together</p>
            <p className="text-[12px] leading-snug mb-5" style={{ color:'#8A9E94' }}>
              Open for internships &amp;<br />collaborative projects
            </p>
            <a href="mailto:naikvasuki413@gmail.com" className="btn-primary text-xs px-5 py-2.5">Say Hello</a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
