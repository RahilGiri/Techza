import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShieldCheck, Zap, Code2, Users } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const reasons = [
    {
        icon: <Zap className="w-8 h-8 text-brand-green relative z-20" />,
        title: "Lightning Fast Delivery",
        description: "We utilize agile methodologies and modern frameworks to cut development time by 40% without compromising quality."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-brand-green relative z-20" />,
        title: "Bulletproof Security",
        description: "Enterprise-grade security protocols are baked into our foundation. Your data and infrastructure remain strictly protected."
    },
    {
        icon: <Code2 className="w-8 h-8 text-brand-green relative z-20" />,
        title: "Scalable Architecture",
        description: "We don't just build for today; we engineer robust systems capable of handling exponential user growth."
    },
    {
        icon: <Users className="w-8 h-8 text-brand-green relative z-20" />,
        title: "Elite Engineering Team",
        description: "Work directly with senior developers and architects who have delivered products for Fortune 500 companies."
    }
];

// Interactive 3D Tilt Card Component
const InteractiveCard = ({ icon, title, description, index }) => {
    const cardRef = useRef(null);

    // Framer Motion Values for Mouse Tracking
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    // Smooth physics to prevent snappy jumping
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Transform mouse coordinates into 3D rotation angles (-15 to 15 degrees)
    const rotateX = useTransform(springY, [0, 1], [15, -15]);
    const rotateY = useTransform(springX, [0, 1], [-15, 15]);

    // Translate the internal glare based on mouse position
    const glareX = useTransform(springX, [0, 1], ["-100%", "100%"]);
    const glareY = useTransform(springY, [0, 1], ["-100%", "100%"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width;
        const yPct = (e.clientY - rect.top) / rect.height;
        mouseX.set(xPct);
        mouseY.set(yPct);
    };

    const handleMouseLeave = () => {
        // Reset to center smoothly
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
            style={{ perspective: 1000 }} // Key for 3D effect
            className="w-full relative group cursor-crosshair"
        >
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d" // Preserves 3D space for children
                }}
                className="bg-[#111] p-8 rounded-[2rem] border border-white/5 group-hover:border-brand-green/30 transition-colors h-full relative overflow-hidden flex flex-col items-start shadow-xl will-change-transform"
            >
                {/* Floating 3D Icon Container */}
                <motion.div
                    style={{ translateZ: 50 }} // Pushes icon towards viewer
                    className="mb-6 relative w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 bg-[#1a1a1a] shadow-lg"
                >
                    <div className="absolute inset-0 bg-brand-green/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {icon}
                </motion.div>

                {/* 3D Text Container */}
                <motion.div style={{ translateZ: 30 }} className="relative z-10 w-full">
                    <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{title}</h3>
                    <p className="text-[#888] text-[15px] leading-relaxed relative z-10 block max-w-[90%]">
                        {description}
                    </p>
                </motion.div>

                {/* Glossy Glare Effect Layer */}
                <motion.div
                    className="absolute inset-0 pointer-events-none rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-[radial-gradient(circle_at_center,rgba(182,255,51,0.15)_0%,transparent_50%)]"
                    style={{
                        x: glareX,
                        y: glareY,
                        width: "200%",
                        height: "200%",
                        left: "-50%",
                        top: "-50%"
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

const WhyChooseUs = () => {
    return (
        <section className="py-24 lg:py-32 bg-[#09090b] relative border-t border-white/5 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">

                    {/* Left Typography - Staggered Entry */}
                    <div className="w-full lg:w-5/12">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-green font-bold tracking-[0.2em] uppercase text-[11px] mb-6 block border border-brand-green/20 px-4 py-1.5 w-max rounded-full"
                        >
                            THE TECHZA ADVANTAGE
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-[60px] font-display font-black text-white tracking-tight leading-[1.05] mb-8"
                        >
                            Why Industry Leaders <br className="hidden lg:block" /> <span className="text-brand-green drop-shadow-[0_0_20px_rgba(182,255,51,0.2)]">Choose Us</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[#888] text-[18px] leading-relaxed mb-10 max-w-lg"
                        >
                            In a saturated market, exceptional execution is the only differentiator.
                            We partner with our clients to transform ambitious concepts into elegant, high-performing digital realities.
                            Our commitment to engineering excellence forms the core of everything we build.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-5 bg-brand-green text-[#050505] font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(182,255,51,0.2)] uppercase tracking-wide text-sm">
                                Start Your Project
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Interactive 3D Grid */}
                    <div className="w-full lg:w-7/12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                            {reasons.map((reason, idx) => (
                                <InteractiveCard
                                    key={idx}
                                    icon={reason.icon}
                                    title={reason.title}
                                    description={reason.description}
                                    index={idx}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
