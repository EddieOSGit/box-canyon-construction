import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { navLinks, trustBarStats, aboutContent, services, constructionProcess, testimonials, serviceAreaData, contactInfo } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light text-brand-gray font-serif">
      <Header navLinks={navLinks} contactPhone={contactInfo.phone} />
      <main>
        <Hero />
        <TrustBar stats={trustBarStats} />
        <About content={aboutContent} />
        <Services services={services} />
        <Process steps={constructionProcess} />
        <Testimonials testimonials={testimonials} />
        <ServiceArea areaData={serviceAreaData} />
        <Contact contactInfo={contactInfo} />
      </main>
      <Footer contactInfo={contactInfo} />
    </div>
  );
};

export default App;
