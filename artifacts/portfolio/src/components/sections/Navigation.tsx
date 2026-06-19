import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Video, Mail } from "lucide-react";

export function Navigation({ activeSection }: { activeSection: string }) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "portfolio", icon: Video, label: "Portfolio" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex items-center gap-1.5 p-2 rounded-full glass-pill shadow-2xl border-white/[0.08]"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`relative group flex items-center justify-center w-11 h-11 rounded-full transition-colors duration-300 ${
              activeSection === item.id ? "text-amber-500" : "text-white/50 hover:text-white"
            }`}
            aria-label={item.label}
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-white/[0.08] border border-white/10 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <item.icon className="w-4.5 h-4.5 relative z-10" />
            
            {/* Tooltip */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-black/90 text-white/90 text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full border border-white/10 whitespace-nowrap shadow-lg">
              {item.label}
            </span>
          </button>
        ))}
      </motion.div>
    </div>
  );
}
