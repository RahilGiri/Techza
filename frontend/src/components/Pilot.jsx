import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Pilot = () => {
    const plans = [
        {
            service: "Discovery Call",
            investment: "Free",
            timeline: "30 Mins",
            promise: "No pitch. Just honest directions. If we can't help, we'll tell you who can.",
            action: "Book Call",
            highlight: false
        },
        {
            service: "Architecture Review",
            investment: "₹1,000",
            timeline: "1 Day",
            promise: "Rapid system audit. We’ll find the cracks in your tech stack and give you a 1-page roadmap.",
            action: "Get Started",
            highlight: false
        },
        {
            service: "Rapid Pilot",
            investment: "₹15,000",
            timeline: "1 Week",
            promise: "We build one high-impact feature or tool. If you love it, we scale. If not, the code is yours.",
            action: "Start a Pilot",
            highlight: true
        }
    ];

    return (
        <section id="pilot" className="py-24 bg-[#09090b] relative border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="mb-16 max-w-2xl">
                    <span className="text-brand-green font-bold tracking-wider uppercase text-[11px] mb-4 block">
                        OUR TEIRS
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-black text-white tracking-tight leading-[1.1] mb-6">
                        Transparent Pricing Model
                    </h2>
                    <p className="text-[#888] text-[17px]">
                        We understand trust is earned. Simple models to validate and scale your product.
                    </p>
                </div>

                {/* Table View */}
                {/* Table View (Desktop & Tablet) */}
                <div className="hidden md:block w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                    <table className="w-full text-left border-collapse min-w-[700px] lg:min-w-full">
                        <thead>
                            <tr className="border-b border-white/10 text-[#888] text-sm tracking-wider uppercase">
                                <th className="py-6 font-medium w-1/4">Service</th>
                                <th className="py-6 font-medium w-1/6">Investment</th>
                                <th className="py-6 font-medium w-1/6">Timeline</th>
                                <th className="py-6 font-medium w-1/3">The Promise</th>
                                <th className="py-6 font-medium text-right w-1/5">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plans.map((plan, i) => (
                                <tr key={i} className={`border-b border-white/5 transition-colors hover:bg-white/[0.02] ${plan.highlight ? 'bg-brand-green/5' : ''}`}>
                                    <td className="py-8 text-white font-semibold text-lg">
                                        {plan.service}
                                        {plan.highlight && (
                                            <span className="block text-brand-green text-[10px] font-bold uppercase tracking-widest mt-1">Recommended</span>
                                        )}
                                    </td>
                                    <td className="py-8">
                                        <span className={plan.highlight ? "text-brand-green font-bold text-xl" : "text-white font-medium text-lg"}>
                                            {plan.investment}
                                        </span>
                                    </td>
                                    <td className="py-8 text-[#aaa] font-medium">{plan.timeline}</td>
                                    <td className="py-8 text-[#777] pr-6">{plan.promise}</td>
                                    <td className="py-8 text-right">
                                        <a href="#contact" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${plan.highlight ? 'bg-brand-green text-[#050505] hover:brightness-110' : 'bg-transparent border border-[#333] text-white hover:bg-white/5'}`}>
                                            {plan.action} <ArrowRight size={14} />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Card View (Mobile only) */}
                <div className="grid grid-cols-1 gap-6 md:hidden">
                    {plans.map((plan, i) => (
                        <div key={i} className={`p-6 rounded-2xl border flex flex-col ${plan.highlight ? 'bg-brand-green/5 border-brand-green/30 relative overflow-hidden' : 'bg-[#111] border-white/5'}`}>
                            {plan.highlight && (
                                <div className="absolute top-0 inset-x-0 h-1 bg-brand-green"></div>
                            )}
                            <div className="mb-4">
                                {plan.highlight && (
                                    <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                                        Recommended
                                    </span>
                                )}
                                <h3 className="text-xl font-bold text-white tracking-tight">{plan.service}</h3>
                            </div>

                            <div className="flex items-end gap-2 mb-4">
                                <span className={plan.highlight ? "text-brand-green font-bold text-3xl" : "text-white font-bold text-3xl"}>
                                    {plan.investment}
                                </span>
                                <span className="text-[#888] font-medium text-sm mb-1">/ {plan.timeline}</span>
                            </div>

                            <p className="text-[#888] text-sm leading-relaxed mb-8 flex-grow">
                                {plan.promise}
                            </p>

                            <a href="#contact" className={`w-full flex justify-center items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold transition-all mt-auto ${plan.highlight ? 'bg-brand-green text-[#050505] hover:brightness-110' : 'bg-transparent border border-[#333] text-white hover:bg-white/5'}`}>
                                {plan.action} <ArrowRight size={14} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pilot;
