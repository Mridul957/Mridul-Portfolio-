import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience({ id }: { id: string }) {
  const experiences = [
    {
      role: "Social Media Strategist & Video Editor",
      company: "JU Socialz",
      period: "Aug 2023 – March 2025",
      description: "Worked on social media content, event coverage, cinematic edits, and promotional videos. Edited multiple high-energy aftermovies and handled visual storytelling for large university events."
    },
    {
      role: "Team Lead & Video Editor",
      company: "The Adventure Bag Club",
      period: "Sep 2024 – Dec 2024",
      description: "Led the editing team and managed content production for travel and adventure-based storytelling content."
    }
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
        <h3 className="text-primary font-heading font-medium tracking-wider uppercase text-sm mb-4">Experience</h3>
        <h2 className="text-4xl md:text-5xl font-heading font-bold">Career Journey</h2>
      </motion.div>

      <div className="relative border-l border-border/50 pl-6 md:pl-10 space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative group"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-amber-500 group-hover:bg-amber-500 transition-colors duration-300 shadow-[0_0_15px_rgba(245,158,11,0.6)] z-10" />
            
            <div className="glass-panel-interactive rounded-[24px] p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white">{exp.role}</h3>
                  <div className="text-amber-500 font-semibold mt-1">{exp.company}</div>
                </div>
                <div className="text-xs font-semibold text-white bg-white/[0.06] border border-white/[0.08] px-3.5 py-1.5 rounded-full w-fit uppercase tracking-wider">
                  {exp.period}
                </div>
              </div>
              <p className="text-white/70 leading-relaxed font-sans">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
