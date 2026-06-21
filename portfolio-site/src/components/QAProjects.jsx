import { motion, useReducedMotion } from 'framer-motion';
import { FaBug, FaCheckCircle, FaCode, FaDownload, FaAward } from 'react-icons/fa';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

const projects = [
  {
    num: '01', border: 'border-t-blue-500', numColor: 'text-blue-400', gradient: 'from-blue-500/25 to-blue-500/5',
    icon: <FaCode className="text-blue-400" size={16} />,
    title: 'Fake Review Detection System',
    tech: ['Python', 'Machine Learning', 'NLP', 'Scikit-learn', 'Pandas'],
    desc: 'ML-based system to classify online reviews as genuine or suspicious using NLP preprocessing and model evaluation.',
    testing: ['Tested model predictions', 'Verified output accuracy', 'Checked data validation', 'Reviewed model behavior'],
  },
  {
    num: '02', border: 'border-t-[#0EA5E9]', numColor: 'text-cyan-400', gradient: 'from-cyan-500/25 to-cyan-500/5',
    icon: <FaCode className="text-[#0EA5E9]" size={16} />,
    title: 'Web-Based Tour Guide System',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'MySQL'],
    desc: 'Responsive tourism management website with destination recommendations, travel planning, forms, and database structure.',
    testing: ['UI testing', 'Form validation testing', 'Navigation testing', 'Responsiveness testing', 'Database verification'],
    badge: '★ Completed',
  },
  {
    num: '03', border: 'border-t-purple-500', numColor: 'text-purple-400', gradient: 'from-purple-500/25 to-purple-500/5',
    icon: <FaCode className="text-purple-400" size={16} />,
    title: 'Jewelry Shop Management System',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    desc: 'MERN stack inventory and sales management system for products, stock, customer details, and sales information.',
    testing: ['CRUD workflow testing', 'API response testing', 'Frontend validation testing', 'Database update verification'],
  },
  {
    num: '04', border: 'border-t-emerald-500', numColor: 'text-emerald-400', gradient: 'from-emerald-500/25 to-emerald-500/5',
    icon: <FaCode className="text-emerald-400" size={16} />,
    title: 'Wedding Booking & Vendor Management',
    tech: ['Java', 'HTML', 'CSS', 'IntelliJ IDEA'],
    desc: 'Booking and vendor management features using Java CRUD operations and object-oriented programming.',
    testing: ['Booking workflow testing', 'Input validation testing', 'Record create/update/delete testing', 'File-based data handling verification'],
  },
];

export default function QAProjects() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="qa-projects" className="section-light">
      <SectionHeading
        eyebrow="Technical"
        title="QA / Technical Projects"
        subtitle="Projects developed with a QA-focused perspective — built, tested, and verified"
      />
      <div className="grid sm:grid-cols-2 gap-7">
        {projects.map(({ num, border, numColor, gradient, icon, title, tech, desc, testing, badge }, i) => (
          <motion.div
            key={title}
            initial={reduced ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -8, border: '1px solid rgba(56,189,248,0.3)', boxShadow: '0 20px 50px rgba(56,189,248,0.1)' }}
            className={`relative bg-slate-900/40 rounded-3xl border-t-2 ${border} border-x border-b border-slate-800/80 p-7 flex flex-col gap-5 transition-all duration-300 shadow-md hover:shadow-lg group overflow-hidden`}
          >
            {/* Badge */}
            {badge && (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute top-4 right-4 z-10 text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 text-slate-950 flex items-center gap-1 shadow-lg"
              >
                <FaAward size={10} /> {badge}
              </motion.div>
            )}

            {/* Header */}
            <div className="flex items-start gap-4">
              <span className={`text-4xl font-black opacity-20 ${numColor} select-none`}>{num}</span>
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-2">
                  <div className={`bg-slate-950 border border-slate-850 rounded-xl flex items-center justify-center shrink-0 p-2 text-white`}>
                    {icon}
                  </div>
                  <h3 className="font-black text-white text-base leading-snug group-hover:text-[#38BDF8] transition-all duration-300">
                    {title}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-950/50 text-[#38BDF8] border border-blue-500/10">
                  {t}
                </span>
              ))}
            </div>

            {/* Testing focus */}
            <div className="bg-slate-950/40 rounded-2xl p-5 border border-slate-850">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 flex items-center justify-center">
                  <FaBug className="text-[#38BDF8]" size={13} />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-white">Testing Focus</span>
              </div>
              <ul className="grid grid-cols-1 gap-2">
                {testing.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-xs text-slate-400">
                    <FaCheckCircle className="text-[#0EA5E9] mt-0.5 shrink-0" size={11} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CV Download Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 bg-slate-900/40 border border-emerald-500/20 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl"
      >
        {/* Decorative blur background */}
        <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3), transparent)` }} />
        
        <div className="relative z-10 flex-1">
          <h3 className="text-2xl font-black text-white mb-2">Prove Your QA Excellence</h3>
          <p className="text-slate-400 text-base">Download my QA & Testing CV with all projects, methodologies, and achievements</p>
        </div>
        <motion.a
          href="/Paviyalan CV.pdf"
          download
          whileHover={{ scale: 1.08, boxShadow: '0 12px 40px rgba(16,185,129,0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 inline-flex items-center gap-2.5 px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
        >
          <FaDownload size={16} /> Download QA CV
        </motion.a>
      </motion.div>
    </SectionWrapper>
  );
}
