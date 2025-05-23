import { useState } from 'react';
import { FormElSize, ThemeColor } from '../../../../app/types';
import Input from '../../../../components/ui/input/Input';
import Form from '../../../../components/ui/form/Form';
import Button from '../../../../components/ui/button/Button';
import styles from './reminderForm.module.scss';

interface ReminderFormProps {
	onFormChange: (type: 'login' | 'register' | 'reminder') => void;
}

const ReminderForm: React.FC<ReminderFormProps> = ({ onFormChange }) => {
	const size = FormElSize.LARGE;
	const [loading, setLoading] = useState(false);

	const onSubmit = (data: Record<string, unknown>) => {
		console.log('Reminder data:', data);
	};

	return (
		<Form title='Find your account' className={styles.form} onSubmit={onSubmit}>
			<div className={styles.text}> Please enter your email to search for your account.</div>

			<Input size={size} placeholder='email' name='email' color={ThemeColor.BLUE} />

			<div className={styles.buttons}>
				<Button
					className={styles.button}
					size={size}
					label='find'
					title='find'
					color={ThemeColor.BLUE}
					disabled={loading}
					onClick={() => {}}
				/>

				<Button
					className={styles.button}
					size={size}
					label='cancel'
					title='cancel'
					color={ThemeColor.PURPLE}
					disabled={loading}
					onClick={() => onFormChange('login')}
				/>
			</div>
		</Form>
	);
};
export default ReminderForm;
