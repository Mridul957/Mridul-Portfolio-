import { motion } from "framer-motion";
import { Award, Heart } from "lucide-react";

export function About({ id }: { id: string }) {
  const achievements = [
    "Edited JU Rhythm Aftermovie for 2 consecutive years",
    "Delivered same-day event edits with fast turnaround",
    "Worked with brands, creators, and event teams",
    "Built cinematic edits focused on emotional storytelling"
  ];

  return (
    <section id={id} className="min-h-screen py-24 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-primary font-heading font-medium tracking-wider uppercase text-sm mb-4">Summary</h3>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12">Behind the Lens</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-muted-foreground text-lg leading-relaxed"
        >
          <p>
            I'm a passionate video editor and cinematographer based in Jaipur, specializing in cinematic storytelling, wedding films, event aftermovies, music videos, and social media content.
          </p>
          <p>
            With experience in Adobe Premiere Pro and After Effects, I focus on creating visually engaging edits that combine emotion, smooth transitions, sound design, and storytelling. Over the past few years, I've worked with brands, creators, and event teams to produce content that captures attention and leaves an impact.
          </p>
          <p className="text-xl font-medium text-foreground italic border-l-2 border-primary pl-4 my-8">
            "I believe every video should feel alive — not just edited."
          </p>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-8 hover-elevate transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary w-6 h-6" />
              <h4 className="text-2xl font-heading font-bold">Achievements</h4>
            </div>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-8 hover-elevate transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="text-primary w-6 h-6" />
              <h4 className="text-2xl font-heading font-bold">Personal Touch</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not editing videos, I enjoy listening to music and stargazing at night. I love turning ordinary moments into cinematic experiences that people can feel emotionally.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
