import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
	const [open, setOpen] = useState(false);

	const links = [
		{ path: '/', label: 'Home' },
		{ path: '/profile', label: 'Profile' },
	];

	const toggleSidebar = () => setOpen(!open);

	return (
		<>
			<button className={styles.burger} onClick={toggleSidebar}>
				<span />
				<span />
				<span />
			</button>

			<nav className={`${styles.nav} ${open ? styles.open : ''}`}>
				<ul className={styles.menu}>
					{links.map((link) => (
						<li key={link.path} className={styles.link}>
							<NavLink
								to={link.path}
								className={({ isActive }) => (isActive ? styles.active : '')}
								onClick={() => setOpen(false)}
							>
								{link.label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default Sidebar;
