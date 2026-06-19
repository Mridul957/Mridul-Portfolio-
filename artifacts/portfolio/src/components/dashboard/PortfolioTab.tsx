import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Play, Pause, Film, CheckCircle, Clock, Eye, Video, Maximize2, Volume2, VolumeX, X } from "lucide-react";

// Renders the mid-frame of a video as its thumbnail using preload="metadata" + seek
// Utilizes IntersectionObserver to prevent downloading all videos on initial page load
function VideoThumbnail({ videoUrl, fallbackImage, thumbnailTime, objectFit = "cover" }: { videoUrl?: string; fallbackImage: string; thumbnailTime?: number; objectFit?: "cover" | "contain" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Load slightly before it enters screen
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoadedMetadata = () => {
    // Only auto-seek to the middle if a specific thumbnailTime wasn't requested
    if (thumbRef.current && thumbRef.current.duration && thumbnailTime === undefined) {
      thumbRef.current.currentTime = thumbRef.current.duration / 2;
    }
  };

  if (!videoUrl) {
    return (
      <img
        src={fallbackImage}
        alt=""
        loading="lazy"
        className={`w-full h-full object-${objectFit} pointer-events-none select-none`}
      />
    );
  }

  // Use the native media fragment to hint the browser about the start time
  const srcWithTime = thumbnailTime !== undefined ? `${videoUrl}#t=${thumbnailTime}` : videoUrl;

  return (
    <div ref={containerRef} className="w-full h-full absolute inset-0">
      {isInView ? (
        <video
          ref={thumbRef}
          src={srcWithTime}
          className={`w-full h-full object-${objectFit} pointer-events-none select-none`}
          onLoadedMetadata={handleLoadedMetadata}
          preload="metadata"
          muted
          playsInline
        />
      ) : (
        <img
          src={fallbackImage}
          alt=""
          loading="lazy"
          className={`w-full h-full object-${objectFit} pointer-events-none select-none`}
        />
      )}
    </div>
  );
}

interface VideoItem {
  id: string;
  title: string;
  duration: string;
  views: string;
  desc: string;
  image: string;
  videoUrl?: string;
  thumbnailTime?: number;
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
      {
        id: "w1",
        title: "Arvish Highlight",
        duration: "04:12",
        views: "1.2M+",
        desc: "A breathtaking royal wedding film capturing signature tracking shots, slow-mo reveals, and customized orchestral backing soundtracks.",
        image: "/portfolio/wedding.png",
        videoUrl: "/videos/Cinematic Wedding Films & Reels/Arvish Higlight.mp4",
        thumbnailTime: 7
      },
      {
        id: "w2",
        title: "Kumud and Yash Highlight",
        duration: "02:30",
        views: "850K+",
        desc: "A fast-paced destination wedding reel optimized for vertical screens, kinetic speed ramps, and seamless horizon-match transitions.",
        image: "/portfolio/wedding.png",
        videoUrl: "/videos/Cinematic Wedding Films & Reels/Kumud and Yash Highlight.mp4",
        thumbnailTime: 142
      },
      {
        id: "w3",
        title: "Priyanshi Nitin Highlight",
        duration: "04:00",
        views: "600K+",
        desc: "An elegant cinematic wedding film featuring intimate moments, slow-motion sequences, and beautiful storytelling.",
        image: "/portfolio/wedding.png",
        videoUrl: "/videos/Cinematic Wedding Films & Reels/Priyanshi Nitin Highlight Final1.4 Low.mp4"
      }
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
      {
        id: "e1",
        title: "Ju Rythum 2024 Aftemovie",
        duration: "03:15",
        views: "450K+",
        desc: "The ultimate collegiate music festival aftermovie, beat-synced with visual zoom cuts and heavy crowd base sweeps.",
        image: "/portfolio/event.png",
        videoUrl: "/videos/Events After Movies/Ju Rythum 2024 Aftemovie.mp4"
      },
      {
        id: "e2",
        title: "Pink Odyssey 2025",
        duration: "01:15",
        views: "200K+",
        desc: "Cinematic commercial teaser for luxury automotive exhibits, loaded with speed cuts and anamorphic light leaks.",
        image: "/portfolio/event.png",
        videoUrl: "/videos/Events After Movies/Pink Odyssey 2025.mp4"
      },
      {
        id: "e3",
        title: "Tps AfterMovie",
        duration: "02:45",
        views: "180K+",
        desc: "A stunning showcase of scale and energy with seamless transitions and deep cinematic grades.",
        image: "/portfolio/event.png",
        videoUrl: "/videos/Events After Movies/Tps AfterMovie.mp4"
      }
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
      {
        id: "m1",
        title: "Tere Bin Official Music Video",
        duration: "03:45",
        views: "3.2M+",
        desc: "A high-concept post-production workflow utilizing 2D tracked neon elements, particle systems, and warm desert tones.",
        image: "/portfolio/music-video.png",
        videoUrl: "/videos/Music Video/Tere Bin  Official Music Video.mp4"
      }
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
      {
        id: "b1",
        title: "Verandah",
        duration: "01:00",
        views: "600K+",
        desc: "A stunning architectural real estate commercial emphasizing spatial flow and natural light, featuring elegant tracking shots.",
        image: "/portfolio/commercial.png",
        videoUrl: "/videos/Brand and Ads/Verandah .mp4"
      },
      {
        id: "b2",
        title: "We Are JECRCians",
        duration: "02:30",
        views: "180K+",
        desc: "High-energy brand ad for JECRC University showcasing student life, campus culture, and dynamic kinetic typography.",
        image: "/portfolio/commercial.png",
        videoUrl: "/videos/Brand and Ads/We Are JECRCians  JECRC University.mp4"
      }
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
      {
        id: "y1",
        title: "10 Worst Items I Dont Buy",
        duration: "12:40",
        views: "95K+",
        desc: "An elaborate cinematic travel documentary tracking the dunes of Jaisalmer, graded with Arri Alexa color maps.",
        image: "/portfolio/travel.png",
        videoUrl: "/videos/Youtube Long Video/10 Worst Items I Dont Buy.mp4"
      },
      {
        id: "y2",
        title: "How Stress Can Save Your Life",
        duration: "15:10",
        views: "150K+",
        desc: "Educational breakdown video edited with dynamic screen logs, slide-ins, zoom captures, and background soundscapes.",
        image: "/portfolio/travel.png",
        videoUrl: "/videos/Youtube Long Video/How Stress Can Save Your Life.mp4"
      },
      {
        id: "y3",
        title: "Jecrc Campus Tour",
        duration: "10:20",
        views: "210K+",
        desc: "Comprehensive campus walkthrough utilizing drone shots, smooth gimbal movements, and crisp color science.",
        image: "/portfolio/travel.png",
        videoUrl: "/videos/Youtube Long Video/Jecrc Campus Tour.mp4"
      }
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
      {
        id: "r1",
        title: "Fitness Coach",
        duration: "00:15",
        views: "320K+",
        desc: "High-energy fitness coaching reel with fast pacing and impactful typography.",
        image: "/portfolio/music-video.png",
        videoUrl: "/videos/Reels/Fitness Coach.mp4"
      },
      {
        id: "r2",
        title: "Talking Head 1",
        duration: "00:30",
        views: "160K+",
        desc: "Clean, professional talking head edit with b-roll overlays and smooth transitions.",
        image: "/portfolio/music-video.png",
        videoUrl: "/videos/Reels/Talking Head 1.mp4"
      },
      {
        id: "r3",
        title: "Talking Head",
        duration: "00:45",
        views: "210K+",
        desc: "Engaging vertical content piece retaining audience attention with dynamic zoom cuts.",
        image: "/portfolio/music-video.png",
        videoUrl: "/videos/Reels/Talking Head.mp4"
      },
      {
        id: "r4",
        title: "Tech Talking Head",
        duration: "00:40",
        views: "190K+",
        desc: "Tech-focused explainer reel using animated overlays to illustrate complex topics.",
        image: "/portfolio/music-video.png",
        videoUrl: "/videos/Reels/Tech Talking Head.mp4"
      },
      {
        id: "r5",
        title: "Testimonial",
        duration: "00:50",
        views: "250K+",
        desc: "Authentic client testimonial video emphasizing emotional resonance and clean audio.",
        image: "/portfolio/music-video.png",
        videoUrl: "/videos/Reels/Testimonial.mp4"
      }
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
      {
        id: "d1",
        title: "Jf Doc Aftermovie",
        duration: "05:00",
        views: "100K+",
        desc: "An in-depth documentary aftermovie featuring profound narratives and immersive visual storytelling.",
        image: "/portfolio/events.png",
        videoUrl: "/videos/Documentary/Jf Doc Aftermovie HB.mp4",
        thumbnailTime: 0.42
      }
    ]
  }
];

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
  const [videoProgress, setVideoProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerContainerRef = useRef<HTMLDivElement | null>(null);
  const [showAllMilestones, setShowAllMilestones] = useState(false);

  // Sync category state with initialCategoryId from parent (handles deep-linking)
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

  // Auto-reset category selection when the parent card collapses (only on dashboard teaser)
  useEffect(() => {
    if (!isExpanded) {
      setSelectedCategory(null);
    }
  }, [isExpanded]);

  // Auto-simulate video progression when playing the mock video
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !activeVideo?.videoUrl) {
      interval = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeVideo]);

  // Synchronize playing state with the video element ref
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(err => console.log("Video playback started/resumed:", err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, activeVideo]);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration || 1;
      setVideoProgress((current / duration) * 100);
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (playerContainerRef.current) {
      if (playerContainerRef.current.requestFullscreen) {
        playerContainerRef.current.requestFullscreen();
      }
    }
  };

  const closeVideo = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setActiveVideo(null);
    setIsPlaying(false);
    setVideoProgress(0);
  };

  return (
    <div className="h-full text-left">
      <AnimatePresence mode="wait">
        {!selectedCategory ? (
          /* SECTION A: Category Cards Grid */
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="text-amber-500 font-heading font-extrabold tracking-[0.25em] uppercase text-[10px] md:text-xs">
                Selected Work
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-none">
                Cinematic Portfolio.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((cat, index) => {
                const isDirectory = cat.videos.length > 1;

                return (
                  <motion.div
                    key={cat.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!isExpanded && onExpand) {
                        onExpand(cat.id);
                      } else {
                        setSelectedCategory(cat);
                        if (onSelectCategory) {
                          onSelectCategory(cat.id);
                        }
                      }
                    }}
                    className="group relative rounded-2xl overflow-hidden bg-white/[0.01] border border-white/5 p-4 flex flex-col gap-3 transition-all duration-300 cursor-pointer hover:bg-white/[0.03] hover:border-amber-500/20"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    {/* Category Card Header Thumbnail */}
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                      {isDirectory ? (
                        <>
                          <div className={`absolute inset-0 grid ${(cat.videos.length === 2 || cat.videos.length === 3) ? 'grid-cols-2' : 'grid-cols-2 grid-rows-2'} gap-0.5`}>
                            {cat.videos.slice(0, (cat.videos.length === 2 || cat.videos.length === 3) ? 2 : 4).map(vid => (
                              <div key={vid.id} className="relative w-full h-full overflow-hidden bg-white/5 flex items-center justify-center">
                                <VideoThumbnail videoUrl={vid.videoUrl} fallbackImage={vid.image} thumbnailTime={vid.thumbnailTime} objectFit={cat.id === "reels" ? "contain" : "cover"} />
                              </div>
                            ))}
                          </div>
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 z-10" />
                        </>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 z-10" />
                          {cat.videos[0] ? (
                            <VideoThumbnail videoUrl={cat.videos[0].videoUrl} fallbackImage={cat.videos[0].image || cat.image} thumbnailTime={cat.videos[0].thumbnailTime} objectFit={cat.id === "reels" ? "contain" : "cover"} />
                          ) : (
                            <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none select-none" />
                          )}
                        </>
                      )}
                    </div>

                  {/* Card Titles */}
                  <div className="space-y-1.5">
                    <h3 className={`text-sm md:text-base font-bold text-white transition-colors duration-200 ${isExpanded ? "group-hover:text-amber-500" : ""}`}>
                      {cat.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.tags.map((tag) => (
                        <span key={tag} className="text-[8px] font-bold text-white/30 hover:text-white/50 uppercase tracking-widest transition-colors duration-150">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
            </div>
          </motion.div>
        ) : (
          /* SECTION B: Inside Category - Video List Sub-Gallery */
          <motion.div
            key="category-videos"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Split Screen Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Far Left Column: Sidebar Navigation */}
              <div className="hidden lg:flex lg:col-span-2 flex-col gap-2 border-r border-white/5 pr-4 sticky top-4">
                <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 border-b border-white/[0.04] pb-2">
                  Collections
                </h4>
                {categories.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCategory(cat);
                      if (onSelectCategory) onSelectCategory(cat.id);
                    }}
                    className={`text-left px-3 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                      selectedCategory.id === cat.id 
                        ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' 
                        : 'text-white/40 hover:text-white/80 hover:bg-white/[0.03] border border-transparent'
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>

              {/* Mobile Horizontal Navigation Slider */}
              <div className="flex lg:hidden overflow-x-auto pb-2 -mx-2 px-2 sm:-mx-6 sm:px-6 gap-2 snap-x snap-mandatory hide-scrollbar">
                {categories.map(cat => (
                  <button 
                    key={`mobile-nav-${cat.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCategory(cat);
                      if (onSelectCategory) onSelectCategory(cat.id);
                    }}
                    className={`flex-shrink-0 snap-start text-center px-4 py-2 rounded-full text-[10px] font-extrabold font-heading uppercase tracking-widest transition-all duration-200 whitespace-nowrap ${
                      selectedCategory.id === cat.id 
                        ? 'bg-amber-500 text-black border border-amber-500 shadow-[0_4px_15px_rgba(245,158,11,0.25)]' 
                        : 'text-white/60 hover:text-white bg-white/[0.02] border border-white/[0.05]'
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>

              {/* Middle Column: Category Story & Milestones */}
              <div className="lg:col-span-3 space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                    {selectedCategory.subtitle}
                  </span>
                  <h3 className="text-xl md:text-2xl font-heading font-extrabold text-white">
                    {selectedCategory.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed font-sans pt-2">
                    {selectedCategory.desc}
                  </p>
                </div>

                {/* Core Milestones */}
                <div className="space-y-3 pt-4 border-t border-white/[0.04]">
                  <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest flex items-center justify-between cursor-pointer md:cursor-auto" onClick={() => setShowAllMilestones(!showAllMilestones)}>
                    <span>Key Milestones & Standard</span>
                    <span className="md:hidden text-amber-500">{showAllMilestones ? "▲" : "▼"}</span>
                  </h4>
                  <div className={`space-y-2.5 ${showAllMilestones ? 'block' : 'hidden md:block'}`}>
                    {selectedCategory.achievements.map((ach, idx) => (
                      <div key={ach} className={`flex items-start gap-2.5 text-xs text-white/70 font-sans leading-relaxed ${(!showAllMilestones && idx > 0) ? 'hidden md:flex' : 'flex'}`}>
                        <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                  {/* Show only first point on mobile when closed */}
                  {!showAllMilestones && (
                    <div className="md:hidden space-y-2.5">
                      {selectedCategory.achievements.slice(0, 1).map((ach) => (
                        <div key={ach} className="flex items-start gap-2.5 text-xs text-white/70 font-sans leading-relaxed">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Interactive Video Showcase Grid */}
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest border-b border-white/[0.04] pb-2">
                  Video Directory
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedCategory.videos.map((video) => (
                    <div 
                      key={video.id}
                      onClick={() => {
                        setActiveVideo(video);
                        setIsPlaying(true);
                        setVideoProgress(0);
                      }}
                      className="group bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-amber-500/20 rounded-2xl p-3 flex flex-col gap-3 transition-all duration-300 cursor-pointer"
                    >
                      {/* Image Thumbnail Box with Play button */}
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/35 transition-colors duration-300 z-10 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-amber-500 text-black flex items-center justify-center scale-95 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                            <Play className="w-4 h-4 fill-black text-black ml-0.5" />
                          </div>
                        </div>
                        <VideoThumbnail videoUrl={video.videoUrl} fallbackImage={video.image} thumbnailTime={video.thumbnailTime} objectFit={selectedCategory.id === "reels" ? "contain" : "cover"} />
                        <div className="absolute bottom-2 left-2 bg-black/85 backdrop-blur-md px-2 py-1 rounded text-[9px] font-sans font-bold text-white/90 z-20 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-500" />
                          {video.duration}
                        </div>
                      </div>

                      {/* Video details */}
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-white group-hover:text-amber-500 transition-colors duration-200">
                          {video.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION C: Cinematic Video Player Modal Overlay */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-md"
            onClick={(e) => closeVideo(e)}
          >
            <motion.div
              ref={playerContainerRef}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl bg-[#090707] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={(e) => closeVideo(e)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-200 shadow-md"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Player Body Container */}
              <div className="relative aspect-video bg-black flex items-center justify-center group/player">
                {/* Pulsing Visualizer wave when playing */}
                {isPlaying && (
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent pointer-events-none z-10" />
                )}

                {/* Core Video Visual Centerpiece */}
                <div className="absolute inset-0 z-0">
                  {activeVideo.videoUrl ? (
                    <video
                      ref={videoRef}
                      src={activeVideo.videoUrl}
                      className="w-full h-full object-contain cursor-pointer"
                      onTimeUpdate={handleTimeUpdate}
                      onEnded={() => setIsPlaying(false)}
                      onClick={(e) => togglePlay(e)}
                      controlsList="nodownload"
                      onContextMenu={(e) => e.preventDefault()}
                      preload="auto"
                    />
                  ) : (
                    <img 
                      src={activeVideo.image} 
                      alt="" 
                      className="w-full h-full object-cover select-none"
                    />
                  )}
                </div>

                {/* Big Center Overlay Play/Pause triggers (hidden when video is playing for cleaner preview, but visible on hover) */}
                <button
                  onClick={(e) => togglePlay(e)}
                  className={`z-20 w-16 h-16 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 ${
                    isPlaying ? "opacity-0 group-hover/player:opacity-100 scale-90" : "opacity-100 scale-100"
                  }`}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 fill-black text-black" />
                  ) : (
                    <Play className="w-6 h-6 fill-black text-black ml-1" />
                  )}
                </button>

                {/* Mock Cinematic HUD details */}

                {/* Interactive Player Controls Bottom Bar */}
                <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/90 to-transparent p-4 pt-10 flex flex-col gap-3">
                  
                  {/* Timeline Scrubber */}
                  <div className="flex items-center gap-2.5 text-[10px] font-mono text-white/60 select-none">
                    <span>
                      {videoRef.current && videoRef.current.duration
                        ? `${Math.floor(videoRef.current.currentTime / 60)}:${String(Math.floor(videoRef.current.currentTime % 60)).padStart(2, "0")}`
                        : `${Math.floor((videoProgress / 100) * 4)}:${String(Math.floor(((videoProgress / 100) * 240) % 60)).padStart(2, "0")}`
                      }
                    </span>
                    
                    <div 
                      className="flex-1 bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer relative group/scrub"
                      onClick={(e) => {
                        e.stopPropagation();
                        const bounds = e.currentTarget.getBoundingClientRect();
                        const percent = (e.clientX - bounds.left) / bounds.width;
                        setVideoProgress(percent * 100);
                        if (videoRef.current) {
                          videoRef.current.currentTime = percent * videoRef.current.duration;
                        }
                      }}
                    >
                      <div 
                        className="bg-amber-500 h-full rounded-full transition-all duration-100"
                        style={{ width: `${videoProgress}%` }}
                      />
                    </div>

                    <span>
                      {videoRef.current && videoRef.current.duration
                        ? `${Math.floor(videoRef.current.duration / 60)}:${String(Math.floor(videoRef.current.duration % 60)).padStart(2, "0")}`
                        : activeVideo.duration
                      }
                    </span>
                  </div>

                  {/* Settings and control toggles */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={(e) => togglePlay(e)}
                        className="text-white hover:text-amber-500 transition-colors duration-150"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <button 
                        onClick={(e) => toggleMute(e)}
                        className="text-white hover:text-amber-500 transition-colors duration-150"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>

                    <span className="text-[10px] font-bold text-white/50 font-heading uppercase tracking-widest truncate max-w-[200px] sm:max-w-xs md:max-w-md select-none">
                      {activeVideo.title}
                    </span>

                    <button 
                      onClick={(e) => toggleFullscreen(e)}
                      className="text-white hover:text-amber-500 transition-colors duration-150"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>

              {/* Video details metadata beneath player */}
              <div className="p-4 sm:p-6 text-left space-y-2">
                <h3 className="text-lg font-heading font-extrabold text-white">
                  {activeVideo.title}
                </h3>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

