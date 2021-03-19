import React from 'react';
import Modal from 'react-modal';
//images
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

//Styles
import { Form, TransactionTypeContainer } from './styles';

interface IProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

const NewTransactionModal = ({ isOpen, onRequestClose }: IProps) => {
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
			<Form>
				<h2>Description</h2>
				<input placeholder='Title' />
				<input type='number' placeholder='Value' />
				<TransactionTypeContainer>
					<button type='button'>
						<img src={incomeImg} alt='Income' />
					</button>
					<button type='button'>
						<img src={outcomeImg} alt='Expenses' />
					</button>
				</TransactionTypeContainer>
				<input placeholder='Category' />
				<button type='submit'>Add new transaction</button>
			</Form>
		</Modal>
	);
};

export default NewTransactionModal;
