import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Phone, Download } from "lucide-react";

export function Hero({ id }: { id: string }) {
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center pt-20 pb-10">
      <div className="flex justify-between items-start mb-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Open to work
        </motion.div>

        <motion.a 
          href="#"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
        >
          <Download className="w-4 h-4" />
          Download CV
        </motion.a>
      </div>

      <div className="space-y-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary font-heading font-medium tracking-wider uppercase text-sm md:text-base"
        >
          Cinematic Video Editor & Cinematographer
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-gradient-amber leading-none tracking-tighter"
        >
          Mridul<br />Gupta.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mt-8"
        >
          I create cinematic visuals that turn moments into stories. From weddings and music videos to commercial content and social media reels, I focus on emotion, storytelling, and high-quality editing that connects with people.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-wrap gap-6 mt-16 text-muted-foreground text-sm"
      >
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Jaipur, Rajasthan</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-primary" />
          <span>hello@mridulgupta.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Linkedin className="w-4 h-4 text-primary" />
          <span>in/mridulgupta</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-primary" />
          <span>+91 98765 43210</span>
        </div>
      </motion.div>
    </section>
  );
}
