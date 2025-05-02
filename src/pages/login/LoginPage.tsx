import styles from './loginPage.module.scss';
import AuthForm from './components/authForm/AuthForm';

const LoginPage: React.FC = () => {
	return (
		<div className={styles.page}>
			<AuthForm />
		</div>
	);
};

export default LoginPage;
