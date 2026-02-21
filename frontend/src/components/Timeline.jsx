import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
    {
        year: "2018",
        title: "The Genesis",
        description: "Founded in a small garage by two engineers frustrated with the standard quality of agency deliverables. Our first product hit 1M users in 6 months."
    },
    {
        year: "2020",
        title: "Enterprise Shift",
        description: "Scaled our engineering team to 50+ members. Landed our first Fortune 500 client and shipped a global logistics platform that reduced their overhead by 20%."
    },
    {
        year: "2022",
        title: "Global Expansion",
        description: "Opened our secondary headquarters. Launched an internal R&D division dedicated strictly to AI, LLMs, and high-performance WebGL architectures."
    },
    {
        year: "2024",
        title: "Industry Leaders",
        description: "Recognized as a top-10 specialized software firm. We now routinely partner with unicorns and established enterprises to build the unbuildable."
    }
];

const TimelineCard = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`w-full flex justify-${isEven ? 'start' : 'end'} items-center mb-16 md:mb-24 relative group`}
        >
            {/* Perfectly Centered Node Connector (Desktop) */}
            <div className={`hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#050505] border-[3px] border-brand-green group-hover:scale-150 group-hover:shadow-[0_0_20px_#B6FF33] transition-all duration-300 z-20`}></div>

            <div className={`w-full md:w-[45%] p-8 md:p-12 bg-[#111]/80 backdrop-blur-md border border-white/5 rounded-3xl hover:border-brand-green/30 transition-colors duration-500 relative z-10 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>

                <span className="text-brand-green font-display font-black text-5xl lg:text-6xl mb-4 block drop-shadow-[0_0_15px_rgba(182,255,51,0.2)]">
                    {item.year}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-[#888] text-[16px] lg:text-[18px] leading-relaxed relative z-10">
                    {item.description}
                </p>

                {/* Ambient Internal Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-brand-green/10 transition-colors duration-500"></div>
            </div>

        </motion.div>
    );
};

const Timeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Draw the central line down as you scroll
    const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
            {/* Abstract Glow Background */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[800px] bg-brand-green/5 blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">

                <div className="text-center mb-24 relative z-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-[11px] font-bold uppercase tracking-widest rounded-full mb-6 border border-brand-green/20"
                    >
                        OUR HISTORY
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display font-black text-white tracking-tight leading-tight"
                    >
                        The <span className="text-brand-green drop-shadow-[0_0_20px_rgba(182,255,51,0.2)]">Trajectory</span>
                    </motion.h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Vertical Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 pointer-events-none"></div>

                    {/* Animated Drawing Line */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-brand-green -translate-x-1/2 blur-[1px] pointer-events-none shadow-[0_0_15px_#B6FF33]"
                    ></motion.div>

                    <div className="relative z-10 pt-10 pb-10">
                        {milestones.map((item, index) => (
                            <TimelineCard key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Timeline;
