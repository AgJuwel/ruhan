import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 md:px-20 border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="font-display font-extrabold text-xl grad-text">Ruhan.</div>
        
        <ul className="flex gap-8 text-[var(--muted)] text-[13px] font-medium tracking-wide">
          <li><a href="https://www.facebook.com/ruhanshah0" target="_blank" className="hover:text-[var(--text)] transition-colors">Facebook</a></li>
          <li><a href="https://www.instagram.com/ruhan.shah15/" target="_blank" className="hover:text-[var(--text)] transition-colors">Instagram</a></li>
          <li><a href="#about" className="hover:text-[var(--text)] transition-colors">About</a></li>
          <li><a href="#services" className="hover:text-[var(--text)] transition-colors">Services</a></li>
        </ul>

        <div className="text-[var(--muted)] text-[12px] tracking-wide">
          © {currentYear} Ruhan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
