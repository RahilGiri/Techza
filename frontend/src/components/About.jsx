import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import img1 from '../assets/team/tech_man_1.png';
import img2 from '../assets/team/tech_woman_1.png';
import img3 from '../assets/team/tech_woman_2.png';
import img4 from '../assets/team/tech_man_2.png';
import img5 from '../assets/team/tech_woman_3.png';

// --- Interactive 5-Sided Auto-Rotating Carousel ---
const InteractiveCube = () => {
    const [rotation, setRotation] = useState(0);

    // Auto-rotate every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(r => r - 72); // Rotate to next face
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleDragEnd = (event, info) => {
        // swipe threshold for manual rotation
        if (info.offset.x > 50 || info.velocity.x > 500) {
            setRotation(r => r + 72);
        } else if (info.offset.x < -50 || info.velocity.x < -500) {
            setRotation(r => r - 72);
        }
    };

    const faces = [
        { img: img1, alt: "Team Member 1", angle: 0 },
        { img: img2, alt: "Team Member 2", angle: 72 },
        { img: img3, alt: "Team Member 3", angle: 144 },
        { img: img4, alt: "Team Member 4", angle: 216 },
        { img: img5, alt: "Team Member 5", angle: 288 },
    ];

    return (
        <div className="relative w-full h-[500px] lg:h-[700px] flex flex-col items-center justify-center pt-10" style={{ perspective: "1500px" }}>

            {/* Draggable Auto-Rotating Prism Container */}
            <motion.div
                className="relative w-[230px] h-[330px] md:w-[280px] md:h-[420px] cursor-grab active:cursor-grabbing"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: rotation }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
            >
                {faces.map((face, index) => (
                    <div
                        key={index}
                        className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-brand-green/30 shadow-[0_0_30px_rgba(182,255,51,0.1)] bg-[#050505]"
                        style={{
                            transform: `rotateY(${face.angle}deg) translateZ(240px)`,
                            backfaceVisibility: "hidden"
                        }}
                    >
                        <img src={face.img} alt={face.alt} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none"></div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};


// --- Main Text Content Variant for Staggering ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const About = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Subtly move the background elements to give depth
    const yBg = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section id="about" ref={sectionRef} className="py-32 bg-[#050505] relative border-t border-white/5 overflow-hidden">

            {/* Ambient Background Accents */}
            <motion.div style={{ y: yBg }} className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/5 blur-[200px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></motion.div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* Left Column: Story Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex-1 w-full"
                >
                    <motion.span variants={itemVariants} className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-[11px] font-bold uppercase tracking-widest rounded-full mb-6 border border-brand-green/20">
                        ABOUT TECHZA
                    </motion.span>

                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-[1.1] mb-8">
                        The Engineers Who <br className="hidden md:block" />
                        <span className="text-brand-green drop-shadow-[0_0_20px_rgba(182,255,51,0.2)]">Built The Alternative.</span>
                    </motion.h2>

                    <div className="space-y-6 text-[#aaa] text-[18px] leading-relaxed mb-12">
                        <motion.p variants={itemVariants} className="border-l-2 border-brand-green/50 pl-6 text-white text-xl font-medium">
                            Techza Technology was founded by engineers who were tired of vendors over-promising and under-delivering. We started Techza to be the alternative you can actually rely on.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            Our founders have spent years architecting heavy software systems across various industries — from deeply complex enterprise applications to lightning-fast global web platforms.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            Our philosophy is unyielding: understand the raw business objective deeply, architect the most robust and scalable technical solution, build it properly using uncompromising quality standards, and stand behind our work relentlessly.
                        </motion.p>
                    </div>

                    <motion.div variants={itemVariants} className="flex gap-4 sm:gap-8 flex-wrap">
                        <div className="flex flex-col border-l border-white/10 pl-6">
                            <span className="text-3xl font-display font-black text-white mb-1">100%</span>
                            <span className="text-[#888] text-sm font-medium tracking-wide">US/EU QUALITY</span>
                        </div>
                        <div className="flex flex-col border-l border-white/10 pl-6">
                            <span className="text-3xl font-display font-black text-white mb-1">Zero</span>
                            <span className="text-[#888] text-sm font-medium tracking-wide">OUTSOURCING</span>
                        </div>
                        <div className="flex flex-col border-l border-white/10 pl-6">
                            <span className="text-3xl font-display font-black text-white mb-1">1M+</span>
                            <span className="text-[#888] text-sm font-medium tracking-wide">USERS SCALED</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column: Animated Image Mirrors */}
                <div className="flex-1 w-full relative">
                    <InteractiveCube />
                </div>

            </div>
        </section>
    );
};

export default About;
