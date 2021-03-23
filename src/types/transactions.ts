export enum TransactionType {
	Income = 'Income',
	Outgoing = 'Outgoing',
}

export type Transaction = {
	id: number;
	title: string;
	type: TransactionType.Income | TransactionType.Outgoing;
	amount: number;
	category: string;
	createdAt: string;
};
