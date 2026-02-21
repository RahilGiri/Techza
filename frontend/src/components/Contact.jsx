import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import EarthModel from './EarthModel';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        try {
            const response = await fetch('http://localhost:5001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', company: '', message: '' });
            } else {
                setStatus('Failed to send message.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Error connecting to server.');
        }
    };

    return (
        <section id="contact" className="py-24 bg-[#050505] relative z-10 border-t border-white/5 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
                <div className="text-center mb-10 lg:mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-green font-bold tracking-wider uppercase text-[11px] mb-4 block"
                    >
                        START THE CONVERSATION
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight mb-6"
                    >
                        Let's Explore If We're a <span className="text-brand-green">Good Fit</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#888] text-[19px] leading-relaxed max-w-2xl mx-auto"
                    >
                        No pitch decks. No sales pressure. Just a straightforward conversation about your requirements and how we might help.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Animated Graphic & Details */}
                    <div className="flex flex-col gap-12 lg:gap-16 pt-0 lg:-mt-6">
                        <div className="flex justify-center items-center relative h-[350px] md:h-[450px] xl:h-[500px] w-full">
                            <EarthModel />
                        </div>

                        {/* Contact Information Details */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                                }
                            }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 w-full relative z-20"
                        >
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -30 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-[1.5rem] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:border-brand-green/40 transition-colors relative overflow-hidden group shadow-2xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-green/0 via-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-out"></div>
                                <div className="w-14 h-14 bg-[#1a1a1a] border border-white/5 group-hover:border-brand-green/30 group-hover:bg-brand-green/10 rounded-2xl flex items-center justify-center shrink-0 relative z-10 group-hover:scale-110 transition-all duration-300 group-hover:-rotate-3">
                                    <Mail className="w-6 h-6 text-brand-green" />
                                </div>
                                <div className="text-center sm:text-left relative z-10 w-full flex flex-col justify-center h-full">
                                    <span className="block text-[#888] text-[11px] font-bold tracking-widest uppercase mb-1.5">Email Protocol</span>
                                    <a href="mailto:hello@techza.in" className="text-white text-[17px] font-medium hover:text-brand-green transition-colors block">hello@techza.in</a>
                                    <div className="h-[2px] w-0 bg-brand-green mt-3 group-hover:w-16 transition-all duration-500 ease-out mx-auto sm:mx-0"></div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -30 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-[1.5rem] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:border-brand-green/40 transition-colors relative overflow-hidden group shadow-2xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-green/0 via-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-out"></div>
                                <div className="w-14 h-14 bg-[#1a1a1a] border border-white/5 group-hover:border-brand-green/30 group-hover:bg-brand-green/10 rounded-2xl flex items-center justify-center shrink-0 relative z-10 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                                    <Phone className="w-6 h-6 text-brand-green" />
                                </div>
                                <div className="text-center sm:text-left relative z-10 w-full flex flex-col justify-center h-full">
                                    <span className="block text-[#888] text-[11px] font-bold tracking-widest uppercase mb-1.5">Direct Comms</span>
                                    <a href="tel:+919876543210" className="text-white text-[17px] font-medium hover:text-brand-green transition-colors block">+91 98765 43210</a>
                                    <div className="h-[2px] w-0 bg-brand-green mt-3 group-hover:w-16 transition-all duration-500 ease-out mx-auto sm:mx-0"></div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -30 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-[1.5rem] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:border-brand-green/40 transition-colors relative overflow-hidden group shadow-2xl sm:col-span-2 lg:col-span-1"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-green/0 via-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-out"></div>
                                <div className="w-14 h-14 bg-[#1a1a1a] border border-white/5 group-hover:border-brand-green/30 group-hover:bg-brand-green/10 rounded-2xl flex items-center justify-center shrink-0 relative z-10 group-hover:scale-110 transition-all duration-300 group-hover:-rotate-3">
                                    <MapPin className="w-6 h-6 text-brand-green" />
                                </div>
                                <div className="text-center sm:text-left relative z-10 w-full flex flex-col justify-center h-full">
                                    <span className="block text-[#888] text-[11px] font-bold tracking-widest uppercase mb-1.5">Headquarters</span>
                                    <p className="text-white text-[16px] font-medium leading-relaxed group-hover:text-brand-green transition-colors">Bandra Kurla Complex<br />Mumbai, India</p>
                                    <div className="h-[2px] w-0 bg-brand-green mt-3 group-hover:w-16 transition-all duration-500 ease-out mx-auto sm:mx-0"></div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Form Component */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#0f0f0f] border border-[#222] rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 blur-3xl rounded-full group-hover:bg-brand-green/10 transition-colors pointer-events-none"></div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-[#888] font-bold text-[11px] tracking-wider uppercase mb-3">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Ramesh Sharma"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#151515] border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-green/50 focus:bg-[#1a1a1a] transition-all placeholder:text-[#555]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-[#888] font-bold text-[11px] tracking-wider uppercase mb-3">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="hello@techza.in"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#151515] border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-green/50 focus:bg-[#1a1a1a] transition-all placeholder:text-[#555]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-[#888] font-bold text-[11px] tracking-wider uppercase mb-3">Company (Optional)</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="Techza Technology"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full bg-[#151515] border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-green/50 focus:bg-[#1a1a1a] transition-all placeholder:text-[#555]"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-[#888] font-bold text-[11px] tracking-wider uppercase mb-3">Tell us about your project</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="What operational challenges are you facing? What does success look like?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#151515] border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-green/50 focus:bg-[#1a1a1a] transition-all placeholder:text-[#555] resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'Submitting...'}
                                className="w-full bg-brand-green text-[#050505] px-8 py-5 rounded-xl font-bold text-[15px] hover:brightness-110 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 mt-2 shadow-[0_0_20px_rgba(182,255,51,0.2)]"
                            >
                                {status === 'Submitting...' ? 'Initializing Protocol...' : 'Discuss Your Requirement'}
                            </button>

                            {status && status !== 'Submitting...' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`text-center font-bold text-sm mt-2 p-3 rounded-lg ${status.includes('success') ? 'bg-brand-green/10 text-brand-green border border-brand-green/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}
                                >
                                    {status}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
