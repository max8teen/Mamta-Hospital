import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Doctor } from "@/components/site/Doctor";
import { MapSection } from "@/components/site/MapSection";
import { Footer } from "@/components/site/Footer";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Doctor />
        <MapSection />
      </main>
      <Footer />
      <motion.a
        href="https://wa.me/919187069690"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center animate-pulse-ring"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </div>
  );
}
