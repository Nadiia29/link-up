import React from 'react';
import styles from './checkbox.module.scss';

interface CheckboxProps {
	name: string;
	checked?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	label?: string;
	disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
	name,
	checked,
	onChange,
	label = 'Remember me',
	disabled = false,
}) => {
	return (
		<label className={`${styles.checkbox} ${disabled ? styles.disabled : ''}`}>
			<input
				type='checkbox'
				name={name}
				checked={checked}
				onChange={onChange}
				disabled={disabled}
			/>
			<span className={styles.customCheckbox} />
			<span className={styles.labelText}>{label}</span>
		</label>
	);
};

export default Checkbox;
