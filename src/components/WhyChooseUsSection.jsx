import { UserCheck, Monitor, Clock, Users, Smile, Activity } from 'lucide-react';

const ICONS = { UserCheck, Monitor, Clock, Users, Tooth: Smile, Activity };

const POINTS = [
  { label: 'Experienced Doctor', icon: 'UserCheck' },
  { label: 'Modern Equipment', icon: 'Monitor' },
  { label: 'Convenient Daily Timings', icon: 'Clock' },
  { label: 'Trusted by Local Families', icon: 'Users' },
  { label: 'Dental and General Care Under One Roof', icon: 'Tooth' },
  { label: 'Quick Diagnostics Available', icon: 'Activity' },
];

export default function WhyChooseUsSection() {
  return (
    <section className="why-choose" id="why-choose-us">
      <div className="section-inner why-grid">
        <div className="why-copy">
          <p className="eyebrow">Why Choose Us</p>
          <h2>Personalized Care with a Patient-First Approach</h2>
          <p className="why-desc">
            At Mamta Hospital, we combine compassion with modern technology to
            provide quality healthcare for you and your family in Sampangi Rama
            Nagara.
          </p>

          <div className="why-points">
            {POINTS.map((point) => {
              const Icon = ICONS[point.icon];
              return (
                <div className="why-point" key={point.label}>
                  <span className="why-point-icon">
                    <Icon size={16} />
                  </span>
                  <span>{point.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="why-media">
          <div className="why-photo-placeholder">
            <span>Add dental/clinic photo here</span>
          </div>
        </div>
      </div>
    </section>
  );
}
