import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#030303] border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">

                    <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
                        <div className="flex flex-col mb-6 items-center md:items-start">
                            <span className="text-3xl font-display font-black tracking-tight leading-none text-white">
                                TECHZA
                            </span>
                            <span className="text-xs uppercase font-bold tracking-widest text-brand-green">Technology</span>
                        </div>
                        <p className="text-brand-text max-w-sm">
                            We build high-performance software with engineering precision. From Web Apps to AI Solutions, we scale effective digital products that drive business growth.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-brand-text hover:text-brand-green transition-colors">About Us</a></li>
                            <li><a href="#services" className="text-brand-text hover:text-brand-green transition-colors">Services</a></li>
                            <li><a href="#projects" className="text-brand-text hover:text-brand-green transition-colors">Projects</a></li>
                            <li><a href="#blog" className="text-brand-text hover:text-brand-green transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-brand-text hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-brand-text hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-brand-text text-center md:text-left">
                    <p>© {new Date().getFullYear()} Techza Technology. All rights reserved.</p>
                    <div className="flex space-x-6 mt-6 md:mt-0 justify-center">
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
