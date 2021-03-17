import React from 'react';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { Container } from './styles';

const Summary = () => {
	return (
		<Container>
			<div>
				<header>
					<p>Income</p>
					<img src={income} alt='Income' />
				</header>
				<strong>$1000.00</strong>
			</div>
			<div>
				<header>
					<p>Outcome</p>
					<img src={outcome} alt='Outcome' />
				</header>
				<strong>-$1000.00</strong>
			</div>
			<div>
				<header>
					<p>Total</p>
					<img src={total} alt='Total' />
				</header>
				<strong>$2000.00</strong>
			</div>
		</Container>
	);
};

export default Summary;
