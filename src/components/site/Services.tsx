import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Stethoscope, Smile, HeartPulse, Activity, Ear, Bone, Baby, Sparkles, Syringe, Scissors, FlaskConical, Pill, ArrowRight,
} from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  { icon: Stethoscope, name: "General Medicine", desc: "Everyday adult care, fevers, infections and long-term conditions." },
  { icon: Smile, name: "Dental Care", desc: "Cleanings, restorations and cosmetic dentistry by experienced specialists." },
  { icon: HeartPulse, name: "Cardiac Care", desc: "ECG, screenings and consults for a healthy, watched-over heart." },
  { icon: Activity, name: "Physiotherapy", desc: "Recovery plans for injuries, post-surgery and chronic pain." },
  { icon: Ear, name: "ENT", desc: "Ear, nose and throat diagnostics with gentle, modern treatment." },
  { icon: Bone, name: "Orthopedics", desc: "Joints, bones and sports injuries — diagnosed and managed end to end." },
  { icon: Baby, name: "Gynecology & Obstetrics", desc: "Women's health, pregnancy care and routine wellness visits." },
  { icon: Sparkles, name: "Dermatology & Cosmetology", desc: "Skin, hair and aesthetic procedures tailored to you." },
  { icon: Syringe, name: "Pediatrics & Vaccinations", desc: "From newborn checks to the full immunization schedule." },
  { icon: Scissors, name: "Minor OT Procedures", desc: "Day-care surgeries and minor procedures in a safe theatre." },
  { icon: FlaskConical, name: "Diagnostics", desc: "On-site lab and imaging — fast, reliable, doctor-reviewed." },
  { icon: Pill, name: "Pharmacy", desc: "In-house pharmacy stocked for your prescription, on the spot." },
];

export function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollStart = useRef(0);

  // triple the list so there's room to scroll/drag both directions before we need to reset
  const loop = [...services, ...services, ...services];

  // Auto-scroll loop, paused on hover/drag. Uses real scrollLeft so manual drag
  // and auto-scroll share the same position (no fighting between CSS animation and touch).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // start in the middle copy so the user can drag left or right immediately
    track.scrollLeft = track.scrollWidth / 3;

    let frame: number;
    const speed = 0.5; // px per frame, tweak for pace

    const step = () => {
      if (!paused && !isDragging.current) {
        track.scrollLeft += speed;
        const third = track.scrollWidth / 3;
        // wrap seamlessly once we've drifted a full set in either direction
        if (track.scrollLeft >= third * 2) track.scrollLeft -= third;
        if (track.scrollLeft <= 0) track.scrollLeft += third;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    setPaused(true);
    dragStartX.current = e.clientX;
    dragScrollStart.current = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const track = trackRef.current;
    if (!track) return;
    const dx = e.clientX - dragStartX.current;
    track.scrollLeft = dragScrollStart.current - dx;
  };

  const endDrag = () => {
    isDragging.current = false;
    // small delay before auto-scroll resumes so it doesn't feel like it's yanked from your hand
    setTimeout(() => setPaused(false), 600);
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-gradient-to-b from-offwhite to-sage/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.18em] text-teal font-medium mb-3">What we treat</div>
            <h2 className="text-4xl lg:text-5xl text-navy text-balance" style={{ textWrap: "balance" }}>
              Twelve specialties, one calm hospital.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Drag, swipe, or just watch it drift — every speciality we offer, on one ribbon.
            </p>
          </div>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        className="relative overflow-x-scroll marquee-mask scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        style={{ scrollBehavior: "auto" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { if (!isDragging.current) setPaused(false); }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div className="flex gap-5 w-max px-6 lg:px-10">
          {loop.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={`${s.name}-${i}`}
                className="group relative shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] bg-white rounded-3xl p-7 border border-border hover:border-teal transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)] overflow-hidden"
              >
                <div aria-hidden className="absolute inset-x-0 -bottom-24 h-40 bg-[color-mix(in_oklab,var(--teal)_10%,transparent)] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-sage/70 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white group-hover:rotate-[-6deg] transition-all duration-500">
                    <Icon className="w-6 h-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 text-xl text-navy">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <div className="overflow-hidden">
                      <div className="pt-4 mt-4 border-t border-border flex items-center justify-between text-sm">
                        <span className="text-teal font-medium">Walk-in & appointments</span>
                        <ArrowRight className="w-4 h-4 text-teal translate-x-[-4px] group-hover:translate-x-0 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}