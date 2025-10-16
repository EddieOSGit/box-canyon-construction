
import React, { useRef } from 'react';
import type { AboutContent } from '../types';
import { StarIcon } from './icons';

interface AboutProps {
  content: AboutContent;
}

const useOnScreen = <T extends Element,>(ref: React.RefObject<T>, rootMargin: string = "0px"): boolean => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isIntersecting;
};

const About: React.FC<AboutProps> = ({ content }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef, "-100px");

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold font-sans text-brand-blue mb-4">{content.title}</h2>
          <p className="text-xl text-brand-brown font-semibold mb-12">{content.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '200ms'}}>
            {content.paragraphs.map((p, i) => (
              <p key={i} className="mb-6 text-lg leading-relaxed">{p}</p>
            ))}
            <div className="mt-8 text-lg text-brand-green italic border-l-4 border-brand-green pl-4">
              "I can do all things through Christ which strengtheneth me." - Philippians 4:13
            </div>
          </div>
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '400ms'}}>
            {content.values.map((val, i) => (
              <div key={i} className="flex items-start">
                <div className="flex-shrink-0">
                  <StarIcon className="h-8 w-8 text-brand-accent mr-4" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-blue">{val.title}</h4>
                  <p className="text-md">{val.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
