import React, { ReactNode } from 'react';
import styles from './Form.module.scss';

interface FormProps {
	title?: string;
	className: string;
	children: ReactNode;
}

const Form: React.FC<FormProps> = ({ title, className, children }) => {
	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
	};

	return (
		<form className={`${styles.form} ${className}`} onSubmit={onSubmit}>
			{title && <h2 className={styles.title}>{title}</h2>}
			{children}
		</form>
	);
};

export default Form;
