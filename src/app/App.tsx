import { Route, Routes } from 'react-router-dom';
import Header from '../components/layout/header/Header';
import Sidebar from '../components/layout/sidebar/Sidebar';
import styles from './App.module.scss';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import { useEffect, useState } from 'react';
import { checkAuth } from '../utils/auth';
import AuthGuard from '../guards/authGuard/AuthGuard';

function App() {
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		setIsAuth(checkAuth());
	}, []);

	return (
		<div className={styles.app}>
			<Header />
			{/* {isAuth && <Sidebar />} */}
			<Sidebar />

			<main className={styles.main}>
				<Routes>
					{/* <Route path='/login' element={<LoginPage />} /> */}

					<Route path='/' element={<HomePage />} />

					{/* <Route element={<AuthGuard />}>
						<Route path='/' element={<HomePage />} />
					</Route> */}
				</Routes>
			</main>
		</div>
	);
}

export default App;
