
import React, { useState, useEffect } from 'react';
import type { NavLink } from '../types';
import { MenuIcon, XIcon, PhoneIcon } from './icons';

interface HeaderProps {
  navLinks: NavLink[];
  contactPhone: string;
}

const Header: React.FC<HeaderProps> = ({ navLinks, contactPhone }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-blue shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-black text-white font-sans uppercase tracking-wider">
            Box Canyon Construction
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-white hover:text-brand-accent transition-colors font-semibold">
                {link.label}
              </a>
            ))}
            <a href={`tel:${contactPhone}`} className="flex items-center bg-brand-accent text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-yellow-600 transition-all transform hover:scale-105">
              <PhoneIcon className="h-5 w-5 mr-2" />
              {contactPhone}
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-brand-blue/95 backdrop-blur-sm`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-white text-lg hover:text-brand-accent transition-colors font-semibold">
              {link.label}
            </a>
          ))}
           <a href={`tel:${contactPhone}`} className="flex items-center bg-brand-accent text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-yellow-600 transition-all transform hover:scale-105">
              <PhoneIcon className="h-5 w-5 mr-2" />
              {contactPhone}
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;