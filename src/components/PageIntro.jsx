import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function PageIntro({ eyebrow, title, description, crumb = 'Home' }) {
  return (
    <section className="page-intro">
      <div className="page-intro-grid" />
      <div className="container page-intro-content">
        <div className="breadcrumbs"><Link to="/">{crumb}</Link><span>/</span><span>{eyebrow}</span></div>
        <div className="eyebrow"><span />{eyebrow}</div>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        <Link to="/contact" className="text-link intro-link">Talk to our team <ArrowUpRight size={16} /></Link>
      </div>
    </section>
  );
}
