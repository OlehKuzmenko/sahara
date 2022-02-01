import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/redux';

export const selectVesting = (state: RootState): typeof state.vesting =>
  state.vesting;

export const vestingSelectorState = createSelector(
  selectVesting,
  (state) => state
);
export const vestingStatusState = createSelector(
  selectVesting,
  (state) => state.status
);
export const vestingDataState = createSelector(
  selectVesting,
  (state) => state.data
);
export const vestingErrorState = createSelector(
  selectVesting,
  (state) => state.error
);
