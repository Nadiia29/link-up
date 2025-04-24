import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../components/layout/header/Header';
import Sidebar from '../components/layout/sidebar/Sidebar';
import LoginPage from '../pages/login/LoginPage';
import styles from './App.module.scss';
import HomePage from '../pages/login/HomePage';
import { useState } from 'react';

function App() {
	const [isAuth, setIsAuth] = useState(false);

	const handleLogin = () => {
		setIsAuth(true);
	};

	return (
		<div className={styles.app}>
			<Header />
			{isAuth && <Sidebar />}

			<main className={styles.main}>
				<Routes>
					<Route
						path='/login'
						element={
							isAuth ? (
								<Navigate to='/' replace />
							) : (
								<LoginPage onLogin={handleLogin} />
							)
						}
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
