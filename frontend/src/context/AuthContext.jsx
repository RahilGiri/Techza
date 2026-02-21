import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [token, setTokenState] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('adminToken');
        if (storedToken) {
            setTokenState(storedToken);
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const login = (newToken) => {
        localStorage.setItem('adminToken', newToken);
        setTokenState(newToken);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('adminToken');
        setTokenState(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
