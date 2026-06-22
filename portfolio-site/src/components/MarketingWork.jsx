import { motion, useReducedMotion } from 'framer-motion';
import { FaCheckCircle, FaBullhorn, FaPlay, FaHashtag, FaDownload, FaStar } from 'react-icons/fa';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

const cases = [
  {
    gradient: 'from-blue-600/10 to-cyan-400/10 dark:from-[#2563EB] dark:to-[#0EA5E9]',
    iconBg: 'bg-slate-900/5 dark:bg-white/10',
    icon: <FaBullhorn className="text-blue-600 dark:text-white" size={22} />,
    year: '2025',
    role: 'Digital Marketing & Content Production',
    title: 'TeachMe Promotional Campaign',
    desc: 'Planned and delivered an end-to-end promotional campaign including concept development, scripting, shoot coordination, editing, and final delivery.',
    highlights: [
      'Converted client brief into campaign concept',
      'Created script and social media content plan',
      'Directed promotional shoot',
      'Edited short-form promotional content',
      'Managed client communication and deadlines',
    ],
    tags: ['Campaign', 'Video', 'Social Media'],
  },
  {
    gradient: 'from-purple-600/10 to-purple-400/10 dark:from-purple-600 dark:to-purple-400',
    iconBg: 'bg-slate-900/5 dark:bg-white/10',
    icon: <FaPlay className="text-purple-600 dark:text-white" size={20} />,
    year: '2023–Present',
    role: 'Creative Director / Co-Director',
    title: 'YouTube Music Content',
    desc: 'Worked as director and co-director for music video content published on YouTube with significant viewership and engagement.',
    highlights: [
      'Concept development & visual direction',
      'Shoot planning & coordination',
      'Music video production',
      '60,000+ YouTube views achieved',
      '1.5K+ likes on video content',
    ],
    tags: ['YouTube', 'Direction', '60K+ Views'],
    badge: '★ Featured',
  },
  {
    gradient: 'from-cyan-600/10 to-blue-400/10 dark:from-cyan-600 dark:to-blue-400',
    iconBg: 'bg-slate-900/5 dark:bg-white/10',
    icon: <FaHashtag className="text-cyan-600 dark:text-white" size={20} />,
    year: '2023–Present',
    role: 'Content Creator & Social Media Manager',
    title: 'Social Media Content Growth',
    desc: 'Created short-form content for Instagram and TikTok, managing the full content lifecycle from planning through analytics.',
    highlights: [
      'Created 20+ short-form videos',
      'Built structured content calendars',
      'Tracked reach, watch time & retention',
      'Improved future content using analytics',
    ],
    tags: ['Instagram', 'TikTok', '20+ Videos'],
  },
];

export default function MarketingWork() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="marketing" className="section-white">
      <SectionHeading
        eyebrow="Portfolio"
        title="Marketing Work"
        subtitle="Real-world digital marketing and content creation case studies"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {cases.map(({ gradient, iconBg, icon, year, role, title, desc, highlights, tags, badge }, i) => (
          <motion.div
            key={title}
            initial={reduced ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -12, border: '1px solid rgba(56,189,248,0.3)', boxShadow: '0 30px 60px rgba(56,189,248,0.08)' }}
            className="relative bg-white/60 dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800/80 overflow-hidden flex flex-col shadow-md transition-all duration-300 group"
          >
            {/* Badge */}
            {badge && (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-yellow-300 text-[10px] font-black px-3 py-1.5 rounded-full text-[#0F172A] shadow-lg"
              >
                <FaStar size={10} /> {badge}
              </motion.div>
            )}

            {/* Gradient header */}
            <div className={`bg-gradient-to-r ${gradient} p-6 flex items-start justify-between relative overflow-hidden`}>
              {/* Decorative blur */}
              <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3), transparent)` }} />
              
              <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center backdrop-blur-md border border-slate-200/50 dark:border-white/20`}>
                {icon}
              </div>
              <span className="text-slate-800 dark:text-white/90 text-[11px] font-bold bg-slate-900/5 dark:bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/30">
                {year}
              </span>
            </div>

            <div className="p-6 flex flex-col gap-4 flex-1">
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-[#38BDF8] mb-2">{role}</p>
                <h3 className="font-black text-slate-900 dark:text-white text-lg leading-snug group-hover:text-[#38BDF8] transition-all duration-300">
                  {title}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>

              <ul className="space-y-2 flex-1">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                    <FaCheckCircle className="text-[#0EA5E9] mt-0.5 shrink-0" size={12} />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((t) => (
                  <span key={t} className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 text-[#38BDF8]">
                    {t}
                  </span>
                ))}
              </div>
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
        className="mt-16 bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-[#2563EB]/25 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl relative overflow-hidden shadow-xl"
      >
        <div className="flex-1">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Ready to See My Work?</h3>
          <p className="text-slate-600 dark:text-slate-400 text-base">Download my comprehensive CV with all marketing projects, achievements, and expertise</p>
        </div>
        <motion.a
          href="/paviyalaancv.pdf"
          download="paviyalaancv.pdf"
          whileHover={{ scale: 1.08, boxShadow: '0 12px 40px rgba(37,99,235,0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] text-white font-bold rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all duration-300 whitespace-nowrap"
        >
          <FaDownload size={16} /> Download CV
        </motion.a>
      </motion.div>
    </SectionWrapper>
  );
}
