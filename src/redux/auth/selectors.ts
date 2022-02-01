import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/redux';
import { AuthState } from '.';

export const selectAuth = (state: RootState): AuthState => state.auth;

export const authSelectorState = createSelector(selectAuth, (state) => state);

export const userLoggedStatus = createSelector(
  selectAuth,
  (state) => state.data.status
);
export const authWalletAddress = createSelector(
  selectAuth,
  (state) => state.data.accountName
);
export const authWalletType = createSelector(
  selectAuth,
  (state) => state.data.walletType
);
export const authNetworkType = createSelector(
  selectAuth,
  (state) => state.data.network
);
export const changeStateData = createSelector(
  selectAuth,
  (state) => state.changeStateField
);
