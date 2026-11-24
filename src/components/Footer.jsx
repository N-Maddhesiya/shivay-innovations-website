import { Link } from 'react-router-dom';
import { MoveUpRight } from 'lucide-react';

function SocialIcon({ name }) {
  if (name === 'instagram') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.5" cy="6.8" r="1.1" fill="currentColor"/></svg>;
  if (name === 'linkedin') return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.2 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 9h3.4v11.5H3.5V9Zm5.5 0h3.3v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.3 4.3 5.3v6.5h-3.4v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.9H9V9Z"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.2V13H10v8h3.4Z"/></svg>;
}
import { company } from '../data/company';

export default function Footer() {
  const { contact } = company;
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand-block">
          {<img
            src="/Logo.png"
            alt="Shivay Innovations"
            className="brand-logo"
          />}
          
          <p>Digital solutions that move your business forward. Thoughtful design, practical technology and business-focused execution.</p>
          <div className="footer-socials">
            {contact.instagram && <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><SocialIcon name="instagram" /></a>}
            {contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialIcon name="linkedin" /></a>}
            {contact.facebook && <a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><SocialIcon name="facebook" /></a>}
            {!contact.instagram && !contact.linkedin && !contact.facebook && <span className="social-note">Social links coming soon</span>}
          </div>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <Link to="/about">About us</Link>
          <Link to="/services">Our services</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/pricing">Pricing</Link>
        </div>

        <div className="footer-column">
          <h4>What we do</h4>
          <Link to="/services#web-development">Web development</Link>
          <Link to="/services#mobile-apps">Mobile applications</Link>
          <Link to="/services#crm-erp">CRM & ERP</Link>
          <Link to="/services#seo-marketing">SEO & marketing</Link>
        </div>

        <div className="footer-contact">
          <h4>Have a project in mind?</h4>
          <p>Tell us what you're looking to build. We'll help you define the next step.</p>
          <Link to="/contact" className="footer-contact-link">Start a conversation <MoveUpRight size={16} /></Link>
          {contact.email && <a href={`mailto:${contact.email}`} className="footer-direct">{contact.email}</a>}
          {contact.phone && <a href={`tel:${contact.phone}`} className="footer-direct">{contact.phone}</a>}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Shivay Innovations. All rights reserved.</span>
        <span className="footer-tagline">INNOVATE <i /> BUILD <i /> GROW</span>
      </div>
    </footer>
  );
}
