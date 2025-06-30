import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../components/layout/header/Header';
import Sidebar from '../components/layout/sidebar/Sidebar';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import ProfilePage from '../pages/profile/Profile';
import Settings from '../pages/settings/Settings';

import AuthGuard from '../guards/authGuard/AuthGuard';

import { checkAuth } from '../utils/auth';
import { useAuth } from '../context/AuthContext';
import styles from './App.module.scss';

function App() {
	const { isAuth, setIsAuth } = useAuth();

	useEffect(() => {
		setIsAuth(checkAuth());
	}, [isAuth]);

	return (
		<div className={styles.app}>
			<Header />
			{isAuth && <Sidebar />}

			<main className={styles.main}>
				<Routes>
					<Route path='/login' element={<LoginPage />} />

					<Route element={<AuthGuard />}>
						<Route path='/' element={<HomePage />} />
						<Route path='/profile' element={<ProfilePage />} />
						<Route path='/settings' element={<Settings />} />
					</Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
