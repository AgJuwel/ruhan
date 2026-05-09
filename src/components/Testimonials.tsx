import { motion } from 'motion/react';

const testimonials = [
  {
    text: '"Our ROAS went from 2.1x to 7.4x in just 6 weeks. I\'ve worked with multiple agencies and no one delivered results like this. Game changer."',
    author: 'Sarah R.',
    role: 'CEO, StyleHive',
    avatar: 'SR'
  },
  {
    text: '"Grew our Instagram from 2K to 180K followers in 9 months. The content strategy was brilliant — educational, on-brand, and actually converted."',
    author: 'James M.',
    role: 'Founder, NutriCore',
    avatar: 'JM'
  },
  {
    text: '"3,200 email signups in 30 days for our SaaS launch. The TikTok creative strategy was unlike anything I\'d seen. CPL at $1.80 — unbelievable."',
    author: 'Amara K.',
    role: 'Co-founder, LaunchStack',
    avatar: 'AK'
  },
  {
    text: '"Not just a marketer — a strategic partner. Understood our brand in the first call and had campaigns live within a week. Would hire again."',
    author: 'Priya L.',
    role: 'Brand Director, LuxeHome',
    avatar: 'PL'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[var(--bg2)] overflow-hidden">
      <div className="text-center space-y-4 mb-16 px-6">
        <div className="flex items-center justify-center gap-4 text-[var(--accent2)] text-xs font-bold uppercase tracking-[0.2em]">
          <div className="w-8 h-[1px] bg-[var(--accent2)]" />
          Feedback
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight">Client Success</h2>
      </div>

      <div className="flex relative items-center">
        {/* Infinite Scrolling Track */}
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
          className="flex gap-6 whitespace-nowrap px-6"
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <div 
              key={i} 
              className="w-[360px] flex-shrink-0 bg-[var(--surface)] border border-[var(--border)] p-10 rounded-3xl space-y-8 whitespace-normal group hover:border-[var(--accent)]/50 transition-colors"
            >
              <div className="text-[var(--gold)] tracking-[0.2em] font-bold text-sm">★★★★★</div>
              <p className="text-[var(--muted)] text-sm italic leading-relaxed">
                {item.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] flex items-center justify-center font-display font-bold text-xs">
                  {item.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold">{item.author}</div>
                  <div className="text-[11px] text-[var(--muted)] uppercase tracking-wider">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Faders */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[var(--bg2)] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[var(--bg2)] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
