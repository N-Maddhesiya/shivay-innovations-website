import { Compass, Eye, Handshake, Lightbulb } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import SectionHeading from '../components/SectionHeading';
import ProcessTimeline from '../components/ProcessTimeline';
import CTASection from '../components/CTASection';
import { company } from '../data/company';

export default function About() {
  return (
    <>
      <PageIntro eyebrow="ABOUT US" title={<>Building digital experiences<br /><em>that move business forward.</em></>} description="We bring thoughtful design, practical technology and business-focused execution together to help organisations take their next digital step." />
      <section className="section-pad about-intro-section">
        <div className="container about-intro-grid">
          <div><div className="eyebrow"><span />WHO WE ARE</div><h2>Technology with a <em>business-first mindset.</em></h2></div>
          <div className="about-copy"><p className="large-copy">Shivay Innovations is a technology and digital solutions company focused on helping businesses build a stronger online presence, streamline operations and connect with customers.</p><p>We work with startups, small and medium businesses and growing organisations across industries. From a professional website to a custom mobile application or business management system, we understand the requirement first, recommend the right solution and support the project through delivery.</p><p>Our focus is on making technology useful: choosing an appropriate scope, designing around the people who will use it and delivering with clear communication.</p></div>
        </div>
      </section>

      <section className="section-pad values-section">
        <div className="container">
          <SectionHeading eyebrow="WHAT GUIDES US" title={<>Innovate. Build. <em>Grow.</em></>} description="A simple philosophy that shapes how we think about every project." />
          <div className="values-grid">
            <article className="value-card"><div className="value-icon"><Lightbulb size={23}/></div><span>01 / INNOVATE</span><h3>Think with purpose.</h3><p>Explore the challenge, understand the audience and find a useful direction before choosing the tools.</p></article>
            <article className="value-card"><div className="value-icon"><Compass size={23}/></div><span>02 / BUILD</span><h3>Make it practical.</h3><p>Turn an agreed scope into a considered digital experience, built and tested for its intended use.</p></article>
            <article className="value-card"><div className="value-icon"><Eye size={23}/></div><span>03 / GROW</span><h3>Keep moving forward.</h3><p>Support a stronger digital presence and smoother operations with solutions that can evolve with your needs.</p></article>
          </div>
        </div>
      </section>

      <section className="section-pad approach-section">
        <div className="container approach-layout">
          <div className="approach-copy"><SectionHeading eyebrow="OUR APPROACH" title={<>Clarity at every <em>step.</em></>} description="We keep the process collaborative and transparent, from the first conversation through handover." /><div className="commitment-card"><Handshake size={22}/><div><strong>Our commitment</strong><p>Clear communication, transparent project scope, responsive coordination and solutions built around measurable business needs.</p></div></div></div>
          <ProcessTimeline />
        </div>
      </section>

      <section className="section-pad founders-section">
        <div className="container founders-panel">
          <div className="founders-graphic"><div className="founder-orbit"/><div className="founder-initials">SI<span>.</span></div><span className="founder-caption">INNOVATE · BUILD · GROW</span></div>
          <div className="founders-content"><div className="eyebrow"><span />LEADERSHIP</div><h2>Meet the <em>founders.</em></h2><p>Shivay Innovations is founded by people focused on connecting business needs with practical digital solutions.</p><div className="founder-names">{company.founders.map((name, i) => <div key={name}><span>0{i + 1}</span><strong>{name}</strong></div>)}</div><small>Founder details and biographies can be added when approved by the company.</small></div>
        </div>
      </section>
      <CTASection eyebrow="LET’S MOVE YOUR IDEA FORWARD" title="Let’s build with clarity." description="Tell us where your business wants to go. We’ll start by understanding the requirement." button="Start a conversation" />
    </>
  );
}
