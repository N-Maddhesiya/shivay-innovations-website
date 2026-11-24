import { Link } from 'react-router-dom';
import { ArrowUpRight, Info } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import CTASection from '../components/CTASection';
import { pricing, extraCosts } from '../data/pricing';

export default function Pricing() {
  return (
    <>
      <PageIntro eyebrow="INDICATIVE PRICING" title={<>A starting point for<br /><em>planning your next project.</em></>} description="Explore indicative starting prices for common digital services. Final pricing is confirmed after understanding the scope and requirements." />
      <section className="section-pad pricing-section">
        <div className="container">
          <div className="pricing-top-note"><Info size={17}/><p>These are planning estimates in INR, not a final quotation. Actual pricing depends on scope, complexity, integrations, content, third-party services and support requirements. Applicable taxes are extra where required.</p></div>
          <div className="pricing-grid">
            {pricing.map((item, index) => <article className={`pricing-card ${item.featured ? 'is-featured' : ''}`} key={item.name}>
              <div className="pricing-card-top"><span className="pricing-category">{item.category}</span><span className="pricing-num">{String(index + 1).padStart(2, '0')}</span></div>
              <h3>{item.name}</h3>
              <div className="price-line"><strong>{item.price}</strong><span>{item.suffix}</span></div>
              <p>{item.detail}</p>
              <Link to={`/contact?service=${encodeURIComponent(item.name)}`} className={item.featured ? 'button button-primary' : 'button button-outline'}>Discuss this package <ArrowUpRight size={16}/></Link>
            </article>)}
          </div>
        </div>
      </section>
      <section className="section-pad pricing-extras-section">
        <div className="container extras-grid">
          <div className="extras-card"><div className="eyebrow"><span/>OPTIONAL / RECURRING COSTS</div><h3>Third-party costs to plan for.</h3><p>These may be paid to external providers or quoted separately depending on the project.</p><div className="extras-list">{extraCosts.map((cost) => <span key={cost}><i/> {cost}</span>)}</div></div>
          <div className="milestone-card"><div className="eyebrow"><span/>SUGGESTED PAYMENT MILESTONES</div><h3>A clear project payment structure.</h3><div className="milestone-row"><strong>50%</strong><span>Advance to begin</span></div><div className="milestone-row"><strong>30%</strong><span>After design / agreed milestone approval</span></div><div className="milestone-row"><strong>20%</strong><span>Before final handover</span></div><p>The exact schedule is agreed in the proposal and contract.</p></div>
        </div>
      </section>
      <section className="section-pad pricing-faq-section"><div className="container faq-layout"><div><div className="eyebrow"><span/>BEFORE WE BEGIN</div><h2>Good scope makes for <em>clearer estimates.</em></h2><p>We confirm what is included, what is outside the scope, the expected timeline and the payment schedule before work begins.</p></div><div className="faq-items"><details open><summary>Are these final prices?</summary><p>No. These are indicative starting estimates. A tailored proposal is prepared after reviewing your requirements.</p></details><details><summary>Are hosting and domain included?</summary><p>Domain registration, hosting and other third-party or recurring charges may be billed separately.</p></details><details><summary>Can the service be customised?</summary><p>Yes. The final deliverables and integrations are defined according to the agreed project scope.</p></details></div></div></section>
      <CTASection eyebrow="LET’S PLAN YOUR PROJECT" title="Tell us what you want to build." description="We’ll understand your requirements and discuss a suitable scope and proposal." button="Request a discussion" />
    </>
  );
}
