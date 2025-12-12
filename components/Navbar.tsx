import React, { useState, useEffect } from 'react';
import { Menu, X, Music, Mail, User, Video, Info } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME', icon: <User size={18} /> },
    { id: 'about', label: 'ABOUT', icon: <Info size={18} /> },
    { id: 'videos', label: 'SHOWREEL', icon: <Video size={18} /> },
    { id: 'music', label: 'SCORES', icon: <Music size={18} /> },
    { id: 'contact', label: 'CONTACT', icon: <Mail size={18} /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('home')}
          className="cursor-pointer font-display font-bold text-xl md:text-2xl tracking-[0.2em] text-white hover:text-brand-gold transition-colors z-50 uppercase"
        >
          Isac Strand
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-xs tracking-[0.15em] font-sans font-bold uppercase transition-colors duration-300 ${activeSection === link.id ? 'text-brand-gold' : 'text-neutral-400 hover:text-white'}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col space-y-8 text-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setIsOpen(false);
              }}
              className="text-2xl text-neutral-300 hover:text-brand-gold font-display uppercase tracking-widest"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};