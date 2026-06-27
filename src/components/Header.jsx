import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { hospital, quickLinks } from '../data/content';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <Logo size={34} />
          <span className="brand-name">MAMTA HOSPITAL</span>
        </a>

        <nav className={`nav-links ${open ? 'nav-open' : ''}`}>
          {quickLinks.slice(0, 4).map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-icon-btn" href={`tel:${hospital.primaryPhone}`} aria-label="Call Mamta Hospital">
            <Phone size={18} />
          </a>
          <button
            className="header-icon-btn menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
