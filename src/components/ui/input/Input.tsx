import React from 'react';
import { FormElSize, ThemeColor } from '../../../app/types';
import styles from './Input.module.scss';

interface InputProps {
	value?: string;
	defaultValue?: string;
	placeholder?: string;
	type?: 'text' | 'email' | 'password' | 'number';
	name: string;
	size?: FormElSize;
	color?: ThemeColor;
	disabled?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
	value,
	defaultValue,
	placeholder,
	type = 'text',
	name,
	size = FormElSize.DEFAULT,
	color = ThemeColor.PURPLE,
	disabled,
	onChange,
}) => {
	return (
		<input
			className={`${styles.input} ${styles[size]} ${styles[color]}`}
			type={type}
			name={name}
			value={value}
			defaultValue={defaultValue}
			placeholder={placeholder}
			disabled={disabled}
			onChange={onChange}
		/>
	);
};

export default Input;
