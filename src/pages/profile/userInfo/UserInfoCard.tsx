import React from 'react';
import styles from '../Profile.module.scss';
import maleAvatar from '../../../assets/avatars/male/man1.png';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/button/Button';

interface Props {
	name: string;
	status?: string;
	email: string;
	avatar?: string;
}

const UserInfoCard: React.FC<Props> = ({ name, status, email, avatar }) => {
	const navigate = useNavigate();
	return (
		<div className={styles.profile_box}>
			<img src={avatar || maleAvatar} alt='User Avatar' className={styles.avatar} />
			<h2 className={styles.name}>{name}</h2>
			<p className={styles.status}>{status}</p>
			<p className={styles.email}>{email}</p>
			<div className={styles.note_box}>
				<p className={styles.note}>To change the data, go to the settings page</p>
				<Button
					className={styles.settingsButton}
					onClick={() => navigate('/settings')}
					label='go to settings'
					title='go to settings'
				/>
			</div>
		</div>
	);
};

export default UserInfoCard;
