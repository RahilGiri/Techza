import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Smartphone, BrainCircuit, Cloud, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import newly generated images
import enterpriseImg from '../assets/services/enterprise.png';
import mobileImg from '../assets/services/mobile.png';
import aiImg from '../assets/services/ai.png';
import cloudImg from '../assets/services/cloud.png';

const detailedServices = [
    {
        id: "web-dev",
        title: "Enterprise Web Development",
        icon: <Code className="w-8 h-8 text-brand-green" />,
        image: enterpriseImg,
        description: "We architect resilient, high-performance web applications designed to handle millions of active users. From complex SaaS platforms to bespoke internal tools, our engineering ensures scalable growth.",
        features: [
            "Single Page Applications (MERN/PERN)",
            "Server-Side Rendered (Next.js)",
            "Microservices Architecture",
            "Progressive Web Apps (PWA)"
        ],
        gradient: "from-brand-green/20 to-transparent",
        align: "left"
    },
    {
        id: "mobile-dev",
        title: "Native & Cross-Platform Mobile",
        icon: <Smartphone className="w-8 h-8 text-brand-green" />,
        image: mobileImg,
        description: "Deliver premium iOS and Android experiences. We build fluid, native-feeling mobile applications that engage users and dominate App Store metrics.",
        features: [
            "React Native & Flutter",
            "Swift (iOS) & Kotlin (Android)",
            "Offline First Capabilities",
            "Hardware API Integration (Camera, GPS)"
        ],
        gradient: "from-blue-500/20 to-transparent",
        align: "right"
    },
    {
        id: "ai-ml",
        title: "Artificial Intelligence Solutions",
        icon: <BrainCircuit className="w-8 h-8 text-brand-green" />,
        image: aiImg,
        description: "Transform your data into an unfair advantage. We integrate LLMs, computer vision, and predictive analytics to automate workflows and unlock new revenue streams.",
        features: [
            "Custom LLM Fine-tuning",
            "Predictive Data Analytics",
            "Automated Chatbots & Support",
            "Image & Speech Recognition"
        ],
        gradient: "from-purple-500/20 to-transparent",
        align: "left"
    },
    {
        id: "cloud-ops",
        title: "Cloud Architecture & DevOps",
        icon: <Cloud className="w-8 h-8 text-brand-green" />,
        image: cloudImg,
        description: "Achieve 99.99% uptime. We design zero-downtime CI/CD pipelines, containerized deployments, and globally distributed server architectures on AWS and GCP.",
        features: [
            "Kubernetes Orchestration",
            "AWS / GCP Deployments",
            "Automated CI/CD Pipelines",
            "Database Sharding & Replication"
        ],
        gradient: "from-orange-500/20 to-transparent",
        align: "right"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const ServiceCard = ({ service, index }) => {
    const isRight = service.align === 'right';

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col md:flex-row gap-10 lg:gap-20 items-center w-full py-20 ${isRight ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Visual AI Image Block */}
            <motion.div
                variants={itemVariants}
                className="w-full md:w-1/2 relative group"
            >
                {/* Decorative border glow */}
                <div className="absolute inset-0 bg-brand-green/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]"></div>

                <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-[#111] aspect-square md:aspect-[4/3] shadow-2xl">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out opacity-80 group-hover:opacity-100"
                    />

                    {/* Hover Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>

                    {/* Floating Icon Box */}
                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-16 h-16 bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:-translate-y-2 transition-transform duration-500">
                        {service.icon}
                    </div>
                </div>
            </motion.div>

            {/* Content Text Block */}
            <div className={`w-full md:w-1/2 flex flex-col ${isRight ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                <motion.span variants={itemVariants} className="text-brand-green font-black tracking-widest text-[11px] mb-6 block border border-brand-green/20 px-3 py-1 rounded-full uppercase">
                    0{index + 1}. Capability
                </motion.span>

                <motion.h3 variants={itemVariants} className="text-4xl lg:text-5xl font-display font-black text-white mb-6 leading-[1.1]">
                    {service.title}
                </motion.h3>

                <motion.p variants={itemVariants} className="text-[#888] text-[17px] leading-relaxed mb-10 max-w-lg">
                    {service.description}
                </motion.p>

                <motion.div variants={itemVariants} className={`space-y-4 mb-10 flex flex-col ${isRight ? 'md:items-end' : 'md:items-start'}`}>
                    {service.features.map((feature, i) => (
                        <div key={i} className={`flex items-center gap-3 ${isRight ? 'flex-row-reverse' : 'flex-row'}`}>
                            <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                            <span className="text-white/90 font-medium text-[15px]">{feature}</span>
                        </div>
                    ))}
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Link to="/contact" className={`inline-flex items-center gap-2 text-brand-green font-bold hover:text-white transition-colors group text-[14px] uppercase tracking-wider ${isRight ? 'flex-row-reverse' : 'flex-row'}`}>
                        Discuss this capability
                        <ArrowRight className={`w-5 h-5 transition-transform ${isRight ? 'group-hover:-translate-x-2 rotate-180' : 'group-hover:translate-x-2'}`} />
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

const DetailedServices = () => {
    return (
        <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* Header Phase */}
                <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-green font-bold tracking-wider uppercase text-[11px] mb-4 block"
                    >
                        OUR CORE CAPABILITIES
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-[85px] font-display font-black text-white tracking-tight leading-[1.1] mb-8"
                    >
                        Engineering The <br className="hidden md:block" /> <span className="text-brand-green drop-shadow-[0_0_30px_rgba(182,255,51,0.2)]">Impossible</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#888] text-[18px] md:text-[20px] leading-relaxed max-w-2xl mx-auto"
                    >
                        We execute at the highest level across the entire modern technology spectrum. Explore our specialized divisions below.
                    </motion.p>
                </div>

                {/* Staggered Cards */}
                <div className="flex flex-col gap-10 md:gap-0">
                    {detailedServices.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default DetailedServices;
