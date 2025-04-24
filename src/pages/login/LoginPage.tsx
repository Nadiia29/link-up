import styles from '../../assets/scss/_LoginPage.module.scss';
import { setAuth } from '../../utils/auth';

interface Props {
	onLogin: () => void;
}

const LoginPage: React.FC<Props> = ({ onLogin }) => {
	const handleLogin = () => {
		setAuth(true);
		onLogin();
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
