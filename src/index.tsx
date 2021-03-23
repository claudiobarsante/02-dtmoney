import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';

createServer({
	models: {
		transaction: Model, //transaction is the name of the table and Model is the type
	},
	//to start the database with some data
	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					//transactions is the name of the table + 's'
					id: 1,
					title: 'Fisrt Teste',
					type: 'income',
					amount: 123.45,
					category: 'FreeLance job',
					createdAt: new Date('2021-02-12 09:00:00'),
				},
				{
					id: 2,
					title: 'Rent',
					type: 'outgoing',
					amount: 100,
					category: 'Home expenses',
					createdAt: new Date('2021-02-14 09:00:00'),
				},
			],
		});
	},
	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			return this.schema.all('transaction');
		});

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody);
			return schema.create('transaction', data);
		});
	},
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
