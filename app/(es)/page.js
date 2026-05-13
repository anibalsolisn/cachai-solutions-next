import HeroSlider from '../components/HeroSlider';
import AboutStrip from '../components/AboutStrip';
import Casos from '../components/Casos';
import PorQueNosotros from '../components/PorQueNosotros';
import FAQ from '../components/FAQ';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <AboutStrip />
      <Casos />
      <PorQueNosotros />
      <FAQ />
      <Contacto />
      <Footer />
    </main>
  );
}