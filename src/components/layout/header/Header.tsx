import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

const Header = () => {
	return (
		<header className={styles.header}>
			<NavLink to={'/'} className={styles.logo}>
				<img src={logo} alt='logo' />
			</NavLink>

			<h2 className={styles.title}>LinkUp</h2>
		</header>
	);
};

export default Header;
