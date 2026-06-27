import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import DoctorSection from './components/DoctorSection';
import FindUsSection from './components/FindUsSection';
import Footer from './components/Footer';
import BottomActionBar from './components/BottomActionBar';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <DoctorSection />
        <FindUsSection />
      </main>
      <Footer />
      <BottomActionBar />
    </div>
  );
}
