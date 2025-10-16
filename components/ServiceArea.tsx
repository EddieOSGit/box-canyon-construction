
import React from 'react';
import type { ServiceAreaData } from '../types';
import { MapPinIcon } from './icons';

interface ServiceAreaProps {
  areaData: ServiceAreaData;
}

const ServiceArea: React.FC<ServiceAreaProps> = ({ areaData }) => {
  return (
    <section id="service-area" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold font-sans text-brand-blue mb-4">{areaData.title}</h2>
            <p className="text-lg leading-relaxed text-brand-gray mb-6">{areaData.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {areaData.areas.map((area, index) => (
                <div key={index} className="flex items-center">
                  <MapPinIcon className="h-6 w-6 text-brand-green mr-3" />
                  <span className="font-semibold">{area}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img src={areaData.imageUrl} alt="Map of Park County, Montana" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
