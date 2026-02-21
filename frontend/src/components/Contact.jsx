import { useState } from 'react';
import { motion } from 'framer-motion';

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
            const response = await fetch('http://localhost:5000/api/contact', {
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
        <section id="contact" className="py-24 bg-[#050505] relative z-10 border-t border-white/5">
            <div className="max-w-3xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Let's Explore If We're a Good Fit
                    </h2>
                    <p className="text-[#888] text-[17px] leading-relaxed max-w-2xl mx-auto">
                        No pitch decks. No sales pressure. Just a straightforward conversation about your requirements and how we might help.
                    </p>
                </div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#0f0f0f] border border-[#222] rounded-2xl p-8 md:p-12 mb-8"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="name" className="block text-[#888] font-medium text-sm mb-3">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Ramesh Sharma"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#151515] border border-[#222] rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[#B6FF33] transition-colors placeholder:text-[#555]"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-[#888] font-medium text-sm mb-3">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="hello@techza.in"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#151515] border border-[#222] rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[#B6FF33] transition-colors placeholder:text-[#555]"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-[#888] font-medium text-sm mb-3">Company (Optional)</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                placeholder="Techza Technology"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full bg-[#151515] border border-[#222] rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[#B6FF33] transition-colors placeholder:text-[#555]"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-[#888] font-medium text-sm mb-3">Tell us about your project</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="What operational challenges are you facing? What does success look like?"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#151515] border border-[#222] rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[#B6FF33] transition-colors placeholder:text-[#555] resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'Submitting...'}
                            className="w-full bg-[#c0ff56] text-[#050505] px-8 py-5 rounded-lg font-bold text-[15px] hover:brightness-110 transition-all disabled:opacity-70 mt-4"
                        >
                            Discuss Your Requirement
                        </button>

                        {status && (
                            <div className={`text-center text-sm mt-2 ${status.includes('success') ? 'text-brand-green' : 'text-red-400'}`}>
                                {status}
                            </div>
                        )}
                    </form>

                    <div className="text-center mt-12">
                        <p className="text-[#555] text-[15px] mb-2">
                            Or email us directly: <a href="mailto:hello@techza.in" className="text-[#B6FF33] hover:underline">hello@techza.in</a>
                        </p>
                        <p className="text-[#aaa] text-sm">
                            Response time: Usually within 24 hours.
                        </p>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
