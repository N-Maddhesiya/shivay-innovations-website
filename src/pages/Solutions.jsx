import { ArrowUpRight, Smartphone, Monitor, Check } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { BrowserPreview, PhonePreview } from '../components/ConceptPreview';
import { websiteConcepts, appConcepts } from '../data/portfolio';

const appFeatures = ['User registration and login', 'Role-based access', 'Push notifications', 'Payment gateway integration', 'Maps and location', 'Admin dashboard', 'Analytics', 'API integrations', 'App Store / Play Store deployment support*'];

export default function Solutions() {
  return (
    <>
      <PageIntro eyebrow="SOLUTIONS & CONCEPTS" title={<>Digital experiences shaped<br /><em>around your industry.</em></>} description="Explore possible website and mobile application directions. Each project is customised around the business, audience and approved requirements." />
      <section className="section-pad solutions-disclaimer-section"><div className="container"><div className="notice-banner"><span className="notice-icon">i</span><div><strong>Illustrative concept samples</strong><p>The examples below communicate possible design directions. They are not presented as completed client projects or live products. Final layouts and functionality are tailored to approved requirements.</p></div></div></div></section>
      <section className="section-pad website-concepts-section">
        <div className="container">
          <div className="section-heading-row"><SectionHeading eyebrow="WEBSITE DESIGN SAMPLES" title={<>A website for the way<br /><em>your industry works.</em></>} description="From company websites to focused customer journeys, explore common directions we can shape around your business."/><div className="section-side-icon"><Monitor size={31}/><span>WEB / 01</span></div></div>
          <div className="website-concept-grid">
            {websiteConcepts.map((concept, i) => <article className="website-concept-card" key={concept.name}>
              <div className="concept-preview-wrap"><BrowserPreview style={concept.style}/><span className="concept-index">{String(i + 1).padStart(2, '0')}</span></div>
              <div className="website-concept-copy"><div><span className="concept-type">{concept.type}</span><h3>{concept.name}</h3></div><p>{concept.description}</p></div>
            </article>)}
          </div>
        </div>
      </section>
      <section className="section-pad app-concepts-section">
        <div className="container">
          <div className="section-heading-row"><SectionHeading eyebrow="MOBILE APPLICATION SAMPLES" title={<>Useful experiences, <em>in every hand.</em></>} description="App concepts for customer-facing services and internal business operations."/><div className="section-side-icon"><Smartphone size={31}/><span>APP / 02</span></div></div>
          <div className="app-concept-list">
            {appConcepts.map((app) => <article className="app-concept-card" key={app.name}>
              <div className="phone-stage"><PhonePreview color={app.color}/></div>
              <div className="app-concept-info"><span className="app-number">{app.number} / APP CONCEPT</span><h3>{app.name}</h3><p>{app.description}</p><div className="platform-tags"><span>Android</span><span>iOS</span><span>Admin panel</span></div></div>
              <div className="app-arrow"><ArrowUpRight size={19}/></div>
            </article>)}
          </div>
          <div className="app-features-panel"><div><div className="eyebrow"><span/>TYPICAL APP FEATURES</div><h3>Designed for useful everyday interactions.</h3></div><div className="app-feature-grid">{appFeatures.map((feature) => <span key={feature}><Check size={14}/>{feature}</span>)}</div></div>
          <p className="fine-print">*Deployment support is subject to developer account access and platform requirements.</p>
        </div>
      </section>
      <CTASection eyebrow="HAVE A SPECIFIC IDEA?" title="Let’s shape the right experience." description="Tell us about your audience, business process and goals. We’ll help define a suitable solution." button="Discuss your idea" />
    </>
  );
}
