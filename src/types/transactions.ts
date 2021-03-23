export type Transaction = {
	id: number;
	title: string;
	type: 'income' | 'outgoing';
	amount: number;
	category: string;
	createdAt: string;
};
