import React from 'react';
import styles from './Button.module.scss';
import { FormElSize, ThemeColor } from '../../../app/types';

interface ButtonProps {
	label?: string;
	size?: FormElSize;
	color?: ThemeColor;
	disabled?: boolean;
	onClick?: (...args: any[]) => void;
	title?: string;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
	label = 'Submit',
	size = FormElSize.DEFAULT,
	color = ThemeColor.PURPLE,
	disabled,
	title = '',
	onClick,
	className,
	type = 'button',
}) => {
	return (
		<button
			type={type ?? 'button'}
			className={`${styles.button} ${styles[size]} ${styles[color]}  ${className ?? ''}`}
			disabled={disabled}
			title={title}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default Button;
