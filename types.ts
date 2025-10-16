export interface NavLink {
  href: string;
  label: string;
}

export interface TrustStat {
  value: string;
  label: string;
  Icon: React.FC<{ className?: string }>;
}

export interface AboutContent {
  title: string;
  subtitle: string;
  paragraphs: string[];
  values: {
    title: string;
    value: string;
  }[];
}

export interface Service {
  title: string;
  description: string;
  Icon: React.FC<{ className?: string }>;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  Icon: React.FC<{ className?: string }>;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface ServiceAreaData {
  title: string;
  description: string;
  areas: string[];
  imageUrl: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string[];
  hours: string[];
}

// FIX: Add missing Portfolio types
export type PortfolioCategory = 'Custom Homes' | 'Renovations' | 'Commercial' | 'Timber Framing';

export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: PortfolioCategory;
}
