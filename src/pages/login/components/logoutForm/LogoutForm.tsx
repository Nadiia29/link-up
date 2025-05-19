import React from 'react';
import Button from '../../../../components/ui/button/Button';
import styles from './LogoutForm.module.scss';

interface LogoutFormProps {
	onLogout: () => void;
}

const LogoutForm: React.FC<LogoutFormProps> = ({ onLogout }) => {
	return (
		<div className={styles.logoutButton}>
			<Button className={styles.btn} label='Logout' onClick={onLogout} />
		</div>
	);
};

export default LogoutForm;
