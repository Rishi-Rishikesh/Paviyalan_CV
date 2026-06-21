import { motion, useReducedMotion } from 'framer-motion';
import { FaTrophy, FaUsers, FaStar } from 'react-icons/fa';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

const achievements = [
  {
    icon: <FaTrophy size={24} />,
    iconColor: 'text-yellow-400', iconBg: 'bg-yellow-500/10 border border-yellow-500/20',
    glowColor: 'shadow-yellow-500/10',
    badgeColor: 'bg-yellow-500/10 text-yellow-500 dark:text-yellow-400 border-yellow-500/20',
    year: '2025',
    badge: 'Research & Presentation',
    title: 'AI Research Participant & Poster Presenter',
    org: 'ThinkAI Expo 2025 · SLIIT Northern University',
    desc: 'Participated in and presented research findings at the ThinkAI Expo 2025 research event, showcasing AI knowledge and academic presentation skills.',
  },
  {
    icon: <FaUsers size={24} />,
    iconColor: 'text-[#2563EB] dark:text-[#38BDF8]', iconBg: 'bg-blue-500/10 border border-blue-500/20',
    glowColor: 'shadow-blue-500/10',
    badgeColor: 'bg-blue-500/10 text-[#2563EB] dark:text-[#38BDF8] border-blue-500/20',
    year: '2024',
    badge: 'Event Coordination',
    title: 'Event Team Member & Coordinator',
    org: 'Syntax Mania Event · SLIIT',
    desc: 'Served as an active team member and coordinator, handling event logistics, communications, and on-ground coordination for the Syntax Mania event.',
  },
];

export default function Achievements() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="achievements" className="section-light">
      <SectionHeading
        eyebrow="Recognition"
        title="Achievements"
        subtitle="Academic and extracurricular accomplishments that reflect my growth"
      />

      <div className="grid sm:grid-cols-2 gap-7 max-w-4xl mx-auto">
        {achievements.map(({ icon, iconColor, iconBg, glowColor, badgeColor, year, badge, title, org, desc }, i) => (
          <motion.div
            key={title}
            initial={reduced ? {} : { opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.15 }}
            whileHover={{ y: -6, border: '1px solid rgba(56,189,248,0.3)', boxShadow: '0 24px 48px rgba(56,189,248,0.08)' }}
            className="bg-white/60 dark:bg-slate-900/40 rounded-2xl border border-slate-200 dark:border-slate-800/80 p-7 flex flex-col gap-4 shadow-sm transition-all duration-300 relative overflow-hidden group"
          >
            {/* Subtle corner glow */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#38BDF8]/10 to-transparent blur-2xl" />

            <div className="flex items-start justify-between">
              <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center ${iconColor} shadow-md ${glowColor}`}>
                {icon}
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-850 px-3 py-1 rounded-full">
                  {year}
                </span>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${badgeColor}`}>
                  {badge}
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-black text-slate-900 dark:text-white text-base leading-snug group-hover:text-[#38BDF8] transition-colors mb-1">
                {title}
              </h3>
              <p className="text-[#2563EB] dark:text-[#38BDF8] text-xs font-semibold">{org}</p>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>

            {/* Stars decoration */}
            <div className="flex gap-1 mt-auto">
              {[...Array(5)].map((_, j) => (
                <FaStar key={j} size={10} className="text-yellow-400" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
