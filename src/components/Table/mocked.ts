import { ITransactionHistory } from '@/interfaces/ITransactionHistory';
import { IVesting } from '@/interfaces/IVesting';
import { TransactionStatus } from '@/interfaces/TransactionsStatus';
import faker from 'faker';

export const createVestingTableData = (number: number): IVesting[] => {
  const dataArr = [];

  for (let i = 0; i < number; i++) {
    // const date = new Date(2009, 10, 10);
    const date = faker.date.between(
      new Date(2009, 1, 1),
      new Date(2009, 12, 31)
    );
    const arrayItem: IVesting = {
      round: Math.random() < 0.5 ? 'Seed' : 'Private Sale A',
      token: 'SHRA',
      cliffPeriod: date.getTime(),
      unlockedToken: faker.datatype.number(),
      totalToken: faker.datatype.number(),
    };

    dataArr.push(arrayItem);
  }
  return dataArr;
};

export const createMainTableData = (number: number): ITransactionHistory[] => {
  const dataArr = [];
  for (let i = 0; i < number; i++) {
    const date = faker.date.between(
      new Date(2020, 12, 12),
      new Date(2021, 10, 10)
    );
    const arrayItem = {
      type: Math.random() < 0.5 ? 'Deposit' : 'Withdrawal',
      date: date.getTime(),
      amount: faker.datatype.number(),
      deposit: faker.datatype.number(),
      tHash: `${faker.datatype.uuid()}`,
      status:
        Math.random() < 0.5
          ? TransactionStatus.SUCCESS
          : TransactionStatus.FAIL,
    };

    dataArr.push(arrayItem);
  }
  return dataArr;
};
