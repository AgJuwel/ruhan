import { motion } from 'motion/react';
import { Send, MessageSquare, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="cta" className="py-24 px-6 md:px-20 bg-[var(--bg2)] border-t border-[var(--border)] overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.15)_0%,transparent_70%)] flex items-center justify-center text-6xl mb-12"
        >
          🚀
        </motion.div>

        <div className="text-center space-y-6 mb-12">
          <div className="flex items-center justify-center gap-4 text-[var(--accent2)] text-xs font-bold uppercase tracking-[0.2em]">
            <div className="w-8 h-[1px] bg-[var(--accent2)]" />
            Let's Talk
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">Ready to Grow Your Brand?</h2>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need Facebook campaigns, Instagram growth, or high-quality content — let's talk. I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a 
            href="https://wa.me/8801647858094" 
            target="_blank" 
            className="bg-[#25D366] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide flex items-center gap-3 transition-opacity hover:opacity-90"
            title="WhatsApp Ruhan"
          >
            <MessageSquare className="w-5 h-5" />
            WhatsApp
          </a>
          <a 
            href="mailto:shah0ruhan@gmail.com" 
            className="btn-outline px-8 py-3.5 gap-3"
            title="Email Ruhan"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-[32px] p-8 md:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-[11px] uppercase font-bold tracking-widest text-[var(--muted)] pl-2">Your Name</label>
              <input type="text" placeholder="John Smith" className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-2xl px-5 py-4 text-sm text-[var(--text)] outline-hidden focus:border-[var(--accent)] transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] uppercase font-bold tracking-widest text-[var(--muted)] pl-2">Email Address</label>
              <input type="email" placeholder="john@company.com" className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-2xl px-5 py-4 text-sm text-[var(--text)] outline-hidden focus:border-[var(--accent)] transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] uppercase font-bold tracking-widest text-[var(--muted)] pl-2">Monthly Budget</label>
              <select className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-2xl px-5 py-4 text-sm text-[var(--text)] outline-hidden focus:border-[var(--accent)] transition-colors appearance-none cursor-pointer">
                <option value="">Select range</option>
                <option>$1,000 – $5,000</option>
                <option>$5,000 – $15,000</option>
                <option>$15,000+</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[11px] uppercase font-bold tracking-widest text-[var(--muted)] pl-2">Service Needed</label>
              <select className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-2xl px-5 py-4 text-sm text-[var(--text)] outline-hidden focus:border-[var(--accent)] transition-colors appearance-none cursor-pointer">
                <option value="">Select service</option>
                <option>Paid Social Marketing</option>
                <option>Organic Growth</option>
                <option>Full-Funnel Strategy</option>
              </select>
            </div>
          </div>
          <div className="space-y-2 mb-8">
            <label className="text-[11px] uppercase font-bold tracking-widest text-[var(--muted)] pl-2">Your Goal</label>
            <textarea placeholder="What's your project about?" className="w-full h-32 bg-[var(--bg)] border border-[var(--border)] rounded-2xl px-5 py-4 text-sm text-[var(--text)] outline-hidden focus:border-[var(--accent)] transition-colors resize-none" />
          </div>
          
          <button 
            onClick={() => alert("Message received! Thanks for reaching out.")}
            className="w-full bg-[var(--accent)] text-white py-5 rounded-2xl font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_36px_rgba(124,58,237,0.5)] group"
          >
            Send Message — Let's Scale
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
