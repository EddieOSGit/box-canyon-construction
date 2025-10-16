import type { NavLink, TrustStat, AboutContent, Service, ProcessStep, Testimonial, ServiceAreaData, ContactInfo } from './types';
import { AwardIcon, BuildingIcon, CheckCircleIcon, ClockIcon, HammerIcon, HardHatIcon, HeartIcon, HomeIcon, MapPinIcon, MessageSquareIcon, PhoneIcon, ShieldCheckIcon, StarIcon, WrenchIcon } from './components/icons';

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export const trustBarStats: TrustStat[] = [
  { value: '11+', label: 'Years Experience', Icon: ClockIcon },
  { value: 'A+', label: 'BBB Rating', Icon: AwardIcon },
  { value: '$2M', label: 'Liability Insurance', Icon: ShieldCheckIcon },
  { value: '100%', label: 'Satisfaction Pledge', Icon: HeartIcon },
];

export const aboutContent: AboutContent = {
  title: 'Building Trust in Montana Since 2014',
  subtitle: 'Old-Fashioned Craftsmanship. Modern Precision. Montana Built to Last.',
  paragraphs: [
    'Box Canyon Construction, LLC is a professional Montana-based commercial and residential construction contractor located in the heart of Livingston. Founded by Bryce Shiver in 2014, our family-owned company blends traditional values with modern techniques to serve Park County and beyond.',
    'We operate under a faith-based philosophy, guided by Philippians 4:13, and are dedicated to securing client trust through every step of a project. Our reputation is built on honesty, integrity, and reliability.'
  ],
  values: [
    { title: 'Honesty & Integrity', value: 'Trustworthy, sober, reliable service guaranteed.' },
    { title: 'Quality Craftsmanship', value: 'Providing craftsmanship that is rare to find these days for durable results.' },
    { title: 'Customer-Centric', value: 'Free estimates, free consultations, and expert planning throughout the project.' },
    { title: 'Accuracy & Performance', value: '"Fast is fine, but Accuracy is Final" - our guiding principle.' },
  ],
};

export const services: Service[] = [
  { title: 'Custom Home Building', description: 'From concept to completion, including timber framing and off-grid solutions. We turn your dream home into a reality.', Icon: HomeIcon },
  { title: 'Residential Remodeling', description: 'Complete home renovations, room additions, and kitchen & bath remodels to increase property value.', Icon: WrenchIcon },
  { title: 'Commercial Construction', description: 'Light commercial structures, renovations, and property maintenance with minimal business disruption.', Icon: BuildingIcon },
  { title: 'Specialty Craftsmanship', description: 'Expert timber framing, custom woodwork, tile, and fine finishes that add distinctive character.', Icon: HammerIcon },
  { title: 'Property Repair & Maintenance', description: 'Structural repairs, general maintenance, and emergency services to protect your investment.', Icon: HardHatIcon },
  { title: 'Restoration Services', description: 'Fast response for mold, water, and smoke damage restoration, including insurance claim assistance.', Icon: CheckCircleIcon },
];

export const constructionProcess: ProcessStep[] = [
  { id: 1, title: 'Consultation & Estimate', description: 'We start with a free, no-obligation consultation to understand your vision and provide a detailed estimate.', Icon: MessageSquareIcon },
  { id: 2, title: 'Design & Planning', description: 'Our experts work with you to finalize plans, select materials, and create a precise project timeline.', Icon: HardHatIcon },
  { id: 3, title: 'Construction & Craftsmanship', description: 'Our licensed and insured team brings the plans to life with a focus on quality, accuracy, and communication.', Icon: HammerIcon },
  { id: 4, title: 'Final Walkthrough', description: 'We ensure 100% satisfaction with a final walkthrough, backed by our 30-day callback and 1-year workmanship warranties.', Icon: CheckCircleIcon },
];

export const testimonials: Testimonial[] = [
  { quote: 'Box Canyon Construction exceeded our expectations. The craftsmanship is incredible, and Bryce was transparent and communicative throughout the entire process. A true professional.', author: 'John & Jane D.', location: 'Livingston, MT' },
  { quote: 'Their A+ BBB rating is well-deserved. They handled our commercial renovation on time and on budget, with minimal disruption to our business. Highly recommend!', author: 'Main Street Boutique', location: 'Bozeman, MT' },
  { quote: 'We needed an emergency structural repair, and they responded immediately. The work was top-notch, and their honesty was refreshing. We trust them completely with our home.', author: 'The Miller Family', location: 'Paradise Valley, MT' },
];

export const serviceAreaData: ServiceAreaData = {
  title: 'Proudly Serving Park County and Beyond',
  description: 'As a Montana-owned and operated company, we have deep roots in Livingston and understand the unique challenges of building in our beautiful state. We are committed to serving our neighbors with integrity and reliability.',
  areas: ['Livingston', 'Park County', 'Paradise Valley', 'Bozeman', 'Southwestern Montana'],
  imageUrl: 'https://plus.unsplash.com/premium_photo-1661911778005-bda918172dd3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vbnRhbmElMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D',
};

export const contactInfo: ContactInfo = {
  phone: '(406) 220-1859',
  email: 'bryce@boxcanyon.pro',
  address: ['Box Canyon Construction, LLC', '4 Box Canyon Road', 'Livingston, MT 59047'],
  hours: [
    'Monday - Friday: 8:00 AM - 5:30 PM',
    'Saturday: By Appointment',
    'Sunday: Closed',
  ],
};