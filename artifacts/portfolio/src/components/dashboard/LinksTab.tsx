import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function LinksTab({ isExpanded = false }: { isExpanded?: boolean }) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/mridulgupta957@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.msg,
          _subject: "New Inquiry from Portfolio Website"
        })
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: `Thanks ${formData.name}! I'll review your inquiry and reply within 24h.`,
        });
        setFormData({ name: "", email: "", msg: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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
            <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Location</h4>
              <p className="text-xs text-white/80 font-sans font-semibold">Jaipur, Rajasthan</p>
            </div>
          </div>

          <a
            href="mailto:mridulgupta957@gmail.com"
            className="bg-white/[0.01] hover:bg-white/[0.03] rounded-2xl border border-white/5 p-4 flex items-center gap-3 transition-colors duration-200"
          >
            <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email</h4>
              <p className="text-xs text-white/80 font-sans font-semibold truncate">mridulgupta957@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/itss.mridul/"
            target="_blank"
            rel="noreferrer"
            className="bg-white/[0.01] hover:bg-white/[0.03] rounded-2xl border border-white/5 p-4 flex items-center gap-3 transition-colors duration-200"
          >
            <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500">
              <Instagram className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Instagram</h4>
              <p className="text-xs text-white/80 font-sans font-semibold">itss.mridul</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/mridulgupta01/"
            target="_blank"
            rel="noreferrer"
            className="bg-white/[0.01] hover:bg-white/[0.03] rounded-2xl border border-white/5 p-4 flex items-center gap-3 transition-colors duration-200"
          >
            <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500">
              <Linkedin className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">LinkedIn</h4>
              <p className="text-xs text-white/80 font-sans font-semibold">mridulgupta01</p>
            </div>
          </a>
        </div>
      </div>


    </motion.div>
  );
}
