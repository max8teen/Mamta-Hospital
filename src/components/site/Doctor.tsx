import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import dr from "@/assets/dr-mamta.jpg";

export function Doctor() {
  return (
    <section id="doctor" className="relative py-24 lg:py-32 bg-navy text-white overflow-hidden">
      <div aria-hidden className="absolute top-20 -left-32 w-[420px] h-[420px] rounded-full bg-teal/20 blur-3xl" />
      <div aria-hidden className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full bg-[color-mix(in_oklab,var(--gold)_18%,transparent)] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.95fr_1.1fr] gap-14 lg:gap-20 items-center">
        {/* Portrait with organic teal shape */}
        <Reveal>
          <div className="relative mx-auto max-w-[460px]">
            <motion.svg
              viewBox="0 0 500 500"
              aria-hidden
              className="absolute inset-0 w-full h-full -z-0"
              initial={{ rotate: -6, scale: 0.9, opacity: 0 }}
              whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <path
                fill="oklch(0.5 0.09 200)"
                d="M421,317Q399,384,332,418Q265,452,194,425Q123,398,82,335Q41,272,72,202Q103,132,170,90Q237,48,310,75Q383,102,418,176Q453,250,421,317Z"
              />
            </motion.svg>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-lift)]"
            >
              <img src={dr} alt="Dr. Mamta" width={900} height={1100} loading="lazy" className="w-full h-auto object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-5 -right-5 bg-white text-navy rounded-2xl px-5 py-4 shadow-[var(--shadow-soft)]"
            >
              <div className="text-xs text-muted-foreground">Founder & Chief Physician</div>
              <div className="font-display text-lg" style={{ fontFamily: "var(--font-display)" }}>Dr. Mamta</div>
            </motion.div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-gold font-medium mb-3">Meet your doctor</div>
            <h2 className="text-4xl lg:text-6xl text-balance" style={{ textWrap: "balance" }}>
              Care that begins with <em className="not-italic text-teal">listening.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap gap-2">
              {["MBBS", "MD — General Medicine", "15+ years practice"].map((q) => (
                <span key={q} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-white/85 hover:bg-white/20 hover:border-teal transition-all duration-300">
                  {q}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 relative pl-6 border-l-2 border-teal/60">
              <Quote className="absolute -left-3 -top-2 w-5 h-5 text-teal bg-navy" />
              <p className="text-lg lg:text-xl leading-relaxed text-white/90 font-display italic" style={{ fontFamily: "var(--font-display)" }}>
                "Medicine is at its best when it feels personal. Every patient who walks in is somebody's family — that's how we treat them."
              </p>
              <div className="mt-4 text-sm text-white/60">— Dr. Mamta</div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-row flex-wrap gap-3">
              <a href="https://wa.me/919187069690" target="_blank" rel="noreferrer" className="inline-flex flex-1 sm:flex-none justify-center items-center px-5 py-3 rounded-full bg-teal text-white text-sm font-medium hover:bg-white hover:text-navy hover:scale-[1.03] transition-all duration-300 whitespace-nowrap">
                Book with Dr. Mamta
              </a>
              <a href="#visit" className="inline-flex flex-1 sm:flex-none justify-center items-center px-5 py-3 rounded-full border border-white/20 text-white text-sm hover:border-teal hover:text-teal transition-all duration-300 whitespace-nowrap">
                Visit the hospital
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}