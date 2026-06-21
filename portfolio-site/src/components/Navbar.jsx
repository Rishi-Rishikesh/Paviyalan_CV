import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';

const links = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Marketing',   href: '#marketing' },
  { label: 'QA Projects', href: '#qa-projects' },
  
  { label: 'Achievements',href: '#achievements' },
  { label: 'Contact',     href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]   = useState('#home');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => { setActive(href); setOpen(false); };

  return (
    <>
      {/* Scroll progress bar with gradient */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] via-[#0EA5E9] via-[#38BDF8] to-[#2563EB] z-[60] shadow-lg shadow-blue-500/50"
      />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-400 mx-4 rounded-2xl ${
          scrolled
            ? 'bg-slate-950/70 backdrop-blur-xl shadow-2xl border border-slate-800/80'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
          {/* Logo with gradient */}
          <a href="#home" className="flex items-center gap-1 group">
            <span className="font-black text-3xl tracking-tight transition-all duration-300 text-white group-hover:scale-110">
              Ya
            </span>
            <span className="font-black text-3xl bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent group-hover:from-[#38BDF8] group-hover:to-[#0EA5E9] transition-all">laan</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => handleClick(href)}
                className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 group ${
                  active === href
                    ? 'text-[#38BDF8]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {label}
                <span className={`absolute bottom-1 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] transition-transform duration-300 origin-left ${
                  active === href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(37,99,235,0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] text-white text-xs font-bold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Hire Me
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
            </motion.a>
            <button
              className="lg:hidden p-2 rounded-lg transition-all duration-300 text-white hover:bg-white/10"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gradient-to-b from-slate-900/95 to-slate-950/95 backdrop-blur-lg border-t border-white/10"
            >
              <nav className="flex flex-col px-6 py-5 gap-2">
                {links.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => handleClick(href)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      active === href
                        ? 'text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {label}
                  </a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 px-4 py-3 bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] text-white text-sm font-bold rounded-xl text-center"
                >
                  Hire Me
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Scroll indicator */}
      {!scrolled && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="fixed bottom-16 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#38BDF8] rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 6] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-gradient-to-b from-[#38BDF8] to-transparent rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
