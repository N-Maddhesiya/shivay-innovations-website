import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service, compact = false }) {
  const Icon = service.icon;
  return (
    <article className={`service-card ${compact ? 'compact' : ''}`}>
      <Link to={`/services#${service.id}`} className="service-image-link" aria-label={`Explore ${service.title}`}>
        <img className="service-image" src={service.image} alt={`${service.title} visual`} loading="lazy" />
        <span className="service-image-tag"><Icon size={14}/>{service.number} / SERVICE</span>
        <span className="service-image-arrow"><ArrowUpRight size={18}/></span>
      </Link>
      <div className="service-card-content">
        <div className="service-card-top"><div className="icon-tile"><Icon size={20} strokeWidth={1.8} /></div><span className="card-number">{service.number}</span></div>
        <h3>{service.title}</h3>
        <p>{compact ? service.short : service.description}</p>
        <Link to={`/services#${service.id}`} className="text-link">Explore service <ArrowUpRight size={16} /></Link>
      </div>
    </article>
  );
}
