import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export function Contact({ id }: { id: string }) {
  return (
    <section id={id} className="min-h-screen py-24 flex flex-col justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
          Let's create something <br />
          <span className="text-gradient-amber italic">cinematic</span> together.
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12">
          Available for freelance projects, brand collaborations, and creative endeavors.
        </p>

        <a 
          href="mailto:hello@mridulgupta.com"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Let's Work Together
          <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-12"
      >
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <h4 className="font-heading font-bold text-lg">Location</h4>
          <p className="text-muted-foreground text-center md:text-left">Jaipur, Rajasthan<br/>India</p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <h4 className="font-heading font-bold text-lg">Email</h4>
          <p className="text-muted-foreground text-center md:text-left">hello@mridulgupta.com<br/>Response within 24h</p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
            <span className="w-5 h-5 flex items-center justify-center text-primary font-bold">@</span>
          </div>
          <h4 className="font-heading font-bold text-lg">Social</h4>
          <p className="text-muted-foreground text-center md:text-left">Instagram: @mridulgupta<br/>LinkedIn: in/mridulgupta</p>
        </div>
      </motion.div>
    </section>
  );
}
