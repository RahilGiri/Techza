import { motion } from 'framer-motion';
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

const Process = () => {
    return (
        <section id="process" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Giant Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
                <h2 className="text-[15vw] font-display font-black text-transparent opacity-5 tracking-tighter" style={{ WebkitTextStroke: '1px #ffffff' }}>
                    PROCESS
                </h2>
            </div>

            <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-24">
                    <span className="text-brand-green font-bold tracking-wider uppercase text-[11px] mb-4 block">THE ROADMAP</span>
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-display font-black text-white tracking-tight mb-6">
                        From Chaos to <span className="text-brand-green">Clarity</span>
                    </h2>
                    <p className="text-[#888888] text-[17px] font-medium max-w-2xl mx-auto leading-relaxed text-balance">
                        A transparent, engineering-led process designed to deliver high-quality software without the surprises.
                    </p>
                </div>

                <div className="relative pl-8 md:pl-0">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-0 md:left-[4rem] top-8 bottom-8 w-px bg-[#222222]"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative flex flex-col md:flex-row md:items-start gap-8 md:gap-12"
                            >
                                {/* Number Circle (Green) */}
                                <div className="absolute -left-8 md:static md:w-[8rem] flex-shrink-0 flex justify-center mt-6">
                                    <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(182,255,51,0.2)]">
                                        <span className="text-[#050505] font-black text-sm">{step.num}</span>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-grow bg-[#0f0f0f] border border-[#222222] rounded-xl p-8 md:p-10 hover:border-[#333333] transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                                        <span className="text-brand-green text-[11px] font-mono border border-[#333333] bg-[#1a1a1a] px-3 py-1 rounded-[4px] uppercase tracking-wider self-start md:self-auto">
                                            {step.week}
                                        </span>
                                    </div>
                                    <p className="text-[#888888] text-[15px] leading-relaxed mb-8">
                                        {step.description}
                                    </p>

                                    <div className="pt-6 border-t border-[#222222] flex items-center gap-3">
                                        <Check size={16} className="text-brand-green flex-shrink-0" />
                                        <span className="text-[#666666] text-sm font-medium">{step.deliverable}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
