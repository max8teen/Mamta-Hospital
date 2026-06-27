import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Reveal } from "./Reveal";

// Custom teal/navy themed Google Maps style
const mapStyle = encodeURIComponent(JSON.stringify([
  { elementType: "geometry", stylers: [{ color: "#e8edeb" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#1B2A4A" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#F7F9F8" }] },
  { featureType: "water", stylers: [{ color: "#0E7C86" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#d9e2e0" }] },
  { featureType: "poi", elementType: "geometry", stylers: [{ color: "#dce8e5" }] },
  { featureType: "landscape", stylers: [{ color: "#eef3f1" }] },
]));

export function MapSection() {
  const address = "#8, 1st Main Road, Sampangi Rama Nagara, Bengaluru, Karnataka 560027";
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  // Use Google Static Maps with custom style as a themed backdrop (no API key needed for embed iframe, but styling requires JS API; we use the iframe with the address and overlay our card + a teal tint).

  return (
    <section id="visit" className="py-24 lg:py-32 bg-gradient-to-b from-sage/30 to-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-[0.18em] text-teal font-medium mb-3">Visit us</div>
            <h2 className="text-4xl lg:text-5xl text-navy text-balance" style={{ textWrap: "balance" }}>
              In the heart of Sampangi Rama Nagara.
            </h2>
            <p className="mt-4 text-muted-foreground">Walk in or call ahead — we're open until 10 PM, every day.</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-lift)] border border-border bg-white grid lg:block">
            {/* Map */}
            <div className="relative w-full h-[360px] sm:h-[440px] lg:h-auto lg:aspect-[21/9]">
              <iframe
                title="Mamta Hospital location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`}
                className="absolute inset-0 w-full h-full border-0"
                style={{ filter: "hue-rotate(165deg) saturate(0.75) contrast(0.92)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div aria-hidden className="absolute inset-0 bg-[color-mix(in_oklab,var(--teal)_12%,transparent)] pointer-events-none mix-blend-multiply" />
            </div>

            {/* Address card — stacks below on mobile, floats over map on desktop */}
            <div className="relative lg:absolute lg:left-8 lg:bottom-8 lg:max-w-sm bg-white p-6 lg:rounded-2xl lg:shadow-[var(--shadow-lift)] lg:border lg:border-border">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-teal text-white flex items-center justify-center">
                    <MapPin className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="font-display text-lg text-navy" style={{ fontFamily: "var(--font-display)" }}>Mamta Hospital</div>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">#8, 1st Main Road,<br />Sampangi Rama Nagara,<br />Bengaluru — 560027</p>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <a href="tel:+919187069690" className="group flex items-center gap-2 text-navy hover:text-teal transition-colors">
                    <Phone className="w-4 h-4 text-teal group-hover:scale-110 transition-transform" />
                    091870 69690
                  </a>
                  <div className="flex items-center gap-2 text-navy">
                    <Clock className="w-4 h-4 text-teal" />
                    Until 10 PM
                  </div>
                </div>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-navy text-white text-sm font-medium hover:bg-teal hover:scale-[1.03] transition-all duration-300"
                >
                  <Navigation className="w-4 h-4" />
                  Get directions
                </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}