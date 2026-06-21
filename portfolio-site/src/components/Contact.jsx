import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaDownload } from 'react-icons/fa';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

const contacts = [
  { icon: <FaEnvelope size={16} />, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/25', label: 'Email', value: 'yalanpavi@gmail.com', href: 'mailto:yalanpavi@gmail.com' },
  { icon: <FaPhone size={16} />,   color: 'text-cyan-400', bg: 'bg-cyan-500/10',  border: 'border-cyan-500/25',  label: 'Phone', value: '+94 76 497 0463',    href: 'tel:+94764970463' },
  { icon: <FaLinkedin size={16} />, color: 'text-[#0077B5]', bg: 'bg-blue-500/10', border: 'border-blue-500/25', label: 'LinkedIn', value: 'linkedin.com/in/paviyaalan/', href: 'https://linkedin.com/in/paviyaalan/' },
  { icon: <FaGithub size={16} />,  color: 'text-white', bg: 'bg-slate-500/10', border: 'border-slate-500/25',  label: 'GitHub',   value: 'github.com/PaviYaalan', href: 'https://github.com/PaviYaalan' },
];

export default function Contact() {
  const reduced = useReducedMotion();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const inputClass = 'w-full px-4 py-3 bg-slate-950/40 border border-slate-800/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/10 transition-all';

  return (
    <SectionWrapper id="contact" className="section-white">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Contact Me"
        subtitle="Open to internship opportunities, collaborations, and professional conversations"
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left — info */}
        <div className="space-y-6">
          <p className="text-slate-400 text-base leading-relaxed max-w-sm">
            Whether you have an internship opportunity, a project to collaborate on, or simply want
            to connect — I'd love to hear from you.
          </p>

          <div className="space-y-3">
            {contacts.map(({ icon, color, bg, border, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                initial={reduced ? {} : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl hover:border-[#2563EB]/40 hover:shadow-md hover:bg-slate-900/60 transition-all duration-200 group"
              >
                <div className={`w-10 h-10 ${bg} border ${border} rounded-xl flex items-center justify-center ${color} shrink-0`}>
                  {icon}
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{label}</p>
                  <p className="text-sm text-white font-semibold group-hover:text-[#38BDF8] transition-colors">{value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CV downloads */}
          <div className="pt-2 space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Download CV</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/Paviyalan CV.pdf"
                download
                className="flex items-center justify-center gap-2 px-5 py-3 bg-[#2563EB] text-white text-xs font-bold rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all"
              >
                <FaDownload size={12} /> Marketing CV
              </a>
              <a
                href="/Yalaan.pdf"
                download
                className="flex items-center justify-center gap-2 px-5 py-3 border border-slate-800 text-white text-xs font-bold rounded-xl hover:border-[#38BDF8] hover:text-[#38BDF8] hover:scale-105 transition-all glass"
              >
                <FaDownload size={12} /> QA CV
              </a>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-7"
        >
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-350 text-slate-300 mb-1.5">Your Name</label>
                <input type="text" value={form.name} onChange={set('name')} placeholder="Full name" className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-350 text-slate-300 mb-1.5">Email Address</label>
                <input type="email" value={form.email} onChange={set('email')} placeholder="your@email.com" className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-350 text-slate-300 mb-1.5">Subject</label>
              <input type="text" value={form.subject} onChange={set('subject')} placeholder="Internship opportunity / Collaboration" className={inputClass} />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-350 text-slate-300 mb-1.5">Message</label>
              <textarea rows={4} value={form.message} onChange={set('message')} placeholder="Tell me about the opportunity or project..." className={`${inputClass} resize-none`} />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(37,99,235,0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2563EB] text-white text-sm font-black rounded-xl transition-all duration-200 shadow-md shadow-blue-500/20"
            >
              <FaPaperPlane size={14} /> Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
