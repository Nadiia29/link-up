import React from 'react';
import styles from '../Profile.module.scss';
import maleAvatar from '../../../assets/avatars/male/man1.png';
import femaleAvatar from '../../../assets/avatars/female/woman1.png';
import { Friend } from '../../../app/types';

interface Props {
	friends: Friend[];
}

const FriendCard: React.FC<Props> = ({ friends }) => {
	const getAvatar = (gender: 'male' | 'female') =>
		gender === 'female' ? femaleAvatar : maleAvatar;

	return (
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
	);
};

export default FriendCard;
