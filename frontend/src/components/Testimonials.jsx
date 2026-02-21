import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        quote: "Our online presence has transformed completely. We are seeing more inquiries and better client engagement with the new site.",
        name: "Lalsingh Rajput",
        role: "Director, Future Realty Space",
        initial: "L"
    },
    {
        quote: "The team delivered an exceptional product that exceeded our expectations. The attention to detail and performance is unmatched.",
        name: "Sarah Jenkins",
        role: "Founder, TechNova",
        initial: "S"
    },
    {
        quote: "Scaling our operations was seamless. The custom software solution saved us hundreds of manual hours each month.",
        name: "Michael Chen",
        role: "COO, LogisticsPro",
        initial: "M"
    },
    {
        quote: "A truly professional experience from start to finish. They understand not just code, but how modern startups actually work.",
        name: "Priya Sharma",
        role: "CEO, GrowthHackers",
        initial: "P"
    },
    {
        quote: "We've seen a 3x increase in conversion rates since the redesign. The ROI on this project has been absolutely incredible.",
        name: "David Miller",
        role: "VP Marketing, E-Shop Plus",
        initial: "D"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance the testimonials every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="py-32 bg-[#09090b] relative border-t border-white/5 overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                {/* Header */}
                <div className="mb-16">
                    <span className="text-[#B6FF33] font-bold tracking-[0.2em] uppercase text-[11px] mb-6 block">
                        CLIENT SUCCESS STORIES
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-display font-black text-white tracking-tight">
                        Trusted by <span className="text-[#B6FF33]">Growing Companies</span>
                    </h2>
                </div>

                {/* Testimonial Content */}
                <div className="flex flex-col items-center min-h-[400px]">
                    {/* Big Quote Icon */}
                    <div className="mb-8">
                        <Quote size={48} fill="white" className="text-white transform rotate-180 opacity-90" />
                    </div>

                    <div className="relative w-full flex-grow">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center absolute inset-0"
                            >
                                {/* Quote Text */}
                                <p className="text-[24px] md:text-[32px] leading-[1.4] text-white/90 font-light italic mb-12 max-w-3xl text-balance">
                                    "{testimonials[currentIndex].quote}"
                                </p>

                                {/* Stars */}
                                <div className="flex items-center gap-1.5 mb-8">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} size={20} className="text-[#FBBF24]" fill="#FBBF24" />
                                    ))}
                                </div>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center bg-[#111]">
                                        <span className="text-[#B6FF33] font-bold text-lg">
                                            {testimonials[currentIndex].initial}
                                        </span>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-white font-bold text-[17px]">
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <p className="text-[#666] text-sm">
                                            {testimonials[currentIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex items-center justify-center gap-3 mt-12 relative z-20">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`transition-all duration-300 rounded-full ${currentIndex === index
                                    ? 'w-8 h-2.5 bg-[#B6FF33]'
                                    : 'w-2.5 h-2.5 bg-[#333] hover:bg-[#555]'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
