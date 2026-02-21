import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedSVGLines = () => {
    const svgRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: svgRef,
        offset: ["0 1", "0.8 0.5"]
    });

    // Draw the path as the user scrolls down into the pricing section
    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

    return (
        <motion.div ref={svgRef} style={{ opacity }} className="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden">
            <svg
                className="w-full h-full"
                viewBox="0 0 1440 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                {/* Complex Circuit-like Path weaving through cards */}
                <motion.path
                    d="M-100 150 L300 150 L350 200 L500 200 L550 450 L800 450 L850 300 L1100 300 L1150 500 L1500 500"
                    stroke="#B6FF33"
                    strokeWidth="2"
                    strokeOpacity="0.2"
                    style={{ pathLength }}
                />

                {/* Secondary Branch Path */}
                <motion.path
                    d="M100 600 L400 600 L450 400 L600 400 L650 650 L1000 650 L1050 200 L1500 200"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeOpacity="0.1"
                    strokeDasharray="4 4"
                    style={{ pathLength }}
                />

                {/* Glowing Nodes at vertices */}
                <circle cx="350" cy="200" r="4" fill="#B6FF33" opacity="0.4" />
                <circle cx="550" cy="450" r="4" fill="#B6FF33" opacity="0.4" />
                <circle cx="850" cy="300" r="4" fill="#B6FF33" opacity="0.4" />
                <circle cx="1150" cy="500" r="4" fill="#B6FF33" opacity="0.4" />
            </svg>
        </motion.div>
    );
};

const Pilot = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const res = await fetch('http://localhost:5001/api/pricing');
                const data = await res.json();
                setPlans(data);
            } catch (error) {
                console.error("Error fetching pricing plans:", error);
            }
        };
        fetchPlans();
    }, []);

    return (
        <section id="pilot" className="pt-16 pb-32 bg-[#050505] relative border-t border-white/5 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-green/5 blur-[150px] rounded-[100%] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* Interactive SVG Lines Layer */}
                <AnimatedSVGLines />

                {/* Header */}
                <div className="mb-20 text-center max-w-3xl mx-auto relative z-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-green font-bold tracking-wider uppercase text-[11px] mb-4 block"
                    >
                        OUR TIERS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-[1.1] mb-6"
                    >
                        Transparent <span className="text-brand-green drop-shadow-[0_0_20px_rgba(182,255,51,0.2)]">Pricing Model</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#888] text-[18px] leading-relaxed"
                    >
                        We understand trust is earned. Simple models to validate and scale your product without hidden retainer fees.
                    </motion.p>
                </div>

                {/* Modern Card Grid View */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-20 items-stretch">
                    {plans.map((plan, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className={`h-full p-8 md:p-10 rounded-[2rem] border flex flex-col transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_20px_80px_-20px_rgba(182,255,51,0.15)] relative overflow-hidden ${plan.highlight
                                ? 'bg-[#111]/80 backdrop-blur-xl border-brand-green/40 hover:border-brand-green md:-translate-y-4 md:hover:-translate-y-6 z-10'
                                : 'bg-[#111]/50 backdrop-blur-md border-white/5 hover:border-white/20 hover:bg-[#151515]/80 z-0'
                                }`}
                        >
                            {/* Animated Background Gradients & Lines */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 via-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"></div>

                            {plan.highlight && (
                                <>
                                    <div className="absolute top-0 inset-x-0 h-[3px] bg-brand-green shadow-[0_0_20px_#b6ff33]"></div>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                                </>
                            )}

                            <div className="mb-8 relative z-10 flex flex-col items-start gap-4">
                                {plan.highlight ? (
                                    <span className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-[10px] font-bold uppercase tracking-widest rounded-full ring-1 ring-brand-green/30">
                                        Recommended
                                    </span>
                                ) : (
                                    <span className="inline-block px-4 py-1.5 bg-white/5 text-[#888] text-[10px] font-bold uppercase tracking-widest rounded-full ring-1 ring-white/10 group-hover:bg-white/10 transition-colors">
                                        Standard Tier
                                    </span>
                                )}
                                <h3 className="text-3xl font-display font-black text-white tracking-tight group-hover:text-brand-green transition-colors">{plan.name || plan.service}</h3>
                            </div>

                            <div className="flex flex-col gap-1 mb-8 relative z-10 border-b border-white/10 pb-8 group-hover:border-brand-green/20 transition-colors">
                                <span className={plan.highlight ? "text-brand-green font-black text-5xl tracking-tighter" : "text-white font-black text-5xl tracking-tighter"}>
                                    {plan.price || plan.investment}
                                </span>
                                <span className="text-[#888] font-medium text-[14px] uppercase tracking-wider">/ {plan.timeline}</span>
                            </div>

                            <div className="text-[#aaa] text-[15px] leading-relaxed mb-10 flex-grow relative z-10 flex flex-col gap-3">
                                {plan.promise.split('. ').map((sentence, idx) => {
                                    if (!sentence.trim()) return null;
                                    return (
                                        <div key={idx} className="flex flex-col group/item pb-2">
                                            <p className="group-hover/item:text-white transition-colors">
                                                {sentence.trim() + (sentence.endsWith('.') ? '' : '.')}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>

                            <Link
                                to="/contact"
                                className={`w-full flex justify-center items-center gap-3 px-6 py-4 rounded-xl text-[15px] font-bold transition-all mt-auto relative z-10 ${plan.highlight
                                    ? 'bg-brand-green text-[#050505] hover:brightness-110 shadow-[0_0_20px_rgba(182,255,51,0.2)] hover:shadow-[0_0_30px_rgba(182,255,51,0.4)] tracking-wide hover:scale-[1.03]'
                                    : 'bg-[#1a1a1a] border border-[#333] text-white hover:bg-white/10 hover:border-[#555] group-hover:bg-brand-green/10 group-hover:text-brand-green group-hover:border-brand-green/30'
                                    }`}
                            >
                                {plan.action} <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pilot;
