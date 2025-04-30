import styles from './loginPage.module.scss';
import { setAuth } from '../../utils/auth';

const LoginPage: React.FC = () => {
	const handleLogin = () => {
		setAuth(true);
	};

	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<h2 className={styles.title}>Enter to LinkUp</h2>

				<button className={styles.button} onClick={handleLogin}>
					Log in
				</button>
			</div>
		</div>
	);
};

export default LoginPage;
