import ManageProjects from './ManageProjects';
import ManagePricing from './ManagePricing';

const AdminDashboard = () => {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                    <p className="text-[#888]">Welcome back. Here is the overview of your website.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#111] border border-white/5 rounded-xl">
                    <h3 className="text-[#888] text-sm font-medium mb-1">Total Projects</h3>
                    <p className="text-4xl font-bold text-white">6</p>
                </div>
                <div className="p-6 bg-[#111] border border-white/5 rounded-xl">
                    <h3 className="text-[#888] text-sm font-medium mb-1">Unread Inquiries</h3>
                    <p className="text-4xl font-bold text-brand-green">14</p>
                </div>
                <div className="p-6 bg-[#111] border border-white/5 rounded-xl">
                    <h3 className="text-[#888] text-sm font-medium mb-1">Active Services</h3>
                    <p className="text-4xl font-bold text-white">4</p>
                </div>
            </div>

            <ManageProjects />
            <ManagePricing />
        </div>
    );
};

export default AdminDashboard;
