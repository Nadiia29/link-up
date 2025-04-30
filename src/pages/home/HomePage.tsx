import { ThemeColor } from '../../app/types';
import Button from '../../components/ui/button/Button';

const HomePage = () => {
	const onClick = () => {
		console.log('click');
	};

	return (
		<div>
			HomePage
			<div>
				<Button
					onClick={onClick}
					label='Hello'
					size='large'
					color={ThemeColor.PURPLE}
					disabled
				/>
			</div>
		</div>
	);
};

export default HomePage;
