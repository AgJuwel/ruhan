import { motion } from 'motion/react';
import { DollarSign, Sprout, Video } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <DollarSign className="w-6 h-6 text-[var(--accent)]" />,
      title: 'Meta Paid Ads',
      description: 'Strategic Facebook and Instagram campaigns that drive ROAS — from awareness to purchase.',
      features: [
        'Facebook Ad Strategy',
        'Instagram Story/Feed Ads',
        'Creative Copywriting',
        'Retargeting Funnels',
        'Optimization & Scaling',
        'A/B Testing'
      ],
      color: 'rgba(124, 58, 237, 0.15)'
    },
    {
      icon: <Sprout className="w-6 h-6 text-[var(--accent2)]" />,
      title: 'Instagram Growth',
      description: 'Organic audience building through content strategy and community engagement.',
      features: [
        'IG Content Strategy',
        'Hashtag/Trend Research',
        'Reels Optimization',
        'Community Engagement',
        'Profile Optimization',
        'Growth Reporting'
      ],
      color: 'rgba(6, 182, 212, 0.15)'
    },
    {
      icon: <Video className="w-6 h-6 text-[var(--gold)]" />,
      title: 'Content Creation',
      description: 'Scroll-stopping content that entertains, educates, and converts across platforms.',
      features: [
        'Short-form video (Reels)',
        'UGC-style ad creatives',
        'Copywriting & captions',
        'Hook writing & storyboards',
        'Content calendars',
        'Brand voice alignment'
      ],
      color: 'rgba(245, 158, 11, 0.15)'
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-20 bg-[var(--bg2)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-16 space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-4 text-[var(--accent2)] text-xs font-bold uppercase tracking-[0.2em]">
            <div className="w-8 h-[1px] bg-[var(--accent2)]" />
            My Expertise
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold">Services That Scale</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group p-10 bg-[var(--surface)] border border-[var(--border)] rounded-[32px] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] hover:border-[var(--accent)]/40"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${service.color} 0%, transparent 70%)` }}
              />
              
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 relative z-10"
                style={{ backgroundColor: service.color }}
              >
                {service.icon}
              </div>

              <h3 className="font-display font-bold text-2xl mb-4 relative z-10">{service.title}</h3>
              <p className="text-[var(--muted)] leading-relaxed mb-8 relative z-10">{service.description}</p>

              <ul className="space-y-3 relative z-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                    <div className="w-1 h-1 rounded-full bg-[var(--accent2)]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
