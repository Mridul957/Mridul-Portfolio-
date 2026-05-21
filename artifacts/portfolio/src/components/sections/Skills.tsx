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
          <h4 className="text-2xl font-heading font-bold mb-8">Software</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors duration-300 group"
              >
                {tool.icon ? (
                  <tool.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                ) : (
                  <div className="w-10 h-10 rounded bg-muted-foreground/20 flex items-center justify-center text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">CC</div>
                )}
                <span className="text-sm font-medium text-center">{tool.name}</span>
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
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h4 className="text-xl font-heading font-bold text-primary mb-6">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm"
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
          <h4 className="text-2xl font-heading font-bold mb-8">Services</h4>
          <div className="flex flex-wrap gap-3">
            {services.map((service, index) => (
              <span 
                key={index}
                className="px-4 py-2 border border-border rounded-full text-sm hover:border-primary hover:text-primary transition-colors duration-300 cursor-default"
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
