import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: '00K+', label: 'Ad Spend Managed' },
    { value: '2.8M', label: 'Followers Grown' },
    { value: '7.2x', label: 'Avg. ROAS' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 px-6 md:px-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full z-10">
        
        {/* Left: Text Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-[var(--accent2)]/10 border border-[var(--accent2)]/30 px-4 py-1.5 rounded-full"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent2)] animate-pulse" />
            <span className="text-[11px] uppercase tracking-widest text-[var(--accent2)] font-bold">
              Open for new projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-extrabold leading-[1.06] tracking-tight"
          >
            I Grow Brands <br />
            On <span className="grad-accent">FB & IG</span> <br />
            With <span className="grad-accent">Smart Content</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--muted)] text-lg leading-relaxed max-w-lg"
          >
            Helping businesses scale through Facebook Ads, Instagram growth, and strategic content creation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#cta" className="btn-primary group">
              🚀 Hire Me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#cases" className="btn-outline">
              📊 Case Studies
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-8 border-t border-[var(--border)] flex gap-8 md:gap-12"
          >
            <div key={0}>
              <div className="font-display font-extrabold text-2xl grad-accent">25K+</div>
              <div className="text-[11px] uppercase tracking-widest text-[var(--muted)] mt-1">Ad Spend Managed</div>
            </div>
            <div key={1}>
              <div className="font-display font-extrabold text-2xl grad-accent">50K+</div>
              <div className="text-[11px] uppercase tracking-widest text-[var(--muted)] mt-1">Total Followers</div>
            </div>
            <div key={2}>
              <div className="font-display font-extrabold text-2xl grad-accent">6.2x</div>
              <div className="text-[11px] uppercase tracking-widest text-[var(--muted)] mt-1">Avg. ROAS</div>
            </div>
          </motion.div>
        </div>

        {/* Right: Illustration/Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: 'spring', damping: 20 }}
          className="relative flex justify-center items-center"
        >
          {/* Animated Background Ring */}
          <div className="absolute inset-[-20px] rounded-[32px] bg-linear-to-br from-[var(--accent)] via-[var(--accent2)] to-[var(--accent)] animate-[spin_5s_linear_infinite] opacity-50 blur-3xl" />
          
          <div className="relative z-10 w-full max-w-[420px] aspect-[3/4] bg-[var(--surface)] p-2 rounded-[32px] border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://i.ibb.co.com/40s97Zf/Ruhan-Shah.png" 
              alt="Ruhan" 
              className="w-full h-full object-cover rounded-[24px]"
              referrerPolicy="no-referrer"
            />

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="badge-float -bottom-6 -left-10"
            >
              <span className="text-xl">💸</span>
              <div>
                <div className="text-[13px] font-bold">Meta Ads</div>
                <div className="text-[10px] text-[var(--muted)] whitespace-nowrap">Facebook & Instagram</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="badge-float top-10 -right-12"
            >
              <span className="text-xl">📈</span>
              <div>
                <div className="text-[13px] font-bold">7.2x ROAS</div>
                <div className="text-[10px] text-[var(--muted)]">Average return</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="badge-float bottom-1/3 -right-12"
            >
              <span className="text-xl">🌱</span>
              <div>
                <div className="text-[13px] font-bold">Organic Growth</div>
                <div className="text-[10px] text-[var(--muted)]">Content · Strategy</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--muted)]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-5 h-5 text-[var(--accent)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
