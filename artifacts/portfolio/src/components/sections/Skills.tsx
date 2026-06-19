import { motion } from "framer-motion";
import { Film, Palette, Layers, Scissors, Clapperboard, SunMedium } from "lucide-react";

export function Skills({ id }: { id: string }) {
  const tools = [
    { name: "Premiere Pro", icon: Clapperboard },
    { name: "After Effects", icon: Layers },
    { name: "Photoshop", icon: Palette },
    { name: "Lightroom", icon: SunMedium },
    { name: "DaVinci Resolve", icon: Film },
    { name: "Capcut", icon: Scissors },
  ];

  const skillCategories = [
    {
      title: "Video Editing",
      skills: ["Cinematic Editing", "Color Grading", "Sound Design", "Motion Graphics", "Reel Editing", "Short Form Content"]
    },
    {
      title: "Cinematography",
      skills: ["Camera Handling", "Cinematic Shot Composition", "Lighting Understanding", "Event Shooting", "Wedding Cinematography", "Gimbal Shots"]
    },
    {
      title: "Creative",
      skills: ["Visual Storytelling", "Social Media Strategy", "Fast Turnaround Editing", "Creative Direction", "Client Communication"]
    }
  ];

  const services = [
    "Wedding Video Editing", "Cinematic Reels", "Instagram Reel Editing", 
    "Commercial Video Editing", "Event Aftermovies", "Music Video Editing", 
    "Color Grading", "Motion Graphics", "Cinematography Support"
  ];

  return (
    <section id={id} className="min-h-screen py-24 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-primary font-heading font-medium tracking-wider uppercase text-sm mb-4">Skills & Tools</h3>
        <h2 className="text-4xl md:text-5xl font-heading font-bold">Craft & Arsenal</h2>
      </motion.div>

      <div className="space-y-20">
        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-2xl font-heading font-bold text-white mb-8">Software</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="glass-panel-interactive rounded-[20px] p-6 flex flex-col items-center justify-center gap-4 group"
              >
                {tool.icon ? (
                  <tool.icon className="w-10 h-10 text-white/60 group-hover:text-amber-500 transition-colors duration-300" />
                ) : (
                  <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-xs font-bold text-white/60 group-hover:text-amber-500 transition-colors duration-300">CC</div>
                )}
                <span className="text-sm font-semibold text-white/80 text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass-panel rounded-[24px] p-8"
            >
              <h4 className="text-xl font-heading font-bold text-amber-500 mb-6">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-3.5 py-1.5 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors duration-300 rounded-[10px] text-sm text-white/80 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4 className="text-2xl font-heading font-bold text-white mb-8">Services</h4>
          <div className="flex flex-wrap gap-3">
            {services.map((service, index) => (
              <span 
                key={index}
                className="px-4.5 py-2.5 bg-white/[0.03] border border-white/[0.06] hover:border-amber-500/50 hover:text-amber-500 rounded-full text-sm text-white/80 font-medium transition-all duration-300 cursor-default shadow-md"
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
