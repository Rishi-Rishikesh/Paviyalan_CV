import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaDownload, FaUser, FaCommentDots } from 'react-icons/fa';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

const contacts = [
  { icon: <FaEnvelope size={16} />, color: 'text-blue-500 dark:text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/25', label: 'Email', value: 'yalanpavi@gmail.com', href: 'mailto:yalanpavi@gmail.com' },
  { icon: <FaPhone size={16} />,   color: 'text-cyan-500 dark:text-cyan-400', bg: 'bg-cyan-500/10',  border: 'border-cyan-500/25',  label: 'Phone', value: '+94 76 497 0463',    href: 'tel:+94764970463' },
  { icon: <FaLinkedin size={16} />, color: 'text-[#0077B5]', bg: 'bg-blue-500/10', border: 'border-blue-500/25', label: 'LinkedIn', value: 'linkedin.com/in/paviyaalan/', href: 'https://linkedin.com/in/paviyaalan/' },
  { icon: <FaGithub size={16} />,  color: 'text-slate-800 dark:text-white', bg: 'bg-slate-500/10', border: 'border-slate-500/25',  label: 'GitHub',   value: 'github.com/PaviYaalan', href: 'https://github.com/PaviYaalan' },
];

export default function Contact() {
  const reduced = useReducedMotion();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus('success');
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
        website: '',
      });
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = 'w-full px-4 py-3 bg-slate-100/60 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/80 rounded-xl text-sm text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/10 transition-all';

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
          <p className="text-slate-655 text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-sm">
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
                className="flex items-center gap-4 p-4 bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl hover:border-[#2563EB]/40 hover:shadow-md hover:bg-white/80 dark:hover:bg-slate-900/60 transition-all duration-200 group"
              >
                <div className={`w-10 h-10 ${bg} border ${border} rounded-xl flex items-center justify-center ${color} shrink-0`}>
                  {icon}
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{label}</p>
                  <p className="text-sm text-slate-800 dark:text-white font-semibold group-hover:text-[#38BDF8] transition-colors">{value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CV downloads */}
          <div className="pt-2 space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">Download CV</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/paviyalancv.pdf"
                download
                className="flex items-center justify-center gap-2 px-5 py-3 bg-[#2563EB] text-white text-xs font-bold rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all cursor-pointer"
              >
                <FaDownload size={12} /> Marketing CV
              </a>
              <a
                href="/yalaan.pdf"
                download="yalaan.pdf"
                className="flex items-center justify-center gap-2 px-5 py-3 border border-slate-200 dark:border-slate-800 text-slate-855 text-slate-800 dark:text-white text-xs font-bold rounded-xl hover:border-[#38BDF8] hover:text-[#38BDF8] hover:scale-105 transition-all glass cursor-pointer"
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
          className="bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-7"
        >
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Hidden spam trap */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Name</label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Email</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Internship / Collaboration / Project"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Message</label>
              <div className="relative">
                <FaCommentDots className="absolute left-4 top-4 text-slate-500" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Write your message..."
                  className={`${inputClass} pl-11 resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] text-white font-bold rounded-xl disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <FaPaperPlane />
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 font-semibold text-center">
                Message sent successfully. I will reply soon.
              </p>
            )}

            {status === 'error' && (
              <p className="text-red-400 font-semibold text-center">
                Message not sent. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
