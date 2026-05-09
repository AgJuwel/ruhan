import { motion } from 'motion/react';

export default function About() {
  const tags = [
    'Facebook Ads', 'Instagram Ads', 
    'Organic Growth', 'Content Creation', 'Meta Expert'
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: 3D Visual Card */}
        <motion.div
          initial={{ opacity: 0, rotateY: -20, rotateX: 10 }}
          whileInView={{ opacity: 1, rotateY: -8, rotateX: 4 }}
          viewport={{ once: true }}
          className="relative perspective-[1000px] hidden lg:block"
        >
          <div className="card-3d hover:rotate-0 transform-gpu transition-all duration-700">
            <div className="w-20 h-20 rounded-full border-2 border-[var(--accent)] overflow-hidden mb-6">
               <img 
                src="https://images.unsplash.com/photo-1519085186584-699b0c950a49?q=80&w=2670&auto=format&fit=crop" 
                alt="Ruhan" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-display font-bold text-2xl mb-1">Ruhan</h3>
            <div className="text-[var(--accent2)] text-sm font-medium mb-6">Digital Marketing Specialist</div>
            
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="bg-[var(--accent)]/10 border border-[var(--accent)]/20 px-3 py-1 rounded-full text-[11px] text-[var(--text)]">
                  {tag}
                </span>
              ))}
            </div>

            {/* Glowing lines decorative */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--accent)]/10 blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--accent2)]/10 blur-[80px] rounded-full" />
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-[var(--accent2)] text-xs font-bold uppercase tracking-[0.2em]">
            <div className="w-8 h-[1px] bg-[var(--accent2)]" />
            About Me
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight">
            Full-Funnel Thinker. <br />
            Results-Driven Marketer.
          </h2>
          
          <div className="markdown-body space-y-4">
            <p>
              I'm a digital marketing specialist who bridges the gap between <strong>paid performance marketing</strong> and <strong>organic brand building</strong>. 
            </p>
            <p>
              I specialize in managing Meta ad campaigns (Facebook and Instagram) and building organic presence through strategic content. I focus on creating scroll-stopping visuals and copywriting that actually converts.
            </p>
            <p>
              Whether you need a paid campaign setup or a content strategy that drives growth, I'm here to help you get tangible results without the agency fluff.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-6"
          >
            <a href="#cta" className="btn-primary">
              Let's Work Together →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
