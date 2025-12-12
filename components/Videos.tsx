import React from 'react';
import { Play } from 'lucide-react';

// --- EDIT CONTENT HERE ---
const MAIN_VIDEO = {
  videoFile: "showreel.mp4",     // Your uploaded video file
  posterImage: "video-poster.png", // Your uploaded cover image
  title: "Film Composer Showreel 2025",
  subtitle: "Isac Strand"
};

const SECONDARY_VIDEOS = [
  {
    title: "THE LAST FRONTIER",
    subtitle: "Opening Title Sequence",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&q=80", // Or use a local file like 'video-thumb-1.jpg'
    link: "#" // You can add a youtube link here if you want to open it
  },
  {
    title: "RECORDING SESSIONS",
    subtitle: "Air Studios, London",
    image: "studio-session.png", // Your uploaded studio image
    link: "#"
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
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4 group">
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
            <div className="flex flex-col items-center text-center mt-4">
                <h3 className="text-2xl font-display font-bold text-white">{MAIN_VIDEO.title}</h3>
                <p className="text-lg text-brand-gold mt-1">{MAIN_VIDEO.subtitle}</p>
            </div>
          </div>

          {/* Secondary Videos Grid */}
          {SECONDARY_VIDEOS.map((video, index) => (
            <div key={index} className="relative aspect-video bg-neutral-800 group cursor-pointer overflow-hidden border border-neutral-800">
               <img src={video.image} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
               <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center pl-1 group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <Play size={32} fill="currentColor" />
                  </div>
               </div>
               <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-display font-bold">{video.title}</h3>
                  <p className="text-sm text-neutral-300">{video.subtitle}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};