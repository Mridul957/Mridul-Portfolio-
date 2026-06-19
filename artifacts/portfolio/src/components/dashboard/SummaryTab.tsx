import { motion } from "framer-motion";
import { Zap, Target, Film } from "lucide-react";
import { useLocation } from "wouter";

export function SummaryTab({ isExpanded = false }: { isExpanded?: boolean }) {
  const [, setLocation] = useLocation();
  const projectCategories = [
    {
      id: "360-tour",
      title: "360 Tour",
      icon: Target,
      description: "Immersive 360-degree virtual tours designed for real estate, hospitality, and event spaces. Providing an interactive experience that allows viewers to explore spaces remotely.",
      glowColor: "shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
      borderColor: "border-blue-500/20 group-hover:border-blue-500/50",
      iconColor: "text-blue-500",
      tags: [
        "Virtual Real Estate",
        "Interactive Navigation",
        "High-Res Panoramas",
        "Immersive Experiences",
        "Space Mapping"
      ]
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
      <div className="space-y-1 text-left">
        <h3 className="text-amber-500 font-heading font-extrabold tracking-[0.2em] uppercase text-xs">
          Creative Focus
        </h3>
        <h2 className="text-3xl font-heading font-extrabold text-white">
          Creative Projects
        </h2>
      </div>

      {/* Single Project Box */}
      <div className="grid grid-cols-1 max-w-3xl mx-auto w-full gap-6">
        {projectCategories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setLocation(`/creative-project/${cat.id}`)}
              className={`group bg-white/[0.01] hover:bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/5 p-5 sm:p-6 text-left flex flex-col justify-between transition-all duration-300 ${cat.glowColor} ${cat.borderColor} cursor-pointer`}
            >
              <div className="space-y-4">
                {/* Header Row with Icon and Title */}
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-black/40 border border-white/[0.06] ${cat.iconColor} group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-heading tracking-wide">
                    {cat.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-xs text-white/60 leading-relaxed font-sans">
                  {cat.description}
                </p>
              </div>

              {/* Tags Section */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] space-y-2">
                <h5 className="text-[9px] font-bold text-white/30 uppercase tracking-widest">
                  Key Deliverables
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-white/[0.02] border border-white/[0.05] text-[9px] text-white/50 font-semibold rounded-md tracking-wide hover:text-white hover:bg-white/[0.04] transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
