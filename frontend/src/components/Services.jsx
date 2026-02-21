import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const services = [
    {
        tag: "PERFORMANCE-FOCUSED",
        title: "Business Websites",
        description: "High-performance websites that load fast, rank well, and convert visitors into customers. Built with modern architecture for speed and reliability.",
        pills: ["SEO-optimized", "Fast load times", "Mobile-first design", "Analytics integration"]
    },
    {
        tag: "DATA-DRIVEN INTERFACES",
        title: "Web Applications & Dashboards",
        description: "Custom web applications with real-time data visualization, user management, and business logic tailored to your workflows.",
        pills: ["Real-time updates", "Role-based access", "Data visualization", "API integrations"]
    },
    {
        tag: "OPERATIONAL EFFICIENCY",
        title: "Internal Tools & Automation",
        description: "Admin panels, CRM systems, and workflow automation tools that eliminate manual work and reduce operational overhead.",
        pills: ["Process automation", "Custom workflows", "Team collaboration", "Reporting systems"]
    },
    {
        tag: "ENTERPRISE-GRADE",
        title: "Custom Software Solutions",
        description: "End-to-end software development for complex business requirements. From architecture to deployment, we handle the full stack.",
        pills: ["Scalable architecture", "Security-first", "Cloud deployment", "Ongoing support"]
    }
];

// Pill animation variants
const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
};

const Services = () => {
    const sectionRef = useRef(null);

    // Scroll-based Parallax for background text
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Calculate the parallax translation
    const bgTranslateX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    return (
        <section ref={sectionRef} id="services" className="py-32 bg-brand-dark relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header Section */}
                <div className="mb-20 max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-green font-bold tracking-wider uppercase text-[11px] mb-6 block"
                    >
                        OUR SERVICES
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-[52px] font-display font-black text-white tracking-tight leading-[1.15] mb-8"
                    >
                        Engineering-First Software<br />Development
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#888] text-[17px] leading-relaxed max-w-2xl"
                    >
                        We specialize in building software that solves real business problems — from high-performance websites to complex enterprise applications. Every project is built with code quality, performance, and long-term maintainability in mind.
                    </motion.p>
                </div>

                {/* 2x2 Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 w-full">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                            whileHover={{ scale: 1.02, y: -5 }} // Hover state lift
                            className="bg-[#121212] border border-[#222] rounded-2xl p-8 md:p-10 hover:border-brand-green/40 hover:shadow-[0_0_40px_rgba(182,255,51,0.05)] transition-all duration-300 h-full flex flex-col group relative overflow-hidden"
                        >
                            {/* Inner ambient glow on hover */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <span className="text-brand-green font-bold tracking-wider uppercase text-[10px] mb-6 block drop-shadow-[0_0_10px_rgba(182,255,51,0.3)]">
                                {service.tag}
                            </span>

                            <h3 className="text-[22px] font-bold text-white mb-4 relative z-10">
                                {service.title}
                            </h3>

                            <p className="text-[#888] text-[15px] leading-relaxed mb-8 flex-grow relative z-10">
                                {service.description}
                            </p>

                            <motion.div
                                className="flex flex-wrap gap-2 mt-auto relative z-10"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.1, // Stagger the pills
                                            delayChildren: index * 0.15 + 0.3
                                        }
                                    }
                                }}
                            >
                                {service.pills.map((pill, pIndex) => (
                                    <motion.span
                                        key={pIndex}
                                        variants={pillVariants}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="bg-[#1a1a1a] border border-[#333] rounded-full px-4 py-1.5 text-[12px] text-[#aaa] font-medium hover:text-white hover:border-brand-green/50 transition-colors cursor-pointer"
                                    >
                                        {pill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Parallax Typography decoration */}
            <motion.div
                className="absolute top-[30%] left-[-10%] w-[200%] text-left overflow-hidden pointer-events-none z-0 opacity-5"
                style={{ x: bgTranslateX }}
            >
                <span className="text-[120px] md:text-[250px] font-display font-black text-white whitespace-nowrap tracking-tighter mix-blend-overlay">SOFTWARE ENGINEERING</span>
            </motion.div>
        </section>
    );
};

export default Services;
