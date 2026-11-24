import { Link } from 'react-router-dom';
import { ArrowUpRight, MoveUpRight } from 'lucide-react';

export default function CTASection({ eyebrow = 'LET’S BUILD SOMETHING USEFUL', title = 'Have a project in mind?', description = 'Share your goals with us. We’ll help you shape the right digital solution for your business.', button = 'Discuss your project' }) {
  return (
    <section className="cta-section section-pad">
      <div className="container">
        <div className="cta-panel">
          <div className="cta-orbit orbit-one" /><div className="cta-orbit orbit-two" />
          <div className="cta-content">
            <div className="eyebrow"><span />{eyebrow}</div>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to="/contact" className="button button-light">{button} <ArrowUpRight size={17} /></Link>
          </div>
          <div className="cta-mark" aria-hidden="true"><MoveUpRight size={100} strokeWidth={0.8} /></div>
        </div>
      </div>
    </section>
  );
}
