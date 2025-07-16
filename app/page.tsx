import Header from '../components/Header';
import Hero from '../components/Hero';
// import TrustedBy from '../components/TrustedBy';
// import Disadvantages from '../components/Disadvantages';
// import Advantages from '../components/Advantages';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
// import Steps from '../components/Steps';
// import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import FAQs from '../components/FAQs';
// import ContactForm from '../components/ContactForm';
import Projects from '../components/Projects';
import GetInTouch from '../components/GetInTouch';
import GradientBackground from '../components/GradientBackground';

export default function Home() {
  return (
    <main className="bg-neutral-900 min-h-screen text-white">
      <Header />
      <Hero />
      {/* <TrustedBy /> */}
       {/* <AboutUs /> */}
      <GradientBackground>
        <Services />
        <Projects />
        <Testimonials />
        <FAQs />
        <GetInTouch />
        <Footer />
      </GradientBackground>
      {/* <Disadvantages />
      <Advantages />
      <Steps />
      <ContactForm /> */}
      
      {/* <FooterOld /> */}
    </main>
  );
}