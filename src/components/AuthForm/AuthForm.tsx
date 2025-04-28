import { JSX, useState } from 'react';
import RegisterForm from './RegisterForm';
import ReminderForm from './ReminderForm';
import LoginForm from './LoginForm';

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
