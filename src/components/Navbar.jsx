import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Pricing', to: '/pricing' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // const location = useLocation();

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        {<img
          src="/Logo.png"
          alt="Shivay Innovations"
          className="brand-logo"
        />}
        

        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={close} end={item.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="nav-mobile-cta" onClick={close}>Let's Talk <ArrowUpRight size={15} /></Link>
        </nav>

        <div className="nav-actions">
          <Link to="/contact" className="button button-primary button-nav">Let's Talk <ArrowUpRight size={16} /></Link>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && <button className="mobile-scrim" onClick={close} aria-label="Close navigation" />}
    </header>
  );
}
