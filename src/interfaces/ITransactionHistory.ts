import { TransactionStatus } from './TransactionsStatus';

export interface ITransactionHistory {
  type: string;
  date: number;
  amount: number;
  deposit: number;
  tHash: string;
  status: `${TransactionStatus}`;
}
