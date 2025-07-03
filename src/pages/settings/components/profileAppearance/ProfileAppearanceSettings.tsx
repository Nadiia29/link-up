import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProfileAppearanceSettings.module.scss';
import { RootState } from '../../../../store/userStore';
import { updateUser } from '../../../../store/userSlice';

const ProfileAppearanceSettings: React.FC = () => {
	const user = useSelector((state: RootState) => state.user.user);
	const dispatch = useDispatch();

	const [gender, setGender] = useState<'male' | 'female'>('male');
	const [avatar, setAvatar] = useState('');
	const [status, setStatus] = useState('');
	const [cover, setCover] = useState('');

	const maleAvatars = Array.from({ length: 20 }, (_, i) => `/avatars/male/m${i + 1}.png`);

	const femaleAvatars = Array.from({ length: 20 }, (_, i) => `/avatars/female/f${i + 1}.png`);

	const currentAvatars = gender === 'male' ? maleAvatars : femaleAvatars;

	const coverImages = Array.from({ length: 12 }, (_, i) => `/covers/cover${i + 1}.png`);

	useEffect(() => {
		if (user) {
			setAvatar(user.avatar || '');
			setStatus(user.status || '');
			setCover(user.cover || '');
		}
	}, [user]);

	const handleSave = () => {
		if (!user) return;

		dispatch(updateUser({ avatar, status, cover }));
	};

	return (
		<div className={styles.wrapper}>
			<h2>Profile Appearance</h2>

			<div className={styles.field}>
				<label>Status</label>
				<textarea value={status} onChange={(e) => setStatus(e.target.value)} rows={3} />
			</div>

			<div className={styles.field}>
				<label>Gender</label>
				<select
					value={gender}
					onChange={(e) => setGender(e.target.value as 'male' | 'female')}
				>
					<option value='male'>Male</option>
					<option value='female'>Female</option>
				</select>
			</div>

			<div className={styles.field}>
				<label>Select Avatar</label>
				<div className={styles.avatarsGrid}>
					{currentAvatars.map((img) => (
						<img
							key={img}
							src={img}
							alt='avatar'
							className={`${styles.avatarOption} ${
								avatar === img ? styles.selected : ''
							}`}
							onClick={() => setAvatar(img)}
						/>
					))}
				</div>
			</div>

			<div className={styles.field}>
				<label>Select Cover Image</label>
				<div className={styles.coversGrid}>
					{coverImages.map((img) => (
						<img
							key={img}
							src={img}
							alt='cover'
							className={`${styles.coverOption} ${
								cover === img ? styles.selected : ''
							}`}
							onClick={() => setCover(img)}
						/>
					))}
				</div>
			</div>

			<button className={styles.saveBtn} onClick={handleSave}>
				Save Changes
			</button>
		</div>
	);
};

export default ProfileAppearanceSettings;
