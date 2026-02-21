import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

const stats = [
    { value: 5, suffix: "+", label: "Projects Delivered", icon: "🚀" },
    { value: 100, suffix: "%", label: "Client Satisfaction", icon: "⭐" },
    { value: 3, suffix: "+", label: "Happy Clients", icon: "🤝" },
    { value: 2, suffix: " Years", label: "Industry Experience", icon: "📈" }
];

const technologies = [
    { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
];

const AnimatedCounter = ({ from, to, suffix, duration = 2.5 }) => {
    const nodeRef = useRef(null);
    const inView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView && nodeRef.current) {
            const controls = animate(from, to, {
                duration: duration,
                ease: "easeOut",
                onUpdate(value) {
                    nodeRef.current.textContent = Math.round(value) + suffix;
                }
            });
            return () => controls.stop();
        }
    }, [from, to, suffix, duration, inView]);

    return <span ref={nodeRef}>{from}{suffix}</span>;
};

const StatsMarquee = () => {
    // Duplicate for seamless loop
    const loopedTech = [...technologies, ...technologies, ...technologies];

    return (
        <section className="bg-brand-dark relative z-10 pt-16 pb-20 border-t border-white/5 overflow-hidden">
            {/* Stats Grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-4xl mb-4">{stat.icon}</span>
                            <h3 className="text-5xl md:text-[56px] font-display font-black text-white mb-2 tracking-tight leading-none">
                                <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                            </h3>
                            <p className="text-[#888888] text-[15px] font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Marquee Section */}
            <div className="w-full relative">
                <div className="text-center mb-12">
                    <span className="text-[11px] font-bold text-[#444444] tracking-[0.2em] uppercase">POWERED BY MODERN TECH</span>
                </div>

                {/* Gradient Masks for fading edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10"></div>

                <div className="w-full overflow-hidden flex whitespace-nowrap">
                    <motion.div
                        className="flex gap-16 items-center w-max pl-16 py-4"
                        animate={{ x: "-33.33%" }}
                        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                    >
                        {loopedTech.map((tech, index) => (
                            <div key={index} className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-all duration-300 cursor-default">
                                <img src={tech.logo} alt={tech.name} className="h-8 w-auto object-contain" />
                                <span className="text-[#a3a3a3] font-bold tracking-wide text-[16px]">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            {/* Subtle bottom curve/gradient to match original */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#0a0a0a]"></div>
        </section>
    );
};

export default StatsMarquee;
