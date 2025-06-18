import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormElSize, ThemeColor } from '../../../../app/types';
import Button from '../../../../components/ui/button/Button';
import Checkbox from '../../../../components/ui/checkbox/checkbox';
import Form from '../../../../components/ui/form/Form';
import Input from '../../../../components/ui/input/Input';
import styles from './loginForm.module.scss';
import { useAuth } from '../../../../context/AuthContext';
import { loginUser } from '../../../../services/loginUser';

interface LoginFormProps {
	onFormChange: (type: 'login' | 'register' | 'reminder') => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onFormChange }) => {
	const { login } = useAuth();
	const navigate = useNavigate();
	const size = FormElSize.LARGE;
	const [loading, setLoading] = useState(false);

	const [formData, setFormData] = useState({ login: '', password: '', remember: false });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const onSubmit = async () => {
		setLoading(true);

		try {
			const res = await loginUser({
				email: formData.login,
				pass: formData.password,
			});

			if (!res.ok) {
				throw new Error('Login failed');
			}

			const result = await res.json();
			login();
			navigate('/');
		} catch (error) {
			console.error(error);
			alert('Invalid credentials');
		} finally {
			setLoading(false);
		}
	};

	return (
		<Form title='Enter to LinkUp' className={styles.form} onSubmit={onSubmit}>
			<Input
				size={size}
				placeholder='email'
				color={ThemeColor.PURPLE}
				name='login'
				value={formData.login}
				onChange={handleChange}
			/>

			<Input
				size={size}
				placeholder='password'
				type='password'
				color={ThemeColor.PURPLE}
				name='password'
				value={formData.password}
				onChange={handleChange}
			/>

			<Checkbox
				name='remember'
				label='Remember me'
				checked={formData.remember}
				onChange={handleChange}
			/>

			<Button
				size={size}
				onClick={onSubmit}
				label='Log in'
				title='Log in'
				color={ThemeColor.PURPLE}
				disabled={loading}
			/>

			<div className={styles['link-wrapper']}>
				<button className={styles.link} onClick={() => onFormChange('reminder')}>
					Forgot password
				</button>
			</div>

			<Button
				size={size}
				onClick={() => onFormChange('register')}
				label='Сreate an account'
				title='Сreate an account'
				color={ThemeColor.BLUE}
				disabled={loading}
			/>
		</Form>
	);
};
export default LoginForm;
