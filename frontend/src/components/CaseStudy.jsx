import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const CaseStudy = () => {
    return (
        <section id="case-study" className="py-24 bg-brand-dark/95 relative border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="mb-16 max-w-3xl">
                    <span className="text-brand-green font-bold tracking-wider uppercase text-[11px] mb-4 block">
                        CASE STUDY
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-display font-black text-white tracking-tight leading-[1.1]">
                        Scaling Operations for a Fast-Growing <span className="text-brand-green">D2C Brand</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Challenge & Solution */}
                    <div className="space-y-12">

                        {/* The Challenge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                                    <span className="text-red-500 text-xs font-bold">1</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">The Challenge</h3>
                            </div>
                            <p className="text-[#888] text-[15px] leading-relaxed pl-10">
                                A D2C brand processing 500+ daily orders was drowning in manual workflows. Data lived in Google Sheets, Shopify, and WhatsApp. The ops team lost <strong className="text-white font-semibold">4 hours every morning</strong> just reconciling numbers.
                            </p>
                        </motion.div>

                        {/* The Solution */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                                    <span className="text-blue-500 text-xs font-bold">2</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">The Solution</h3>
                            </div>
                            <p className="text-[#888] text-[15px] leading-relaxed pl-10 mb-6">
                                We built a unified <strong className="text-white font-semibold">Operations Operating System (OOS)</strong> that serves as the single source of truth.
                            </p>

                            <ul className="space-y-3 pl-10">
                                {[
                                    "Real-time 2-way sync with Shopify & Warehouse",
                                    "Automated low-stock alerts via Slack",
                                    "One-click shipping label generation",
                                    "Reconciliation in seconds, not hours"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check size={16} className="text-brand-green flex-shrink-0 mt-0.5" />
                                        <span className="text-[#666] text-[15px]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Quote Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="pl-6 border-l-2 border-brand-green mt-12 py-1"
                        >
                            <p className="text-[#aaa] italic mb-4 text-[15px] leading-relaxed">
                                "They actually understand how startups work. We didn't have to explain why speed mattered. They just delivered."
                            </p>
                            <p className="text-white font-bold text-sm tracking-wide">
                                — Operations Lead, Series A Startup
                            </p>
                        </motion.div>

                    </div>

                    {/* Right Column: Business Impact Card */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-8 md:p-12 h-full flex flex-col justify-center relative shadow-2xl"
                        >
                            <span className="text-[#555] font-bold tracking-widest text-[10px] uppercase mb-12 block">
                                BUSINESS IMPACT
                            </span>

                            <div className="mb-16">
                                <h3 className="text-[80px] leading-none font-display font-black text-white mb-4">
                                    70%
                                </h3>
                                <p className="text-brand-green font-bold text-lg mb-2">
                                    Reduction in Processing Time
                                </p>
                                <p className="text-[#555] text-sm">
                                    From 4 hours to ~1.2 hours daily
                                </p>
                            </div>

                            <div className="flex items-center gap-12 border-t border-[#222] pt-8 mt-auto">
                                <div>
                                    <p className="text-3xl font-display font-black text-white mb-2">Zero</p>
                                    <p className="text-[#555] text-[10px] uppercase font-bold tracking-wider">MISSED ORDERS</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-display font-black text-white mb-2">2x</p>
                                    <p className="text-[#555] text-[10px] uppercase font-bold tracking-wider">FASTER SHIPMENTS</p>
                                </div>
                            </div>

                            {/* Corner Icon */}
                            <div className="absolute bottom-8 right-8 w-12 h-12 border border-[#333] rounded-lg flex items-center justify-center bg-[#111]">
                                <Zap size={20} className="text-brand-green fill-brand-green/20" />
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
