import { useState } from 'react';
import Modal from 'react-modal';
//Components
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import NewTransactionModal from './components/NewTransactionModal';
//Styles
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
	const [isOpen, setIsOpen] = useState(false);

	function handleOpenModal() {
		setIsOpen(true);
	}

	function handleCloseModal() {
		setIsOpen(false);
	}

	return (
		<>
			<Header onOpenModal={handleOpenModal} />
			<Dashboard />
			<NewTransactionModal isOpen={isOpen} onRequestClose={handleCloseModal} />
			<GlobalStyle />
		</>
	);
}

export default App;
