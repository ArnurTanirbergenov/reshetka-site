import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Benefits } from './components/Benefits';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { Gift } from './components/Gift';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <Gallery />
      <Pricing />
      <Gift />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
