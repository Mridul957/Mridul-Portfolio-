import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function LinksTab() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all inputs before submitting.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: `Thanks ${formData.name}! I'll review your inquiry and reply within 24h.`,
      });
      setFormData({ name: "", email: "", msg: "" });
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
    >
      {/* Left Column: Socials Grid */}
      <div className="lg:col-span-12 space-y-6 max-w-4xl mx-auto w-full">
        <div className="space-y-2">
          <h3 className="text-amber-500 font-heading font-extrabold tracking-[0.2em] uppercase text-xs">
            Connections
          </h3>
          <h2 className="text-3xl font-heading font-extrabold text-white">
            Get In Touch
          </h2>
          <p className="text-xs text-white/50 leading-relaxed font-sans max-w-sm">
            I am currently open to booking select high-end commercial projects, music aftermovies, and wedding film collaborations.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white/[0.01] rounded-2xl border border-white/5 p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Location</h4>
              <p className="text-xs text-white/80 font-sans font-semibold">Jaipur, India</p>
            </div>
          </div>

          <a
            href="mailto:hello@mridulgupta.com"
            className="bg-white/[0.01] hover:bg-white/[0.03] rounded-2xl border border-white/5 p-4 flex items-center gap-3 transition-colors duration-200"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email</h4>
              <p className="text-xs text-white/80 font-sans font-semibold">hello@mridulgupta.com</p>
            </div>
          </a>

          <a
            href="https://instagram.com/mridulgupta"
            target="_blank"
            rel="noreferrer"
            className="bg-white/[0.01] hover:bg-white/[0.03] rounded-2xl border border-white/5 p-4 flex items-center gap-3 transition-colors duration-200"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500">
              <Instagram className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Instagram</h4>
              <p className="text-xs text-white/80 font-sans font-semibold">@mridulgupta</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/mridulgupta"
            target="_blank"
            rel="noreferrer"
            className="bg-white/[0.01] hover:bg-white/[0.03] rounded-2xl border border-white/5 p-4 flex items-center gap-3 transition-colors duration-200"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500">
              <Linkedin className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">LinkedIn</h4>
              <p className="text-xs text-white/80 font-sans font-semibold">in/mridulgupta</p>
            </div>
          </a>
        </div>
      </div>


    </motion.div>
  );
}
