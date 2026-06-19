import { motion } from "framer-motion";

export function Hero({ id }: { id: string }) {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id={id} className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typography and Action Buttons */}
        <div className="lg:col-span-7 space-y-8 z-10">
          {/* OPEN TO WORK pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/[0.04] text-[10px] font-extrabold text-amber-500 tracking-[0.18em] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
            OPEN TO WORK
          </motion.div>

          {/* Subtitle / Role */}
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-amber-500 font-heading font-extrabold tracking-[0.25em] uppercase text-xs md:text-sm pt-2"
          >
            CINEMATIC VIDEO EDITOR & CINEMATOGRAPHER
          </motion.h3>

          {/* Stacked Name "Mridul Gupta." */}
          <div className="space-y-0.5">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-7xl md:text-8xl lg:text-[7.5rem] font-display font-extrabold text-white leading-[0.9] tracking-[-0.04em] text-glow-white"
            >
              Mridul
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-7xl md:text-8xl lg:text-[7.5rem] font-serif font-bold text-amber-500 italic leading-[0.9] tracking-[-0.04em]"
            >
              Gupta.
            </motion.h1>
          </div>

          {/* Intro text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed font-sans"
          >
            I create cinematic visuals that turn moments into stories. From weddings and music videos to commercial content and social media reels, I focus on emotion, storytelling, and high-quality editing that connects with people.
          </motion.p>

          {/* Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={scrollToPortfolio}
              className="inline-flex items-center gap-3.5 bg-amber-500 text-black px-8 py-4 rounded-full font-heading font-extrabold text-xs tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_25px_rgba(245,158,11,0.25)]"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch My Work
            </button>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3.5 bg-white/[0.02] backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full font-heading font-extrabold text-xs tracking-wider uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Let's Work Together
              <svg className="w-3.5 h-3.5 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                <path d="M12 5v14m-7-7 7 7 7-7" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Exact Portrait Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden relative border border-white/[0.08] shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        >
          <img
            src="/hero-portrait.png"
            alt="Mridul Gupta Cinematic Silhouette"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
