import { ThemeColor } from '../../app/types';
import Button from '../../components/ui/button/Button';
import Input from '../../components/ui/input/Input';

const HomePage = () => {
	const onClick = () => {
		console.log('click');
	};

	return (
		<div>
			HomePage
			<div>
				<Input
					placeholder='Enter the text'
					color={ThemeColor.PURPLE}
					name='test'
					// disabled
					onChange={(e) => console.log(e.target.value)}
				/>
			</div>
			<div>
				<Button onClick={onClick} label='Hello' color={ThemeColor.PURPLE} disabled />
			</div>
		</div>
	);
};

export default HomePage;
