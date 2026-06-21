import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaBullhorn, FaVideo, FaPencilAlt, FaFlask, FaCode } from 'react-icons/fa';
import { SiPostman, SiMongodb, SiMysql, SiReact, SiNodedotjs, SiExpress, SiGithub, SiDavinciresolve } from 'react-icons/si';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

const categories = [
  {
    id: 'marketing', label: 'Digital Marketing',
    icon: <FaBullhorn size={16} />, 
    gradient: 'from-blue-600 to-blue-400',
    accent: 'bg-slate-900/40 text-slate-300 border-slate-800 hover:border-blue-500/30',
    activeAccent: 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30 border-blue-500/50',
    skills: ['Social Media Management', 'Content Strategy', 'Audience Analysis', 'Organic Growth', 'Performance Tracking'],
  },
  {
    id: 'content', label: 'Content Creation',
    icon: <FaVideo size={16} />, 
    gradient: 'from-purple-600 to-purple-400',
    accent: 'bg-slate-900/40 text-slate-300 border-slate-800 hover:border-purple-500/30',
    activeAccent: 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/30 border-purple-500/50',
    skills: ['Scriptwriting', 'Video Direction', 'Short-Form Video', 'Ad Production', 'Storyboarding', 'Creative Storytelling'],
  },
  {
    id: 'editing', label: 'Editing Tools',
    icon: <FaPencilAlt size={16} />, 
    gradient: 'from-orange-600 to-orange-400',
    accent: 'bg-slate-900/40 text-slate-300 border-slate-800 hover:border-orange-500/30',
    activeAccent: 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-500/30 border-orange-500/50',
    skills: ['DaVinci Resolve', 'CapCut'],
  },
  {
    id: 'qa', label: 'QA & Testing',
    icon: <FaFlask size={16} />, 
    gradient: 'from-emerald-600 to-emerald-400',
    accent: 'bg-slate-900/40 text-slate-300 border-slate-800 hover:border-emerald-500/30',
    activeAccent: 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-500/30 border-emerald-500/50',
    skills: ['Manual Testing', 'Functional Testing', 'UI Testing', 'Regression Testing Basics', 'Test Case Preparation', 'Bug Reporting', 'API Testing Basics', 'Postman'],
  },
  {
    id: 'tech', label: 'Technical Skills',
    icon: <FaCode size={16} />, 
    gradient: 'from-cyan-600 to-cyan-400',
    accent: 'bg-slate-900/40 text-slate-300 border-slate-800 hover:border-cyan-500/30',
    activeAccent: 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30 border-cyan-500/50',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Git', 'GitHub'],
  },
];

const toolIcons = [
  { icon: <SiReact size={28} className="text-cyan-400" />,   label: 'React' },
  { icon: <SiNodedotjs size={28} className="text-green-500" />, label: 'Node.js' },
  { icon: <SiMongodb size={28} className="text-green-600" />,   label: 'MongoDB' },
  { icon: <SiMysql size={28} className="text-blue-500" />,      label: 'MySQL' },
  { icon: <SiPostman size={28} className="text-orange-500" />,  label: 'Postman' },
  { icon: <SiGithub size={28} className="text-white" />,     label: 'GitHub' },
  { icon: <SiExpress size={28} className="text-slate-400" />,    label: 'Express' },
  { icon: <SiDavinciresolve size={28} className="text-yellow-500" />, label: 'DaVinci' },
];

export default function Skills() {
  const [active, setActive] = useState('marketing');
  const reduced = useReducedMotion();
  const current = categories.find((c) => c.id === active);

  return (
    <SectionWrapper id="skills" className="section-light">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills & Expertise"
        subtitle="Click a category to explore my skill set across marketing, content, QA, and tech"
      />

      {/* Tabs */}
      <motion.div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(({ id, label, icon, accent, activeAccent }) => (
          <motion.button
            key={id}
            onClick={() => setActive(id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-bold border transition-all duration-300 ${
              active === id 
                ? `${activeAccent}` 
                : `${accent} border-slate-800`
            }`}
          >
            {icon} <span>{label}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Skills panel */}
      <AnimatePresence mode="wait">
        {current && (
          <motion.div
            key={active}
            initial={reduced ? {} : { opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-slate-900/45 backdrop-blur-xl border border-slate-850 rounded-3xl p-8 shadow-2xl mb-12 relative overflow-hidden"
          >
            {/* Top accent glow line */}
            <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${current.gradient}`} />
            
            <div className="relative z-10">
              <motion.div
                initial={reduced ? {} : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${current.gradient} text-white shadow-lg`}>
                  {current.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-white text-2xl">{current.label}</h3>
                  <p className="text-sm text-slate-400 mt-1 font-semibold">{current.skills.length} skills mastered</p>
                </div>
              </motion.div>
              
              <div className="flex flex-wrap gap-3">
                {current.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={reduced ? {} : { opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05, border: '1px solid rgba(56,189,248,0.4)', boxShadow: '0 8px 20px rgba(56,189,248,0.1)' }}
                    className="text-sm text-slate-200 bg-slate-950/50 backdrop-blur-sm border border-slate-800 px-5 py-2.5 rounded-xl font-semibold hover:bg-slate-950 transition-all cursor-default shadow-md"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tool icons row */}
      <motion.div
        initial={reduced ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
      >
        {toolIcons.map(({ icon, label }, i) => (
          <motion.div
            key={label}
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -8, border: '1px solid rgba(56,189,248,0.3)', boxShadow: '0 12px 24px rgba(56,189,248,0.08)' }}
            className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default transition-all duration-300 shadow-md group"
          >
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-850 shadow-inner group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <span className="text-[11px] text-slate-400 font-bold text-center leading-tight">{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
