import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Providers */
import { AuthProvider } from './context/AuthContext';

/* Layouts */
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';

/* Components */
import ScrollToTop from './components/ScrollToTop';

/* Public Pages */
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

/* Admin Pages */
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';

function App() {
  return (
    <Router basename="/Techza">
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          {/* Public Website Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          {/* Admin Login Route */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<AdminDashboard />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
