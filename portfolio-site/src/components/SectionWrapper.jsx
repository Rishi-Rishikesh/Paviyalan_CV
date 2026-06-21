import { motion, useReducedMotion } from 'framer-motion';

export default function SectionWrapper({ children, id, className = '' }) {
  const reduced = useReducedMotion();
  return (
    <motion.section
      id={id}
      initial={reduced ? {} : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`py-24 px-4 sm:px-6 ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-16">
      {eyebrow && (
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/25 px-4 py-1.5 rounded-full mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
      <div className="mt-5 flex justify-center gap-2">
        <span className="h-1 w-10 rounded-full bg-[#2563EB]" />
        <span className="h-1 w-5  rounded-full bg-[#38BDF8]" />
        <span className="h-1 w-2  rounded-full bg-slate-300 dark:bg-slate-800" />
      </div>
    </div>
  );
}
