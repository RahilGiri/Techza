import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingCTA = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-[#050505] relative z-10 overflow-hidden">
            {/* Massive Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-brand-green/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-20 text-center perspective-[2000px]">
                <motion.div
                    style={{ scale, opacity, y, rotateX: useTransform(scrollYProgress, [0, 1], [20, 0]) }}
                    className="p-12 md:p-24 rounded-[3rem] border border-white/10 bg-[#111]/80 backdrop-blur-2xl relative overflow-hidden transform-gpu flex flex-col items-center justify-center shadow-[0_30px_100px_-20px_rgba(182,255,51,0.1)]"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-green/10 to-transparent pointer-events-none"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-20 h-20 bg-brand-green/20 rounded-full blur-xl absolute top-10 right-20"
                    ></motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight mb-8 relative z-10">
                        Need Something <span className="text-brand-green drop-shadow-[0_0_20px_rgba(182,255,51,0.3)]">Custom?</span>
                    </h2>
                    <p className="text-[#aaa] text-[18px] md:text-[22px] leading-relaxed max-w-2xl mx-auto mb-12 relative z-10">
                        For enterprise organizations requiring massive scale, legacy system integrations, or dedicated offshore teams, we build custom engagement models.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-flex justify-center items-center gap-3 px-10 py-5 bg-brand-green text-[#050505] rounded-xl text-[18px] font-bold transition-all hover:scale-105 hover:brightness-110 shadow-[0_0_30px_rgba(182,255,51,0.3)] hover:shadow-[0_0_50px_rgba(182,255,51,0.6)] group relative z-10"
                    >
                        Talk to an Architect <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform duration-300" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingCTA;
