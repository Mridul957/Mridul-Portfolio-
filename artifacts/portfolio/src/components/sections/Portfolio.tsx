import { motion } from "framer-motion";

export function Portfolio({ id }: { id: string }) {
  const projects = [
    {
      title: "Wedding Films",
      image: "/portfolio/wedding.png",
      categories: ["Wedding", "Cinematic", "Emotion"]
    },
    {
      title: "Event Aftermovies",
      image: "/portfolio/event.png",
      categories: ["Events", "High Energy", "Fast Turnaround"]
    },
    {
      title: "Music Videos",
      image: "/portfolio/music-video.png",
      categories: ["Music", "Creative", "Color Grading"]
    },
    {
      title: "Travel Content",
      image: "/portfolio/travel.png",
      categories: ["Travel", "Storytelling", "Nature"]
    },
    {
      title: "Commercial Ads",
      image: "/portfolio/commercial.png",
      categories: ["Commercial", "Brand", "Product"]
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
        <h3 className="text-primary font-heading font-medium tracking-wider uppercase text-sm mb-4">Selected Work</h3>
        <h2 className="text-4xl md:text-5xl font-heading font-bold">Cinematic Portfolio</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative overflow-hidden glass-panel-interactive rounded-[28px] border-white/[0.08] ${index === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-video'}`}
          >
            <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent z-20" />
            
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-30 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-4 text-glow-white">
                {project.title}
              </h3>
              <div className="flex gap-2 flex-wrap">
                {project.categories.map((cat, cIndex) => (
                  <span 
                    key={cIndex}
                    className="px-3.5 py-1.5 text-xs font-semibold bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-white/90 uppercase tracking-wider"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
