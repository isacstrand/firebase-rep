import React from 'react';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

// --- EDIT CONTENT HERE ---
const CONTACT_CONFIG = {
  title: "CONTACT",
  subtitle: "For scoring commissions, licensing inquiries, or collaborations.",
  email: "contact@isacstrand.com", // This will be used for the mailto link
  socials: {
    instagram: "#",
    linkedin: "#",
    twitter: "#"
  }
};
// -------------------------

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark text-white border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-display font-bold mb-8">{CONTACT_CONFIG.title}</h2>
        <p className="text-neutral-400 mb-12">{CONTACT_CONFIG.subtitle}</p>

        {/* Simple Contact Form Layout */}
        <form className="max-w-lg mx-auto space-y-6 mb-16 text-left" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Name</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-neutral-700 py-2 text-white focus:outline-none focus:border-brand-gold transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full bg-transparent border-b border-neutral-700 py-2 text-white focus:outline-none focus:border-brand-gold transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Inquiry Type</label>
            <select className="w-full bg-transparent border-b border-neutral-700 py-2 text-white focus:outline-none focus:border-brand-gold transition-colors">
                <option className="bg-brand-dark" value="score">Film/TV Scoring</option>
                <option className="bg-brand-dark" value="license">Music Licensing</option>
                <option className="bg-brand-dark" value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Message</label>
            <textarea 
              rows={4}
              className="w-full bg-transparent border-b border-neutral-700 py-2 text-white focus:outline-none focus:border-brand-gold transition-colors"
            ></textarea>
          </div>
          
          <a 
            href={`mailto:${CONTACT_CONFIG.email}`}
            className="block w-full text-center py-4 bg-white text-black font-display tracking-widest hover:bg-brand-gold transition-colors uppercase font-bold text-sm"
          >
            Send Message via Email
          </a>
        </form>

        <div className="flex justify-center gap-8 mb-12">
          <a href={CONTACT_CONFIG.socials.instagram} className="text-neutral-400 hover:text-brand-gold transition-colors"><Instagram size={24} /></a>
          <a href={CONTACT_CONFIG.socials.linkedin} className="text-neutral-400 hover:text-brand-gold transition-colors"><Linkedin size={24} /></a>
          <a href={CONTACT_CONFIG.socials.twitter} className="text-neutral-400 hover:text-brand-gold transition-colors"><Twitter size={24} /></a>
          <a href={`mailto:${CONTACT_CONFIG.email}`} className="text-neutral-400 hover:text-brand-gold transition-colors"><Mail size={24} /></a>
        </div>

        <p className="text-neutral-600 text-xs font-sans">
          © {new Date().getFullYear()} Isac Strand. All rights reserved.
        </p>
      </div>
    </section>
  );
};