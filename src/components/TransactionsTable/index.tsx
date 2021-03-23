//Context
import { useTransactions } from '../../context/TransactionsContext';
//Styles
import { Container } from './styles';

const TransactionsTable = () => {
	const { transactions } = useTransactions();
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Value</th>
						<th>Category</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map(transaction => {
						return (
							<tr key={transaction.id}>
								<td>{transaction.title}</td>
								<td className={transaction.type}>
									{new Intl.NumberFormat('en-US', {
										style: 'currency',
										currency: 'USD',
										currencyDisplay: 'narrowSymbol',
										minimumFractionDigits: 2,
									}).format(transaction.amount)}
								</td>
								<td>{transaction.category}</td>
								<td>
									{new Intl.DateTimeFormat('en-US', {
										month: 'short',
										day: '2-digit',
										year: 'numeric',
									}).format(new Date(transaction.createdAt))}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</Container>
	);
};

export default TransactionsTable;
