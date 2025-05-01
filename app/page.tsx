import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Disadvantages from '../components/Disadvantages';
import Advantages from '../components/Advantages';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import Steps from '../components/Steps';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main className="bg-neutral-900 min-h-screen text-white">
      <Header />
      <div className="h-px bg-white opacity-30" />
      <Hero />
      <TrustedBy />
      <Disadvantages />
      <Advantages />
      <Testimonials />
      <Services />
      <Steps />
      <AboutUs />
      <ContactForm />
      <Footer />
    </main>
  );
}