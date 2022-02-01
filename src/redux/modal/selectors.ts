import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/redux';

export const selectModal = (state: RootState): typeof state.modal =>
  state.modal;

export const selectConnectWalletModalState = createSelector(
  selectModal,
  (state) => state.connectWallet
);
export const selectChangeWalletModalState = createSelector(
  selectModal,
  (state) => state.changeWallet
);
export const selectLogOutModalState = createSelector(
  selectModal,
  (state) => state.logOut
);
export const selectChangeSecretKeyModalState = createSelector(
  selectModal,
  (state) => state.secretKey
);

export const selectChangeFAQModalState = createSelector(
  selectModal,
  (state) => state.FAQ
)

export const selectChangePrivacyModalState = createSelector(
  selectModal,
  (state) => state.privacy
)

export const selectChangeTermsModalState = createSelector(
  selectModal,
  (state) => state.terms
)