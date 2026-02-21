import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // This will be replaced with actual backend call
        try {
            const response = await fetch('http://localhost:5001/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                login(data.token);
                navigate('/admin');
            } else {
                setError(data.message || 'Invalid credentials');
            }
        } catch (err) {
            setError('Server error, please try again later');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#050505] px-6">
            <div className="w-full max-w-md p-8 bg-[#111] border border-white/10 rounded-2xl shadow-xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-display font-black text-white tracking-tight mb-2">
                        Admin <span className="text-brand-green">Portal</span>
                    </h1>
                    <p className="text-[#888] text-sm">Sign in to manage Techza website.</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-lg text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-[#888] mb-2">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/5 rounded-lg text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                            placeholder="admin@techza.in"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#888] mb-2">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/5 rounded-lg text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-brand-green text-[#050505] font-bold py-3.5 rounded-lg hover:brightness-110 transition-all mt-4"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
