import { motion } from "framer-motion";

interface ToolDetail {
  name: string;
  logo: string;
  imageClass?: string;
  glowColor: string;
  borderColor: string;
  proficiency: number;
  textColor: string;
}

export function SkillsTab({ isExpanded = false }: { isExpanded?: boolean }) {
  const tools: ToolDetail[] = [
    {
      name: "Premiere Pro",
      logo: "/logos/premiere.png",
      glowColor: "shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
      borderColor: "border-blue-500/20 group-hover:border-blue-500/50",
      proficiency: 95,
      textColor: "text-blue-400"
    },
    {
      name: "After Effects",
      logo: "/logos/aftereffects.png",
      glowColor: "shadow-[0_0_20px_rgba(99,102,241,0.15)] group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]",
      borderColor: "border-indigo-500/20 group-hover:border-indigo-500/50",
      proficiency: 90,
      textColor: "text-indigo-400"
    },
    {
      name: "Photoshop",
      logo: "/logos/photoshop.png",
      glowColor: "shadow-[0_0_20px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
      borderColor: "border-cyan-500/20 group-hover:border-cyan-500/50",
      proficiency: 85,
      textColor: "text-cyan-400"
    },
    {
      name: "Lightroom",
      logo: "/logos/lightroom.png",
      glowColor: "shadow-[0_0_20px_rgba(245,158,11,0.15)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]",
      borderColor: "border-amber-500/20 group-hover:border-amber-500/50",
      proficiency: 90,
      textColor: "text-amber-400"
    },
    {
      name: "Higgsfield",
      logo: "/logos/higgsfield.png",
      glowColor: "shadow-[0_0_20px_rgba(163,230,53,0.15)] group-hover:shadow-[0_0_30px_rgba(163,230,53,0.3)]",
      borderColor: "border-lime-500/20 group-hover:border-lime-500/50",
      proficiency: 85,
      textColor: "text-lime-400"
    },
    {
      name: "Camera Skills & Drone",
      logo: "/logos/camera.png",
      glowColor: "shadow-[0_0_20px_rgba(250,204,21,0.15)] group-hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]",
      borderColor: "border-yellow-500/20 group-hover:border-yellow-500/50",
      proficiency: 95,
      textColor: "text-yellow-400"
    }
  ];

  const corePillars = [
    {
      title: "Video Editing",
      skills: ["Cinematic Pacing", "Sound Design & SFX", "Narrative Structuring", "Reel Pacing Hooks", "Speed Ramps"]
    },
    {
      title: "Cinematography",
      skills: ["Shot Composition", "Dynamic Lighting", "Gimbal Mechanics", "High-Speed Capture", "Anamorphic Controls"]
    },
    {
      title: "Creative Direction",
      skills: ["Hook Retention", "Pre-production Boards", "Client Strategy", "Directing Cast & Crew", "Mood Boards"]
    }
  ];

  const ToolCard = ({ tool, index, rowKey }: { tool: ToolDetail; index: number; rowKey: string }) => (
    <motion.div
      key={`${rowKey}-${tool.name}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`group bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/5 p-3 sm:p-4 md:p-5 flex flex-col items-center justify-center gap-3 md:gap-4 transition-all duration-300 ${tool.glowColor} ${tool.borderColor} cursor-default`}
    >
      <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-xl bg-black/40 border border-white/[0.06] p-2 overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />
        <img
          src={tool.logo}
          alt={`${tool.name} Logo`}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const fallback = target.nextSibling as HTMLDivElement;
            if (fallback) fallback.style.display = "flex";
          }}
          className={`w-full h-full object-contain pointer-events-none select-none filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] ${tool.imageClass || ""}`}
        />
        <div
          className={`hidden w-full h-full flex items-center justify-center font-display font-extrabold text-lg md:text-2xl ${tool.textColor}`}
          style={{ display: "none" }}
        >
          {tool.name.split(" ").map(w => w[0]).join("")}
        </div>
      </div>

      <div className="text-center space-y-0.5 mt-2">
        <span className="block text-xs md:text-sm font-heading font-extrabold text-white/90 group-hover:text-white transition-colors duration-200">
          {tool.name}
        </span>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 md:space-y-8"
    >
      <div className="space-y-2 text-left">
        <span className="text-amber-500 font-heading font-extrabold tracking-[0.25em] uppercase text-[10px] md:text-xs">
          Arsenal
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-none">
          Creative Toolkit.
        </h2>
      </div>

      {/* Industry Standard Suite — two rows of icon cards */}
      <div className="space-y-4 text-left">
        <div className="border-b border-white/[0.04] pb-2">
          <h4 className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest">
            Industry Standard Suite
          </h4>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {tools.map((tool, index) => (
            <ToolCard key={tool.name} tool={tool} index={index} rowKey="tools" />
          ))}
        </div>
      </div>

      {/* Expanded Technical View */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
          className="space-y-8 pt-4 border-t border-white/[0.04]"
        >
          {/* Creative Pillars — now first */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {corePillars.map((category) => (
              <div
                key={category.title}
                className="bg-white/[0.01] backdrop-blur-md rounded-2xl border border-white/5 p-5 text-left space-y-4"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <h4 className="text-sm font-bold text-white/90 font-heading tracking-wide">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-white/[0.02] border border-white/[0.05] text-[10px] text-white/60 font-semibold rounded-md tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      )}
    </motion.div>
  );
}
