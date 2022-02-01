import { IUser, UserStatusType, WalletType } from '@/interfaces/IUser';
import { authedUser } from '@mock/user';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthState } from './index';

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type LoginReturned = IUser;

export const changeStateField = createAsyncThunk(
  'auth/changeAccountName',
  async (accountWallet: AuthState['changeStateField']) => {
    await timeout(2000);
    return accountWallet;
  }
);

export const loginUserToWebSite = createAsyncThunk(
  'auth/loginUserToWebSite',
  async (walletType: WalletType) => {
    console.log('LOGIN ACTION: ', { ...authedUser, walletType });
    await timeout(2000);
    return { ...authedUser, walletType } as LoginReturned;
  }
);

export const logoutUserFromWebSite = createAsyncThunk(
  'auth/logoutUserFromWebSite',
  async () => {
    await timeout(2000);
    return {
      accountName: '',
      status: UserStatusType.VISITOR,
    } as LoginReturned;
  }
);
