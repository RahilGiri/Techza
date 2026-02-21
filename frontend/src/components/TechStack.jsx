import { motion } from 'framer-motion';

const techCategories = [
    {
        name: "Frontend & WebGL",
        techs: ["React", "Next.js", "Vue", "Three.js", "GSAP", "Framer Motion", "TailwindCSS", "WebGL", "Svelte"]
    },
    {
        name: "Backend Engineering",
        techs: ["Node.js", "Python", "Go", "Rust", "Java Spring", "GraphQL", "gRPC", "Express", "Django"]
    },
    {
        name: "Database & Caching",
        techs: ["PostgreSQL", "MongoDB", "Redis", "ElasticSearch", "Cassandra", "MySQL", "DynamoDB", "Prisma"]
    },
    {
        name: "Cloud & DevOps",
        techs: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "CI/CD Pipelines", "Nginx", "Linux"]
    },
    {
        name: "AI & Machine Learning",
        techs: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "LangChain", "Scikit-Learn", "Computer Vision"]
    },
    {
        name: "Web3 & Blockchain",
        techs: ["Solidity", "Ethers.js", "Web3.js", "Hardhat", "Smart Contracts", "IPFS", "Polygon", "Ethereum"]
    }
];

const TechStack = () => {
    return (
        <section className="py-32 bg-[#050505] relative border-t border-white/5 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-green/10 blur-[150px] rounded-[100%] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-green font-bold tracking-wider uppercase text-[11px] mb-4 block"
                    >
                        THE ULTIMATE ARSENAL
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.1] mb-8"
                    >
                        Mastery Across <br /><span className="text-brand-green">Every Dimension</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#888] text-[19px] leading-relaxed"
                    >
                        We do not compromise. We wield the most advanced, battle-tested technologies on the planet to architect enterprise-grade ecosystems, interactive 3D experiences, and state-of-the-art AI infrastructures.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techCategories.map((category, idx) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-brand-green/50 transition-colors group relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Inner ambient glow on hover */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4 relative z-10">
                                <span className="w-2.5 h-2.5 rounded-full bg-brand-green group-hover:shadow-[0_0_15px_#b6ff33] transition-all duration-300"></span>
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-2.5 relative z-10 mt-auto">
                                {category.techs.map(tech => (
                                    <span
                                        key={tech}
                                        className="px-3.5 py-1.5 bg-[#0a0a0a] border border-white/5 rounded-lg text-[13px] text-[#aaa] font-medium group-hover:text-white group-hover:bg-[#1a1a1a] transition-all duration-300 cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
