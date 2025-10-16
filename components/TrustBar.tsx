
import React, { useState, useEffect, useRef } from 'react';
import type { TrustStat } from '../types';

interface TrustBarProps {
  stats: TrustStat[];
}

const useOnScreen = <T extends Element,>(ref: React.RefObject<T>, rootMargin: string = "0px"): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
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

const CountUp: React.FC<{ end: number; duration?: number }> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = end;
    if (start === endValue) return;

    const totalMilSecDur = duration;
    const incrementTime = (totalMilSecDur / endValue) * 0.9;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endValue) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};


const TrustBar: React.FC<TrustBarProps> = ({ stats }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref, "-100px");

  return (
    <section ref={ref} className="bg-brand-blue text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className={`transition-opacity duration-1000 transform ${onScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${index * 150}ms` }}>
              <stat.Icon className="h-12 w-12 mx-auto mb-4 text-brand-accent" />
              <div className="text-4xl font-black font-sans">
                {stat.label === 'Years Experience' && onScreen ? <><CountUp end={11} />+</> : stat.value}
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
