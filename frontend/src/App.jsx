import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsMarquee from './components/StatsMarquee';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import FAQ from './components/FAQ';
import Pilot from './components/Pilot';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-brand-dark">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <StatsMarquee />
          <Services />
          <Process />
          <About />
          <Testimonials />
          <Projects />
          <CaseStudy />
          <Pilot />
          <FAQ />
          <Contact />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
