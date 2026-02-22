import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

const ManageProjects = () => {
    const [projects, setProjects] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        techStack: '',
        image: '',
        liveLink: ''
    });
    const { token } = useAuth();

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await fetch('http://localhost:5001/api/projects');
            const data = await res.json();
            setProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            techStack: formData.techStack.split(',').map(item => item.trim())
        };

        const url = currentProject
            ? `http://localhost:5001/api/projects/${currentProject._id}`
            : 'http://localhost:5001/api/projects';

        const method = currentProject ? 'PUT' : 'POST';

        try {
            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                fetchProjects();
                closeModal();
            }
        } catch (error) {
            console.error('Error saving project:', error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this project?')) return;

        try {
            const res = await fetch(`http://localhost:5001/api/projects/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.ok) {
                fetchProjects();
            }
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    const openModal = (project = null) => {
        if (project) {
            setCurrentProject(project);
            setFormData({
                title: project.title,
                category: project.category,
                description: project.description,
                techStack: project.techStack.join(', '),
                image: project.image,
                liveLink: project.liveLink || ''
            });
        } else {
            setCurrentProject(null);
            setFormData({ title: '', category: '', description: '', techStack: '', image: '', liveLink: '' });
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentProject(null);
    };

    return (
        <div className="bg-[#111] p-6 rounded-xl border border-white/5">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Manage Projects</h3>
                <button
                    onClick={() => openModal()}
                    className="flex items-center gap-2 bg-brand-green text-black px-4 py-2 rounded-lg font-medium hover:brightness-110 transition-all"
                >
                    <Plus size={18} /> Add Project
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-white/10 text-[#888] text-sm">
                            <th className="pb-3 font-medium">Title</th>
                            <th className="pb-3 font-medium">Category</th>
                            <th className="pb-3 font-medium">Tech Stack</th>
                            <th className="pb-3 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {projects.map(project => (
                            <tr key={project._id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="py-4 font-medium text-white">{project.title}</td>
                                <td className="py-4 text-[#aaa]">{project.category}</td>
                                <td className="py-4 text-[#aaa] truncate max-w-[200px]">{project.techStack.join(', ')}</td>
                                <td className="py-4 text-right flex justify-end gap-3">
                                    <button onClick={() => openModal(project)} className="text-blue-400 hover:text-blue-300">
                                        <Edit2 size={16} />
                                    </button>
                                    <button onClick={() => handleDelete(project._id)} className="text-red-400 hover:text-red-300">
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                    <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 w-full max-w-lg">
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="text-xl font-bold text-white">{currentProject ? 'Edit Project' : 'Add New Project'}</h4>
                            <button onClick={closeModal} className="text-[#888] hover:text-white">
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                            <div>
                                <label className="block text-[#aaa] mb-1">Title</label>
                                <input type="text" name="title" value={formData.title} onChange={handleInputChange} required className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-green" />
                            </div>
                            <div>
                                <label className="block text-[#aaa] mb-1">Category</label>
                                <input type="text" name="category" value={formData.category} onChange={handleInputChange} required className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-green" />
                            </div>
                            <div>
                                <label className="block text-[#aaa] mb-1">Description</label>
                                <textarea name="description" value={formData.description} onChange={handleInputChange} required rows="3" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-green"></textarea>
                            </div>
                            <div>
                                <label className="block text-[#aaa] mb-1">Tech Stack (comma separated)</label>
                                <input type="text" name="techStack" value={formData.techStack} onChange={handleInputChange} required className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-green" />
                            </div>
                            <div>
                                <label className="block text-[#aaa] mb-1">Image URL</label>
                                <input type="text" name="image" value={formData.image} onChange={handleInputChange} required className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-green" />
                            </div>
                            <div>
                                <label className="block text-[#aaa] mb-1">Live Project URL <span className="text-[#555] text-xs">(Optional)</span></label>
                                <input type="url" name="liveLink" value={formData.liveLink} onChange={handleInputChange} placeholder="https://example.com" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-green" />
                            </div>

                            <button type="submit" className="w-full bg-brand-green text-black font-bold py-3 rounded-lg hover:brightness-110 transition-all mt-4">
                                {currentProject ? 'Save Changes' : 'Create Project'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageProjects;
