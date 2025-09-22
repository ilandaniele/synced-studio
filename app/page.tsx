import Header from '../components/Header'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'
import Footer from '../components/Footer'
import FAQs from '../components/FAQs'
import Projects from '../components/Projects'
import GetInTouch from '../components/GetInTouch'

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <FAQs />
      <GetInTouch />
      <Footer />
    </main>
  )
}