import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const FeatureCard = ({ feature, index }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
            className="group relative p-[1px] rounded-[2rem] overflow-hidden bg-white/5 hover:bg-white/10 transition-colors"
        >
            {/* Spotlight that follows mouse */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(182,255,51,0.15), transparent 40%)`
                }}
            />
            {/* Card Content Background */}
            <div className="relative h-full bg-[#0a0a0a] rounded-[calc(2rem-1px)] p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-3xl rounded-full pointer-events-none group-hover:bg-brand-green/10 transition-colors duration-500"></div>

                <CheckCircle2 className="text-brand-green mb-6 w-8 h-8 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500" />
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors duration-300">{feature.title}</h3>
                <p className="text-[#888] leading-relaxed text-[15px] group-hover:text-[#aaa] transition-colors duration-300">{feature.description}</p>
            </div>
        </motion.div>
    );
};

const PricingFeatures = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const features = [
        {
            title: "Dedicated Project Manager",
            description: "A single point of contact ensuring your project stays on track, on time, and on budget."
        },
        {
            title: "Weekly Sprint Demos",
            description: "Transparent progress reviews every week so you always know what's being built."
        },
        {
            title: "Quality Assurance Testing",
            description: "Rigorous manual and automated testing pipelines to guarantee a bug-free launch."
        },
        {
            title: "Post-Launch Support",
            description: "30 days of complimentary technical support and bug fixes after your product goes live."
        },
        {
            title: "Scalable Architecture",
            description: "Built on modern, cloud-native frameworks designed to scale from day one."
        },
        {
            title: "Full Source Code Ownership",
            description: "You own 100% of the intellectual property and source code upon project completion."
        }
    ];

    return (
        <section ref={containerRef} className="py-32 relative z-10 border-t border-white/5 overflow-hidden">
            {/* Subtly moving background gradient */}
            <motion.div style={{ y }} className="absolute top-0 left-0 w-full h-[200%] bg-gradient-to-b from-transparent via-brand-green/5 to-transparent pointer-events-none opacity-50"></motion.div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
                <div className="text-center mb-20 lg:mb-24">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-[11px] font-bold uppercase tracking-widest rounded-full mb-6 border border-brand-green/20 shadow-[0_0_15px_rgba(182,255,51,0.1)]"
                    >
                        THE TECHZA STANDARD
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight mb-6"
                    >
                        Included in <span className="text-brand-green drop-shadow-[0_0_20px_rgba(182,255,51,0.2)]">Every Plan</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#888] text-[18px] md:text-[20px] leading-relaxed max-w-2xl mx-auto"
                    >
                        No matter which tier you choose, you receive our enterprise-grade development standards.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, i) => (
                        <FeatureCard key={i} feature={feature} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingFeatures;
