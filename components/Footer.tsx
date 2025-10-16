
import React from 'react';
import type { ContactInfo } from '../types';

interface FooterProps {
    contactInfo: ContactInfo
}

const Footer: React.FC<FooterProps> = ({ contactInfo }) => {
  return (
    <footer className="bg-brand-gray text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <h4 className="text-xl font-bold font-sans">Box Canyon Construction, LLC</h4>
        <p className="mt-2">{contactInfo.address.join(' | ')}</p>
        <p className="mt-1">
          <a href={`tel:${contactInfo.phone}`} className="hover:text-brand-accent transition-colors">{contactInfo.phone}</a>
        </p>
        <div className="mt-4 border-t border-white/20 pt-4">
          <p className="text-sm opacity-70">
            &copy; {new Date().getFullYear()} Box Canyon Construction, LLC. All Rights Reserved.
          </p>
          <p className="text-xs opacity-50 mt-1">
            Proudly serving Livingston, Park County, and all of Montana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
