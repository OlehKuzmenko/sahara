import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  connectWallet: boolean;
  changeWallet: boolean;
  logOut: boolean;
  secretKey: boolean;
  FAQ: boolean;
  privacy: boolean;
  terms: boolean;
}

const initialState: ModalState = {
  connectWallet: false,
  changeWallet: false,
  logOut: false,
  secretKey: false,
  FAQ: false,
  privacy: false,
  terms: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openConnectWallet: (state, action: PayloadAction<boolean>) => {
      return { ...initialState, connectWallet: action.payload };
    },
    openChangeWallet: (state, action: PayloadAction<boolean>) => {
      return { ...initialState, changeWallet: action.payload };
    },
    openLogOut: (state, action: PayloadAction<boolean>) => {
      return { ...initialState, logOut: action.payload };
    },
    openSecretKey: (state, action: PayloadAction<boolean>) => {
      return { ...initialState, secretKey: action.payload };
    },
    openFAQ: (state, action: PayloadAction<boolean>) => {
      return { ...initialState, FAQ: action.payload };
    },
    openPrivacy: (state, action: PayloadAction<boolean>) => {
      return { ...initialState, privacy: action.payload };
    },
    openTerms: (state, action: PayloadAction<boolean>) => {
      return { ...initialState, terms: action.payload };
    }
  },
});
export const { openConnectWallet, openChangeWallet, openLogOut, openSecretKey, openFAQ, openPrivacy, openTerms } =
  modalSlice.actions;

export default modalSlice.reducer;
