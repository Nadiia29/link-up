import { useState } from 'react';
import { FormElSize, ThemeColor } from '../../../../app/types';
import Button from '../../../../components/ui/button/Button';
import Checkbox from '../../../../components/ui/checkbox/checkbox';
import Form from '../../../../components/ui/form/Form';
import Input from '../../../../components/ui/input/Input';
import styles from './loginForm.module.scss';
import { setAuth } from '../../../../utils/auth';

interface LoginFormProps {
	onFormChange: (type: 'login' | 'register' | 'reminder') => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onFormChange }) => {
	const size = FormElSize.LARGE;
	const [loading, setLoading] = useState(false);

	const onSubmit = (data: Record<string, unknown>) => {
		// setAuth(true);
		console.log(data);
	};

	return (
		<Form title='Enter to LinkUp' className={styles.form} onSubmit={onSubmit}>
			<Input
				size={size}
				placeholder='email'
				color={ThemeColor.PURPLE}
				name='login'
				onChange={(e) => console.log(e.target.value)}
			/>

			<Input
				size={size}
				placeholder='password'
				type='password'
				color={ThemeColor.PURPLE}
				name='password'
				onChange={(e) => console.log(e.target.value)}
			/>

			<Checkbox
				name='remember'
				label='Remember me'
				onChange={(e) => console.log(e.target.checked)}
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
