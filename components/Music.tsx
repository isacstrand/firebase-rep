import React from 'react';

// --- EDIT CONTENT HERE ---
// 1. Rename your album cover images to album-1.jpg, album-2.jpg, etc.
// 2. Drag and drop them into the file list.
const ALBUMS = [
  { 
    id: '1', 
    title: 'JOY', 
    year: '2024', 
    coverUrl: 'album-1.jpg' // Placeholder name
  },
  { 
    id: '2', 
    title: 'SEX 101', 
    year: '2024', 
    coverUrl: 'album-2.jpg' 
  },
  { 
    id: '3', 
    title: 'THIS IS NOT RELIGIOUS', 
    year: '2023', 
    coverUrl: 'album-3.jpg' 
  },
];

const FEATURED_ALBUM = {
  title: "REM",
  director: "Sebastiano Corti",
  description: "A psychological thriller score exploring the boundaries between dreams and reality.",
  coverUrl: "album-featured.jpg" // Rename your main album art to this
};
// -------------------------

export const Music: React.FC = () => {
  return (
    <section id="music" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold mb-16 text-center tracking-widest uppercase">Selected Scores</h2>

        {/* Featured Release */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
            <div className="w-full md:w-1/2 shadow-2xl relative group overflow-hidden">
                {/* Fallback image if user hasn't uploaded 'album-featured.jpg' yet */}
                <img 
                    src={FEATURED_ALBUM.coverUrl} 
                    onError={(e) => e.currentTarget.src = 'https://via.placeholder.com/600x600/000000/FFFFFF?text=UPLOAD+album-featured.jpg'}
                    alt={FEATURED_ALBUM.title} 
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 border border-black/10"></div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                <span className="text-neutral-500 font-bold tracking-widest text-sm">LATEST RELEASE</span>
                <h3 className="text-5xl md:text-6xl font-display font-bold text-red-600">{FEATURED_ALBUM.title}</h3>
                <p className="text-neutral-600 font-sans leading-relaxed max-w-md italic">
                    "Directed by {FEATURED_ALBUM.director}"
                </p>
                <p className="text-neutral-800 font-sans leading-relaxed max-w-md">
                    {FEATURED_ALBUM.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                    <button className="px-8 py-3 bg-black text-white hover:bg-neutral-800 transition-colors tracking-widest text-sm font-bold">
                        LISTEN TO SCORE
                    </button>
                    <button className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors tracking-widest text-sm font-bold">
                        WATCH TRAILER
                    </button>
                </div>
            </div>
        </div>

        {/* Discography Grid */}
        <div className="border-t border-neutral-200 pt-16">
            <h3 className="text-2xl font-display font-bold mb-8 text-center tracking-widest">RECENT WORKS</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {ALBUMS.map((album) => (
                    <div key={album.id} className="group cursor-pointer">
                        <div className="overflow-hidden mb-4 relative aspect-square bg-neutral-100">
                             <img 
                                src={album.coverUrl} 
                                onError={(e) => e.currentTarget.src = 'https://via.placeholder.com/400x400/CCCCCC/969696?text=Image+Missing'}
                                alt={album.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                            />
                        </div>
                        <div className="text-center">
                            <h4 className="font-bold font-display tracking-wide text-xl group-hover:text-neutral-600 transition-colors">{album.title}</h4>
                            <p className="text-xs text-neutral-500 mt-1 uppercase">Original Score • {album.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};