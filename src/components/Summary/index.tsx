import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { useTransactions } from '../../context/TransactionsContext';
import { TransactionType } from '../../types/transactions';
import { Container } from './styles';

const Summary = () => {
	const { transactions } = useTransactions();

	const summary = transactions.reduce(
		(acc, transaction) => {
			if (transaction.type === TransactionType.Income) {
				acc.income += transaction.amount;
				acc.total += transaction.amount;
			} else {
				acc.outgoing += transaction.amount;
				acc.total -= transaction.amount;
			}
			return acc;
		},
		{
			income: 0,
			outgoing: 0,
			total: 0,
		}
	);
	return (
		<Container>
			<div>
				<header>
					<p>Income</p>
					<img src={income} alt='Income' />
				</header>
				<strong>
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
						currencyDisplay: 'narrowSymbol',
						minimumFractionDigits: 2,
					}).format(summary.income)}
				</strong>
			</div>
			<div>
				<header>
					<p>Outcome</p>
					<img src={outcome} alt='Outcome' />
				</header>
				<strong>
					-
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
						currencyDisplay: 'narrowSymbol',
						minimumFractionDigits: 2,
					}).format(summary.outgoing)}
				</strong>
			</div>
			<div>
				<header>
					<p>Total</p>
					<img src={total} alt='Total' />
				</header>
				<strong>
					{' '}
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
						currencyDisplay: 'narrowSymbol',
						minimumFractionDigits: 2,
					}).format(summary.total)}
				</strong>
			</div>
		</Container>
	);
};

export default Summary;
