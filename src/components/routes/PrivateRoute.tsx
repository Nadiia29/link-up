import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { checkAuth } from '../../utils/auth';

const PrivateRoute: React.FC = () => {
	const isAuth = checkAuth();

	if (!isAuth) {
		return <Navigate to='/login' replace />;
	}

	return <Outlet />;
};

export default PrivateRoute;
