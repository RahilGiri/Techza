import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const steps = [
    {
        num: "01",
        title: "Discovery & Strategy",
        week: "Week 0",
        description: "We dig deep into your operations. No generic questionnaires. We interview your team, map your workflows, and identify exactly where custom software will generate ROI.",
        deliverable: "Detailed Scope of Work & Fixed-Price Proposal"
    },
    {
        num: "02",
        title: "Architecture & Design",
        week: "Week 1",
        description: "Before a single line of code is written, we blueprint the entire system. You'll see clickable prototypes and database schemas, ensuring we're building exactly what you need.",
        deliverable: "Interactive Prototypes & Technical Spec"
    },
    {
        num: "03",
        title: "Agile Development",
        week: "Weeks 2-6",
        description: "We build in rapid 2-week sprints. You get access to a staging environment to test features as they're built. No black boxes. Real progress you can click.",
        deliverable: "Production-Ready Software delivered in sprints"
    },
    {
        num: "04",
        title: "Deployment & Handoff",
        week: "Week 7+",
        description: "We handle the launch, configure your servers, and train your team. Post-launch, we provide 30 days of bug-fixing support and hand over clean, documented code.",
        deliverable: "Full IP Ownership & zero vendor lock-in"
    }
];

const ProcessCard = ({ step, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: false, margin: "-20% 0px -20% 0px" });

    return (
        <div ref={cardRef} className="relative pl-10 md:pl-0 w-full mb-16 md:mb-24 last:mb-0 group">

            {/* Connecting Horizontal Line to the vertical track (Desktop only) */}
            <div className={`hidden md:block absolute top-[60px] w-12 h-[2px] transition-colors duration-500 ${index % 2 === 0 ? 'right-1/2' : 'left-1/2'} ${isInView ? 'bg-brand-green' : 'bg-[#222]'}`}></div>

            <div className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>

                <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full md:w-[45%] bg-[#0a0a0a] border ${isInView ? 'border-brand-green/50 shadow-[0_0_30px_rgba(182,255,51,0.1)]' : 'border-[#222]'} rounded-[2rem] p-8 md:p-10 transition-all duration-500 relative overflow-hidden flex flex-col`}
                >
                    {/* Active State Background Glow */}
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}></div>

                    <div>
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4 relative z-10">
                            <div className="flex items-center gap-5">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 ${isInView ? 'bg-brand-green shadow-[0_0_20px_rgba(182,255,51,0.3)]' : 'bg-[#111] text-[#555]'}`}>
                                    <span className={`font-black text-lg ${isInView ? 'text-[#050505]' : 'text-[#888]'}`}>{step.num}</span>
                                </div>
                                <h3 className={`text-2xl lg:text-3xl font-bold transition-colors duration-500 ${isInView ? 'text-white' : 'text-[#aaa]'}`}>{step.title}</h3>
                            </div>
                            <span className={`text-xs font-bold tracking-widest px-4 py-2 rounded-full uppercase self-start shrink-0 transition-colors duration-500 ${isInView ? 'bg-brand-green/10 border border-brand-green/20 text-brand-green' : 'bg-white/5 border border-white/10 text-[#666]'}`}>
                                {step.week}
                            </span>
                        </div>

                        <p className={`text-[16px] leading-relaxed relative z-10 transition-colors duration-500 ${isInView ? 'text-[#ccc]' : 'text-[#666]'}`}>
                            {step.description}
                        </p>
                    </div>

                    <div className={`pt-6 border-t flex items-center gap-4 relative z-10 mt-6 transition-colors duration-500 ${isInView ? 'border-white/10' : 'border-white/5'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-500 ${isInView ? 'bg-brand-green/10' : 'bg-[#111]'}`}>
                            <Check size={16} className={`transition-colors duration-500 ${isInView ? 'text-brand-green' : 'text-[#444]'}`} />
                        </div>
                        <div>
                            <span className="text-[#555] text-xs font-bold uppercase tracking-widest block mb-1">KEY DELIVERABLE</span>
                            <span className={`text-[14px] font-medium transition-colors duration-500 ${isInView ? 'text-[#eee]' : 'text-[#777]'}`}>{step.deliverable}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Node Dot (Desktop Central, Mobile Left) */}
                <div className={`absolute left-0 md:left-1/2 w-8 h-8 -translate-x-1/2 flex items-center justify-center top-[60px] md:top-[60px] z-20`}>
                    <div className={`w-full h-full rounded-full transition-all duration-500 flex items-center justify-center ${isInView ? 'bg-[#050505] border-[3px] border-brand-green shadow-[0_0_20px_rgba(182,255,51,0.5)] scale-110' : 'bg-[#151515] border-[3px] border-[#333] scale-100'}`}>
                        <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${isInView ? 'bg-brand-green' : 'bg-transparent'}`}></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const Process = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end 80%"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="process" className="py-24 md:py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
            {/* Ambient Backgrounds */}
            <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-brand-green/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-[11px] font-bold uppercase tracking-widest rounded-full mb-6 border border-brand-green/20"
                    >
                        THE ROADMAP
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white tracking-tight mb-8 leading-[1.1]"
                    >
                        From Chaos to <span className="text-brand-green drop-shadow-[0_0_20px_rgba(182,255,51,0.2)]">Clarity.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#888] text-[18px] md:text-[20px] leading-relaxed"
                    >
                        A transparent, engineering-led process designed to deliver high-quality custom software without the surprises.
                    </motion.p>
                </div>

                {/* Timeline Container */}
                <div ref={containerRef} className="relative w-full max-w-5xl mx-auto">

                    {/* Vertical Background Track */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#222] -translate-x-1/2 md:-translate-x-1/2 rounded-full overflow-hidden">
                        {/* Animated Fill Track */}
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute top-0 left-0 right-0 w-full bg-brand-green shadow-[0_0_15px_#b6ff33] origin-top h-full"
                        ></motion.div>
                    </div>

                    {/* Timeline Nodes */}
                    <div className="relative z-10 py-10">
                        {steps.map((step, index) => (
                            <ProcessCard key={index} step={step} index={index} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Process;
