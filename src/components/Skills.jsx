import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
import { useInView } from './useInView'

// ✏️ Reordered and expanded to match resume skill categories exactly
const groups = [
  {
    cat: 'SQL & Databases',
    dot: '#3F6F59',
    skills: ['Advanced SQL', 'CTEs', 'Window Functions', 'JOINs', 'Aggregations', 'Subqueries', 'SQLite', 'ETL', 'Relational Databases'],
  },
  {
    cat: 'Data Analysis',
    dot: '#5F8F78',
    skills: ['Python', 'Pandas', 'NumPy', 'EDA', 'KPI Diagnostics', 'Feature Engineering', 'Statistical Modeling', 'Business Insights'],
  },
  {
    cat: 'Machine Learning',
    dot: '#2B5242',
    skills: ['Logistic Regression', 'Random Forest', 'XGBoost', 'SMOTE', 'GridSearchCV', 'Predictive Modeling', 'ROC-AUC', 'Model Evaluation'],
  },
  {
    cat: 'Visualization & BI',
    dot: '#8BBFA6',
    skills: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Excel', 'Dashboard Development', 'KPI Reporting'],
  },
  {
    cat: 'Tools & Workflow',
    dot: '#3F6F59',
    skills: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code'],
  },
]

export default function Skills() {
  const { ref, inView } = useInView()
  return (
    <SectionWrapper id="skills">
      <SectionHeader label="Expertise" title="Skills" subtitle="Technologies and tools I use to build end-to-end data solutions." />
      <div ref={ref} className="grid sm:grid-cols-2 gap-4">
        {groups.map((g, gi) => (
          <motion.div key={g.cat}
            initial={{ opacity:0, y:24, filter:'blur(4px)' }}
            animate={inView ? { opacity:1, y:0, filter:'blur(0px)' } : {}}
            transition={{ duration:0.7, delay:gi*0.1, ease:[0.22,1,0.36,1] }}
            className="card p-6 group"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-2 h-2 rounded-full animate-pulse-soft"
                style={{ background:g.dot, boxShadow:`0 0 8px ${g.dot}80` }}
              />
              <span className="text-xs font-semibold tracking-wide text-[#18261E]">{g.cat}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.skills.map(s => (
                <motion.span key={s} whileHover={{ scale:1.05 }} className="skill-chip">{s}</motion.span>
              ))}
            </div>
            <motion.div className="mt-5 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background:`linear-gradient(90deg,${g.dot}50,transparent)` }}
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
