import React from 'react';
import styles from './Button.module.scss';
import { FormElSize, ThemeColor } from '../../../app/types';

interface ButtonProps {
	label?: string;
	size?: FormElSize;
	color?: ThemeColor;
	disabled?: boolean;
	onClick: () => void;
	title?: string;
}

const Button: React.FC<ButtonProps> = ({ label, size, color, disabled, title, onClick }) => {
	const buttonLabel = label || 'Submit';
	const buttonSize: FormElSize = size || 'default';
	const buttonColor = color || '';
	const buttonTitle = title || buttonLabel;

	return (
		<button
			className={`${styles.button} ${styles[buttonSize]} ${styles[buttonColor]}`}
			disabled={disabled}
			title={buttonTitle}
			onClick={onClick}
		>
			{buttonLabel}
		</button>
	);
};

export default Button;
