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
            <div className="absolute -left-[31px] md:-left-[47px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_rgba(228,155,15,0.5)]" />
            
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover-elevate transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold font-heading">{exp.role}</h3>
                  <div className="text-primary font-medium mt-1">{exp.company}</div>
                </div>
                <div className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
