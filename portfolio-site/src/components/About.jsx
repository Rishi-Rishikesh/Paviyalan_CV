import { motion, useReducedMotion } from 'framer-motion';
import { FaBullhorn, FaCode, FaFlask, FaVideo, FaDownload } from 'react-icons/fa';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

const highlights = [
  {
    icon: <FaBullhorn size={20} />,
    color: 'text-blue-400 group-hover:text-blue-300',
    bg: 'bg-slate-900/40 border-slate-800 hover:border-blue-500/30 shadow-blue-950/10 hover:shadow-blue-500/10',
    iconBg: 'bg-blue-500/10 border border-blue-500/20',
    label: 'Digital Marketing',
    desc: 'Campaign planning, content strategy, social media management & analytics.',
  },
  {
    icon: <FaVideo size={20} />,
    color: 'text-purple-400 group-hover:text-purple-300',
    bg: 'bg-slate-900/40 border-slate-800 hover:border-purple-500/30 shadow-purple-950/10 hover:shadow-purple-500/10',
    iconBg: 'bg-purple-500/10 border border-purple-500/20',
    label: 'Content Creation',
    desc: 'Scriptwriting, video direction, short-form content & ad production.',
  },
  {
    icon: <FaFlask size={20} />,
    color: 'text-emerald-400 group-hover:text-emerald-300',
    bg: 'bg-slate-900/40 border-slate-800 hover:border-emerald-500/30 shadow-emerald-950/10 hover:shadow-emerald-500/10',
    iconBg: 'bg-emerald-500/10 border border-emerald-500/20',
    label: 'QA & Testing',
    desc: 'Manual testing, bug reporting, API testing with Postman.',
  },
  {
    icon: <FaCode size={20} />,
    color: 'text-cyan-400 group-hover:text-cyan-300',
    bg: 'bg-slate-900/40 border-slate-800 hover:border-cyan-500/30 shadow-cyan-950/10 hover:shadow-cyan-500/10',
    iconBg: 'bg-cyan-500/10 border border-cyan-500/20',
    label: 'Web Development',
    desc: 'Full-stack experience — MERN stack, HTML/CSS/JS, Git & GitHub.',
  },
];

const stats = [
  { val: '3+',   label: 'Technical Projects', color: 'from-blue-600 to-blue-400' },
  { val: '60K+', label: 'YouTube Views', color: 'from-purple-600 to-purple-400' },
  { val: '20+',  label: 'Short-Form Videos', color: 'from-pink-600 to-pink-400' },
  { val: '2',    label: 'Career Directions', color: 'from-cyan-600 to-cyan-400' },
];

export default function About() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="about" className="section-white">
      <SectionHeading
        eyebrow="About Me"
        title="Who I Am"
        subtitle="A brief look at my background, experience, and what drives me forward"
      />

      <div className="grid lg:grid-cols-2 gap-14 items-start">
        {/* Left — bio */}
        <div className="space-y-6">
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pl-6 border-l-4 border-blue-500 space-y-4 group"
          >
            <p className="text-slate-400 text-base leading-relaxed">
              Yokarasaa Paviyaalan is an{' '}
              <span className="font-bold text-white bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border border-[#38BDF8]/20 px-2.5 py-1 rounded-lg inline-block">IT undergraduate at SLIIT</span> who combines
              digital marketing, content creation, software testing, and technical project experience.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              He is seeking internship opportunities where he can apply creative thinking, analytical
              skills, communication, QA testing, and web technology knowledge in a{' '}
              <span className="font-bold text-white bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-[#38BDF8]/20 px-2.5 py-1 rounded-lg inline-block">professional environment</span>.
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {['SLIIT · IT Undergraduate', 'Open to Internships', 'Colombo, Sri Lanka'].map((t) => (
              <motion.span
                key={t}
                whileHover={{ scale: 1.05, border: '1px solid rgba(56,189,248,0.5)' }}
                className="text-xs font-bold px-4 py-2 rounded-full bg-slate-900/60 text-[#38BDF8] border border-blue-500/20 cursor-default backdrop-blur-md shadow-lg"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={reduced ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
          >
            {stats.map(({ val, label, color }, i) => (
              <motion.div
                key={label}
                whileHover={{ y: -4, border: '1px solid rgba(56,189,248,0.5)', boxShadow: '0 12px 32px rgba(56,189,248,0.15)' }}
                initial={reduced ? {} : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center shadow-lg transition-all duration-300 backdrop-blur-md relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${color}`} />
                <p className={`text-2xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{val}</p>
                <p className="text-[10px] text-slate-400 mt-1 font-semibold leading-tight">{label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 pt-3"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(37,99,235,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="/Paviyalan CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-[#2563EB]/40 text-[#38BDF8] text-sm font-bold rounded-xl hover:bg-[#2563EB]/10 transition-all duration-300 flex items-center gap-2 inline-flex glass"
            >
              <FaDownload size={14} /> Download CV
            </motion.a>
          </motion.div>
        </div>

        {/* Right — cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {highlights.map(({ icon, color, bg, iconBg, label, desc }, i) => (
            <motion.div
              key={label}
              initial={reduced ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className={`border ${bg} rounded-2xl p-6 cursor-default transition-all duration-300 shadow-md hover:shadow-lg group`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${iconBg} ${color} group-hover:scale-110`}>
                {icon}
              </div>
              <p className="font-bold text-white text-base mb-2">{label}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
