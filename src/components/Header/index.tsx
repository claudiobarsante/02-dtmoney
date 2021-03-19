import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';

interface IProps {
	onOpenModal: () => void;
}

const Header = ({ onOpenModal }: IProps) => {
	return (
		<Container>
			<Content>
				<img src={logo} alt='showing dt money logo' />
				<button type='button' onClick={onOpenModal}>
					New Transaction
				</button>
			</Content>
		</Container>
	);
};

export default Header;
