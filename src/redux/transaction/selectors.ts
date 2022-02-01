import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/redux';

export const selectTransactionHistory = (
  state: RootState
): typeof state.transactionHistory.history => state.transactionHistory.history;

export const transactionHistorySelectorState = createSelector(
  selectTransactionHistory,
  (state) => state
);
export const transactionHistoryStatusState = createSelector(
  selectTransactionHistory,
  (state) => state.status
);
export const transactionHistoryDataState = createSelector(
  selectTransactionHistory,
  (state) => state.data
);
export const transactionHistoryErrorState = createSelector(
  selectTransactionHistory,
  (state) => state.error
);
