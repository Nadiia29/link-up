import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { checkAuth } from '../../utils/auth';
import { useAuth } from '../../context/AuthContext';

const AuthGuard: React.FC = () => {
	const location = useLocation();
	const isAuth = checkAuth();
	const { setIsAuth } = useAuth();

	useEffect(() => {
		setIsAuth(checkAuth());
	}, []);

	if (!isAuth) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	return <Outlet />;
};

export default AuthGuard;
