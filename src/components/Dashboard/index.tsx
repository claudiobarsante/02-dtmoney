//Components
import Summary from '../Summary';
import TransactionsTable from '../TransactionsTable';
//Styles
import { Container } from './styles';

const Dashboard = () => {
	return (
		<Container>
			<Summary />
			<TransactionsTable />
		</Container>
	);
};

export default Dashboard;
