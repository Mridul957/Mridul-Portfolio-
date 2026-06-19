import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { 
  Home as HomeIcon, 
  User, 
  Briefcase, 
  Code, 
  Video, 
  Mail, 
  MapPin, 
  Instagram, 
  Linkedin,
  ArrowUpRight
} from "lucide-react";
import { SummaryTab } from "@/components/dashboard/SummaryTab";
import { ExperienceTab } from "@/components/dashboard/ExperienceTab";
import { SkillsTab } from "@/components/dashboard/SkillsTab";
import { PortfolioTab } from "@/components/dashboard/PortfolioTab";
import { LinksTab } from "@/components/dashboard/LinksTab";

type SectionId = "home" | "skills" | "portfolio" | "experience" | "links" | "summary";

export default function Home() {
  const [_, setLocation] = useLocation();
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const navItems = [
    { id: "home", label: "Home", icon: HomeIcon },
    { id: "skills", label: "Skills", icon: Code },
    { id: "portfolio", label: "Portfolio", icon: Video },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "links", label: "Links", icon: Mail },
    { id: "summary", label: "Creative Project", icon: User },
  ] as const;

  // Scroll Spy to track active section
  const handleScroll = () => {
    const sections: SectionId[] = ["home", "skills", "portfolio", "experience", "links", "summary"];
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#060404] text-foreground pt-4 md:pt-8 pb-40 sm:pb-32 overflow-x-hidden selection:bg-amber-500 selection:text-black">
      
      {/* Cinematic Orange Spotlight Backdrop Glows */}
      <div className="fixed right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[130px] pointer-events-none z-0" />
      <div className="fixed left-[-15%] bottom-[10%] w-[500px] h-[500px] rounded-full bg-red-500/5 blur-[120px] pointer-events-none z-0" />

      {/* Retro Noise Layer */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.025]" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* STACKED GLASS DASHBOARDS CONTAINER */}
      <div className="relative z-10 w-full max-w-[1650px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 space-y-16 md:space-y-24">
        
        {/* SECTION 1: HOME/HERO */}
        <section id="home" className="scroll-mt-6 md:scroll-mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-white/[0.02] backdrop-blur-[24px] border border-white/[0.06] rounded-3xl sm:rounded-[32px] p-5 sm:p-6 md:p-12 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)] flex flex-col justify-between min-h-[85vh] lg:min-h-[90vh] transition-all duration-700 ease-out hover:bg-white/[0.03] hover:border-amber-500/10 hover:shadow-[0_40px_80px_-15px_rgba(228,155,15,0.05)]"
          >
            {/* Header bar within Hero Panel */}
            <div className="flex items-center justify-between w-full border-b border-white/[0.04] pb-6 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05] text-[9px] font-bold text-white uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                Open to work
              </div>
            </div>

            {/* Panel Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
              {/* Left Column: Brand Names & Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-1">
                  <span className="text-amber-500 font-heading font-extrabold tracking-[0.25em] uppercase text-xs">
                    Video Editor & Cinematographer
                  </span>
                  <div className="space-y-0.5">
                    <h1 className="text-[3.25rem] sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-[0.95] tracking-[-0.04em] text-glow-white">
                      Mridul
                    </h1>
                    <h1 className="text-[3.25rem] sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-amber-500 italic leading-[0.95] tracking-[-0.04em]">
                      Gupta.
                    </h1>
                  </div>
                </div>

                <p className="text-white/60 text-sm md:text-base max-w-xl leading-relaxed font-sans">
                  I create cinematic visuals that turn moments into stories. From weddings and music videos to commercial content and social media reels, I focus on emotion, storytelling, and high-quality editing that connects with people.
                </p>

                {/* 2x2 Grid Info with functional clickable links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-4 border-t border-white/[0.04] max-w-xl">
                  <a 
                    href="mailto:mridulgupta957@gmail.com"
                    className="flex items-center gap-2.5 text-white/50 hover:text-amber-500 transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span className="text-xs font-sans font-semibold">mridulgupta957@gmail.com</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mridulgupta01/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 text-white/50 hover:text-amber-500 transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span className="text-xs font-sans font-semibold flex items-center gap-1">
                      mridulgupta01
                      <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                    </span>
                  </a>
                  <a 
                    href="https://www.instagram.com/itss.mridul/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 text-white/50 hover:text-amber-500 transition-colors duration-200"
                  >
                    <Instagram className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span className="text-xs font-sans font-semibold flex items-center gap-1">
                      itss.mridul
                      <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                    </span>
                  </a>
                  <div className="flex items-center gap-2.5 text-white/50 cursor-default">
                    <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span className="text-xs font-sans font-semibold">Jaipur, Rajasthan</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Giant Interactive Emoji */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full h-[280px] md:h-[340px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full bg-amber-500/20 blur-[30px] animate-pulse" />
                </div>

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [-1, 1, -1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10 group cursor-pointer"
                >
                  {/* Glassmorphic Card Shell */}
                  <div className="relative p-3 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-amber-500/30 group-hover:bg-white/[0.05]">
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
                    
                    {/* Inner Photo Frame */}
                    <div className="relative bg-black/30 rounded-3xl overflow-hidden border border-white/[0.05] w-[200px] h-[240px] md:w-[240px] md:h-[280px] flex items-end justify-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 via-transparent to-transparent opacity-60 mix-blend-screen" />
                      
                      <img 
                        src="/mridul-portrait.png" 
                        alt="Mridul Gupta"
                        className="relative z-10 w-full h-[100%] object-contain object-bottom scale-[1.15] origin-bottom filter contrast-125 saturate-[0.85] drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.2]"
                      />
                    </div>
                  </div>

                  {/* Overlapping Floating Badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10 text-[9px] font-bold text-white tracking-[0.25em] shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-20 whitespace-nowrap overflow-hidden">
                    <span className="relative z-10">Mr.g</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* EXPANDED EXTRA DETAILS SECTION */}
            <div className="mt-8 pt-8 border-t border-white/[0.04] text-left space-y-4">
              <h3 className="text-amber-500 font-heading font-extrabold tracking-[0.2em] uppercase text-[10px]">
                Creative Philosophy
              </h3>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed font-sans max-w-3xl">
                My approach to editing is grounded in rhythm, emotion, and visual continuity. Every cut is deliberate, every color grade is customized to the narrative, and every sound effect is selected to build immersion. I don't just splice clips; I design memorable visual journeys.
              </p>
              
              <div className="pt-2 space-y-2">
                <h4 className="text-white/80 font-heading font-bold text-xs">What I bring to your project:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs text-white/50 font-sans">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    Bespoke visual tone mapping
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    Kinetic high-retention cuts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    Seamless audio sound design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    4K color-science precision
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: SKILLS */}
        <section id="skills" className="scroll-mt-6 md:scroll-mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white/[0.02] backdrop-blur-[24px] border border-white/[0.06] rounded-3xl sm:rounded-[32px] p-5 sm:p-6 md:p-12 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)] flex flex-col justify-between min-h-[85vh] lg:min-h-[90vh] transition-colors duration-300"
          >
            <div className="flex-1 flex flex-col justify-center">
              <SkillsTab isExpanded={true} />
            </div>
          </motion.div>
        </section>

        {/* SECTION 3: PORTFOLIO */}
        <section id="portfolio" className="scroll-mt-6 md:scroll-mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setLocation("/portfolio")}
            className="w-full bg-white/[0.02] backdrop-blur-[24px] border border-white/[0.06] rounded-3xl sm:rounded-[32px] p-5 sm:p-6 md:p-12 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)] min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between transition-all duration-700 ease-out cursor-pointer hover:bg-white/[0.03] hover:border-amber-500/20 hover:shadow-[0_40px_80px_-15px_rgba(228,155,15,0.1)] hover:scale-[1.01]"
          >
            <div className="flex-1 flex flex-col justify-center">
              <PortfolioTab 
                isExpanded={false} 
                onExpand={(catId) => setLocation(`/portfolio?category=${catId}`)}
              />
            </div>

            {/* Bottom CTA */}
            <div 
              onClick={() => setLocation("/portfolio")}
              className="flex items-center justify-center mt-6 pt-4 border-t border-white/[0.02] text-[10px] font-extrabold font-heading uppercase tracking-wider text-amber-500 hover:text-amber-400 transition-colors duration-200 cursor-pointer"
            >
              Explore Cinematic Masterpieces →
            </div>
          </motion.div>
        </section>

        {/* SECTION 4: EXPERIENCE */}
        <section id="experience" className="scroll-mt-6 md:scroll-mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-white/[0.02] backdrop-blur-[24px] border border-white/[0.06] rounded-3xl sm:rounded-[32px] p-5 sm:p-6 md:p-12 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)] min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between transition-all duration-700 ease-out hover:bg-white/[0.03] hover:border-amber-500/10 hover:shadow-[0_40px_80px_-15px_rgba(228,155,15,0.05)]"
          >
            <div className="flex-1 flex flex-col justify-center">
              <ExperienceTab isExpanded={true} />
            </div>
          </motion.div>
        </section>

        {/* SECTION 5: LINKS & CONTACT */}
        <section id="links" className="scroll-mt-6 md:scroll-mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-white/[0.02] backdrop-blur-[24px] border border-white/[0.06] rounded-3xl sm:rounded-[32px] p-5 sm:p-6 md:p-12 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)] min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between transition-all duration-700 ease-out hover:bg-white/[0.03] hover:border-amber-500/10 hover:shadow-[0_40px_80px_-15px_rgba(228,155,15,0.05)]"
          >
            <div className="flex-1 flex flex-col justify-center">
              <LinksTab isExpanded={true} />
            </div>
          </motion.div>
        </section>

        {/* SECTION 6: SUMMARY */}
        <section id="summary" className="scroll-mt-6 md:scroll-mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-white/[0.02] backdrop-blur-[24px] border border-white/[0.06] rounded-3xl sm:rounded-[32px] p-5 sm:p-6 md:p-12 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)] min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between transition-all duration-700 ease-out hover:bg-white/[0.03] hover:border-amber-500/10 hover:shadow-[0_40px_80px_-15px_rgba(228,155,15,0.05)]"
          >
            <div className="flex-1 flex flex-col justify-center">
              <SummaryTab isExpanded={true} />
            </div>
          </motion.div>
        </section>

      </div>

      {/* FLOATING BOTTOM PILL DOCK NAVIGATION */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 p-1 bg-[#0B0807]/60 border border-white/[0.08] backdrop-blur-xl rounded-full shadow-2xl w-fit">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative group flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[10px] font-extrabold font-heading tracking-wider uppercase transition-all duration-300 ${
                  isActive ? "text-black" : "text-white/40 hover:text-white"
                }`}
                aria-label={item.label}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-scroll-indicator"
                    className="absolute inset-0 bg-white rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.25)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10 hidden sm:inline">{item.label}</span>

                {/* Mini Mobile Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 sm:group-hover:scale-0 transition-all duration-150 bg-black/90 text-white text-[8px] tracking-wider font-bold px-2 py-1 rounded border border-white/10 whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
