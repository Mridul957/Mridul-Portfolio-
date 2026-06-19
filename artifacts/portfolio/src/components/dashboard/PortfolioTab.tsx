import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Play, Film, CheckCircle, Eye, Video, X } from "lucide-react";

// Fetch thumbnail using YouTube's standard image URLs
function YouTubeThumbnail({ youtubeId, objectFit = "cover" }: { youtubeId: string; objectFit?: "cover" | "contain" }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  return (
    <div className="w-full h-full absolute inset-0 relative group">
      <img
        src={thumbnailUrl}
        alt=""
        loading="lazy"
        className={`w-full h-full object-${objectFit} pointer-events-none select-none transition-transform duration-700 group-hover:scale-105`}
        onError={(e) => {
           // Fallback to hqdefault if maxresdefault is missing
           e.currentTarget.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
        }}
      />
    </div>
  );
}

interface VideoItem {
  id: string;
  youtubeId: string;
  fallbackTitle: string;
}

interface Category {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  tags: string[];
  achievements: string[];
  videos: VideoItem[];
}

const categories: Category[] = [
  {
    id: "wedding",
    title: "Cinematic Wedding Films",
    subtitle: "Event Storytelling & Color Science",
    desc: "Capturing emotional, slow-paced journeys of couples, raw expressions, and familial love. Blended with bespoke warm color-grading curves and layered foley audio design.",
    image: "/portfolio/wedding.png",
    tags: ["Wedding", "Cinematic Reels", "Gold Grade"],
    achievements: [
      "Created timeless wedding films focused on genuine moments rather than trends.",
      "Integrated drone and ground footage into cohesive cinematic narratives",
      "Delivered full 4K master files under strict turnaround timelines",
      "Pioneered warm gold custom LUT grading designed for night shoots",
      "Engineered layered ambient room foley soundscapes"
    ],
    videos: [
      { id: "w1", fallbackTitle: "Arvish Highlight", youtubeId: "xC704gJqxiE" },
      { id: "w2", fallbackTitle: "Kumud and Yash Highlight", youtubeId: "RG0vAxli-WM" },
      { id: "w3", fallbackTitle: "Priyanshi Nitin Highlight", youtubeId: "LKA-2uCR02Q" }
    ]
  },
  {
    id: "events",
    title: "Events After Movies",
    subtitle: "High-Energy Festival Teasers & Reels",
    desc: "Fast-cut, heavily-synced highlight movies designed to capture sheer scale and crowd energy. Integrates speed ramps, lens-flare graphics, and custom audio sweeps.",
    image: "/portfolio/event.png",
    tags: ["Festival", "Aftermovie", "Kinetic Post"],
    achievements: [
      "Developed fast-paced editing workflows optimized for festivals and live experiences",
      "Enhanced audience immersion through rhythm-based editing and motion-driven storytelling",
      "Engineered music-driven edits synchronized with crowd reactions and stage performances.",
      "JU Rhythm Fest post-movie lead post-production engineer",
      "Averaged 40% higher click-through rates using active audio design",
      "Delivered high-retention social cuts within 24h of the event wrap"
    ],
    videos: [
      { id: "e1", fallbackTitle: "Ju Rythum 2024 Aftemovie", youtubeId: "dMMLAExa5Mw" },
      { id: "e2", fallbackTitle: "Pink Odyssey 2025", youtubeId: "zNt2SjSRCt4" },
      { id: "e3", fallbackTitle: "Tps AfterMovie", youtubeId: "RuPYhQTuNDM" }
    ]
  },
  {
    id: "music-video",
    title: "Music Video",
    subtitle: "Stylized Post-Production & VFX Composites",
    desc: "Concept-heavy, stylistic post-production projects for independent music artists and hip-hop creators. Focused on green-screen composition and raw aesthetics.",
    image: "/portfolio/music-video.png",
    tags: ["Music", "VFX Grading", "Stylized"],
    achievements: [
      "Formulated zero-latency visual effects for complex track timelines",
      "Engineered precise sub-bass keyframe pacing for trap releases",
      "100% retention rate across collaborating regional music directors"
    ],
    videos: [
      { id: "m1", fallbackTitle: "Tere Bin Official Music Video", youtubeId: "HDan7USNYTM" }
    ]
  },
  {
    id: "brands",
    title: "Brands Ads and Work",
    subtitle: "High-Converting Commercial Visuals",
    desc: "Commercial spec promos and ad reels crafted to maximize retention, deliver concise value props, and maintain elite brand visual identities.",
    image: "/portfolio/commercial.png",
    tags: ["Brand Ads", "Retention Focus", "Commercial"],
    achievements: [
      "Maintained averages of 70%+ audience retention on vertical ad cuts",
      "Custom color-grades designed to mirror modern corporate assets",
      "Engineered advanced object tracking and floating text popups"
    ],
    videos: [
      { id: "b1", fallbackTitle: "Verandah", youtubeId: "Vrfm9kYUiKk" },
      { id: "b2", fallbackTitle: "We Are JECRCians", youtubeId: "1nZyFdmDQ_0" }
    ]
  },
  {
    id: "youtube",
    title: "Youtube Long Video",
    subtitle: "Aesthetic Documentaries & Tutorials",
    desc: "Paced, long-form post-production projects for vloggers, travelers, and educators. Focused on narrative structure, graphic overlays, and steady grading.",
    image: "/portfolio/travel.png",
    tags: ["YouTube", "Long-Form", "Documentary"],
    achievements: [
      "Structured multi-hour RAW footage into engaging 10-15m sequences",
      "Integrated kinetic charts, screen sweeps, and sound-cued graphics",
      "Successfully optimized vocal tracks and eliminated audio room hiss"
    ],
    videos: [
      { id: "y1", fallbackTitle: "10 Worst Items I Dont Buy", youtubeId: "gpnq8KA3hsA" },
      { id: "y2", fallbackTitle: "How Stress Can Save Your Life", youtubeId: "S_xOE_86h78" },
      { id: "y3", fallbackTitle: "Jecrc Campus Tour", youtubeId: "z9gM_7aY64U" }
    ]
  },
  {
    id: "reels",
    title: "Reels",
    subtitle: "Short-Form Vertical Content",
    desc: "High-retention vertical reels, talking head clips, and fitness promos designed for Instagram and TikTok with kinetic captions and quick cuts.",
    image: "/portfolio/music-video.png",
    tags: ["Reels", "Shorts", "Vertical"],
    achievements: [
      "Engineered bespoke caption animations and hook transitions",
      "Pioneered vector-shape scaling for clean multi-resolution scales",
      "Layered procedural noise and dynamic sound effects"
    ],
    videos: [
      { id: "r1", fallbackTitle: "Reel 1", youtubeId: "3WUHnr3lfSQ" },
      { id: "r2", fallbackTitle: "Reel 2", youtubeId: "XScOlrlJfuc" },
      { id: "r3", fallbackTitle: "Reel 3", youtubeId: "zfl4KYSVryE" },
      { id: "r4", fallbackTitle: "Reel 4", youtubeId: "MnYUhn3M3Yk" },
      { id: "r5", fallbackTitle: "Reel 5", youtubeId: "uMD0IoQ9vtk" }
    ]
  },
  {
    id: "documentary",
    title: "Documentary",
    subtitle: "In-Depth Storytelling & Narratives",
    desc: "Long-form storytelling capturing real-world subjects with cinematic visuals and authentic narratives.",
    image: "/portfolio/events.png",
    tags: ["STORY", "DOCU", "NARRATIVE"],
    achievements: [
      "Crafted compelling narratives through extensive footage logging and precise editing",
      "Enhanced emotional impact with documentary-style color grading and sound design",
      "Delivered broadcast-ready documentary features"
    ],
    videos: [
      { id: "d1", fallbackTitle: "Jf Doc Aftermovie", youtubeId: "YT5mjXRmfpQ" }
    ]
  }
];

function YouTubeCard({ 
  video,
  onClick, 
  isReel = false 
}: { 
  video: VideoItem;
  onClick: () => void;
  isReel?: boolean;
}) {
  const [title, setTitle] = useState(video.fallbackTitle || "");

  useEffect(() => {
    fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${video.youtubeId}`)
      .then(res => res.json())
      .then(data => {
         if (data.title) setTitle(data.title);
      })
      .catch(console.error);
  }, [video.youtubeId]);

  return (
    <div 
      onClick={onClick}
      className="group bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-amber-500/20 rounded-2xl p-3 flex flex-col gap-3 transition-all duration-300 cursor-pointer"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/35 transition-colors duration-300 z-10 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-amber-500 text-black flex items-center justify-center scale-95 group-hover:scale-105 transition-transform duration-300 shadow-lg">
            <Play className="w-4 h-4 fill-black text-black ml-0.5" />
          </div>
        </div>
        <YouTubeThumbnail youtubeId={video.youtubeId} objectFit={isReel ? "contain" : "cover"} />
      </div>
      <div className="space-y-1">
        <h4 className="text-xs font-bold text-white group-hover:text-amber-500 transition-colors duration-200">
          {title}
        </h4>
      </div>
    </div>
  );
}

export function PortfolioTab({ 
  isExpanded = false,
  onExpand,
  initialCategoryId = null,
  onSelectCategory
}: { 
  isExpanded?: boolean;
  onExpand?: (catId: string) => void;
  initialCategoryId?: string | null;
  onSelectCategory?: (catId: string | null) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAllMilestones, setShowAllMilestones] = useState(false);

  useEffect(() => {
    setShowAllMilestones(false);
    if (initialCategoryId) {
      const found = categories.find(c => c.id === initialCategoryId);
      if (found) {
        setSelectedCategory(found);
      } else {
        setSelectedCategory(null);
      }
    } else {
      setSelectedCategory(null);
    }
  }, [initialCategoryId]);

  useEffect(() => {
    if (!isExpanded) {
      setSelectedCategory(null);
    }
  }, [isExpanded]);

  const closeVideo = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveVideo(null);
    setIsPlaying(false);
  };

  const isDirectory = isExpanded && !selectedCategory;

  return (
    <div className="flex flex-col h-full bg-[#0a0a0a]/50 text-white rounded-3xl">
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div 
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col items-center justify-center p-8 lg:p-12 text-center"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 lg:mb-8 shadow-inner shadow-amber-500/5 hover:scale-105 transition-transform duration-500">
              <Film className="w-10 h-10 md:w-12 md:h-12 text-amber-500" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-4 lg:mb-6 tracking-tight">
              Cinematic <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Portfolio</span>
            </h2>
            
            <p className="text-white/60 text-sm md:text-base lg:text-lg max-w-2xl mb-8 lg:mb-12 font-sans font-light leading-relaxed">
              Explore a curated selection of cinematic wedding films, high-energy festival aftermovies, and compelling commercial visuals. Engineered with raw aesthetics, layered audio foley, and bespoke color science.
            </p>
            
            <button 
              onClick={() => onExpand && onExpand('portfolio')}
              className="px-8 lg:px-10 py-3 lg:py-4 rounded-full bg-amber-500 text-black font-bold font-sans text-sm lg:text-base hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
            >
              Explore Full Directory
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col overflow-hidden"
          >
            <div className="flex-none p-6 border-b border-white/5 bg-black/20 flex items-center justify-between sticky top-0 z-20 backdrop-blur-md">
              <div className="flex items-center gap-4">
                {selectedCategory ? (
                  <button 
                    onClick={() => {
                      setSelectedCategory(null);
                      if (onSelectCategory) onSelectCategory(null);
                    }}
                    className="p-2 -ml-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                ) : (
                  <div className="p-2 -ml-2">
                    <Video className="w-5 h-5 text-amber-500" />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-heading font-bold text-white">
                    {selectedCategory ? selectedCategory.title : "Portfolio Directory"}
                  </h2>
                  <p className="text-xs text-white/50 font-mono mt-0.5">
                    {selectedCategory ? selectedCategory.subtitle : "Select a category to view work"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 custom-scrollbar relative">
              
              {!selectedCategory ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {categories.map((cat, index) => (
                    <motion.div 
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat);
                        if (onSelectCategory) onSelectCategory(cat.id);
                      }}
                      className="group relative rounded-2xl overflow-hidden bg-white/[0.01] border border-white/5 p-4 flex flex-col gap-3 transition-all duration-300 cursor-pointer hover:bg-white/[0.03] hover:border-amber-500/20"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                        <div className={`absolute inset-0 grid ${(cat.videos.length === 2 || cat.videos.length === 3) ? 'grid-cols-2' : 'grid-cols-2 grid-rows-2'} gap-0.5`}>
                          {cat.videos.slice(0, (cat.videos.length === 2 || cat.videos.length === 3) ? 2 : 4).map(vid => (
                            <div key={vid.id} className="relative w-full h-full overflow-hidden bg-white/5 flex items-center justify-center">
                              <YouTubeThumbnail youtubeId={vid.youtubeId} objectFit={cat.id === "reels" ? "contain" : "cover"} />
                            </div>
                          ))}
                        </div>
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 z-10" />
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-bold text-white font-heading tracking-wide group-hover:text-amber-500 transition-colors">
                            {cat.title}
                          </h3>
                          <div className="text-[10px] text-white/40 font-mono mt-1">
                            {cat.videos.length} VIDEOS
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all">
                          <Play className="w-3 h-3 ml-0.5" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-20">
                  <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-0 h-fit">
                    
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-500 tracking-widest uppercase">
                        {selectedCategory.id} / DIRECTORY
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-heading font-extrabold text-white leading-tight">
                        {selectedCategory.title}
                      </h3>
                      <p className="text-white/60 text-sm lg:text-base leading-relaxed">
                        {selectedCategory.desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {selectedCategory.tags.map((tag, i) => (
                        <div key={i} className="px-2.5 py-1 rounded bg-white/5 text-[10px] font-mono text-white/50 border border-white/5">
                          #{tag.toUpperCase()}
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-white/5 space-y-4">
                      <h4 className="text-xs font-bold text-white/80 uppercase tracking-widest flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {selectedCategory.achievements.slice(0, showAllMilestones ? undefined : 3).map((ach, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50 mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{ach}</span>
                          </li>
                        ))}
                      </ul>
                      {selectedCategory.achievements.length > 3 && (
                        <button 
                          onClick={() => setShowAllMilestones(!showAllMilestones)}
                          className="text-xs text-amber-500 hover:text-amber-400 font-bold hover:underline underline-offset-4 transition-all"
                        >
                          {showAllMilestones ? "Show Less" : `View ${selectedCategory.achievements.length - 3} More`}
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-4">
                    <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest border-b border-white/[0.04] pb-2">
                      Video Directory
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedCategory.videos.map((video) => (
                        <YouTubeCard 
                          key={video.id}
                          video={video}
                          isReel={selectedCategory.id === "reels"}
                          onClick={() => {
                            setActiveVideo(video);
                            setIsPlaying(true);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Video Player Modal */}
            <AnimatePresence>
              {activeVideo && (
                <motion.div 
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="absolute inset-0 z-50 p-4 sm:p-6 lg:p-12 flex items-center justify-center bg-black/60 backdrop-blur-xl"
                  onClick={closeVideo}
                >
                  <motion.div 
                    className="w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                    layoutId={`video-${activeVideo.id}`}
                  >
                    <button 
                      onClick={(e) => closeVideo(e)}
                      className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-200 shadow-md"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    {/* Player Body Container */}
                    <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                      {activeVideo?.youtubeId && (
                        <iframe
                          src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                          title={activeVideo.fallbackTitle}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      )}
                    </div>

                    {/* Video details metadata beneath player */}
                    <div className="p-4 sm:p-6 text-left space-y-2">
                      <h3 className="text-lg font-heading font-extrabold text-white">
                        {activeVideo.fallbackTitle}
                      </h3>
                    </div>

                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
