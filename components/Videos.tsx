import React from 'react';
import { Play } from 'lucide-react';

// --- EDIT CONTENT HERE ---
const MAIN_VIDEO = {
  videoFile: "/showreel.mp4",     // Your uploaded video file
  posterImage: "/video-poster.png", // Your uploaded cover image
  title: "Film Composer Showreel 2025",
  subtitle: "Isac Strand"
};

const SECONDARY_VIDEOS = [
  {
    // Rename your first small video to: video-1.mp4
    videoFile: "/video-1.mp4", 
    // You can also add a specific cover image for it (e.g. video-poster-1.jpg)
    // For now, using a placeholder image so it looks good until you add one.
    posterImage: "/rem.png", 
    title: "REM",
    subtitle: "Opening Title Sequence"
  },
  {
    // Rename your second small video to: video-2.mp4
    videoFile: "video-2.mp4",
    // This is using the file you already uploaded
    posterImage: "studio-session.png",
    title: "RECORDING SESSIONS",
    subtitle: "Air Studios, London"
  }
];
// -------------------------

export const Videos: React.FC = () => {
  return (
    <section id="videos" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold mb-12 text-center tracking-widest">SHOWREEL</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Video - Showreel */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4 group mb-8">
            <div className="relative aspect-video bg-neutral-800 overflow-hidden shadow-2xl border border-neutral-800">
                <video 
                    className="w-full h-full object-cover"
                    controls
                    poster={MAIN_VIDEO.posterImage}
                >
                    <source src={MAIN_VIDEO.videoFile} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="flex flex-col items-center text-center mt-2">
                <h3 className="text-2xl font-display font-bold text-white">{MAIN_VIDEO.title}</h3>
                <p className="text-lg text-brand-gold mt-1">{MAIN_VIDEO.subtitle}</p>
            </div>
          </div>

          {/* Secondary Videos Grid */}
          {SECONDARY_VIDEOS.map((video, index) => (
            <div key={index} className="flex flex-col gap-3 group">
               <div className="relative aspect-video bg-neutral-800 overflow-hidden border border-neutral-800 shadow-lg">
                  <video 
                      className="w-full h-full object-cover"
                      controls
                      poster={video.posterImage}
                  >
                      <source src={video.videoFile} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
               </div>
               {/* Text moved below video for better usability with controls */}
               <div className="px-1">
                  <h3 className="text-xl font-display font-bold text-white">{video.title}</h3>
                  <p className="text-sm text-neutral-400 mt-1">{video.subtitle}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};