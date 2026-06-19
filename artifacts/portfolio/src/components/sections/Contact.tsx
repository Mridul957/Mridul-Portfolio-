import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export function Contact({ id }: { id: string }) {
  return (
    <section id={id} className="min-h-screen py-24 flex flex-col justify-center relative">
      {/* Subtle bottom glowing background element */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-80 h-80 rounded-full bg-amber-500/5 blur-[100px] pointer-events-none z-0" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass-panel text-center max-w-4xl mx-auto rounded-[32px] p-8 md:p-16 relative z-10 w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/[0.01] via-transparent to-white/[0.01] pointer-events-none" />
        
        <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 leading-tight uppercase tracking-tight text-glow-white">
          Let's create something <br />
          <span className="text-amber-500 italic font-medium">cinematic</span> together.
        </h2>
        
        <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto font-sans">
          Available for premium freelance video editing, brand collaborations, cinematic storytelling, and visual direction.
        </p>

        <a 
          href="mailto:hello@mridulgupta.com"
          className="inline-flex items-center gap-3 bg-amber-500 text-black px-8 py-4 rounded-full font-heading font-extrabold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_30px_rgba(245,158,11,0.25)]"
        >
          Let's Work Together
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 w-full"
      >
        <div className="glass-panel-interactive rounded-[24px] p-6 flex flex-col items-center md:items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-amber-500" />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading font-bold text-white text-base">Location</h4>
            <p className="text-white/60 text-sm font-sans leading-relaxed">Jaipur, Rajasthan<br/>India</p>
          </div>
        </div>

        <div className="glass-panel-interactive rounded-[24px] p-6 flex flex-col items-center md:items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <Mail className="w-5 h-5 text-amber-500" />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading font-bold text-white text-base">Email</h4>
            <p className="text-white/60 text-sm font-sans leading-relaxed">hello@mridulgupta.com<br/>Response within 24h</p>
          </div>
        </div>

        <div className="glass-panel-interactive rounded-[24px] p-6 flex flex-col items-center md:items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <span className="w-5 h-5 flex items-center justify-center text-amber-500 font-extrabold font-heading text-sm">@</span>
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading font-bold text-white text-base">Social Media</h4>
            <p className="text-white/60 text-sm font-sans leading-relaxed">Instagram: @mridulgupta<br/>LinkedIn: in/mridulgupta</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
