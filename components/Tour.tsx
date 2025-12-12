import React from 'react';
import { TourDate } from '../types';
import { MapPin } from 'lucide-react';

const DATES: TourDate[] = [
  { id: '1', date: 'OCT 12', venue: 'The Grand Hall', city: 'Stockholm, SE', ticketLink: '#' },
  { id: '2', date: 'OCT 15', venue: 'Pustervik', city: 'Gothenburg, SE', ticketLink: '#' },
  { id: '3', date: 'OCT 22', venue: 'Vega', city: 'Copenhagen, DK', ticketLink: '#' },
  { id: '4', date: 'NOV 05', venue: 'Paradiso', city: 'Amsterdam, NL', ticketLink: '#' },
  { id: '5', date: 'NOV 10', venue: 'O2 Academy', city: 'London, UK', ticketLink: '#' },
];

export const Tour: React.FC = () => {
  return (
    <section id="tour" className="py-24 bg-brand-charcoal relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-neutral-700 pb-8">
          <div>
             <h2 className="text-4xl md:text-6xl font-display font-bold text-white">ON TOUR</h2>
             <p className="text-brand-gold tracking-widest mt-2 uppercase">Experience the energy live</p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-2 bg-transparent border border-neutral-600 text-neutral-300 hover:border-white hover:text-white transition-all text-sm tracking-widest">
            VIEW ALL DATES
          </button>
        </div>

        <div className="flex flex-col space-y-2">
          {DATES.map((show) => (
            <div 
              key={show.id} 
              className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-neutral-800 hover:bg-white/5 px-4 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                <span className="text-2xl font-display font-bold text-brand-gold w-24">{show.date}</span>
                <div className="flex flex-col">
                  <span className="text-xl font-display font-bold text-white group-hover:text-brand-gold transition-colors">{show.venue}</span>
                  <div className="flex items-center text-neutral-500 text-sm mt-1">
                    <MapPin size={14} className="mr-1" />
                    {show.city}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0">
                <a 
                  href={show.ticketLink} 
                  className="inline-block px-8 py-2 bg-neutral-800 text-white font-sans text-sm tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
                >
                  TICKETS
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
