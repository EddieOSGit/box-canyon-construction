
import React, { useState } from 'react';
import type { PortfolioProject, PortfolioCategory } from '../types';

interface PortfolioProps {
  projects: PortfolioProject[];
}

type Category = 'All' | PortfolioCategory;
const categories: Category[] = ['All', 'Custom Homes', 'Renovations', 'Commercial', 'Timber Framing'];

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  const [filter, setFilter] = useState<Category>('All');

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const FilterButton: React.FC<{ category: Category }> = ({ category }) => (
    <button
      onClick={() => setFilter(category)}
      className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
        filter === category ? 'bg-brand-blue text-white' : 'bg-gray-200 text-brand-gray hover:bg-brand-brown hover:text-white'
      }`}
    >
      {category}
    </button>
  );

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-sans text-brand-blue">Our Workmanship</h2>
          <p className="text-lg text-brand-gray mt-4 max-w-2xl mx-auto">A showcase of our commitment to quality, precision, and lasting beauty.</p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(cat => <FilterButton key={cat} category={cat} />)}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="mb-8 break-inside-avoid group relative overflow-hidden rounded-lg shadow-lg">
              <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-sm bg-brand-accent text-white py-1 px-3 rounded-full font-semibold">{project.category}</span>
                <h3 className="text-2xl font-bold font-sans mt-2">{project.title}</h3>
                <p className="opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-40 transition-all duration-300 text-gray-200">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
