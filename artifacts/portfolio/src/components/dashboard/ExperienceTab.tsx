import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";

export function ExperienceTab({ isExpanded = false }: { isExpanded?: boolean }) {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      role: "Content Video Editor",
      company: "Labour Law Advisor",
      description: "Produced structured long-form and short-form legal explainer content. Focused on clear narrative pacing, motion graphics overlays, and professional color grading for educational legal videos."
    },
    {
      role: "Social Media Strategist & Video Editor",
      company: "JU Socialz",
      description: "Directed visual storytelling and content strategies for university networks. Directed and edited multiple high-energy aftermovies, cinematic event promotions, and viral reels, scaling social engagement."
    },
    {
      role: "Team Lead & Video Editor",
      company: "The Adventure Bag Club",
      description: "Managed a post-production editing team. Standardized pacing rules, asset pipelines, and creative directions for fast-turnaround travel and adventure documentaries."
    },
    {
      role: "Lead Cinematographer & Editor",
      company: "Wedding Clients",
      description: "Captured and crafted emotionally resonant wedding films, teasers, and highlight reels. Delivered tailored high-fidelity color grading and soundscapes unique to each couple's story."
    },
    {
      role: "Content Creator & Video Editor",
      company: "Gym & Fitness Brands",
      description: "Shot and edited high-energy commercial reels, product showcases, and motivational fitness content. Engineered fast-paced cuts synchronized with custom audio tracks to maximize retention."
    },
    {
      role: "Post-Production Specialist",
      company: "Creators & Influencers",
      description: "Collaborated with top-tier content creators to edit high-engagement YouTube videos, Instagram reels, and TikTok content, designing custom motion graphics and retention hooks."
    },
    {
      role: "Live Event Videographer & Editor",
      company: "Event Organizers",
      description: "Covered music festivals, corporate summits, and cultural shows. Produced rapid-delivery event recap videos and high-impact teasers for digital promotions."
    },
    {
      role: "Music Video Director & Editor",
      company: "Music Artists",
      description: "Directed and edited cinematic music videos. Integrated narrative themes with synchronized musical beats, visual effects, and customized stylistic color science."
    },
    {
      role: "Commercial Video Editor",
      company: "Startup Brands",
      description: "Developed promotional campaigns, product demos, and brand story videos. Crafted sleek, modern visual assets aligned with startup brand identities to drive conversions."
    },
    {
      role: "Campus Media Lead",
      company: "University Communities",
      description: "Supervised creative media production for university programs, shooting student spotlights, fest coverage, and social media announcements."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="space-y-1">
        <h3 className="text-amber-500 font-heading font-extrabold tracking-[0.2em] uppercase text-xs">
          Timeline
        </h3>
        <h2 className="text-3xl font-heading font-extrabold text-white">
          Career Journey
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        <motion.div 
          animate={{ height: showAll ? "auto" : "550px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden"
        >
          <div className="relative border-l border-white/5 pl-5 md:pl-8 ml-2 space-y-6 pb-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[27px] md:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#0B0807] border border-amber-500 group-hover:bg-amber-500 transition-colors duration-300 shadow-[0_0_10px_rgba(245,158,11,0.4)] z-10" />

                <div className="bg-white/[0.01] backdrop-blur-md rounded-2xl border border-white/5 p-4 sm:p-5 hover:bg-white/[0.02] hover:border-amber-500/10 transition-all duration-300 space-y-2">
                  <h3 className="text-base font-bold font-heading text-white group-hover:text-amber-500 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <span className="block text-xs font-semibold text-amber-500/80 uppercase tracking-wider">
                    {exp.company}
                  </span>
                  <p className="text-xs text-white/55 leading-relaxed font-sans border-t border-white/[0.04] pt-3">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fade overlay when collapsed */}
          <AnimatePresence>
            {!showAll && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#060404] via-[#060404]/90 to-transparent pointer-events-none z-20"
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Expand / collapse button */}
        <button
          onClick={() => setShowAll(v => !v)}
          className="mt-6 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-500/30 hover:bg-amber-500/5 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-amber-500 transition-all duration-300 z-30 relative"
        >
          {showAll ? (
            <><ChevronUp className="w-3.5 h-3.5" /> Show Less</>
          ) : (
            <><ChevronDown className="w-3.5 h-3.5" /> Show All {experiences.length} Experiences</>
          )}
        </button>
      </div>
    </motion.div>
  );
}
