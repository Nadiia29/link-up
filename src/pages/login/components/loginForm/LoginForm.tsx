import { useState } from 'react';
import { FormElSize, ThemeColor } from '../../../../app/types';
import Button from '../../../../components/ui/button/Button';
import Checkbox from '../../../../components/ui/checkbox/checkbox';
import Form from '../../../../components/ui/form/Form';
import Input from '../../../../components/ui/input/Input';
import styles from './loginForm.module.scss';
import { setAuth } from '../../../../utils/auth';

const LoginForm: React.FC = () => {
	const size = FormElSize.LARGE;
	const [loading, setLoading] = useState(false);

	const onSubmit = () => {
		setAuth(true);
		console.log('Submit');
	};

	return (
		<Form title='Enter to LinkUp' className={styles.form}>
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
		</Form>
	);
};
export default LoginForm;
