import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { checkAuth } from '../../utils/auth';

const AuthGuard: React.FC = () => {
	const isAuth = checkAuth();

	if (!isAuth) {
		return <Navigate to='/login' replace />;
	}

	return <Outlet />;
};

export default AuthGuard;
