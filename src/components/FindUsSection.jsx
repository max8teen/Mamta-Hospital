import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { hospital } from '../data/content';

export default function FindUsSection() {
  const mapsQuery = encodeURIComponent(hospital.address);

  return (
    <section className="find-us" id="contact">
      <div className="section-inner find-grid">
        <div className="find-info">
          <p className="eyebrow">Find Us</p>

          <div className="find-row">
            <MapPin size={18} className="find-icon" />
            <p>{hospital.address}</p>
          </div>

          <div className="find-row">
            <Phone size={18} className="find-icon" />
            <div className="find-phones">
              {hospital.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s+/g, '')}`}>
                  {p}
                </a>
              ))}
            </div>
          </div>

          <div className="find-row">
            <Clock size={18} className="find-icon" />
            <p>{hospital.hours}</p>
          </div>

          <div className="find-ctas">
            <a
              className="btn btn-accent"
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
              target="_blank"
              rel="noreferrer"
            >
              <Navigation size={16} /> Get Directions
            </a>
            <a className="btn btn-outline" href={`tel:${hospital.primaryPhone}`}>
              <Phone size={16} /> Call
            </a>
          </div>
        </div>

        <div className="find-map">
          <iframe
            title="Mamta Hospital location map"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
