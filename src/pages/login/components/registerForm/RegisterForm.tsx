import { useState } from 'react';
import { FormElSize, ThemeColor } from '../../../../app/types';
import Input from '../../../../components/ui/input/Input';
import Form from '../../../../components/ui/form/Form';
import styles from './registerForm.module.scss';
import Button from '../../../../components/ui/button/Button';

interface RegisterFormProps {
	onFormChange: (type: 'login' | 'register' | 'reminder') => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onFormChange }) => {
	const size = FormElSize.LARGE;
	const [loading, setLoading] = useState(false);

	const onSubmit = (data: Record<string, unknown>) => {
		console.log('Registration data:', data);
	};

	return (
		<Form title='Create an account' className={styles.form} onSubmit={onSubmit}>
			<Input size={size} placeholder='name' name='name' color={ThemeColor.BLUE} />

			<Input size={size} placeholder='email' name='email' color={ThemeColor.BLUE} />

			<Input
				size={size}
				placeholder='password'
				type='password'
				name='password'
				color={ThemeColor.BLUE}
			/>

			<Button
				size={size}
				label='Sign Up'
				title='Sign Up'
				color={ThemeColor.BLUE}
				disabled={loading}
				onClick={() => {}}
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
