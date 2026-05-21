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
        className="flex items-center gap-2 p-2 rounded-full bg-card/80 backdrop-blur-xl border border-border shadow-2xl"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`relative group flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 ${
              activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label={item.label}
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-primary/10 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <item.icon className="w-5 h-5 relative z-10" />
            
            {/* Tooltip */}
            <span className="absolute -top-10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-popover text-popover-foreground text-xs px-2 py-1 rounded-md border border-border whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </motion.div>
    </div>
  );
}
