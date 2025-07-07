import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/userStore';
import defaultCover from '../../../assets/images/friends.webp';
import styles from './Backdrop.module.scss';

const Backdrop = () => {
	const user = useSelector((state: RootState) => state.user.user);
	const coverImage = user?.cover || defaultCover;

	return (
		<div className={styles.backdrop}>
			<img src={coverImage} alt='Profile cover' />
		</div>
	);
};

export default Backdrop;
