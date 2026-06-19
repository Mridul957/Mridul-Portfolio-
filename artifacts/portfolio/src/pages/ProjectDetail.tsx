import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Maximize2, ExternalLink, ArrowRight, MousePointerClick } from "lucide-react";

export default function ProjectDetail() {
  const [match, params] = useRoute("/creative-project/:id");
  const projectId = params?.id;
  const [activeMapId, setActiveMapId] = useState<string | null>(null);
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    setIsMapReady(false);
    // Delay iframe rendering to ensure container dimensions are calculated
    const timer = setTimeout(() => setIsMapReady(true), 800);
    return () => clearTimeout(timer);
  }, [projectId]);

  const renderPhotoshoot = () => {
    // Generate array of 5 items
    const photos = Array.from({ length: 5 }).map((_, i) => ({
      id: `photo-${i}`,
      title: `Retouch Session 0${i + 1}`,
    }));

    return (
      <div className="space-y-12 text-left">
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">
            Creative Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">
            Photo Shoot Before/After
          </h2>
          <p className="text-xs text-white/50 leading-relaxed max-w-xl">
            A selection of professional edits demonstrating color grading, lighting correction, and high-end retouching workflows.
          </p>
        </div>

        <div className="space-y-16">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col gap-4"
            >
              <h4 className="text-sm font-bold text-white tracking-widest uppercase">
                {photo.title}
              </h4>
              
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-white/[0.02] border border-white/5 p-4 md:p-8 rounded-3xl">
                
                {/* Before Image */}
                <div className="relative flex-1 rounded-2xl overflow-hidden w-full">
                  <img
                    src="/portfolio/commercial.png"
                    alt="Before"
                    className="w-full h-auto object-contain filter grayscale opacity-60"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-white/70 tracking-widest uppercase border border-white/10">
                    Before
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500">
                  <ArrowRight className="w-5 h-5" />
                </div>

                {/* After Image */}
                <div className="relative flex-1 rounded-2xl overflow-hidden w-full shadow-[0_0_40px_rgba(245,158,11,0.15)] border border-amber-500/20">
                  <img
                    src="/portfolio/commercial.png"
                    alt="After"
                    className="w-full h-auto object-contain filter brightness-110 saturate-150"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 px-3 py-1.5 rounded-full text-[10px] font-bold text-black tracking-widest uppercase shadow-lg border border-amber-400">
                    After
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const render360Tour = () => {
    // Generic embedded google maps
    const maps = [
      {
        id: "map-1",
        title: "Phi Space Virtual Tour",
        location: "Jaipur, Rajasthan",
        url: "https://www.google.com/maps/embed?pb=!4v1781885827702!6m8!1m7!1sCAoSHENJQUJJaEFGVnhCN1VZWklrWFk3cXU4Z0dCaGg.!2m2!1d26.89854925303247!2d75.76793783860718!3f25.555695969364663!4f-7.418103677151635!5f0.7820865974627469"
      },
      {
        id: "map-2",
        title: "Kyfesto Cafe Virtual Tour",
        location: "Jaipur, Rajasthan",
        url: "https://www.google.com/maps/embed?pb=!4v1781885915541!6m8!1m7!1sCAoSHENJQUJJaENKcUpXRDg3c1g1X29UN0ZXcnJGT3c.!2m2!1d26.90017760729375!2d75.79324199359938!3f90.51512166751853!4f-3.936212563533573!5f0.7820865974627469"
      }
    ];

    return (
      <div className="space-y-8 text-left">
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">
            Immersive Experiences
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">
            360 Virtual Tours
          </h2>
          <p className="text-xs text-white/50 leading-relaxed max-w-xl">
            Interactive, navigable spaces created for digital property previews and digital twins. Click to view on Google Maps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {maps.map((map, i) => (
            <motion.div
              key={map.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 flex flex-col h-[400px]"
            >
              <div className="flex-1 w-full bg-black relative">
                {/* Fallback overlay when iframe loads or if blocked */}
                <div className="absolute inset-0 flex items-center justify-center bg-white/[0.02] pointer-events-none z-0">
                  <div className="w-8 h-8 rounded-full border-2 border-blue-500/30 border-t-blue-500 animate-spin" />
                </div>
                
                {isMapReady && (
                  <iframe 
                    src={map.url} 
                    className="absolute inset-0 w-full h-full border-0 pointer-events-auto z-10"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                )}
                
                {/* Custom Overlay UI */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[9px] font-bold text-white flex items-center gap-2 pointer-events-none shadow-lg z-20">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  360° View
                </div>
              </div>
              <div className="p-6 bg-[#0c0c0c] border-t border-white/5 flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                    {map.title}
                  </h4>
                  <p className="text-[10px] text-white/50 mt-1 uppercase tracking-widest">
                    {map.location}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-blue-400 transition-colors duration-200" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const renderWebsiteBuilding = () => {
    // Generic embedded website mockups
    const sites = [
      {
        id: "web-1",
        title: "E-Commerce Luxury Platform",
        url: "https://example.com/ecommerce",
        type: "Next.js / Tailwind CSS",
        src: "https://example.com"
      },
      {
        id: "web-2",
        title: "Modern SaaS Dashboard",
        url: "https://example.com/dashboard",
        type: "React / Framer Motion",
        src: "https://example.com"
      },
      {
        id: "web-3",
        title: "Creative Agency Portfolio",
        url: "https://example.com/agency",
        type: "Vue.js / WebGL",
        src: "https://example.com"
      }
    ];

    return (
      <div className="space-y-8 text-left">
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">
            Digital Platforms
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">
            Website Building
          </h2>
          <p className="text-xs text-white/50 leading-relaxed max-w-xl">
            Custom-built, responsive web applications prioritizing speed, animations, and premium UX.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sites.map((site, i) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-[#0f0f13] border border-white/10 rounded-2xl overflow-hidden hover:border-pink-500/40 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] transition-all duration-500 flex flex-col h-[600px]"
            >
              {/* Mock Browser Header */}
              <div className="bg-[#1a1a24] px-4 py-3 flex items-center gap-4 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 bg-black/40 rounded-md px-3 py-1.5 flex items-center justify-center border border-white/5 overflow-hidden">
                  <span className="text-[9px] font-mono text-white/40 truncate">{site.url}</span>
                </div>
              </div>

              {/* Website Frame Container */}
              <div className="flex-1 w-full bg-white relative overflow-hidden group-hover:bg-gray-50 transition-colors duration-500">
                {/* Note: In a real scenario with strict X-Frame-Options, iframes might fail to load. 
                    We use a generic example here as a placeholder. */}
                <iframe 
                  src={site.src}
                  className="w-[150%] h-[150%] border-0 transform scale-[0.6666] origin-top-left pointer-events-auto filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Live Site Overlay Button */}
                <a 
                  href={site.url}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-pink-500 text-black px-6 py-2 rounded-full font-heading font-extrabold text-xs uppercase tracking-widest shadow-xl flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-105"
                >
                  Visit Live Site
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              
              <div className="p-5 bg-[#0f0f13] border-t border-white/5">
                <h4 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors duration-200">
                  {site.title}
                </h4>
                <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest font-mono">
                  {site.type}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-[#060404] text-foreground pt-4 md:pt-8 pb-32 overflow-x-hidden selection:bg-amber-500 selection:text-black">
      
      {/* Cinematic Spotlight Backdrop Glows */}
      <div className="fixed right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[130px] pointer-events-none z-0" />
      <div className="fixed left-[-15%] bottom-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />

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
          className="w-full bg-white/[0.02] backdrop-blur-[24px] border border-white/[0.06] rounded-[32px] p-6 md:p-12 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)] min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-start"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between w-full border-b border-white/[0.04] pb-6 mb-12">
            <Link 
              href="/#summary" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/30 hover:bg-white/[0.04] transition-all duration-200 text-[10px] font-extrabold font-heading uppercase tracking-widest text-white/70 hover:text-white"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Dashboard
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05] text-[9px] font-bold text-white/80 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              Project Details
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-full h-full">
            {projectId === "photoshoot" && renderPhotoshoot()}
            {projectId === "360-tour" && render360Tour()}
            {projectId === "website-building" && renderWebsiteBuilding()}
            {!["photoshoot", "360-tour", "website-building"].includes(projectId || "") && (
              <div className="flex flex-col items-center justify-center py-32 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30 mb-4">
                  <Maximize2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-white">Project Not Found</h3>
                <p className="text-sm text-white/50 font-sans">The requested creative project details could not be loaded.</p>
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </div>
  );
}
