
import React from 'react';
import { PhoneIcon, WrenchIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen bg-hero-pattern bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-brand-gray bg-opacity-60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-sans uppercase drop-shadow-2xl mb-4 animate-fade-in-down">
          Old-Fashioned Craftsmanship.<br/>Modern Precision.
        </h1>
        <p className="text-xl md:text-2xl font-serif max-w-3xl mb-8 drop-shadow-lg animate-fade-in-up">
          Livingston's BBB A+ Rated Contractor for Custom Homes, Renovations, and Commercial Projects.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a href="#contact" className="bg-brand-accent text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-yellow-600 transition-all transform hover:scale-105 flex items-center justify-center">
            <WrenchIcon className="h-6 w-6 mr-2" />
            Get a Free Estimate
          </a>
          <a href="tel:(406) 220-1859" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-white hover:text-brand-blue transition-all transform hover:scale-105 flex items-center justify-center">
            <PhoneIcon className="h-6 w-6 mr-2" />
            Call Now: (406) 220-1859
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
