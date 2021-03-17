import React from 'react';
import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';

const Header = () => {
	return (
		<Container>
			<Content>
				<img src={logo} alt='showing dt money logo' />
				<button type='button'>New Transaction</button>
			</Content>
		</Container>
	);
};

export default Header;
