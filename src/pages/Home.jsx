import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Check, MoveRight, Sparkles } from 'lucide-react';
import HeroVisual from '../components/HeroVisual';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import ProcessTimeline from '../components/ProcessTimeline';
import CTASection from '../components/CTASection';
import { services, technologyGroups } from '../data/services';

const principles = [
  'Business-focused solutions',
  'Clear scope and communication',
  'Responsive, user-friendly experiences',
  'Practical technology choices',
  'Testing before launch',
  'Support as agreed',
];

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-grid-lines" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span />INNOVATE <b>·</b> BUILD <b>·</b> GROW</div>
            <h1>Digital solutions that move your business <em>forward.</em></h1>
            <p className="hero-lead">We turn business goals into thoughtful digital experiences — from custom websites and mobile apps to systems that make everyday work simpler.</p>
            <div className="hero-actions">
              <Link to="/services" className="button button-primary">Explore our services <ArrowUpRight size={17} /></Link>
              <Link to="/contact" className="button button-outline">Start a project <MoveRight size={17} /></Link>
            </div>
            <div className="hero-proofline"><span className="proof-icon"><Check size={14} /></span><span>Designed around your business goals</span><i /> <span>Built for real-world use</span></div>
          </div>
          <HeroVisual />
        </div>
        <a href="#intro" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        <div className="hero-bottom-glow" />
      </section>

      <section className="service-ribbon" aria-label="Core services">
        <div className="container ribbon-inner">
          {['Website Development', 'Mobile Applications', 'CRM & ERP', 'Digital Marketing'].map((item, i) => <span key={item}><i>{String(i + 1).padStart(2, '0')}</i>{item}</span>)}
        </div>
      </section>

      <section className="section-pad intro-section" id="intro">
        <div className="container intro-grid">
          <div className="intro-statement">
            <div className="eyebrow"><span />WHO WE ARE</div>
            <h2>Technology should move your business <em>closer to what’s next.</em></h2>
            <Link to="/about" className="text-link">Discover Shivay Innovations <ArrowUpRight size={16} /></Link>
          </div>
          <div className="intro-body">
            <p className="large-copy">Shivay Innovations is a technology and digital solutions company focused on helping businesses build a stronger online presence, streamline operations and connect with customers.</p>
            <p>We combine thoughtful design, practical technology and business-focused execution to deliver solutions suited to each client’s goals. From a professional website to a custom mobile application or business management system, we understand the requirement first, recommend the right solution and support the project through delivery.</p>
            <div className="intro-mini-stats">
              <div><strong>01</strong><span>Understand<br />your business</span></div>
              <div><strong>02</strong><span>Shape the right<br />digital solution</span></div>
              <div><strong>03</strong><span>Build for<br />real-world use</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad services-section">
        <div className="container">
          <div className="section-heading-row">
            <SectionHeading eyebrow="WHAT WE DO" title={<>Practical services.<br /><em>Meaningful digital progress.</em></>} description="A connected set of digital services to help you build, operate and grow with confidence." />
            <Link to="/services" className="button button-outline desktop-only">View all services <ArrowUpRight size={16} /></Link>
          </div>
          <div className="services-grid">
            {services.map((service) => <ServiceCard key={service.id} service={service} compact />)}
          </div>
          <Link to="/services" className="button button-outline mobile-only full-button">View all services <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="section-pad capability-section">
        <div className="container capability-layout">
          <div className="capability-copy">
            <div className="eyebrow"><span />BUILT AROUND YOUR BUSINESS</div>
            <h2>The right solution starts with the <em>right questions.</em></h2>
            <p>Every project is different. We begin by understanding your audience, workflow, integrations and goals — then recommend a practical scope and technology stack.</p>
            <ul className="check-list">
              {principles.map((item) => <li key={item}><span><Check size={13} /></span>{item}</li>)}
            </ul>
            <Link to="/contact" className="text-link">Talk through your idea <ArrowUpRight size={16} /></Link>
          </div>
          <div className="stack-panel">
            <div className="stack-panel-head"><span className="stack-symbol"><Sparkles size={18} /></span><div><strong>Technology toolkit</strong><small>Selected to fit the project</small></div><span className="stack-status">FLEXIBLE</span></div>
            <div className="stack-groups">
              {technologyGroups.map((group) => <div className="stack-group" key={group.title}><h4>{group.title}</h4><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}
            </div>
            <p className="stack-note">The final stack is selected after reviewing scope, integrations, expected traffic, budget and maintenance needs.</p>
            <div className="stack-decoration">SI<span>.</span></div>
          </div>
        </div>
      </section>

      <section className="section-pad process-section">
        <div className="container process-layout">
          <div className="process-intro">
            <SectionHeading eyebrow="HOW WE WORK" title={<>A clear path from first idea to <em>launch.</em></>} description="A collaborative process keeps decisions, expectations and next steps clear at every stage." />
            <div className="process-note"><span className="note-line" />Clear communication. Transparent scope. Responsive coordination.</div>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      <section className="section-pad concept-teaser-section">
        <div className="container concept-teaser">
          <div className="concept-copy">
            <div className="eyebrow"><span />INDUSTRY-READY THINKING</div>
            <h2>One digital partner.<br /><em>Many ways to build.</em></h2>
            <p>Explore illustrative website and mobile app directions for business, healthcare, retail, education, real estate and more.</p>
            <Link to="/solutions" className="button button-primary">Explore solution concepts <ArrowUpRight size={17} /></Link>
            <small>Concept samples are illustrative directions, not claims of completed client projects.</small>
          </div>
          <div className="concept-collage" aria-hidden="true">
            <div className="collage-window window-one"><div className="collage-bar"><i/><i/><i/></div><div className="collage-block block-orange"/><div className="collage-lines"><i/><i/><i/></div><div className="collage-cards"><b/><b/><b/></div></div>
            <div className="collage-window window-two"><div className="collage-bar"><i/><i/><i/></div><div className="mini-phone"><b/><i/><i/><i/><span/></div><div className="mini-phone second"><b/><i/><i/><i/><span/></div></div>
            <div className="collage-sticker"><span>IDEAS</span><strong>→</strong><span>REALITY</span></div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
