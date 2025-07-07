import React from 'react';
import Button from '../../../../components/ui/button/Button';
import styles from './logoutForm.module.scss';
import { useAuth } from '../../../../context/AuthContext';

const LogoutForm: React.FC = () => {
    const { logout } = useAuth();

    return (
        <div className={styles.logoutButton}>
            <Button
                className={styles.btn}
                label="Logout"
                onClick={logout}
                type="button"
                title="Log out of your account"
            />
        </div>
    );
};

export default LogoutForm;
