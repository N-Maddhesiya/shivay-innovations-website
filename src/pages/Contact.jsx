import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, Phone, Send, Building2, CheckCircle2, AlertCircle } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import { company } from '../data/company';

const serviceOptions = [
  'Website Design & Development', 'Mobile App Development', 'CRM & ERP Solutions',
  'SEO & Digital Marketing', 'Social Media Management', 'Maintenance & Support', 'Other / Not sure yet',
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get('service') || '';
  const availableServices = preselected && !serviceOptions.includes(preselected) ? [preselected, ...serviceOptions] : serviceOptions;
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: preselected, budget: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [sending, setSending] = useState(false);
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
  const { contact } = company;

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: '', message: '' });
    if (!endpoint) {
      setStatus({ type: 'warning', message: 'The enquiry form is ready, but online submission has not been connected yet. Please configure VITE_CONTACT_ENDPOINT before publishing the site.' });
      return;
    }
    setSending(true);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'Shivay Innovations website' }),
      });
      if (!response.ok) throw new Error('The server could not accept the enquiry. Please try again later.');
      setStatus({ type: 'success', message: 'Your enquiry has been submitted. Thank you for contacting Shivay Innovations.' });
      setForm({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Something went wrong. Please try again.' });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageIntro eyebrow="CONTACT US" title={<>Let’s discuss what’s<br /><em>next for your business.</em></>} description="Share your goals and a little about the challenge. We’ll use that context to understand the scope and discuss a tailored proposal." />
      <section className="section-pad contact-section">
        <div className="container contact-layout">
          <div className="contact-sidebar">
            <div className="eyebrow"><span/>START A CONVERSATION</div>
            <h2>Have a project in <em>mind?</em></h2>
            <p>Tell us what you’re looking to achieve. Whether you need a website, an app or a business system, the first step is understanding your requirements.</p>
            <div className="contact-detail-list">
              <div className="contact-detail"><span><Building2 size={18}/></span><div><small>COMPANY</small><strong>Shivay Innovations</strong></div></div>
              <div className="contact-detail"><span><MessageCircle size={18}/></span><div><small>FOUNDERS</small><strong>Shalini Jaudaun<br/>Vipul Panghal</strong></div></div>
              {contact.phone && <div className="contact-detail"><span><Phone size={18}/></span><div><small>PHONE / WHATSAPP</small><a href={`tel:${contact.phone}`}>{contact.phone}</a></div></div>}
              {contact.email && <div className="contact-detail"><span><Mail size={18}/></span><div><small>EMAIL</small><a href={`mailto:${contact.email}`}>{contact.email}</a></div></div>}
              {contact.address && <div className="contact-detail"><span><MapPin size={18}/></span><div><small>OFFICE</small><strong>{contact.address}</strong></div></div>}
            </div>
            {!contact.phone && !contact.email && !contact.address && <div className="contact-info-note">Official phone, email and office details can be added once confirmed by the company.</div>}
            <div className="contact-side-bottom"><span className="pulse-dot"/> DISCOVERY · SCOPE · DESIGN · BUILD</div>
          </div>

          <div className="contact-form-card">
            <div className="form-heading"><span>PROJECT ENQUIRY</span><h3>Tell us a little about your project.</h3><p>Fields marked with * are required.</p></div>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>Full name *<input name="name" value={form.name} onChange={update} placeholder="Your name" required minLength={2}/></label>
                <label>Business email *<input name="email" type="email" value={form.email} onChange={update} placeholder="you@company.com" required/></label>
                <label>Phone number<input name="phone" type="tel" value={form.phone} onChange={update} placeholder="Your phone number"/></label>
                <label>Company name<input name="company" value={form.company} onChange={update} placeholder="Your business"/></label>
                <label>Service required *<select name="service" value={form.service} onChange={update} required><option value="">Select a service</option>{availableServices.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
                <label>Estimated budget <select name="budget" value={form.budget} onChange={update}><option value="">Select an estimated budget</option><option>Under ₹20,000</option><option>₹20,000 – ₹50,000</option><option>₹50,000 – ₹1,00,000</option><option>₹1,00,000+</option><option>Not decided yet</option></select></label>
                <label className="full-field">Project details *<textarea name="message" value={form.message} onChange={update} rows="5" placeholder="What are you looking to build? Tell us about your goals, audience and any important requirements..." required minLength={10}/></label>
              </div>
              {status.message && <div className={`form-status ${status.type}`} role="status">{status.type === 'success' ? <CheckCircle2 size={18}/> : <AlertCircle size={18}/>}<span>{status.message}</span></div>}
              <div className="form-submit-row"><p>Your information will be used to respond to this project enquiry.</p><button type="submit" className="button button-primary" disabled={sending}>{sending ? 'Submitting...' : 'Submit enquiry'} <Send size={16}/></button></div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
