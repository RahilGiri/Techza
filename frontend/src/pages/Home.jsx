import Hero from '../components/Hero';
import StatsMarquee from '../components/StatsMarquee';
import TechStack from '../components/TechStack';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <div className="pt-16 lg:pt-0">
            <Hero />
            <StatsMarquee />
            <TechStack />
            <WhyChooseUs />
            <Services />
            <Process />
            <Testimonials />
            <FAQ />
        </div>
    );
};

export default Home;
