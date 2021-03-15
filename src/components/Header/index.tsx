import React from 'react';
import { Container } from './styles';
import logo from '../../assets/logo.svg';

const Header = () => {
	return (
		<Container>
			<img src={logo} alt='showing dt money logo' />
			<button type='button'>New Transaction</button>
		</Container>
	);
};

export default Header;
