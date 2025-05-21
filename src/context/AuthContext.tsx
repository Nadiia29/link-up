import React, { createContext, useContext, useState, useEffect } from 'react';
import { checkAuth, setAuth, removeAuth } from '../utils/auth';

interface AuthContextType {
	isAuth: boolean;
	setIsAuth: (value: boolean) => void;
	logout: () => void;
	login: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		setIsAuth(checkAuth());
	}, []);

	const login = () => {
		setIsAuth(true);
		setAuth(true);
	};

	const logout = () => {
		removeAuth();
		setIsAuth(false);
	};

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth, logout, login }}>
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
