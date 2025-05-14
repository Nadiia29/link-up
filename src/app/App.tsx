import { Route, Routes } from 'react-router-dom';
import Header from '../components/layout/header/Header';
import Sidebar from '../components/layout/sidebar/Sidebar';
import styles from './App.module.scss';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import { useEffect, useState } from 'react';
import { checkAuth } from '../utils/auth';
import AuthGuard from '../guards/authGuard/AuthGuard';
import ProfilePage from '../pages/profile/Profile';

function App() {
	const [isAuth, setIsAuth] = useState(false);

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
					</Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
