import React from 'react';
import styles from './Profile.module.scss';
import maleAvatar from '../../assets/avatars/male/man1.png';
import femaleAvatar from '../../assets/avatars/female/woman1.png';
import Button from '../../components/ui/button/Button';
import Backdrop from '../../components/ui/backdrop/Backdrop';

interface Friend {
	name: string;
	status: string;
	gender: 'male' | 'female';
}

const ProfilePage: React.FC = () => {
	const user = {
		name: 'Ivan Petrenko',
		status: 'Life is good',
		email: 'ivan.petrenko@email.com',
	};

	const friends: Friend[] = [
		{ name: 'Olha Tanova', status: 'The weather is great', gender: 'female' },
		{ name: 'Taras Ivanenko', status: 'Just finished reading a book', gender: 'male' },
		{
			name: 'Petro Melnyk',
			status: 'I am going to the mountains, who is coming with me?',
			gender: 'male',
		},
		{ name: 'Iryna Shevchenko', status: 'Working on a project', gender: 'female' },
	];

	const getAvatar = (gender: 'male' | 'female') => {
		return gender === 'female' ? femaleAvatar : maleAvatar;
	};

	return (
		<>
			<Backdrop />
			<div className={styles.profile_container}>
				<div className={styles.profile_inner}>
					<div className={styles.profile_box}>
						<img src={maleAvatar} alt='Default Avatar' className={styles.avatar} />
						<h2 className={styles.name}>{user.name}</h2>
						<p className={styles.status}>{user.status}</p>
						<p className={styles.email}>{user.email}</p>

						<div className={styles.note_box}>
							<p className={styles.note}>
								To change the data, go to the settings page
							</p>
							<Button
								className={styles.settingsButton}
								onClick={() => (window.location.href = '/settings')}
								label='go to settings'
								title='go to settings'
							/>
						</div>
					</div>

					<div className={styles.profile_friends}>
						<h2 className={styles.friendsTitle}>Friends</h2>
						<div className={styles.friendsList}>
							{friends.map((friend, index) => (
								<div key={index} className={styles.friendCard}>
									<img
										src={getAvatar(friend.gender)}
										alt='Friend Avatar'
										className={styles.avatarSmall}
									/>
									<div>
										<h4 className={styles.friendName}>{friend.name}</h4>
										<p className={styles.friendStatus}>{friend.status}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfilePage;
