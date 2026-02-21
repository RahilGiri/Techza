import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Edit2, X } from 'lucide-react';

const ManagePricing = () => {
    const [plans, setPlans] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPlan, setCurrentPlan] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        timeline: '',
        promise: '',
        action: '',
        highlight: false
    });
    const { token } = useAuth();

    useEffect(() => {
        fetchPlans();
    }, []);

    const fetchPlans = async () => {
        try {
            const res = await fetch('http://localhost:5001/api/pricing');
            const data = await res.json();
            setPlans(data);
        } catch (error) {
            console.error('Error fetching pricing plans:', error);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:5001/api/pricing/${currentPlan._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                fetchPlans();
                closeModal();
            }
        } catch (error) {
            console.error('Error updating plan:', error);
        }
    };

    const openModal = (plan) => {
        setCurrentPlan(plan);
        setFormData({
            name: plan.name,
            price: plan.price,
            timeline: plan.timeline,
            promise: plan.promise,
            action: plan.action,
            highlight: plan.highlight
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentPlan(null);
    };

    return (
        <div className="bg-[#111] p-6 rounded-xl border border-white/5 mt-8">
            <h3 className="text-xl font-bold text-white mb-6">Manage Pricing Tiers</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map(plan => (
                    <div key={plan._id} className="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <h4 className="text-lg font-bold text-white">{plan.name}</h4>
                            <button onClick={() => openModal(plan)} className="text-blue-400 hover:text-blue-300">
                                <Edit2 size={16} />
                            </button>
                        </div>
                        <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                        <div className="text-sm text-[#888] mb-4">{plan.timeline}</div>

                        <div className="mt-auto pt-4 border-t border-white/5 space-y-2 text-sm">
                            <p className="text-[#aaa]"><span className="text-white font-medium">Promise:</span> {plan.promise}</p>
                            <p className="text-[#aaa]"><span className="text-white font-medium">Action:</span> {plan.action}</p>
                            <p className="text-[#aaa]"><span className="text-white font-medium">Highlighted:</span> {plan.highlight ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                    <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 w-full max-w-md">
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="text-xl font-bold text-white">Edit Plan: {currentPlan.name}</h4>
                            <button onClick={closeModal} className="text-[#888] hover:text-white">
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                            <div>
                                <label className="block text-[#aaa] mb-1">Plan Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-green" />
                            </div>
                            <div>
                                <label className="block text-[#aaa] mb-1">Price</label>
                                <input type="text" name="price" value={formData.price} onChange={handleInputChange} required className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-green" />
                            </div>
                            <div>
                                <label className="block text-[#aaa] mb-1">Timeline</label>
                                <input type="text" name="timeline" value={formData.timeline} onChange={handleInputChange} required className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-green" />
                            </div>
                            <div>
                                <label className="block text-[#aaa] mb-1">Promise</label>
                                <input type="text" name="promise" value={formData.promise} onChange={handleInputChange} required className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-green" />
                            </div>
                            <div>
                                <label className="block text-[#aaa] mb-1">Action Button Text</label>
                                <input type="text" name="action" value={formData.action} onChange={handleInputChange} required className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-green" />
                            </div>
                            <div className="flex items-center gap-3 pt-2">
                                <input type="checkbox" name="highlight" id="highlight" checked={formData.highlight} onChange={handleInputChange} className="w-4 h-4 accent-brand-green" />
                                <label htmlFor="highlight" className="text-white cursor-pointer">Highlight this plan</label>
                            </div>

                            <button type="submit" className="w-full bg-brand-green text-black font-bold py-3 rounded-lg hover:brightness-110 transition-all mt-4">
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManagePricing;
