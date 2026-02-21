import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';

const team = [
    {
        name: "Elena Rodriguez",
        role: "Chief Executive Officer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
        bio: "Former Director of Engineering at a FinTech unicorn. Elena drives Techza's strategic vision and enterprise partnerships."
    },
    {
        name: "Marcus Chen",
        role: "Chief Technology Officer",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600",
        bio: "Open-source contributor and cloud architecture veteran. Marcus oversees all technical infrastructure and R&D."
    },
    {
        name: "Sarah Jenkins",
        role: "VP of Design",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
        bio: "Award-winning product designer obsessed with human-computer interaction and seamless user experiences."
    },
    {
        name: "David Kim",
        role: "Head of AI Integration",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
        bio: "Machine learning Ph.D. specializing in integrating predictive LLMs into conventional SaaS architectures."
    }
];

const Leadership = () => {
    return (
        <section className="py-24 bg-[#050505] relative border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-green font-bold tracking-wider uppercase text-[11px] mb-4 block"
                    >
                        THE ARCHITECTS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-display font-black text-white tracking-tight mb-6"
                    >
                        Meet The Leadership
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#888] text-[17px] max-w-2xl mx-auto"
                    >
                        Our executive team brings decades of combined experience from top-tier tech companies.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative"
                        >
                            <div className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-brand-green/30 transition-colors h-full flex flex-col">

                                {/* Image Wrapper with Zoom */}
                                <div className="aspect-square overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-700"
                                    />

                                    {/* Social Overlay */}
                                    <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <a href="#" className="w-8 h-8 rounded-full bg-brand-green text-[#050505] flex items-center justify-center hover:scale-110 transition-transform">
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                        <a href="#" className="w-8 h-8 rounded-full bg-brand-green text-[#050505] flex items-center justify-center hover:scale-110 transition-transform delay-75">
                                            <Twitter className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col relative overflow-hidden">
                                    {/* Inner subtle glow */}
                                    <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-brand-green/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <h3 className="text-xl font-bold text-white mb-1 relative z-10">{member.name}</h3>
                                    <p className="text-brand-green font-medium text-sm mb-4 relative z-10">{member.role}</p>
                                    <p className="text-[#777] text-sm leading-relaxed relative z-10">{member.bio}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Leadership;
