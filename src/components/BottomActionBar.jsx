import { Phone, Navigation, Calendar } from 'lucide-react';
import { hospital } from '../data/content';

export default function BottomActionBar() {
  const mapsQuery = encodeURIComponent(hospital.address);

  return (
    <div className="bottom-bar">
      <a className="bottom-bar-item" href={`tel:${hospital.primaryPhone}`}>
        <Phone size={17} /> Call
      </a>
      <a
        className="bottom-bar-item"
        href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
        target="_blank"
        rel="noreferrer"
      >
        <Navigation size={17} /> Directions
      </a>
      <a className="bottom-bar-item bottom-bar-accent" href="#contact">
        <Calendar size={17} /> Book Appointment
      </a>
    </div>
  );
}
