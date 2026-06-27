import { motion } from "framer-motion";
import { ArrowRight, Phone, Clock } from "lucide-react";
import hero from "@/assets/hero-hospital.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* organic background shapes */}
      <div aria-hidden className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-sage/60 blur-3xl" />
      <div aria-hidden className="absolute top-40 -left-40 w-[420px] h-[420px] rounded-full bg-[color-mix(in_oklab,var(--gold)_25%,transparent)] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-xs font-medium text-teal mb-6 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            Open today · until 10:00 PM
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-5xl lg:text-7xl text-navy leading-[1.02] text-balance"
            style={{ textWrap: "balance" }}
          >
            Compassionate care, <em className="not-italic text-teal">close to home.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            A neighbourhood multispeciality hospital in Sampangi Rama Nagara, Bengaluru — built around your family's everyday health, from routine checkups to round-the-clock care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-row flex-wrap gap-3"
          >
            <a
              href="https://wa.me/919187069690"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex flex-1 sm:flex-none justify-center items-center gap-2 px-5 sm:px-6 py-3.5 rounded-full bg-navy text-white text-sm sm:text-base font-medium shadow-[var(--shadow-lift)] hover:bg-teal hover:scale-[1.03] active:scale-95 transition-all duration-300 whitespace-nowrap"
            >
              Book a consultation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex flex-1 sm:flex-none justify-center items-center gap-2 px-5 sm:px-6 py-3.5 rounded-full border border-navy/20 text-navy bg-white/60 text-sm sm:text-base hover:bg-white hover:border-teal hover:text-teal hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            >
              Explore services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-navy/70"
          >
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-teal" /> 091870 69690</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-teal" /> 12+ specialties under one roof</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-[color-mix(in_oklab,var(--teal)_18%,transparent)] rounded-[3rem] blur-2xl" aria-hidden />
          <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-lift)] border border-white">
            <img src={hero} alt="Mamta Hospital reception" width={1600} height={1100} className="w-full h-[460px] lg:h-[560px] object-cover" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-[var(--shadow-soft)] border border-border max-w-[230px]"
          >
            <div className="text-3xl font-display text-teal" style={{ fontFamily: "var(--font-display)" }}>24/7</div>
            <div className="text-xs text-muted-foreground mt-1">Emergency & pharmacy support for the neighbourhood</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}