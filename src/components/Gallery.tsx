import { motion } from 'motion/react';
import { Play, Camera, Monitor, BarChart3, Edit3 } from 'lucide-react';

const items = [
  { icon: <Play className="w-10 h-10" />, label: 'Paid Ad Reel' },
  { icon: <Camera className="w-10 h-10" />, label: 'UGC Creatives' },
  { icon: <Monitor className="w-10 h-10" />, label: 'Landing Pages' },
  { icon: <BarChart3 className="w-10 h-10" />, label: 'Data Visuals' },
  { icon: <Edit3 className="w-10 h-10" />, label: 'Copy Deck' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="space-y-4 mb-16">
        <div className="flex items-center gap-4 text-[var(--accent2)] text-xs font-bold uppercase tracking-[0.2em]">
          <div className="w-8 h-[1px] bg-[var(--accent2)]" />
          The Portfolio
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">Creative Work</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 h-auto md:h-[600px]">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className={`
              relative group flex flex-col items-center justify-center gap-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 overflow-hidden cursor-pointer
              ${i === 0 ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2'}
            `}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-[var(--accent)]/10 to-[var(--accent2)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="text-[var(--text)]/20 transition-transform duration-500 group-hover:scale-110 group-hover:text-[var(--accent)]/40 relative z-10">
              {item.icon}
            </div>
            
            <div className="font-display font-bold text-sm uppercase tracking-widest text-[var(--muted)] group-hover:text-[var(--text)] transition-colors relative z-10">
              {item.label}
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-[rgba(8,11,18,0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <span className="text-white text-xs font-bold font-display uppercase tracking-widest">Explore Project →</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
