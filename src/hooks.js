import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageMeta = {
  '/': ['Shivay Innovations | Digital Solutions That Move Your Business Forward', 'Website development, mobile applications, CRM and ERP solutions, SEO and digital marketing for growing businesses.'],
  '/about': ['About Shivay Innovations | Innovate · Build · Grow', 'Get to know Shivay Innovations, our approach, values and founders.'],
  '/services': ['Our Services | Shivay Innovations', 'Explore website development, mobile apps, CRM and ERP, SEO, social media and support services.'],
  '/solutions': ['Solutions & Concepts | Shivay Innovations', 'Explore illustrative website and mobile application concepts across industries.'],
  '/pricing': ['Indicative Pricing | Shivay Innovations', 'Explore indicative starting prices for websites, mobile applications, CRM, ERP and digital marketing.'],
  '/contact': ['Contact Shivay Innovations | Discuss Your Project', 'Share your business goals and discuss a tailored digital solution with Shivay Innovations.'],
};

export function usePageMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const [title, description] = pageMeta[pathname] || pageMeta['/'];
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [pathname]);
}
