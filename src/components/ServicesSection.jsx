import {
  Stethoscope,
  HeartPulse,
  Activity,
  TestTube,
  Bone,
  Pill,
  Smile,
  ChevronRight,
} from 'lucide-react';

const ICONS = {
  Stethoscope,
  Tooth: Smile,
  HeartPulse,
  Activity,
  TestTube,
  Bone,
  Pill,
};

const SERVICES = [
  { name: 'General Physician', icon: 'Stethoscope' },
  { name: 'Dental Care', icon: 'Tooth' },
  { name: 'Cardiac Care', icon: 'HeartPulse' },
  { name: 'Physiotherapy', icon: 'Activity' },
  { name: 'Blood Tests', icon: 'TestTube' },
  { name: 'X-Ray', icon: 'Bone' },
  { name: 'Pharmacy', icon: 'Pill' },
];

export default function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="section-inner">
        <p className="eyebrow">Our Services</p>
        <h2>
          Complete Care <span className="underline-accent">Under One Roof</span>
        </h2>

        <div className="services-grid">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <a className="service-card" href="#contact" key={service.name}>
                <span className="service-icon">
                  <Icon size={22} />
                </span>
                <span className="service-name">{service.name}</span>
                <ChevronRight size={18} className="service-chevron" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
