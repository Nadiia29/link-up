import { useState } from 'react';
import { FormElSize, ThemeColor } from '../../../../app/types';
import Input from '../../../../components/ui/input/Input';
import Form from '../../../../components/ui/form/Form';
import styles from './registerForm.module.scss';
import Button from '../../../../components/ui/button/Button';
import { registerUser } from '../../../../services/authService';

interface RegisterFormProps {
	onFormChange: (type: 'login' | 'register' | 'reminder') => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onFormChange }) => {
	const size = FormElSize.LARGE;
	const [loading, setLoading] = useState(false);

	const onSubmit = async (data: Record<string, unknown>) => {
		setLoading(true);
		try {
			const response = await registerUser({
				name: data.name as string,
				email: data.email as string,
				pass: data.pass as string,
			});

			const result = await response.json();

			if (response.ok) {
				alert('Successful registration! Now log in');
				onFormChange('login');
			} else {
				console.error('Registration error:', result.error);
				alert(result.error || 'An error occurred during registration.');
			}
		} catch (error: any) {
			console.error('Error:', error.message);
			alert('Server not responding.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<Form title='Create an account' className={styles.form} onSubmit={onSubmit}>
			<Input size={size} placeholder='name' name='name' color={ThemeColor.BLUE} />

			<Input size={size} placeholder='email' name='email' color={ThemeColor.BLUE} />

			<Input
				size={size}
				placeholder='password'
				type='password'
				name='pass'
				color={ThemeColor.BLUE}
			/>

			<Button
				size={size}
				label='Sign Up'
				title='Sign Up'
				color={ThemeColor.BLUE}
				disabled={loading}
				type='submit'
			/>

			<div className={styles['link-wrapper']}>
				<button className={styles.link} onClick={() => onFormChange('login')}>
					Already have an account? Sign in
				</button>
			</div>
		</Form>
	);
};

export default RegisterForm;
