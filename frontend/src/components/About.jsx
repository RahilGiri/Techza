import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#050505] relative border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#B6FF33] tracking-[0.2em] font-bold uppercase text-[11px] mb-4 block">
                        ABOUT TECHZA
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-display font-black text-white tracking-tight leading-[1.1]">
                        Engineering-Driven. Quality-<br />Focused. Reliable.
                    </h2>
                </div>

                {/* Main Content Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#0f0f0f] border border-[#222] rounded-2xl p-8 md:p-12 mb-8"
                >
                    <Quote size={40} className="text-white transform rotate-180 mb-8 opacity-80" fill="white" />

                    <div className="space-y-6 text-[#888] text-[17px] leading-relaxed mb-12">
                        <p>
                            Techza Technology was founded by engineers who have spent years building software across different industries — from enterprise applications to web platforms serving clients in India and internationally.
                        </p>
                        <p>
                            We've seen what works and what doesn't. Many businesses struggle with vendors who over-promise and under-deliver, or with code that becomes impossible to maintain. We started Techza to be the alternative.
                        </p>
                        <p>
                            Our approach is simple: understand your business, design the right solution, build it properly, and stand behind our work. We work selectively because quality matters more than volume.
                        </p>
                        <p className="text-white font-medium text-lg pt-2 pb-2">
                            We're not the biggest team. We're the team that delivers software you can trust.
                        </p>
                    </div>

                    <div className="border-t border-[#222] pt-8 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full border border-[#444] flex items-center justify-center bg-[#111] relative overflow-hidden group hover:border-[#B6FF33] transition-colors">
                            <span className="text-[#B6FF33] font-bold text-xl relative z-10">D</span>
                            {/* Subtle underlying glow */}
                            <div className="absolute inset-0 bg-[#B6FF33]/10 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Techza Team</h4>
                            <p className="text-[#555] text-sm">Techza Technology</p>
                        </div>
                    </div>
                </motion.div>

                {/* Three Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-8 hover:border-[#333] transition-colors"
                    >
                        <h3 className="text-white font-bold text-lg mb-3">Quality First</h3>
                        <p className="text-[#555] text-[15px] leading-relaxed">
                            Clean code. Thorough testing. Software that works reliably.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-8 hover:border-[#333] transition-colors"
                    >
                        <h3 className="text-white font-bold text-lg mb-3">Clear Communication</h3>
                        <p className="text-[#555] text-[15px] leading-relaxed">
                            Regular updates. Honest timelines. No surprises.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-8 hover:border-[#333] transition-colors"
                    >
                        <h3 className="text-white font-bold text-lg mb-3">Long-Term Partnership</h3>
                        <p className="text-[#555] text-[15px] leading-relaxed">
                            We build for maintainability, not just delivery.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
