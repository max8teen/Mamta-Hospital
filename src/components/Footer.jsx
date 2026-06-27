import { Phone, MapPin, Clock, Instagram } from 'lucide-react';
import Logo from './Logo';
import { hospital, quickLinks } from '../data/content';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-grid">
        <div className="footer-brand">
          <div className="brand">
            <Logo size={30} light />
            <span className="brand-name light">{hospital.name.toUpperCase()}</span>
          </div>
          <p className="footer-tagline">{hospital.tagline}</p>
          <a
            className="footer-instagram"
            href={`https://instagram.com/${hospital.instagram.replace('@', '')}`}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={16} /> {hospital.instagram}
          </a>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Quick Links</p>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Contact Us</p>
          <ul className="footer-contact">
            {hospital.phones.map((p) => (
              <li key={p}>
                <Phone size={14} /> {p}
              </li>
            ))}
            <li>
              <Clock size={14} /> Open until 10 PM daily
            </li>
            <li>
              <MapPin size={14} /> {hospital.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        © {new Date().getFullYear()} {hospital.name}. All rights reserved.
      </div>
    </footer>
  );
}
