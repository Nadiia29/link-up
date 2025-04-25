import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../components/layout/header/Header';
import Sidebar from '../components/layout/sidebar/Sidebar';
import styles from './App.module.scss';
import HomePage from '../pages/login/HomePage';
import LoginPage from '../pages/login/LoginPage';
import { useEffect, useState } from 'react';
import { getAuth } from '../utils/auth';

function App() {
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		setIsAuth(getAuth());
	}, []);

	return (
		<div className={styles.app}>
			<Header />
			<Sidebar />

			<main className={styles.main}>
				<Routes>
					<Route
						path='/login'
						element={isAuth ? <Navigate to='/' replace /> : <LoginPage />}
					/>
					<Route
						path='/'
						element={isAuth ? <HomePage /> : <Navigate to='/login' replace />}
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
