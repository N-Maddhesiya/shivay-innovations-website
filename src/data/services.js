import {
  Globe2,
  Smartphone,
  Workflow,
  TrendingUp,
  MessagesSquare,
  LifeBuoy,
} from 'lucide-react';

export const services = [
  {
    id: 'web-development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1100&q=85',
    number: '01',
    title: 'Website Design & Development',
    short: 'Build a clear, credible and memorable online presence for your business.',
    description:
      'From focused landing pages to complete online stores, we shape responsive web experiences around your goals and your customers.',
    icon: Globe2,
    features: ['Business websites and landing pages', 'Portfolio and company websites', 'E-commerce stores', 'Responsive redesigns', 'Contact forms and enquiry journeys', 'Basic speed and on-page SEO setup'],
  },
  {
    id: 'mobile-apps',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1100&q=85',
    number: '02',
    title: 'Mobile App Development',
    short: 'Bring useful, easy-to-use experiences to Android and iOS.',
    description:
      'Plan and develop mobile applications with thoughtful user experiences, practical integrations and a clear route to deployment.',
    icon: Smartphone,
    features: ['Android and iOS app planning', 'UI/UX design', 'Application development', 'Backend and API integrations', 'Testing and deployment support', 'Admin dashboard integration'],
  },
  {
    id: 'crm-erp',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=85',
    number: '03',
    title: 'CRM & ERP Solutions',
    short: 'Bring customer information and everyday business operations together.',
    description:
      'Create business management systems that help teams organise leads, customer records, inventory, sales activity and operational information.',
    icon: Workflow,
    features: ['Lead capture and sales pipelines', 'Customer records and follow-up reminders', 'Inventory and purchase records', 'Billing and finance support', 'HR and attendance modules', 'Reports and operations dashboards'],
  },
  {
    id: 'seo-marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=85',
    number: '04',
    title: 'SEO & Digital Marketing',
    short: 'Make it easier for the right people to discover your business online.',
    description:
      'Improve your digital visibility with practical search optimisation, content planning and campaign support.',
    icon: TrendingUp,
    features: ['Technical and on-page SEO', 'Local SEO', 'Keyword and content planning', 'Google Ads', 'Campaign optimisation', 'Performance reporting'],
  },
  {
    id: 'social-media',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1100&q=85',
    number: '05',
    title: 'Social Media Management',
    short: 'Give your brand a consistent and considered social presence.',
    description:
      'Plan content and campaigns with a cohesive direction that reflects your brand and supports your business goals.',
    icon: MessagesSquare,
    features: ['Content calendars', 'Creative direction', 'Social page management', 'Campaign planning', 'Performance reporting'],
  },
  {
    id: 'maintenance',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=85',
    number: '06',
    title: 'Maintenance & Support',
    short: 'Keep your digital products updated, monitored and supported.',
    description:
      'Ongoing care for websites and digital solutions, based on the support scope agreed for your project.',
    icon: LifeBuoy,
    features: ['Website updates', 'Backups', 'Security checks', 'Bug fixes', 'Performance monitoring', 'Ongoing support'],
  },
];

export const technologyGroups = [
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React'] },
  { title: 'Backend', items: ['Node.js', 'PHP', 'Python'] },
  { title: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { title: 'Mobile', items: ['Flutter', 'React Native', 'Android'] },
  { title: 'CMS & Commerce', items: ['WordPress', 'WooCommerce'] },
  { title: 'Analytics & Marketing', items: ['GA4', 'Search Console', 'Google Ads', 'Meta Ads'] },
];
