import { ELoading, ELoadingType } from '@/interfaces/ELoading';
import { ITransactionHistory } from '@/interfaces/ITransactionHistory';
import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { getTransactionHistory } from './action';

interface ITransactionHistoryObject {
  data: ITransactionHistory[];
  status: `${ELoadingType}`;
  error: null;
}

interface TransactionState {
  history: ITransactionHistoryObject;
}

const initialState: TransactionState = {
  history: {
    data: [],
    status: 'idle',
    error: null,
  },
};

export const transactionHistory = createSlice({
  name: 'transactionHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTransactionHistory.pending, (state) => {
        state.history.status = ELoading.LOADING;
      })
      .addCase(getTransactionHistory.fulfilled, (state, { payload }) => {
        // Add user to the state array
        state.history.status = ELoading.FINISHED;
        state.history.data = payload;
      })
      .addCase(getTransactionHistory.rejected, (state) => {
        state.history.status = ELoading.ERROR;
      });

    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});
// export const {} = vestingSlice.actions;

export default transactionHistory.reducer;
