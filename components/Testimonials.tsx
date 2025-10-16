
import React from 'react';
import type { Testimonial } from '../types';
import { StarIcon } from './icons';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-sans text-brand-blue">What Our Clients Say</h2>
          <p className="text-lg text-brand-gray mt-4 max-w-2xl mx-auto">Our reputation is built on the satisfaction of our clients.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-brand-light p-8 rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-105">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5" />)}
              </div>
              <p className="text-brand-gray italic text-lg mb-6">"{testimonial.quote}"</p>
              <div className="text-right">
                <p className="font-bold text-brand-blue">{testimonial.author}</p>
                <p className="text-sm text-brand-gray">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
