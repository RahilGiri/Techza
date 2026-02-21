import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
    return (
        <div className="w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 relative h-[500px] flex items-center group">
            {/* Connecting line */}
            <div className={`absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 -z-10 ${index === steps.length - 1 ? 'hidden' : ''}`}></div>

            <div className="w-full bg-[#0a0a0a] border border-[#222] rounded-[2rem] p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden hover:border-[#333] transition-all hover:-translate-y-2 h-full flex flex-col justify-between">
                {/* Ambient Internal Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-brand-green/10 transition-colors duration-500"></div>

                <div>
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4 relative z-10">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center shadow-[0_0_20px_rgba(182,255,51,0.2)]">
                                <span className="text-[#050505] font-black text-xl">{step.num}</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                        </div>
                        <span className="text-brand-green text-xs font-bold tracking-widest bg-brand-green/10 border border-brand-green/20 px-4 py-2 rounded-full uppercase self-start md:self-auto shrink-0">
                            {step.week}
                        </span>
                    </div>

                    <p className="text-[#888] text-[17px] leading-relaxed relative z-10">
                        {step.description}
                    </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center gap-4 relative z-10 mt-6">
                    <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                        <Check size={16} className="text-brand-green" />
                    </div>
                    <div>
                        <span className="text-[#555] text-xs font-bold uppercase tracking-widest block mb-1">KEY DELIVERABLE</span>
                        <span className="text-[#ccc] text-[15px] font-medium">{step.deliverable}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Process = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Translate the content leftwards (-75% implies sliding 3/4s of its total width off-screen)
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} id="process" className="relative h-[400vh] bg-[#050505] border-t border-white/5">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 blur-[150px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>

                <motion.div style={{ x }} className="flex gap-12 lg:gap-20 px-6 md:px-12 items-center w-max">

                    {/* Header Block takes space natively */}
                    <div className="w-[90vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0 flex flex-col justify-center max-w-xl pr-10">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-[11px] font-bold uppercase tracking-widest rounded-full mb-6 border border-brand-green/20 w-max"
                        >
                            THE ROADMAP
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight mb-8 leading-[1.1]"
                        >
                            From Chaos to <span className="text-brand-green drop-shadow-[0_0_20px_rgba(182,255,51,0.2)]">Clarity.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[#888] text-[18px] md:text-[20px] leading-relaxed max-w-md"
                        >
                            A transparent, engineering-led process designed to deliver high-quality custom software without the surprises.
                        </motion.p>
                    </div>

                    {/* Cards */}
                    {steps.map((step, index) => (
                        <ProcessCard key={index} step={step} index={index} />
                    ))}

                    {/* Empty block to pad the end of the scroll */}
                    <div className="w-[10vw] flex-shrink-0"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
