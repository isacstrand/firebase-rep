import React from 'react';

// --- EDIT CONTENT HERE ---
const CONTENT = {
  image: "about-portrait.png", // The file you uploaded
  heading: "THE COMPOSER",
  // You can add as many paragraphs as you want below
  bio: [
    "Isac Strand specializes in creating immersive sonic worlds for film, television, and interactive media. With a background in classical orchestration and modern electronic synthesis, he bridges the gap between the organic and the synthetic.",
    "His approach to scoring is deeply rooted in narrative. Every melody, texture, and rhythm is crafted to serve the story, enhancing the emotional arc of the characters and the visual language of the director.",
    "\"Sound is the invisible character in every scene,\" says Isac. \"It dictates how we feel before we even know why.\""
  ]
};
// -------------------------

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        
        {/* Image Side */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
             <img 
               src={CONTENT.image} 
               alt="Portrait" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 border-[1px] border-white/20 m-4 pointer-events-none"></div>
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-brand-gold">{CONTENT.heading}</h2>
          <div className="space-y-6 text-neutral-300 font-sans font-light leading-relaxed text-lg">
            {CONTENT.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};