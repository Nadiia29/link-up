import React from 'react';
import myImage from '../../../assets/images/friends.webp';
import styles from './Backdrop.module.scss';

const Backdrop = () => {
	return (
		<div className={styles.backdrop}>
			<img src={myImage} alt='image' />
		</div>
	);
};

export default Backdrop;
