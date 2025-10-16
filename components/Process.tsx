import React from 'react';
import type { ProcessStep } from '../types';

interface ProcessProps {
  steps: ProcessStep[];
}

const Process: React.FC<ProcessProps> = ({ steps }) => {
  return (
    <section id="process" className="py-20 bg-brand-green text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-sans">Our Proven Process</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto opacity-90">A streamlined approach to ensure your project is seamless, on-time, and on-budget.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-full border-4 border-white/50 bg-brand-accent text-white mb-6">
                <step.Icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold font-sans mb-3">{`Step ${step.id}: ${step.title}`}</h3>
              <p className="opacity-90 px-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
