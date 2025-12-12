import React from 'react';
import { ChevronDown } from 'lucide-react';

// --- EDIT CONTENT HERE ---
const CONTENT = {
  backgroundImage: "hero-background.jpg", // The file you uploaded
  title: "Isac Strand",
  subtitle: "Composer • Sound Designer • Producer",
  buttonText: "Latest Scores"
};
// -------------------------

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={CONTENT.backgroundImage}
          alt="Hero Background" 
          className="w-100 h-100 object-cover object-center"
        />
        {/* Overlay: opacity-30 allows the background to be seen but keeps text readable */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 tracking-tighter uppercase mix-blend-overlay opacity-85">
          {CONTENT.title}
        </h1>
        <p className="text-brand-gold font-sans font-light tracking-[0.3em] text-sm md:text-lg mb-12 uppercase">
          {CONTENT.subtitle}
        </p>
        
        <button 
            onClick={() => scrollToSection('music')}
            className="px-10 py-4 border-[1px] border-white text-white font-display tracking-[0.2em] text-xs md:text-sm hover:bg-white hover:text-black transition-all duration-500 uppercase"
        >
            {CONTENT.buttonText}
        </button>
      </div>

      {/* Bottom Scroller */}
      <div className="absolute bottom-8 z-10 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => scrollToSection('about')}>
        <ChevronDown className="text-white" size={32} strokeWidth={1} />
      </div>
    </section>
  );
};