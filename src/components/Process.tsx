import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      description: 'Deep dive into your brand, audience, competitors, and current performance. No guesswork.'
    },
    {
      num: '02',
      title: 'Strategy',
      description: 'Build a tailored marketing plan — paid, organic, or both — with clear KPIs and timelines.'
    },
    {
      num: '03',
      title: 'Execute',
      description: 'Launch campaigns, create content, run ads. Fast, clean execution with weekly reporting.'
    },
    {
      num: '04',
      title: 'Scale',
      description: 'Double down on what works. Optimise, test, iterate, and scale profitably.'
    }
  ];

  return (
    <section id="process" className="py-24 px-6 md:px-20 bg-[var(--bg2)] overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4 text-[var(--accent2)] text-xs font-bold uppercase tracking-[0.2em]">
            <div className="w-8 h-[1px] bg-[var(--accent2)]" />
            Workflow
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight">From Brief to Results</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          {/* Connecting Line */}
          <div className="absolute top-9 left-[12.5%] right-[12.5%] h-[1px] bg-linear-to-r from-[var(--accent)] to-[var(--accent2)] hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4 relative z-10 space-y-6 group"
            >
              <div className="w-[72px] h-[72px] rounded-full bg-[var(--surface)] border-2 border-[var(--accent)] flex items-center justify-center mx-auto transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-white group-hover:shadow-[0_0_28px_rgba(124,58,237,0.5)]">
                <span className="font-display font-extrabold text-xl">{step.num}</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-lg uppercase tracking-wider">{step.title}</h3>
                <p className="text-[var(--muted)] text-[13px] leading-relaxed max-w-[200px] mx-auto">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
