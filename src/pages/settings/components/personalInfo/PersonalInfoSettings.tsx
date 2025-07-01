import React, { useEffect, useState } from 'react';
import styles from './PersonalInfo.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/userStore';

const PersonalInfoSettings: React.FC = () => {
	const user = useSelector((state: RootState) => state.user.user);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		if (user) {
			setName(user.name);
			setEmail(user.email);
		}
	}, [user]);

	const handleSave = () => {
		console.log({ name, email, password });
	};

	return (
		<div className={styles.wrapper}>
			<h2>Personal Info</h2>
			<div className={styles.field}>
				<label className={styles.title}>Name</label>
				<input type='text' value={name} onChange={(e) => setName(e.target.value)} />
			</div>
			<div className={styles.field}>
				<label>Email</label>
				<input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div className={styles.field}>
				<label>New Password</label>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button className={styles.saveBtn} onClick={handleSave}>
				Save Changes
			</button>
		</div>
	);
};

export default PersonalInfoSettings;
