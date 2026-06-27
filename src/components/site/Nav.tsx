import { motion } from "framer-motion";
import logo from "@/assets/logo-mark.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#doctor", label: "Dr. Mamta" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[color-mix(in_oklab,var(--offwhite)_80%,transparent)] border-b border-border/60"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <img src={logo} alt="Mamta Hospital" width={56} height={33} className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" />
          <span className="font-display text-lg text-navy" style={{ fontFamily: "var(--font-display)" }}>
            Mamta <span className="text-teal">Hospital</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-navy/80 hover:text-teal transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-teal after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+919187069690"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-teal text-white text-sm font-medium shadow-[var(--shadow-soft)] hover:bg-teal-deep hover:scale-[1.03] active:scale-95 transition-all duration-300"
        >
          Call Now
        </a>
      </div>
    </motion.header>
  );
}