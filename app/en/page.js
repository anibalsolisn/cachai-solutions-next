import HeroSliderEN from '../components/HeroSliderEN';
import AboutStripEN from '../components/AboutStripEN';
import CasosEN from '../components/CasosEN';
import PorQueNosotrosEN from '../components/PorQueNosotrosEN';
import FAQEN from '../components/FAQEN';
import ContactoEN from '../components/ContactoEN';
import FooterEN from '../components/FooterEN';

export const metadata = {
  title: 'Cachai Solutions — We scale ecommerce brands. For real.',
  description: 'Shopify development and growth marketing for brands ready to scale.',
};

export default function HomeEN() {
  return (
    <main>
      <HeroSliderEN />
      <AboutStripEN />
      <CasosEN />
      <PorQueNosotrosEN />
      <FAQEN />
      <ContactoEN />
      <FooterEN />
    </main>
  );
}