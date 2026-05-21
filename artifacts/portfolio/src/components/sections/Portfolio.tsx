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
            className={`group relative overflow-hidden rounded-2xl bg-card border border-border ${index === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-video'}`}
          >
            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />
            
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
                {project.title}
              </h3>
              <div className="flex gap-2 flex-wrap">
                {project.categories.map((cat, cIndex) => (
                  <span 
                    key={cIndex}
                    className="px-2 py-1 text-xs font-medium bg-white/10 backdrop-blur-md rounded border border-white/20 text-white/90"
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
