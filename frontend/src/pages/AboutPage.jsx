import About from '../components/About';
import Timeline from '../components/Timeline';
import Leadership from '../components/Leadership';

const AboutPage = () => {
    return (
        <div className="pt-16 lg:pt-0">
            <About />
            <Timeline />
            <Leadership />
        </div>
    );
};

export default AboutPage;
