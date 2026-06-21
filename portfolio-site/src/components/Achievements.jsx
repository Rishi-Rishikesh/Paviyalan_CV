import { motion, useReducedMotion } from 'framer-motion';
import { FaTrophy, FaUsers, FaStar } from 'react-icons/fa';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

const achievements = [
  {
    icon: <FaTrophy size={24} />,
    iconColor: 'text-yellow-400', iconBg: 'bg-yellow-50',
    glowColor: 'shadow-yellow-200',
    badgeColor: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    year: '2025',
    badge: 'Research & Presentation',
    title: 'AI Research Participant & Poster Presenter',
    org: 'ThinkAI Expo 2025 · SLIIT Northern University',
    desc: 'Participated in and presented research findings at the ThinkAI Expo 2025 research event, showcasing AI knowledge and academic presentation skills.',
  },
  {
    icon: <FaUsers size={24} />,
    iconColor: 'text-[#2563EB]', iconBg: 'bg-blue-50',
    glowColor: 'shadow-blue-200',
    badgeColor: 'bg-blue-50 text-[#2563EB] border-blue-200',
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
            whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(15,23,42,0.1)' }}
            className="bg-white rounded-2xl border border-[#E2E8F0] p-7 flex flex-col gap-4 shadow-sm transition-all duration-300 relative overflow-hidden group"
          >
            {/* Subtle corner glow */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#38BDF8]/10 to-transparent blur-2xl" />

            <div className="flex items-start justify-between">
              <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center ${iconColor} shadow-sm ${glowColor} shadow-md`}>
                {icon}
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="text-xs font-bold text-[#64748B] bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 rounded-full">
                  {year}
                </span>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${badgeColor}`}>
                  {badge}
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-black text-[#0F172A] text-base leading-snug group-hover:text-[#2563EB] transition-colors mb-1">
                {title}
              </h3>
              <p className="text-[#2563EB] text-xs font-semibold">{org}</p>
            </div>

            <p className="text-[#64748B] text-sm leading-relaxed">{desc}</p>

            {/* Stars decoration */}
            <div className="flex gap-1 mt-auto">
              {[...Array(5)].map((_, j) => (
                <FaStar key={j} size={10} className="text-yellow-300" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
