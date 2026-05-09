import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

function Counter({ target, decimal = 0 }: { target: number; decimal?: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const val = progress * target;
      setCount(val);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target]);

  return <span ref={nodeRef}>{count.toFixed(decimal)}</span>;
}

export default function Stats() {
  const stats = [
    { target: 25, suffix: 'K+', label: 'Ad Spend Managed', prefix: '$' },
    { target: 50, suffix: 'K+', label: 'Followers Grown' },
    { target: 12, suffix: '', label: 'Brands Helped' },
    { target: 6.2, suffix: 'x', label: 'Average ROAS', decimal: 1 },
  ];

  return (
    <div id="stats" className="bg-[var(--surface)] border-y border-[var(--border)] py-12 px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center"
        >
          <div className="font-display font-extrabold text-3xl md:text-5xl grad-accent flex justify-center items-baseline">
            {stat.prefix}
            <Counter target={stat.target} decimal={stat.decimal} />
            {stat.suffix}
          </div>
          <div className="text-[var(--muted)] text-[12px] uppercase tracking-widest mt-2">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
