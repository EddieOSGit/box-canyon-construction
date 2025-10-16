
import React from 'react';
import type { Service } from '../types';

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section id="services" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-sans text-brand-blue">Our Comprehensive Services</h2>
          <p className="text-lg text-brand-gray mt-4 max-w-2xl mx-auto">From custom builds to emergency repairs, we are your one-stop solution for construction in Montana.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-green text-white mb-6 group-hover:bg-brand-accent transition-colors duration-300">
                <service.Icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold font-sans text-brand-blue mb-4">{service.title}</h3>
              <p className="text-brand-gray leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
