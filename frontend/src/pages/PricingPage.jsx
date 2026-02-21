import Pilot from '../components/Pilot';
import PricingFeatures from '../components/PricingFeatures';
import PricingCTA from '../components/PricingCTA';
import Pricing3DBackground from '../components/Pricing3DBackground';

const PricingPage = () => {
    return (
        <div className="pt-8 relative min-h-screen">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Pricing3DBackground />
            </div>

            <div className="relative z-10">
                <Pilot />
                <PricingFeatures />
                <PricingCTA />
            </div>
        </div>
    );
};

export default PricingPage;
