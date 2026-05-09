import { motion } from 'motion/react';
import { useState } from 'react';

const cases = [
  {
    num: '01',
    tag: 'Meta Ads',
    title: 'E-commerce Fashion Brand',
    overview: 'High CPAs and stagnant ROAS. Needed a full creative and targeting refresh.',
    result: '7.4x ROAS',
    details: 'Rebuilt ad structure with new UGC creative, refined audience segments, and staged retargeting funnel. CPA dropped 52% in 6 weeks.'
  },
  {
    num: '02',
    tag: 'Organic Growth',
    title: 'Health & Wellness Brand',
    overview: 'Zero social presence. Needed to build credibility and grow from scratch.',
    result: '180K Followers',
    details: 'Strategy built around educational short-form video. Grew from 0 to 180K IG followers in 9 months with 10%+ engagement rates.'
  },
  {
    num: '03',
    tag: 'Content Strategy',
    title: 'Personal Brand Growth',
    overview: 'Needed to increase personal brand authority and engagement through video.',
    result: '12K New Followers',
    details: 'Leveraged high-hook Reels and strategic story telling to build a loyal community. Increased monthly reach by 400% organically.'
  }
];

export default function CaseStudies() {
  return (
    <section id="cases" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-[var(--accent2)] text-xs font-bold uppercase tracking-[0.2em]">
            <div className="w-8 h-[1px] bg-[var(--accent2)]" />
            Success Stories
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">Case Studies</h2>
        </div>
        <p className="text-[var(--muted)] max-w-sm md:text-right">
          Proven results across diverse industries. Hover to see how I achieved these milestones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((item, i) => (
          <div key={i}>
            <CaseCard item={item} i={i} />
          </div>
        ))}
      </div>
    </section>
  );
}

function CaseCard({ item, i }: { item: (typeof cases)[0]; i: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15 }}
      className="relative h-[340px] perspective-[1000px] cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-700 pointer-events-none"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 flex flex-col justify-between overflow-hidden">
          <div className="font-display font-extrabold text-7xl text-[var(--accent)]/15 absolute -top-4 -right-4 line-height-none">
            {item.num}
          </div>
          <div className="relative z-10 space-y-4">
            <span className="bg-[var(--accent2)]/10 border border-[var(--accent2)]/30 text-[var(--accent2)] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {item.tag}
            </span>
            <h3 className="font-display font-bold text-xl leading-tight">{item.title}</h3>
            <p className="text-[var(--muted)] text-sm leading-relaxed">{item.overview}</p>
          </div>
          <div className="text-[var(--muted)] text-[11px] font-medium tracking-widest uppercase mt-4">
            Hover for results →
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden bg-linear-to-br from-[var(--accent)]/20 to-[var(--accent2)]/10 border border-[var(--accent)]/40 rounded-3xl p-8 flex flex-col justify-center items-center text-center rotate-y-180">
          <div className="font-display font-extrabold text-5xl grad-accent mb-4">
            {item.result}
          </div>
          <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-2">How it happened</h4>
          <p className="text-[var(--muted)] text-[13px] leading-relaxed italic">{item.details}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
