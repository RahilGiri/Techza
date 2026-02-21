import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-header py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="flex flex-col">
                        <span className="text-3xl font-display font-black tracking-tighter leading-none text-white flex items-center">
                            TECHZA
                            <span className="text-brand-green ml-0.5 -mt-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                                </svg>
                            </span>
                        </span>
                        <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-white/50 ml-0.5 mt-1 hidden md:block">Technology</span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} className="text-[15px] font-medium text-[#c4c4c4] hover:text-white transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link to="/contact" className="bg-brand-green text-[#050505] px-6 py-2.5 rounded-md font-bold text-[15px] hover:brightness-110 transition-all">
                        Let's Talk
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full glass-header border-t border-white/10 md:hidden flex flex-col items-center py-6 space-y-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-white hover:text-brand-green text-lg font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="bg-brand-green text-brand-dark px-8 py-3 rounded-lg font-semibold w-5/6 text-center mt-4">
                            Let's Talk
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
