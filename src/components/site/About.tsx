import { motion } from "framer-motion";
import { Instagram, Play, Heart, Users, Award } from "lucide-react";
import { Reveal } from "./Reveal";
import community from "@/assets/community.jpg";

const REEL_URL = "https://www.instagram.com/reel/DaFTFE-x_ST/?igsh=MTBjNXFhYTE1Z215eQ==";

const stats = [
  { icon: Heart, label: "Years caring for the neighbourhood", value: "10+" },
  { icon: Users, label: "Families seen across specialties", value: "25k+" },
  { icon: Award, label: "On-site specialists & consultants", value: "20+" },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.05fr] gap-14 lg:gap-20 items-center">
        {/* Reel card — clicking opens the real Instagram reel in a new tab */}
        <Reveal>
          <a
            href={REEL_URL}
            target="_blank"
            rel="noreferrer"
            className="group block relative mx-auto w-full max-w-[420px] aspect-[9/14] rounded-[2rem] overflow-hidden shadow-[var(--shadow-lift)] border border-white"
          >
            <img
              src={community}
              alt="Care at Mamta Hospital"
              width={1100}
              height={1300}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-navy/80" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <Play className="w-6 h-6 text-teal ml-1" fill="currentColor" />
            </motion.div>

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-medium text-navy">
                <Instagram className="w-3.5 h-3.5" />
                @mamta_hospitalsrnagar
              </div>
              <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur text-[10px] uppercase tracking-wider text-white font-semibold">Reel</span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="font-display text-xl mb-1" style={{ fontFamily: "var(--font-display)" }}>Inside Mamta Hospital</div>
              <div className="text-xs text-white/80">Tap to watch on Instagram</div>
            </div>
          </a>
        </Reveal>

        <div>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-teal font-medium mb-3">Our story</div>
            <h2 className="text-4xl lg:text-5xl text-navy text-balance" style={{ textWrap: "balance" }}>
              A hospital built for the people who walk past it.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Mamta Hospital began with a simple idea — that great medicine should feel familiar. We're a neighbourhood multispeciality hospital in Sampangi Rama Nagara, treating the families of Bengaluru's heart with the kind of attention you'd give your own.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From everyday consults to specialist procedures, our consultants take time. We listen first, treat thoughtfully, and stay close after — because care doesn't end at discharge.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.label} delay={0.15 + i * 0.08}>
                  <div className="group rounded-2xl bg-white border border-border p-5 hover:border-teal hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-300 flex sm:block items-center gap-4">
                    <div className="w-11 h-11 sm:w-auto sm:h-auto shrink-0 rounded-xl sm:rounded-none bg-sage/60 sm:bg-transparent flex items-center justify-center sm:block sm:mb-3">
                      <Icon className="w-5 h-5 text-teal group-hover:scale-110 transition-transform duration-300" strokeWidth={1.6} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-2xl font-display text-navy" style={{ fontFamily: "var(--font-display)" }}>{s.value}</div>
                      <div className="text-xs text-muted-foreground mt-1 leading-snug">{s.label}</div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}