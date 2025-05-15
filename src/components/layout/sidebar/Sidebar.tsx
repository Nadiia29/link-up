import React from 'react';
import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
	const links = [
		{ path: '/', label: 'Home' },
		{ path: '/profile', label: 'Profile' },
	];

	return (
		<nav className={styles.nav}>
			<ul>
				{links.map((link) => (
					<li key={link.path} className={styles.link}>
						<NavLink
							to={link.path}
							className={({ isActive }) => (isActive ? styles.active : '')}
						>
							{link.label}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Sidebar;
