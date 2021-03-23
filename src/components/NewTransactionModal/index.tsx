import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
//images
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
//Styles
import { Form, TransactionTypeContainer, TransactionTypeButton } from './styles';
import { useTransactions } from '../../context/TransactionsContext';
import { TransactionType } from '../../types/transactions';

interface IProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

const NewTransactionModal = ({ isOpen, onRequestClose }: IProps) => {
	const { createTransaction } = useTransactions();

	const [category, setCategory] = useState('');
	const [title, setTitle] = useState('');
	const [type, setType] = useState<TransactionType.Income | TransactionType.Outgoing>(
		TransactionType.Income
	);
	const [amount, setAmount] = useState(0);

	async function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault();

		await createTransaction({
			title,
			category,
			type,
			amount,
		});

		setCategory('');
		setTitle('');
		setType(TransactionType.Income);
		setAmount(0);

		onRequestClose();
	}
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName='react-modal-overlay'
			className='react-modal-content'
		>
			<button type='button' onClick={onRequestClose} className='react-modal-close'>
				<img src={closeImg} alt='Button to close the modal' />
			</button>
			<Form onSubmit={handleCreateNewTransaction}>
				<h2>Description</h2>
				<input onChange={event => setTitle(event.target.value)} placeholder='Title' value={title} />
				<input
					onChange={event => setAmount(Number(event.target.value))}
					type='number'
					placeholder='Value'
					value={amount}
				/>
				<TransactionTypeContainer>
					<TransactionTypeButton
						type='button'
						isActive={type === TransactionType.Income}
						activeColor='green'
						onClick={() => setType(TransactionType.Income)}
					>
						<img src={incomeImg} alt='Income' />
						<span>Income</span>
					</TransactionTypeButton>
					<TransactionTypeButton
						type='button'
						activeColor='red'
						isActive={type === TransactionType.Outgoing}
						onClick={() => setType(TransactionType.Outgoing)}
					>
						<img src={outcomeImg} alt='Expenses' />
						<span>Outgoing</span>
					</TransactionTypeButton>
				</TransactionTypeContainer>
				<input
					onChange={event => setCategory(event.target.value)}
					placeholder='Category'
					value={category}
				/>
				<button type='submit'>Add new transaction</button>
			</Form>
		</Modal>
	);
};

export default NewTransactionModal;
