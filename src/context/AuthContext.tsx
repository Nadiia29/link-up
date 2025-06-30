import React, { createContext, useContext, useState } from 'react';
import { removeAuth } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
	isAuth: boolean;
	setIsAuth: (value: boolean) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);
	const navigate = useNavigate();

	const logout = () => {
		removeAuth();
		setIsAuth(false);
		navigate('/login');
	};

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
};
