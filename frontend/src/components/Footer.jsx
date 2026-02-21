import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <footer className="bg-[#030303] relative overflow-hidden border-t border-white/5 pt-20 lg:pt-32 pb-4">

            {/* Massive Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* CTA Top Banner Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="flex flex-col md:flex-row items-center justify-between gap-10 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-10 md:p-16 mb-24 shadow-2xl relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-brand-green/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="flex-1 z-10 text-center md:text-left">
                        <motion.h3 variants={itemVariants} className="text-3xl lg:text-5xl font-display font-black text-white mb-4">
                            Ready to engineer <br className="hidden lg:block" /> the future?
                        </motion.h3>
                        <motion.p variants={itemVariants} className="text-[#888] text-[17px] max-w-md mx-auto md:mx-0">
                            Let’s discuss how our specialized technical divisions can accelerate your product roadmap.
                        </motion.p>
                    </div>

                    <motion.div variants={itemVariants} className="z-10 shrink-0">
                        <Link to="/contact" className="inline-flex items-center gap-4 bg-brand-green text-black font-bold px-8 py-5 rounded-full hover:bg-white transition-all transform hover:scale-105 group/btn">
                            Start a Project
                            <ArrowRight className="w-5 h-5 group-hover/btn:-rotate-45 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Main Footer Links */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24"
                >
                    {/* Brand Info */}
                    <motion.div variants={itemVariants} className="col-span-1 lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <Link to="/" className="flex flex-col mb-8 items-center lg:items-start group">
                            <span className="text-4xl font-display font-black tracking-tight text-white group-hover:text-brand-green transition-colors">
                                TECHZA
                            </span>
                            <span className="text-xs uppercase font-bold tracking-[0.3em] text-brand-green">Technology</span>
                        </Link>
                        <p className="text-[#888] text-[16px] leading-relaxed max-w-sm mb-10">
                            We execute at the highest level across the entire modern technology spectrum, building high-performance software with engineering precision.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#888] hover:text-brand-green hover:border-brand-green/50 hover:bg-brand-green/10 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#888] hover:text-brand-green hover:border-brand-green/50 hover:bg-brand-green/10 transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#888] hover:text-brand-green hover:border-brand-green/50 hover:bg-brand-green/10 transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Navigation Columns */}
                    <motion.div variants={itemVariants} className="col-span-1 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10 text-center sm:text-left">

                        <div>
                            <h4 className="text-white font-bold mb-6 text-[18px]">Company</h4>
                            <ul className="space-y-4">
                                <li><Link to="/about" className="text-[#888] hover:text-brand-green transition-colors text-[15px]">Our Story</Link></li>
                                <li><Link to="/services" className="text-[#888] hover:text-brand-green transition-colors text-[15px]">Capabilities</Link></li>
                                <li><Link to="/projects" className="text-[#888] hover:text-brand-green transition-colors text-[15px]">Portfolio</Link></li>
                                <li><Link to="/contact" className="text-[#888] hover:text-brand-green transition-colors text-[15px]">Contact Us</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6 text-[18px]">Services</h4>
                            <ul className="space-y-4">
                                <li><Link to="/services" className="text-[#888] hover:text-white transition-colors text-[15px]">Enterprise Web</Link></li>
                                <li><Link to="/services" className="text-[#888] hover:text-white transition-colors text-[15px]">Mobile Apps</Link></li>
                                <li><Link to="/services" className="text-[#888] hover:text-white transition-colors text-[15px]">AI Solutions</Link></li>
                                <li><Link to="/services" className="text-[#888] hover:text-white transition-colors text-[15px]">Cloud DevOps</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6 text-[18px]">Legal</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-[#888] hover:text-white transition-colors text-[15px]">Privacy Policy</a></li>
                                <li><a href="#" className="text-[#888] hover:text-white transition-colors text-[15px]">Terms of Service</a></li>
                                <li><a href="#" className="text-[#888] hover:text-white transition-colors text-[15px]">Cookie Policy</a></li>
                            </ul>
                        </div>

                    </motion.div>
                </motion.div>

            </div>

            {/* Massive Typography Section */}
            <div className="w-full relative overflow-hidden flex items-end justify-center pointer-events-none select-none mt-10">
                <span className="text-[15vw] md:text-[18vw] font-display font-black leading-[0.75] text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent">
                    TECHZA
                </span>
            </div>

            {/* Bottom Copyright Strip */}
            <div className="border-t border-white/10 mt-4 relative z-10 w-full">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#555]">
                    <p>© {new Date().getFullYear()} Techza Technology. All rights reserved.</p>
                    <p className="mt-2 md:mt-0 flex items-center gap-1">
                        Engineered globally
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
