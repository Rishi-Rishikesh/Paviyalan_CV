import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaYoutube, FaDownload } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Marketing',   href: '#marketing' },
  { label: 'QA Projects', href: '#qa-projects' },
  { label: 'Contact',     href: '#contact' },
];

const socials = [
  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/paviyaalan/', label: 'LinkedIn' },
  { icon: <FaGithub size={18} />,   href: 'https://github.com/PaviYaalan',       label: 'GitHub' },
  { icon: <FaEnvelope size={18} />, href: 'mailto:yalanpavi@gmail.com',           label: 'Email' },
  { icon: <FaInstagram size={18} />,href: '#',                                    label: 'Instagram' },
  { icon: <FaYoutube size={18} />,  href: '#',                                    label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-[#030712] border-t border-slate-200 dark:border-slate-900 text-slate-600 dark:text-slate-400 pt-14 pb-8 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div>
              <span className="font-black text-2xl text-slate-900 dark:text-white">YA</span>
              <span className="font-black text-2xl text-[#38BDF8]">LAAN</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
              IT undergraduate at SLIIT combining digital marketing, content creation, and
              software testing skills.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg flex items-center justify-center hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white text-slate-700 dark:text-slate-400 transition-all duration-200 cursor-pointer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-slate-900 dark:text-white font-bold text-sm mb-4 uppercase tracking-widest">Quick Links</p>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#38BDF8] dark:hover:text-[#38BDF8] transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-[#38BDF8] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download CVs */}
          <div>
            <p className="text-slate-900 dark:text-white font-bold text-sm mb-4 uppercase tracking-widest">Download CV</p>
            <div className="space-y-3">
              <a
                href="/Paviyalan-cv.pdf"
                download
                className="flex items-center gap-2.5 px-4 py-3 bg-[#2563EB]/10 border border-[#2563EB]/30 rounded-xl text-sm font-semibold text-[#2563EB] dark:text-[#38BDF8] hover:bg-[#2563EB]/20 hover:border-[#2563EB]/60 transition-all group cursor-pointer"
              >
                <FaDownload size={13} className="group-hover:animate-bounce" />
                Marketing CV
              </a>
              <a
                href="/Yalaan.pdf"
                download
                className="flex items-center gap-2.5 px-4 py-3 bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-950 dark:hover:text-white transition-all group cursor-pointer"
              >
                <FaDownload size={13} className="group-hover:animate-bounce" />
                QA CV
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Yokarasaa Paviyaalan. All Rights Reserved.</p>
          <p>Built with React · Tailwind CSS · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
