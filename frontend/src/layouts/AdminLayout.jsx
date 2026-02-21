import { Outlet, Link, useNavigate } from 'react-router-dom';
import { LogOut, LayoutDashboard, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AdminLayout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen flex bg-[#030303] text-white">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 bg-[#050505] hidden md:flex flex-col">
                <div className="p-6 border-b border-white/10">
                    <span className="text-xl font-display font-black tracking-tight text-white block">
                        TECHZA <span className="text-brand-green">ADMIN</span>
                    </span>
                </div>

                <nav className="flex-grow p-4 space-y-2">
                    <Link to="/admin" className="flex items-center gap-3 px-4 py-3 bg-white/5 text-white rounded-lg transition-colors border border-white/5 hover:border-white/10">
                        <LayoutDashboard size={18} className="text-brand-green" />
                        <span className="font-medium text-sm">Dashboard</span>
                    </Link>
                    {/* Add more links here later like Projects Admin */}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-left text-[#888] hover:text-[#FF5F56] transition-colors rounded-lg hover:bg-white/5"
                    >
                        <LogOut size={18} />
                        <span className="font-medium text-sm">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col">
                <header className="h-16 border-b border-white/10 bg-[#050505] flex items-center justify-between px-6 md:px-10">
                    <h2 className="text-lg font-semibold text-white md:hidden">Admin</h2>
                    <div className="md:w-full flex justify-end">
                        <Settings className="text-[#888] hover:text-white cursor-pointer transition-colors" size={20} />
                    </div>
                </header>

                <main className="flex-grow p-6 md:p-10 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
