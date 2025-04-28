import { JSX, useState } from 'react';
import RegisterForm from '../registerForm/RegisterForm';
import ReminderForm from '../reminderForm/ReminderForm';
import LoginForm from '../loginForm/LoginForm';

type FormType = 'login' | 'register' | 'reminder';

export default function AuthForm(): JSX.Element {
	const [formType, setFormType] = useState<FormType>('login');

	switch (formType) {
		case 'register':
			return <RegisterForm />;
		case 'reminder':
			return <ReminderForm />;
		case 'login':
		default:
			return <LoginForm />;
	}
}
