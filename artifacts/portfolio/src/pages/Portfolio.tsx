import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { PortfolioTab } from "@/components/dashboard/PortfolioTab";

export default function Portfolio() {
  const [currentCategory, setCurrentCategory] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("category");
  });

  // Track browser Back/Forward navigation popstate to keep visual view in sync
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setCurrentCategory(params.get("category"));
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Update browser URL query params silently when category opens or closes
  const handleSelectCategory = (catId: string | null) => {
    const url = new URL(window.location.href);
    if (catId) {
      url.searchParams.set("category", catId);
    } else {
      url.searchParams.delete("category");
    }
    window.history.replaceState(null, "", url.pathname + url.search);
    setCurrentCategory(catId);
  };

  return (
    <div className="relative min-h-screen bg-[#060404] text-foreground pt-4 md:pt-8 pb-32 overflow-x-hidden selection:bg-amber-500 selection:text-black">
      
      {/* Cinematic Orange Spotlight Backdrop Glows */}
      <div className="fixed right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[130px] pointer-events-none z-0" />
      <div className="fixed left-[-15%] bottom-[10%] w-[500px] h-[500px] rounded-full bg-red-500/5 blur-[120px] pointer-events-none z-0" />

      {/* Retro Noise Layer */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.025]" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      <div className="relative z-10 w-full max-w-[1650px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-white/[0.02] backdrop-blur-[24px] border border-white/[0.06] rounded-[32px] p-6 md:p-12 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)] min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between"
        >
          {/* Header bar within Portfolio Panel */}
          <div className="flex items-center justify-between w-full border-b border-white/[0.04] pb-6 mb-8">
            {currentCategory ? (
              <button 
                onClick={() => handleSelectCategory(null)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/30 hover:bg-white/[0.04] transition-all duration-200 text-[10px] font-extrabold font-heading uppercase tracking-widest text-white/70 hover:text-white"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-amber-500" />
                Back to Collections
              </button>
            ) : (
              <Link 
                href="/#portfolio" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/30 hover:bg-white/[0.04] transition-all duration-200 text-[10px] font-extrabold font-heading uppercase tracking-widest text-white/70 hover:text-white"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-amber-500" />
                Back to Dashboard
              </Link>
            )}

          </div>

          {/* Main Portfolio Component */}
          <div className="flex-1 flex flex-col justify-start">
            <PortfolioTab 
              isExpanded={true}
              initialCategoryId={currentCategory}
              onSelectCategory={handleSelectCategory}
            />
          </div>

        </motion.div>
      </div>
    </div>
  );
}
