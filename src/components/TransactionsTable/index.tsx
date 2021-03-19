import React, { useEffect } from 'react';
import { Container } from './styles';

const TransactionsTable = () => {
	useEffect(() => {
		fetch('http://localhost:3000/api/transactions')
			.then(response => response.json())
			.then(data => console.log(data));
	});
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Description</th>
						<th>Price</th>
						<th>Category</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Desenvolvimento de site</td>
						<td className='income'>R$ 12000</td>
						<td>Venda</td>
						<td>13/04/2021</td>
					</tr>
					<tr>
						<td>Desenvolvimento de siteyanr</td>
						<td className='outcome'>-R$ 12000</td>
						<td>Venda</td>
						<td>13/04/2021</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
};

export default TransactionsTable;
