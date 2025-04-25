import { Route, Routes } from 'react-router-dom';
import Header from '../components/layout/header/Header';
import Sidebar from '../components/layout/sidebar/Sidebar';
import styles from './App.module.scss';
import HomePage from '../pages/login/HomePage';
import LoginPage from '../pages/login/LoginPage';

function App() {
	return (
		<div className={styles.app}>
			<Header />
			<Sidebar />

			<main className={styles.main}>
				<Routes>
					<Route path='/login' element={<LoginPage />} />
					<Route path='/' element={<HomePage />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
