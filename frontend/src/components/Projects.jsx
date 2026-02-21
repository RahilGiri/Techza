import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';

const defaultCategories = ["All", "IT Services", "Real Estate", "Web Application", "Enterprise Solutions", "E-Commerce", "Mobile Application", "AI & Machine Learning", "Blockchain"];

// Animation Variants
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", bounce: 0.4 } }
};

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);

    // Mouse position relative to center of card
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for a fluid 3D feel
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Map mouse position (-0.5 to 0.5) to rotation degrees (e.g. -15 to 15)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.7, delay: (index % 3) * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ perspective: 1200 }}
            className="group relative"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                className="bg-[#0a0a0a] border border-white/5 shadow-2xl rounded-3xl p-6 flex flex-col h-full hover:border-brand-green/30 hover:shadow-[0_0_40px_rgba(182,255,51,0.05)] transition-all relative overflow-hidden"
            >
                {/* Subtle internal gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/0 group-hover:from-brand-green/5 group-hover:to-transparent transition-colors duration-700 pointer-events-none"></div>

                {/* Image Container with Parallax effect */}
                <div
                    className="rounded-2xl overflow-hidden bg-[#111] mb-6 relative aspect-[1.6]"
                    style={{ transform: "translateZ(40px)" }}
                >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-700 z-10"></div>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                    />
                    {/* Hover overlay button */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <a href={project.link || "#"} className="bg-brand-green text-[#050505] font-bold px-7 py-3 rounded-full text-sm flex items-center gap-2 hover:scale-105 transition-transform backdrop-blur-md shadow-[0_0_20px_rgba(182,255,51,0.4)]">
                            View Live Site <span className="text-xl leading-none -mt-1">↗</span>
                        </a>
                    </div>
                </div>

                {/* Content */}
                <div
                    className="flex-grow flex flex-col mt-4 md:mt-0 relative z-10"
                    style={{ transform: "translateZ(30px)" }}
                >
                    <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] text-[#ccc] font-medium mb-4 tracking-wide group-hover:border-brand-green/30 group-hover:text-brand-green transition-colors">
                            {project.category}
                        </span>
                        <h3 className="text-2xl font-display font-bold text-white mb-3 tracking-tight group-hover:text-brand-green transition-colors duration-300">
                            {project.title}
                        </h3>
                        <p className="text-[#888] text-[15px] leading-relaxed line-clamp-3">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-auto pt-6 border-t border-white/5">
                        {(project.techStack || []).map(tag => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-[#111] border border-white/5 rounded-md text-[11px] font-medium text-[#777] group-hover:border-white/10 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState(defaultCategories);
    const [activeFilter, setActiveFilter] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Subtly parallax the ambient background blurs
    const yBg1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const yBg2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('http://localhost:5001/api/projects');
                const data = await res.json();
                setProjects(data);

                // Merge default categories with dynamically fetched data categories
                const dbCategories = data.map(item => item.category);
                const combinedCategories = ["All", ...new Set([...defaultCategories, ...dbCategories].filter(cat => cat !== "All"))];
                setCategories(combinedCategories);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };
        fetchProjects();
    }, []);

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="projects" ref={sectionRef} className="pt-8 pb-24 md:pt-12 md:pb-32 bg-[#050505] relative border-t border-white/5 overflow-hidden">

            {/* Animated Ambient Backgrounds */}
            <motion.div style={{ y: yBg1 }} className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-brand-green/5 blur-[150px] rounded-full pointer-events-none"></motion.div>
            <motion.div style={{ y: yBg2 }} className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none"></motion.div>

            <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10">

                {/* Header Sequence */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16 md:mb-24"
                >
                    <motion.span variants={fadeUpVariant} className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-[11px] font-bold uppercase tracking-widest rounded-full mb-6 border border-brand-green/20">
                        OUR PORTFOLIO
                    </motion.span>
                    <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-6xl lg:text-[72px] font-display font-black text-white tracking-tight leading-[1.1]">
                        Results Through <br className="hidden md:block" />
                        <span className="text-brand-green drop-shadow-[0_0_20px_rgba(182,255,51,0.2)]">Execution</span>
                    </motion.h2>
                </motion.div>

                {/* Filter Bar */}
                <div className="w-full relative mb-16">
                    {/* Gradient masks for smooth edge fading */}
                    <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex flex-nowrap overflow-x-auto gap-3 pb-8 px-8 no-scrollbar md:justify-center"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <style>{`
                            .no-scrollbar::-webkit-scrollbar { display: none; }
                        `}</style>
                        {categories.map((cat, i) => (
                            <motion.button
                                key={cat}
                                variants={buttonVariant}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveFilter(cat)}
                                className={`flex-shrink-0 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${activeFilter === cat
                                    ? "bg-brand-green text-[#050505] shadow-[0_0_20px_rgba(182,255,51,0.3)]"
                                    : "bg-[#111] border border-white/10 text-[#888] hover:text-white hover:bg-[#222]"
                                    }`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>

                {/* Grid Container */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 perspective-[2000px]">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.slice(0, visibleCount).map((project, index) => (
                            <ProjectCard key={project._id || index} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Load More / Show Less Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center mt-20 gap-6"
                >
                    <AnimatePresence>
                        {visibleCount < filteredProjects.length && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                onClick={() => setVisibleCount(prev => prev + 6)}
                                className="group relative px-10 py-4 bg-[#111] text-white font-bold rounded-full overflow-hidden border border-white/10 transition-all hover:border-brand-green shadow-xl"
                            >
                                <span className="relative z-10 flex items-center gap-3 tracking-wide">
                                    Load More Projects
                                    <svg className="w-5 h-5 text-brand-green group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 h-full w-full bg-brand-green/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                            </motion.button>
                        )}

                        {visibleCount > 6 && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                onClick={() => {
                                    setVisibleCount(6);
                                    // Optionally scroll back up slightly if needed
                                    const section = document.getElementById('projects');
                                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="group relative px-10 py-4 bg-transparent text-white font-bold rounded-full overflow-hidden border border-white/20 transition-all hover:bg-white/5"
                            >
                                <span className="relative z-10 flex items-center gap-3 tracking-wide">
                                    Show Less
                                    <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                </span>
                            </motion.button>
                        )}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;
