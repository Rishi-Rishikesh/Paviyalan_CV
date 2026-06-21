import { motion, useReducedMotion } from 'framer-motion';
import { FaBug, FaCheckCircle, FaCode, FaDownload, FaAward } from 'react-icons/fa';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

const projects = [
  {
    num: '01', border: 'border-t-[#2563EB]', numColor: 'text-[#2563EB]', gradient: 'from-blue-100 to-blue-50',
    icon: <FaCode className="text-[#2563EB]" size={16} />,
    title: 'Fake Review Detection System',
    tech: ['Python', 'Machine Learning', 'NLP', 'Scikit-learn', 'Pandas'],
    desc: 'ML-based system to classify online reviews as genuine or suspicious using NLP preprocessing and model evaluation.',
    testing: ['Tested model predictions', 'Verified output accuracy', 'Checked data validation', 'Reviewed model behavior'],
  },
  {
    num: '02', border: 'border-t-[#0EA5E9]', numColor: 'text-[#0EA5E9]', gradient: 'from-cyan-100 to-cyan-50',
    icon: <FaCode className="text-[#0EA5E9]" size={16} />,
    title: 'Web-Based Tour Guide System',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'MySQL'],
    desc: 'Responsive tourism management website with destination recommendations, travel planning, forms, and database structure.',
    testing: ['UI testing', 'Form validation testing', 'Navigation testing', 'Responsiveness testing', 'Database verification'],
    badge: '★ Completed',
  },
  {
    num: '03', border: 'border-t-purple-500', numColor: 'text-purple-500', gradient: 'from-purple-100 to-purple-50',
    icon: <FaCode className="text-purple-500" size={16} />,
    title: 'Jewelry Shop Management System',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    desc: 'MERN stack inventory and sales management system for products, stock, customer details, and sales information.',
    testing: ['CRUD workflow testing', 'API response testing', 'Frontend validation testing', 'Database update verification'],
  },
  {
    num: '04', border: 'border-t-emerald-500', numColor: 'text-emerald-500', gradient: 'from-emerald-100 to-emerald-50',
    icon: <FaCode className="text-emerald-500" size={16} />,
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
            whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(37,99,235,0.12)' }}
            className={`relative bg-white rounded-3xl border-2 ${border} border-opacity-30 p-7 flex flex-col gap-5 transition-all duration-300 shadow-md hover:shadow-lg group overflow-hidden`}
          >
            {/* Badge */}
            {badge && (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute top-4 right-4 z-10 text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 text-[#0F172A] flex items-center gap-1"
              >
                <FaAward size={10} /> {badge}
              </motion.div>
            )}

            {/* Header */}
            <div className="flex items-start gap-4">
              <span className={`text-4xl font-black opacity-20 ${numColor} select-none`}>{num}</span>
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-2">
                  <div className={`${gradient} border border-gray-200/50 rounded-xl flex items-center justify-center shrink-0 p-2`}>
                    {icon}
                  </div>
                  <h3 className="font-black text-[#0F172A] text-base leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#2563EB] group-hover:to-[#0EA5E9] group-hover:bg-clip-text transition-all duration-300">
                    {title}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-[#64748B] text-sm leading-relaxed">{desc}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 text-[#2563EB] border border-blue-100">
                  {t}
                </span>
              ))}
            </div>

            {/* Testing focus */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 border border-blue-100/50">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 flex items-center justify-center">
                  <FaBug className="text-[#2563EB]" size={13} />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-[#0F172A]">Testing Focus</span>
              </div>
              <ul className="grid grid-cols-1 gap-2">
                {testing.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-xs text-[#64748B]">
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
        className="mt-16 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl"
      >
        {/* Decorative blur background */}
        <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3), transparent)` }} />
        
        <div className="relative z-10 flex-1">
          <h3 className="text-2xl font-black text-white mb-2">Prove Your QA Excellence</h3>
          <p className="text-white/90 text-base">Download my QA & Testing CV with all projects, methodologies, and achievements</p>
        </div>
        <motion.a
          href="/Paviyalan CV.pdf"
          download
          whileHover={{ scale: 1.08, boxShadow: '0 12px 40px rgba(16,185,129,0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 inline-flex items-center gap-2.5 px-8 py-4 bg-white text-emerald-700 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
        >
          <FaDownload size={16} /> Download QA CV
        </motion.a>
      </motion.div>
    </SectionWrapper>
  );
}
