import { motion, useReducedMotion } from 'framer-motion';
import { FaBullhorn, FaCode, FaFlask, FaVideo, FaDownload } from 'react-icons/fa';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

const highlights = [
  {
    icon: <FaBullhorn size={20} />,
    color: 'text-[#2563EB]', bg: 'bg-gradient-to-br from-blue-100 to-blue-50', border: 'border-t-[#2563EB]',
    label: 'Digital Marketing',
    desc: 'Campaign planning, content strategy, social media management & analytics.',
  },
  {
    icon: <FaVideo size={20} />,
    color: 'text-purple-500', bg: 'bg-gradient-to-br from-purple-100 to-purple-50', border: 'border-t-purple-500',
    label: 'Content Creation',
    desc: 'Scriptwriting, video direction, short-form content & ad production.',
  },
  {
    icon: <FaFlask size={20} />,
    color: 'text-emerald-500', bg: 'bg-gradient-to-br from-emerald-100 to-emerald-50', border: 'border-t-emerald-500',
    label: 'QA & Testing',
    desc: 'Manual testing, bug reporting, API testing with Postman.',
  },
  {
    icon: <FaCode size={20} />,
    color: 'text-[#38BDF8]', bg: 'bg-gradient-to-br from-sky-100 to-sky-50', border: 'border-t-[#38BDF8]',
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
            className="pl-6 border-l-4 border-gradient-to-b from-[#2563EB] to-[#38BDF8] space-y-4 group"
          >
            <p className="text-[#64748B] text-base leading-relaxed">
              Yokarasaa Paviyaalan is an{' '}
              <span className="font-bold text-[#0F172A] bg-gradient-to-r from-blue-100 to-cyan-100 px-2 py-1 rounded-lg inline-block">IT undergraduate at SLIIT</span> who combines
              digital marketing, content creation, software testing, and technical project experience.
            </p>
            <p className="text-[#64748B] text-base leading-relaxed">
              He is seeking internship opportunities where he can apply creative thinking, analytical
              skills, communication, QA testing, and web technology knowledge in a{' '}
              <span className="font-bold text-[#0F172A] bg-gradient-to-r from-cyan-100 to-blue-100 px-2 py-1 rounded-lg inline-block">professional environment</span>.
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
                whileHover={{ scale: 1.05 }}
                className="text-xs font-bold px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 text-[#2563EB] border-2 border-blue-200 cursor-default"
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
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(37,99,235,0.15)' }}
                initial={reduced ? {} : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className={`bg-gradient-to-br ${color} border-2 border-white rounded-2xl p-4 text-center shadow-lg transition-all duration-300`}
              >
                <p className="text-2xl font-black text-white">{val}</p>
                <p className="text-xs text-white/90 mt-1 font-semibold leading-tight">{label}</p>
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
              whileHover={{ scale: 1.05 }}
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
              className="px-6 py-3 border-2 border-[#2563EB] text-[#2563EB] text-sm font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 inline-flex"
            >
              <FaDownload size={14} /> Download CV
            </motion.a>
          </motion.div>
        </div>

        {/* Right — cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {highlights.map(({ icon, color, bg, border, label, desc }, i) => (
            <motion.div
              key={label}
              initial={reduced ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(37,99,235,0.12)' }}
              className={`${bg} border-2 ${border} rounded-2xl p-6 cursor-default transition-all duration-300 shadow-md hover:shadow-lg group`}
            >
              <div className={`w-12 h-12 ${color} bg-white/60 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {icon}
              </div>
              <p className="font-bold text-[#0F172A] text-base mb-2">{label}</p>
              <p className="text-[#64748B] text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
