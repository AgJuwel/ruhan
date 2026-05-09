import CustomCursor from './components/CustomCursor';
import DynamicBackground from './components/DynamicBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <DynamicBackground />
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <CaseStudies />
        <Process />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
