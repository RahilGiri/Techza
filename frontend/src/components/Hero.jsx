import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Zap } from 'lucide-react';

const Hero = () => {
    const dynamicWords = ["Web Applications", "Cloud Systems", "Custom Software", "AI Solutions", "Android Applications"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-grid-pattern">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Decorative bg elements */}
            <div className="absolute left-[10%] top-[30%] hidden xl:block opacity-[0.4] font-mono text-white text-[120px] font-thin leading-none pointer-events-none">
                <span className="opacity-80">&lt;</span><span className="opacity-30">/</span><span className="opacity-80">&gt;</span>
            </div>

            <div className="absolute right-[10%] bottom-[20%] hidden xl:block opacity-40 font-mono text-white text-7xl pointer-events-none">
                {"{ }"}
            </div>
            {/* Grid of dots on right */}
            <div className="absolute right-[8%] top-[45%] hidden xl:grid grid-cols-4 gap-3 opacity-60 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-brand-green"></div>
                ))}
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-transparent mb-10"
                >
                    <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                    <span className="text-brand-green text-[11px] font-bold tracking-[0.1em] uppercase">Engineering-First IT Partner</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1.1] tracking-tight mb-8 text-center"
                >
                    <span className="block mb-2 md:mb-4">We Build</span>
                    <span className="text-brand-green relative block h-[1.3em] w-full">
                        <AnimatePresence>
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20, x: "-50%" }}
                                animate={{ opacity: 1, y: 0, x: "-50%" }}
                                exit={{ opacity: 0, y: -20, x: "-50%" }}
                                transition={{ duration: 0.3 }}
                                className="absolute left-[50%] inline-block whitespace-nowrap"
                            >
                                {dynamicWords[index]}
                            </motion.span>
                        </AnimatePresence>
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-brand-text max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    We build high-performance software with engineering precision. From <span className="text-white font-medium">Web Apps</span> to <span className="text-white font-medium">AI Solutions</span>, we scale effective digital products that drive business growth.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 mb-10"
                >
                    <a href="#contact" className="w-full sm:w-auto bg-brand-green text-[#050505] px-8 py-3.5 rounded-md font-bold text-[15px] hover:brightness-110 transition-all flex items-center justify-center gap-2">
                        Talk to Our Experts <ArrowRight size={18} className="ml-1" />
                    </a>
                    <a href="#projects" className="w-full sm:w-auto bg-transparent border border-[#333333] text-white px-8 py-3.5 rounded-md font-medium text-[15px] hover:bg-white/5 transition-all">
                        Explore Our Work
                    </a>
                </motion.div>

                {/* Mockup Editor & Trusted Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-16 w-full max-w-3xl mx-auto"
                >
                    <div className="text-center mb-10">
                        <span className="text-[11px] font-bold text-white/30 tracking-[0.15em] uppercase">Trusted by Innovative Companies</span>
                    </div>

                    {/* Window */}
                    <div className="w-full rounded-t-xl bg-[#0F0F0F] border border-[#222] min-h-[300px] border-b-0 overflow-hidden relative shadow-2xl">
                        {/* Title Bar */}
                        <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-[#222]">
                            <div className="flex gap-2 w-12">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                            </div>
                            <div className="text-[12px] text-white/30 font-mono tracking-wide">
                                https://your-project.techza.in
                            </div>
                            <div className="w-12"></div> {/* Spacer for centering */}
                        </div>

                        {/* Floating Icon */}
                        <div className="absolute right-6 top-[72px] w-10 h-10 rounded-lg bg-[#111] border border-[#333] flex items-center justify-center text-[#F59E0B]">
                            <Zap size={20} fill="currentColor" />
                        </div>

                        {/* Code Content */}
                        <div className="p-8 text-left font-mono text-[13px] md:text-[14px] leading-loose">
                            <div className="text-white/60">
                                <span className="text-[#C678DD]">const</span> <span className="text-[#61AFEF]">app</span> <span className="text-[#56B6C2]">=</span> <span className="text-[#E5C07B]">createApp</span><span className="text-[#ABB2BF]">();</span>
                            </div>
                            <div className="text-white/60 mt-2">
                                <span className="text-[#C678DD]">await</span> <span className="text-[#61AFEF]">deploy</span><span className="text-[#ABB2BF]">(</span> <span className="text-[#98C379]">'production'</span> <span className="text-[#ABB2BF]">);</span>
                            </div>
                            <div className="text-[#98C379] mt-4 flex items-center gap-2">
                                <span>✓</span> <span>Deployed successfully!</span>
                            </div>
                            <div className="flex gap-2 mt-4 ml-1">
                                <span className="text-brand-green/80">&gt;</span><span className="w-2 h-[18px] bg-white/40 translate-y-1"></span>
                            </div>
                        </div>
                        {/* Fade out bottom */}
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
