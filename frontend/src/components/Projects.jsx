import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        title: "Pixsignerz Portal",
        category: "Enterprise Solutions",
        description: "Secure digital enterprise portal for Aureon, streamlining internal workflows and document management.",
        tags: ["WordPress", "PHP", "MySQL"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        link: "#"
    },
    {
        title: "Future Realty Space",
        category: "Real Estate",
        description: "Modern property brokerage platform enabling seamless property discovery and client management.",
        tags: ["Next.js", "Tailwind", "MongoDB"],
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
        link: "#"
    },
    {
        title: "Aureon India",
        category: "Corporate Tech",
        description: "Professional corporate presence for a leading IT and managed services provider.",
        tags: ["React", "TypeScript", "Framer Motion"],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        link: "#"
    },
    {
        title: "Vassu Infotech",
        category: "IT Services",
        description: "Comprehensive IT services and hardware solutions platform with e-commerce integration.",
        tags: ["Next.js", "Stripe", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
        link: "#"
    },
    {
        title: "Narmada Sales",
        category: "Web Application",
        description: "Full-stack real estate management system optimizing property tracking and sales operations.",
        tags: ["PHP", "MySQL", "JavaScript"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        link: "#"
    },
    {
        title: "Path Visa Advisor",
        category: "Web Application",
        description: "Trusted global visa partner providing expert guidance and fast processing for all visa types.",
        tags: ["Next.js", "React", "TailwindCSS"],
        image: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=800",
        link: "#"
    }
];

const categories = ["All", "Enterprise Solutions", "Real Estate", "Corporate Tech", "IT Services", "Web Application"];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="py-24 bg-[#0a0a0a] relative">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                {/* Header Sequence */}
                <div className="text-center mb-12">
                    <span className="text-brand-green font-bold tracking-wider uppercase text-[11px] mb-4 block">
                        OUR PORTFOLIO
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-[56px] font-display font-black text-white tracking-tight leading-tight">
                        Projects That <span className="text-brand-green">Delivered Results</span>
                    </h2>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === cat
                                ? "bg-brand-green text-[#050505] shadow-[0_0_15px_rgba(182,255,51,0.3)]"
                                : "bg-[#151515] border border-white/5 text-[#888] hover:text-white hover:bg-[#222]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* 3-Column Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="bg-[#121212] border border-[#222] rounded-2xl p-6 flex flex-col group hover:border-[#333] transition-colors"
                            >
                                {/* Image Container */}
                                <div className="rounded-xl overflow-hidden bg-[#1a1a1a] mb-6 relative aspect-[1.6]">
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Hover overlay button */}
                                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a href={project.link} className="bg-brand-green text-[#050505] font-bold px-6 py-2.5 rounded-full text-sm flex items-center gap-2 hover:scale-105 transition-transform">
                                            View Live Site <span className="text-xl leading-none -mt-1">↗</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow flex flex-col mt-4 md:mt-0">
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-[#1a1a1a] border border-[#333] rounded-full text-[11px] text-[#aaa] font-medium mb-4">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white mb-3">
                                            {project.title}
                                        </h3>
                                        <p className="text-[#888] text-[15px] leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-2 mt-auto pt-6 border-t border-white/5">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-white/5 border border-white/5 rounded-md text-[11px] font-medium text-[#777]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;
