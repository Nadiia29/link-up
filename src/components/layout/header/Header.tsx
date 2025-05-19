import styles from './Header.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import LogoutForm from '../../../pages/login/components/logoutForm/LogoutForm';
import { removeAuth } from '../../../utils/auth';

const Header = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		removeAuth();
		navigate('/login');
	};
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<NavLink to={'/'} className={styles.logo}>
					<img src={logo} alt='logo' />
				</NavLink>

				<h2 className={styles.title}>LinkUp</h2>
			</div>

			<div className={styles.logout}>
				<LogoutForm onLogout={handleLogout} />
			</div>
		</header>
	);
};

export default Header;
