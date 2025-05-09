import { JSX, useState } from 'react';
import RegisterForm from '../registerForm/RegisterForm';
import ReminderForm from '../reminderForm/ReminderForm';
import LoginForm from '../loginForm/LoginForm';

type FormType = 'login' | 'register' | 'reminder';

export default function AuthForm(): JSX.Element {
	const [formType, setFormType] = useState<FormType>('login');

	const formChange = (type: FormType) => {
		setFormType(type);
	};

	switch (formType) {
		case 'register':
			return <RegisterForm onFormChange={formChange} />;
		case 'reminder':
			return <ReminderForm onFormChange={formChange} />;
		case 'login':
		default:
			return <LoginForm onFormChange={formChange} />;
	}
}
