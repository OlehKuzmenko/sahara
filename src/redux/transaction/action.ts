import { createMainTableData } from '@/components/Table/mocked';
import { ITransactionHistory } from '@/interfaces/ITransactionHistory';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '..';

type TransactionHistoryReturned = ITransactionHistory;

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getTransactionHistory = createAsyncThunk(
  'transaction/getTransactionHistory',
  async () => {
    await timeout(3000);
    return createMainTableData(20) as TransactionHistoryReturned[];
  },
  {
    condition: (_, { getState, ...props }) => {
      const { transactionHistory } = getState() as RootState;
      const fetchStatus = transactionHistory.history.status;
      console.log(fetchStatus === 'loading', props);
      if (fetchStatus === 'finished' || fetchStatus === 'loading') {
        // Already fetched or in progress, don't need to re-fetch
        return false;
      }
    },
  }
);
