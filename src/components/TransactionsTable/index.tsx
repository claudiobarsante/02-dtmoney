import React from 'react';
import { Container } from './styles';

const TransactionsTable = () => {
	return (
		<Container>
			<table>
				<thead>
					<th>Description</th>
					<th>Price</th>
					<th>Category</th>
					<th>Date</th>
				</thead>
				<tbody>
					<tr>
						<td>Desenvolvimento de site</td>
						<td className='income'>R$ 12000</td>
						<td>Venda</td>
						<td>13/04/2021</td>
					</tr>
					<tr>
						<td>Desenvolvimento de site</td>
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
