import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring } from 'framer-motion';
import {
  FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaYoutube,
  FaDownload, FaBullhorn, FaFlask
} from 'react-icons/fa';

const roles = [
  'Digital Marketing Intern',
  'Content Creator',
  'QA / Software Testing Intern',
];

const socialLinks = [
  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/paviyaalan/', label: 'LinkedIn' },
  { icon: <FaGithub size={18} />, href: 'https://github.com/PaviYaalan', label: 'GitHub' },
  { icon: <FaEnvelope size={18} />, href: 'yalanpavi@gmail.com', label: 'Email' },

];

const floatCards = [
  { value: '60K+', label: 'YouTube Views', pos: 'top-6 -left-4 sm:-left-10', delay: 0 },
  { value: '20+', label: 'Short Videos', pos: 'top-1/3 -right-4 sm:-right-10', delay: 0.3 },
  { value: '4+', label: 'QA Projects', pos: 'bottom-1/3 -left-4 sm:-left-10', delay: 0.6 },
  { value: '✦', label: 'Open to Internships', pos: 'bottom-4 -right-2 sm:-right-8', delay: 0.9 },
];

const chips = [
  'Social Media', 'Content Strategy', 'Video Editing',
  'QA Testing', 'Bug Reporting', 'Postman', 'React', 'GitHub',
];

function TypingText({ texts }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const current = texts[idx];
    const timeout = !deleting
      ? displayed.length < current.length
        ? setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65)
        : setTimeout(() => setDeleting(true), 2200)
      : displayed.length > 0
        ? setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38)
        : (() => { setDeleting(false); setIdx((i) => (i + 1) % texts.length); })();
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, texts, reduced]);

  return (
    <span className="text-[#38BDF8] font-semibold">
      {reduced ? texts[0] : displayed}
      <span className="animate-cursor ml-0.5 inline-block w-[2px] h-6 bg-[#38BDF8] align-middle" />
    </span>
  );
}

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const reduced = useReducedMotion();
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const handleMouseMove = (e) => {
    if (reduced || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen hero-gradient flex items-center overflow-hidden pt-16"
    >
      {/* ── Background blobs ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="animate-blob absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-300/30 dark:bg-blue-900/40 blur-3xl" />
        <div className="animate-blob absolute -bottom-32 right-0   w-[450px] h-[450px] rounded-full bg-cyan-300/20 dark:bg-cyan-900/30 blur-3xl" style={{ animationDelay: '3.5s' }} />
        <div className="animate-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-indigo-300/20 dark:bg-indigo-900/25 blur-2xl" style={{ animationDelay: '7s' }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(56,189,248,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      {/* ── Mouse-follow glow ── */}
      {!reduced && (
        <motion.div
          style={{ x: springX, y: springY }}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#38BDF8]/8 blur-3xl"
          aria-hidden="true"
        />
      )}

      {/* ── Main grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ─── LEFT ─── */}
          <div className="flex flex-col gap-6">

            {/* Badge */}
            <motion.div {...up(0.1)}>
              <span className="glass inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#38BDF8] px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                IT Undergraduate · SLIIT · Open to Internships
              </span>
            </motion.div>

            {/* Name */}
            <motion.div {...up(0.22)}>
              <h1 className="text-4xl sm:text-5xl xl:text-[3.6rem] font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                Hi, I'm{' '}
                <span className="shimmer-text block sm:inline">
                  Yokarasaa Paviyaalan
                </span>
              </h1>
            </motion.div>

            {/* Typing role */}
            <motion.p {...up(0.36)} className="text-xl sm:text-2xl font-medium text-slate-800 dark:text-slate-300 min-h-[2rem]">
              <TypingText texts={roles} />
            </motion.p>

            {/* Intro */}
            <motion.p {...up(0.48)} className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-lg">
              IT undergraduate at SLIIT combining creative content production, digital marketing,
              software testing, and web technology skills to build impactful digital experiences.
            </motion.p>

            {/* Buttons row 1 */}
            <motion.div {...up(0.58)} className="flex flex-wrap gap-3">
              <motion.a
                href="#marketing"
                whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(37,99,235,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-xl shadow-lg shadow-blue-700/30 hover:bg-blue-500 transition-colors text-sm"
              >
                <FaBullhorn size={14} /> View Marketing Work
              </motion.a>
              <motion.a
                href="#qa-projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-semibold rounded-xl hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all text-sm glass"
              >
                <FaFlask size={14} /> View QA Projects
              </motion.a>
            </motion.div>

            {/* CV Download row */}
            <motion.div {...up(0.66)} className="flex flex-wrap gap-3">
              <motion.a
                href="/yalaan.pdf"
                download="yalaan-CV.pdf"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#38BDF8]/15 border border-[#38BDF8]/40 text-[#38BDF8] font-semibold rounded-xl hover:bg-[#38BDF8]/25 transition-all text-sm"
              >
                <FaDownload size={13} /> Download CV
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div {...up(0.76)} className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, color: '#38BDF8' }}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#38BDF8] transition-colors"
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ─── RIGHT — profile photo ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Outer spin ring */}
            {!reduced && (
              <div className="absolute w-[440px] h-[440px] sm:w-[520px] sm:h-[520px] rounded-3xl border border-dashed border-[#38BDF8]/25 animate-spin-slow" />
            )}

            {/* Glow ring */}
            <div className="absolute w-[400px] h-[400px] sm:w-[480px] sm:h-[480px] rounded-3xl animate-glow-pulse" />

            {/* Photo frame */}
            <motion.div
              animate={reduced ? {} : { y: [0, -14, 0] }}
              transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
              className="relative w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-2xl overflow-hidden border-4 border-[#38BDF8]/60 shadow-2xl shadow-cyan-500/30 z-10"
            >
              <img
                src="/yalaan.png"
                alt="Yokarasaa Paviyaalan"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback avatar */}
              <div
                style={{ display: 'none' }}
                className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#38BDF8] items-center justify-center text-white text-5xl font-black"
              >
                YP
              </div>
            </motion.div>

            {/* Floating stat cards */}
            {floatCards.map(({ value, label, pos, delay: d }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + d, duration: 0.5 }}
                className={`absolute ${pos} glass-card px-3 py-2 rounded-xl text-center z-20 min-w-[82px]`}
                style={{
                  animation: `float-slow ${4 + d}s ease-in-out infinite`,
                  animationDelay: `${d}s`,
                }}
              >
                <p className="text-[#38BDF8] font-black text-base leading-none">{value}</p>
                <p className="text-slate-600 dark:text-slate-400 text-[10px] mt-0.5 leading-tight">{label}</p>
              </motion.div>
            ))}

            {/* Floating skill chips */}
            <div className="absolute inset-0 pointer-events-none">
              {chips.map((chip, i) => {
                const angle = (i / chips.length) * 360;
                const radius = 195;
                const rad = (angle * Math.PI) / 180;
                const x = 50 + (radius / 3) * Math.cos(rad);
                const y = 50 + (radius / 3) * Math.sin(rad);
                return (
                  <motion.span
                    key={chip}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 + i * 0.08 }}
                    className="absolute hidden xl:block text-[9px] font-semibold px-2 py-1 rounded-full glass border border-[#38BDF8]/20 text-[#38BDF8] whitespace-nowrap"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%,-50%)',
                      animation: `float-slow ${3.5 + i * 0.4}s ease-in-out infinite`,
                      animationDelay: `${i * 0.25}s`,
                    }}
                  >
                    {chip}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-16 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            animate={reduced ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="w-[1px] h-8 bg-gradient-to-b from-[#38BDF8] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
