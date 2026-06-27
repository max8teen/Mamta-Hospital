import { MapPin, Phone, Clock, Instagram, Mail } from "lucide-react";

const services = [
  "General Medicine", "Dental Care", "Cardiac Care", "Physiotherapy",
  "ENT", "Orthopedics", "Gynecology", "Pediatrics",
];

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-display text-2xl" style={{ fontFamily: "var(--font-display)" }}>
            Mamta <span className="text-teal">Hospital</span>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            A neighbourhood multispeciality hospital in Sampangi Rama Nagara — caring for Bengaluru's families since day one.
          </p>
          <a
            href="https://www.instagram.com/mamta_hospitalsrnagar/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-white/80 hover:text-teal transition-colors"
          >
            <Instagram className="w-4 h-4" /> @mamta_hospitalsrnagar
          </a>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-teal mb-4">Specialties</div>
          <ul className="space-y-2 text-sm text-white/80">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="hover:text-teal transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-teal mb-4">Visit</div>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-teal mt-0.5 shrink-0" /> #8, 1st Main Road, Sampangi Rama Nagara, Bengaluru 560027</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-teal" /> <a href="tel:+919187069690" className="hover:text-teal transition-colors">091870 69690</a></li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-teal" /> Open daily until 10:00 PM</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-teal" /> care@mamtahospital.in</li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-teal mb-4">Quick links</div>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#services" className="hover:text-teal transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-teal transition-colors">About</a></li>
            <li><a href="#doctor" className="hover:text-teal transition-colors">Meet Dr. Mamta</a></li>
            <li><a href="#visit" className="hover:text-teal transition-colors">Find us</a></li>
            <li>
              <a
                href="https://wa.me/919187069690"
                target="_blank"
                rel="noreferrer"
                className="inline-flex mt-3 items-center gap-2 px-4 py-2 rounded-full bg-teal text-white text-sm font-medium hover:bg-white hover:text-navy hover:scale-[1.03] transition-all duration-300"
              >
                Book a consultation
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <div>© {new Date().getFullYear()} Mamta Hospital. All rights reserved.</div>
        <div>Crafted with care in Bengaluru.</div>
      </div>
    </footer>
  );
}