import React, { useState } from 'react';
import styles from './Settings.module.scss';
import AccountSettings from './components/personalInfo/PersonalInfoSettings';
import ProfileSettings from './components/profileAppearance/ProfileAppearanceSettings';
import InterfaceSettings from './components/colorTheme/ColorThemeSettings';

const Settings: React.FC = () => {
	const [activeTab, setActiveTab] = useState('account');

	return (
		<div className={styles.settingsWrapper}>
			<h1>Settings</h1>
			<div className={styles.settingsContainer}>
				<nav className={styles.sidebar}>
					<button
						className={activeTab === 'account' ? styles.active : ''}
						onClick={() => setActiveTab('account')}
					>
						Personal Info
					</button>
					<button
						className={activeTab === 'profile' ? styles.active : ''}
						onClick={() => setActiveTab('profile')}
					>
						Profile Appearance
					</button>
					<button
						className={activeTab === 'interface' ? styles.active : ''}
						onClick={() => setActiveTab('interface')}
					>
						Color Theme
					</button>
				</nav>

				<section className={styles.content}>
					{activeTab === 'account' && <AccountSettings />}
					{activeTab === 'profile' && <ProfileSettings />}
					{activeTab === 'interface' && <InterfaceSettings />}
				</section>
			</div>
		</div>
	);
};

export default Settings;
