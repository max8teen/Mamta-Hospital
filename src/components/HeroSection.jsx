import { Star, Clock, MessageSquare, MapPin, Calendar, Phone } from 'lucide-react';
import { hospital } from '../data/content';

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow-pill">Trusted Multi-Specialty Care</span>
          <h1>Trusted Care for Your Family</h1>
          <p className="hero-subline">Caring hands, healing hearts, brighter smiles</p>
          <p className="hero-desc">
            Comprehensive healthcare services including general physician care, dental
            care, cardiac care, physiotherapy, blood tests, X-ray, and pharmacy — all
            under one roof in {hospital.area}.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-accent" href="#contact">
              <Calendar size={17} /> Book Appointment
            </a>
            <a className="btn btn-white" href={`tel:${hospital.primaryPhone}`}>
              <Phone size={17} /> Call Now
            </a>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-photo" role="img" aria-label="Doctor consulting with a patient at Mamta Hospital">
            <div className="hero-photo-placeholder">
              <span>Add doctor &amp; patient photo here</span>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <Star size={18} className="stat-icon" />
            <div>
              <strong>{hospital.rating}★</strong>
              <span>Google Rating</span>
            </div>
          </div>
          <div className="stat">
            <Clock size={18} className="stat-icon" />
            <div>
              <strong>Open Daily</strong>
              <span>Till 10 PM</span>
            </div>
          </div>
          <div className="stat">
            <MessageSquare size={18} className="stat-icon" />
            <div>
              <strong>{hospital.reviews}</strong>
              <span>Reviews</span>
            </div>
          </div>
          <div className="stat">
            <MapPin size={18} className="stat-icon" />
            <div>
              <strong>Sampangi Rama</strong>
              <span>Nagara, Bengaluru</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
