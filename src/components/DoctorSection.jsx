import { Calendar } from 'lucide-react';
import { doctor } from '../data/content';

export default function DoctorSection() {
  return (
    <section className="doctor-section" id="doctor">
      <div className="section-inner">
        <div className="doctor-card">
          <div className="doctor-photo-placeholder">
            <span>Dr. Mamta photo</span>
          </div>

          <div className="doctor-info">
            <p className="eyebrow">{doctor.eyebrow}</p>
            <h3>{doctor.name}</h3>
            <p className="doctor-bio">{doctor.bio}</p>
            <div className="doctor-tags">
              {doctor.tags.map((tag) => (
                <span className="tag-pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a className="btn btn-accent doctor-cta" href="#contact">
            <Calendar size={17} /> Book Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
