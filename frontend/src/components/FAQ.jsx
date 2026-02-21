import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
    {
        question: "How long does a typical project take?",
        answer: "Every project is unique, but our typical MVP launch takes 6-10 weeks. Enterprise systems or highly complex applications can take 3-6 months. We provide detailed timelines structured around 2-week agile sprints during our discovery phase."
    },
    {
        question: "What is your pricing model?",
        answer: "We offer both fixed-price contracts for clearly defined scopes and time-and-materials engagement for ongoing development. Most startups prefer our dedicated team model, which provides predictable monthly billing."
    },
    {
        question: "Do you provide ongoing support after launch?",
        answer: "Yes. Every project includes 30 days of post-launch bug fixing. Beyond that, we offer custom retaining packages for continuous maintenance, feature updates, and scaling infrastructure."
    },
    {
        question: "What technologies do you specialize in?",
        answer: "Our core stack is React/Next.js for the frontend, Node.js/Python for the backend, and AWS/Vercel for infrastructure. We also specialize in Tailwind CSS, framer-motion, MongoDB, and PostgreSQL depending on your specific requirements."
    },
    {
        question: "Can you work with our existing team?",
        answer: "Absolutely. We frequently augment existing engineering teams, providing specialized skills like complex architecture design, AI integration, or high-performance frontend engineering to accelerate your roadmap."
    },
    {
        question: "What if I'm not satisfied with the work?",
        answer: "We mitigate risk through our 2-week sprint model. You review working software every 14 days. If the direction isn't right, we pivot immediately. You're never locked into a long-term black box."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-24 bg-[#050505] relative border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#B6FF33] tracking-[0.2em] font-bold uppercase text-[11px] mb-4 block">
                        FAQ
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-display font-black text-white tracking-tight">
                        Frequently Asked <span className="text-[#B6FF33]">Questions</span>
                    </h2>
                </div>

                {/* Accordion List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="border border-[#222] bg-[#0a0a0a] rounded-xl overflow-hidden transition-colors hover:border-[#333]"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
                                >
                                    <h3 className="text-white font-bold text-lg md:text-xl pr-8">
                                        {faq.question}
                                    </h3>
                                    <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                                        <Plus className="text-[#B6FF33]" size={24} />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            <div className="px-8 pb-6 text-[#888] text-[15px] leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
