import { useState } from 'react';
import styles from './homePage.module.scss';
import Button from '../../components/ui/button/Button';
import { FormElSize, ThemeColor } from '../../app/types';
import myImage from './../../assets/images/friends.webp';
import { Navigate } from 'react-router-dom';
import Backdrop from '../../components/ui/backdrop/Backdrop';

const HomePage = () => {
	const [posts, setPosts] = useState([
		{
			id: 1,
			author: 'Olya Ivanenko',
			content: 'The weather is beautiful today  ☀️',
			date: '9 may 2025',
		},
		{
			id: 2,
			author: 'Dmytro Koval',
			content: 'I just finished my pet project!',
			date: '8 may 2025',
		},
	]);

	const [newPost, setNewPost] = useState('');

	return <Navigate to='/profile' />;

	return (
		<div className={styles.homePage}>
			<Backdrop />

			<h2 className={styles.title}>News from friends</h2>

			<div className={styles.createPost}>
				<textarea
					value={newPost}
					onChange={(e) => setNewPost(e.target.value)}
					placeholder="What's new?"
					maxLength={250}
				/>
				<Button
					size={FormElSize.SMALL}
					onClick={() => {}}
					label='add post'
					color={ThemeColor.PURPLE}
				/>
			</div>

			<div className={styles.postFeeds}>
				{posts.map((post) => (
					<div key={post.id} className={styles.postCard}>
						{/* <img src={'/'} alt={post.author} className={styles.postAvatar} /> */}
						<img
							width='50'
							height='50'
							src='https://img.icons8.com/ios/50/name--v1.png'
							alt='name--v1'
						/>

						<div className={styles.postContent}>
							<div className={styles.postMeta}>
								<span className={styles.author}>{post.author}</span> · {post.date}
							</div>

							<p className={styles.postContent}>{post.content}</p>

							{/* <div className={styles.postAction}>
								<Button
									size={FormElSize.SMALL}
									onClick={() => {}}
									label='👍 Like'
									color={ThemeColor.BLUE}
									className={styles.postAction__button}
								></Button>
								<Button
									size={FormElSize.SMALL}
									onClick={() => {}}
									label='💬 Comment'
									color={ThemeColor.BLUE}
									className={styles.postAction__button}
								></Button>
							</div> */}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;
