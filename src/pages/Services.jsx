import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, ChevronRight, Layers3 } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import CTASection from '../components/CTASection';
import { services } from '../data/services';

export default function Services() {
  return (
    <>
      <PageIntro eyebrow="OUR SERVICES" title={<>Digital services for<br /><em>the next stage of business.</em></>} description="From your first website to connected business systems and ongoing digital marketing, we help turn business requirements into practical solutions." />
      <section className="section-pad services-detail-section">
        <div className="container services-detail-layout">
          <aside className="services-sidebar"><div className="sidebar-label">EXPLORE SERVICES</div>{services.map((service) => <a key={service.id} href={`#${service.id}`}><span>{service.number}</span>{service.title}<ChevronRight size={15}/></a>)}<div className="sidebar-help"><Layers3 size={20}/><strong>Not sure where to start?</strong><p>Tell us about the challenge. We’ll help you identify a sensible first step.</p><Link to="/contact" className="text-link">Talk to us <ArrowUpRight size={15}/></Link></div></aside>
          <div className="service-detail-list">
            {services.map((service) => {
              const Icon = service.icon;
              return <article className="service-detail-card" id={service.id} key={service.id}>
                <div className="detail-image-wrap"><img src={service.image} alt={`${service.title} example`} loading="lazy"/><span className="detail-image-label"><Icon size={15}/>{service.number} / SERVICE</span></div>
                <div className="detail-card-head"><div className="detail-icon"><Icon size={25}/></div><span>BUILT AROUND YOUR REQUIREMENTS</span></div>
                <h2>{service.title}</h2><p className="detail-lead">{service.description}</p>
                <div className="detail-features"><h4>WHAT THIS CAN INCLUDE</h4><ul>{service.features.map((feature) => <li key={feature}><Check size={14}/>{feature}</li>)}</ul></div>
                <Link to={`/contact?service=${encodeURIComponent(service.title)}`} className="button button-outline">Discuss this service <ArrowUpRight size={16}/></Link>
              </article>;
            })}
          </div>
        </div>
      </section>
      <section className="section-pad custom-scope-section"><div className="container custom-scope-panel"><div><div className="eyebrow"><span/>TAILORED TO THE REQUIREMENT</div><h2>Not every business needs the same <em>technology.</em></h2><p>The final scope, stack, integrations, timeline and support are reviewed with you before development begins.</p></div><Link to="/contact" className="button button-primary">Discuss your requirements <ArrowUpRight size={16}/></Link></div></section>
      <CTASection />
    </>
  );
}
