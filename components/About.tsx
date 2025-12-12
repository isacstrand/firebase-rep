import React from 'react';

// --- EDIT CONTENT HERE ---
const CONTENT = {
  image: "/about-portrait.jpg", // The file you uploaded
  heading: "THE COMPOSER",
  // You can add as many paragraphs as you want below
  bio: [
    "Isac Strand is a Berlin-based musician from Vaasa, Finland. He studied Songwriting In BIMM University Berlin and has since worked on multiple film scores, as well as a Songwriter, producer, mixer, studio-musician and live performer. ",
    "He's the co-founder, songwriter and drummer in the rock band Kings & Pills, and has also recorded drums, guitar and piano for other artists such as ALBUS, Sweetspot and Anais Vacariu.",
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
               alt="about-portrait.jpg" 
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