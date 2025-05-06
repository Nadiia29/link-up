import React from 'react';
import styles from './Button.module.scss';
import { FormElSize, ThemeColor } from '../../../app/types';

interface ButtonProps {
	label?: string;
	size?: FormElSize;
	color?: ThemeColor;
	disabled?: boolean;
	onClick: (...args: any[]) => void;
	title?: string;
}

const Button: React.FC<ButtonProps> = ({
	label = 'Submit',
	size = FormElSize.DEFAULT,
	color = ThemeColor.PURPLE,
	disabled,
	title = '',
	onClick,
}) => {
	return (
		<button
			className={`${styles.button} ${styles[size]} ${styles[color]}`}
			disabled={disabled}
			title={title}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default Button;
