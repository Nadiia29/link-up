import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store/userStore';
import { fetchUser } from '../../store/userSlice';

import UserInfoCard from './userInfo/UserInfoCard';
import Backdrop from '../../components/ui/backdrop/Backdrop';
import FriendCard from './friendCard/FriendCard';
import { Friend } from '../../app/types';
import styles from './Profile.module.scss';

const ProfilePage: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { user, status } = useSelector((state: RootState) => state.user);

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

	useEffect(() => {
		if (!user) dispatch(fetchUser());
	}, [dispatch, user]);

	if (status === 'loading') {
		return <div className={styles.loading}>Profile upload...</div>;
	}

	if (!user) {
		return <div className={styles.error}>User not found</div>;
	}

	return (
		<>
			<Backdrop />
			<div className={styles.profile_container}>
				<div className={styles.profile_inner}>
					<UserInfoCard name={user.name} status={user.status} email={user.email} />

					<FriendCard friends={friends} />
				</div>
			</div>
		</>
	);
};

export default ProfilePage;
