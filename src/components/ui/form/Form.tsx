import React, { ReactNode } from 'react';
import styles from './Form.module.scss';

interface FormProps {
	title?: string;
	className: string;
	onSubmit: (data: Record<string, unknown>) => void;
	children: ReactNode;
}

const Form: React.FC<FormProps> = ({ title, className, onSubmit, children }) => {
	const formSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		const form = e.currentTarget;
		const formData = new FormData(form);
		const data: Record<string, FormDataEntryValue> = {};

		for (const [key, value] of formData.entries()) {
			data[key] = value;
		}

		onSubmit(data);
	};

	return (
		<form className={`${styles.form} ${className}`} onSubmit={formSubmit}>
			{title && <h2 className={styles.title}>{title}</h2>}
			{children}
		</form>
	);
};

export default Form;
