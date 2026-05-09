import { motion } from 'motion/react';

export default function Navbar() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#cases' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-20 py-4 glass">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display font-extrabold text-xl grad-text"
      >
        Ruhan.
      </motion.div>
      
      <ul className="hidden md:flex items-center gap-10">
        {links.map((link, i) => (
          <motion.li
            key={link.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <a 
              href={link.href}
              className="text-[var(--muted)] text-[13px] font-medium tracking-widest uppercase hover:text-[var(--text)] transition-colors"
            >
              {link.name}
            </a>
          </motion.li>
        ))}
      </ul>

      <motion.a
        href="#cta"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-[var(--accent)] text-white px-6 py-2 rounded-full text-[13px] font-semibold tracking-wide hover:shadow-[0_0_28px_rgba(124,58,237,0.55)] transition-all"
      >
        Hire Me →
      </motion.a>
    </nav>
  );
}
