
import React from 'react';
import type { ContactInfo } from '../types';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from './icons';

interface ContactProps {
  contactInfo: ContactInfo;
}

const Contact: React.FC<ContactProps> = ({ contactInfo }) => {
  return (
    <section id="contact" className="py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-sans">Get in Touch</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto opacity-90">Ready to start your project? Request a free, no-obligation estimate today.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 bg-white/10 p-10 rounded-lg">
          <div>
            <h3 className="text-2xl font-bold font-sans mb-6">Contact Information</h3>
            <div className="space-y-4 text-lg">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center hover:text-brand-accent transition-colors">
                <PhoneIcon className="h-6 w-6 mr-4" />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center hover:text-brand-accent transition-colors">
                <MailIcon className="h-6 w-6 mr-4" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 mr-4 mt-1" />
                <div>
                  {contactInfo.address.map((line, i) => <p key={i}>{line}</p>)}
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="h-6 w-6 mr-4 mt-1" />
                <div>
                  {contactInfo.hours.map((line, i) => <p key={i}>{line}</p>)}
                </div>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" id="name" placeholder="Your Name" className="w-full bg-white/20 border border-white/30 rounded-md py-3 px-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-brand-accent" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" placeholder="Your Email" className="w-full bg-white/20 border border-white/30 rounded-md py-3 px-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-brand-accent" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" rows={5} placeholder="Tell us about your project..." className="w-full bg-white/20 border border-white/30 rounded-md py-3 px-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-brand-accent"></textarea>
            </div>
            <button type="submit" className="w-full bg-brand-accent text-white font-bold py-3 px-6 rounded-md shadow-lg hover:bg-yellow-600 transition-all transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
